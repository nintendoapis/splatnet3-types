import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Brand, BrandConnection, GearPower, GearPowerConnection, Image, SpecialWeapon, SpecialWeaponConnection, SubWeapon, SubWeaponConnection, WeaponCategory, WeaponCategoryConnection } from '../../types.js';

/**
 * ac20c44a952131cb0c9d00eda7bc1a84c1a99546f0f1fc170212d5a6bb51a426 myOutfitCommonDataFilteringConditionQuery
 *
 * query myOutfitCommonDataFilteringConditionQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface myOutfitCommonDataFilteringConditionQuery_ac20c44 {
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

export default myOutfitCommonDataFilteringConditionQuery_ac20c44;
export { myOutfitCommonDataFilteringConditionQuery_ac20c44 };
