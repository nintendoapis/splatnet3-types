import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Brand, GearPower, Gesotown, Image, PickupBrand, SaleGear } from '../../types.js';

/**
 * d6f94d4c05a111957bcd65f8649d628b02bf32d81f26f1d5b56eaef438e55bab GesotownQuery
 *
 * query GesotownQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface GesotownQuery_d6f94d4 {
    gesotown: /** Gesotown */ OperationFieldType<'GesotownQuery', 'gesotown', {
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
                    usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                        desc: GearPower['desc'];
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        isEmptySlot: GearPower['isEmptySlot'];
                        name: GearPower['name'];
                    }, false>;
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
            isAlreadyOrdered: SaleGear['isAlreadyOrdered'];
            nextGear: /** SaleGear */ LinkedFieldType<SaleGear, 'nextGear', {
                id: SaleGear['id'];
            }, false>;
            ownedGear: /** unknown type */ LinkedFieldType<SaleGear, 'ownedGear', {
                __typename: string;
                additionalGearPowers: /** GearPower */ LinkedFieldType<SaleGear['ownedGear'], 'additionalGearPowers', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, true>;
                image: /** Image */ LinkedFieldType<SaleGear['ownedGear'], 'image', {
                    url: Image['url'];
                }, false>;
                name: SaleGear['ownedGear']['name'];
                primaryGearPower: /** GearPower */ LinkedFieldType<SaleGear['ownedGear'], 'primaryGearPower', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, false>;
            }, false>;
            previousGear: /** SaleGear */ LinkedFieldType<SaleGear, 'previousGear', {
                id: SaleGear['id'];
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
                        usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                            desc: GearPower['desc'];
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            isEmptySlot: GearPower['isEmptySlot'];
                            name: GearPower['name'];
                        }, false>;
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
                isAlreadyOrdered: SaleGear['isAlreadyOrdered'];
                nextGear: /** SaleGear */ LinkedFieldType<SaleGear, 'nextGear', {
                    id: SaleGear['id'];
                }, false>;
                ownedGear: /** unknown type */ LinkedFieldType<SaleGear, 'ownedGear', {
                    __typename: string;
                    additionalGearPowers: /** GearPower */ LinkedFieldType<SaleGear['ownedGear'], 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    image: /** Image */ LinkedFieldType<SaleGear['ownedGear'], 'image', {
                        url: Image['url'];
                    }, false>;
                    name: SaleGear['ownedGear']['name'];
                    primaryGearPower: /** GearPower */ LinkedFieldType<SaleGear['ownedGear'], 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }, false>;
                previousGear: /** SaleGear */ LinkedFieldType<SaleGear, 'previousGear', {
                    id: SaleGear['id'];
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

export default GesotownQuery_d6f94d4;
export { GesotownQuery_d6f94d4 };
