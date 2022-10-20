import { Badge, CurrentPlayer, NodeList } from './common.js';
import { Weapon, WeaponCategory } from './weapon.js';

/** 29957cf5d57b893934de857317cd46d8 HistoryRecordQuery */
export interface HistoryRecordResult {
    currentPlayer: Pick<CurrentPlayer, '__isPlayer' | 'byname' | 'name' | 'nameId' | 'nameplate' | 'weapon' | 'headGear' | 'clothingGear' | 'shoesGear'>;
    playHistory: Pick<PlayHistory, 'currentTime' | 'gameStartTime' | 'udemaeMax' | 'xMatchMaxAr' | 'xMatchMaxCl' | 'xMatchMaxGl' | 'xMatchMaxLf' | 'winCountTotal' | 'frequentlyUsedWeapons' | 'paintPointTotal' | 'badges' | 'weaponHistory' | 'recentBadges' | 'allBadges'>;
}

/** 5e1d0bb4b52e2a99049df6e17117f363 HistoryRecordRefetchQuery */
export type HistoryRecordRefetchResult = HistoryRecordResult;

export interface PlayHistory {
    currentTime: string;
    gameStartTime: string;
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
