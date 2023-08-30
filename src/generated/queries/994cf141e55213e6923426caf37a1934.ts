import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { VsHistoryDetail } from '../../types.js';

/**
 * 994cf141e55213e6923426caf37a1934 VsHistoryDetailPagerRefetchQuery
 *
 * query VsHistoryDetailPagerRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface VsHistoryDetailPagerRefetchQuery_994cf14 {
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

export default VsHistoryDetailPagerRefetchQuery_994cf14;
export { VsHistoryDetailPagerRefetchQuery_994cf14 };
