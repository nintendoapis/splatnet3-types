import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Badge, Color, Image, Nameplate, NameplateBackground, PageInfo, Player, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, XRankingHolder, XRankingHolderConnection, XRankingHolderEdge, XRankingSeason } from '../../types.js';

/**
 * a5237b76a33b7ee3eb79a2fe83f297e0e1324a3bf42bea9182ea49a5396bb053 DetailTabViewWeaponTopsGlRefetchQuery
 *
 * query DetailTabViewWeaponTopsGlRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface DetailTabViewWeaponTopsGlRefetchQuery_a5237b7 {
    node: /** unknown type */ OperationFieldType<'DetailTabViewWeaponTopsGlRefetchQuery', 'node', ({
        __typename: string;
        id: XRankingSeason['id'];
    }) & (/** XRankingSeason */ {
        weaponTopsGl: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'weaponTopsGl', {
            edges: /** XRankingHolderEdge */ LinkedFieldType<XRankingHolderConnection, 'edges', {
                cursor: XRankingHolderEdge['cursor'];
                node: /** XRankingHolder */ LinkedFieldType<XRankingHolderEdge, 'node', ({
                    __typename: 'XRankingHolder';
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    nameId: XRankingHolder['nameId'];
                    rank: XRankingHolder['rank'];
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
                        weaponCategory: /** WeaponCategory */ LinkedFieldType<Weapon, 'weaponCategory', {
                            id: WeaponCategory['id'];
                            name: WeaponCategory['name'];
                            weaponCategoryId: WeaponCategory['weaponCategoryId'];
                        }, false>;
                    }, false>;
                    weaponTop: XRankingHolder['weaponTop'];
                    xPower: XRankingHolder['xPower'];
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
            pageInfo: /** PageInfo */ LinkedFieldType<XRankingHolderConnection, 'pageInfo', {
                endCursor: PageInfo['endCursor'];
                hasNextPage: PageInfo['hasNextPage'];
            }, false>;
        }, false>;
    }) & (/** LinkedHandle */ {}) & ({
        __typename: 'XRankingSeason';
    })>;
}

export default DetailTabViewWeaponTopsGlRefetchQuery_a5237b7;
export { DetailTabViewWeaponTopsGlRefetchQuery_a5237b7 };
