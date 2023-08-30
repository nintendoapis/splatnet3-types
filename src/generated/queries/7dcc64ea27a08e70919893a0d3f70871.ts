import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Banner, CurrentPlayer, FooterBigRunMessage, FooterFestMessage, FooterLeagueMatchMessage, FooterSeasonMessage, Friend, FriendConnection, Image, Weapon } from '../../types.js';

/**
 * 7dcc64ea27a08e70919893a0d3f70871 HomeQuery
 *
 * query HomeQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface HomeQuery_7dcc64e {
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

export default HomeQuery_7dcc64e;
export { HomeQuery_7dcc64e };
