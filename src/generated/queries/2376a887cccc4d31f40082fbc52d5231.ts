import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, VsStage, VsStageConnection, VsStageRecordStats } from '../../types.js';

/**
 * 2376a887cccc4d31f40082fbc52d5231 StageRecordsRefetchQuery
 *
 * query StageRecordsRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface StageRecordsRefetchQuery_2376a88 {
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
                winRateTw: VsStageRecordStats['winRateTw'];
            }, false>;
            vsStageId: VsStage['vsStageId'];
        }, true>;
    }>;
}

export default StageRecordsRefetchQuery_2376a88;
export { StageRecordsRefetchQuery_2376a88 };
