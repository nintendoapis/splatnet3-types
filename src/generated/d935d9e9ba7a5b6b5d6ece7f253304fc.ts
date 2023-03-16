import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Brand, ClothingGear, Gear, GearPower, GearRecordStats, HeadGear, Image, MyOutfit, PlayControlOption, ShoesGear, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponRecordStats } from '../types.js';

/**
 * d935d9e9ba7a5b6b5d6ece7f253304fc MyOutfitDetailQuery
 *
 * query MyOutfitDetailQuery
 *
 * Generated 16/03/2023 from SplatNet 3 3.0.0-6049221b.
 */
interface MyOutfitDetailQuery_d935d9e {
    myOutfit: /** unknown type */ OperationFieldType<'MyOutfitDetailQuery', 'node', ({
        __typename: string;
        id: MyOutfit['id'];
    }) & (/** MyOutfit */ {
        controlOptionConsole: /** PlayControlOption */ LinkedFieldType<MyOutfit, 'controlOptionConsole', {
            cameraSpeedGyro: PlayControlOption['cameraSpeedGyro'];
            cameraSpeedStick: PlayControlOption['cameraSpeedStick'];
            isEnableGyro: PlayControlOption['isEnableGyro'];
            isReverseLr: PlayControlOption['isReverseLr'];
            isReverseUd: PlayControlOption['isReverseUd'];
        }, false>;
        controlOptionHandheld: /** PlayControlOption */ LinkedFieldType<MyOutfit, 'controlOptionHandheld', {
            cameraSpeedGyro: PlayControlOption['cameraSpeedGyro'];
            cameraSpeedStick: PlayControlOption['cameraSpeedStick'];
            isEnableGyro: PlayControlOption['isEnableGyro'];
            isReverseLr: PlayControlOption['isReverseLr'];
            isReverseUd: PlayControlOption['isReverseUd'];
        }, false>;
        currentClothingGear: /** ClothingGear */ LinkedFieldType<MyOutfit, 'clothingGear', ({
        }) & (/** Gear */ {
            __isGear: 'Gear';
            __typename: 'Gear';
            additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                __typename: 'GearPower';
                gearPowerId: GearPower['gearPowerId'];
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
                power: GearPower['power'];
            }, true>;
            brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                __typename: 'Brand';
                id: Brand['id'];
                image: /** Image */ LinkedFieldType<Brand, 'image', {
                    url: Image['url'];
                }, false>;
                name: Brand['name'];
            }, false>;
            image: /** Image */ LinkedFieldType<Gear, 'image', {
                url: Image['url'];
            }, false>;
            name: Gear['name'];
            primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                __typename: 'GearPower';
                gearPowerId: GearPower['gearPowerId'];
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
                power: GearPower['power'];
            }, false>;
            rarity: Gear['rarity'];
            stats: /** GearRecordStats */ LinkedFieldType<Gear, 'stats', {
                exp: GearRecordStats['exp'];
            }, false>;
        }) & (/** HeadGear */ {
            headGearId: HeadGear['headGearId'];
        }) & (/** ClothingGear */ {
            clothingGearId: ClothingGear['clothingGearId'];
        }) & (/** ShoesGear */ {
            shoesGearId: ShoesGear['shoesGearId'];
        }), false>;
        currentHeadGear: /** HeadGear */ LinkedFieldType<MyOutfit, 'headGear', ({
        }) & (/** Gear */ {
            __isGear: 'Gear';
            __typename: 'Gear';
            additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                __typename: 'GearPower';
                gearPowerId: GearPower['gearPowerId'];
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
                power: GearPower['power'];
            }, true>;
            brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                __typename: 'Brand';
                id: Brand['id'];
                image: /** Image */ LinkedFieldType<Brand, 'image', {
                    url: Image['url'];
                }, false>;
                name: Brand['name'];
            }, false>;
            image: /** Image */ LinkedFieldType<Gear, 'image', {
                url: Image['url'];
            }, false>;
            name: Gear['name'];
            primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                __typename: 'GearPower';
                gearPowerId: GearPower['gearPowerId'];
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
                power: GearPower['power'];
            }, false>;
            rarity: Gear['rarity'];
            stats: /** GearRecordStats */ LinkedFieldType<Gear, 'stats', {
                exp: GearRecordStats['exp'];
            }, false>;
        }) & (/** HeadGear */ {
            headGearId: HeadGear['headGearId'];
        }) & (/** ClothingGear */ {
            clothingGearId: ClothingGear['clothingGearId'];
        }) & (/** ShoesGear */ {
            shoesGearId: ShoesGear['shoesGearId'];
        }), false>;
        currentShoesGear: /** ShoesGear */ LinkedFieldType<MyOutfit, 'shoesGear', ({
        }) & (/** Gear */ {
            __isGear: 'Gear';
            __typename: 'Gear';
            additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                __typename: 'GearPower';
                gearPowerId: GearPower['gearPowerId'];
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
                power: GearPower['power'];
            }, true>;
            brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                __typename: 'Brand';
                id: Brand['id'];
                image: /** Image */ LinkedFieldType<Brand, 'image', {
                    url: Image['url'];
                }, false>;
                name: Brand['name'];
            }, false>;
            image: /** Image */ LinkedFieldType<Gear, 'image', {
                url: Image['url'];
            }, false>;
            name: Gear['name'];
            primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                __typename: 'GearPower';
                gearPowerId: GearPower['gearPowerId'];
                image: /** Image */ LinkedFieldType<GearPower, 'image', {
                    url: Image['url'];
                }, false>;
                name: GearPower['name'];
                power: GearPower['power'];
            }, false>;
            rarity: Gear['rarity'];
            stats: /** GearRecordStats */ LinkedFieldType<Gear, 'stats', {
                exp: GearRecordStats['exp'];
            }, false>;
        }) & (/** HeadGear */ {
            headGearId: HeadGear['headGearId'];
        }) & (/** ClothingGear */ {
            clothingGearId: ClothingGear['clothingGearId'];
        }) & (/** ShoesGear */ {
            shoesGearId: ShoesGear['shoesGearId'];
        }), false>;
        currentWeapon: /** Weapon */ LinkedFieldType<MyOutfit, 'weapon', {
            __typename: 'Weapon';
            id: Weapon['id'];
            image: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            name: Weapon['name'];
            specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                __typename: 'SpecialWeapon';
                id: SpecialWeapon['id'];
                image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: SpecialWeapon['name'];
            }, false>;
            stats: /** WeaponRecordStats */ LinkedFieldType<Weapon, 'stats', {
                paint: WeaponRecordStats['paint'];
            }, false>;
            subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                __typename: 'SubWeapon';
                id: SubWeapon['id'];
                image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: SubWeapon['name'];
            }, false>;
            weaponCategory: /** WeaponCategory */ LinkedFieldType<Weapon, 'weaponCategory', {
                __typename: 'WeaponCategory';
                id: WeaponCategory['id'];
                image: /** Image */ LinkedFieldType<WeaponCategory, 'image', {
                    url: Image['url'];
                }, false>;
                name: WeaponCategory['name'];
            }, false>;
            weaponId: Weapon['weaponId'];
        }, false>;
        index: MyOutfit['index'];
    }) & ({
        __typename: 'MyOutfit';
    })>;
}

export default MyOutfitDetailQuery_d935d9e;
export { MyOutfitDetailQuery_d935d9e };
