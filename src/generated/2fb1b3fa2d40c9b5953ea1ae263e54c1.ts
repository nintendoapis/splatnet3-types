import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Image, VsStage, VsStageConnection, VsStageRecordStats } from '../types.js';

/**
 * 2fb1b3fa2d40c9b5953ea1ae263e54c1 StageRecordsRefetchQuery
 *
 * query StageRecordsRefetchQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface StageRecordsRefetchQuery_2fb1b3f {
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
            vsStageId: VsStage['vsStageId'];
        }, true>;
    }>;
}

export default StageRecordsRefetchQuery_2fb1b3f;
export { StageRecordsRefetchQuery_2fb1b3f };
