import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, SpecialWeapon, SubWeapon, Weapon, WeaponCategory, WeaponConnection, WeaponRecordStats } from '../../types.js';

/**
 * ebd88adbba13f09100f9326b1ec4c348 WeaponRecordQuery
 *
 * query WeaponRecordQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface WeaponRecordQuery_ebd88ad {
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

export default WeaponRecordQuery_ebd88ad;
export { WeaponRecordQuery_ebd88ad };
