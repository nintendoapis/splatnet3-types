import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { PlayHistory, XMatchMax } from '../types.js';

/**
 * f8ae00773cc412a50dd41a6d9a159ddd ConfigureAnalyticsQuery
 *
 * query ConfigureAnalyticsQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5644e7a2.
 */
interface ConfigureAnalyticsQuery_f8ae007 {
    playHistory: /** PlayHistory */ OperationFieldType<'ConfigureAnalyticsQuery', 'playHistory', {
        battleNumTotal: PlayHistory['battleNumTotal'];
        gameStartTime: PlayHistory['gameStartTime'];
        paintPointTotal: PlayHistory['paintPointTotal'];
        udemaeMax: PlayHistory['udemaeMax'];
        xMatchMaxAr: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxAr', {
            rank: XMatchMax['rank'];
        }, false>;
        xMatchMaxCl: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxCl', {
            rank: XMatchMax['rank'];
        }, false>;
        xMatchMaxGl: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxGl', {
            rank: XMatchMax['rank'];
        }, false>;
        xMatchMaxLf: /** XMatchMax */ LinkedFieldType<PlayHistory, 'xMatchMaxLf', {
            rank: XMatchMax['rank'];
        }, false>;
    }>;
}

export default ConfigureAnalyticsQuery_f8ae007;
export { ConfigureAnalyticsQuery_f8ae007 };
