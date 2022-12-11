import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Badge, Color, CurrentPlayer, Gear, GearPower, Image, Nameplate, NameplateBackground, PlayHistory, Player, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponCategoryUtilRatio, WeaponHistory, WeaponHistoryConnection, WeaponUtilRatio, XMatchMax } from '../types.js';

/**
 * 57b1ccae6949c407e2df9bcad2a8e573 HistoryRecordRefetchQuery
 *
 * query HistoryRecordRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-bd36a652.
 */
interface HistoryRecordRefetchQuery_57b1cca {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'HistoryRecordRefetchQuery', 'currentPlayer', ({
        clothingGear: /** ClothingGear */ LinkedFieldType<CurrentPlayer, 'clothingGear', ({
        }) & (/** Gear */ {
            __isGear: 'Gear';
            additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
            }, true>;
            image: /** Image */ LinkedFieldType<Gear, 'image', {
                url: Image['url'];
            }, false>;
            name: Gear['name'];
            primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
            }, false>;
        }), false>;
        headGear: /** HeadGear */ LinkedFieldType<CurrentPlayer, 'headGear', ({
        }) & (/** Gear */ {
            __isGear: 'Gear';
            additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
            }, true>;
            image: /** Image */ LinkedFieldType<Gear, 'image', {
                url: Image['url'];
            }, false>;
            name: Gear['name'];
            primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
            }, false>;
        }), false>;
        name: CurrentPlayer['name'];
        shoesGear: /** ShoesGear */ LinkedFieldType<CurrentPlayer, 'shoesGear', ({
        }) & (/** Gear */ {
            __isGear: 'Gear';
            additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
            }, true>;
            image: /** Image */ LinkedFieldType<Gear, 'image', {
                url: Image['url'];
            }, false>;
            name: Gear['name'];
            primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
            }, false>;
        }), false>;
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
        weapon: /** Weapon */ LinkedFieldType<CurrentPlayer, 'weapon', {
            id: Weapon['id'];
            image: /** Image */ LinkedFieldType<Weapon, 'image', {
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
    })>;
    playHistory: /** PlayHistory */ OperationFieldType<'HistoryRecordRefetchQuery', 'playHistory', {
        allBadges: /** Badge */ LinkedFieldType<PlayHistory, 'badges', {
            id: Badge['id'];
            description: Badge['description'];
            image: /** Image */ LinkedFieldType<Badge, 'image', {
                url: Image['url'];
            }, false>;
        }, true>;
        badges: /** Badge */ LinkedFieldType<PlayHistory, 'badges', {
            __typename: 'Badge';
            id: Badge['id'];
        }, true>;
        currentTime: PlayHistory['currentTime'];
        frequentlyUsedWeapons: /** Weapon */ LinkedFieldType<PlayHistory, 'frequentlyUsedWeapons', {
            id: Weapon['id'];
            image: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            name: Weapon['name'];
        }, true>;
        gameStartTime: PlayHistory['gameStartTime'];
        paintPointTotal: PlayHistory['paintPointTotal'];
        rank: PlayHistory['rank'];
        recentBadges: /** Badge */ LinkedFieldType<PlayHistory, 'badges', {
            id: Badge['id'];
            description: Badge['description'];
            image: /** Image */ LinkedFieldType<Badge, 'image', {
                url: Image['url'];
            }, false>;
        }, true>;
        udemae: PlayHistory['udemae'];
        udemaeMax: PlayHistory['udemaeMax'];
        weaponHistory: /** WeaponHistoryConnection */ LinkedFieldType<PlayHistory, 'weaponHistory', {
            nodes: /** WeaponHistory */ LinkedFieldType<WeaponHistoryConnection, 'nodes', {
                endTime: WeaponHistory['endTime'];
                isMonthly: WeaponHistory['isMonthly'];
                seasonName: WeaponHistory['seasonName'];
                startTime: WeaponHistory['startTime'];
                weaponCategories: /** WeaponCategoryUtilRatio */ LinkedFieldType<WeaponHistory, 'weaponCategories', {
                    utilRatio: WeaponCategoryUtilRatio['utilRatio'];
                    weaponCategory: /** WeaponCategory */ LinkedFieldType<WeaponCategoryUtilRatio, 'weaponCategory', {
                        id: WeaponCategory['id'];
                        category: WeaponCategory['category'];
                        name: WeaponCategory['name'];
                    }, false>;
                    weapons: /** WeaponUtilRatio */ LinkedFieldType<WeaponCategoryUtilRatio, 'weapons', {
                        utilRatio: WeaponUtilRatio['utilRatio'];
                        weapon: /** Weapon */ LinkedFieldType<WeaponUtilRatio, 'weapon', {
                            id: Weapon['id'];
                            image: /** Image */ LinkedFieldType<Weapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: Weapon['name'];
                            weaponCategory: /** WeaponCategory */ LinkedFieldType<Weapon, 'weaponCategory', {
                                id: WeaponCategory['id'];
                                category: WeaponCategory['category'];
                            }, false>;
                        }, false>;
                    }, true>;
                }, true>;
                weapons: /** WeaponUtilRatio */ LinkedFieldType<WeaponHistory, 'weapons', {
                    utilRatio: WeaponUtilRatio['utilRatio'];
                    weapon: /** Weapon */ LinkedFieldType<WeaponUtilRatio, 'weapon', {
                        id: Weapon['id'];
                        image: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Weapon['name'];
                    }, false>;
                }, true>;
            }, true>;
        }, false>;
        winCountTotal: PlayHistory['winCountTotal'];
        xMatchMaxAr: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxAr', {
            power: XMatchMax['power'];
            powerUpdateTime: XMatchMax['powerUpdateTime'];
            rank: XMatchMax['rank'];
            rankUpdateSeasonName: XMatchMax['rankUpdateSeasonName'];
        }, false>;
        xMatchMaxCl: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxCl', {
            power: XMatchMax['power'];
            powerUpdateTime: XMatchMax['powerUpdateTime'];
            rank: XMatchMax['rank'];
            rankUpdateSeasonName: XMatchMax['rankUpdateSeasonName'];
        }, false>;
        xMatchMaxGl: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxGl', {
            power: XMatchMax['power'];
            powerUpdateTime: XMatchMax['powerUpdateTime'];
            rank: XMatchMax['rank'];
            rankUpdateSeasonName: XMatchMax['rankUpdateSeasonName'];
        }, false>;
        xMatchMaxLf: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxLf', {
            power: XMatchMax['power'];
            powerUpdateTime: XMatchMax['powerUpdateTime'];
            rank: XMatchMax['rank'];
            rankUpdateSeasonName: XMatchMax['rankUpdateSeasonName'];
        }, false>;
        xMatchRankAr: PlayHistory['xMatchRankAr'];
        xMatchRankCl: PlayHistory['xMatchRankCl'];
        xMatchRankGl: PlayHistory['xMatchRankGl'];
        xMatchRankLf: PlayHistory['xMatchRankLf'];
    }>;
}

export default HistoryRecordRefetchQuery_57b1cca;
export { HistoryRecordRefetchQuery_57b1cca };
