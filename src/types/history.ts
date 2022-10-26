import { Badge, CurrentPlayer, NodeList } from './common.js';
import { Weapon, WeaponCategory } from './weapon.js';

/** 9d4ef9fba3f84d6933bb1f6f436f7200 HistoryRecordQuery */
export interface HistoryRecordResult {
    currentPlayer: Pick<CurrentPlayer, '__isPlayer' | 'byname' | 'name' | 'nameId' | 'nameplate' | 'weapon' | 'headGear' | 'clothingGear' | 'shoesGear' | 'userIcon'>;
    playHistory: Pick<PlayHistory, 'currentTime' | 'gameStartTime' | 'rank' | 'udemae' | 'udemaeMax' | 'xMatchMaxAr' | 'xMatchMaxCl' | 'xMatchMaxGl' | 'xMatchMaxLf' | 'winCountTotal' | 'frequentlyUsedWeapons' | 'paintPointTotal' | 'badges' | 'weaponHistory' | 'recentBadges' | 'allBadges'>;
}

/** 6cd71021eb35a793e3252f7a95deb75a HistoryRecordRefetchQuery */
export type HistoryRecordRefetchResult = HistoryRecordResult;

/** 29957cf5d57b893934de857317cd46d8 HistoryRecordQuery */
export interface HistoryRecordResult_29957cf {
    currentPlayer: Pick<CurrentPlayer, '__isPlayer' | 'byname' | 'name' | 'nameId' | 'nameplate' | 'weapon' | 'headGear' | 'clothingGear' | 'shoesGear'>;
    playHistory: Pick<PlayHistory, 'currentTime' | 'gameStartTime' | 'udemaeMax' | 'xMatchMaxAr' | 'xMatchMaxCl' | 'xMatchMaxGl' | 'xMatchMaxLf' | 'winCountTotal' | 'frequentlyUsedWeapons' | 'paintPointTotal' | 'badges' | 'weaponHistory' | 'recentBadges' | 'allBadges'>;
}

/** 5e1d0bb4b52e2a99049df6e17117f363 HistoryRecordRefetchQuery */
export type HistoryRecordRefetchResult_5e1d0bb = HistoryRecordResult_29957cf;

export interface PlayHistory {
    currentTime: string;
    gameStartTime: string;
    rank: number;
    udemae: string;
    udemaeMax: string;
    xMatchMaxAr: XMatchMax;
    xMatchMaxCl: XMatchMax;
    xMatchMaxGl: XMatchMax;
    xMatchMaxLf: XMatchMax;
    winCountTotal: number;
    frequentlyUsedWeapons: Pick<Weapon, 'id' | 'name' | 'image'>[];
    paintPointTotal: number;
    battleNumTotal: number;
    badges: Pick<Badge, 'id'>[];
    weaponHistory: NodeList<WeaponHistory>;
    recentBadges: Badge[];
    allBadges: Badge[];
}

export interface XMatchMax {
    power: unknown | null;
    rank: unknown | null;
    rankUpdateSeasonName: unknown | null;
    powerUpdateTime: unknown | null;
}

export interface WeaponHistory {
    seasonName: string;
    isMonthly: boolean;
    startTime: string;
    endTime: string;
    weaponCategories: WeaponCategoryUtilRatio[];
    weapons: WeaponUtilRatio[];
}

export interface WeaponCategoryUtilRatio {
    weaponCategory: Pick<WeaponCategory, 'id' | 'name' | 'category'>;
    utilRatio: number;
    weapons: WeaponUtilRatio_category[];
}

export type WeaponUtilRatio_category = Pick<WeaponUtilRatio, 'utilRatio'> & {
    weapon: Pick<Weapon, 'id' | 'weaponId' | 'weaponCategory' | 'name' | 'image'>;
};

export interface WeaponUtilRatio {
    weapon: Pick<Weapon, 'id' | 'weaponId' | 'name' | 'image'>;
    utilRatio: number;
}
