import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, Fest, FestTeam, Friend, FriendConnection, Image, VsMode } from '../../types.js';

/**
 * f0a8ebc384cf5fbac01e8085fbd7c898 FriendListQuery
 *
 * query FriendListQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface FriendListQuery_f0a8ebc {
    currentFest: /** Fest */ OperationFieldType<'FriendListQuery', 'currentFest', {
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
    friends: /** FriendConnection */ OperationFieldType<'FriendListQuery', 'friends', {
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

export default FriendListQuery_f0a8ebc;
export { FriendListQuery_f0a8ebc };
