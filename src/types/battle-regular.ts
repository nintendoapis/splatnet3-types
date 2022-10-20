import { VsResult_latest, VsTeam_latest } from './battle-latest.js';
import { CurrentPlayer_battles, VsHistoryDetail, VsHistoryGroup, VsPlayer } from './battles.js';
import { NodeList, VsRule } from './common.js';

/** f6e7e0277e03ff14edfef3b41f70cd33 RegularBattleHistoriesQuery */
export interface RegularBattleHistoriesResult {
    regularBattleHistories: VsResult_regular;
}

type VsResult_regular = Pick<VsResult_latest, 'summary' | 'historyGroupsOnlyFirst'> & {
    historyGroups: NodeList<VsHistoryGroup_regular>;
};
type VsHistoryGroup_regular = Pick<VsHistoryGroup, never> & {
    historyDetails: NodeList<VsHistoryDetail_regular>;
};
type VsHistoryDetail_regular = Pick<VsHistoryDetail, 'id' | 'vsMode' | 'playedTime' | 'vsStage' | 'judgement' | 'knockout' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    vsRule: Pick<VsRule, 'id' | 'name'>;
    player: Pick<VsPlayer, 'weapon' | 'id' | 'festGrade'>;
    myTeam: VsTeam_latest;
};

/** 333d0a48071b0036449e35ece577b06f RegularBattleHistoriesRefetchQuery */
export interface RegularBattleHistoriesRefetchResult {
    regularBattleHistories: VsResult_latest;
    currentPlayer: CurrentPlayer_battles;
}

/** 333d0a48071b0036449e35ece577b06f RegularBattleHistoriesRefetchQuery variables */
export interface RegularBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}

/** 819b680b0c7962b6f7dc2a777cd8c5e4 RegularBattleHistoriesQuery */
export interface RegularBattleHistoriesResult_819b680 {
    regularBattleHistories: VsResult_regular_819b680;
}

type VsResult_regular_819b680 = Pick<VsResult_latest, 'summary' | 'historyGroupsOnlyFirst'> & {
    historyGroups: NodeList<VsHistoryGroup_regular_819b680>;
};
type VsHistoryGroup_regular_819b680 = Pick<VsHistoryGroup, never> & {
    lastPlayedTime: string;
    historyDetails: NodeList<VsHistoryDetail_regular_819b680>;
};
type VsHistoryDetail_regular_819b680 = Pick<VsHistoryDetail, 'id' | 'vsMode' | 'vsStage' | 'judgement' | 'knockout' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    vsRule: Pick<VsRule, 'id' | 'name'>;
    player: Pick<VsPlayer, 'weapon' | 'id' | 'festGrade'>;
    myTeam: VsTeam_latest;
};

/** fed6e752513a9986177e8eec50dfdd3c RegularBattleHistoriesRefetchQuery */
export interface RegularBattleHistoriesRefetchResult_fed6e75 {
    regularBattleHistories: VsResult_regular;
}

/** fed6e752513a9986177e8eec50dfdd3c RegularBattleHistoriesRefetchQuery variables */
export type RegularBattleHistoriesRefetchVariables_fed6e75 = RegularBattleHistoriesRefetchVariables;
