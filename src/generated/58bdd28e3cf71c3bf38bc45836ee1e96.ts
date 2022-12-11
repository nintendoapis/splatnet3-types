import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Badge, Color, Fest, FestRankingHolder, FestRankingHolderConnection, FestTeam, FestTeamResult, Image, Nameplate, NameplateBackground, Player, SpecialWeapon, SubWeapon, Weapon } from '../types.js';

/**
 * 58bdd28e3cf71c3bf38bc45836ee1e96 DetailRankingQuery
 *
 * query DetailRankingQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-63bad6e1.
 */
interface DetailRankingQuery_58bdd28 {
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
            result: /** FestTeamResult */ LinkedFieldType<FestTeam, 'result', {
                rankingHolders: /** FestRankingHolderConnection */ LinkedFieldType<FestTeamResult, 'rankingHolders', {
                    nodes: /** FestRankingHolder */ LinkedFieldType<FestRankingHolderConnection, 'nodes', ({
                        id: FestRankingHolder['id'];
                        festPower: FestRankingHolder['festPower'];
                        name: FestRankingHolder['name'];
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
                            originalImage: /** Image */ LinkedFieldType<Weapon, 'image', {
                                url: Image['url'];
                            }, false>;
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
                        nameId: Player['nameId'];
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
                    }), true>;
                }, false>;
            }, false>;
            teamName: FestTeam['teamName'];
        }, true>;
    }) & ({
        __typename: 'Fest';
    })>;
}

export default DetailRankingQuery_58bdd28;
export { DetailRankingQuery_58bdd28 };
