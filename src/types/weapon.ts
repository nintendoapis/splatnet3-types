import { Image, MaskingImage, NodeList } from './common.js';

export interface Weapon {
    __typename: 'Weapon';
    id: string;
    weaponId: number;
    weaponCategory: Pick<WeaponCategory, 'id' | 'category'>;
    name: string;
    image: Pick<Image, 'url'>;
    subWeapon: SubWeapon;
    specialWeapon: SpecialWeapon;
    /** null = not owned */
    stats: WeaponRecordStats | null;
}

export interface WeaponRecordStats {
    /** null = never used */
    lastUsedTime: string | null;
    paint: number;
    level: number;
    expToLevelUp: number;
    win: number;
    vibes: number;
}

export interface SubWeapon {
    __typename: 'SubWeapon';
    id: string;
    subWeaponId: number;
    name: string;
    image: Pick<Image, 'url'>;
}

export interface SpecialWeapon {
    __typename: 'SpecialWeapon';
    id: string;
    specialWeaponId: number;
    name: string;
    image: Pick<Image, 'url'>;
    maskingImage: MaskingImage;
}

export interface WeaponCategory {
    __typename: 'WeaponCategory';
    id: string;
    weaponCategoryId: number;
    category: string;
    name: string;
    image: Pick<Image, 'url'>;
}

/** a0c277c719b758a926772879d8e53ef8 WeaponRecordQuery */
export interface WeaponRecordResult {
    weaponRecords: NodeList<Weapon_records>;
}

/** 23c9b2b4ad878c2d91a68859be928dea WeaponRecordsRefetchQuery */
export type WeaponRecordsRefetchResult = WeaponRecordResult;

export type Weapon_records = Pick<Weapon, 'id' | 'weaponId' | 'name' | 'image' | 'stats'> & {
    weaponCategory: Pick<WeaponCategory, 'id' | 'weaponCategoryId'>;
    subWeapon: Pick<SubWeapon, 'id' | 'subWeaponId' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'specialWeaponId' | 'name' | 'image'>;
    image3d: Pick<Image, 'url'>;
    image2d: Pick<Image, 'url'>;
    image3dThumbnail: Pick<Image, 'url'>;
    image2dThumbnail: Pick<Image, 'url'>;
    originalImage: Pick<Image, 'url'>;
};
