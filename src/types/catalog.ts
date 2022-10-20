import { Image } from './common.js';
import { GearPower } from './gear.js';

/** aead379b98c14798df81f0dd3ebe6121 CatalogQuery */
export interface CatalogResult {
    catalog: Catalog;
}

/** 02d2de8967f4ad2ce4f67a3c6c7c4d48 CatalogRefetchQuery */
export type CatalogRefetchResult = CatalogResult;

export interface Catalog {
    progress: CatalogProgress;
    seasonName: string;
    seasonEndTime: string;
    bonus: CatalogBonus;
}

export interface CatalogProgress {
    level: number;
    totalPoint: number;
    levelUpPoint: number;
    currentPoint: number;
    extraReward: CatalogExtraReward | null;
    rewards: CatalogReward[];
}

type CatalogExtraReward = unknown;

export interface CatalogReward {
    level: number;
    currentPoint: number;
    state: CatalogRewardState | keyof typeof CatalogRewardState;
    item: CatalogItem;
}

enum CatalogRewardState {
    ACCEPTED = 'ACCEPTED',
    INPROGRESS = 'INPROGRESS',
    UNREACHED = 'UNREACHED',
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
    isFest: boolean;
}
