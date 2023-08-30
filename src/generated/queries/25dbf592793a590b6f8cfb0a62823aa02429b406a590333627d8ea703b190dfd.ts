import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, VsStage, VsStageConnection, VsStageRecordStats } from '../../types.js';

/**
 * 25dbf592793a590b6f8cfb0a62823aa02429b406a590333627d8ea703b190dfd StageRecordsRefetchQuery
 *
 * query StageRecordsRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface StageRecordsRefetchQuery_25dbf59 {
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

export default StageRecordsRefetchQuery_25dbf59;
export { StageRecordsRefetchQuery_25dbf59 };
