import { VsResult_latest, VsTeam_latest } from './battle-latest.js';
import { CurrentPlayer_battles, VsHistoryDetail, VsHistoryGroup, VsPlayer } from './battles.js';
import { NodeList, VsRule } from './common.js';

/** 38e0529de8bc77189504d26c7a14e0b8 PrivateBattleHistoriesQuery */
export interface PrivateBattleHistoriesResult {
    privateBattleHistories: VsResult_latest;
}

/** b304e707648f0669a939943d46febce1 PrivateBattleHistoriesRefetchQuery */
export interface PrivateBattleHistoriesRefetchResult {
    privateBattleHistories: VsResult_latest;
    currentPlayer: CurrentPlayer_battles;
}

/** b304e707648f0669a939943d46febce1 PrivateBattleHistoriesRefetchQuery variables */
export interface PrivateBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}

/** 51981299595060692440e0ca66c475a1 PrivateBattleHistoriesQuery */
export interface PrivateBattleHistoriesResult_5198129 {
    privateBattleHistories: VsResult_private_5198129;
}

type VsResult_private_5198129 = Pick<VsResult_latest, 'summary' | 'historyGroupsOnlyFirst'> & {
    historyGroups: NodeList<VsHistoryGroup_private_5198129>;
};
type VsHistoryGroup_private_5198129 = Pick<VsHistoryGroup, never> & {
    lastPlayedTime: string;
    historyDetails: NodeList<VsHistoryDetail_private_5198129>;
};
type VsHistoryDetail_private_5198129 = Pick<VsHistoryDetail, 'id' | 'vsMode' | 'vsStage' | 'judgement' | 'knockout' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    vsRule: Pick<VsRule, 'id' | 'name'>;
    player: Pick<VsPlayer, 'weapon' | 'id' | 'festGrade'>;
    myTeam: VsTeam_latest;
};

/** 9ef974f2686a88f24e0dbff6f63a83c4 PrivateBattleHistoriesRefetchQuery */
export interface PrivateBattleHistoriesRefetchResult_9ef974f {
    privateBattleHistories: VsResult_private_5198129;
    currentPlayer: CurrentPlayer_battles;
}

/** 9ef974f2686a88f24e0dbff6f63a83c4 PrivateBattleHistoriesRefetchQuery variables */
export interface PrivateBattleHistoriesRefetchVariables_9ef974f {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}
