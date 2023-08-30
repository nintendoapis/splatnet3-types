import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, VsStage, VsStageConnection, VsStageRecordStats } from '../../types.js';

/**
 * 32383462b6412d446ae22a85a9b544eb StageRecordQuery
 *
 * query StageRecordQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface StageRecordQuery_3238346 {
    stageRecords: /** VsStageConnection */ OperationFieldType<'StageRecordQuery', 'vsStages', {
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

export default StageRecordQuery_3238346;
export { StageRecordQuery_3238346 };
