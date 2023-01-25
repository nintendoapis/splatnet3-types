import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { VsHistoryDetail, VsHistoryDetailConnection, VsHistoryGroup, VsHistoryGroupConnection, VsMode, VsResult } from '../types.js';

/**
 * 0329c535a32f914fd44251be1f489e24 PagerLatestVsDetailQuery
 *
 * query PagerLatestVsDetailQuery
 *
 * Generated 25/01/2023 from SplatNet 3 2.0.0-7070f95e.
 */
interface PagerLatestVsDetailQuery_0329c53 {
    vsResult: /** VsResult */ OperationFieldType<'PagerLatestVsDetailQuery', 'vsResult', {
        historyGroups: /** VsHistoryGroupConnection */ LinkedFieldType<VsResult, 'historyGroups', {
            nodes: /** VsHistoryGroup */ LinkedFieldType<VsHistoryGroupConnection, 'nodes', {
                historyDetails: /** VsHistoryDetailConnection */ LinkedFieldType<VsHistoryGroup, 'historyDetails', {
                    nodes: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetailConnection, 'nodes', {
                        id: VsHistoryDetail['id'];
                        vsMode: /** VsMode */ LinkedFieldType<VsHistoryDetail, 'vsMode', {
                            id: VsMode['id'];
                            mode: VsMode['mode'];
                        }, false>;
                    }, true>;
                }, false>;
            }, true>;
        }, false>;
    }>;
}

export default PagerLatestVsDetailQuery_0329c53;
export { PagerLatestVsDetailQuery_0329c53 };
