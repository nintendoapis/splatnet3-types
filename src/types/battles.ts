import { AwardRank, BankaraMatchChallengeState, BankaraMatchMode, DragonMatchType, FestDragonCert, Judgement, JudgementKnockout, Species, TricolourRole, XMatchMeasurementState } from '../enum.js';
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
    xPowerAr: Pick<XPower, 'lastXPower'> | null;
    xPowerCl: Pick<XPower, 'lastXPower'> | null;
    xPowerGl: Pick<XPower, 'lastXPower'> | null;
    xPowerLf: Pick<XPower, 'lastXPower'> | null;
}

type VsPlayer_Gear<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__isGear' | 'name' | 'primaryGearPower' | 'additionalGearPowers'> & {
    thumbnailImage: Pick<Image, 'url'>;
    originalImage: Pick<Image, 'url'>;
    brand: Pick<Brand, 'id' | 'name' | 'image' | 'usualGearPower'>;
};
export type HeadGear_vsPlayer = VsPlayer_Gear<HeadGear>;
export type ClothingGear_vsPlayer = VsPlayer_Gear<ClothingGear>;
export type ShoesGear_vsPlayer = VsPlayer_Gear<ShoesGear>;
type VsPlayer_Gear_Self<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'> & {
    originalImage: Pick<Image, 'url'>;
    brand: Pick<Brand, 'id' | 'name' | 'image'>;
};
export type HeadGear_vsPlayerSelf = VsPlayer_Gear_Self<HeadGear>;
export type ClothingGear_vsPlayerSelf = VsPlayer_Gear_Self<ClothingGear>;
export type ShoesGear_vsPlayerSelf = VsPlayer_Gear_Self<ShoesGear>;

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
    __typename: 'VsResult';
    summary: VsHistorySummary;
    historyGroupsOnlyFirst: NodeList<VsHistoryGroup_onlyFirst>;
    historyGroups: NodeList<VsHistoryGroup>;
}

export interface VsHistoryGroup {
    __typename: 'VsHistoryGroup';
    bankaraMatchChallenge: BankaraMatchChallenge | null;
    xMatchMeasurement: XMatchMeasurement | null;
    historyDetails: NodeList<VsHistoryDetail>;
}

export interface BankaraMatchChallenge {
    winCount: number;
    loseCount: number;
    maxWinCount: number;
    maxLoseCount: number;
    state: BankaraMatchChallengeState | keyof typeof BankaraMatchChallengeState;
    isPromo: boolean;
    isUdemaeUp: boolean;
    udemaeAfter: string;
    earnedUdemaePoint: number;
}

export interface XMatchMeasurement {
    state: XMatchMeasurementState | keyof typeof XMatchMeasurementState;
    xPowerAfter: number | null;
    isInitial: boolean;
    winCount: number;
    loseCount: number;
    maxInitialBattleCount: number;
    maxWinCount: number;
    maxLoseCount: number;
    vsRule: Pick<VsRule, 'id' | 'rule' | 'name'>;
}

export type VsHistoryGroup_onlyFirst = Pick<VsHistoryGroup, never> & {
    historyDetails: NodeList<VsHistoryDetail_onlyFirst>;
};
export type VsHistoryDetail_onlyFirst = Pick<VsHistoryDetail, 'id'> & {
    player: VsPlayer_onlyFirst;
};
export type VsPlayer_onlyFirst = Pick<VsPlayer, 'id'> & {
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
    rank: AwardRank | keyof typeof AwardRank;
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
    headGear: HeadGear_vsPlayerSelf;
    clothingGear: ClothingGear_vsPlayerSelf;
    shoesGear: ShoesGear_vsPlayerSelf;
    species: Species | keyof typeof Species;
    result: VsPlayerResult | null;
    crown: boolean;
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
    __typename: 'VsTeam';
    color: Colour;
    judgement: Judgement | keyof typeof Judgement | null;
    result: VsTeamResult | null;
    tricolorRole: TricolourRole | keyof typeof TricolourRole | null;
    festTeamName: string | null;
    festUniformName: string | null;
    festUniformBonusRate: number | null;
    festStreakWinCount: number | null;
    players: VsPlayer[];
    order: number;
}

export interface VsTeamResult {
    __typename: 'VsTeamResult';
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

export type VsResult_pagerLatest = Pick<VsResult, never> & {
    historyGroups: NodeList<VsHistoryGroup_pagerLatest>;
};
export type VsHistoryGroup_pagerLatest = Pick<VsHistoryGroup, never> & {
    historyDetails: NodeList<VsHistoryDetail_pagerLatest>;
};
export type VsHistoryDetail_pagerLatest = Pick<VsHistoryDetail, 'id' | 'vsMode'>;

/** 7297ae42bbb1958cfe438736865d304e PagerUpdateBattleHistoriesByVsModeQuery */
export interface PagerUpdateBattleHistoriesByVsModeResult {
    latestBattleHistories: VsResult_latest;
    currentFest: Fest_app | null;
}

/** 7297ae42bbb1958cfe438736865d304e PagerUpdateBattleHistoriesByVsModeQuery variables */
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

/** 000afbc113f5653d2c2cee42ff6cdeab PagerUpdateBattleHistoriesByVsModeQuery */
export type PagerUpdateBattleHistoriesByVsModeResult_000afbc = PagerUpdateBattleHistoriesByVsModeResult;
/** 000afbc113f5653d2c2cee42ff6cdeab PagerUpdateBattleHistoriesByVsModeQuery */
export type PagerUpdateBattleHistoriesByVsModeVariables_000afbc = PagerUpdateBattleHistoriesByVsModeVariables;

/** 67224c25f7b2e605205d152009f593c9 PagerUpdateBattleHistoriesByVsModeQuery */
export type PagerUpdateBattleHistoriesByVsModeResult_67224c2 = unknown;
/** 67224c25f7b2e605205d152009f593c9 PagerUpdateBattleHistoriesByVsModeQuery variables */
export type PagerUpdateBattleHistoriesByVsModeVariables_67224c2 = unknown;
