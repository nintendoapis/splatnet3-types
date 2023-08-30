import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { PlayHistory, XMatchMax } from '../../types.js';

/**
 * 2a9302bdd09a13f8b344642d4ed483b9464f20889ac17401e993dfa5c2bb3607 ConfigureAnalyticsQuery
 *
 * query ConfigureAnalyticsQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface ConfigureAnalyticsQuery_2a9302b {
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

export default ConfigureAnalyticsQuery_2a9302b;
export { ConfigureAnalyticsQuery_2a9302b };
