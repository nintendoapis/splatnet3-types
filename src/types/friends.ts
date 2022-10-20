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
    isFavorite: boolean;
    isLocked: boolean | null;
    isVcEnabled: boolean | null;
}

/** 7a0e05c28c7d3f7e5a06def87ab8cd2d FriendListQuery */
export interface FriendListResult {
    /** Only includes friends that have played Splatoon 3 */
    friends: NodeList<Friend>;
    currentFest: Fest_app | null;
}

/** c1afed6111887347e244c639e7d35c69 FriendListRefetchQuery */
export type FriendListRefetchResult = FriendListResult;
