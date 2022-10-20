import { Image, UserError } from './common.js';
import { Brand, ClothingGear, GearPower, HeadGear, ShoesGear } from './gear.js';

export interface SaleGear {
    __typename: 'SaleGear';
    id: string;
    saleEndTime: string;
    price: number;
    isAlreadyOrdered: boolean;
    gear: HeadGear_saleGear | ClothingGear_saleGear | ShoesGear_saleGear;
    nextGear: Pick<SaleGear, 'id'> | null;
    previousGear: Pick<SaleGear, 'id'> | null;
}

type SaleGear_Gear<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__typename' | 'name' | 'primaryGearPower' | 'additionalGearPowers' | 'image'> & {
    brand: Pick<Brand, 'id' | 'name' | 'image' | 'usualGearPower'>;
};
export type HeadGear_saleGear = SaleGear_Gear<HeadGear>;
export type ClothingGear_saleGear = SaleGear_Gear<ClothingGear>;
export type ShoesGear_saleGear = SaleGear_Gear<ShoesGear>;

/** a43dd44899a09013bcfd29b4b13314ff GesotownQuery */
export interface GesotownResult {
    gesotown: Gesotown;
}

/** 951cab295eafdbeccfc2e718d7a98646 GesotownRefetchQuery */
export type GesotownRefetchResult = GesotownResult;

export interface Gesotown {
    pickupBrand: PickupBrand;
    limitedGears: SaleGear_gesotown[];
}

export interface PickupBrand {
    image: Pick<Image, 'url'>;
    brand: Pick<Brand, 'id' | 'name' | 'usualGearPower'>;
    saleEndTime: string;
    brandGears: SaleGear_gesotown[];
    nextBrand: Pick<Brand, 'id' | 'name' | 'image'>;
}

export type SaleGear_gesotown = Pick<SaleGear, 'id' | 'saleEndTime' | 'price'> & {
    gear: SaleGear_gesotown_Gear<HeadGear | ClothingGear | ShoesGear>;
};
type SaleGear_gesotown_Gear<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__typename' | 'name' | 'primaryGearPower' | 'additionalGearPowers' | 'image'> & {
    brand: Pick<Brand, 'id' | 'name' | 'image'>;
};
export type HeadGear_gesotown = SaleGear_gesotown_Gear<HeadGear>;
export type ClothingGear_gesotown = SaleGear_gesotown_Gear<ClothingGear>;
export type ShoesGear_gesotown = SaleGear_gesotown_Gear<ShoesGear>;

/** 6eb1b255b2cf04c08041567148c883ad SaleGearDetailQuery */
export interface SaleGearDetailResult {
    saleGear: SaleGear;
}

/** 6eb1b255b2cf04c08041567148c883ad SaleGearDetailQuery variables */
export interface SaleGearDetailVariables {
    saleGearId: string;
}

/** b79b7a101a243912754f72437e2ad7e5 SaleGearDetailOrderGesotownGearMutation */
export interface SaleGearDetailOrderGesotownGearResult {
    orderGesotownGear: OrderGesotownGearPayload;
}

export interface OrderGesotownGearPayload {
    gesotownGear: SaleGear_order;
    previousOrderedGear: SaleGear_order | null;
    userErrors: UserError[] | null;
}

export type SaleGear_order = Pick<SaleGear, 'id' | 'price' | 'saleEndTime' | 'isAlreadyOrdered' | 'nextGear' | 'previousGear'> & {
    gear: HeadGear_order | ClothingGear_order | ShoesGear_order;
};
export type HeadGear_order = Pick<HeadGear, '__typename' | 'headGearId' | 'name' | 'primaryGearPower' | 'additionalGearPowers' | 'image'> & {
    brand: Pick<Brand, 'id' | 'name' | 'image' | 'usualGearPower'>;
    primaryGearPower: Pick<GearPower, 'gearPowerId' | 'name' | 'image'>;
};
export type ClothingGear_order = Pick<ClothingGear, '__typename' | 'clothingGearId' | 'name' | 'primaryGearPower' | 'additionalGearPowers' | 'image'> & {
    brand: Pick<Brand, 'id' | 'name' | 'image' | 'usualGearPower'>;
    primaryGearPower: Pick<GearPower, 'gearPowerId' | 'name' | 'image'>;
};
export type ShoesGear_order = Pick<ShoesGear, '__typename' | 'shoesGearId' | 'name' | 'primaryGearPower' | 'additionalGearPowers' | 'image'> & {
    brand: Pick<Brand, 'id' | 'name' | 'image' | 'usualGearPower'>;
    primaryGearPower: Pick<GearPower, 'gearPowerId' | 'name' | 'image'>;
};

/** b79b7a101a243912754f72437e2ad7e5 SaleGearDetailOrderGesotownGearMutation variables */
export interface SaleGearDetailOrderGesotownGearVariables {
    input: {
        id: string;
        isForceOrder: boolean;
    };
}
