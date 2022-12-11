import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Image, VsStage, VsStageConnection, VsStageRecordStats } from '../types.js';

/**
 * fe965bef54377d20e9133087cc6cdf3f StageRecordsRefetchQuery
 *
 * query StageRecordsRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-216d0219.
 */
interface StageRecordsRefetchQuery_fe965be {
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

export default StageRecordsRefetchQuery_fe965be;
export { StageRecordsRefetchQuery_fe965be };
