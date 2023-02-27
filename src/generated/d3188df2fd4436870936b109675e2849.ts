import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CoopHistoryDetail } from '../types.js';

/**
 * d3188df2fd4436870936b109675e2849 CoopHistoryDetailRefetchQuery
 *
 * query CoopHistoryDetailRefetchQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface CoopHistoryDetailRefetchQuery_d3188df {
    node: /** unknown type */ OperationFieldType<'CoopHistoryDetailRefetchQuery', 'node', ({
        __typename: string;
        id: CoopHistoryDetail['id'];
    }) & (/** CoopHistoryDetail */ {
        nextHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'nextHistoryDetail', {
            id: CoopHistoryDetail['id'];
        }, false>;
        previousHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'previousHistoryDetail', {
            id: CoopHistoryDetail['id'];
        }, false>;
    }) & ({
        __typename: 'CoopHistoryDetail';
    })>;
}

export default CoopHistoryDetailRefetchQuery_d3188df;
export { CoopHistoryDetailRefetchQuery_d3188df };
