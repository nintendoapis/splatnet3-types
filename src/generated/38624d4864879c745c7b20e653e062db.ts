import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Image, VsStage, VsStageConnection, VsStageRecordStats } from '../types.js';

/**
 * 38624d4864879c745c7b20e653e062db StageRecordsRefetchQuery
 *
 * query StageRecordsRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5e2bcdfb.
 */
interface StageRecordsRefetchQuery_38624d4 {
    stageRecords: /** VsStageConnection */ OperationFieldType<'StageRecordsRefetchQuery', 'vsStages', {
        nodes: /** VsStage */ LinkedFieldType<VsStageConnection, 'nodes', {
            id: VsStage['id'];
            image: /** Image */ LinkedFieldType<VsStage, 'image', {
                url: Image['url'];
            }, false>;
            name: VsStage['name'];
            originalImage: /** Image */ LinkedFieldType<VsStage, 'image', {
                url: Image['url'];
            }, false>;
            stageId: VsStage['vsStageId'];
            stats: /** VsStageRecordStats */ LinkedFieldType<VsStage, 'stats', {
                lastPlayedTime: VsStageRecordStats['lastPlayedTime'];
                winRateAr: VsStageRecordStats['winRateAr'];
                winRateCl: VsStageRecordStats['winRateCl'];
                winRateGl: VsStageRecordStats['winRateGl'];
                winRateLf: VsStageRecordStats['winRateLf'];
            }, false>;
        }, true>;
    }>;
}

export default StageRecordsRefetchQuery_38624d4;
export { StageRecordsRefetchQuery_38624d4 };
