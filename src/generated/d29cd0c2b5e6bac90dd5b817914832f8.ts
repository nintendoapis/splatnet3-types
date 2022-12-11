import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Brand, ClothingGear, ClothingGearConnection, Gear, GearPower, GearRecordStats, HeadGear, HeadGearConnection, Image, ShoesGear, ShoesGearConnection, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponConnection, WeaponRecordStats } from '../types.js';

/**
 * d29cd0c2b5e6bac90dd5b817914832f8 myOutfitCommonDataEquipmentsQuery
 *
 * query myOutfitCommonDataEquipmentsQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-216d0219.
 */
interface myOutfitCommonDataEquipmentsQuery_d29cd0c {
    clothingGears: /** ClothingGearConnection */ OperationFieldType<'myOutfitCommonDataEquipmentsQuery', 'clothingGears', {
        nodes: /** ClothingGear */ LinkedFieldType<ClothingGearConnection, 'nodes', ({
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
        }), true>;
    }>;
    headGears: /** HeadGearConnection */ OperationFieldType<'myOutfitCommonDataEquipmentsQuery', 'headGears', {
        nodes: /** HeadGear */ LinkedFieldType<HeadGearConnection, 'nodes', ({
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
        }), true>;
    }>;
    shoesGears: /** ShoesGearConnection */ OperationFieldType<'myOutfitCommonDataEquipmentsQuery', 'shoesGears', {
        nodes: /** ShoesGear */ LinkedFieldType<ShoesGearConnection, 'nodes', ({
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
        }), true>;
    }>;
    weapons: /** WeaponConnection */ OperationFieldType<'myOutfitCommonDataEquipmentsQuery', 'weapons', {
        nodes: /** Weapon */ LinkedFieldType<WeaponConnection, 'nodes', {
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
        }, true>;
    }>;
}

export default myOutfitCommonDataEquipmentsQuery_d29cd0c;
export { myOutfitCommonDataEquipmentsQuery_d29cd0c };
