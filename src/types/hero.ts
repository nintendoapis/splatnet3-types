import { DownloadImage, Image } from './common.js';

/** fbee1a882371d4e3becec345636d7d1c HeroHistoryQuery */
export interface HeroHistoryResult {
    heroRecord: HeroRecord;
}

/** 4f9ae2b8f1d209a5f20302111b28f975 HeroHistoryRefetchQuery */
export type HeroHistoryRefetchQuery = HeroHistoryResult;

export interface HeroRecord {
    progressComment: string;
    progressPhrase: string;
    progressRate: number;
    sites: HeroSite[];
    reward: WallpaperReward | null;
    fullReward: WallpaperReward | null;
}

export interface HeroSite {
    id: string;
    siteNumber: number;
    progressRate: number;
    siteName: string;
    image: Pick<Image, 'url'>;
    progressComment: string;
    /** "AORI" = Callie, "HOTARU" = Marie */
    progressCommentSpeaker: 'AORI' | 'HOTARU';
    reward: WallpaperReward | null;
    clearedStages: HeroStage[];
}

export interface HeroStage {
    stageNumber: number;
    isBoss: boolean;
    bestClearTimeSec: number;
    bestClearWeapon: HeroSupplyWeapon;
    stageName: string;
    description: string;
}

export interface HeroSupplyWeapon {
    name: string;
    category: 'MAIN' | 'SUB' | 'SPECIAL' | 'NONE';
    image: Pick<Image, 'url'>;
}

export interface WallpaperReward {
    id: string;
    sampleImage: Pick<Image, 'url'>;
    downloadImages: DownloadImage[];
}
