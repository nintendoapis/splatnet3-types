import { CatalogRewardState } from '../enum.js';
import { Image } from './common.js';
import { GearPower } from './gear.js';

export interface Catalog {
    progress: CatalogProgress;
    seasonName: string;
    seasonEndTime: string;
    bonus: CatalogBonus;
}

export interface CatalogProgress {
    __typename: 'CatalogProgress';
    level: number;
    totalPoint: number;
    levelUpPoint: number;
    currentPoint: number;
    extraReward: CatalogExtraReward | null;
    rewards: CatalogReward[];
}

export type CatalogExtraReward = unknown;

export interface CatalogReward {
    level: number;
    currentPoint: number;
    state: CatalogRewardState | keyof typeof CatalogRewardState;
    item: CatalogItem;
}

export interface CatalogItem {
    id: string;
    kind: string;
    name: string;
    amount: number;
    image: Pick<Image, 'url'>;
    primaryGearPower: Pick<GearPower, 'name' | 'image'> | null;
}

export interface CatalogBonus {
    dailyWinPoint: number;
    isBigRun: boolean;
    isFest: boolean;
}

/** 52504060c81ff2f2d618c4e5377e6e7c CatalogQuery */
export interface CatalogResult {
    catalog: Catalog;
}

/** 4423dfd630867301fcdd834cd52922f4 CatalogRefetchQuery */
export type CatalogRefetchResult = CatalogResult;

/** aead379b98c14798df81f0dd3ebe6121 CatalogQuery */
export interface CatalogResult_aead379 {
    catalog: Catalog_aead379;
}
/** 02d2de8967f4ad2ce4f67a3c6c7c4d48 CatalogRefetchQuery */
export type CatalogRefetchResult_02d2de8 = CatalogResult_aead379;

export type Catalog_aead379 = Pick<Catalog, 'seasonName' | 'seasonEndTime'> & {
    progress: CatalogProgress_aead379;
    bonus: CatalogBonus_aead379;
};
export type CatalogProgress_aead379 = Pick<CatalogProgress, 'level' | 'totalPoint' | 'levelUpPoint' | 'currentPoint' | 'extraReward' | 'rewards'>;
export type CatalogBonus_aead379 = Pick<CatalogBonus, 'dailyWinPoint' | 'isFest'>;
