import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CurrentPlayer, MaskingImage, SpecialWeapon, Weapon } from '../../types.js';

/**
 * 49dd00428fb8e9b4dde62f585c8de1e0 BattleHistoryCurrentPlayerQuery
 *
 * query BattleHistoryCurrentPlayerQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface BattleHistoryCurrentPlayerQuery_49dd004 {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'BattleHistoryCurrentPlayerQuery', 'currentPlayer', {
        species: CurrentPlayer['species'];
        weapon: /** Weapon */ LinkedFieldType<CurrentPlayer, 'weapon', {
            id: Weapon['id'];
            specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                id: SpecialWeapon['id'];
                maskingImage: /** MaskingImage */ LinkedFieldType<SpecialWeapon, 'maskingImage', {
                    height: MaskingImage['height'];
                    maskImageUrl: MaskingImage['maskImageUrl'];
                    overlayImageUrl: MaskingImage['overlayImageUrl'];
                    width: MaskingImage['width'];
                }, false>;
            }, false>;
        }, false>;
    }>;
}

export default BattleHistoryCurrentPlayerQuery_49dd004;
export { BattleHistoryCurrentPlayerQuery_49dd004 };
