import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Brand, ClothingGear, Gear, GearPower, GearRecordStats, HeadGear, Image, MyOutfit, PlayControlOption, ShoesGear, SpecialWeapon, SubWeapon, UpdateMyOutfitPayload, UserError, Weapon, WeaponCategory, WeaponRecordStats } from '../../types.js';

/**
 * b83ed5a9b58252c088d3aac7f28a34a59acfbaa61b187ee3eebfe8506aa720f9 UpdateMyOutfitMutation
 *
 * mutation UpdateMyOutfitMutation
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface UpdateMyOutfitMutation_b83ed5a {
    updateMyOutfit: /** UpdateMyOutfitPayload */ OperationFieldType<'UpdateMyOutfitMutation', 'updateMyOutfit', {
        myOutfit: /** MyOutfit */ LinkedFieldType<UpdateMyOutfitPayload, 'myOutfit', {
            id: MyOutfit['id'];
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
                additionalGearPowers: /** GearPower */ LinkedFieldType<ClothingGear, 'additionalGearPowers', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, true>;
                image: /** Image */ LinkedFieldType<ClothingGear, 'image', {
                    url: Image['url'];
                }, false>;
                name: ClothingGear['name'];
                primaryGearPower: /** GearPower */ LinkedFieldType<ClothingGear, 'primaryGearPower', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, false>;
            }) & (/** Gear */ {
                __isGear: 'Gear';
                __typename: 'Gear';
                additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                    __typename: 'GearPower';
                    gearPowerId: GearPower['gearPowerId'];
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
                primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                    __typename: 'GearPower';
                    gearPowerId: GearPower['gearPowerId'];
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
                additionalGearPowers: /** GearPower */ LinkedFieldType<HeadGear, 'additionalGearPowers', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, true>;
                image: /** Image */ LinkedFieldType<HeadGear, 'image', {
                    url: Image['url'];
                }, false>;
                name: HeadGear['name'];
                primaryGearPower: /** GearPower */ LinkedFieldType<HeadGear, 'primaryGearPower', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, false>;
            }) & (/** Gear */ {
                __isGear: 'Gear';
                __typename: 'Gear';
                additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                    __typename: 'GearPower';
                    gearPowerId: GearPower['gearPowerId'];
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
                primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                    __typename: 'GearPower';
                    gearPowerId: GearPower['gearPowerId'];
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
                additionalGearPowers: /** GearPower */ LinkedFieldType<ShoesGear, 'additionalGearPowers', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, true>;
                image: /** Image */ LinkedFieldType<ShoesGear, 'image', {
                    url: Image['url'];
                }, false>;
                name: ShoesGear['name'];
                primaryGearPower: /** GearPower */ LinkedFieldType<ShoesGear, 'primaryGearPower', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, false>;
            }) & (/** Gear */ {
                __isGear: 'Gear';
                __typename: 'Gear';
                additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                    __typename: 'GearPower';
                    gearPowerId: GearPower['gearPowerId'];
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
                primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                    __typename: 'GearPower';
                    gearPowerId: GearPower['gearPowerId'];
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
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<UpdateMyOutfitPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default UpdateMyOutfitMutation_b83ed5a;
export { UpdateMyOutfitMutation_b83ed5a };
