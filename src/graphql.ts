import generated_types from './generated/types.js';
import * as generated_named_types from './generated/named.js';
import { CoralAndroidWidgetExtensionLatestAlbumPhotoResult, CoralAndroidWidgetExtensionLatestVsResultsResult, CoralAndroidWidgetExtensionStageSchedulesResult } from './types/coral-android-widget-extension.js';
import { CoralWidgetExtensionCurrentEquipmentResult, CoralWidgetExtensionLatestAlbumPhotoResult, CoralWidgetExtensionLatestVsResultsResult, CoralWidgetExtensionVsSchedulesResult, CoralWidgetExtensionVsSchedulesVariables } from './types/coral-ios-widget-extension.js';
import { BankaraBattleHistoriesRefetchVariables, BankaraBattleHistoriesRefetchVariables_964c03e, BankaraBattleHistoriesRefetchVariables_d8a8662, CheckinWithQRCodeMutationVariables, CheckinWithQRCodeMutationVariables_8d54e1c, CheckinWithQRCodeMutationVariables_8e3fecf, CoopHistoryDetailRefetchVariables, CoopHistoryDetailVariables, CoopHistoryDetailVariables_3cc5f82, CoopHistoryDetailVariables_9ade2aa, CoopHistoryDetailVariables_f3799a0, CoopRecordBigRunRecordContainerPaginationVariables, CreateMyOutfitVariables, DetailFestRecordDetailVariables, DetailFestRecordDetailVariables_2d66198, DetailFestRefetchVariables, DetailFestRefetchVariables_0eb7bac, DetailFestVotingStatusRefetchVariables, DetailRankingVariables, DetailRankingVariables_4869de1, DetailRankingVariables_58bdd28, DetailVotingStatusVariables, DownloadSearchReplayVariables, DownloadSearchReplayVariables_43a5f23, DownloadSearchReplayVariables_8e904b5, DownloadSearchReplayVariables_b461048, DownloadSearchReplayVariables_cde4fe7, EventBattleHistoriesRefetchVariables, EventBattleHistoriesRefetchVariables_8083b0c, EventMatchRankingPeriodVariables, EventMatchRankingSeasonRefetchVariables, HomeVariables, HomeVariables_22e2fa8, JourneyChallengeDetailRefetchVariables, JourneyChallengeDetailRefetchVariables_8dc2469, JourneyChallengeDetailVariables, JourneyChallengeDetailVariables_38e58b8, JourneyRefetchVariables, JourneyVariables, LatestBattleHistoriesRefetchVariables, LatestBattleHistoriesRefetchVariables_047c1ff, LatestBattleHistoriesRefetchVariables_7161210, LatestBattleHistoriesRefetchVariables_80585ad, MyOutfitDetailVariables, PagerUpdateBattleHistoriesByVsModeVariables, PagerUpdateBattleHistoriesByVsModeVariables_000afbc, PagerUpdateBattleHistoriesByVsModeVariables_094a9b4, PagerUpdateBattleHistoriesByVsModeVariables_67224c2, PagerUpdateBattleHistoriesByVsModeVariables_7297ae4, PagerUpdateBattleHistoriesByVsModeVariables_eef75ef, PrivateBattleHistoriesRefetchVariables, PrivateBattleHistoriesRefetchVariables_4835a28, PrivateBattleHistoriesRefetchVariables_9ef974f, PrivateBattleHistoriesRefetchVariables_b304e70, RankingHoldersFestTeamRankingHoldersPaginationVariables, RankingHoldersFestTeamRankingHoldersPaginationVariables_be2eb9e, RegularBattleHistoriesRefetchVariables, RegularBattleHistoriesRefetchVariables_04e5d83, RegularBattleHistoriesRefetchVariables_333d0a4, RegularBattleHistoriesRefetchVariables_fed6e75, ReplayModalReserveReplayDownloadVariables, SaleGearDetailOrderGesotownGearVariables, SaleGearDetailOrderGesotownGearVariables_aebd822, SaleGearDetailVariables, SaleGearDetailVariables_7c4173b, SettingVariables, ShareMyOutfitVariables, SupportButtonSupportChallengeVariables, SupportButtonSupportChallengeVariables_30aa261, UpdateMyOutfitVariables, VotesUpdateFestVoteVariables, VsHistoryDetailPagerRefetchVariables, VsHistoryDetailVariables, VsHistoryDetailVariables_291295a, VsHistoryDetailVariables_2b08598, VsHistoryDetailVariables_cd82f2a, XBattleHistoriesRefetchVariables, XBattleHistoriesRefetchVariables_ba35dce } from './variable-types.js';

export enum RequestId {
    SupportButton_SupportChallengeMutation = '991bace9e8c52d63084cd1570a97a5b4',
    CheckinWithQRCodeMutation = 'daffd9621680664dbf19d27e87484ac7',
    CoopPagerLatestCoopQuery = 'cd10e63e08dc83769052cfc28372a7ba',
    RankingHoldersFestTeamRankingHoldersPaginationQuery = 'f488fccdad37b9e19aed50a8d6e83a24',
    VotesUpdateFestVoteMutation = 'a2c742c840718f37488e0394cd6e1e08',
    CreateMyOutfitMutation = '31ff008ea218ffbe11d958a52c6f959f',
    UpdateMyOutfitMutation = 'bb809066282e7d659d3b9e9d4e46b43b',
    DownloadSearchReplayQuery = 'd1841381ec4972f1bfc4742d162de0b3',
    ReplayModalReserveReplayDownloadMutation = '87bff2b854168b496c2da8c0e7f3e5bc',
    PagerLatestVsDetailQuery = '0329c535a32f914fd44251be1f489e24',
    PagerUpdateBattleHistoriesByVsModeQuery = 'dd7f147589cf3bb45a08f53c3477056c',
    ConfigureAnalyticsQuery = 'f8ae00773cc412a50dd41a6d9a159ddd',
    CurrentFestQuery = 'c0429fd738d829445e994d3370999764',
    ShareMyOutfitQuery = '3ba5572efce5bebbd859fc2d269d223c',
    BankaraBattleHistoriesQuery = '0438ea6978ae8bd77c5d1250f4f84803',
    BankaraBattleHistoriesRefetchQuery = '92b56403c0d9b1e63566ec98fef52eb3',
    EventBattleHistoriesQuery = 'e7bbaf1fa255305d607351da434b2d0f',
    EventBattleHistoriesRefetchQuery = '5650c7abd4e377e74f95e30031864208',
    LatestBattleHistoriesQuery = '0d90c7576f1916469b2ae69f64292c02',
    LatestBattleHistoriesRefetchQuery = '6b74405ca9b43ee77eb8c327c3c1a317',
    PrivateBattleHistoriesQuery = '8e5ae78b194264a6c230e262d069bd28',
    PrivateBattleHistoriesRefetchQuery = '89bc61012dcf170d9253f406ebebee67',
    RegularBattleHistoriesQuery = '3baef04b095ad8975ea679d722bc17de',
    RegularBattleHistoriesRefetchQuery = '4c95233c8d55e7c8cc23aae06109a2e8',
    XBattleHistoriesQuery = '6796e3cd5dc3ebd51864dc709d899fc5',
    XBattleHistoriesRefetchQuery = '94711fc9f95dd78fc640909f02d09215',
    BattleHistoryCurrentPlayerQuery = '49dd00428fb8e9b4dde62f585c8de1e0',
    ChallengeQuery = '8a079214500148bf88a8fce1d7209b90',
    ChallengeRefetchQuery = '34aedc79f96b8613501bba465295f779',
    JourneyChallengeDetailQuery = '5a199948d059985bd758cc0175131f4a',
    JourneyChallengeDetailRefetchQuery = 'e7414c7a64bf80bb50ce21d5ccfde772',
    JourneyQuery = 'bc71fc0264f3f72256724b069f7a4097',
    JourneyRefetchQuery = '09eee118fa16415d6bc3846bc6e5d8e5',
    CheckinQuery = '5d0d1b45ebf4e324d0dae017d9df06d2',
    CoopHistoryDetailQuery = '379f0d9b78b531be53044bcac031b34b',
    CoopHistoryDetailRefetchQuery = 'd3188df2fd4436870936b109675e2849',
    CoopHistoryQuery = '01fb9793ad92f91892ea713410173260',
    RefetchableCoopHistory_CoopResultQuery = '5c04e0793cca792c9724d4859a074964',
    CoopRecordBigRunRecordContainerPaginationQuery = '2b83817b6e88b202d25939fe04658d33',
    CoopRecordQuery = 'b2f05c682ed2aeb669a86a3265ceb713',
    CoopRecordRefetchQuery = '15035e6c4308b32d1a77e87398be5cd4',
    EventMatchRankingPeriodQuery = 'cdf4ffe56864817014e59c569ec8630f',
    EventMatchRankingQuery = '2acc36b477328ebb281fa91a07110e2d',
    EventMatchRankingRefetchQuery = '3cfc123fe1add3c924518c1550b2936c',
    EventMatchRankingSeasonRefetchQuery = 'e39d7ce9875a9d6940b4b449ed5b358b',
    DetailFestRecordDetailQuery = '96c3a7fd484b8d3be08e0a3c99eb2a3d',
    DetailFestRefethQuery = '18c7c465b18de5829347b7a7f1e571a1',
    DetailFestVotingStatusRefethQuery = '92f51ed1ab462bbf1ab64cad49d36f79',
    DetailRankingQuery = 'cc38f388c51f9930bd7cca966893f1b4',
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
    HistoryRecordQuery = 'd9246baf077b2a29b5f7aac321810a77',
    HistoryRecordRefetchQuery = '67921048c4af8e2b201a12f13ad0ddae',
    MyOutfitDetailQuery = 'd935d9e9ba7a5b6b5d6ece7f253304fc',
    MyOutfitsQuery = '81d9a6849467d2aa6b1603ebcedbddbe',
    MyOutfitsRefetchQuery = '10db4e349f3123c56df14e3adec2ee6f',
    MyOutfitCommonDataEquipmentsQuery = 'd29cd0c2b5e6bac90dd5b817914832f8',
    MyOutfitCommonDataFilteringConditionQuery = 'd02ab22c9dccc440076055c8baa0fa7a',
    PhotoAlbumQuery = '7e950e4f69a5f50013bba8a8fb6a3807',
    PhotoAlbumRefetchQuery = '53fb0ad32c13dd9a6e617b1158cc2d41',
    ReplayQuery = 'c8d9828642f6eac6894876026d3db450',
    ReplayUploadedReplayListRefetchQuery = '4e83edd3d0964716c6ab27b9d6acf17f',
    SettingQuery = '73bd677ed986ad2cb7004ceabfff4d38',
    StageRecordQuery = '32383462b6412d446ae22a85a9b544eb',
    StageRecordsRefetchQuery = '2376a887cccc4d31f40082fbc52d5231',
    StageScheduleQuery = 'f76dd61e08f4ce1d5d5b17762a243fec',
    WeaponRecordQuery = 'ebd88adbba13f09100f9326b1ec4c348',
    WeaponRecordsRefetchQuery = '50119df695739cd30f96dfe2f4d8bf8c',
    DetailTabViewWeaponTopsArRefetchQuery = 'a6782a0c692e8076656f9b4ab613fd82',
    DetailTabViewWeaponTopsClRefetchQuery = '8d3c5bb2e82d6eb32a37eefb0e1f8f69',
    DetailTabViewWeaponTopsGlRefetchQuery = 'b23468857c049c2f0684797e45fabac1',
    DetailTabViewWeaponTopsLfRefetchQuery = 'd46f88c2ea5c4daeb5fe9d5813d07a99',
    DetailTabViewXRankingArRefetchQuery = '6de3895bd90b5fa5220b5e9355981e16',
    DetailTabViewXRankingClRefetchQuery = '3ab25d7f475cb3d5daf16f835a23411b',
    DetailTabViewXRankingGlRefetchQuery = 'd62ec65b297968b659103d8dc95d014d',
    DetailTabViewXRankingLfRefetchQuery = 'd96057b8f46e5f7f213a35c8ea2b8fdc',
    XRankingDetailQuery = 'd5e4924c05891208466fcba260d682e7',
    XRankingDetailRefetchQuery = 'fb960404299958248b3c0a2fbb444c35',
    XRankingQuery = 'd771444f2584d938db8d10055599011d',
    XRankingRefetchQuery = '5149402597bd2531b4eea04692d8bfd5',
    CatalogQuery = 'ff12098bad4989a813201b00ff22ac4e',
    CatalogRefetchQuery = '60a6592c6ee8e47245020ae0d314d378',
    HomeQuery = '7dcc64ea27a08e70919893a0d3f70871',
    VsHistoryDetailPagerRefetchQuery = '994cf141e55213e6923426caf37a1934',
    VsHistoryDetailQuery = '9ee0099fbe3d8db2a838a75cf42856dd',
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
    '30aa261475d43bd765b4200fc67003c8': SupportButtonSupportChallengeVariables_30aa261;
    [RequestId.SupportButton_SupportChallengeMutation]: SupportButtonSupportChallengeVariables;
    '8e3fecf7cfce83f6831b17e9052791d0': CheckinWithQRCodeMutationVariables_8e3fecf;
    '8d54e1c6bdcc65181f65adc582914ad8': CheckinWithQRCodeMutationVariables_8d54e1c;
    [RequestId.CheckinWithQRCodeMutation]: CheckinWithQRCodeMutationVariables;
    'be2eb9e9b8dd680519eb59cc46c1a32b': RankingHoldersFestTeamRankingHoldersPaginationVariables_be2eb9e;
    [RequestId.RankingHoldersFestTeamRankingHoldersPaginationQuery]: RankingHoldersFestTeamRankingHoldersPaginationVariables;
    [RequestId.VotesUpdateFestVoteMutation]: VotesUpdateFestVoteVariables;
    [RequestId.CreateMyOutfitMutation]: CreateMyOutfitVariables;
    [RequestId.UpdateMyOutfitMutation]: UpdateMyOutfitVariables;
    'b461048f9ffc414b3967a3cdad0805dd': DownloadSearchReplayVariables_b461048;
    'cde4fe7d6467b32d5a06279492aa21dc': DownloadSearchReplayVariables_cde4fe7;
    '43a5f23eec238d7ee827cc87f47f050c': DownloadSearchReplayVariables_43a5f23;
    '8e904b52b5080b6f4b4448a50762362c': DownloadSearchReplayVariables_8e904b5;
    [RequestId.DownloadSearchReplayQuery]: DownloadSearchReplayVariables;
    [RequestId.ReplayModalReserveReplayDownloadMutation]: ReplayModalReserveReplayDownloadVariables;
    '67224c25f7b2e605205d152009f593c9': PagerUpdateBattleHistoriesByVsModeVariables_67224c2;
    '000afbc113f5653d2c2cee42ff6cdeab': PagerUpdateBattleHistoriesByVsModeVariables_000afbc;
    '7297ae42bbb1958cfe438736865d304e': PagerUpdateBattleHistoriesByVsModeVariables_7297ae4;
    '094a9b44ff21e8c409d6046fc1af9dfe': PagerUpdateBattleHistoriesByVsModeVariables_094a9b4;
    'eef75ef7ce1964dfe9006bf5facde61e': PagerUpdateBattleHistoriesByVsModeVariables_eef75ef;
    [RequestId.PagerUpdateBattleHistoriesByVsModeQuery]: PagerUpdateBattleHistoriesByVsModeVariables;
    [RequestId.ShareMyOutfitQuery]: ShareMyOutfitVariables;
    'd8a8662345593bbbcd63841c91d4c6f5': BankaraBattleHistoriesRefetchVariables_d8a8662;
    '964c03ed28eb640438d8113534de2fe4': BankaraBattleHistoriesRefetchVariables_964c03e;
    [RequestId.BankaraBattleHistoriesRefetchQuery]: BankaraBattleHistoriesRefetchVariables;
    '8083b0c7f34a4bd0ef4a06ff86fc3e18': EventBattleHistoriesRefetchVariables_8083b0c;
    [RequestId.EventBattleHistoriesRefetchQuery]: EventBattleHistoriesRefetchVariables;
    '80585ad4e4ecb674c3d8cd278adb1d21': LatestBattleHistoriesRefetchVariables_80585ad;
    '047c1ff4d6b9f03b082aa6ffdb200a6a': LatestBattleHistoriesRefetchVariables_047c1ff;
    '7161210aad0793e58e76f20e0443855e': LatestBattleHistoriesRefetchVariables_7161210;
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
    '38e58b84376a2ad49ddbe4061b948455': JourneyChallengeDetailVariables_38e58b8;
    [RequestId.JourneyChallengeDetailQuery]: JourneyChallengeDetailVariables;
    '8dc246933b1f4e26a6dfd251878cf786': JourneyChallengeDetailRefetchVariables_8dc2469;
    [RequestId.JourneyChallengeDetailRefetchQuery]: JourneyChallengeDetailRefetchVariables;
    [RequestId.JourneyQuery]: JourneyVariables;
    [RequestId.JourneyRefetchQuery]: JourneyRefetchVariables;
    'f3799a033f0a7ad4b1b396f9a3bafb1e': CoopHistoryDetailVariables_f3799a0;
    '3cc5f826a6646b85f3ae45db51bd0707': CoopHistoryDetailVariables_3cc5f82;
    '9ade2aa3656324870ccec023636aed32': CoopHistoryDetailVariables_9ade2aa;
    [RequestId.CoopHistoryDetailQuery]: CoopHistoryDetailVariables;
    [RequestId.CoopHistoryDetailRefetchQuery]: CoopHistoryDetailRefetchVariables;
    [RequestId.CoopRecordBigRunRecordContainerPaginationQuery]: CoopRecordBigRunRecordContainerPaginationVariables;
    [RequestId.EventMatchRankingPeriodQuery]: EventMatchRankingPeriodVariables;
    [RequestId.EventMatchRankingSeasonRefetchQuery]: EventMatchRankingSeasonRefetchVariables;
    '2d661988c055d843b3be290f04fb0db9': DetailFestRecordDetailVariables_2d66198;
    [RequestId.DetailFestRecordDetailQuery]: DetailFestRecordDetailVariables;
    '0eb7bac3d8aabcad0e9d663ee5b90846': DetailFestRefetchVariables_0eb7bac;
    [RequestId.DetailFestRefethQuery]: DetailFestRefetchVariables;
    [RequestId.DetailFestVotingStatusRefethQuery]: DetailFestVotingStatusRefetchVariables;
    '58bdd28e3cf71c3bf38bc45836ee1e96': DetailRankingVariables_58bdd28;
    '4869de13d0d209032b203608cb598aef': DetailRankingVariables_4869de1;
    [RequestId.DetailRankingQuery]: DetailRankingVariables;
    [RequestId.DetailVotingStatusQuery]: DetailVotingStatusVariables;
    'aebd822b4a4e48dc48f618411054b8f5': SaleGearDetailOrderGesotownGearVariables_aebd822;
    [RequestId.SaleGearDetailOrderGesotownGearMutation]: SaleGearDetailOrderGesotownGearVariables;
    '7c4173bb0f5d56f29dbec889173cff24': SaleGearDetailVariables_7c4173b;
    [RequestId.SaleGearDetailQuery]: SaleGearDetailVariables;
    [RequestId.MyOutfitDetailQuery]: MyOutfitDetailVariables;
    [RequestId.SettingQuery]: SettingVariables;
    '22e2fa8294168003c21b00c333c35384': HomeVariables_22e2fa8;
    [RequestId.HomeQuery]: HomeVariables;
    [RequestId.VsHistoryDetailPagerRefetchQuery]: VsHistoryDetailPagerRefetchVariables;
    'cd82f2ade8aca7687947c5f3210805a6': VsHistoryDetailVariables_cd82f2a;
    '2b085984f729cd51938fc069ceef784a': VsHistoryDetailVariables_2b08598;
    '291295ad311b99a6288fc95a5c4cb2d2': VsHistoryDetailVariables_291295a;
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

type KnownRequestName = keyof typeof generated_named_types;
type NamedRequest<T extends KnownRequestName> = typeof generated_named_types[T][keyof typeof generated_named_types[T]];

export type RequestName<T extends RequestId | keyof RequestNames> = RequestNames[T];
export type RequestNames = {
    [R in NamedRequest<KnownRequestName> as R['id']]: R['name'];
};

export type RequestIds<T extends RequestId | KnownRequestName> =
    T extends RequestId ? RequestIds<RequestName<T>> :
    T extends KnownRequestName ? NamedRequest<T> extends {id: RequestId | KnownRequestId} ? NamedRequest<T>['id'] : never :
    never;

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
