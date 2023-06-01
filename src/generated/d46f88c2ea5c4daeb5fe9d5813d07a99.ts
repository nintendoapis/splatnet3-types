import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Badge, Color, Image, Nameplate, NameplateBackground, PageInfo, Player, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, XRankingHolder, XRankingHolderConnection, XRankingHolderEdge, XRankingSeason } from '../types.js';

/**
 * d46f88c2ea5c4daeb5fe9d5813d07a99 DetailTabViewWeaponTopsLfRefetchQuery
 *
 * query DetailTabViewWeaponTopsLfRefetchQuery
 *
 * Generated 01/06/2023 from SplatNet 3 4.0.0-e2ee936d.
 */
interface DetailTabViewWeaponTopsLfRefetchQuery_d46f88c {
    node: /** unknown type */ OperationFieldType<'DetailTabViewWeaponTopsLfRefetchQuery', 'node', ({
        __typename: string;
        id: XRankingSeason['id'];
    }) & (/** XRankingSeason */ {
        weaponTopsLf: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'weaponTopsLf', {
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

export default DetailTabViewWeaponTopsLfRefetchQuery_d46f88c;
export { DetailTabViewWeaponTopsLfRefetchQuery_d46f88c };
