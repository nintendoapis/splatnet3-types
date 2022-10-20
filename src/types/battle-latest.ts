import { BankaraMatchHistory, CurrentPlayer_battles, VsHistoryDetail, VsHistoryGroup, VsHistorySummary, VsPlayer, VsResult, VsTeam, VsTeamResult } from './battles.js';
import { Fest_app, NodeList, VsRule } from './common.js';

/** 7d8b560e31617e981cf7c8aa1ca13a00 LatestBattleHistoriesQuery */
export interface LatestBattleHistoriesResult {
    latestBattleHistories: VsResult_latest;
    currentFest: Fest_app | null;
}

export type VsResult_latest = Pick<VsResult, 'historyGroupsOnlyFirst'> & {
    summary: Pick<VsHistorySummary, 'assistAverage' | 'deathAverage' | 'killAverage' | 'lose' | 'perUnitTimeMinute' | 'specialAverage' | 'win'>;
    historyGroups: NodeList<VsHistoryGroup_latest>;
};
export type VsHistoryGroup_latest = Pick<VsHistoryGroup, never> & {
    historyDetails: NodeList<VsHistoryDetail_latest>;
};
export type VsHistoryDetail_latest = Pick<VsHistoryDetail, 'id' | 'vsMode' | 'vsStage' | 'judgement' | 'knockout' | 'udemae' | 'leagueMatch' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    vsRule: Pick<VsRule, 'id' | 'name'>;
    player: Pick<VsPlayer, 'weapon' | 'id' | 'festGrade'>;
    myTeam: VsTeam_latest;
    bankaraMatch: Pick<BankaraMatchHistory, 'earnedUdemaePoint'> | null;
};
export type VsTeam_latest = Pick<VsTeam, never> & {
    result: Pick<VsTeamResult, 'paintPoint' | 'paintRatio' | 'score'> | null;
};

/** 80585ad4e4ecb674c3d8cd278adb1d21 LatestBattleHistoriesRefetchQuery */
export interface LatestBattleHistoriesRefetchResult {
    latestBattleHistories: VsResult_latest;
    currentPlayer: CurrentPlayer_battles;
    currentFest: Fest_app | null;
}

/** 80585ad4e4ecb674c3d8cd278adb1d21 LatestBattleHistoriesRefetchQuery variables */
export interface LatestBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}
