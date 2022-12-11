import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CurrentPlayer, Image } from '../types.js';

/**
 * 61228d553e7463c203e05e7810dd79a7 SettingQuery
 *
 * query SettingQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-15dc639f.
 */
interface SettingQuery_61228d5 {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'SettingQuery', 'currentPlayer', {
        name: CurrentPlayer['name'];
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
    }>;
}

export default SettingQuery_61228d5;
export { SettingQuery_61228d5 };
