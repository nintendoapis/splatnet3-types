import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CurrentPlayer, Image } from '../../types.js';

/**
 * 8473b5eb2c2048f74eb48b0d3e9779f44febcf3477479625b4dc23449940206b SettingQuery
 *
 * query SettingQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface SettingQuery_8473b5e {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'SettingQuery', 'currentPlayer', {
        name: CurrentPlayer['name'];
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
    }>;
    expansionPassUrl: OperationFieldType<'SettingQuery', 'expansionPassUrl', UnknownScalarType>;
}

export default SettingQuery_8473b5e;
export { SettingQuery_8473b5e };
