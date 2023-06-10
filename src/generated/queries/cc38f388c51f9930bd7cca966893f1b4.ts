import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Badge, Color, Fest, FestRankingHolder, FestRankingHolderConnection, FestRankingHolderEdge, FestTeam, FestTeamResult, Image, Nameplate, NameplateBackground, PageInfo, Player, SpecialWeapon, SubWeapon, Weapon } from '../../types.js';

/**
 * cc38f388c51f9930bd7cca966893f1b4 DetailRankingQuery
 *
 * query DetailRankingQuery
 *
 * Generated 10/06/2023 from SplatNet 3 4.0.0-d5178440.
 */
interface DetailRankingQuery_cc38f38 {
    fest: /** unknown type */ OperationFieldType<'DetailRankingQuery', 'node', ({
        __typename: string;
        id: Fest['id'];
    }) & (/** Fest */ {
        lang: Fest['lang'];
        teams: /** FestTeam */ LinkedFieldType<Fest, 'teams', {
            id: FestTeam['id'];
            color: /** Color */ LinkedFieldType<FestTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
            image: /** Image */ LinkedFieldType<FestTeam, 'image', {
                url: Image['url'];
            }, false>;
            result: /** FestTeamResult */ LinkedFieldType<FestTeam, 'result', ({
                rankingHolders: /** FestRankingHolderConnection */ LinkedFieldType<FestTeamResult, 'rankingHolders', {
                    edges: /** FestRankingHolderEdge */ LinkedFieldType<FestRankingHolderConnection, 'edges', {
                        cursor: FestRankingHolderEdge['cursor'];
                        node: /** FestRankingHolder */ LinkedFieldType<FestRankingHolderEdge, 'node', ({
                            __typename: 'FestRankingHolder';
                            id: FestRankingHolder['id'];
                            festPower: FestRankingHolder['festPower'];
                            name: FestRankingHolder['name'];
                            nameId: FestRankingHolder['nameId'];
                            rank: FestRankingHolder['rank'];
                            weapon: /** Weapon */ LinkedFieldType<FestRankingHolder, 'weapon', {
                                id: Weapon['id'];
                                image: /** Image */ LinkedFieldType<Weapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                image2d: /** Image */ LinkedFieldType<Weapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                image2dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                image3d: /** Image */ LinkedFieldType<Weapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                image3dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                name: Weapon['name'];
                                specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                                    id: SpecialWeapon['id'];
                                    image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                                        url: Image['url'];
                                    }, false>;
                                    name: SpecialWeapon['name'];
                                }, false>;
                                subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                                    id: SubWeapon['id'];
                                    image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                                        url: Image['url'];
                                    }, false>;
                                    name: SubWeapon['name'];
                                }, false>;
                            }, false>;
                        }) & (/** Player */ {
                            __isPlayer: 'Player';
                            byname: Player['byname'];
                            nameplate: /** Nameplate */ LinkedFieldType<Player, 'nameplate', {
                                background: /** NameplateBackground */ LinkedFieldType<Nameplate, 'background', {
                                    id: NameplateBackground['id'];
                                    image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                                        url: Image['url'];
                                    }, false>;
                                    textColor: /** Color */ LinkedFieldType<NameplateBackground, 'textColor', {
                                        r: Color['r'];
                                        g: Color['g'];
                                        b: Color['b'];
                                        a: Color['a'];
                                    }, false>;
                                }, false>;
                                badges: /** Badge */ LinkedFieldType<Nameplate, 'badges', {
                                    id: Badge['id'];
                                    image: /** Image */ LinkedFieldType<Badge, 'image', {
                                        url: Image['url'];
                                    }, false>;
                                }, true>;
                            }, false>;
                        }) & ({
                            __typename: 'Player';
                        }), false>;
                    }, true>;
                    pageInfo: /** PageInfo */ LinkedFieldType<FestRankingHolderConnection, 'pageInfo', {
                        endCursor: PageInfo['endCursor'];
                        hasNextPage: PageInfo['hasNextPage'];
                    }, false>;
                }, false>;
            }) & (/** LinkedHandle */ {}), false>;
            teamName: FestTeam['teamName'];
        }, true>;
    }) & ({
        __typename: 'Fest';
    })>;
}

export default DetailRankingQuery_cc38f38;
export { DetailRankingQuery_cc38f38 };
