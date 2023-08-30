import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { VsHistoryDetail, VsHistoryDetailConnection, VsHistoryGroup, VsHistoryGroupConnection, VsMode, VsResult } from '../../types.js';

/**
 * 73462e18d464acfdf7ac36bde08a1859aa2872a90ed0baed69c94864c20de046 PagerLatestVsDetailQuery
 *
 * query PagerLatestVsDetailQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface PagerLatestVsDetailQuery_73462e1 {
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

export default PagerLatestVsDetailQuery_73462e1;
export { PagerLatestVsDetailQuery_73462e1 };
