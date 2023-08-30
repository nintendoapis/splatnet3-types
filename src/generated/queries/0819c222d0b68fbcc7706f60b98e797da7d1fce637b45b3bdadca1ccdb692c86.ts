import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, PhotoAlbum, PhotoAlbumItem, PhotoAlbumItemConnection } from '../../types.js';

/**
 * 0819c222d0b68fbcc7706f60b98e797da7d1fce637b45b3bdadca1ccdb692c86 PhotoAlbumRefetchQuery
 *
 * query PhotoAlbumRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface PhotoAlbumRefetchQuery_0819c22 {
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

export default PhotoAlbumRefetchQuery_0819c22;
export { PhotoAlbumRefetchQuery_0819c22 };
