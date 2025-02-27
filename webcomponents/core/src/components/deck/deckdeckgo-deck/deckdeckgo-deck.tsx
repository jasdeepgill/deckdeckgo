import {Component, Element, Listen, Method, Prop, State, Event, EventEmitter, h, Watch} from '@stencil/core';

import {isIOS, unifyEvent, isMobile, isFullscreen, debounce} from '@deckdeckgo/utils';

import {DeckdeckgoDeckDefinition, DeckdeckgoSlideDefinition, DeckdeckgoAttributeDefinition} from '@deckdeckgo/types';

import {DeckdeckgoDeckBackgroundUtils} from '../../utils/deckdeckgo-deck-background-utils';

interface DeltaX {
  slider: HTMLElement
  swipeLeft: boolean;
  deltaX: number;
}

interface PagerColor {
  color: string;
  background: string;
}

@Component({
  tag: 'deckgo-deck',
  styleUrl: 'deckdeckgo-deck.scss',
  shadow: true
})
export class DeckdeckgoDeck {

  @Element() el: HTMLElement;

  @Prop() keyboard: boolean = true;

  @Prop() embedded: boolean = false;

  @Prop() cloneBackground: boolean = true;

  @State()
  private rtl: boolean = false;

  private startX: number = null;
  private deckTranslateX: number = 0;
  private autoSwipeRatio: number = 10;

  private block: boolean = false;

  @State()
  private activeIndex: number = 0;

  @State()
  private length: number = 0;

  @Event() slidesDidLoad: EventEmitter;
  @Event() slideNextDidAnimate: EventEmitter<void>;
  @Event() slidePrevDidAnimate: EventEmitter<void>;
  @Event() slideNextDidChange: EventEmitter<number>;
  @Event() slidePrevDidChange: EventEmitter<number>;
  @Event() slideToChange: EventEmitter<number>;
  @Event() slideDrag: EventEmitter<number>;
  @Event() slideWillChange: EventEmitter<number>;

  private fullscreen: boolean = false;
  private cursorHidden: boolean = false;
  private idleMouseTimer: number;

  @Event() mouseInactivity: EventEmitter<boolean>;

  @Prop() reveal: boolean = true;
  @Prop() revealOnMobile: boolean = false;

  @State()
  private pagerColor: PagerColor;

  async componentWillLoad() {
    await this.initRtl();
  }

  async componentDidLoad() {
    await this.initSlideSize();

    this.initWindowResize();
    this.initKeyboardAssist();
  }

  private initRtl(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (document && document.documentElement) {
        const htmlDir: string = document.documentElement.getAttribute('dir');
        this.rtl = htmlDir && htmlDir === 'rtl';
      }

      resolve();
    });
  }

  private initWindowResize() {
    if (window) {
      window.addEventListener('resize', debounce(async () => {
        await this.initSlideSize();
        await this.slideTo(this.activeIndex);

        const toggleFullscreen: boolean = isFullscreen();
        await this.hideOrClearMouseCursorTimer(toggleFullscreen);
        await this.showHideActionsSlot(toggleFullscreen);
      }, 100));
    }
  }

  @Method()
  initSlideSize(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const slider: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-deck');

      if (!slider) {
        resolve();
        return;
      }

      if (!this.embedded) {
        await this.initSlideSizeStandard(slider);
      } else {
        await this.initSlideSizeEmbedded(slider);
      }

      resolve();
    });
  }

  private initSlideSizeStandard(slider: HTMLElement): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!window || !screen) {
        resolve();
        return;
      }

      if (isIOS()) {
        slider.style.setProperty('--slide-width', `${screen.width > window.innerWidth ? screen.width : window.innerWidth}px`);
      } else {
        slider.style.setProperty('--slide-width', `${window.innerWidth}px`);
      }

      resolve();
    });
  }

  private initSlideSizeEmbedded(slider: HTMLElement): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!slider.offsetParent) {
        resolve();
        return;
      }

      if (slider.offsetParent) {
        if (slider.offsetParent.clientWidth > 0) {
          slider.style.setProperty('--slide-width', '' + slider.offsetParent.clientWidth + 'px');
        }

        if (slider.offsetParent.clientHeight > 0) {
          slider.style.setProperty('--slide-height', '' + slider.offsetParent.clientHeight + 'px');
        }
      }

      resolve();
    });
  }

  private initKeyboardAssist() {
    if (document && this.keyboard) {
      document.addEventListener('keydown', this.keyboardAssist, {passive: true});
    }
  }

  @Method()
  async toggleKeyboardAssist(state: boolean) {
    if (!document) {
      return;
    }

    if (!this.keyboard) {
      return;
    }

    if (state) {
      document.addEventListener('keydown', this.keyboardAssist, {passive: true});
    } else {
      // @ts-ignore
      document.removeEventListener('keydown', this.keyboardAssist, {passive: true});
    }
  }

  private keyboardAssist = async ($event: KeyboardEvent) => {
    if ($event.defaultPrevented) {
      return;
    }

    if (['ArrowLeft', 'k', 'PageUp'].indexOf($event.key) !== -1) {
      await this.slideNextPrev(false, true);
    } else if (['ArrowRight', 'j', 'PageDown'].indexOf($event.key) !== -1) {
      await this.slideNextPrev(true, true);
    }
  };

  /* BEGIN: Handle swipe */

  @Listen('mousedown', {passive: true})
  mousedown($event: MouseEvent) {
    this.start($event);
  }

  @Listen('touchstart', {passive: true})
  touchstart($event: TouchEvent) {
    this.start($event);
  }

  @Listen('mouseup', {passive: true})
  async mouseup($event: MouseEvent) {
    await this.stop($event);
  }

  @Listen('touchend', {passive: true})
  async touchend($event: TouchEvent) {
    await this.stop($event);
  }

  @Listen('mousemove', {passive: true})
  async mousemove($event: MouseEvent) {
    await this.move($event);
  }

  @Listen('touchmove', {passive: true})
  async touchmove($event: TouchEvent) {
    await this.move($event);
  }

  @Listen('dblclick', {passive: true})
  async dblclick() {
    this.startX = null;
  }

  @Listen('contextmenu', {passive: true})
  async contextMenu() {
    this.startX = null;
  }

  @Listen('scrolling')
  scrolling($event: CustomEvent) {
    this.block = $event ? $event.detail : false;
  }

  @Listen('keypress')
  async keypress() {
    await this.clearMouseCursorTimer(true);
  }

  private start(e: Event) {
    this.startX = unifyEvent(e).clientX;
  }

  private async move(e: Event) {
    await this.clearMouseCursorTimer(true);

    if (this.block) {
      return;
    }

    const deltaX: DeltaX = await this.getDeltaX(e);

    if (!deltaX) {
      return;
    }

    const transformX: number = deltaX.swipeLeft ? this.deckTranslateX - deltaX.deltaX : this.deckTranslateX + deltaX.deltaX;

    deltaX.slider.style.setProperty('--transformX', transformX + 'px');
    deltaX.slider.style.setProperty('--transformXDuration', '0ms');

    this.slideDrag.emit(transformX);
  }

  private async stop(e: Event) {
    if (this.block) {
      return;
    }

    const deltaX: DeltaX = await this.getDeltaX(e);

    await this.swipeSlide(deltaX);

    this.startX = null;
  }

  private swipeSlide(deltaX: DeltaX, emitEvent: boolean = true): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (!deltaX || !window) {
        resolve();
        return;
      }

      let couldSwipeLeft: boolean = deltaX.swipeLeft && this.activeIndex < this.length - 1;
      let couldSwipeRight: boolean = !deltaX.swipeLeft && this.activeIndex > 0;

      if (this.rtl) {
        couldSwipeLeft = deltaX.swipeLeft && this.activeIndex > 0;
        couldSwipeRight = !deltaX.swipeLeft && this.activeIndex < this.length - 1;
      }

      if (couldSwipeLeft || couldSwipeRight) {
        const sliderWidth: number = await this.getSliderWidth();

        if (deltaX.deltaX > (sliderWidth / this.autoSwipeRatio)) {
          this.deckTranslateX = deltaX.swipeLeft ? this.deckTranslateX - sliderWidth : this.deckTranslateX + sliderWidth;

          if (this.isNextChange(deltaX.swipeLeft)) {
            this.activeIndex++;

            if (emitEvent) {
              this.slideNextDidChange.emit(this.activeIndex);
            }
          } else {
            this.activeIndex--;

            if (emitEvent) {
              this.slidePrevDidChange.emit(this.activeIndex);
            }
          }
        }
      }

      await this.doSwipeSlide(deltaX.slider);

      // We want to lazy load the next slide images
      await this.lazyLoadContent(this.activeIndex + 1);

      resolve();
    });
  }

  private getSliderWidth(): Promise<number> {
    return new Promise<number>((resolve) => {
      if (!this.embedded) {
        resolve(window.innerWidth);
        return;
      }

      const slider: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-deck');

      if (!slider || !slider.offsetParent || slider.offsetParent.clientWidth <= 0) {
        resolve(window.innerWidth);
        return;
      }

      resolve(slider.offsetParent.clientWidth);
    });
  }

  private isNextChange(swipeLeft: boolean): boolean {
    return (swipeLeft && !this.rtl) || (!swipeLeft && this.rtl);
  }

  private doSwipeSlide(slider: HTMLElement, speed?: number | undefined): Promise<void> {
    return new Promise<void>((resolve) => {
      slider.style.setProperty('--transformX', this.deckTranslateX + 'px');
      slider.style.setProperty('--transformXDuration', '' + (!isNaN(speed) ? speed : 300) + 'ms');

      this.slideWillChange.emit(this.deckTranslateX);

      this.startX = null;

      resolve();
    });
  }

  private getDeltaX(e): Promise<DeltaX> {
    return new Promise<DeltaX>((resolve) => {
      if (!this.startX) {
        resolve(null);
        return;
      }

      const slider: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-deck');

      if (!slider) {
        resolve(null);
        return;
      }

      const currentX: number = unifyEvent(e).clientX;

      if (this.startX === currentX) {
        resolve(null);
        return;
      }

      const swipeLeft: boolean = this.startX > currentX;

      resolve({
        slider: slider,
        swipeLeft: swipeLeft,
        deltaX: swipeLeft ? (this.startX - currentX) : (currentX - this.startX)
      })
    });
  }

  /* END: Handle swipe */

  /* BEGIN: Slide length and active index */

  @Listen('slideDidLoad')
  async slideDidLoad() {
    await this.updateLength();

    await this.afterSlidesDidLoad();
  }

  private async updateLength() {
    const filteredSlides: HTMLElement[] = await this.getDefinedFilteredSlides();
    this.length = filteredSlides ? filteredSlides.length : 0;
  }

  private afterSlidesDidLoad(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const deckDefinition: DeckdeckgoDeckDefinition = await this.getDeckDefinition();

      if (deckDefinition && deckDefinition.slides && deckDefinition.slides.length > 0) {
        this.slidesDidLoad.emit(deckDefinition);

        await this.onAllSlidesDidLoad();
      }

      resolve();
    });
  }

  private onAllSlidesDidLoad(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const filteredSlides: HTMLElement[] = await this.getDefinedFilteredSlides();

      const promises: Promise<void>[] = [];
      promises.push(this.lazyLoadFirstSlides());
      promises.push(DeckdeckgoDeckBackgroundUtils.cloneSlots(this.el, filteredSlides, 'actions'));
      promises.push(DeckdeckgoDeckBackgroundUtils.cloneAndLoadBackground(this.el, filteredSlides, this.cloneBackground));
      promises.push(this.initSlidePagerColor());

      // In standard case, we want to be able to reveal elements or not, as we wish but if we set reveal to false, we want to display everything straight at the begin.
      // Or we display also all reveal elements on mobile devices as there is no keyboard on mobile device to reveal elements
      if (!this.reveal || (!this.revealOnMobile && isMobile())) {
        promises.push(this.revealAllContent());
      }

      await Promise.all(promises);

      resolve();
    });
  }

  @Method()
  getDeckDefinition(): Promise<DeckdeckgoDeckDefinition | null> {
    return new Promise<DeckdeckgoDeckDefinition | null>(async (resolve) => {
      const loadedSlides: NodeListOf<HTMLElement> = this.el.querySelectorAll('.deckgo-slide-container');

      if (!loadedSlides || loadedSlides.length <= 0) {
        resolve(null);
        return;
      }

      const filteredSlides: HTMLElement[] = await this.getDefinedFilteredSlides();

      const definedSlidesLength: number = filteredSlides ? filteredSlides.length : 0;

      // Are all slides loaded?
      if (loadedSlides.length !== definedSlidesLength) {
        resolve(null);
        return;
      }

      const orderedSlidesTagNames: DeckdeckgoSlideDefinition[] = [];

      for (const slide of Array.from(loadedSlides)) {
        const attributes: DeckdeckgoAttributeDefinition[] = await this.getAttributesDefinition(slide.attributes);

        orderedSlidesTagNames.push({
          template: slide.tagName ? slide.tagName.toLowerCase() : undefined,
          content: slide.innerHTML,
          attributes: attributes
        });
      }

      const attributes: DeckdeckgoAttributeDefinition[] = await this.getAttributesDefinition(this.el.attributes);
      const background: HTMLElement = this.el.querySelector(':scope > [slot=\'background\']');

      const deck: DeckdeckgoDeckDefinition = {
        slides: orderedSlidesTagNames,
        attributes: attributes,
        background: background ? background.innerHTML : null,
        reveal: this.reveal,
        revealOnMobile: this.revealOnMobile
      };

      resolve(deck);
    });
  }

  @Method()
  getSlideDefinition(index: number): Promise<DeckdeckgoSlideDefinition | null> {
    return new Promise<DeckdeckgoSlideDefinition | null>(async (resolve) => {
      const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

      if (!slide) {
        resolve(null);
        return;
      }

      const attributes: DeckdeckgoAttributeDefinition[] = await this.getAttributesDefinition(slide.attributes);

      resolve({
        template: slide.tagName ? slide.tagName.toLowerCase() : undefined,
        content: slide.innerHTML,
        attributes: attributes
      });
    });
  }

  private getAttributesDefinition(attributes: NamedNodeMap): Promise<DeckdeckgoAttributeDefinition[] | null> {
    return new Promise<DeckdeckgoAttributeDefinition[] | null>(async (resolve) => {
      if (!attributes || attributes.length <= 0) {
        resolve(null);
        return;
      }

      const results: DeckdeckgoAttributeDefinition[] = [];
      Array.prototype.slice.call(attributes).forEach((attribute: Attr) => {
        if (['id', 'hydrated', 'class', 'contenteditable'].indexOf(attribute.name.toLowerCase()) === -1) {
          let attr: DeckdeckgoAttributeDefinition = {
            name: attribute.name
          };

          if (attribute.value !== undefined) {
            attr.value = `${attribute.value}`;
          }

          results.push(attr);
        }
      });

      resolve(results && results.length > 0 ? results : null);
    });
  }

  private getDefinedFilteredSlides(): Promise<HTMLElement[]> {
    return new Promise<HTMLElement[]>(async (resolve) => {
      const definedSlides: HTMLCollection = this.el.children;
      const filteredSlides: HTMLElement[] = await this.filterSlides(definedSlides);

      resolve(filteredSlides);
    });
  }

  private lazyLoadFirstSlides(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const lazyLoadContentFirstSlide = this.lazyLoadContent(0);
      const lazyLoadContentSecondSlide = this.lazyLoadContent(1);

      await Promise.all([lazyLoadContentFirstSlide, lazyLoadContentSecondSlide]);

      resolve();
    });
  }

  @Method()
  loadBackground(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const filteredSlides: HTMLElement[] = await this.getDefinedFilteredSlides();

      if (!filteredSlides || filteredSlides.length <= 0) {
        resolve();
        return;
      }

      await DeckdeckgoDeckBackgroundUtils.removeSlots(filteredSlides, 'background');

      await DeckdeckgoDeckBackgroundUtils.cloneAndLoadBackground(this.el, filteredSlides, this.cloneBackground);

      resolve();
    });
  }

  // The last children might be slots (background, note or action)
  private filterSlides(definedSlides: HTMLCollection): Promise<HTMLElement[]> {
    return new Promise<HTMLElement[]>((resolve) => {
      if (!definedSlides || definedSlides.length <= 0) {
        resolve(null);
        return;
      }

      const slides: Element[] = Array.from(definedSlides).filter((slide: Element) => {
        return slide.tagName.toLocaleLowerCase().indexOf('deckgo-slide-') > -1
      });

      resolve(slides as HTMLElement[]);
    });
  }

  @Method()
  isBeginning(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolve(this.activeIndex === 0);
    });
  }

  @Method()
  isEnd(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolve(this.activeIndex === this.length - 1);
    });
  }

  @Method()
  getActiveIndex(): Promise<number> {
    return new Promise<number>((resolve) => {
      resolve(this.activeIndex);
    });
  }

  @Method()
  getLength(): Promise<number> {
    return new Promise<number>((resolve) => {
      resolve(this.length);
    });
  }

  /* END: Slide length and active index */

  /* BEGIN: Manual sliding */

  @Method()
  async slideNext(slideAnimation?: boolean, emitEvent?: boolean) {
    await this.slideNextPrev(!this.rtl, slideAnimation, emitEvent);
  }

  @Method()
  async slidePrev(slideAnimation?: boolean, emitEvent?: boolean) {
    await this.slideNextPrev(this.rtl, slideAnimation, emitEvent);
  }

  private async slideNextPrev(swipeLeft: boolean, slideAnimation: boolean = true, emitEvent?: boolean) {
    const slider: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-deck');

    if (!slider || !window) {
      return;
    }

    let couldSwipe: boolean;

    if (!slideAnimation) {
      couldSwipe = true;
    } else {
      couldSwipe = await this.beforeSwipe(this.isNextChange(swipeLeft));
    }

    // We might want first to show hide stuffs in the slide before swiping
    if (couldSwipe) {
      const deltaX: DeltaX = {
        slider: slider,
        swipeLeft: swipeLeft,
        deltaX: window.innerWidth
      };

      await this.swipeSlide(deltaX, emitEvent);

      await this.afterSwipe(swipeLeft);

      await this.initSlidePagerColor();
    } else if (emitEvent) {
      if (swipeLeft) {
        this.slideNextDidAnimate.emit();
      } else {
        this.slidePrevDidAnimate.emit();
      }
    }
  }

  private beforeSwipe(enter: boolean): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (this.activeIndex + 1) + ')');

      if (!slide) {
        // If we find no slide, we are cool something went wrong but the talk/show must go on
        resolve(true);
      } else {
        const result: boolean = await (slide as any).beforeSwipe(enter, this.reveal);
        resolve(result);
      }
    });
  }

  private afterSwipe(swipeLeft: boolean): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const indexPreviousSlide: number = swipeLeft ? this.activeIndex - 1 : this.activeIndex + 1;

      if (isNaN(indexPreviousSlide) || indexPreviousSlide < 0 || indexPreviousSlide > this.length) {
        resolve();
        return;
      }

      const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (indexPreviousSlide + 1) + ')');

      if (!slide) {
        // Might be a swipe after the first or last slide
        resolve();
      } else {
        await (slide as any).afterSwipe();
        resolve();
      }
    });
  }

  private lazyLoadContent(index: number): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

      if (slide) {
        await (slide as any).lazyLoadContent();
      }

      resolve();
    });
  }

  @Method()
  async slideTo(index: number, speed?: number | undefined, emitEvent: boolean = true) {
    if (index > this.length || index < 0) {
      return;
    }

    const slider: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-deck');

    if (!slider || !window) {
      return;
    }

    const slideWidth: number = this.length > 0 && slider.offsetWidth > 0 ? (slider.offsetWidth / this.length) : window.innerWidth;

    this.deckTranslateX = index * slideWidth * (this.rtl ? 1 : -1);
    this.activeIndex = index;

    await this.lazyLoadContent(this.activeIndex);
    await this.doSwipeSlide(slider, speed);

    if (emitEvent) {
      this.slideToChange.emit(index);
    }
  }

  @Method()
  async deleteActiveSlide() {
    if (this.activeIndex > this.length || this.activeIndex < 0) {
      return;
    }

    const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (this.activeIndex + 1) + ')');

    if (!slide) {
      return;
    }

    slide.parentElement.removeChild(slide);

    this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 0;
    this.length = this.length > 0 ? this.length - 1 : 0;

    if (this.length > 0) {
      await this.slideTo(this.activeIndex, 0);
    }
  }

  @Method()
  async blockSlide(block: boolean) {
    this.block = block;

    // If we want to block, then we reset then previous start position as we don't want to start the slide to scroll when the blocking will be resolved
    if (this.block) {
      this.startX = null;
    }
  }

  /* END: Manual sliding */

  /* BEGIN: Full screen */

  @Method()
  toggleFullScreen(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const doc = window.document;
      const docEl = doc.documentElement;

      // @ts-ignore
      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      // @ts-ignore
      const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      // @ts-ignore
      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
      } else {
        cancelFullScreen.call(doc);
      }

      resolve();
    });
  }

  private async hideOrClearMouseCursorTimer(toggleFullscreen: boolean) {
    if (toggleFullscreen) {
      this.fullscreen = true;
      this.hideMouseCursorWithDelay();
    } else {
      await this.clearMouseCursorTimer(false);
      this.fullscreen = false;
    }
  }

  private async clearMouseCursorTimer(hideWithDelay: boolean) {
    if (!this.fullscreen) {
      return;
    }

    if (this.idleMouseTimer > 0) {
      clearTimeout(this.idleMouseTimer);
    }

    await this.showHideMouseCursor(true);

    if (hideWithDelay) {
      this.hideMouseCursorWithDelay();
    }
  }

  private hideMouseCursorWithDelay() {
    if (!this.fullscreen) {
      return;
    }

    this.idleMouseTimer = setTimeout(async () => {
      await this.showHideMouseCursor(false);
    }, 2000);
  }

  private showHideMouseCursor(show: boolean): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.fullscreen) {
        resolve();
        return;
      }

      if (!this.cursorHidden && show) {
        // Cursor already displayed, we don't want to touch the style multiple times if not needed
        resolve();
        return;
      }

      const slider: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-deck');

      if (!slider) {
        resolve();
        return;
      }

      slider.style.setProperty('cursor', show ? 'initial' : 'none');
      this.mouseInactivity.emit(show);

      this.cursorHidden = !show;

      resolve();
    });
  }

  private showHideActionsSlot(toggleFullscreen: boolean): Promise<void> {
    return new Promise<void>((resolve) => {
      const slider: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-deck');

      if (!slider) {
        resolve();
        return;
      }

      if (toggleFullscreen) {
        slider.style.setProperty('--slide-actions-display', 'none');
      } else {
        slider.style.removeProperty('--slide-actions-display');
      }
    });
  }

  /* END: Full screen */

  /* BEGIN: Utils */

  @Method()
  doPrint(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (window) {
        await this.lazyLoadAllContent();

        window.print();
      }

      resolve();
    });
  }

  private lazyLoadAllContent(): Promise<void[]> {
    const promises = [];

    for (let i = 0; i < this.length; i++) {
      promises.push(this.lazyLoadContent(i));
    }

    return Promise.all(promises);
  }

  @Method()
  isMobile(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolve(isMobile());
    });
  }

  /* END: Utils */

  /* BEGIN: Reveal */

  @Watch('reveal')
  async onRevealChange() {
    if (!this.reveal) {
      await this.revealAllContent();
    } else {
      await this.redoRevealContent();
    }
  }

  private revealAllContent(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const promises = [];

      for (let i = 0; i < this.length; i++) {
        promises.push(this.revealContent(i));
      }

      await Promise.all(promises);

      resolve();
    });
  }

  private redoRevealContent(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      // If we switch back to standard mode, reveal previous slide and hide the "reveal" content of this and next slides
      const promises = [];

      for (let i = 0; i < this.length; i++) {
        if (i < this.activeIndex) {
          promises.push(this.revealContent(i));
        } else {
          promises.push(this.hideContent(i));
        }
      }

      await Promise.all(promises);

      resolve();
    });
  }

  private revealContent(index: number): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

      if (slide) {
        await (slide as any).revealContent();
      }

      resolve();
    });
  }

  private hideContent(index: number): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

      if (slide) {
        await (slide as any).hideContent();
      }

      resolve();
    });
  }

  /* END: Reveal */

  /* BEGIN: Pager */

  private initSlidePagerColor(): Promise<void> {
    return new Promise<void>((resolve) => {
      const slide: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (this.activeIndex + 1) + ')');

      if (!slide) {
        this.pagerColor = undefined;

        resolve();
        return;
      }

      // If a pager background or color is explicitely set on the deck, then we don't define automatically a color
      if (slide.parentElement &&
        (slide.parentElement.style.getPropertyValue('--pager-background') !== undefined && slide.parentElement.style.getPropertyValue('--pager-background') !== '' ||
          slide.parentElement.style.getPropertyValue('--pager-color') !== undefined && slide.parentElement.style.getPropertyValue('--pager-color') !== '')) {
        this.pagerColor = undefined;

        resolve();
        return;
      }

      if (slide.style.getPropertyValue('--background') !== undefined && slide.style.getPropertyValue('--background') !== '') {
        this.pagerColor = {
          background: '#fff',
          color: slide.style.getPropertyValue('--background')
        }
      } else if (slide.parentElement && slide.parentElement.style.getPropertyValue('--background') !== undefined && slide.parentElement.style.getPropertyValue('--background') !== '') {
        this.pagerColor = {
          background: '#fff',
          color: slide.parentElement.style.getPropertyValue('--background')
        }
      } else {
        this.pagerColor = undefined;
      }

      resolve();
    });
  }

  /* END: Pager */

  render() {
    return [
      <div class="deckgo-deck">
        <slot/>
        <slot name="actions"></slot>
        <slot name="background"></slot>
      </div>,
      <div class="deckgo-pager">
        {this.renderPager()}
      </div>
    ]
  }

  private renderPager() {
    let pagerStyle = {};

    if (this.pagerColor) {
      pagerStyle = {
        '--pager-background': this.pagerColor.background,
        '--pager-color': this.pagerColor.color
      }
    }

    return <deckgo-pager active-index={this.activeIndex} length={this.length} style={pagerStyle}></deckgo-pager>;
  }

}
