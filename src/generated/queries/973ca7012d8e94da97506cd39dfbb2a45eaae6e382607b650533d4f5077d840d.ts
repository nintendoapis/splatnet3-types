import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { VsHistoryDetail } from '../../types.js';

/**
 * 973ca7012d8e94da97506cd39dfbb2a45eaae6e382607b650533d4f5077d840d VsHistoryDetailPagerRefetchQuery
 *
 * query VsHistoryDetailPagerRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface VsHistoryDetailPagerRefetchQuery_973ca70 {
    vsHistoryDetail: /** unknown type */ OperationFieldType<'VsHistoryDetailPagerRefetchQuery', 'node', ({
        __typename: string;
        id: VsHistoryDetail['id'];
    }) & (/** VsHistoryDetail */ {
        nextHistoryDetail: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetail, 'nextHistoryDetail', {
            id: VsHistoryDetail['id'];
        }, false>;
        previousHistoryDetail: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetail, 'previousHistoryDetail', {
            id: VsHistoryDetail['id'];
        }, false>;
    }) & ({
        __typename: 'VsHistoryDetail';
    })>;
}

export default VsHistoryDetailPagerRefetchQuery_973ca70;
export { VsHistoryDetailPagerRefetchQuery_973ca70 };
