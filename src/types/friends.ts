import { FriendOnlineState } from '../enum.js';
import { Fest_app, Image, NodeList, VsMode } from './common.js';

export interface Friend {
    id: string;
    onlineState: FriendOnlineState;
    /** Switch user name */
    nickname: string;
    /** Splatoon 3 name, if the user has one set and is currently playing Splatoon 3 */
    playerName: string | null;
    userIcon: Pick<Image, 'url' | 'width' | 'height'>;
    vsMode: Pick<VsMode, 'id' | 'mode' | 'name'> | null;
    coopMode: string | null;
    isFavorite: boolean;
    isLocked: boolean | null;
    isVcEnabled: boolean | null;
}

export type Friend_friendList = Pick<Friend, 'id' | 'onlineState' | 'nickname' | 'playerName' | 'userIcon' | 'vsMode' | 'coopMode' | 'isLocked' | 'isVcEnabled'>;

/** f0a8ebc384cf5fbac01e8085fbd7c898 FriendListQuery */
export interface FriendListResult {
    /** Only includes friends that have played Splatoon 3 */
    friends: NodeList<Friend_friendList>;
    currentFest: Fest_app | null;
}

/** aa2c979ad21a1100170ddf6afea3e2db FriendListRefetchQuery */
export type FriendListRefetchResult = FriendListResult;

/** 7a0e05c28c7d3f7e5a06def87ab8cd2d FriendListQuery */
export interface FriendListResult_7a0e05c {
    /** Only includes friends that have played Splatoon 3 */
    friends: NodeList<Friend_friendList_7a0e05c>;
    currentFest: Fest_app | null;
}

export type Friend_friendList_7a0e05c = Pick<Friend, 'id' | 'onlineState' | 'nickname' | 'playerName' | 'userIcon' | 'vsMode' | 'isFavorite' | 'isLocked' | 'isVcEnabled'>;

/** c1afed6111887347e244c639e7d35c69 FriendListRefetchQuery */
export type FriendListRefetchResult_c1afed6 = FriendListResult_7a0e05c;
