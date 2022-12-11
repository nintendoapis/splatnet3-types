import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Brand, ClothingGear, GearPower, HeadGear, Image, OrderGesotownGearPayload, SaleGear, ShoesGear, UserError } from '../types.js';

/**
 * b79b7a101a243912754f72437e2ad7e5 SaleGearDetailOrderGesotownGearMutation
 *
 * mutation SaleGearDetailOrderGesotownGearMutation
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-8a061f6c.
 */
interface SaleGearDetailOrderGesotownGearMutation_b79b7a1 {
    orderGesotownGear: /** OrderGesotownGearPayload */ OperationFieldType<'SaleGearDetailOrderGesotownGearMutation', 'orderGesotownGear', {
        gesotownGear: /** SaleGear */ LinkedFieldType<OrderGesotownGearPayload, 'gesotownGear', {
            id: SaleGear['id'];
            gear: /** unknown type */ LinkedFieldType<SaleGear, 'gear', ({
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
            }) & (/** HeadGear */ {
                headGearId: HeadGear['headGearId'];
                primaryGearPower: /** GearPower */ LinkedFieldType<HeadGear, 'primaryGearPower', {
                    gearPowerId: GearPower['gearPowerId'];
                }, false>;
            }) & ({
                __typename: 'HeadGear';
            }) & (/** ClothingGear */ {
                clothingGearId: ClothingGear['clothingGearId'];
                primaryGearPower: /** GearPower */ LinkedFieldType<ClothingGear, 'primaryGearPower', {
                    gearPowerId: GearPower['gearPowerId'];
                }, false>;
            }) & ({
                __typename: 'ClothingGear';
            }) & (/** ShoesGear */ {
                primaryGearPower: /** GearPower */ LinkedFieldType<ShoesGear, 'primaryGearPower', {
                    gearPowerId: GearPower['gearPowerId'];
                }, false>;
                shoesGearId: ShoesGear['shoesGearId'];
            }) & ({
                __typename: 'ShoesGear';
            }), false>;
            isAlreadyOrdered: SaleGear['isAlreadyOrdered'];
            nextGear: /** SaleGear */ LinkedFieldType<SaleGear, 'nextGear', {
                id: SaleGear['id'];
            }, false>;
            previousGear: /** SaleGear */ LinkedFieldType<SaleGear, 'previousGear', {
                id: SaleGear['id'];
            }, false>;
            price: SaleGear['price'];
            saleEndTime: SaleGear['saleEndTime'];
        }, false>;
        previousOrderedGear: /** SaleGear */ LinkedFieldType<OrderGesotownGearPayload, 'previousOrderedGear', {
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
            previousGear: /** SaleGear */ LinkedFieldType<SaleGear, 'previousGear', {
                id: SaleGear['id'];
            }, false>;
            price: SaleGear['price'];
            saleEndTime: SaleGear['saleEndTime'];
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<OrderGesotownGearPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default SaleGearDetailOrderGesotownGearMutation_b79b7a1;
export { SaleGearDetailOrderGesotownGearMutation_b79b7a1 };
