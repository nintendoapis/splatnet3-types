import { BankaraMatchMode, DragonMatchType, FestDragonCert, Judgement, JudgementKnockout, Species, TricolourRole } from '../enum.js';
import { Colour, CurrentPlayer, Fest_app, Image, Nameplate, NodeList, VsMode, VsRule, XPower } from './common.js';
import { Brand, ClothingGear, HeadGear, ShoesGear } from './gear.js';
import { SpecialWeapon, Weapon } from './weapon.js';
import { VsStage } from './stage.js';
import { VsResult_latest } from './battle-latest.js';

export interface VsHistorySummary {
    assistAverage: number;
    deathAverage: number;
    killAverage: number;
    lose: number;
    perUnitTimeMinute: number;
    specialAverage: number;
    win: number;
    xPowerAr: Pick<XPower, 'lastXPower'>;
    xPowerCl: Pick<XPower, 'lastXPower'>;
    xPowerGl: Pick<XPower, 'lastXPower'>;
    xPowerLf: Pick<XPower, 'lastXPower'>;
}

export type VsPlayer_Gear<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__isGear' | 'name' | 'primaryGearPower' | 'additionalGearPowers'> & {
    thumbnailImage: Pick<Image, 'url'>;
    originalImage: Pick<Image, 'url'>;
    brand: Pick<Brand, 'id' | 'name' | 'image' | 'usualGearPower'>;
};
type VsPlayer_Gear_Self<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'> & {
    originalImage: Pick<Image, 'url'>;
    brand: Pick<Brand, 'id' | 'name' | 'image'>;
};

/** 49dd00428fb8e9b4dde62f585c8de1e0 BattleHistoryCurrentPlayerQuery */
export interface BattleHistoryCurrentPlayerResult {
    currentPlayer: CurrentPlayer_battles;
}

export type CurrentPlayer_battles = Pick<CurrentPlayer, 'species'> & {
    weapon: Pick<Weapon, 'id'> & {
        specialWeapon: Pick<SpecialWeapon, 'id' | 'maskingImage'>;
    };
};

export interface VsResult {
    summary: VsHistorySummary;
    historyGroupsOnlyFirst: NodeList<VsHistoryGroup_onlyFirst>;
    historyGroups: NodeList<VsHistoryGroup>;
}

export interface VsHistoryGroup {
    bankaraMatchChallenge: BankaraMatchChallenge | null;
    historyDetails: NodeList<VsHistoryDetail>;
}

export interface BankaraMatchChallenge {
    winCount: number;
    loseCount: number;
    maxWinCount: number;
    maxLoseCount: number;
    state: 'SUCCEEDED' | 'FAILED';
    isPromo: boolean;
    isUdemaeUp: boolean;
    udemaeAfter: string;
    earnedUdemaePoint: number;
}

type VsHistoryGroup_onlyFirst = Pick<VsHistoryGroup, never> & {
    historyDetails: NodeList<VsHistoryDetail_onlyFirst>;
};
type VsHistoryDetail_onlyFirst = Pick<VsHistoryDetail, 'id'> & {
    player: VsPlayer_onlyFirst;
};
type VsPlayer_onlyFirst = Pick<VsPlayer, 'id'> & {
    weapon: Pick<Weapon, 'id'> & {
        specialWeapon: Pick<SpecialWeapon, 'id' | 'maskingImage'>;
    };
};

export interface VsHistoryDetail {
    __typename: 'VsHistoryDetail';
    id: string;
    vsMode: Pick<VsMode, 'id' | 'mode'>;
    vsRule: Pick<VsRule, 'id' | 'name' | 'rule'>;
    vsStage: Pick<VsStage, 'id' | 'name' | 'image'>;
    playedTime: string;
    duration: number;
    judgement: Judgement | keyof typeof Judgement;
    player: VsPlayer;
    knockout: JudgementKnockout | keyof typeof JudgementKnockout | null;
    myTeam: VsTeam;
    otherTeams: VsTeam[];
    udemae: unknown | null;
    bankaraMatch: BankaraMatchHistory | null;
    leagueMatch: LeagueMatchHistory | null;
    xMatch: XMatchHistory | null;
    festMatch: FestMatchHistory | null;
    awards: Award[];
    nextHistoryDetail: Pick<VsHistoryDetail, 'id'> | null;
    previousHistoryDetail: Pick<VsHistoryDetail, 'id'> | null;
}

export interface Award {
    name: string;
    rank: 'GOLD' | 'SILVER';
}

export interface VsPlayer {
    __isPlayer: 'VsPlayer';
    __typename: 'VsPlayer';
    id: string;
    byname: string; // "Splatlandian Youth"
    name: string;
    nameId: string;
    nameplate: Nameplate;
    paint: number;
    isMyself: boolean;
    weapon: Pick<Weapon, 'id' | 'name' | 'image'>;
    headGear: VsPlayer_Gear_Self<HeadGear>;
    clothingGear: VsPlayer_Gear_Self<ClothingGear>;
    shoesGear: VsPlayer_Gear_Self<ShoesGear>;
    species: Species | keyof typeof Species;
    result: VsPlayerResult | null;
    festDragonCert: FestDragonCert | keyof typeof FestDragonCert;
    festGrade: string | null;
}

export interface VsPlayerResult {
    kill: number;
    death: number;
    assist: number;
    special: number;
    noroshiTry: number | null;
}

export interface VsTeam {
    color: Colour;
    judgement: Judgement | keyof typeof Judgement | null;
    result: VsTeamResult | null;
    tricolorRole: TricolourRole | keyof typeof TricolourRole | null;
    festTeamName: string | null;
    players: VsPlayer[];
    order: number;
}

export interface VsTeamResult {
    paintPoint: number | null;
    paintRatio: number | null;
    score: number | null;
    noroshi: number | null;
}

export interface BankaraMatchHistory {
    earnedUdemaePoint: number | null;
    mode: BankaraMatchMode | keyof typeof BankaraMatchMode;
}
export interface LeagueMatchHistory {
    //
}
export interface XMatchHistory {
    //
}
export interface FestMatchHistory {
    dragonMatchType: DragonMatchType | keyof typeof DragonMatchType;
    contribution: number;
    jewel: number;
    myFestPower: number | null;
}

/** 0329c535a32f914fd44251be1f489e24 PagerLatestVsDetailQuery */
export interface PagerLatestVsDetailResult {
    vsResult: VsResult_pagerLatest;
}

type VsResult_pagerLatest = Pick<VsResult, never> & {
    historyGroups: NodeList<VsHistoryGroup_pagerLatest>;
};
type VsHistoryGroup_pagerLatest = Pick<VsHistoryGroup, never> & {
    historyDetails: NodeList<VsHistoryDetail_pagerLatest>;
};
type VsHistoryDetail_pagerLatest = Pick<VsHistoryDetail, 'id' | 'vsMode'>;

/** 000afbc113f5653d2c2cee42ff6cdeab PagerUpdateBattleHistoriesByVsModeQuery */
export interface PagerUpdateBattleHistoriesByVsModeResult {
    latestBattleHistories: VsResult_latest;
    currentFest: Fest_app | null;
}

/** 000afbc113f5653d2c2cee42ff6cdeab PagerUpdateBattleHistoriesByVsModeQuery variables */
export interface PagerUpdateBattleHistoriesByVsModeVariables {
    /** Always false in the official app */
    isBankara: boolean;
    /** Always false in the official app */
    isLeague: boolean;
    /** Always false in the official app */
    isPrivate: boolean;
    /** Always false in the official app */
    isRegular: boolean;
    /** Always false in the official app */
    isXBattle: boolean;
}
