import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Badge, Color, Image, Nameplate, NameplateBackground, PageInfo, Player, SpecialWeapon, SubWeapon, Weapon, XRankingHolder, XRankingHolderConnection, XRankingHolderEdge, XRankingSeason } from '../types.js';

/**
 * 5f8f333770ed3c43e21b0121f3a86716 DetailTabViewXRankingGlRefetchQuery
 *
 * query DetailTabViewXRankingGlRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-bd36a652.
 */
interface DetailTabViewXRankingGlRefetchQuery_5f8f333 {
    node: /** unknown type */ OperationFieldType<'DetailTabViewXRankingGlRefetchQuery', 'node', ({
        __typename: string;
        id: XRankingSeason['id'];
    }) & (/** XRankingSeason */ {
        xRankingGl: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingGl', {
            edges: /** XRankingHolderEdge */ LinkedFieldType<XRankingHolderConnection, 'edges', {
                cursor: XRankingHolderEdge['cursor'];
                node: /** XRankingHolder */ LinkedFieldType<XRankingHolderEdge, 'node', ({
                    __typename: 'XRankingHolder';
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    rank: XRankingHolder['rank'];
                    rankDiff: XRankingHolder['rankDiff'];
                    weapon: /** Weapon */ LinkedFieldType<XRankingHolder, 'weapon', {
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
                    weaponTop: XRankingHolder['weaponTop'];
                    xPower: XRankingHolder['xPower'];
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
                }) & ({
                    __typename: 'Player';
                }), false>;
            }, true>;
            pageInfo: /** PageInfo */ LinkedFieldType<XRankingHolderConnection, 'pageInfo', {
                endCursor: PageInfo['endCursor'];
                hasNextPage: PageInfo['hasNextPage'];
            }, false>;
        }, false>;
    }) & (/** LinkedHandle */ {}) & ({
        __typename: 'XRankingSeason';
    })>;
}

export default DetailTabViewXRankingGlRefetchQuery_5f8f333;
export { DetailTabViewXRankingGlRefetchQuery_5f8f333 };
