import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, Fest, FestTeam, Friend, FriendConnection, Image, VsMode } from '../../types.js';

/**
 * c1afed6111887347e244c639e7d35c69 FriendListRefetchQuery
 *
 * query FriendListRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5644e7a2.
 */
interface FriendListRefetchQuery_c1afed6 {
    currentFest: /** Fest */ OperationFieldType<'FriendListRefetchQuery', 'currentFest', {
        id: Fest['id'];
        state: Fest['state'];
        teams: /** FestTeam */ LinkedFieldType<Fest, 'teams', {
            id: FestTeam['id'];
            color: /** Color */ LinkedFieldType<FestTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
        }, true>;
    }>;
    friends: /** FriendConnection */ OperationFieldType<'FriendListRefetchQuery', 'friends', {
        nodes: /** Friend */ LinkedFieldType<FriendConnection, 'nodes', {
            id: Friend['id'];
            isFavorite: Friend['isFavorite'];
            isLocked: Friend['isLocked'];
            isVcEnabled: Friend['isVcEnabled'];
            nickname: Friend['nickname'];
            onlineState: Friend['onlineState'];
            playerName: Friend['playerName'];
            userIcon: /** Image */ LinkedFieldType<Friend, 'userIcon', {
                height: Image['height'];
                url: Image['url'];
                width: Image['width'];
            }, false>;
            vsMode: /** VsMode */ LinkedFieldType<Friend, 'vsMode', {
                id: VsMode['id'];
                mode: VsMode['mode'];
                name: VsMode['name'];
            }, false>;
        }, true>;
    }>;
}

export default FriendListRefetchQuery_c1afed6;
export { FriendListRefetchQuery_c1afed6 };
