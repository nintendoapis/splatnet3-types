import { VsResult_latest, VsTeam_latest } from './battle-latest.js';
import { BankaraMatchHistory, CurrentPlayer_battles, VsHistoryDetail, VsHistoryGroup, VsPlayer } from './battles.js';
import { NodeList, VsRule } from './common.js';

/** 45c74fefb45a49073207229ca65f0a62 XBattleHistoriesQuery */
export interface XBattleHistoriesResult {
    xBattleHistories: VsResult_xMatch;
}

export type VsResult_xMatch = unknown;

/** ba35dcea6d5666463e86273e1756d9ed XBattleHistoriesRefetchQuery */
export interface XBattleHistoriesRefetchResult {
    bankaraBattleHistories: VsResult_xMatch;
    currentPlayer: CurrentPlayer_battles;
}

/** ba35dcea6d5666463e86273e1756d9ed XBattleHistoriesRefetchQuery variables */
export interface XBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}
