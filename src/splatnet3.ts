export * from './types.js';
export * from './partial-types.js';
export * from './variable-types/index.js';
export * from './enum.js';

export {
    BankaraBattleHistoriesQuery as BankaraBattleHistoriesResult,
    BankaraBattleHistoriesRefetchQuery as BankaraBattleHistoriesRefetchResult,
    BattleHistoryCurrentPlayerQuery as BattleHistoryCurrentPlayerResult,
    CatalogQuery as CatalogResult,
    CatalogRefetchQuery as CatalogRefetchResult,
    ChallengeQuery as ChallengeResult,
    ChallengeRefetchQuery as ChallengeRefetchResult,
    CheckinQuery as CheckinResult,
    CheckinWithQRCodeMutation as CheckinWithQRCodeResult,
    ConfigureAnalyticsQuery as ConfigureAnalyticsResult,
    CoopHistoryDetailQuery as CoopHistoryDetailResult,
    CoopHistoryDetailRefetchQuery as CoopHistoryDetailRefetchResult,
    CoopHistoryQuery as CoopHistoryResult,
    CoopPagerLatestCoopQuery as CoopPagerLatestCoopResult,
    CreateMyOutfitMutation as CreateMyOutfitResult,
    DetailFestRecordDetailQuery as DetailFestRecordDetailResult,
    DetailFestRefethQuery as DetailFestRefethResult,
    DetailFestVotingStatusRefethQuery as DetailFestVotingStatusRefethResult,
    DetailRankingQuery as DetailRankingResult,
    DetailTabViewWeaponTopsArRefetchQuery as DetailTabViewWeaponTopsArRefetchResult,
    DetailTabViewWeaponTopsClRefetchQuery as DetailTabViewWeaponTopsClRefetchResult,
    DetailTabViewWeaponTopsGlRefetchQuery as DetailTabViewWeaponTopsGlRefetchResult,
    DetailTabViewWeaponTopsLfRefetchQuery as DetailTabViewWeaponTopsLfRefetchResult,
    DetailTabViewXRankingArRefetchQuery as DetailTabViewXRankingArRefetchResult,
    DetailTabViewXRankingClRefetchQuery as DetailTabViewXRankingClRefetchResult,
    DetailTabViewXRankingGlRefetchQuery as DetailTabViewXRankingGlRefetchResult,
    DetailTabViewXRankingLfRefetchQuery as DetailTabViewXRankingLfRefetchResult,
    DetailVotingStatusQuery as DetailVotingStatusResult,
    DownloadSearchReplayQuery as DownloadSearchReplayResult,
    FestRecordQuery as FestRecordResult,
    FestRecordRefetchQuery as FestRecordRefetchResult,
    FriendListQuery as FriendListResult,
    FriendListRefetchQuery as FriendListRefetchResult,
    GesotownQuery as GesotownResult,
    GesotownRefetchQuery as GesotownRefetchResult,
    HeroHistoryQuery as HeroHistoryResult,
    HeroHistoryRefetchQuery as HeroHistoryRefetchResult,
    HistoryRecordQuery as HistoryRecordResult,
    HistoryRecordRefetchQuery as HistoryRecordRefetchResult,
    HomeQuery as HomeResult,
    JourneyChallengeDetailQuery as JourneyChallengeDetailResult,
    JourneyChallengeDetailRefetchQuery as JourneyChallengeDetailRefetchResult,
    JourneyQuery as JourneyResult,
    JourneyRefetchQuery as JourneyRefetchResult,
    LatestBattleHistoriesQuery as LatestBattleHistoriesResult,
    LatestBattleHistoriesRefetchQuery as LatestBattleHistoriesRefetchResult,
    MyOutfitDetailQuery as MyOutfitDetailResult,
    MyOutfitsQuery as MyOutfitsResult,
    MyOutfitsRefetchQuery as MyOutfitsRefetchResult,
    PagerLatestVsDetailQuery as PagerLatestVsDetailResult,
    PagerUpdateBattleHistoriesByVsModeQuery as PagerUpdateBattleHistoriesByVsModeResult,
    PhotoAlbumQuery as PhotoAlbumResult,
    PhotoAlbumRefetchQuery as PhotoAlbumRefetchResult,
    PrivateBattleHistoriesQuery as PrivateBattleHistoriesResult,
    PrivateBattleHistoriesRefetchQuery as PrivateBattleHistoriesRefetchResult,
    RankingHoldersFestTeamRankingHoldersPaginationQuery as RankingHoldersFestTeamRankingHoldersPaginationResult,
    RegularBattleHistoriesQuery as RegularBattleHistoriesResult,
    RegularBattleHistoriesRefetchQuery as RegularBattleHistoriesRefetchResult,
    ReplayModalReserveReplayDownloadMutation as ReplayModalReserveReplayDownloadResult,
    ReplayQuery as ReplayResult,
    ReplayUploadedReplayListRefetchQuery as ReplayUploadedReplayListRefetchResult,
    SaleGearDetailOrderGesotownGearMutation as SaleGearDetailOrderGesotownGearResult,
    SaleGearDetailQuery as SaleGearDetailResult,
    SettingQuery as SettingResult,
    StageRecordQuery as StageRecordResult,
    StageRecordsRefetchQuery as StageRecordsRefetchResult,
    StageScheduleQuery as StageScheduleResult,
    SupportButton_SupportChallengeMutation as SupportButton_SupportChallengeResult,
    UpdateMyOutfitMutation as UpdateMyOutfitResult,
    VotesUpdateFestVoteMutation as VotesUpdateFestVoteResult,
    VsHistoryDetailPagerRefetchQuery as VsHistoryDetailPagerRefetchResult,
    VsHistoryDetailQuery as VsHistoryDetailResult,
    WeaponRecordQuery as WeaponRecordResult,
    WeaponRecordsRefetchQuery as WeaponRecordsRefetchResult,
    XBattleHistoriesQuery as XBattleHistoriesResult,
    XBattleHistoriesRefetchQuery as XBattleHistoriesRefetchResult,
    XRankingDetailQuery as XRankingDetailResult,
    XRankingDetailRefetchQuery as XRankingDetailRefetchResult,
    XRankingQuery as XRankingResult,
    XRankingRefetchQuery as XRankingRefetchResult,
    myOutfitCommonDataEquipmentsQuery as MyOutfitCommonDataEquipmentsResult,
    myOutfitCommonDataFilteringConditionQuery as MyOutfitCommonDataFilteringConditionResult,
    refetchableCoopHistory_coopResultQuery as RefetchableCoopHistory_CoopResultResult,
    useCurrentFestQuery as CurrentFestResult,
} from './generated/latest.js';

export {
    GraphQLResponse,
    GraphQLSuccessResponse,
    GraphQLErrorResponse,
    GraphQLError,

    /** Current persisted queries */
    RequestId,
    UsagiRequestId,
    /** All known persisted query IDs */
    KnownRequestId,

    VariablesTypes,
    ResultTypes,

    RequestNames,
    RequestIds,
} from './graphql.js';

export interface GraphQLRequest<Variables extends unknown> {
    variables: Variables;
    extensions: {
        persistedQuery: {
            version: 1;
            sha256Hash: RequestParameters['id'];
        };
    };
}

interface RequestParameters {
    id: string;
    // ...
}
