import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { ClothingGear, CreateMyOutfitPayload, GearPower, HeadGear, Image, MyOutfit, ShoesGear, SpecialWeapon, SubWeapon, UserError, Weapon } from '../types.js';

/**
 * 31ff008ea218ffbe11d958a52c6f959f CreateMyOutfitMutation
 *
 * mutation CreateMyOutfitMutation
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-8a061f6c.
 */
interface CreateMyOutfitMutation_31ff008 {
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

export default CreateMyOutfitMutation_31ff008;
export { CreateMyOutfitMutation_31ff008 };
