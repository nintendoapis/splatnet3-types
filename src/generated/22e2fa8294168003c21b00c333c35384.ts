import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Banner, CurrentPlayer, FooterBigRunMessage, FooterFestMessage, FooterSeasonMessage, Friend, FriendConnection, Image, Weapon } from '../types.js';

/**
 * 22e2fa8294168003c21b00c333c35384 HomeQuery
 *
 * query HomeQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface HomeQuery_22e2fa8 {
    banners: /** Banner */ OperationFieldType<'HomeQuery', 'banners', {
        image: /** Image */ LinkedFieldType<Banner, 'image', {
            height: Image['height'];
            url: Image['url'];
            width: Image['width'];
        }, false>;
        jumpTo: Banner['jumpTo'];
        message: Banner['message'];
    }>[];
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'HomeQuery', 'currentPlayer', {
        weapon: /** Weapon */ LinkedFieldType<CurrentPlayer, 'weapon', {
            id: Weapon['id'];
            image: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
        }, false>;
    }>;
    footerMessages: /** unknown type */ OperationFieldType<'HomeQuery', 'footerMessages', ({
        __typename: string;
    }) & (/** FooterBigRunMessage */ {
        bigRunState: FooterBigRunMessage['state'];
    }) & ({
        __typename: 'FooterBigRunMessage';
    }) & (/** FooterFestMessage */ {
        festState: FooterFestMessage['state'];
        festTitle: FooterFestMessage['festTitle'];
    }) & ({
        __typename: 'FooterFestMessage';
    }) & (/** FooterSeasonMessage */ {
        seasonName: FooterSeasonMessage['seasonName'];
    }) & ({
        __typename: 'FooterSeasonMessage';
    })>[];
    friends: /** FriendConnection */ OperationFieldType<'HomeQuery', 'friends', {
        nodes: /** Friend */ LinkedFieldType<FriendConnection, 'nodes', {
            id: Friend['id'];
            nickname: Friend['nickname'];
            userIcon: /** Image */ LinkedFieldType<Friend, 'userIcon', {
                height: Image['height'];
                url: Image['url'];
                width: Image['width'];
            }, false>;
        }, true>;
        totalCount: FriendConnection['totalCount'];
    }>;
}

export default HomeQuery_22e2fa8;
export { HomeQuery_22e2fa8 };
