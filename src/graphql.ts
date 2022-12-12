import { types as generated_types } from './generated/types.js';
import { CoralAndroidWidgetExtensionLatestAlbumPhotoResult, CoralAndroidWidgetExtensionLatestVsResultsResult, CoralAndroidWidgetExtensionStageSchedulesResult } from './types/coral-android-widget-extension.js';
import { CoralWidgetExtensionCurrentEquipmentResult, CoralWidgetExtensionLatestAlbumPhotoResult, CoralWidgetExtensionLatestVsResultsResult, CoralWidgetExtensionVsSchedulesResult, CoralWidgetExtensionVsSchedulesVariables } from './types/coral-ios-widget-extension.js';
import { BankaraBattleHistoriesRefetchVariables, BankaraBattleHistoriesRefetchVariables_964c03e, BankaraBattleHistoriesRefetchVariables_d8a8662, CheckinWithQRCodeMutationVariables, CheckinWithQRCodeMutationVariables_8e3fecf, CoopHistoryDetailRefetchVariables, CoopHistoryDetailVariables, CoopHistoryDetailVariables_3cc5f82, CoopHistoryDetailVariables_f3799a0, CreateMyOutfitVariables, DetailFestRecordDetailVariables, DetailFestRecordDetailVariables_2d66198, DetailFestRefetchVariables, DetailFestRefetchVariables_0eb7bac, DetailFestVotingStatusRefetchVariables, DetailRankingVariables, DetailRankingVariables_58bdd28, DetailVotingStatusVariables, DownloadSearchReplayVariables, DownloadSearchReplayVariables_b461048, DownloadSearchReplayVariables_cde4fe7, JourneyChallengeDetailRefetchVariables, JourneyChallengeDetailVariables, JourneyRefetchVariables, JourneyVariables, LatestBattleHistoriesRefetchVariables, LatestBattleHistoriesRefetchVariables_047c1ff, LatestBattleHistoriesRefetchVariables_80585ad, MyOutfitDetailVariables, PagerUpdateBattleHistoriesByVsModeVariables, PagerUpdateBattleHistoriesByVsModeVariables_000afbc, PagerUpdateBattleHistoriesByVsModeVariables_67224c2, PagerUpdateBattleHistoriesByVsModeVariables_7297ae4, PrivateBattleHistoriesRefetchVariables, PrivateBattleHistoriesRefetchVariables_4835a28, PrivateBattleHistoriesRefetchVariables_9ef974f, PrivateBattleHistoriesRefetchVariables_b304e70, RankingHoldersFestTeamRankingHoldersPaginationVariables, RegularBattleHistoriesRefetchVariables, RegularBattleHistoriesRefetchVariables_04e5d83, RegularBattleHistoriesRefetchVariables_333d0a4, RegularBattleHistoriesRefetchVariables_fed6e75, ReplayModalReserveReplayDownloadVariables, SaleGearDetailOrderGesotownGearVariables, SaleGearDetailOrderGesotownGearVariables_aebd822, SaleGearDetailVariables, SaleGearDetailVariables_7c4173b, SupportButtonSupportChallengeVariables, UpdateMyOutfitVariables, VotesUpdateFestVoteVariables, VsHistoryDetailPagerRefetchVariables, VsHistoryDetailVariables, VsHistoryDetailVariables_2b08598, VsHistoryDetailVariables_cd82f2a, XBattleHistoriesRefetchVariables, XBattleHistoriesRefetchVariables_ba35dce } from './variable-types.js';

export enum RequestId {
    SupportButton_SupportChallengeMutation = '30aa261475d43bd765b4200fc67003c8',
    CheckinWithQRCodeMutation = '8d54e1c6bdcc65181f65adc582914ad8',
    CoopPagerLatestCoopQuery = 'a2704e18852efce9cdbc61e205e1ed4e',
    RankingHoldersFestTeamRankingHoldersPaginationQuery = 'be2eb9e9b8dd680519eb59cc46c1a32b',
    VotesUpdateFestVoteMutation = 'a2c742c840718f37488e0394cd6e1e08',
    CreateMyOutfitMutation = '31ff008ea218ffbe11d958a52c6f959f',
    UpdateMyOutfitMutation = 'bb809066282e7d659d3b9e9d4e46b43b',
    DownloadSearchReplayQuery = '43a5f23eec238d7ee827cc87f47f050c',
    ReplayModalReserveReplayDownloadMutation = '87bff2b854168b496c2da8c0e7f3e5bc',
    PagerLatestVsDetailQuery = '0329c535a32f914fd44251be1f489e24',
    PagerUpdateBattleHistoriesByVsModeQuery = '094a9b44ff21e8c409d6046fc1af9dfe',
    ConfigureAnalyticsQuery = 'f8ae00773cc412a50dd41a6d9a159ddd',
    CurrentFestQuery = 'c0429fd738d829445e994d3370999764',
    BankaraBattleHistoriesQuery = '0438ea6978ae8bd77c5d1250f4f84803',
    BankaraBattleHistoriesRefetchQuery = '92b56403c0d9b1e63566ec98fef52eb3',
    LatestBattleHistoriesQuery = '0176a47218d830ee447e10af4a287b3f',
    LatestBattleHistoriesRefetchQuery = '7161210aad0793e58e76f20e0443855e',
    PrivateBattleHistoriesQuery = '8e5ae78b194264a6c230e262d069bd28',
    PrivateBattleHistoriesRefetchQuery = '89bc61012dcf170d9253f406ebebee67',
    RegularBattleHistoriesQuery = '3baef04b095ad8975ea679d722bc17de',
    RegularBattleHistoriesRefetchQuery = '4c95233c8d55e7c8cc23aae06109a2e8',
    XBattleHistoriesQuery = '6796e3cd5dc3ebd51864dc709d899fc5',
    XBattleHistoriesRefetchQuery = '94711fc9f95dd78fc640909f02d09215',
    BattleHistoryCurrentPlayerQuery = '49dd00428fb8e9b4dde62f585c8de1e0',
    ChallengeQuery = '8a079214500148bf88a8fce1d7209b90',
    ChallengeRefetchQuery = '34aedc79f96b8613501bba465295f779',
    JourneyChallengeDetailQuery = '38e58b84376a2ad49ddbe4061b948455',
    JourneyChallengeDetailRefetchQuery = '8dc246933b1f4e26a6dfd251878cf786',
    JourneyQuery = 'bc71fc0264f3f72256724b069f7a4097',
    JourneyRefetchQuery = '09eee118fa16415d6bc3846bc6e5d8e5',
    CheckinQuery = '5d0d1b45ebf4e324d0dae017d9df06d2',
    CoopHistoryDetailQuery = '9ade2aa3656324870ccec023636aed32',
    CoopHistoryDetailRefetchQuery = 'd3188df2fd4436870936b109675e2849',
    CoopHistoryQuery = '2fd21f270d381ecf894eb975c5f6a716',
    RefetchableCoopHistory_CoopResultQuery = '2a7f4335bcf586d904db85e75ba868c0',
    DetailFestRecordDetailQuery = '96c3a7fd484b8d3be08e0a3c99eb2a3d',
    DetailFestRefethQuery = '18c7c465b18de5829347b7a7f1e571a1',
    DetailFestVotingStatusRefethQuery = '92f51ed1ab462bbf1ab64cad49d36f79',
    DetailRankingQuery = '4869de13d0d209032b203608cb598aef',
    DetailVotingStatusQuery = '53ee6b6e2acc3859bf42454266d671fc',
    FestRecordQuery = '44c76790b68ca0f3da87f2a3452de986',
    FestRecordRefetchQuery = '73b9837d0e4dd29bfa2f1a7d7ee0814a',
    FriendListQuery = 'f0a8ebc384cf5fbac01e8085fbd7c898',
    FriendListRefetchQuery = 'aa2c979ad21a1100170ddf6afea3e2db',
    GesotownQuery = 'a43dd44899a09013bcfd29b4b13314ff',
    GesotownRefetchQuery = '951cab295eafdbeccfc2e718d7a98646',
    SaleGearDetailOrderGesotownGearMutation = 'b79b7a101a243912754f72437e2ad7e5',
    SaleGearDetailQuery = '6eb1b255b2cf04c08041567148c883ad',
    HeroHistoryQuery = 'fbee1a882371d4e3becec345636d7d1c',
    HeroHistoryRefetchQuery = '4f9ae2b8f1d209a5f20302111b28f975',
    HistoryRecordQuery = '32b6771f94083d8f04848109b7300af5',
    HistoryRecordRefetchQuery = '57b1ccae6949c407e2df9bcad2a8e573',
    MyOutfitDetailQuery = 'd935d9e9ba7a5b6b5d6ece7f253304fc',
    MyOutfitsQuery = '81d9a6849467d2aa6b1603ebcedbddbe',
    MyOutfitsRefetchQuery = '10db4e349f3123c56df14e3adec2ee6f',
    MyOutfitCommonDataEquipmentsQuery = 'd29cd0c2b5e6bac90dd5b817914832f8',
    MyOutfitCommonDataFilteringConditionQuery = 'd02ab22c9dccc440076055c8baa0fa7a',
    PhotoAlbumQuery = '7e950e4f69a5f50013bba8a8fb6a3807',
    PhotoAlbumRefetchQuery = '53fb0ad32c13dd9a6e617b1158cc2d41',
    ReplayQuery = '7ec830425971a0e0ff5b2a378455e38e',
    ReplayUploadedReplayListRefetchQuery = '1d1048e2af114e263a3c3d3ddd34bcb4',
    SettingQuery = '61228d553e7463c203e05e7810dd79a7',
    StageRecordQuery = 'f08a932d533845dde86e674e03bbb7d3',
    StageRecordsRefetchQuery = '2fb1b3fa2d40c9b5953ea1ae263e54c1',
    StageScheduleQuery = '730cd98e84f1030d3e9ac86b6f1aae13',
    WeaponRecordQuery = '5f279779e7081f2d14ae1ddca0db2b6e',
    WeaponRecordsRefetchQuery = '6961f618fcef440c81509b205465eeec',
    DetailTabViewWeaponTopsArRefetchQuery = 'a6782a0c692e8076656f9b4ab613fd82',
    DetailTabViewWeaponTopsClRefetchQuery = '8d3c5bb2e82d6eb32a37eefb0e1f8f69',
    DetailTabViewWeaponTopsGlRefetchQuery = 'b23468857c049c2f0684797e45fabac1',
    DetailTabViewWeaponTopsLfRefetchQuery = 'd46f88c2ea5c4daeb5fe9d5813d07a99',
    DetailTabViewXRankingArRefetchQuery = 'eb69df6f2a2f13ab207eedc568f0f8b6',
    DetailTabViewXRankingClRefetchQuery = '68f99b7b02537bcb881db07e4e67f8dd',
    DetailTabViewXRankingGlRefetchQuery = '5f8f333770ed3c43e21b0121f3a86716',
    DetailTabViewXRankingLfRefetchQuery = '4e8b381ae6f9620443627f4eac3a2210',
    XRankingDetailQuery = 'ec7174376203f9901713e116075c5ecd',
    XRankingDetailRefetchQuery = '2aac81b2ec56fb2d15ce3d6a2b625772',
    XRankingQuery = 'd771444f2584d938db8d10055599011d',
    XRankingRefetchQuery = '5149402597bd2531b4eea04692d8bfd5',
    CatalogQuery = '52504060c81ff2f2d618c4e5377e6e7c',
    CatalogRefetchQuery = '4423dfd630867301fcdd834cd52922f4',
    HomeQuery = 'dba47124d5ec3090c97ba17db5d2f4b3',
    VsHistoryDetailPagerRefetchQuery = '994cf141e55213e6923426caf37a1934',
    VsHistoryDetailQuery = '291295ad311b99a6288fc95a5c4cb2d2',
}

export enum CoralWidgetExtensioniOSRequestId {
    LatestAlbumPhoto = '0a6c7ae9561aa05559ab66f4a8c0399b79c134bba682451e8180b895b92b0698',
    VsSchedules = 'f5131603b235edce2218e71c27ed0d35610cb78c48bb44aa88e98fb37ab08cd0',
    CurrentEquipment = '6415729605742e57e4f627db2a5714ba38da0992ec91133b243bf517cd905369',
    LatestVsResults = 'd167126ea863c00e3472fb3c2e9d9fbc37304d6168cd736e98c490288124f390',
}

export enum CoralWidgetExtensionAndroidRequestId {
    LatestAlbumPhoto = 'c5723d79aab0dbcff9dd8808869544c2ef2bb3a5d882147b6b91386c9718a365',
    LatestVsResults = '23f3cb83d08f46e36a3eced4bffb538a16cfd6ae21799cc8fb54909fa2962706',
    StageSchedules = 'fb86e1a8d5845b7d7408b3e8074cd19bd9277970da8e21ffb869de6513ea99aa',
}

enum RequestType {
    QUERY,
    MUTATION,
}

type request_variables_app = {
    [RequestId.SupportButton_SupportChallengeMutation]: SupportButtonSupportChallengeVariables;
    '8e3fecf7cfce83f6831b17e9052791d0': CheckinWithQRCodeMutationVariables_8e3fecf;
    [RequestId.CheckinWithQRCodeMutation]: CheckinWithQRCodeMutationVariables;
    [RequestId.RankingHoldersFestTeamRankingHoldersPaginationQuery]: RankingHoldersFestTeamRankingHoldersPaginationVariables;
    [RequestId.VotesUpdateFestVoteMutation]: VotesUpdateFestVoteVariables;
    [RequestId.CreateMyOutfitMutation]: CreateMyOutfitVariables;
    [RequestId.UpdateMyOutfitMutation]: UpdateMyOutfitVariables;
    'b461048f9ffc414b3967a3cdad0805dd': DownloadSearchReplayVariables_b461048;
    'cde4fe7d6467b32d5a06279492aa21dc': DownloadSearchReplayVariables_cde4fe7;
    [RequestId.DownloadSearchReplayQuery]: DownloadSearchReplayVariables;
    [RequestId.ReplayModalReserveReplayDownloadMutation]: ReplayModalReserveReplayDownloadVariables;
    '67224c25f7b2e605205d152009f593c9': PagerUpdateBattleHistoriesByVsModeVariables_67224c2;
    '000afbc113f5653d2c2cee42ff6cdeab': PagerUpdateBattleHistoriesByVsModeVariables_000afbc;
    '7297ae42bbb1958cfe438736865d304e': PagerUpdateBattleHistoriesByVsModeVariables_7297ae4;
    [RequestId.PagerUpdateBattleHistoriesByVsModeQuery]: PagerUpdateBattleHistoriesByVsModeVariables;
    'd8a8662345593bbbcd63841c91d4c6f5': BankaraBattleHistoriesRefetchVariables_d8a8662;
    '964c03ed28eb640438d8113534de2fe4': BankaraBattleHistoriesRefetchVariables_964c03e;
    [RequestId.BankaraBattleHistoriesRefetchQuery]: BankaraBattleHistoriesRefetchVariables;
    '80585ad4e4ecb674c3d8cd278adb1d21': LatestBattleHistoriesRefetchVariables_80585ad;
    '047c1ff4d6b9f03b082aa6ffdb200a6a': LatestBattleHistoriesRefetchVariables_047c1ff;
    [RequestId.LatestBattleHistoriesRefetchQuery]: LatestBattleHistoriesRefetchVariables;
    '9ef974f2686a88f24e0dbff6f63a83c4': PrivateBattleHistoriesRefetchVariables_9ef974f;
    'b304e707648f0669a939943d46febce1': PrivateBattleHistoriesRefetchVariables_b304e70;
    '4835a28419ad3c7bfacbb30ca4008140': PrivateBattleHistoriesRefetchVariables_4835a28;
    [RequestId.PrivateBattleHistoriesRefetchQuery]: PrivateBattleHistoriesRefetchVariables;
    'fed6e752513a9986177e8eec50dfdd3c': RegularBattleHistoriesRefetchVariables_fed6e75;
    '333d0a48071b0036449e35ece577b06f': RegularBattleHistoriesRefetchVariables_333d0a4;
    '04e5d83f4243541c369b2e7556b9b809': RegularBattleHistoriesRefetchVariables_04e5d83;
    [RequestId.RegularBattleHistoriesRefetchQuery]: RegularBattleHistoriesRefetchVariables;
    'ba35dcea6d5666463e86273e1756d9ed': XBattleHistoriesRefetchVariables_ba35dce;
    [RequestId.XBattleHistoriesRefetchQuery]: XBattleHistoriesRefetchVariables;
    [RequestId.JourneyChallengeDetailQuery]: JourneyChallengeDetailVariables;
    [RequestId.JourneyChallengeDetailRefetchQuery]: JourneyChallengeDetailRefetchVariables;
    [RequestId.JourneyQuery]: JourneyVariables;
    [RequestId.JourneyRefetchQuery]: JourneyRefetchVariables;
    'f3799a033f0a7ad4b1b396f9a3bafb1e': CoopHistoryDetailVariables_f3799a0;
    '3cc5f826a6646b85f3ae45db51bd0707': CoopHistoryDetailVariables_3cc5f82;
    [RequestId.CoopHistoryDetailQuery]: CoopHistoryDetailVariables;
    [RequestId.CoopHistoryDetailRefetchQuery]: CoopHistoryDetailRefetchVariables;
    '2d661988c055d843b3be290f04fb0db9': DetailFestRecordDetailVariables_2d66198;
    [RequestId.DetailFestRecordDetailQuery]: DetailFestRecordDetailVariables;
    '0eb7bac3d8aabcad0e9d663ee5b90846': DetailFestRefetchVariables_0eb7bac;
    [RequestId.DetailFestRefethQuery]: DetailFestRefetchVariables;
    [RequestId.DetailFestVotingStatusRefethQuery]: DetailFestVotingStatusRefetchVariables;
    '58bdd28e3cf71c3bf38bc45836ee1e96': DetailRankingVariables_58bdd28;
    [RequestId.DetailRankingQuery]: DetailRankingVariables;
    [RequestId.DetailVotingStatusQuery]: DetailVotingStatusVariables;
    'aebd822b4a4e48dc48f618411054b8f5': SaleGearDetailOrderGesotownGearVariables_aebd822;
    [RequestId.SaleGearDetailOrderGesotownGearMutation]: SaleGearDetailOrderGesotownGearVariables;
    '7c4173bb0f5d56f29dbec889173cff24': SaleGearDetailVariables_7c4173b;
    [RequestId.SaleGearDetailQuery]: SaleGearDetailVariables;
    [RequestId.MyOutfitDetailQuery]: MyOutfitDetailVariables;
    [RequestId.VsHistoryDetailPagerRefetchQuery]: VsHistoryDetailPagerRefetchVariables;
    'cd82f2ade8aca7687947c5f3210805a6': VsHistoryDetailVariables_cd82f2a;
    '2b085984f729cd51938fc069ceef784a': VsHistoryDetailVariables_2b08598;
    [RequestId.VsHistoryDetailQuery]: VsHistoryDetailVariables;
};

type requests_app = {
    [K in keyof generated_types]: [RequestType, K extends keyof request_variables_app ? request_variables_app[K] : {}, generated_types[K]];
};

type requests_widgetextension_ios = {
    // Coral 2.3.0 iOS
    [CoralWidgetExtensioniOSRequestId.LatestAlbumPhoto]: [RequestType.QUERY, null, CoralWidgetExtensionLatestAlbumPhotoResult];
    [CoralWidgetExtensioniOSRequestId.VsSchedules]: [RequestType.QUERY, CoralWidgetExtensionVsSchedulesVariables, CoralWidgetExtensionVsSchedulesResult];
    [CoralWidgetExtensioniOSRequestId.CurrentEquipment]: [RequestType.QUERY, null, CoralWidgetExtensionCurrentEquipmentResult];
    [CoralWidgetExtensioniOSRequestId.LatestVsResults]: [RequestType.QUERY, null, CoralWidgetExtensionLatestVsResultsResult];
};

type requests_widgetextension_android = {
    // Coral 2.3.0 Android
    [CoralWidgetExtensionAndroidRequestId.LatestAlbumPhoto]: [RequestType.QUERY, null, CoralAndroidWidgetExtensionLatestAlbumPhotoResult];
    [CoralWidgetExtensionAndroidRequestId.LatestVsResults]: [RequestType.QUERY, unknown, CoralAndroidWidgetExtensionLatestVsResultsResult];
    [CoralWidgetExtensionAndroidRequestId.StageSchedules]: [RequestType.QUERY, null, CoralAndroidWidgetExtensionStageSchedulesResult];
};

type requests = requests_app & requests_widgetextension_ios & requests_widgetextension_android;

export type KnownRequestId = keyof requests;
export type VariablesType<T extends KnownRequestId> = requests[T][1];
export type ResultType<T extends KnownRequestId> = requests[T][2];

export type VariablesTypes = {
    [K in KnownRequestId]: VariablesType<K>;
};
export type ResultTypes = {
    [K in KnownRequestId]: ResultType<K>;
};

export interface GraphQLSuccessResponse<T = unknown> {
    data: T;
    errors?: GraphQLError[];
}

export interface GraphQLErrorResponse {
    errors: GraphQLError[];
}
export interface GraphQLError {
    message: string;
    locations?: GraphQLErrorLocation[];
    extensions?: GraphQLErrorExtensions;
    path?: string[];
}
export interface GraphQLErrorLocation {
    line: number;
    column: number;
}
export interface GraphQLErrorExtensions {
    value: unknown | null;
    problems: GraphQLErrorExtensionsProblem[];
}
export interface GraphQLErrorExtensionsProblem {
    path: unknown[];
    explanation: string;
}

export type GraphQLResponse<T = unknown> = GraphQLSuccessResponse<T> | GraphQLErrorResponse;
