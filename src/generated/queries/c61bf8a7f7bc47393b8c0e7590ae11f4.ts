import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Brand, GearPower, Gesotown, Image, PickupBrand, SaleGear } from '../../types.js';

/**
 * c61bf8a7f7bc47393b8c0e7590ae11f4 GesotownRefetchQuery
 *
 * query GesotownRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5e2bcdfb.
 */
interface GesotownRefetchQuery_c61bf8a {
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

export default GesotownRefetchQuery_c61bf8a;
export { GesotownRefetchQuery_c61bf8a };
