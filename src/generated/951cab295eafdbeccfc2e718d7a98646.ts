import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Brand, GearPower, Gesotown, Image, PickupBrand, SaleGear } from '../types.js';

/**
 * 951cab295eafdbeccfc2e718d7a98646 GesotownRefetchQuery
 *
 * query GesotownRefetchQuery
 *
 * Generated 16/03/2023 from SplatNet 3 3.0.0-6049221b.
 */
interface GesotownRefetchQuery_951cab2 {
    gesotown: /** Gesotown */ OperationFieldType<'GesotownRefetchQuery', 'gesotown', {
        limitedGears: /** SaleGear */ LinkedFieldType<Gesotown, 'limitedGears', {
            id: SaleGear['id'];
            gear: /** unknown type */ LinkedFieldType<SaleGear, 'gear', {
                __typename: string;
                additionalGearPowers: /** GearPower */ LinkedFieldType<SaleGear['gear'], 'additionalGearPowers', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, true>;
                brand: /** Brand */ LinkedFieldType<SaleGear['gear'], 'brand', {
                    id: Brand['id'];
                    image: /** Image */ LinkedFieldType<Brand, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Brand['name'];
                }, false>;
                image: /** Image */ LinkedFieldType<SaleGear['gear'], 'image', {
                    url: Image['url'];
                }, false>;
                name: SaleGear['gear']['name'];
                primaryGearPower: /** GearPower */ LinkedFieldType<SaleGear['gear'], 'primaryGearPower', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, false>;
            }, false>;
            price: SaleGear['price'];
            saleEndTime: SaleGear['saleEndTime'];
        }, true>;
        pickupBrand: /** PickupBrand */ LinkedFieldType<Gesotown, 'pickupBrand', {
            brand: /** Brand */ LinkedFieldType<PickupBrand, 'brand', {
                id: Brand['id'];
                name: Brand['name'];
                usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                    desc: GearPower['desc'];
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    isEmptySlot: GearPower['isEmptySlot'];
                    name: GearPower['name'];
                }, false>;
            }, false>;
            brandGears: /** SaleGear */ LinkedFieldType<PickupBrand, 'brandGears', {
                id: SaleGear['id'];
                gear: /** unknown type */ LinkedFieldType<SaleGear, 'gear', {
                    __typename: string;
                    additionalGearPowers: /** GearPower */ LinkedFieldType<SaleGear['gear'], 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    brand: /** Brand */ LinkedFieldType<SaleGear['gear'], 'brand', {
                        id: Brand['id'];
                        image: /** Image */ LinkedFieldType<Brand, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Brand['name'];
                    }, false>;
                    image: /** Image */ LinkedFieldType<SaleGear['gear'], 'image', {
                        url: Image['url'];
                    }, false>;
                    name: SaleGear['gear']['name'];
                    primaryGearPower: /** GearPower */ LinkedFieldType<SaleGear['gear'], 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }, false>;
                price: SaleGear['price'];
                saleEndTime: SaleGear['saleEndTime'];
            }, true>;
            image: /** Image */ LinkedFieldType<PickupBrand, 'image', {
                url: Image['url'];
            }, false>;
            nextBrand: /** Brand */ LinkedFieldType<PickupBrand, 'nextBrand', {
                id: Brand['id'];
                image: /** Image */ LinkedFieldType<Brand, 'image', {
                    url: Image['url'];
                }, false>;
                name: Brand['name'];
            }, false>;
            saleEndTime: PickupBrand['saleEndTime'];
        }, false>;
    }>;
}

export default GesotownRefetchQuery_951cab2;
export { GesotownRefetchQuery_951cab2 };
