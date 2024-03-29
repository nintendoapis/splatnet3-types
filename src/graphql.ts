import generated_types from './generated/types.js';
import * as generated_named_types from './generated/named.js';
import request_variables from './variable-types/index.js';
import { CoralAndroidWidgetExtensionLatestAlbumPhotoResult, CoralAndroidWidgetExtensionLatestVsResultsResult, CoralAndroidWidgetExtensionStageSchedulesResult } from './types/coral-android-widget-extension.js';
import { CoralWidgetExtensionCurrentEquipmentResult, CoralWidgetExtensionLatestAlbumPhotoResult, CoralWidgetExtensionLatestVsResultsResult, CoralWidgetExtensionVsSchedulesResult, CoralWidgetExtensionVsSchedulesVariables } from './types/coral-ios-widget-extension.js';

export enum RequestId {
    SupportButton_SupportChallengeMutation = '3165b76878d09ea55a7194e675397a5e030a2a89b98a0e81af77e346c625c4fd',
    CheckinWithQRCodeMutation = '63a60eea7926b0f2600cfb64d8bf3b6736afc1e1040beabd5dfa40fbfdcb92d8',
    CoopPagerLatestCoopQuery = 'bc8a3d48e91d5d695ef52d52ae466920670d4f4381cb288cd570dc8160250457',
    RankingHoldersFestTeamRankingHoldersPaginationQuery = '34460535ce2b699ed0617d67e22a7e3290fd30041559bf6f05d408d06f1c9938',
    VotesUpdateFestVoteMutation = 'b0830a3c3c9d8aa6ed83e200aed6b008f992acdba4550ab4399417c1f765e7e3',
    CreateMyOutfitMutation = 'b5257c5a3840cb01556750cbb56881d758534dfd91e9aec7c0232098fd767bb9',
    UpdateMyOutfitMutation = 'b83ed5a9b58252c088d3aac7f28a34a59acfbaa61b187ee3eebfe8506aa720f9',
    DownloadSearchReplayQuery = '2805ee5182dd44c5114a1e6cfa57b2bcbbe9173c7e52069cc85a518de49c2191',
    ReplayModalReserveReplayDownloadMutation = '07e94ba8076b235d9b16c9e8d1714dfffbd4441c17225c36058b8a7ba44458b1',
    PagerLatestVsDetailQuery = '73462e18d464acfdf7ac36bde08a1859aa2872a90ed0baed69c94864c20de046',
    PagerUpdateBattleHistoriesByVsModeQuery = 'ac6561ff575363efcc9b876cf179929203dab17d3f25ab293a1123f4637e1dc7',
    ConfigureAnalyticsQuery = '2a9302bdd09a13f8b344642d4ed483b9464f20889ac17401e993dfa5c2bb3607',
    CurrentFestQuery = '980af9d079ce2a6fa63893d2cd1917b70a229a222b24bbf8201f48d814ff48f0',
    ShareMyOutfitQuery = '5502b09121f5e18bec8fefbe80cce21e1641624b579c57c1992b30dcff612b44',
    BankaraBattleHistoriesQuery = '9863ea4744730743268e2940396e21b891104ed40e2286789f05100b45a0b0fd',
    BankaraBattleHistoriesRefetchQuery = '7673fe37d5d5d81fa37d0b1cc02cffd7453a809ecc76b000c67d61aa51a39890',
    EventBattleHistoriesQuery = 'e47f9aac5599f75c842335ef0ab8f4c640e8bf2afe588a3b1d4b480ee79198ac',
    EventBattleHistoriesRefetchQuery = 'a30281d08421b916902e4972f0d48d4d3346a92a68cbadcdb58b4e1a06273296',
    LatestBattleHistoriesQuery = 'b24d22fd6cb251c515c2b90044039698aa27bc1fab15801d83014d919cd45780',
    LatestBattleHistoriesRefetchQuery = '58bf17200ca97b55d37165d44902067b617d635e9c8e08e6721b97e9421a8b67',
    PrivateBattleHistoriesQuery = 'fef94f39b9eeac6b2fac4de43bc0442c16a9f2df95f4d367dd8a79d7c5ed5ce7',
    PrivateBattleHistoriesRefetchQuery = '3dd1b491b2b563e9dfc613e01f0b8e977e122d901bc17466743a82b7c0e6c33a',
    RegularBattleHistoriesQuery = '2fe6ea7a2de1d6a888b7bd3dbeb6acc8e3246f055ca39b80c4531bbcd0727bba',
    RegularBattleHistoriesRefetchQuery = 'e818519b50e877ac6aeaeaf19e0695356f28002ad4ccf77c1c4867ef0df9a6d7',
    XBattleHistoriesQuery = 'eb5996a12705c2e94813a62e05c0dc419aad2811b8d49d53e5732290105559cb',
    XBattleHistoriesRefetchQuery = 'a175dc519f551c0bbeed04286194dc12b1a05e3117ab73f6743e5799e91f903a',
    BattleHistoryCurrentPlayerQuery = '8b59e806751e4e74359b416472925bb405601a626743084d2158af72cc3e7716',
    ChallengeQuery = '65252c7bbca148daf34de9a884e651bf9a5c1880a23f3d1e175a33f146b9f6dc',
    ChallengeRefetchQuery = '636c7f8180469847bbfe005afb589ee041bc8ca653c2a26d07987e582179fcad',
    JourneyChallengeDetailQuery = 'ed634e52cd478ebc9d77d84831665aabfac14ac74bb343aa73c310539894169a',
    JourneyChallengeDetailRefetchQuery = 'c7e4044cc4320e4ae44ccda1b7eb74897d213628c4e5d2f2863df5f8e8a9478d',
    JourneyQuery = 'c0cd04d2f0b00444853bae0d7e7f1ac534dfd7ff593c738ab9ba4456b1e85f8a',
    JourneyRefetchQuery = 'd5fc5dd3a144139e89815b9e3af6499f58e5fc5185876840dd6edadb0ca214b4',
    CheckinQuery = '6dfce83d02761395758ae21454cb46924e81c22c3f151f91330b0602278a060e',
    CoopHistoryDetailQuery = '824a1e22c4ad4eece7ad94a9a0343ecd76784be4f77d8f6f563c165afc8cf602',
    CoopHistoryDetailRefetchQuery = '4bf516ccfd9a3f4efc32b215c59ae42c2a06dd2d8f73de95c2676dea6db74446',
    CoopHistoryQuery = '0f8c33970a425683bb1bdecca50a0ca4fb3c3641c0b2a1237aedfde9c0cb2b8f',
    RefetchableCoopHistory_CoopResultQuery = 'bdb796803793ada1ee2ea28e2034a31f5c231448e80f5c992e94b021807f40f8',
    CoopRecordBigRunRecordContainerPaginationQuery = '4e357d607d98fa3b0f919f3aa0061af717c55c16017e31040647159bdb14601b',
    CoopRecordQuery = '940418e7b67b69420b7af50bdd292639e46fa8240ae57520a9cf7eed05a10760',
    CoopRecordRefetchQuery = '563536def9d127eb5c66eef94f9f3e10e5af00b0be6b8faa1692ae259e023fb3',
    EventMatchRankingPeriodQuery = 'ad4097d5fb900b01f12dffcb02228ef6c20ddbfba41f0158bb91e845335c708e',
    EventMatchRankingQuery = '875a827a6e460c3cd6b1921e6a0872d8b95a1fce6d52af79df67734c5cc8b527',
    EventMatchRankingRefetchQuery = 'e9af725879a454fd3d5a191862ec3a544f552ae2d9bff6de6b212ac2676e8e14',
    EventMatchRankingSeasonRefetchQuery = '5b563e5fb86ff7e537cc1ed86485049a41a710ca79af9c38113d41dda1d54643',
    DetailFestRecordDetailQuery = '02946c9d6dec617425ed41ee9a9bf467ea2ddfb85e0a36b09e4c3ea2e0b9ac5b',
    DetailFestRefethQuery = 'dc5c1890cec78094d919e71621e9b4bc1ee06cfa99812dcacb401b8116a1ccad',
    DetailFestVotingStatusRefethQuery = '4a24f9ff7b1c5a5c520872ce083c1623354c3ec092a0bf95c0dc1c12a1e3fb63',
    DetailRankingQuery = '2e1f603f6da371874a7473bb68418d9308f1fd2492e57fd2b7d9bbb80138f8c0',
    DetailVotingStatusQuery = 'e2aafab18dab26ba1b6d40838c6842201f6480d62f8f3dffecad8dd4c5b102c1',
    FestRecordQuery = 'c8660a636e73dcbf55c12932bc301b1c9db2aa9a78939ff61bf77a0ea8ff0a88',
    FestRecordRefetchQuery = '87ed3300bdecdb51090398d43ee0957e69b7bd1370ac38d03f6c7cb160b4586a',
    FriendListQuery = 'ea1297e9bb8e52404f52d89ac821e1d73b726ceef2fd9cc8d6b38ab253428fb3',
    FriendListRefetchQuery = '411b3fa70a9e0ff083d004b06cc6fad2638a1a24326cbd1fb111e7c72a529931',
    GesotownQuery = 'd6f94d4c05a111957bcd65f8649d628b02bf32d81f26f1d5b56eaef438e55bab',
    GesotownRefetchQuery = '681841689c2d0f8d3355b71918d6c9aedf68484dfcb06b144407df1c4873dea0',
    SaleGearDetailOrderGesotownGearMutation = 'bb716c3be6e85331741d7e2f9b36a6c0de92ca1b8382418744c1540fec7c8f57',
    SaleGearDetailQuery = 'b42e70a6873aa716d089f2c5ea219083d30f0fff6ed15b8f5630c01ef7a32015',
    HeroHistoryQuery = '71019ce4389463d9e2a71632e111eb453ca528f4f794aefd861dff23d9c18147',
    HeroHistoryRefetchQuery = 'c6cb0b7cfd8721e90e3a85d3340d190c7f9c759b6b5e627900f5456fec61f6ff',
    HistoryRecordQuery = '0a62c0152f27c4218cf6c87523377521c2cff76a4ef0373f2da3300079bf0388',
    HistoryRecordRefetchQuery = 'a5d80de05d1d4bfce67a1fb0801495d8bc6bba6fd780341cb90ddfeb1249c986',
    MyOutfitDetailQuery = 'e2c9ea77f0469cb8109c54e93f3f35c930dfeb5b79cbf639397828a805ad9248',
    MyOutfitsQuery = '5b32bb88c47222522d2bc3643b92759644f890a70189a0884ea2d456a8989342',
    MyOutfitsRefetchQuery = '565bc1f16c0a5088d41b203775987c70756296747ba905c3e1c0ce8f3f27f925',
    MyOutfitCommonDataEquipmentsQuery = '45a4c343d973864f7bb9e9efac404182be1d48cf2181619505e9b7cd3b56a6e8',
    MyOutfitCommonDataFilteringConditionQuery = 'ac20c44a952131cb0c9d00eda7bc1a84c1a99546f0f1fc170212d5a6bb51a426',
    PhotoAlbumQuery = '62383a0595fab69bf49a2a6877bc47acc081bfa065cb2eae28aa881980bb30b2',
    PhotoAlbumRefetchQuery = '0819c222d0b68fbcc7706f60b98e797da7d1fce637b45b3bdadca1ccdb692c86',
    ReplayQuery = '3af48164d1176e8a88fb5321f5fb2daf9dde00b314170f1848a30e1825fc828e',
    ReplayUploadedReplayListRefetchQuery = '1e42b2238c385b5db29717b98d0df5934c75e8807545091d97200127ed1ecef0',
    SettingQuery = '8473b5eb2c2048f74eb48b0d3e9779f44febcf3477479625b4dc23449940206b',
    StageRecordQuery = 'c8b31c491355b4d889306a22bd9003ac68f8ce31b2d5345017cdd30a2c8056f3',
    StageRecordsRefetchQuery = '25dbf592793a590b6f8cfb0a62823aa02429b406a590333627d8ea703b190dfd',
    StageScheduleQuery = '9b6b90568f990b2a14f04c25dd6eb53b35cc12ac815db85ececfccee64215edd',
    WeaponRecordQuery = '974fad8a1275b415c3386aa212b07eddc3f6582686e4fef286ec4043cdf17135',
    WeaponRecordsRefetchQuery = '7d7194a98cb7b0b235f15f98a622fab4945992fd268101e24443db82569dd25d',
    DetailTabViewWeaponTopsArRefetchQuery = '0d97601d58e0eba18ea83fcce9789e35e10413344ccda7f9bb83129a2d7949f4',
    DetailTabViewWeaponTopsClRefetchQuery = '42baca97f8038f51ffedc9bf837e820797d31c80cf4bac9b5b400fddb37ff3e1',
    DetailTabViewWeaponTopsGlRefetchQuery = 'a5237b76a33b7ee3eb79a2fe83f297e0e1324a3bf42bea9182ea49a5396bb053',
    DetailTabViewWeaponTopsLfRefetchQuery = '2d23e55747f5365466b9563a89acb21851894b384fdbd33c80f8ee192b3d825b',
    DetailTabViewXRankingArRefetchQuery = '0dc7b908c6d7ad925157a7fa60915523dab4613e6902f8b3359ae96be1ba175f',
    DetailTabViewXRankingClRefetchQuery = '485e5decc718feeccf6dffddfe572455198fdd373c639d68744ee81507df1a48',
    DetailTabViewXRankingGlRefetchQuery = '6ab0299d827378d2cae1e608d349168cd4db21dd11164c542d405ed689c9f622',
    DetailTabViewXRankingLfRefetchQuery = 'ca55206629f2c9fab38d74e49dda3c5452a83dd02a5a7612a2520a1fc77ae228',
    XRankingDetailQuery = '90932ee3357eadab30eb11e9d6b4fe52d6b35fde91b5c6fd92ba4d6159ea1cb7',
    XRankingDetailRefetchQuery = '00e8e962cc65795c6480d10caddaee7e0262d5cdf81e5958ff8f3359bd2f9743',
    XRankingQuery = 'a5331ed228dbf2e904168efe166964e2be2b00460c578eee49fc0bc58b4b899c',
    XRankingRefetchQuery = '5a469004feb402a1d44a10820b647def2d4eb320436f6add4431194a34d0b497',
    CatalogQuery = '40b62e4734f22a6009f1951fc1d03366b14a70833cb96a9a46c0e9b7043c67ef',
    CatalogRefetchQuery = 'c4f5474dfc5d7937618d8a38357ad1e78cc83d6019833b1b68d86a0ce8d4b9e5',
    HomeQuery = '51fc56bbf006caf37728914aa8bc0e2c86a80cf195b4d4027d6822a3623098a8',
    VsHistoryDetailPagerRefetchQuery = '973ca7012d8e94da97506cd39dfbb2a45eaae6e382607b650533d4f5077d840d',
    VsHistoryDetailQuery = 'f893e1ddcfb8a4fd645fd75ced173f18b2750e5cfba41d2669b9814f6ceaec46',
}

export enum UsagiRequestId {
    IfTournamentManagerIsAvailableQuery = '8892ce4157248506f51735e2c9eb300c6c980c67ff8c317b927b05e8d35852d9',
    ReserveRoomMutation = '7dd691a19092b4df99b67c2157e6b836ab8bafdf65f9e46ccf848c543459ca9d',
    CancelReservationMutation = '963e7a0e2c37f54df3316e5d170584d3b96f9c2102823fb5788ec0e8d3372eba',
    OverwriteReservedRoomMutation = '5fd71f88970f80a456d826061a78f1c0b287b5d3daadc6c7c64db50aae9694ee',
    CreateRoomMutation = '4e664b99a438ae0bb3466fe7df0f6f8e2c36fab2288e2c602cb3339e9ab01325',
    TournamentNotificationMainQuery = '93d0a1ccf461da6d23faea6340806f1b6b563f1c375b4a6a0ad35bc5f759f4b4',
    UseShowTournamentSupportNotificationBadgeQuery = '8f40ba6c690211fa2d261a20be7accc063481d377146f7cfb793664ac056df5a',
    RoomCreatorInvitationQuery = 'f7cb0e797b3f51dc4ac8f0cce1bdfafe4407e25dc483998290fc3d187bd6007e',
    RoomCreatorQuery = '0cdb5030fe7e59ef56e71b0a669bdca29993aebca785b11b99e89076886064cc',
    CloseRoomMutation = '60fcc66077357ca266610d035d877845de83aebd8dd67e366c2dcb7756b3f80b',
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

type requests_app = {
    [K in keyof generated_types]: [RequestType, K extends keyof request_variables ? request_variables[K] : {}, generated_types[K]];
};

type requests_app_usagi = {
    [K in UsagiRequestId]: [RequestType, K extends keyof request_variables ? request_variables[K] : {}, unknown];
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

type requests = requests_app & requests_app_usagi & requests_widgetextension_ios & requests_widgetextension_android;

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
