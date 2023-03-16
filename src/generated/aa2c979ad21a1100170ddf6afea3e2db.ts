import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, Fest, FestTeam, Friend, FriendConnection, Image, VsMode } from '../types.js';

/**
 * aa2c979ad21a1100170ddf6afea3e2db FriendListRefetchQuery
 *
 * query FriendListRefetchQuery
 *
 * Generated 16/03/2023 from SplatNet 3 3.0.0-6049221b.
 */
interface FriendListRefetchQuery_aa2c979 {
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
            coopRule: Friend['coopRule'];
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

export default FriendListRefetchQuery_aa2c979;
export { FriendListRefetchQuery_aa2c979 };
