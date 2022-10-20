import { VsResult_latest, VsTeam_latest } from './battle-latest.js';
import { BankaraMatchHistory, CurrentPlayer_battles, VsHistoryDetail, VsHistoryGroup, VsPlayer } from './battles.js';
import { NodeList, VsRule } from './common.js';

/** c1553ac75de0a3ea497cdbafaa93e95b BankaraBattleHistoriesQuery */
export interface BankaraBattleHistoriesResult {
    bankaraBattleHistories: VsResult_bankara;
}

type VsResult_bankara = Pick<VsResult_latest, 'summary' | 'historyGroupsOnlyFirst'> & {
    historyGroups: NodeList<VsHistoryGroup_bankara>;
};
type VsHistoryGroup_bankara = Pick<VsHistoryGroup, 'bankaraMatchChallenge'> & {
    historyDetails: NodeList<VsHistoryDetail_bankara>;
};
type VsHistoryDetail_bankara = Pick<VsHistoryDetail, 'id' | 'vsMode' | 'vsStage' | 'judgement' | 'knockout' | 'udemae' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    vsRule: Pick<VsRule, 'id' | 'name'>;
    player: Pick<VsPlayer, 'id' | 'weapon'>;
    myTeam: VsTeam_latest;
    bankaraMatch: Pick<BankaraMatchHistory, 'earnedUdemaePoint'>;
};

/** d8a8662345593bbbcd63841c91d4c6f5 BankaraBattleHistoriesRefetchQuery */
export interface BankaraBattleHistoriesRefetchResult {
    bankaraBattleHistories: VsResult_bankara;
    currentPlayer: CurrentPlayer_battles;
}

/** d8a8662345593bbbcd63841c91d4c6f5 BankaraBattleHistoriesRefetchQuery variables */
export interface BankaraBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}
