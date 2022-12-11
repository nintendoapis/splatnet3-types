import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Brand, BrandConnection, GearPower, GearPowerConnection, Image, SpecialWeapon, SpecialWeaponConnection, SubWeapon, SubWeaponConnection, WeaponCategory, WeaponCategoryConnection } from '../types.js';

/**
 * d02ab22c9dccc440076055c8baa0fa7a myOutfitCommonDataFilteringConditionQuery
 *
 * query myOutfitCommonDataFilteringConditionQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-bd36a652.
 */
interface myOutfitCommonDataFilteringConditionQuery_d02ab22 {
    brands: /** BrandConnection */ OperationFieldType<'myOutfitCommonDataFilteringConditionQuery', 'brands', {
        nodes: /** Brand */ LinkedFieldType<BrandConnection, 'nodes', {
            __typename: 'Brand';
            id: Brand['id'];
            image: /** Image */ LinkedFieldType<Brand, 'image', {
                url: Image['url'];
            }, false>;
            name: Brand['name'];
        }, true>;
    }>;
    gearPowers: /** GearPowerConnection */ OperationFieldType<'myOutfitCommonDataFilteringConditionQuery', 'gearPowers', {
        nodes: /** GearPower */ LinkedFieldType<GearPowerConnection, 'nodes', {
            __typename: 'GearPower';
            gearPowerId: GearPower['gearPowerId'];
            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                url: Image['url'];
            }, false>;
            name: GearPower['name'];
            power: GearPower['power'];
        }, true>;
    }>;
    specialWeapons: /** SpecialWeaponConnection */ OperationFieldType<'myOutfitCommonDataFilteringConditionQuery', 'specialWeapons', {
        nodes: /** SpecialWeapon */ LinkedFieldType<SpecialWeaponConnection, 'nodes', {
            __typename: 'SpecialWeapon';
            id: SpecialWeapon['id'];
            image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                url: Image['url'];
            }, false>;
            name: SpecialWeapon['name'];
        }, true>;
    }>;
    subWeapons: /** SubWeaponConnection */ OperationFieldType<'myOutfitCommonDataFilteringConditionQuery', 'subWeapons', {
        nodes: /** SubWeapon */ LinkedFieldType<SubWeaponConnection, 'nodes', {
            __typename: 'SubWeapon';
            id: SubWeapon['id'];
            image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                url: Image['url'];
            }, false>;
            name: SubWeapon['name'];
        }, true>;
    }>;
    weaponCategories: /** WeaponCategoryConnection */ OperationFieldType<'myOutfitCommonDataFilteringConditionQuery', 'weaponCategories', {
        nodes: /** WeaponCategory */ LinkedFieldType<WeaponCategoryConnection, 'nodes', {
            __typename: 'WeaponCategory';
            id: WeaponCategory['id'];
            image: /** Image */ LinkedFieldType<WeaponCategory, 'image', {
                url: Image['url'];
            }, false>;
            name: WeaponCategory['name'];
        }, true>;
    }>;
}

export default myOutfitCommonDataFilteringConditionQuery_d02ab22;
export { myOutfitCommonDataFilteringConditionQuery_d02ab22 };
