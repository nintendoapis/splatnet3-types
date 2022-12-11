import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Banner, CurrentPlayer, FooterBigRunMessage, FooterFestMessage, FooterSeasonMessage, Friend, FriendConnection, Image, Weapon } from '../types.js';

/**
 * dba47124d5ec3090c97ba17db5d2f4b3 HomeQuery
 *
 * query HomeQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-15dc639f.
 */
interface HomeQuery_dba4712 {
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

export default HomeQuery_dba4712;
export { HomeQuery_dba4712 };
