import { CurrentPlayer, EdgeConnections, NodeList, UserError } from './common.js';
import { Brand, ClothingGear, GearPower, HeadGear, ShoesGear } from './gear.js';
import { SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponRecordStats } from './weapon.js';

/** 81d9a6849467d2aa6b1603ebcedbddbe MyOutfitsQuery */
export interface MyOutfitsResult {
    myOutfits: EdgeConnections<MyOutfit>;
    currentPlayer: CurrentPlayer_outfits;
}

/** 10db4e349f3123c56df14e3adec2ee6f MyOutfitsRefetchQuery */
export type MyOutfitsRefetchResult = MyOutfitsResult;

export interface MyOutfit {
    __typename: 'MyOutfit';
    id: string;
    index: number;
    currentShoesGear: ShoesGear_outfits;
    currentClothingGear: ClothingGear_outfits;
    currentHeadGear: HeadGear_outfits;
    currentWeapon: Weapon_outfits;
    controlOptionConsole: PlayControlOption;
    controlOptionHandheld: PlayControlOption;
}

export type ShoesGear_outfits = Pick<ShoesGear, '__typename' | '__isGear' | 'shoesGearId' | 'name' | 'rarity' | 'image' | 'stats'> & {
    primaryGearPower: Pick<GearPower, '__typename' | 'gearPowerId' | 'name' | 'image' | 'power'>;
    additionalGearPowers: Pick<GearPower, '__typename' | 'gearPowerId' | 'name' | 'image' | 'power'>[];
    brand: Pick<Brand, '__typename' | 'id' | 'name' | 'image'>;
};
export type ClothingGear_outfits = Pick<ClothingGear, '__typename' | '__isGear' | 'clothingGearId' | 'name' | 'rarity' | 'image' | 'stats'> & {
    primaryGearPower: Pick<GearPower, '__typename' | 'gearPowerId' | 'name' | 'image' | 'power'>;
    additionalGearPowers: Pick<GearPower, '__typename' | 'gearPowerId' | 'name' | 'image' | 'power'>[];
    brand: Pick<Brand, '__typename' | 'id' | 'name' | 'image'>;
};
export type HeadGear_outfits = Pick<HeadGear, '__typename' | '__isGear' | 'headGearId' | 'name' | 'rarity' | 'image' | 'stats'> & {
    primaryGearPower: Pick<GearPower, '__typename' | 'gearPowerId' | 'name' | 'image' | 'power'>;
    additionalGearPowers: Pick<GearPower, '__typename' | 'gearPowerId' | 'name' | 'image' | 'power'>[];
    brand: Pick<Brand, '__typename' | 'id' | 'name' | 'image'>;
};
export type Weapon_outfits = Pick<Weapon, '__typename' | 'id' | 'weaponId' | 'name' | 'image'> & {
    weaponCategory: Pick<WeaponCategory, '__typename' | 'id' | 'name' | 'image'>;
    subWeapon: Pick<SubWeapon, '__typename' | 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, '__typename' | 'id' | 'name' | 'image'>;
    stats: Pick<WeaponRecordStats, 'paint'> | null;
};

export interface PlayControlOption {
    isEnableGyro: boolean;
    isReverseLr: boolean;
    isReverseUd: boolean;
    cameraSpeedGyro: number;
    cameraSpeedStick: number;
}

export type CurrentPlayer_outfits = Pick<CurrentPlayer, never> & {
    shoesGear: ShoesGear_outfitsCurrentPlayer;
    clothingGear: ClothingGear_outfitsCurrentPlayer;
    headGear: HeadGear_outfitsCurrentPlayer;
    weapon: Weapon_outfitsCurrentPlayer;
};

export type ShoesGear_outfitsCurrentPlayer = Pick<ShoesGear, 'shoesGearId' | 'name' | 'image'> & {
    primaryGearPower: Pick<GearPower, 'name' | 'image'>;
    additionalGearPowers: Pick<GearPower, 'name' | 'image'>[];
};
export type ClothingGear_outfitsCurrentPlayer = Pick<ClothingGear, 'clothingGearId' | 'name' | 'image'> & {
    primaryGearPower: Pick<GearPower, 'name' | 'image'>;
    additionalGearPowers: Pick<GearPower, 'name' | 'image'>[];
};
export type HeadGear_outfitsCurrentPlayer = Pick<HeadGear, 'headGearId' | 'name' | 'image'> & {
    primaryGearPower: Pick<GearPower, 'name' | 'image'>;
    additionalGearPowers: Pick<GearPower, 'name' | 'image'>[];
};
export type Weapon_outfitsCurrentPlayer = Pick<Weapon, 'id' | 'weaponId' | 'name' | 'image'> & {
    subWeapon: Pick<SubWeapon, 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image'>;
};

/** d935d9e9ba7a5b6b5d6ece7f253304fc MyOutfitDetailQuery */
export interface MyOutfitDetailResult {
    myOutfit: MyOutfit | null;
}

/** d935d9e9ba7a5b6b5d6ece7f253304fc MyOutfitDetailQuery variables */
export interface MyOutfitDetailVariables {
    myOutfitId: string;
}

/** d02ab22c9dccc440076055c8baa0fa7a MyOutfitCommonDataFilteringConditionQuery */
export interface MyOutfitCommonDataFilteringConditionResult {
    weaponCategories: NodeList<Pick<WeaponCategory, '__typename' | 'id' | 'name' | 'image'>>;
    subWeapons: NodeList<Pick<SubWeapon, '__typename' | 'id' | 'name' | 'image'>>;
    specialWeapons: NodeList<Pick<SpecialWeapon, '__typename' | 'id' | 'name' | 'image'>>;
    gearPowers: NodeList<Pick<GearPower, '__typename' | 'gearPowerId' | 'name' | 'image' | 'power'>>;
    brands: NodeList<Pick<Brand, '__typename' | 'id' | 'name' | 'image'>>;
}

/** d29cd0c2b5e6bac90dd5b817914832f8 MyOutfitCommonDataEquipmentsQuery */
export interface MyOutfitCommonDataEquipmentsResult {
    weapons: NodeList<Weapon_outfits>;
    headGears: NodeList<HeadGear_outfits>;
    clothingGears: NodeList<ClothingGear_outfits>;
    shoesGears: NodeList<ShoesGear_outfits>;
}

/** 31ff008ea218ffbe11d958a52c6f959f CreateMyOutfitMutation */
export interface CreateMyOutfitResult {
    createMyOutfit: CreateMyOutfitPayload;
}

export interface CreateMyOutfitPayload {
    myOutfit: MyOutfit_createPayload;
    userErrors: UserError[] | null;
}

export type MyOutfit_createPayload = Pick<MyOutfit, 'id' | 'index'> & {
    currentShoesGear: Pick<ShoesGear_outfitsCurrentPlayer, 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
    currentClothingGear: Pick<ClothingGear_outfitsCurrentPlayer, 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
    currentHeadGear: Pick<HeadGear_outfitsCurrentPlayer, 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
    currentWeapon: Pick<Weapon_outfitsCurrentPlayer, 'id' | 'name' | 'image' | 'subWeapon' | 'specialWeapon'>;
}

/** 31ff008ea218ffbe11d958a52c6f959f CreateMyOutfitMutation variables */
export interface CreateMyOutfitVariables {
    input: {
        myOutfit: CreateMyOutfitInput;
    };
    /** Always ["client:root:__connection_myOutfits_connection"] */
    connections: string[];
}

/** bb809066282e7d659d3b9e9d4e46b43b UpdateMyOutfitMutation */
export interface UpdateMyOutfitResult {
    updateMyOutfit: UpdateMyOutfitPayload;
}

export interface UpdateMyOutfitPayload {
    myOutfit: Pick<MyOutfit, 'id' | 'index' | 'controlOptionConsole' | 'controlOptionHandheld' | 'currentWeapon' | 'currentShoesGear' | 'currentClothingGear' | 'currentHeadGear'>;
    userErrors: UserError[] | null;
}

/** bb809066282e7d659d3b9e9d4e46b43b UpdateMyOutfitMutation variables */
export interface UpdateMyOutfitVariables {
    input: {
        myOutfit: UpdateMyOutfitInput;
    };
}

export interface MyOutfitInput {
    controlOptionConsole: PlayControlOption;
    controlOptionHandheld: PlayControlOption;
    weaponId: number;
    headGearId: number;
    clothingGearId: number;
    shoesGearId: number;
}

export type CreateMyOutfitInput = MyOutfitInput;
export type UpdateMyOutfitInput = {
    id: string;
} & MyOutfitInput;
