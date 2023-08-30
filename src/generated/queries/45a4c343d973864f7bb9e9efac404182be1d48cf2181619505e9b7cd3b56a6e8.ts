import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Brand, ClothingGear, ClothingGearConnection, Gear, GearPower, GearRecordStats, HeadGear, HeadGearConnection, Image, ShoesGear, ShoesGearConnection, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponConnection, WeaponRecordStats } from '../../types.js';

/**
 * 45a4c343d973864f7bb9e9efac404182be1d48cf2181619505e9b7cd3b56a6e8 myOutfitCommonDataEquipmentsQuery
 *
 * query myOutfitCommonDataEquipmentsQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface myOutfitCommonDataEquipmentsQuery_45a4c34 {
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

export default myOutfitCommonDataEquipmentsQuery_45a4c34;
export { myOutfitCommonDataEquipmentsQuery_45a4c34 };
