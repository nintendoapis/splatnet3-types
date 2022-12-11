import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Image, PhotoAlbum, PhotoAlbumItem, PhotoAlbumItemConnection } from '../types.js';

/**
 * 7e950e4f69a5f50013bba8a8fb6a3807 PhotoAlbumQuery
 *
 * query PhotoAlbumQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-8a061f6c.
 */
interface PhotoAlbumQuery_7e950e4 {
    photoAlbum: /** PhotoAlbum */ OperationFieldType<'PhotoAlbumQuery', 'photoAlbum', {
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

export default PhotoAlbumQuery_7e950e4;
export { PhotoAlbumQuery_7e950e4 };
