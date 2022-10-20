import { Image } from './common.js';

export interface HeadGear {
    __typename: 'HeadGear';
    __isGear: 'HeadGear';
    headGearId: number;
    name: string;
    rarity: number;
    image: Pick<Image, 'url'>;
    brand: Pick<Brand, '__typename' | 'id' | 'name' | 'image'>;
    primaryGearPower: Pick<GearPower, 'name' | 'image'>;
    additionalGearPowers: Pick<GearPower, 'name' | 'image'>[];
    stats: Pick<GearRecordStats, 'exp'> | null;
}

export interface ClothingGear {
    __typename: 'ClothingGear';
    __isGear: 'ClothingGear';
    clothingGearId: number;
    name: string;
    rarity: number;
    image: Pick<Image, 'url'>;
    brand: Brand;
    primaryGearPower: Pick<GearPower, 'name' | 'image'>;
    additionalGearPowers: Pick<GearPower, 'name' | 'image'>[];
    stats: Pick<GearRecordStats, 'exp'> | null;
}

export interface ShoesGear {
    __typename: 'ShoesGear';
    __isGear: 'ShoesGear';
    shoesGearId: number;
    name: string;
    rarity: number;
    image: Pick<Image, 'url'>;
    brand: Brand;
    primaryGearPower: Pick<GearPower, 'name' | 'image'>;
    additionalGearPowers: Pick<GearPower, 'name' | 'image'>[];
    stats: Pick<GearRecordStats, 'exp'> | null;
}

export interface GearPower {
    __typename: 'GearPower';
    gearPowerId: number;
    name: string;
    desc: string;
    image: Pick<Image, 'url'>;
    power: number;
    isEmptySlot: boolean;
}

export interface Brand {
    __typename: 'Brand';
    id: string;
    name: string;
    image: Pick<Image, 'url'>;
    usualGearPower: Pick<GearPower, 'name' | 'desc' | 'image' | 'isEmptySlot'>;
}

export interface GearRecordStats {
    exp: number;
}
