import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Image, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponConnection, WeaponRecordStats } from '../types.js';

/**
 * 5f279779e7081f2d14ae1ddca0db2b6e WeaponRecordQuery
 *
 * query WeaponRecordQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-8a061f6c.
 */
interface WeaponRecordQuery_5f27977 {
    weaponRecords: /** WeaponConnection */ OperationFieldType<'WeaponRecordQuery', 'weapons', {
        nodes: /** Weapon */ LinkedFieldType<WeaponConnection, 'nodes', {
            id: Weapon['id'];
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

export default WeaponRecordQuery_5f27977;
export { WeaponRecordQuery_5f27977 };
