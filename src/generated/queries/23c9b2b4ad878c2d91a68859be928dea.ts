import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponConnection, WeaponRecordStats } from '../../types.js';

/**
 * 23c9b2b4ad878c2d91a68859be928dea WeaponRecordsRefetchQuery
 *
 * query WeaponRecordsRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5644e7a2.
 */
interface WeaponRecordsRefetchQuery_23c9b2b {
    weaponRecords: /** WeaponConnection */ OperationFieldType<'WeaponRecordsRefetchQuery', 'weapons', {
        nodes: /** Weapon */ LinkedFieldType<WeaponConnection, 'nodes', {
            id: Weapon['id'];
            image: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            image2d: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            image2dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            image3d: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            image3dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            name: Weapon['name'];
            originalImage: /** Image */ LinkedFieldType<Weapon, 'image', {
                url: Image['url'];
            }, false>;
            specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                id: SpecialWeapon['id'];
                image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: SpecialWeapon['name'];
                specialWeaponId: SpecialWeapon['specialWeaponId'];
            }, false>;
            stats: /** WeaponRecordStats */ LinkedFieldType<Weapon, 'stats', {
                expToLevelUp: WeaponRecordStats['expToLevelUp'];
                lastUsedTime: WeaponRecordStats['lastUsedTime'];
                level: WeaponRecordStats['level'];
                paint: WeaponRecordStats['paint'];
                vibes: WeaponRecordStats['vibes'];
                win: WeaponRecordStats['win'];
            }, false>;
            subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                id: SubWeapon['id'];
                image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: SubWeapon['name'];
                subWeaponId: SubWeapon['subWeaponId'];
            }, false>;
            weaponCategory: /** WeaponCategory */ LinkedFieldType<Weapon, 'weaponCategory', {
                id: WeaponCategory['id'];
                weaponCategoryId: WeaponCategory['weaponCategoryId'];
            }, false>;
            weaponId: Weapon['weaponId'];
        }, true>;
    }>;
}

export default WeaponRecordsRefetchQuery_23c9b2b;
export { WeaponRecordsRefetchQuery_23c9b2b };
