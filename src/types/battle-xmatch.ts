import { VsTeam_latest } from './battle-latest.js';
import { CurrentPlayer_battles, VsHistoryDetail, VsHistoryGroup, VsHistorySummary, VsPlayer, VsResult, XMatchMeasurement } from './battles.js';
import { NodeList, VsRule } from './common.js';

/** 45c74fefb45a49073207229ca65f0a62 XBattleHistoriesQuery */
export interface XBattleHistoriesResult {
    xBattleHistories: VsResult_xMatch;
}

export type VsResult_xMatch = Pick<VsResult, 'historyGroupsOnlyFirst'> & {
    summary: Pick<VsHistorySummary, 'assistAverage' | 'deathAverage' | 'killAverage' | 'lose' | 'perUnitTimeMinute' | 'specialAverage' | 'win' | 'xPowerAr' | 'xPowerCl' | 'xPowerGl' | 'xPowerLf'>;
    historyGroups: NodeList<VsHistoryGroup_xMatch>;
};
export type VsHistoryGroup_xMatch = Pick<VsHistoryGroup, never> & {
    xMatchMeasurement: XMatchMeasurement;
    historyDetails: NodeList<VsHistoryDetail_xMatch>;
};
export type VsHistoryDetail_xMatch = Pick<VsHistoryDetail, 'id' | 'vsMode' | 'vsStage' | 'judgement' | 'knockout' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    vsRule: Pick<VsRule, 'id' | 'name'>;
    player: Pick<VsPlayer, 'weapon' | 'id'>;
    myTeam: VsTeam_latest;
};

/** ba35dcea6d5666463e86273e1756d9ed XBattleHistoriesRefetchQuery */
export interface XBattleHistoriesRefetchResult {
    xBattleHistories: VsResult_xMatch;
    currentPlayer: CurrentPlayer_battles;
}

/** ba35dcea6d5666463e86273e1756d9ed XBattleHistoriesRefetchQuery variables */
export interface XBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}
