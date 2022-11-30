import { BankaraMatchMode, CoopRule } from '../enum.js';
import { CurrentPlayer, Image, NodeList, VsRule } from './common.js';
import { CoopStage, CoopSupplyWeapon } from './coop.js';
import { Fest, FestTeam } from './fest.js';
import { VsStage, VsStageRecordStats } from './stage.js';

/** 730cd98e84f1030d3e9ac86b6f1aae13 StageScheduleQuery */
export interface StageScheduleResult {
    regularSchedules: NodeList<VsSchedule_regular>;
    bankaraSchedules: NodeList<VsSchedule_bankara>;
    xSchedules: NodeList<VsSchedule_xMatch>;
    leagueSchedules: NodeList<VsSchedule_league>;
    coopGroupingSchedule: {
        bannerImage: Pick<Image, 'url'> | null;
        regularSchedules: NodeList<CoopSchedule_schedule>;
        bigRunSchedules: NodeList<CoopSchedule_schedule>;
    };
    festSchedules: NodeList<VsSchedule_fest>;
    currentFest: Fest_schedule | null;
    currentPlayer: Pick<CurrentPlayer, 'userIcon'>;
    vsStages: NodeList<VsStage_schedule>;
}

export type VsStage_schedule = Pick<VsStage, 'id' | 'vsStageId' | 'name'> & {
    originalImage: Pick<Image, 'url'>;
    stats: Pick<VsStageRecordStats, 'winRateAr' | 'winRateCl' | 'winRateGl' | 'winRateLf'> | null;
};

export interface VsSchedule {
    __typename: 'VsSchedule';
    startTime: string;
    endTime: string;
    regularMatchSetting: RegularMatchSetting | null;
    bankaraMatchSettings: BankaraMatchSetting[] | null;
    xMatchSetting: XMatchSetting | null;
    leagueMatchSetting: LeagueMatchSetting | null;
    festMatchSetting: FestMatchSetting | null;
}

export type VsSchedule_regular = Pick<VsSchedule, 'startTime' | 'endTime' | 'regularMatchSetting'> & {
    festMatchSetting: Pick<FestMatchSetting, '__typename'> | null;
};
export type VsSchedule_bankara = Pick<VsSchedule, 'startTime' | 'endTime' | 'bankaraMatchSettings'> & {
    festMatchSetting: Pick<FestMatchSetting, '__typename'> | null;
};
export type VsSchedule_xMatch = Pick<VsSchedule, 'startTime' | 'endTime' | 'xMatchSetting'> & {
    festMatchSetting: Pick<FestMatchSetting, '__typename'> | null;
};
export type VsSchedule_league = Pick<VsSchedule, 'startTime' | 'endTime' | 'leagueMatchSetting'> & {
    festMatchSetting: Pick<FestMatchSetting, '__typename'> | null;
};
export type VsSchedule_fest = Pick<VsSchedule, 'startTime' | 'endTime' | 'festMatchSetting'>;

export interface RegularMatchSetting {
    __isVsSetting: 'RegularMatchSetting';
    __typename: 'RegularMatchSetting';
    vsStages: Pick<VsStage, 'id' | 'vsStageId' | 'name' | 'image'>[];
    vsRule: Pick<VsRule, 'id' | 'rule' | 'name'>;
}

export interface BankaraMatchSetting {
    __isVsSetting: 'BankaraMatchSetting';
    __typename: 'BankaraMatchSetting';
    vsStages: Pick<VsStage, 'id' | 'vsStageId' | 'name' | 'image'>[];
    vsRule: Pick<VsRule, 'id' | 'rule' | 'name'>;
    mode: BankaraMatchMode | keyof typeof BankaraMatchMode;
}

export interface XMatchSetting {
    __isVsSetting: 'XMatchSetting';
    __typename: 'XMatchSetting';
    vsStages: Pick<VsStage, 'id' | 'vsStageId' | 'name' | 'image'>[];
    vsRule: Pick<VsRule, 'id' | 'rule' | 'name'>;
}

export interface LeagueMatchSetting {
    __isVsSetting: 'LeagueMatchSetting';
    __typename: 'LeagueMatchSetting';
    vsStages: Pick<VsStage, 'id' | 'vsStageId' | 'name' | 'image'>[];
    vsRule: Pick<VsRule, 'id' | 'rule' | 'name'>;
}

export interface FestMatchSetting {
    __isVsSetting: 'FestMatchSetting';
    __typename: 'FestMatchSetting';
    vsStages: Pick<VsStage, 'id' | 'vsStageId' | 'name' | 'image'>[];
    vsRule: Pick<VsRule, 'id' | 'rule' | 'name'>;
}

export interface CoopSchedule {
    __typename: 'CoopSchedule';
    startTime: string;
    endTime: string;
    setting: Pick<CoopSetting, '__typename' | 'coopStage' | 'weapons'> | null;
}

export interface CoopSetting {
    __typename: 'CoopNormalSetting';
    __isCoopSetting: 'CoopNormalSetting';
    coopStage: Pick<CoopStage, 'id' | 'coopStageId' | 'name' | 'image' | 'thumbnailImage'>;
    weapons: Pick<CoopSupplyWeapon, 'name' | 'image'>[];
    rule: CoopRule | keyof typeof CoopRule;
}

export type CoopSetting_schedule = Pick<CoopSetting, '__typename' | '__isCoopSetting' | 'weapons'> & {
    coopStage: Pick<CoopStage, 'id' | 'name' | 'image' | 'thumbnailImage'>;
};

export type CoopSchedule_schedule = Pick<CoopSchedule, 'startTime' | 'endTime' | 'setting'>;

export type Fest_schedule = Pick<Fest, 'id' | 'title' | 'startTime' | 'endTime' | 'midtermTime' | 'state' | 'tricolorStage'> & {
    teams: FestTeam_schedule[];
};

export type FestTeam_schedule = Pick<FestTeam, 'id' | 'color' | 'myVoteState'>;

/** 7d4bb0565342b7385ceb97d109e14897 StageScheduleQuery */
export type StageScheduleResult_7d4bb05 = Pick<StageScheduleResult, 'regularSchedules' | 'bankaraSchedules' | 'xSchedules' | 'leagueSchedules' | 'festSchedules' | 'currentPlayer'> & {
    coopGroupingSchedule: {
        regularSchedules: NodeList<CoopSchedule_schedule_7d4bb05>;
        bigRunSchedules: NodeList<CoopSchedule_schedule_7d4bb05>;
    };
    currentFest: Fest_schedule_7d4bb05 | null;
    vsStages: NodeList<VsStage_schedule_7d4bb05>;
};

export type CoopSchedule_schedule_7d4bb05 = Pick<CoopSchedule, 'startTime' | 'endTime'> & {
    setting: CoopSetting_schedule_7d4bb05;
};
export type CoopSetting_schedule_7d4bb05 = Pick<CoopSetting, '__typename' | 'coopStage' | 'weapons'>;

export type Fest_schedule_7d4bb05 = Pick<Fest, 'id' | 'title' | 'startTime' | 'endTime' | 'midtermTime' | 'state' | 'tricolorStage'> & {
    teams: FestTeam_schedule_7d4bb05[];
};
export type FestTeam_schedule_7d4bb05 = Pick<FestTeam, 'id' | 'color' | 'myVoteState' | 'role'>;

export type VsStage_schedule_7d4bb05 = Pick<VsStage, 'id' | 'vsStageId' | 'name'> & {
    stageId: number;
    originalImage: Pick<Image, 'url'>;
    stats: Pick<VsStageRecordStats, 'winRateAr' | 'winRateCl' | 'winRateGl' | 'winRateLf'> | null;
};

/** 10e1d424391e78d21670227550b3509f StageScheduleQuery */
export type StageScheduleResult_10e1d42 = unknown;
