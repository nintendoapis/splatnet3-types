import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, Fest, FestTeam, Friend, FriendConnection, Image, VsMode } from '../../types.js';

/**
 * 411b3fa70a9e0ff083d004b06cc6fad2638a1a24326cbd1fb111e7c72a529931 FriendListRefetchQuery
 *
 * query FriendListRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface FriendListRefetchQuery_411b3fa {
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

export default FriendListRefetchQuery_411b3fa;
export { FriendListRefetchQuery_411b3fa };
