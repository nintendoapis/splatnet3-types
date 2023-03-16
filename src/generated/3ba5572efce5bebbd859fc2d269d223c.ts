import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Image, MyOutfitShare } from '../types.js';

/**
 * 3ba5572efce5bebbd859fc2d269d223c useShareMyOutfitQuery
 *
 * query useShareMyOutfitQuery
 *
 * Generated 16/03/2023 from SplatNet 3 3.0.0-6049221b.
 */
interface useShareMyOutfitQuery_3ba5572 {
    myOutfitShare: /** MyOutfitShare */ OperationFieldType<'useShareMyOutfitQuery', 'myOutfitShare', {
        image: /** Image */ LinkedFieldType<MyOutfitShare, 'image', {
            url: Image['url'];
        }, false>;
    }>;
}

export default useShareMyOutfitQuery_3ba5572;
export { useShareMyOutfitQuery_3ba5572 };
