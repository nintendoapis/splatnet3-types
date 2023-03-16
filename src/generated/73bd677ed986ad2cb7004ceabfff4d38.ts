import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CurrentPlayer, Image } from '../types.js';

/**
 * 73bd677ed986ad2cb7004ceabfff4d38 SettingQuery
 *
 * query SettingQuery
 *
 * Generated 16/03/2023 from SplatNet 3 3.0.0-6049221b.
 */
interface SettingQuery_73bd677 {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'SettingQuery', 'currentPlayer', {
        name: CurrentPlayer['name'];
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
    }>;
    expansionPassUrl: OperationFieldType<'SettingQuery', 'expansionPassUrl', UnknownScalarType>;
}

export default SettingQuery_73bd677;
export { SettingQuery_73bd677 };
