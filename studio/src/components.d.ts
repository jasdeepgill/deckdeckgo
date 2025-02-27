/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  EventEmitter,
  JSX,
} from '@stencil/core';
import {
  InitStyleColor,
} from './app/utils/editor/color.utils';
import {
  Deck,
} from './app/models/data/deck';
import {
  EditAction,
} from './app/utils/editor/edit-action';
import {
  TargetElement,
} from './app/utils/editor/target-element';
import {
  MoreAction,
} from './app/utils/editor/more-action';
import {
  ItemReorderEventDetail,
} from '@ionic/core';

export namespace Components {
  interface AppAbout {}
  interface AppAddSlideAction {}
  interface AppAvatar {
    'ariaLabel': string;
    'src': string;
  }
  interface AppCode {
    'codeDidChange': EventEmitter<HTMLElement>;
    'selectedElement': HTMLElement;
  }
  interface AppColor {
    'deckOrSlide': boolean;
    'selectedElement': HTMLElement;
  }
  interface AppColorChart {
    'initCurrentColors': () => Promise<void>;
    'moreColors': boolean;
    'selectedElement': HTMLElement;
  }
  interface AppColorDeckSlide {
    'applyToAllDeck': boolean;
    'deckOrSlide': boolean;
    'initCurrentColors': () => Promise<void>;
    'moreColors': boolean;
    'selectedElement': HTMLElement;
  }
  interface AppColorQrcode {
    'initCurrentColors': () => Promise<void>;
    'moreColors': boolean;
    'selectedElement': HTMLElement;
  }
  interface AppContact {}
  interface AppCreateSlide {}
  interface AppCustomData {}
  interface AppCustomImages {}
  interface AppDashboard {}
  interface AppDeckDelete {
    'deckName': string;
    'published': string;
  }
  interface AppDeleteDeckAction {
    'deck': Deck;
  }
  interface AppDeveloper {}
  interface AppEditSlide {
    'chart': boolean;
    'qrCode': boolean;
    'selectedElement': HTMLElement;
    'slideDidChange': EventEmitter<HTMLElement>;
  }
  interface AppEditSlideChart {
    'selectedElement': HTMLElement;
    'slideDidChange': EventEmitter<HTMLElement>;
  }
  interface AppEditSlideQrcode {
    'qrCode': boolean;
    'selectedElement': HTMLElement;
    'slideDidChange': EventEmitter<HTMLElement>;
  }
  interface AppEditor {
    'deckId': string;
  }
  interface AppEditorActions {
    'fullscreen': boolean;
    'hideFooterActions': boolean;
    'slides': JSX.IntrinsicElements[];
  }
  interface AppEditorToolbar {
    'blurSelectedElement': () => Promise<void>;
    'hideToolbar': () => Promise<void>;
    'touch': (element: HTMLElement) => Promise<void>;
    'unSelect': () => Promise<void>;
  }
  interface AppElementDelete {}
  interface AppFaq {}
  interface AppFeed {}
  interface AppFeedCard {
    'compact': boolean;
    'deck': Deck;
  }
  interface AppFeedCardTags {
    'disableRemove': boolean;
    'editable': boolean;
    'tags': string[];
  }
  interface AppFooter {}
  interface AppFullscreenInfo {}
  interface AppGetHelp {}
  interface AppGif {}
  interface AppHelpAction {}
  interface AppHome {}
  interface AppImage {
    'deckOrSlide': boolean;
    'imgDidChange': EventEmitter<HTMLElement>;
    'selectedElement': HTMLElement;
  }
  interface AppImageColumns {
    'imagesEven': (UnsplashPhoto | TenorGif | StorageFile)[];
    'imagesOdd': (UnsplashPhoto | TenorGif | StorageFile)[];
  }
  interface AppLogo {}
  interface AppMenu {}
  interface AppMoreActions {}
  interface AppMoreShareOptions {}
  interface AppNavigation {
    'menuToggle': boolean;
    'presentation': boolean;
    'publish': boolean;
    'user': boolean;
  }
  interface AppNavigationActions {
    'presentation': boolean;
    'publish': boolean;
    'signIn': boolean;
  }
  interface AppNewsletter {}
  interface AppNotes {
    'selectedElement': HTMLElement;
  }
  interface AppOpensource {}
  interface AppPhoto {}
  interface AppPopular {
    'description': boolean;
    'help': boolean;
  }
  interface AppPress {}
  interface AppPrivacy {}
  interface AppPublish {}
  interface AppPublishDone {
    'publishedUrl': string;
  }
  interface AppPublishEdit {}
  interface AppRemote {}
  interface AppRemoteConnect {}
  interface AppReveal {
    'selectedElement': HTMLElement;
  }
  interface AppRoot {}
  interface AppSelectTargetElement {
    'chart': boolean;
    'deckOrSlide': boolean;
    'qrCode': boolean;
  }
  interface AppServices {}
  interface AppSettings {}
  interface AppShareAction {}
  interface AppShareDeck {
    'openShare': () => Promise<void>;
  }
  interface AppShareOptions {}
  interface AppSignin {
    'redirect': string;
    'redirectId': string;
  }
  interface AppSlideNavigate {}
  interface AppSlotType {
    'selectedElement': HTMLElement;
  }
  interface AppTeam {}
  interface AppTerms {}
  interface AppUserDelete {
    'username': string;
  }
  interface AppUserInfo {
    'avatarColSize': number;
  }
  interface AppUserMenu {}
  interface AppYoutube {
    'selectedElement': HTMLElement;
  }
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppAddSlideActionElement extends Components.AppAddSlideAction, HTMLStencilElement {}
  var HTMLAppAddSlideActionElement: {
    prototype: HTMLAppAddSlideActionElement;
    new (): HTMLAppAddSlideActionElement;
  };

  interface HTMLAppAvatarElement extends Components.AppAvatar, HTMLStencilElement {}
  var HTMLAppAvatarElement: {
    prototype: HTMLAppAvatarElement;
    new (): HTMLAppAvatarElement;
  };

  interface HTMLAppCodeElement extends Components.AppCode, HTMLStencilElement {}
  var HTMLAppCodeElement: {
    prototype: HTMLAppCodeElement;
    new (): HTMLAppCodeElement;
  };

  interface HTMLAppColorElement extends Components.AppColor, HTMLStencilElement {}
  var HTMLAppColorElement: {
    prototype: HTMLAppColorElement;
    new (): HTMLAppColorElement;
  };

  interface HTMLAppColorChartElement extends Components.AppColorChart, HTMLStencilElement {}
  var HTMLAppColorChartElement: {
    prototype: HTMLAppColorChartElement;
    new (): HTMLAppColorChartElement;
  };

  interface HTMLAppColorDeckSlideElement extends Components.AppColorDeckSlide, HTMLStencilElement {}
  var HTMLAppColorDeckSlideElement: {
    prototype: HTMLAppColorDeckSlideElement;
    new (): HTMLAppColorDeckSlideElement;
  };

  interface HTMLAppColorQrcodeElement extends Components.AppColorQrcode, HTMLStencilElement {}
  var HTMLAppColorQrcodeElement: {
    prototype: HTMLAppColorQrcodeElement;
    new (): HTMLAppColorQrcodeElement;
  };

  interface HTMLAppContactElement extends Components.AppContact, HTMLStencilElement {}
  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };

  interface HTMLAppCreateSlideElement extends Components.AppCreateSlide, HTMLStencilElement {}
  var HTMLAppCreateSlideElement: {
    prototype: HTMLAppCreateSlideElement;
    new (): HTMLAppCreateSlideElement;
  };

  interface HTMLAppCustomDataElement extends Components.AppCustomData, HTMLStencilElement {}
  var HTMLAppCustomDataElement: {
    prototype: HTMLAppCustomDataElement;
    new (): HTMLAppCustomDataElement;
  };

  interface HTMLAppCustomImagesElement extends Components.AppCustomImages, HTMLStencilElement {}
  var HTMLAppCustomImagesElement: {
    prototype: HTMLAppCustomImagesElement;
    new (): HTMLAppCustomImagesElement;
  };

  interface HTMLAppDashboardElement extends Components.AppDashboard, HTMLStencilElement {}
  var HTMLAppDashboardElement: {
    prototype: HTMLAppDashboardElement;
    new (): HTMLAppDashboardElement;
  };

  interface HTMLAppDeckDeleteElement extends Components.AppDeckDelete, HTMLStencilElement {}
  var HTMLAppDeckDeleteElement: {
    prototype: HTMLAppDeckDeleteElement;
    new (): HTMLAppDeckDeleteElement;
  };

  interface HTMLAppDeleteDeckActionElement extends Components.AppDeleteDeckAction, HTMLStencilElement {}
  var HTMLAppDeleteDeckActionElement: {
    prototype: HTMLAppDeleteDeckActionElement;
    new (): HTMLAppDeleteDeckActionElement;
  };

  interface HTMLAppDeveloperElement extends Components.AppDeveloper, HTMLStencilElement {}
  var HTMLAppDeveloperElement: {
    prototype: HTMLAppDeveloperElement;
    new (): HTMLAppDeveloperElement;
  };

  interface HTMLAppEditSlideElement extends Components.AppEditSlide, HTMLStencilElement {}
  var HTMLAppEditSlideElement: {
    prototype: HTMLAppEditSlideElement;
    new (): HTMLAppEditSlideElement;
  };

  interface HTMLAppEditSlideChartElement extends Components.AppEditSlideChart, HTMLStencilElement {}
  var HTMLAppEditSlideChartElement: {
    prototype: HTMLAppEditSlideChartElement;
    new (): HTMLAppEditSlideChartElement;
  };

  interface HTMLAppEditSlideQrcodeElement extends Components.AppEditSlideQrcode, HTMLStencilElement {}
  var HTMLAppEditSlideQrcodeElement: {
    prototype: HTMLAppEditSlideQrcodeElement;
    new (): HTMLAppEditSlideQrcodeElement;
  };

  interface HTMLAppEditorElement extends Components.AppEditor, HTMLStencilElement {}
  var HTMLAppEditorElement: {
    prototype: HTMLAppEditorElement;
    new (): HTMLAppEditorElement;
  };

  interface HTMLAppEditorActionsElement extends Components.AppEditorActions, HTMLStencilElement {}
  var HTMLAppEditorActionsElement: {
    prototype: HTMLAppEditorActionsElement;
    new (): HTMLAppEditorActionsElement;
  };

  interface HTMLAppEditorToolbarElement extends Components.AppEditorToolbar, HTMLStencilElement {}
  var HTMLAppEditorToolbarElement: {
    prototype: HTMLAppEditorToolbarElement;
    new (): HTMLAppEditorToolbarElement;
  };

  interface HTMLAppElementDeleteElement extends Components.AppElementDelete, HTMLStencilElement {}
  var HTMLAppElementDeleteElement: {
    prototype: HTMLAppElementDeleteElement;
    new (): HTMLAppElementDeleteElement;
  };

  interface HTMLAppFaqElement extends Components.AppFaq, HTMLStencilElement {}
  var HTMLAppFaqElement: {
    prototype: HTMLAppFaqElement;
    new (): HTMLAppFaqElement;
  };

  interface HTMLAppFeedElement extends Components.AppFeed, HTMLStencilElement {}
  var HTMLAppFeedElement: {
    prototype: HTMLAppFeedElement;
    new (): HTMLAppFeedElement;
  };

  interface HTMLAppFeedCardElement extends Components.AppFeedCard, HTMLStencilElement {}
  var HTMLAppFeedCardElement: {
    prototype: HTMLAppFeedCardElement;
    new (): HTMLAppFeedCardElement;
  };

  interface HTMLAppFeedCardTagsElement extends Components.AppFeedCardTags, HTMLStencilElement {}
  var HTMLAppFeedCardTagsElement: {
    prototype: HTMLAppFeedCardTagsElement;
    new (): HTMLAppFeedCardTagsElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppFullscreenInfoElement extends Components.AppFullscreenInfo, HTMLStencilElement {}
  var HTMLAppFullscreenInfoElement: {
    prototype: HTMLAppFullscreenInfoElement;
    new (): HTMLAppFullscreenInfoElement;
  };

  interface HTMLAppGetHelpElement extends Components.AppGetHelp, HTMLStencilElement {}
  var HTMLAppGetHelpElement: {
    prototype: HTMLAppGetHelpElement;
    new (): HTMLAppGetHelpElement;
  };

  interface HTMLAppGifElement extends Components.AppGif, HTMLStencilElement {}
  var HTMLAppGifElement: {
    prototype: HTMLAppGifElement;
    new (): HTMLAppGifElement;
  };

  interface HTMLAppHelpActionElement extends Components.AppHelpAction, HTMLStencilElement {}
  var HTMLAppHelpActionElement: {
    prototype: HTMLAppHelpActionElement;
    new (): HTMLAppHelpActionElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppImageElement extends Components.AppImage, HTMLStencilElement {}
  var HTMLAppImageElement: {
    prototype: HTMLAppImageElement;
    new (): HTMLAppImageElement;
  };

  interface HTMLAppImageColumnsElement extends Components.AppImageColumns, HTMLStencilElement {}
  var HTMLAppImageColumnsElement: {
    prototype: HTMLAppImageColumnsElement;
    new (): HTMLAppImageColumnsElement;
  };

  interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {}
  var HTMLAppLogoElement: {
    prototype: HTMLAppLogoElement;
    new (): HTMLAppLogoElement;
  };

  interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {}
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };

  interface HTMLAppMoreActionsElement extends Components.AppMoreActions, HTMLStencilElement {}
  var HTMLAppMoreActionsElement: {
    prototype: HTMLAppMoreActionsElement;
    new (): HTMLAppMoreActionsElement;
  };

  interface HTMLAppMoreShareOptionsElement extends Components.AppMoreShareOptions, HTMLStencilElement {}
  var HTMLAppMoreShareOptionsElement: {
    prototype: HTMLAppMoreShareOptionsElement;
    new (): HTMLAppMoreShareOptionsElement;
  };

  interface HTMLAppNavigationElement extends Components.AppNavigation, HTMLStencilElement {}
  var HTMLAppNavigationElement: {
    prototype: HTMLAppNavigationElement;
    new (): HTMLAppNavigationElement;
  };

  interface HTMLAppNavigationActionsElement extends Components.AppNavigationActions, HTMLStencilElement {}
  var HTMLAppNavigationActionsElement: {
    prototype: HTMLAppNavigationActionsElement;
    new (): HTMLAppNavigationActionsElement;
  };

  interface HTMLAppNewsletterElement extends Components.AppNewsletter, HTMLStencilElement {}
  var HTMLAppNewsletterElement: {
    prototype: HTMLAppNewsletterElement;
    new (): HTMLAppNewsletterElement;
  };

  interface HTMLAppNotesElement extends Components.AppNotes, HTMLStencilElement {}
  var HTMLAppNotesElement: {
    prototype: HTMLAppNotesElement;
    new (): HTMLAppNotesElement;
  };

  interface HTMLAppOpensourceElement extends Components.AppOpensource, HTMLStencilElement {}
  var HTMLAppOpensourceElement: {
    prototype: HTMLAppOpensourceElement;
    new (): HTMLAppOpensourceElement;
  };

  interface HTMLAppPhotoElement extends Components.AppPhoto, HTMLStencilElement {}
  var HTMLAppPhotoElement: {
    prototype: HTMLAppPhotoElement;
    new (): HTMLAppPhotoElement;
  };

  interface HTMLAppPopularElement extends Components.AppPopular, HTMLStencilElement {}
  var HTMLAppPopularElement: {
    prototype: HTMLAppPopularElement;
    new (): HTMLAppPopularElement;
  };

  interface HTMLAppPressElement extends Components.AppPress, HTMLStencilElement {}
  var HTMLAppPressElement: {
    prototype: HTMLAppPressElement;
    new (): HTMLAppPressElement;
  };

  interface HTMLAppPrivacyElement extends Components.AppPrivacy, HTMLStencilElement {}
  var HTMLAppPrivacyElement: {
    prototype: HTMLAppPrivacyElement;
    new (): HTMLAppPrivacyElement;
  };

  interface HTMLAppPublishElement extends Components.AppPublish, HTMLStencilElement {}
  var HTMLAppPublishElement: {
    prototype: HTMLAppPublishElement;
    new (): HTMLAppPublishElement;
  };

  interface HTMLAppPublishDoneElement extends Components.AppPublishDone, HTMLStencilElement {}
  var HTMLAppPublishDoneElement: {
    prototype: HTMLAppPublishDoneElement;
    new (): HTMLAppPublishDoneElement;
  };

  interface HTMLAppPublishEditElement extends Components.AppPublishEdit, HTMLStencilElement {}
  var HTMLAppPublishEditElement: {
    prototype: HTMLAppPublishEditElement;
    new (): HTMLAppPublishEditElement;
  };

  interface HTMLAppRemoteElement extends Components.AppRemote, HTMLStencilElement {}
  var HTMLAppRemoteElement: {
    prototype: HTMLAppRemoteElement;
    new (): HTMLAppRemoteElement;
  };

  interface HTMLAppRemoteConnectElement extends Components.AppRemoteConnect, HTMLStencilElement {}
  var HTMLAppRemoteConnectElement: {
    prototype: HTMLAppRemoteConnectElement;
    new (): HTMLAppRemoteConnectElement;
  };

  interface HTMLAppRevealElement extends Components.AppReveal, HTMLStencilElement {}
  var HTMLAppRevealElement: {
    prototype: HTMLAppRevealElement;
    new (): HTMLAppRevealElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSelectTargetElementElement extends Components.AppSelectTargetElement, HTMLStencilElement {}
  var HTMLAppSelectTargetElementElement: {
    prototype: HTMLAppSelectTargetElementElement;
    new (): HTMLAppSelectTargetElementElement;
  };

  interface HTMLAppServicesElement extends Components.AppServices, HTMLStencilElement {}
  var HTMLAppServicesElement: {
    prototype: HTMLAppServicesElement;
    new (): HTMLAppServicesElement;
  };

  interface HTMLAppSettingsElement extends Components.AppSettings, HTMLStencilElement {}
  var HTMLAppSettingsElement: {
    prototype: HTMLAppSettingsElement;
    new (): HTMLAppSettingsElement;
  };

  interface HTMLAppShareActionElement extends Components.AppShareAction, HTMLStencilElement {}
  var HTMLAppShareActionElement: {
    prototype: HTMLAppShareActionElement;
    new (): HTMLAppShareActionElement;
  };

  interface HTMLAppShareDeckElement extends Components.AppShareDeck, HTMLStencilElement {}
  var HTMLAppShareDeckElement: {
    prototype: HTMLAppShareDeckElement;
    new (): HTMLAppShareDeckElement;
  };

  interface HTMLAppShareOptionsElement extends Components.AppShareOptions, HTMLStencilElement {}
  var HTMLAppShareOptionsElement: {
    prototype: HTMLAppShareOptionsElement;
    new (): HTMLAppShareOptionsElement;
  };

  interface HTMLAppSigninElement extends Components.AppSignin, HTMLStencilElement {}
  var HTMLAppSigninElement: {
    prototype: HTMLAppSigninElement;
    new (): HTMLAppSigninElement;
  };

  interface HTMLAppSlideNavigateElement extends Components.AppSlideNavigate, HTMLStencilElement {}
  var HTMLAppSlideNavigateElement: {
    prototype: HTMLAppSlideNavigateElement;
    new (): HTMLAppSlideNavigateElement;
  };

  interface HTMLAppSlotTypeElement extends Components.AppSlotType, HTMLStencilElement {}
  var HTMLAppSlotTypeElement: {
    prototype: HTMLAppSlotTypeElement;
    new (): HTMLAppSlotTypeElement;
  };

  interface HTMLAppTeamElement extends Components.AppTeam, HTMLStencilElement {}
  var HTMLAppTeamElement: {
    prototype: HTMLAppTeamElement;
    new (): HTMLAppTeamElement;
  };

  interface HTMLAppTermsElement extends Components.AppTerms, HTMLStencilElement {}
  var HTMLAppTermsElement: {
    prototype: HTMLAppTermsElement;
    new (): HTMLAppTermsElement;
  };

  interface HTMLAppUserDeleteElement extends Components.AppUserDelete, HTMLStencilElement {}
  var HTMLAppUserDeleteElement: {
    prototype: HTMLAppUserDeleteElement;
    new (): HTMLAppUserDeleteElement;
  };

  interface HTMLAppUserInfoElement extends Components.AppUserInfo, HTMLStencilElement {}
  var HTMLAppUserInfoElement: {
    prototype: HTMLAppUserInfoElement;
    new (): HTMLAppUserInfoElement;
  };

  interface HTMLAppUserMenuElement extends Components.AppUserMenu, HTMLStencilElement {}
  var HTMLAppUserMenuElement: {
    prototype: HTMLAppUserMenuElement;
    new (): HTMLAppUserMenuElement;
  };

  interface HTMLAppYoutubeElement extends Components.AppYoutube, HTMLStencilElement {}
  var HTMLAppYoutubeElement: {
    prototype: HTMLAppYoutubeElement;
    new (): HTMLAppYoutubeElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-add-slide-action': HTMLAppAddSlideActionElement;
    'app-avatar': HTMLAppAvatarElement;
    'app-code': HTMLAppCodeElement;
    'app-color': HTMLAppColorElement;
    'app-color-chart': HTMLAppColorChartElement;
    'app-color-deck-slide': HTMLAppColorDeckSlideElement;
    'app-color-qrcode': HTMLAppColorQrcodeElement;
    'app-contact': HTMLAppContactElement;
    'app-create-slide': HTMLAppCreateSlideElement;
    'app-custom-data': HTMLAppCustomDataElement;
    'app-custom-images': HTMLAppCustomImagesElement;
    'app-dashboard': HTMLAppDashboardElement;
    'app-deck-delete': HTMLAppDeckDeleteElement;
    'app-delete-deck-action': HTMLAppDeleteDeckActionElement;
    'app-developer': HTMLAppDeveloperElement;
    'app-edit-slide': HTMLAppEditSlideElement;
    'app-edit-slide-chart': HTMLAppEditSlideChartElement;
    'app-edit-slide-qrcode': HTMLAppEditSlideQrcodeElement;
    'app-editor': HTMLAppEditorElement;
    'app-editor-actions': HTMLAppEditorActionsElement;
    'app-editor-toolbar': HTMLAppEditorToolbarElement;
    'app-element-delete': HTMLAppElementDeleteElement;
    'app-faq': HTMLAppFaqElement;
    'app-feed': HTMLAppFeedElement;
    'app-feed-card': HTMLAppFeedCardElement;
    'app-feed-card-tags': HTMLAppFeedCardTagsElement;
    'app-footer': HTMLAppFooterElement;
    'app-fullscreen-info': HTMLAppFullscreenInfoElement;
    'app-get-help': HTMLAppGetHelpElement;
    'app-gif': HTMLAppGifElement;
    'app-help-action': HTMLAppHelpActionElement;
    'app-home': HTMLAppHomeElement;
    'app-image': HTMLAppImageElement;
    'app-image-columns': HTMLAppImageColumnsElement;
    'app-logo': HTMLAppLogoElement;
    'app-menu': HTMLAppMenuElement;
    'app-more-actions': HTMLAppMoreActionsElement;
    'app-more-share-options': HTMLAppMoreShareOptionsElement;
    'app-navigation': HTMLAppNavigationElement;
    'app-navigation-actions': HTMLAppNavigationActionsElement;
    'app-newsletter': HTMLAppNewsletterElement;
    'app-notes': HTMLAppNotesElement;
    'app-opensource': HTMLAppOpensourceElement;
    'app-photo': HTMLAppPhotoElement;
    'app-popular': HTMLAppPopularElement;
    'app-press': HTMLAppPressElement;
    'app-privacy': HTMLAppPrivacyElement;
    'app-publish': HTMLAppPublishElement;
    'app-publish-done': HTMLAppPublishDoneElement;
    'app-publish-edit': HTMLAppPublishEditElement;
    'app-remote': HTMLAppRemoteElement;
    'app-remote-connect': HTMLAppRemoteConnectElement;
    'app-reveal': HTMLAppRevealElement;
    'app-root': HTMLAppRootElement;
    'app-select-target-element': HTMLAppSelectTargetElementElement;
    'app-services': HTMLAppServicesElement;
    'app-settings': HTMLAppSettingsElement;
    'app-share-action': HTMLAppShareActionElement;
    'app-share-deck': HTMLAppShareDeckElement;
    'app-share-options': HTMLAppShareOptionsElement;
    'app-signin': HTMLAppSigninElement;
    'app-slide-navigate': HTMLAppSlideNavigateElement;
    'app-slot-type': HTMLAppSlotTypeElement;
    'app-team': HTMLAppTeamElement;
    'app-terms': HTMLAppTermsElement;
    'app-user-delete': HTMLAppUserDeleteElement;
    'app-user-info': HTMLAppUserInfoElement;
    'app-user-menu': HTMLAppUserMenuElement;
    'app-youtube': HTMLAppYoutubeElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout {}
  interface AppAddSlideAction {
    'onActionOpenSlideAdd'?: (event: CustomEvent<UIEvent>) => void;
  }
  interface AppAvatar {
    'ariaLabel'?: string;
    'src'?: string;
  }
  interface AppCode {
    'codeDidChange'?: EventEmitter<HTMLElement>;
    'selectedElement'?: HTMLElement;
  }
  interface AppColor {
    'deckOrSlide'?: boolean;
    'onColorDidChange'?: (event: CustomEvent<boolean>) => void;
    'selectedElement'?: HTMLElement;
  }
  interface AppColorChart {
    'moreColors'?: boolean;
    'onColorChange'?: (event: CustomEvent<boolean>) => void;
    'selectedElement'?: HTMLElement;
  }
  interface AppColorDeckSlide {
    'applyToAllDeck'?: boolean;
    'deckOrSlide'?: boolean;
    'moreColors'?: boolean;
    'onColorChange'?: (event: CustomEvent<boolean>) => void;
    'selectedElement'?: HTMLElement;
  }
  interface AppColorQrcode {
    'moreColors'?: boolean;
    'onColorChange'?: (event: CustomEvent<boolean>) => void;
    'selectedElement'?: HTMLElement;
  }
  interface AppContact {}
  interface AppCreateSlide {
    'onSignIn'?: (event: CustomEvent<void>) => void;
  }
  interface AppCustomData {}
  interface AppCustomImages {}
  interface AppDashboard {}
  interface AppDeckDelete {
    'deckName'?: string;
    'published'?: string;
  }
  interface AppDeleteDeckAction {
    'deck'?: Deck;
    'onDeckDeleted'?: (event: CustomEvent<string>) => void;
  }
  interface AppDeveloper {}
  interface AppEditSlide {
    'chart'?: boolean;
    'qrCode'?: boolean;
    'selectedElement'?: HTMLElement;
    'slideDidChange'?: EventEmitter<HTMLElement>;
  }
  interface AppEditSlideChart {
    'onAction'?: (event: CustomEvent<EditAction>) => void;
    'selectedElement'?: HTMLElement;
    'slideDidChange'?: EventEmitter<HTMLElement>;
  }
  interface AppEditSlideQrcode {
    'onAction'?: (event: CustomEvent<EditAction>) => void;
    'qrCode'?: boolean;
    'selectedElement'?: HTMLElement;
    'slideDidChange'?: EventEmitter<HTMLElement>;
  }
  interface AppEditor {
    'deckId'?: string;
  }
  interface AppEditorActions {
    'fullscreen'?: boolean;
    'hideFooterActions'?: boolean;
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'onAddSlide'?: (event: CustomEvent<JSX.IntrinsicElements>) => void;
    'onAnimatePrevNextSlide'?: (event: CustomEvent<boolean>) => void;
    'onOpenShare'?: (event: CustomEvent<void>) => void;
    'onSignIn'?: (event: CustomEvent<void>) => void;
    'onSlideTo'?: (event: CustomEvent<number>) => void;
    'onToggleFullScreen'?: (event: CustomEvent<void>) => void;
    'slides'?: JSX.IntrinsicElements[];
  }
  interface AppEditorToolbar {
    'onBlockSlide'?: (event: CustomEvent<boolean>) => void;
    'onCodeDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onDeckDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onImgDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onNotesDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onSignIn'?: (event: CustomEvent<void>) => void;
    'onSlideCopy'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDelete'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDidChange'?: (event: CustomEvent<HTMLElement>) => void;
  }
  interface AppElementDelete {}
  interface AppFaq {}
  interface AppFeed {}
  interface AppFeedCard {
    'compact'?: boolean;
    'deck'?: Deck;
  }
  interface AppFeedCardTags {
    'disableRemove'?: boolean;
    'editable'?: boolean;
    'onRemoveTag'?: (event: CustomEvent<string>) => void;
    'tags'?: string[];
  }
  interface AppFooter {}
  interface AppFullscreenInfo {}
  interface AppGetHelp {}
  interface AppGif {}
  interface AppHelpAction {}
  interface AppHome {}
  interface AppImage {
    'deckOrSlide'?: boolean;
    'imgDidChange'?: EventEmitter<HTMLElement>;
    'selectedElement'?: HTMLElement;
  }
  interface AppImageColumns {
    'imagesEven'?: (UnsplashPhoto | TenorGif | StorageFile)[];
    'imagesOdd'?: (UnsplashPhoto | TenorGif | StorageFile)[];
    'onSelectImage'?: (event: CustomEvent<UnsplashPhoto | TenorGif | StorageFile>) => void;
  }
  interface AppLogo {}
  interface AppMenu {}
  interface AppMoreActions {}
  interface AppMoreShareOptions {}
  interface AppNavigation {
    'menuToggle'?: boolean;
    'presentation'?: boolean;
    'publish'?: boolean;
    'user'?: boolean;
  }
  interface AppNavigationActions {
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'presentation'?: boolean;
    'publish'?: boolean;
    'signIn'?: boolean;
  }
  interface AppNewsletter {}
  interface AppNotes {
    'selectedElement'?: HTMLElement;
  }
  interface AppOpensource {}
  interface AppPhoto {}
  interface AppPopular {
    'description'?: boolean;
    'help'?: boolean;
  }
  interface AppPress {}
  interface AppPrivacy {}
  interface AppPublish {}
  interface AppPublishDone {
    'onOpenShare'?: (event: CustomEvent<void>) => void;
    'publishedUrl'?: string;
  }
  interface AppPublishEdit {
    'onPublished'?: (event: CustomEvent<string>) => void;
  }
  interface AppRemote {}
  interface AppRemoteConnect {}
  interface AppReveal {
    'selectedElement'?: HTMLElement;
  }
  interface AppRoot {}
  interface AppSelectTargetElement {
    'chart'?: boolean;
    'deckOrSlide'?: boolean;
    'onApplyTo'?: (event: CustomEvent<TargetElement>) => void;
    'qrCode'?: boolean;
  }
  interface AppServices {}
  interface AppSettings {}
  interface AppShareAction {
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'onOpenShare'?: (event: CustomEvent<void>) => void;
  }
  interface AppShareDeck {}
  interface AppShareOptions {
    'onSelectedOption'?: (event: CustomEvent<MoreAction>) => void;
  }
  interface AppSignin {
    'redirect'?: string;
    'redirectId'?: string;
  }
  interface AppSlideNavigate {
    'onReorder'?: (event: CustomEvent<ItemReorderEventDetail>) => void;
  }
  interface AppSlotType {
    'selectedElement'?: HTMLElement;
  }
  interface AppTeam {}
  interface AppTerms {}
  interface AppUserDelete {
    'username'?: string;
  }
  interface AppUserInfo {
    'avatarColSize'?: number;
  }
  interface AppUserMenu {}
  interface AppYoutube {
    'selectedElement'?: HTMLElement;
  }

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-add-slide-action': AppAddSlideAction;
    'app-avatar': AppAvatar;
    'app-code': AppCode;
    'app-color': AppColor;
    'app-color-chart': AppColorChart;
    'app-color-deck-slide': AppColorDeckSlide;
    'app-color-qrcode': AppColorQrcode;
    'app-contact': AppContact;
    'app-create-slide': AppCreateSlide;
    'app-custom-data': AppCustomData;
    'app-custom-images': AppCustomImages;
    'app-dashboard': AppDashboard;
    'app-deck-delete': AppDeckDelete;
    'app-delete-deck-action': AppDeleteDeckAction;
    'app-developer': AppDeveloper;
    'app-edit-slide': AppEditSlide;
    'app-edit-slide-chart': AppEditSlideChart;
    'app-edit-slide-qrcode': AppEditSlideQrcode;
    'app-editor': AppEditor;
    'app-editor-actions': AppEditorActions;
    'app-editor-toolbar': AppEditorToolbar;
    'app-element-delete': AppElementDelete;
    'app-faq': AppFaq;
    'app-feed': AppFeed;
    'app-feed-card': AppFeedCard;
    'app-feed-card-tags': AppFeedCardTags;
    'app-footer': AppFooter;
    'app-fullscreen-info': AppFullscreenInfo;
    'app-get-help': AppGetHelp;
    'app-gif': AppGif;
    'app-help-action': AppHelpAction;
    'app-home': AppHome;
    'app-image': AppImage;
    'app-image-columns': AppImageColumns;
    'app-logo': AppLogo;
    'app-menu': AppMenu;
    'app-more-actions': AppMoreActions;
    'app-more-share-options': AppMoreShareOptions;
    'app-navigation': AppNavigation;
    'app-navigation-actions': AppNavigationActions;
    'app-newsletter': AppNewsletter;
    'app-notes': AppNotes;
    'app-opensource': AppOpensource;
    'app-photo': AppPhoto;
    'app-popular': AppPopular;
    'app-press': AppPress;
    'app-privacy': AppPrivacy;
    'app-publish': AppPublish;
    'app-publish-done': AppPublishDone;
    'app-publish-edit': AppPublishEdit;
    'app-remote': AppRemote;
    'app-remote-connect': AppRemoteConnect;
    'app-reveal': AppReveal;
    'app-root': AppRoot;
    'app-select-target-element': AppSelectTargetElement;
    'app-services': AppServices;
    'app-settings': AppSettings;
    'app-share-action': AppShareAction;
    'app-share-deck': AppShareDeck;
    'app-share-options': AppShareOptions;
    'app-signin': AppSignin;
    'app-slide-navigate': AppSlideNavigate;
    'app-slot-type': AppSlotType;
    'app-team': AppTeam;
    'app-terms': AppTerms;
    'app-user-delete': AppUserDelete;
    'app-user-info': AppUserInfo;
    'app-user-menu': AppUserMenu;
    'app-youtube': AppYoutube;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-about': LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
      'app-add-slide-action': LocalJSX.AppAddSlideAction & JSXBase.HTMLAttributes<HTMLAppAddSlideActionElement>;
      'app-avatar': LocalJSX.AppAvatar & JSXBase.HTMLAttributes<HTMLAppAvatarElement>;
      'app-code': LocalJSX.AppCode & JSXBase.HTMLAttributes<HTMLAppCodeElement>;
      'app-color': LocalJSX.AppColor & JSXBase.HTMLAttributes<HTMLAppColorElement>;
      'app-color-chart': LocalJSX.AppColorChart & JSXBase.HTMLAttributes<HTMLAppColorChartElement>;
      'app-color-deck-slide': LocalJSX.AppColorDeckSlide & JSXBase.HTMLAttributes<HTMLAppColorDeckSlideElement>;
      'app-color-qrcode': LocalJSX.AppColorQrcode & JSXBase.HTMLAttributes<HTMLAppColorQrcodeElement>;
      'app-contact': LocalJSX.AppContact & JSXBase.HTMLAttributes<HTMLAppContactElement>;
      'app-create-slide': LocalJSX.AppCreateSlide & JSXBase.HTMLAttributes<HTMLAppCreateSlideElement>;
      'app-custom-data': LocalJSX.AppCustomData & JSXBase.HTMLAttributes<HTMLAppCustomDataElement>;
      'app-custom-images': LocalJSX.AppCustomImages & JSXBase.HTMLAttributes<HTMLAppCustomImagesElement>;
      'app-dashboard': LocalJSX.AppDashboard & JSXBase.HTMLAttributes<HTMLAppDashboardElement>;
      'app-deck-delete': LocalJSX.AppDeckDelete & JSXBase.HTMLAttributes<HTMLAppDeckDeleteElement>;
      'app-delete-deck-action': LocalJSX.AppDeleteDeckAction & JSXBase.HTMLAttributes<HTMLAppDeleteDeckActionElement>;
      'app-developer': LocalJSX.AppDeveloper & JSXBase.HTMLAttributes<HTMLAppDeveloperElement>;
      'app-edit-slide': LocalJSX.AppEditSlide & JSXBase.HTMLAttributes<HTMLAppEditSlideElement>;
      'app-edit-slide-chart': LocalJSX.AppEditSlideChart & JSXBase.HTMLAttributes<HTMLAppEditSlideChartElement>;
      'app-edit-slide-qrcode': LocalJSX.AppEditSlideQrcode & JSXBase.HTMLAttributes<HTMLAppEditSlideQrcodeElement>;
      'app-editor': LocalJSX.AppEditor & JSXBase.HTMLAttributes<HTMLAppEditorElement>;
      'app-editor-actions': LocalJSX.AppEditorActions & JSXBase.HTMLAttributes<HTMLAppEditorActionsElement>;
      'app-editor-toolbar': LocalJSX.AppEditorToolbar & JSXBase.HTMLAttributes<HTMLAppEditorToolbarElement>;
      'app-element-delete': LocalJSX.AppElementDelete & JSXBase.HTMLAttributes<HTMLAppElementDeleteElement>;
      'app-faq': LocalJSX.AppFaq & JSXBase.HTMLAttributes<HTMLAppFaqElement>;
      'app-feed': LocalJSX.AppFeed & JSXBase.HTMLAttributes<HTMLAppFeedElement>;
      'app-feed-card': LocalJSX.AppFeedCard & JSXBase.HTMLAttributes<HTMLAppFeedCardElement>;
      'app-feed-card-tags': LocalJSX.AppFeedCardTags & JSXBase.HTMLAttributes<HTMLAppFeedCardTagsElement>;
      'app-footer': LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
      'app-fullscreen-info': LocalJSX.AppFullscreenInfo & JSXBase.HTMLAttributes<HTMLAppFullscreenInfoElement>;
      'app-get-help': LocalJSX.AppGetHelp & JSXBase.HTMLAttributes<HTMLAppGetHelpElement>;
      'app-gif': LocalJSX.AppGif & JSXBase.HTMLAttributes<HTMLAppGifElement>;
      'app-help-action': LocalJSX.AppHelpAction & JSXBase.HTMLAttributes<HTMLAppHelpActionElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-image': LocalJSX.AppImage & JSXBase.HTMLAttributes<HTMLAppImageElement>;
      'app-image-columns': LocalJSX.AppImageColumns & JSXBase.HTMLAttributes<HTMLAppImageColumnsElement>;
      'app-logo': LocalJSX.AppLogo & JSXBase.HTMLAttributes<HTMLAppLogoElement>;
      'app-menu': LocalJSX.AppMenu & JSXBase.HTMLAttributes<HTMLAppMenuElement>;
      'app-more-actions': LocalJSX.AppMoreActions & JSXBase.HTMLAttributes<HTMLAppMoreActionsElement>;
      'app-more-share-options': LocalJSX.AppMoreShareOptions & JSXBase.HTMLAttributes<HTMLAppMoreShareOptionsElement>;
      'app-navigation': LocalJSX.AppNavigation & JSXBase.HTMLAttributes<HTMLAppNavigationElement>;
      'app-navigation-actions': LocalJSX.AppNavigationActions & JSXBase.HTMLAttributes<HTMLAppNavigationActionsElement>;
      'app-newsletter': LocalJSX.AppNewsletter & JSXBase.HTMLAttributes<HTMLAppNewsletterElement>;
      'app-notes': LocalJSX.AppNotes & JSXBase.HTMLAttributes<HTMLAppNotesElement>;
      'app-opensource': LocalJSX.AppOpensource & JSXBase.HTMLAttributes<HTMLAppOpensourceElement>;
      'app-photo': LocalJSX.AppPhoto & JSXBase.HTMLAttributes<HTMLAppPhotoElement>;
      'app-popular': LocalJSX.AppPopular & JSXBase.HTMLAttributes<HTMLAppPopularElement>;
      'app-press': LocalJSX.AppPress & JSXBase.HTMLAttributes<HTMLAppPressElement>;
      'app-privacy': LocalJSX.AppPrivacy & JSXBase.HTMLAttributes<HTMLAppPrivacyElement>;
      'app-publish': LocalJSX.AppPublish & JSXBase.HTMLAttributes<HTMLAppPublishElement>;
      'app-publish-done': LocalJSX.AppPublishDone & JSXBase.HTMLAttributes<HTMLAppPublishDoneElement>;
      'app-publish-edit': LocalJSX.AppPublishEdit & JSXBase.HTMLAttributes<HTMLAppPublishEditElement>;
      'app-remote': LocalJSX.AppRemote & JSXBase.HTMLAttributes<HTMLAppRemoteElement>;
      'app-remote-connect': LocalJSX.AppRemoteConnect & JSXBase.HTMLAttributes<HTMLAppRemoteConnectElement>;
      'app-reveal': LocalJSX.AppReveal & JSXBase.HTMLAttributes<HTMLAppRevealElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-select-target-element': LocalJSX.AppSelectTargetElement & JSXBase.HTMLAttributes<HTMLAppSelectTargetElementElement>;
      'app-services': LocalJSX.AppServices & JSXBase.HTMLAttributes<HTMLAppServicesElement>;
      'app-settings': LocalJSX.AppSettings & JSXBase.HTMLAttributes<HTMLAppSettingsElement>;
      'app-share-action': LocalJSX.AppShareAction & JSXBase.HTMLAttributes<HTMLAppShareActionElement>;
      'app-share-deck': LocalJSX.AppShareDeck & JSXBase.HTMLAttributes<HTMLAppShareDeckElement>;
      'app-share-options': LocalJSX.AppShareOptions & JSXBase.HTMLAttributes<HTMLAppShareOptionsElement>;
      'app-signin': LocalJSX.AppSignin & JSXBase.HTMLAttributes<HTMLAppSigninElement>;
      'app-slide-navigate': LocalJSX.AppSlideNavigate & JSXBase.HTMLAttributes<HTMLAppSlideNavigateElement>;
      'app-slot-type': LocalJSX.AppSlotType & JSXBase.HTMLAttributes<HTMLAppSlotTypeElement>;
      'app-team': LocalJSX.AppTeam & JSXBase.HTMLAttributes<HTMLAppTeamElement>;
      'app-terms': LocalJSX.AppTerms & JSXBase.HTMLAttributes<HTMLAppTermsElement>;
      'app-user-delete': LocalJSX.AppUserDelete & JSXBase.HTMLAttributes<HTMLAppUserDeleteElement>;
      'app-user-info': LocalJSX.AppUserInfo & JSXBase.HTMLAttributes<HTMLAppUserInfoElement>;
      'app-user-menu': LocalJSX.AppUserMenu & JSXBase.HTMLAttributes<HTMLAppUserMenuElement>;
      'app-youtube': LocalJSX.AppYoutube & JSXBase.HTMLAttributes<HTMLAppYoutubeElement>;
    }
  }
}


