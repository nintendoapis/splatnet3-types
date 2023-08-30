import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { ClothingGear, CreateMyOutfitPayload, GearPower, HeadGear, Image, MyOutfit, ShoesGear, SpecialWeapon, SubWeapon, UserError, Weapon } from '../../types.js';

/**
 * b5257c5a3840cb01556750cbb56881d758534dfd91e9aec7c0232098fd767bb9 CreateMyOutfitMutation
 *
 * mutation CreateMyOutfitMutation
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface CreateMyOutfitMutation_b5257c5 {
    createMyOutfit: /** CreateMyOutfitPayload */ OperationFieldType<'CreateMyOutfitMutation', 'createMyOutfit', ({
        myOutfit: /** MyOutfit */ LinkedFieldType<CreateMyOutfitPayload, 'myOutfit', {
            id: MyOutfit['id'];
            currentClothingGear: /** ClothingGear */ LinkedFieldType<MyOutfit, 'clothingGear', {
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
            }, false>;
            currentHeadGear: /** HeadGear */ LinkedFieldType<MyOutfit, 'headGear', {
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
            }, false>;
            currentShoesGear: /** ShoesGear */ LinkedFieldType<MyOutfit, 'shoesGear', {
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
            }, false>;
            currentWeapon: /** Weapon */ LinkedFieldType<MyOutfit, 'weapon', {
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
            index: MyOutfit['index'];
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<CreateMyOutfitPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }) & (/** LinkedHandle */ {})>;
}

export default CreateMyOutfitMutation_b5257c5;
export { CreateMyOutfitMutation_b5257c5 };
