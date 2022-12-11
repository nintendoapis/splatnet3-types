import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { VsHistoryDetail } from '../types.js';

/**
 * 994cf141e55213e6923426caf37a1934 VsHistoryDetailPagerRefetchQuery
 *
 * query VsHistoryDetailPagerRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-15dc639f.
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
