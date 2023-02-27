import { ChallengeJourney, CoopHistoryDetail, Fest, FestTeam, MyOutfit, Replay, SaleGear, VsHistoryDetail, XRankingSeason } from './types.js';

//
// Request types
//
// This is only used to add correct null types.
//

export interface CoopHistoryDetailQuery {
    node: CoopHistoryDetail | null;
}

export interface CoopHistoryDetailRefetchQuery {
    node: CoopHistoryDetail | null;
}

export interface DetailFestRecordDetailQuery {
    node: Fest | null;
}

export interface DetailFestRefethQuery {
    node: Fest | null;
}

export interface DetailFestVotingStatusRefethQuery {
    node: Fest | null;
}

export interface DetailRankingQuery {
    node: Fest | null;
}

export interface DetailTabViewWeaponTopsArRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailTabViewWeaponTopsClRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailTabViewWeaponTopsGlRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailTabViewWeaponTopsLfRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailTabViewXRankingArRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailTabViewXRankingClRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailTabViewXRankingGlRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailTabViewXRankingLfRefetchQuery {
    node: XRankingSeason | null;
}

export interface DetailVotingStatusQuery {
    node: Fest | null;
}

export interface DownloadSearchReplayQuery {
    replay: Replay | null;
}

export interface JourneyChallengeDetailQuery {
    node: ChallengeJourney | null;
}

export interface JourneyChallengeDetailRefetchQuery {
    node: ChallengeJourney | null;
}

export interface JourneyQuery {
    node: ChallengeJourney | null;
}

export interface JourneyRefetchQuery {
    node: ChallengeJourney | null;
}

export interface MyOutfitDetailQuery {
    node: MyOutfit | null;
}

export interface RankingHoldersFestTeamRankingHoldersPaginationQuery {
    node: FestTeam | null;
}

export interface SaleGearDetailQuery {
    node: SaleGear;
}

export interface StageScheduleQuery {
    currentFest: Fest | null;
}

export interface CurrentFestQuery {
    currentFest: Fest | null;
}

export interface VsHistoryDetailPagerRefetchQuery {
    node: VsHistoryDetail | null;
}

export interface VsHistoryDetailQuery {
    node: VsHistoryDetail | null;
}

export interface XRankingDetailQuery {
    node: XRankingSeason | null;
}

export interface XRankingDetailRefetchQuery {
    node: XRankingSeason | null;
}

export type request_types = {
    'CoopHistoryDetailQuery': CoopHistoryDetailQuery;
    'CoopHistoryDetailRefetchQuery': CoopHistoryDetailRefetchQuery;
    'DetailFestRecordDetailQuery': DetailFestRecordDetailQuery;
    'DetailFestRefethQuery': DetailFestRefethQuery;
    'DetailFestVotingStatusRefethQuery': DetailFestVotingStatusRefethQuery;
    'DetailRankingQuery': DetailRankingQuery;
    'DetailTabViewWeaponTopsArRefetchQuery': DetailTabViewWeaponTopsArRefetchQuery;
    'DetailTabViewWeaponTopsClRefetchQuery': DetailTabViewWeaponTopsClRefetchQuery;
    'DetailTabViewWeaponTopsGlRefetchQuery': DetailTabViewWeaponTopsGlRefetchQuery;
    'DetailTabViewWeaponTopsLfRefetchQuery': DetailTabViewWeaponTopsLfRefetchQuery;
    'DetailTabViewXRankingArRefetchQuery': DetailTabViewXRankingArRefetchQuery;
    'DetailTabViewXRankingClRefetchQuery': DetailTabViewXRankingClRefetchQuery;
    'DetailTabViewXRankingGlRefetchQuery': DetailTabViewXRankingGlRefetchQuery;
    'DetailTabViewXRankingLfRefetchQuery': DetailTabViewXRankingLfRefetchQuery;
    'DetailVotingStatusQuery': DetailVotingStatusQuery;
    'DownloadSearchReplayQuery': DownloadSearchReplayQuery;
    'JourneyChallengeDetailQuery': JourneyChallengeDetailQuery;
    'JourneyChallengeDetailRefetchQuery': JourneyChallengeDetailRefetchQuery;
    'JourneyQuery': JourneyQuery;
    'JourneyRefetchQuery': JourneyRefetchQuery;
    'MyOutfitDetailQuery': MyOutfitDetailQuery;
    'RankingHoldersFestTeamRankingHoldersPaginationQuery': RankingHoldersFestTeamRankingHoldersPaginationQuery;
    'StageScheduleQuery': StageScheduleQuery;
    'useCurrentFestQuery': CurrentFestQuery;
    'VsHistoryDetailPagerRefetchQuery': VsHistoryDetailPagerRefetchQuery;
    'VsHistoryDetailQuery': VsHistoryDetailQuery;
    'XRankingDetailQuery': XRankingDetailQuery;
    'XRankingDetailRefetchQuery': XRankingDetailRefetchQuery;
};
