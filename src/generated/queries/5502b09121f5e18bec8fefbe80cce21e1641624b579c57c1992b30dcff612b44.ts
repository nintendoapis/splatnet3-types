import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, MyOutfitShare } from '../../types.js';

/**
 * 5502b09121f5e18bec8fefbe80cce21e1641624b579c57c1992b30dcff612b44 useShareMyOutfitQuery
 *
 * query useShareMyOutfitQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface useShareMyOutfitQuery_5502b09 {
    myOutfitShare: /** MyOutfitShare */ OperationFieldType<'useShareMyOutfitQuery', 'myOutfitShare', {
        image: /** Image */ LinkedFieldType<MyOutfitShare, 'image', {
            url: Image['url'];
        }, false>;
    }>;
}

export default useShareMyOutfitQuery_5502b09;
export { useShareMyOutfitQuery_5502b09 };
