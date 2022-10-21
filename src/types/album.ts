import { Image, NodeList } from './common.js';

/** 7e950e4f69a5f50013bba8a8fb6a3807 PhotoAlbumQuery */
export interface PhotoAlbumResult {
    photoAlbum: Pick<PhotoAlbum, 'items'>;
}

/** 53fb0ad32c13dd9a6e617b1158cc2d41 PhotoAlbumRefetchQuery */
export type PhotoAlbumRefetchResult = PhotoAlbumResult;

export interface PhotoAlbum {
    __typename: 'PhotoAlbum';
    items: NodeList<PhotoAlbumItem_result>;
    nplnUserId: string;
}

export interface PhotoAlbumItem {
    __typename: 'PhotoAlbumItem';
    id: string;
    thumbnail: Pick<Image, 'url'>;
    photo: Pick<Image, 'url'>;
    uploadedTime: string;
}

type PhotoAlbumItem_result = Pick<PhotoAlbumItem, 'id' | 'thumbnail' | 'photo' | 'uploadedTime'>;
