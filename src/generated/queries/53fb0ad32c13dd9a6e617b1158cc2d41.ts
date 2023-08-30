import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, PhotoAlbum, PhotoAlbumItem, PhotoAlbumItemConnection } from '../../types.js';

/**
 * 53fb0ad32c13dd9a6e617b1158cc2d41 PhotoAlbumRefetchQuery
 *
 * query PhotoAlbumRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface PhotoAlbumRefetchQuery_53fb0ad {
    photoAlbum: /** PhotoAlbum */ OperationFieldType<'PhotoAlbumRefetchQuery', 'photoAlbum', {
        items: /** PhotoAlbumItemConnection */ LinkedFieldType<PhotoAlbum, 'items', {
            nodes: /** PhotoAlbumItem */ LinkedFieldType<PhotoAlbumItemConnection, 'nodes', {
                id: PhotoAlbumItem['id'];
                photo: /** Image */ LinkedFieldType<PhotoAlbumItem, 'photo', {
                    url: Image['url'];
                }, false>;
                thumbnail: /** Image */ LinkedFieldType<PhotoAlbumItem, 'thumbnail', {
                    url: Image['url'];
                }, false>;
                uploadedTime: PhotoAlbumItem['uploadedTime'];
            }, true>;
        }, false>;
    }>;
}

export default PhotoAlbumRefetchQuery_53fb0ad;
export { PhotoAlbumRefetchQuery_53fb0ad };
