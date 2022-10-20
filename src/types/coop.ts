import { CoopGradePointDiff, Species } from '../enum.js';
import { Image, Nameplate, NodeList } from './common.js';
import { ClothingGear, HeadGear, ShoesGear } from './gear.js';
import { SpecialWeapon } from './weapon.js';

export interface CoopStage {
    id: string; // "Q29vcFN0YWdlLTI="
    name: string; // "Sockeye Station"
    coopStageId: number; // 2
    image: Pick<Image, 'url'>;
    thumbnailImage: Pick<Image, 'url'>;
}

export interface CoopSupplyWeapon {
    name: string; // "Splattershot Jr."
    image: Pick<Image, 'url'>;
}

export interface CoopHistoryDetail {
    __typename: 'CoopHistoryDetail';
    id: string;
    rule: 'REGULAR';
    weapons: CoopSupplyWeapon[];
    nextHistoryDetail: Pick<CoopHistoryDetail, 'id'> | null;
    previousHistoryDetail: Pick<CoopHistoryDetail, 'id'> | null;
    resultWave: number;
    coopStage: Pick<CoopStage, 'id' | 'name' | 'image'>;
    afterGrade: CoopGrade;
    afterGradePoint: number;
    gradePointDiff: CoopGradePointDiff | CoopGradePointDiff[keyof CoopGradePointDiff];
    bossResult: CoopBossResult | null;
    myResult: CoopPlayerResult;
    memberResults: CoopPlayerResult[];
    enemyResults: CoopEnemyResult[];
    waveResults: CoopWaveResult[];
    playedTime: string;
    dangerRate: number;
    scenarioCode: unknown | null;
    smellMeter: number;
    scale: CoopScale | null;
    jobPoint: number;
    jobScore: number;
    jobRate: number;
    jobBonus: number;
}

export interface CoopBossResult {
    //
}

export interface CoopPlayerResult {
    player: CoopPlayer;
    weapons: CoopSupplyWeapon[];
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image'>;
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
    species: Species | Species[keyof Species];
}

export interface CoopUniform {
    id: string;
    name: string;
    image: Pick<Image, 'url'>;
}

export interface CoopSupplyWeapon {
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

type HeadGear_coopResult = Pick<HeadGear, '__typename' | 'name' | 'image'>;
type ClothingGear_coopResult = Pick<ClothingGear, '__typename' | 'name' | 'image'>;
type ShoesGear_coopResult = Pick<ShoesGear, '__typename' | 'name' | 'image'>;

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
    mode: 'REGULAR';
    rule: 'REGULAR';
    highestResult: CoopGroupHighestResult;
    historyDetails: NodeList<CoopHistoryDetail_record>;
}

export interface CoopGroupHighestResult {
    grade: CoopGrade;
    gradePoint: number;
    jobScore: number;
}

type CoopHistoryDetail_record = Pick<CoopHistoryDetail, 'id' | 'weapons' | 'nextHistoryDetail' | 'previousHistoryDetail' | 'resultWave' | 'afterGrade' | 'afterGradePoint' | 'gradePointDiff' | 'bossResult'> & {
    coopStage: Pick<CoopStage, 'id' | 'name'>;
    myResult: Pick<CoopPlayerResult, 'deliverCount' | 'goldenDeliverCount'>;
    memberResults: Pick<CoopPlayerResult, 'deliverCount' | 'goldenDeliverCount'>[];
    waveResults: Pick<CoopWaveResult, 'waveNumber'>[];
};

type CoopHistoryGroup_onlyFirst = Pick<CoopHistoryGroup, never> & {
    historyDetails: NodeList<CoopHistoryDetail_onlyFirst>;
};
type CoopHistoryDetail_onlyFirst = Pick<CoopHistoryDetail, 'id'>;

/** a5692cf290ffb26f14f0f7b6e5023b07 RefetchableCoopHistory_CoopResultQuery */
export type RefetchableCoopHistory_CoopResult = CoopHistoryResult;

/** f3799a033f0a7ad4b1b396f9a3bafb1e CoopHistoryDetailQuery */
export interface CoopHistoryDetailResult {
    coopHistoryDetail: Pick<CoopHistoryDetail, '__typename' | 'id' | 'afterGrade' | 'rule' | 'myResult' | 'memberResults' | 'bossResult' | 'enemyResults' | 'waveResults' | 'resultWave' | 'playedTime' | 'coopStage' | 'dangerRate' | 'scenarioCode' | 'smellMeter' | 'weapons' | 'afterGradePoint' | 'scale' | 'jobPoint' | 'jobScore' | 'jobRate' | 'jobBonus' | 'nextHistoryDetail' | 'previousHistoryDetail'>;
}

/** f3799a033f0a7ad4b1b396f9a3bafb1e CoopHistoryDetailQuery variables */
export interface CoopHistoryDetailVariables {
    id: string;
}

/** d3188df2fd4436870936b109675e2849 CoopHistoryDetailRefetchQuery */
export interface CoopHistoryDetailRefetchResult {
    node: Pick<CoopHistoryDetail, '__typename' | 'id' | 'nextHistoryDetail' | 'previousHistoryDetail'>;
}

/** d3188df2fd4436870936b109675e2849 CoopHistoryDetailRefetchQuery variables */
export type CoopHistoryDetailRefetchVariables = CoopHistoryDetailVariables;

/** 82385ab3c3444c857bd35a8d87dbc700 CoopPagerLatestCoopQuery */
export type CoopPagerLatestCoopResult = CoopHistoryResult;
