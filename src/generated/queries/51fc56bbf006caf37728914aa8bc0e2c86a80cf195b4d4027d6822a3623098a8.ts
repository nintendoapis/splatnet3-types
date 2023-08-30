import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Banner, CurrentPlayer, FooterBigRunMessage, FooterFestMessage, FooterLeagueMatchMessage, FooterSeasonMessage, Friend, FriendConnection, Image, Weapon } from '../../types.js';

/**
 * 51fc56bbf006caf37728914aa8bc0e2c86a80cf195b4d4027d6822a3623098a8 HomeQuery
 *
 * query HomeQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface HomeQuery_51fc56b {
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
    }) & (/** FooterLeagueMatchMessage */ {
        leagueMatchName: FooterLeagueMatchMessage['leagueMatchName'];
    }) & ({
        __typename: 'FooterLeagueMatchMessage';
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

export default HomeQuery_51fc56b;
export { HomeQuery_51fc56b };
