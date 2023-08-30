import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CurrentPlayer, MaskingImage, SpecialWeapon, Weapon } from '../../types.js';

/**
 * 8b59e806751e4e74359b416472925bb405601a626743084d2158af72cc3e7716 BattleHistoryCurrentPlayerQuery
 *
 * query BattleHistoryCurrentPlayerQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface BattleHistoryCurrentPlayerQuery_8b59e80 {
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

export default BattleHistoryCurrentPlayerQuery_8b59e80;
export { BattleHistoryCurrentPlayerQuery_8b59e80 };
