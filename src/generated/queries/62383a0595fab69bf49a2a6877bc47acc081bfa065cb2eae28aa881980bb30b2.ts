import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, PhotoAlbum, PhotoAlbumItem, PhotoAlbumItemConnection } from '../../types.js';

/**
 * 62383a0595fab69bf49a2a6877bc47acc081bfa065cb2eae28aa881980bb30b2 PhotoAlbumQuery
 *
 * query PhotoAlbumQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface PhotoAlbumQuery_62383a0 {
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

export default PhotoAlbumQuery_62383a0;
export { PhotoAlbumQuery_62383a0 };
