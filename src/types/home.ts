import { FestState } from '../enum.js';
import { CurrentPlayer, Fest_app, Image, NodeListWithCount } from './common.js';
import { Friend } from './friends.js';
import { PlayHistory, XMatchMax } from './history.js';
import { Weapon } from './weapon.js';

/** c0429fd738d829445e994d3370999764 useCurrentFestQuery */
export interface CurrentFestResult {
    currentFest: Fest_app | null;
}

/** f8ae00773cc412a50dd41a6d9a159ddd ConfigureAnalyticsQuery */
export interface ConfigureAnalyticsResult {
    playHistory: PlayHistory_analytics;
}

type PlayHistory_analytics = Pick<PlayHistory, 'udemaeMax' | 'paintPointTotal' | 'gameStartTime' | 'battleNumTotal'> & {
    xMatchMaxAr: Pick<XMatchMax, 'rank'>;
    xMatchMaxCl: Pick<XMatchMax, 'rank'>;
    xMatchMaxGl: Pick<XMatchMax, 'rank'>;
    xMatchMaxLf: Pick<XMatchMax, 'rank'>;
};

/** dba47124d5ec3090c97ba17db5d2f4b3 HomeQuery */
export interface HomeResult {
    currentPlayer: CurrentPlayer_home;
    banners: Banner[];
    /**
     * Only includes up to 3 online friends that have played Splatoon 3, even if they are currently
     * playing a different game. `totalCount` also only counts online friends.
     */
    friends: NodeListWithCount<Friend_home>;
    footerMessages: HomeFooterMessage[];
}

type CurrentPlayer_home = Pick<CurrentPlayer, never> & {
    weapon: Pick<Weapon, 'id' | 'image'>;
};

interface Banner {
    image: Pick<Image, 'url' | 'width' | 'height'>;
    message: string;
    jumpTo: string;
}

type Friend_home = Pick<Friend, 'id' | 'nickname' | 'userIcon'>;

type HomeFooterMessage = FooterBigRunMessage | FooterFestMessage | FooterSeasonMessage | {
    __typename: string & never;
};

interface FooterBigRunMessage {
    __typename: 'FooterBigRunMessage';
    bigRunState: 'SCHEDULED' | unknown;
}
interface FooterFestMessage {
    __typename: 'FooterFestMessage';
    festState: FestState;
    festTitle: string;
}
interface FooterSeasonMessage {
    __typename: 'FooterSeasonMessage';
    seasonName: string;
}

/** 61228d553e7463c203e05e7810dd79a7 SettingQuery */
export interface SettingResult {
    currentPlayer: Pick<CurrentPlayer, 'name' | 'userIcon'>;
}
