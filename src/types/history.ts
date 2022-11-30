import { Badge, CurrentPlayer, NodeList } from './common.js';
import { Weapon, WeaponCategory } from './weapon.js';

/** 32b6771f94083d8f04848109b7300af5 HistoryRecordQuery */
export interface HistoryRecordResult {
    currentPlayer: CurrentPlayer_history;
    playHistory: PlayHistory_history;
}

export type CurrentPlayer_history = Pick<CurrentPlayer, '__isPlayer' | 'byname' | 'name' | 'nameId' | 'nameplate' | 'weapon' | 'headGear' | 'clothingGear' | 'shoesGear' | 'userIcon'>;

export type PlayHistory_history = Pick<PlayHistory, 'currentTime' | 'gameStartTime' | 'rank' | 'udemae' | 'udemaeMax' | 'xMatchRankAr' | 'xMatchRankCl' | 'xMatchRankGl' | 'xMatchRankLf' | 'xMatchMaxAr' | 'xMatchMaxCl' | 'xMatchMaxGl' | 'xMatchMaxLf' | 'winCountTotal' | 'frequentlyUsedWeapons' | 'paintPointTotal' | 'badges' | 'weaponHistory' | 'recentBadges' | 'allBadges'>;

/** 57b1ccae6949c407e2df9bcad2a8e573 HistoryRecordRefetchQuery */
export type HistoryRecordRefetchResult = HistoryRecordResult;

/** 9d4ef9fba3f84d6933bb1f6f436f7200 HistoryRecordQuery */
export interface HistoryRecordResult_9d4ef9f {
    currentPlayer: CurrentPlayer_history;
    playHistory: PlayHistory_history_9d4ef9f;
}

export type PlayHistory_history_9d4ef9f = Pick<PlayHistory, 'currentTime' | 'gameStartTime' | 'rank' | 'udemae' | 'udemaeMax' | 'xMatchMaxAr' | 'xMatchMaxCl' | 'xMatchMaxGl' | 'xMatchMaxLf' | 'winCountTotal' | 'frequentlyUsedWeapons' | 'paintPointTotal' | 'recentBadges' | 'allBadges'> & {
    badges: Pick<Badge, 'id'>[];
    weaponHistory: NodeList<WeaponHistory_history_9d4ef9f>;
};

export type WeaponHistory_history_9d4ef9f = Pick<WeaponHistory, 'seasonName' | 'isMonthly' | 'startTime' | 'endTime'> & {
    weaponCategories: WeaponCategoryUtilRatio_history_9d4ef9f[];
    weapons: WeaponUtilRatio_history_9d4ef9f[];
};
export type WeaponCategoryUtilRatio_history_9d4ef9f = Pick<WeaponCategoryUtilRatio, 'weaponCategory' | 'utilRatio'> & {
    weapons: WeaponCategoryUtilRatio_WeaponUtilRatio_history_9d4ef9f[];
};
export type WeaponCategoryUtilRatio_WeaponUtilRatio_history_9d4ef9f = Pick<WeaponUtilRatio, 'utilRatio'> & {
    weapon: Pick<Weapon, 'id' | 'weaponId' | 'weaponCategory' | 'name' | 'image'>;
};
export type WeaponUtilRatio_history_9d4ef9f = Pick<WeaponUtilRatio, 'utilRatio'> & {
    weapon: Pick<Weapon, 'id' | 'weaponId' | 'name' | 'image'>;
};

/** 6cd71021eb35a793e3252f7a95deb75a HistoryRecordRefetchQuery */
export type HistoryRecordRefetchResult_6cd7102 = HistoryRecordResult_9d4ef9f;

/** 29957cf5d57b893934de857317cd46d8 HistoryRecordQuery */
export interface HistoryRecordResult_29957cf {
    currentPlayer: CurrentPlayer_history_29957cf;
    playHistory: PlayHistory_history_29957cf;
}

export type CurrentPlayer_history_29957cf = Pick<CurrentPlayer, '__isPlayer' | 'byname' | 'name' | 'nameId' | 'nameplate' | 'weapon' | 'headGear' | 'clothingGear' | 'shoesGear'>;
export type PlayHistory_history_29957cf = Pick<PlayHistory, 'currentTime' | 'gameStartTime' | 'udemaeMax' | 'xMatchMaxAr' | 'xMatchMaxCl' | 'xMatchMaxGl' | 'xMatchMaxLf' | 'winCountTotal' | 'frequentlyUsedWeapons' | 'paintPointTotal' | 'recentBadges' | 'allBadges'> & {
    badges: Pick<Badge, 'id'>[];
    weaponHistory: NodeList<WeaponHistory_history_9d4ef9f>;
};

/** 5e1d0bb4b52e2a99049df6e17117f363 HistoryRecordRefetchQuery */
export type HistoryRecordRefetchResult_5e1d0bb = HistoryRecordResult_29957cf;

export interface PlayHistory {
    currentTime: string;
    gameStartTime: string;
    rank: number;
    udemae: string;
    udemaeMax: string;
    xMatchRankAr: unknown | null;
    xMatchRankCl: unknown | null;
    xMatchRankGl: unknown | null;
    xMatchRankLf: unknown | null;
    xMatchMaxAr: XMatchMax;
    xMatchMaxCl: XMatchMax;
    xMatchMaxGl: XMatchMax;
    xMatchMaxLf: XMatchMax;
    winCountTotal: number;
    frequentlyUsedWeapons: Pick<Weapon, 'id' | 'name' | 'image'>[];
    paintPointTotal: number;
    battleNumTotal: number;
    badges: Pick<Badge, '__typename' | 'id'>[];
    weaponHistory: NodeList<WeaponHistory>;
    recentBadges: Pick<Badge, 'id' | 'description' | 'image'>[];
    allBadges: Pick<Badge, 'id' | 'description' | 'image'>[];
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
    weapons: WeaponCategoryUtilRatio_WeaponUtilRatio_history[];
}

export interface WeaponUtilRatio {
    weapon: Pick<Weapon, 'id' | 'name' | 'image'>;
    utilRatio: number;
}

export type WeaponCategoryUtilRatio_WeaponUtilRatio_history = Pick<WeaponUtilRatio, 'utilRatio'> & {
    weapon: Pick<Weapon, 'id' | 'weaponCategory' | 'name' | 'image'>;
};
