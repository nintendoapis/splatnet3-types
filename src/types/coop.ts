import { CoopGradePointDiff, CoopMode, CoopRule, Species } from '../enum.js';
import { Image, Nameplate, NodeList } from './common.js';
import { ClothingGear, HeadGear, ShoesGear } from './gear.js';
import { SpecialWeapon } from './weapon.js';

export interface CoopStage {
    __typename: 'CoopStage';
    id: string; // "Q29vcFN0YWdlLTI="
    name: string; // "Sockeye Station"
    coopStageId: number; // 2
    image: Pick<Image, 'url'>;
    thumbnailImage: Pick<Image, 'url'>;
}

export interface CoopSupplyWeapon {
    __typename: 'CoopSupplyWeapon';
    name: string; // "Splattershot Jr."
    image: Pick<Image, 'url'>;
}

export interface CoopHistoryDetail {
    __typename: 'CoopHistoryDetail';
    id: string;
    rule: CoopRule | keyof typeof CoopRule;
    weapons: Pick<CoopSupplyWeapon, 'name' | 'image'>[];
    nextHistoryDetail: Pick<CoopHistoryDetail, 'id'> | null;
    previousHistoryDetail: Pick<CoopHistoryDetail, 'id'> | null;
    resultWave: number;
    coopStage: Pick<CoopStage, 'id' | 'name' | 'image'>;
    afterGrade: CoopGrade | null;
    afterGradePoint: number | null;
    gradePointDiff: CoopGradePointDiff | keyof typeof CoopGradePointDiff;
    bossResult: CoopBossResult | null;
    myResult: CoopPlayerResult;
    memberResults: CoopPlayerResult[];
    enemyResults: CoopEnemyResult[];
    waveResults: CoopWaveResult[];
    playedTime: string;
    dangerRate: number;
    scenarioCode: unknown | null;
    smellMeter: number | null;
    scale: CoopScale | null;
    jobPoint: number | null;
    jobScore: number | null;
    jobRate: number | null;
    jobBonus: number | null;
}

export interface CoopBossResult {
    //
}

export interface CoopPlayerResult {
    player: CoopPlayer;
    weapons: Pick<CoopSupplyWeapon, 'name' | 'image'>[];
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image'> | null;
    defeatEnemyCount: number;
    deliverCount: number;
    goldenAssistCount: number;
    goldenDeliverCount: number;
    rescueCount: number;
    rescuedCount: number;
}

export interface CoopPlayer {
    __isPlayer: 'CoopPlayer';
    id: string;
    name: string;
    nameId: string;
    byname: string;
    nameplate: Nameplate;
    uniform: CoopUniform;
    isMyself: boolean;
    species: Species | keyof typeof Species;
}

export interface CoopUniform {
    id: string;
    name: string;
    image: Pick<Image, 'url'>;
}

export interface CoopWaveResult {
    waveNumber: number;
    waterLevel: number;
    eventWave: CoopEventWave | null;
    deliverNorm: number | null;
    goldenPopCount: number;
    teamDeliverCount: number | null;
    specialWeapons: Pick<SpecialWeapon, 'id' | 'name' | 'image'>[];
}

export interface CoopEventWave {
    id: string;
    name: string;
}

export interface CoopEnemyResult {
    defeatCount: number;
    teamDefeatCount: number;
    popCount: number;
    enemy: CoopEnemy;
}

export interface CoopEnemy {
    id: string;
    name: string;
    image: Pick<Image, 'url'>;
}

/** 817618ce39bcf5570f52a97d73301b30 CoopHistoryQuery */
export interface CoopHistoryResult {
    coopResult: CoopResult;
}

export interface CoopResult {
    historyGroupsOnlyFirst: NodeList<CoopHistoryGroup_onlyFirst>;
    regularAverageClearWave: number;
    regularGrade: CoopGrade;
    regularGradePoint: number;
    monthlyGear: HeadGear_coopResult | ClothingGear_coopResult | ShoesGear_coopResult;
    scale: CoopScale;
    pointCard: CoopPointCard;
    historyGroups: NodeList<CoopHistoryGroup>;
}

export interface CoopGrade {
    id: string;
    name: string;
}

export type HeadGear_coopResult = Pick<HeadGear, '__typename' | 'name' | 'image'>;
export type ClothingGear_coopResult = Pick<ClothingGear, '__typename' | 'name' | 'image'>;
export type ShoesGear_coopResult = Pick<ShoesGear, '__typename' | 'name' | 'image'>;

export interface CoopScale {
    gold: number;
    silver: number;
    bronze: number;
}

export interface CoopPointCard {
    defeatBossCount: number;
    deliverCount: number;
    goldenDeliverCount: number;
    playCount: number;
    rescueCount: number;
    regularPoint: number;
    totalPoint: number;
}

export interface CoopHistoryGroup {
    startTime: string;
    endTime: string;
    mode: CoopMode | keyof typeof CoopMode;
    rule: CoopRule | keyof typeof CoopRule;
    highestResult: CoopGroupHighestResult;
    historyDetails: NodeList<CoopHistoryDetail_record>;
}

export interface CoopGroupHighestResult {
    grade: CoopGrade;
    gradePoint: number;
    jobScore: number;
}

export type CoopHistoryDetail_record = Pick<CoopHistoryDetail, 'id' | 'weapons' | 'nextHistoryDetail' | 'previousHistoryDetail' | 'resultWave' | 'afterGrade' | 'afterGradePoint' | 'gradePointDiff' | 'bossResult'> & {
    coopStage: Pick<CoopStage, 'id' | 'name'>;
    myResult: Pick<CoopPlayerResult, 'deliverCount' | 'goldenDeliverCount'>;
    memberResults: Pick<CoopPlayerResult, 'deliverCount' | 'goldenDeliverCount'>[];
    waveResults: Pick<CoopWaveResult, 'waveNumber'>[];
};

export type CoopHistoryGroup_onlyFirst = Pick<CoopHistoryGroup, never> & {
    historyDetails: NodeList<CoopHistoryDetail_onlyFirst>;
};
export type CoopHistoryDetail_onlyFirst = Pick<CoopHistoryDetail, 'id'>;

/** a5692cf290ffb26f14f0f7b6e5023b07 RefetchableCoopHistory_CoopResultQuery */
export type RefetchableCoopHistory_CoopResult = CoopHistoryResult;

/** f3799a033f0a7ad4b1b396f9a3bafb1e CoopHistoryDetailQuery */
export interface CoopHistoryDetailResult {
    coopHistoryDetail: CoopHistoryDetail_result | null;
}

export type CoopHistoryDetail_result = Pick<CoopHistoryDetail, '__typename' | 'id' | 'afterGrade' | 'rule' | 'myResult' | 'memberResults' | 'bossResult' | 'enemyResults' | 'waveResults' | 'resultWave' | 'playedTime' | 'coopStage' | 'dangerRate' | 'scenarioCode' | 'smellMeter' | 'weapons' | 'afterGradePoint' | 'scale' | 'jobPoint' | 'jobScore' | 'jobRate' | 'jobBonus' | 'nextHistoryDetail' | 'previousHistoryDetail'>;

/** f3799a033f0a7ad4b1b396f9a3bafb1e CoopHistoryDetailQuery variables */
export interface CoopHistoryDetailVariables {
    coopHistoryDetailId: string;
}

/** d3188df2fd4436870936b109675e2849 CoopHistoryDetailRefetchQuery */
export interface CoopHistoryDetailRefetchResult {
    node: CoopHistoryDetail_refetch | null;
}

export type CoopHistoryDetail_refetch = Pick<CoopHistoryDetail, '__typename' | 'id' | 'nextHistoryDetail' | 'previousHistoryDetail'>;

/** d3188df2fd4436870936b109675e2849 CoopHistoryDetailRefetchQuery variables */
export interface CoopHistoryDetailRefetchVariables {
    id: string;
}

/** 82385ab3c3444c857bd35a8d87dbc700 CoopPagerLatestCoopQuery */
export type CoopPagerLatestCoopResult = CoopHistoryResult;
