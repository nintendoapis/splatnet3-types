import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Badge, Color, Image, Nameplate, NameplateBackground, PageInfo, Player, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponCategoryConnection, XRankingHolder, XRankingHolderConnection, XRankingHolderEdge, XRankingSeason } from '../../types.js';

/**
 * d5e4924c05891208466fcba260d682e7 XRankingDetailQuery
 *
 * query XRankingDetailQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface XRankingDetailQuery_d5e4924 {
    weaponCategories: /** WeaponCategoryConnection */ OperationFieldType<'XRankingDetailQuery', 'weaponCategories', {
        nodes: /** WeaponCategory */ LinkedFieldType<WeaponCategoryConnection, 'nodes', {
            id: WeaponCategory['id'];
            image: /** Image */ LinkedFieldType<WeaponCategory, 'image', {
                url: Image['url'];
            }, false>;
            name: WeaponCategory['name'];
        }, true>;
    }>;
    xRanking: /** unknown type */ OperationFieldType<'XRankingDetailQuery', 'node', ({
        __typename: string;
        id: XRankingSeason['id'];
    }) & (/** XRankingSeason */ {
        endTime: XRankingSeason['endTime'];
        isCurrent: XRankingSeason['isCurrent'];
        lastUpdateTime: XRankingSeason['lastUpdateTime'];
        name: XRankingSeason['name'];
        startTime: XRankingSeason['startTime'];
        weaponTopsAr: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'weaponTopsAr', {
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
        weaponTopsCl: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'weaponTopsCl', {
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
        xRankingAr: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingAr', {
            edges: /** XRankingHolderEdge */ LinkedFieldType<XRankingHolderConnection, 'edges', {
                cursor: XRankingHolderEdge['cursor'];
                node: /** XRankingHolder */ LinkedFieldType<XRankingHolderEdge, 'node', ({
                    __typename: 'XRankingHolder';
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    nameId: XRankingHolder['nameId'];
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
        xRankingCl: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingCl', {
            edges: /** XRankingHolderEdge */ LinkedFieldType<XRankingHolderConnection, 'edges', {
                cursor: XRankingHolderEdge['cursor'];
                node: /** XRankingHolder */ LinkedFieldType<XRankingHolderEdge, 'node', ({
                    __typename: 'XRankingHolder';
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    nameId: XRankingHolder['nameId'];
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
        xRankingGl: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingGl', {
            edges: /** XRankingHolderEdge */ LinkedFieldType<XRankingHolderConnection, 'edges', {
                cursor: XRankingHolderEdge['cursor'];
                node: /** XRankingHolder */ LinkedFieldType<XRankingHolderEdge, 'node', ({
                    __typename: 'XRankingHolder';
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    nameId: XRankingHolder['nameId'];
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
        xRankingLf: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingLf', {
            edges: /** XRankingHolderEdge */ LinkedFieldType<XRankingHolderConnection, 'edges', {
                cursor: XRankingHolderEdge['cursor'];
                node: /** XRankingHolder */ LinkedFieldType<XRankingHolderEdge, 'node', ({
                    __typename: 'XRankingHolder';
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    nameId: XRankingHolder['nameId'];
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
    }) & (/** LinkedHandle */ {}) & (/** LinkedHandle */ {}) & (/** LinkedHandle */ {}) & (/** LinkedHandle */ {}) & (/** LinkedHandle */ {}) & (/** LinkedHandle */ {}) & (/** LinkedHandle */ {}) & (/** LinkedHandle */ {}) & ({
        __typename: 'XRankingSeason';
    })>;
}

export default XRankingDetailQuery_d5e4924;
export { XRankingDetailQuery_d5e4924 };
