import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Brand, ClothingGear, GearPower, HeadGear, Image, OrderGesotownGearPayload, SaleGear, ShoesGear, UserError } from '../../types.js';

/**
 * bb716c3be6e85331741d7e2f9b36a6c0de92ca1b8382418744c1540fec7c8f57 SaleGearDetailOrderGesotownGearMutation
 *
 * mutation SaleGearDetailOrderGesotownGearMutation
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface SaleGearDetailOrderGesotownGearMutation_bb716c3 {
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
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<OrderGesotownGearPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default SaleGearDetailOrderGesotownGearMutation_bb716c3;
export { SaleGearDetailOrderGesotownGearMutation_bb716c3 };
