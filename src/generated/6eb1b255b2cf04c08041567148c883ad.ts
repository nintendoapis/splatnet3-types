import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Brand, GearPower, Image, SaleGear } from '../types.js';

/**
 * 6eb1b255b2cf04c08041567148c883ad SaleGearDetailQuery
 *
 * query SaleGearDetailQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface SaleGearDetailQuery_6eb1b25 {
    saleGear: /** unknown type */ OperationFieldType<'SaleGearDetailQuery', 'node', ({
        __typename: string;
        id: SaleGear['id'];
    }) & (/** SaleGear */ {
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
    }) & ({
        __typename: 'SaleGear';
    })>;
}

export default SaleGearDetailQuery_6eb1b25;
export { SaleGearDetailQuery_6eb1b25 };
