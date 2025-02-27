import {Deck} from '../../models/data/deck';
import {EnvironmentDeckDeckGoConfig} from '../../services/core/environment/environment-config';
import {EnvironmentConfigService} from '../../services/core/environment/environment-config.service';

export class QRCodeUtils {

    static getPresentationUrl(deck: Deck): string {
        if (deck && deck.data && deck.data.meta && deck.data.meta.pathname && deck.data.meta.pathname !== '') {
            const config: EnvironmentDeckDeckGoConfig = EnvironmentConfigService.getInstance().get('deckdeckgo');
            return config.presentationUrl + deck.data.meta.pathname;
        }

        return 'https://deckdeckgo.com';
    }

}
