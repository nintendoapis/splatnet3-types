import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CoopHistoryDetail } from '../../types.js';

/**
 * 4bf516ccfd9a3f4efc32b215c59ae42c2a06dd2d8f73de95c2676dea6db74446 CoopHistoryDetailRefetchQuery
 *
 * query CoopHistoryDetailRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface CoopHistoryDetailRefetchQuery_4bf516c {
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

export default CoopHistoryDetailRefetchQuery_4bf516c;
export { CoopHistoryDetailRefetchQuery_4bf516c };
