import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Replay, ReserveReplayDownloadPayload, UserError } from '../../types.js';

/**
 * 07e94ba8076b235d9b16c9e8d1714dfffbd4441c17225c36058b8a7ba44458b1 ReplayModalReserveReplayDownloadMutation
 *
 * mutation ReplayModalReserveReplayDownloadMutation
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface ReplayModalReserveReplayDownloadMutation_07e94ba {
    reserveReplayDownload: /** ReserveReplayDownloadPayload */ OperationFieldType<'ReplayModalReserveReplayDownloadMutation', 'reserveReplayDownload', {
        replay: /** Replay */ LinkedFieldType<ReserveReplayDownloadPayload, 'replay', {
            id: Replay['id'];
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<ReserveReplayDownloadPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default ReplayModalReserveReplayDownloadMutation_07e94ba;
export { ReplayModalReserveReplayDownloadMutation_07e94ba };
