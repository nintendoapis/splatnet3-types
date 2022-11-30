import { Award, VsHistoryDetail, VsPlayer, VsTeam, VsTeamResult } from './battles.js';
import { Fest_app, NodeList, UserError, VsMode, VsRule } from './common.js';
import { ClothingGear, HeadGear, ShoesGear } from './gear.js';
import { VsStage } from './stage.js';

export interface Replay {
    id: string;
    historyDetail: VsHistoryDetail_replay;
    replayCode: string;
}

export type VsHistoryDetail_replay = Pick<VsHistoryDetail, 'id' | 'playedTime' | 'judgement' | 'knockout'> & {
    vsMode: Pick<VsMode, 'id' | 'mode' | 'name'>;
    vsRule: Pick<VsRule, 'id' | 'name'>;
    vsStage: Pick<VsStage, 'id' | 'name'>;
    player: VsPlayer_replay;
    myTeam: VsTeam_replay;
    awards: Pick<Award, 'name'>[];
};
export type VsPlayer_replay = Pick<VsPlayer, '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'nameplate' | 'weapon'> & {
    headGear: Pick<HeadGear, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
    clothingGear: Pick<ClothingGear, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
    shoesGear: Pick<ShoesGear, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
};
export type VsTeam_replay = Pick<VsTeam, never> & {
    result: Pick<VsTeamResult, 'paintPoint' | 'paintRatio' | 'score'>;
};

/** f98cc8326d0d17b07a5785096b0f3517 ReplayQuery */
export interface ReplayResult {
    replays: NodeList<Replay>;
    currentFest: Fest_app | null;
}

/** dd56e76c75cda6af077a223c351ad61d ReplayUploadedReplayListRefetchQuery */
export type ReplayUploadedReplayListRefetchResult = ReplayResult;

/** b461048f9ffc414b3967a3cdad0805dd DownloadSearchReplayQuery */
export interface DownloadSearchReplayResult {
    replay: Replay | null;
}

/** b461048f9ffc414b3967a3cdad0805dd DownloadSearchReplayQuery variables */
export interface DownloadSearchReplayVariables {
    code: string;
}

/** 87bff2b854168b496c2da8c0e7f3e5bc ReplayModalReserveReplayDownloadMutation */
export interface ReplayModalReserveReplayDownloadResult {
    reserveReplayDownload: ReserveReplayDownloadPayload;
}

export interface ReserveReplayDownloadPayload {
    replay: Pick<Replay, 'id'>;
    userErrors: UserError[] | null;
}

/** 87bff2b854168b496c2da8c0e7f3e5bc ReplayModalReserveReplayDownloadMutation variables */
export interface ReplayModalReserveReplayDownloadVariables {
    input: {
        id: string;
    };
}
