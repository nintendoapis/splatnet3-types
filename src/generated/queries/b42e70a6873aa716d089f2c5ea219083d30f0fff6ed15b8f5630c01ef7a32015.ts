import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Brand, GearPower, Image, SaleGear } from '../../types.js';

/**
 * b42e70a6873aa716d089f2c5ea219083d30f0fff6ed15b8f5630c01ef7a32015 SaleGearDetailQuery
 *
 * query SaleGearDetailQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface SaleGearDetailQuery_b42e70a {
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
    }) & ({
        __typename: 'SaleGear';
    })>;
}

export default SaleGearDetailQuery_b42e70a;
export { SaleGearDetailQuery_b42e70a };
