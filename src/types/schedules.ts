import { BankaraMatchMode } from '../enum.js';
import { CurrentPlayer, Image, NodeList, VsRule } from './common.js';
import { CoopStage, CoopSupplyWeapon } from './coop.js';
import { Fest, FestTeam } from './fest.js';
import { VsStage, VsStageRecordStats } from './stage.js';

/** 10e1d424391e78d21670227550b3509f StageScheduleQuery */
export interface StageScheduleResult {
    regularSchedules: NodeList<VsSchedule_regular>;
    bankaraSchedules: NodeList<VsSchedule_bankara>;
    xSchedules: NodeList<VsSchedule_xMatch>;
    leagueSchedules: NodeList<VsSchedule_league>;
    coopGroupingSchedule: {
        regularSchedules: NodeList<CoopSchedule>;
        bigRunSchedules: NodeList<CoopSchedule>;
    };
    festSchedules: NodeList<VsSchedule_fest>;
    currentFest: Fest_schedule | null;
    currentPlayer: Pick<CurrentPlayer, 'userIcon'>;
    vsStages: NodeList<VsStage_schedule>;
}

export type VsStage_schedule = Pick<VsStage, 'stageId' | 'id' | 'vsStageId' | 'name'> & {
    originalImage: Pick<Image, 'url'>;
    stats: Pick<VsStageRecordStats, 'winRateAr' | 'winRateCl' | 'winRateGl' | 'winRateLf'> | null;
};

export interface VsSchedule {
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
    startTime: string;
    endTime: string;
    setting: CoopSetting | null;
}

export interface CoopSetting {
    __typename: 'CoopNormalSetting';
    coopStage: Pick<CoopStage, 'id' | 'coopStageId' | 'name' | 'image' | 'thumbnailImage'>;
    weapons: Pick<CoopSupplyWeapon, 'name' | 'image'>[];
}

export type Fest_schedule = Pick<Fest, 'id' | 'title' | 'startTime' | 'endTime' | 'midtermTime' | 'state' | 'tricolorStage'> & {
    teams: FestTeam_schedule[];
};

export type FestTeam_schedule = Pick<FestTeam, 'id' | 'color' | 'myVoteState' | 'role'>;

/** 10e1d424391e78d21670227550b3509f StageScheduleQuery */
export type StageScheduleResult_10e1d42 = unknown;
