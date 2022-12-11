import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, Fest, FestTeam, Friend, FriendConnection, Image, VsMode } from '../types.js';

/**
 * 7a0e05c28c7d3f7e5a06def87ab8cd2d FriendListQuery
 *
 * query FriendListQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5e2bcdfb.
 */
interface FriendListQuery_7a0e05c {
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

export default FriendListQuery_7a0e05c;
export { FriendListQuery_7a0e05c };
