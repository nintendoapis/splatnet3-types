import { PhotoAlbumRefetchResult, PhotoAlbumResult } from './types/album.js';
import { BankaraBattleHistoriesRefetchResult, BankaraBattleHistoriesRefetchVariables, BankaraBattleHistoriesResult } from './types/battle-bankara.js';
import { VsHistoryDetailPagerRefetchResult, VsHistoryDetailPagerRefetchVariables, VsHistoryDetailResult, VsHistoryDetailResult_cd82f2a, VsHistoryDetailVariables, VsHistoryDetailVariables_cd82f2a } from './types/battle-detail.js';
import { LatestBattleHistoriesRefetchResult, LatestBattleHistoriesRefetchVariables, LatestBattleHistoriesResult } from './types/battle-latest.js';
import { PrivateBattleHistoriesRefetchResult, PrivateBattleHistoriesRefetchResult_9ef974f, PrivateBattleHistoriesRefetchVariables, PrivateBattleHistoriesRefetchVariables_9ef974f, PrivateBattleHistoriesResult, PrivateBattleHistoriesResult_5198129 } from './types/battle-private.js';
import { RegularBattleHistoriesRefetchResult, RegularBattleHistoriesRefetchResult_fed6e75, RegularBattleHistoriesRefetchVariables, RegularBattleHistoriesRefetchVariables_fed6e75, RegularBattleHistoriesResult, RegularBattleHistoriesResult_819b680 } from './types/battle-regular.js';
import { XBattleHistoriesRefetchVariables, XBattleHistoriesResult } from './types/battle-xmatch.js';
import { BattleHistoryCurrentPlayerResult, PagerLatestVsDetailResult, PagerUpdateBattleHistoriesByVsModeResult, PagerUpdateBattleHistoriesByVsModeResult_67224c2, PagerUpdateBattleHistoriesByVsModeVariables, PagerUpdateBattleHistoriesByVsModeVariables_67224c2 } from './types/battles.js';
import { CatalogRefetchResult, CatalogResult } from './types/catalog.js';
import { ChallengeRefetchResult, ChallengeResult, JourneyChallengeDetailRefetchResult, JourneyChallengeDetailRefetchVariables, JourneyChallengeDetailResult, JourneyChallengeDetailVariables, JourneyRefetchResult, JourneyRefetchVariables, JourneyResult, JourneyVariables, SupportButtonSupportChallengeResult, SupportButtonSupportChallengeVariables } from './types/challenge.js';
import { CheckinHistory, CheckinWithQRCodeMutationResult, CheckinWithQRCodeMutationVariables } from './types/checkin.js';
import { CoopHistoryDetailRefetchResult, CoopHistoryDetailRefetchVariables, CoopHistoryDetailResult, CoopHistoryDetailVariables, CoopHistoryResult, CoopPagerLatestCoopResult, RefetchableCoopHistory_CoopResult } from './types/coop.js';
import { CoralAndroidWidgetExtensionLatestAlbumPhotoResult, CoralAndroidWidgetExtensionLatestVsResultsResult, CoralAndroidWidgetExtensionStageSchedulesResult } from './types/coral-android-widget-extension.js';
import { CoralWidgetExtensionCurrentEquipmentResult, CoralWidgetExtensionLatestAlbumPhotoResult, CoralWidgetExtensionLatestVsResultsResult, CoralWidgetExtensionVsSchedulesResult, CoralWidgetExtensionVsSchedulesVariables } from './types/coral-ios-widget-extension.js';
import { DetailFestRecordDetailResult, DetailFestRecordDetailVariables, DetailFestRefetchResult, DetailFestRefetchVariables, DetailFestVotingStatusRefetchResult, DetailFestVotingStatusRefetchVariables, DetailRankingResult, DetailRankingVariables, DetailVotingStatusResult, DetailVotingStatusVariables, FestRecordRefetchResult, FestRecordResult, RankingHoldersFestTeamRankingHoldersPaginationResult, RankingHoldersFestTeamRankingHoldersPaginationVariables, VotesUpdateFestVoteResult, VotesUpdateFestVoteVariables } from './types/fest.js';
import { FriendListRefetchResult, FriendListResult } from './types/friends.js';
import { GesotownRefetchResult, GesotownRefetchResult_c61bf8a, GesotownResult, GesotownResult_d08dbdd, SaleGearDetailOrderGesotownGearResult, SaleGearDetailOrderGesotownGearResult_aebd822, SaleGearDetailOrderGesotownGearVariables, SaleGearDetailOrderGesotownGearVariables_aebd822, SaleGearDetailResult, SaleGearDetailResult_7c4173b, SaleGearDetailVariables, SaleGearDetailVariables_7c4173b } from './types/gesotown.js';
import { HeroHistoryRefetchQuery, HeroHistoryResult } from './types/hero.js';
import { HistoryRecordRefetchResult, HistoryRecordRefetchResult_5e1d0bb, HistoryRecordResult, HistoryRecordResult_29957cf } from './types/history.js';
import { ConfigureAnalyticsResult, CurrentFestResult, HomeResult, SettingResult } from './types/home.js';
import { CreateMyOutfitResult, CreateMyOutfitVariables, MyOutfitCommonDataEquipmentsResult, MyOutfitCommonDataFilteringConditionResult, MyOutfitDetailResult, MyOutfitDetailVariables, MyOutfitsRefetchResult, MyOutfitsResult, UpdateMyOutfitResult, UpdateMyOutfitVariables } from './types/outfits.js';
import { DownloadSearchReplayResult, DownloadSearchReplayVariables, ReplayModalReserveReplayDownloadResult, ReplayModalReserveReplayDownloadVariables, ReplayResult, ReplayUploadedReplayListRefetchResult } from './types/replay.js';
import { StageScheduleResult, StageScheduleResult_10e1d42 } from './types/schedules.js';
import { StageRecordResult, StageRecordResult_53dffcf, StageRecordsRefetchResult, StageRecordsRefetchResult_38624d4 } from './types/stage.js';
import { WeaponRecordResult, WeaponRecordsRefetchResult } from './types/weapon.js';

export enum RequestId {
    SupportButton_SupportChallengeMutation = '30aa261475d43bd765b4200fc67003c8',
    CheckinWithQRCodeMutation = '8e3fecf7cfce83f6831b17e9052791d0',
    CoopPagerLatestCoopQuery = '82385ab3c3444c857bd35a8d87dbc700',
    RankingHoldersFestTeamRankingHoldersPaginationQuery = 'be2eb9e9b8dd680519eb59cc46c1a32b',
    VotesUpdateFestVoteMutation = 'a2c742c840718f37488e0394cd6e1e08',
    CreateMyOutfitMutation = '31ff008ea218ffbe11d958a52c6f959f',
    UpdateMyOutfitMutation = 'bb809066282e7d659d3b9e9d4e46b43b',
    DownloadSearchReplayQuery = 'b461048f9ffc414b3967a3cdad0805dd',
    ReplayModalReserveReplayDownloadMutation = '87bff2b854168b496c2da8c0e7f3e5bc',
    PagerLatestVsDetailQuery = '0329c535a32f914fd44251be1f489e24',
    PagerUpdateBattleHistoriesByVsModeQuery = '000afbc113f5653d2c2cee42ff6cdeab',
    ConfigureAnalyticsQuery = 'f8ae00773cc412a50dd41a6d9a159ddd',
    CurrentFestQuery = 'c0429fd738d829445e994d3370999764',
    BankaraBattleHistoriesQuery = 'de4754588109b77dbcb90fbe44b612ee',
    BankaraBattleHistoriesRefetchQuery = '964c03ed28eb640438d8113534de2fe4',
    LatestBattleHistoriesQuery = '4f5f26e64bca394b45345a65a2f383bd',
    LatestBattleHistoriesRefetchQuery = '047c1ff4d6b9f03b082aa6ffdb200a6a',
    PrivateBattleHistoriesQuery = '1d6ed57dc8b801863126ad4f351dfb9a',
    PrivateBattleHistoriesRefetchQuery = '4835a28419ad3c7bfacbb30ca4008140',
    RegularBattleHistoriesQuery = 'd5b795d09e67ce153e622a184b7e7dfa',
    RegularBattleHistoriesRefetchQuery = '04e5d83f4243541c369b2e7556b9b809',
    XBattleHistoriesQuery = '45c74fefb45a49073207229ca65f0a62',
    XBattleHistoriesRefetchQuery = 'ba35dcea6d5666463e86273e1756d9ed',
    BattleHistoryCurrentPlayerQuery = '49dd00428fb8e9b4dde62f585c8de1e0',
    ChallengeQuery = '8a079214500148bf88a8fce1d7209b90',
    ChallengeRefetchQuery = '34aedc79f96b8613501bba465295f779',
    JourneyChallengeDetailQuery = '38e58b84376a2ad49ddbe4061b948455',
    JourneyChallengeDetailRefetchQuery = '8dc246933b1f4e26a6dfd251878cf786',
    JourneyQuery = 'bc71fc0264f3f72256724b069f7a4097',
    JourneyRefetchQuery = '09eee118fa16415d6bc3846bc6e5d8e5',
    CheckinQuery = 'af8cac2c2554e22e2bbada19392083a2',
    CoopHistoryDetailQuery = 'f3799a033f0a7ad4b1b396f9a3bafb1e',
    CoopHistoryDetailRefetchQuery = 'd3188df2fd4436870936b109675e2849',
    CoopHistoryQuery = '817618ce39bcf5570f52a97d73301b30',
    RefetchableCoopHistory_CoopResultQuery = 'a5692cf290ffb26f14f0f7b6e5023b07',
    DetailFestRecordDetailQuery = '2d661988c055d843b3be290f04fb0db9',
    DetailFestRefethQuery = '0eb7bac3d8aabcad0e9d663ee5b90846',
    DetailFestVotingStatusRefethQuery = '92f51ed1ab462bbf1ab64cad49d36f79',
    DetailRankingQuery = '58bdd28e3cf71c3bf38bc45836ee1e96',
    DetailVotingStatusQuery = '53ee6b6e2acc3859bf42454266d671fc',
    FestRecordQuery = '44c76790b68ca0f3da87f2a3452de986',
    FestRecordRefetchQuery = '73b9837d0e4dd29bfa2f1a7d7ee0814a',
    FriendListQuery = '7a0e05c28c7d3f7e5a06def87ab8cd2d',
    FriendListRefetchQuery = 'c1afed6111887347e244c639e7d35c69',
    GesotownQuery = 'a43dd44899a09013bcfd29b4b13314ff',
    GesotownRefetchQuery = '951cab295eafdbeccfc2e718d7a98646',
    SaleGearDetailOrderGesotownGearMutation = 'b79b7a101a243912754f72437e2ad7e5',
    SaleGearDetailQuery = '6eb1b255b2cf04c08041567148c883ad',
    HeroHistoryQuery = 'fbee1a882371d4e3becec345636d7d1c',
    HeroHistoryRefetchQuery = '4f9ae2b8f1d209a5f20302111b28f975',
    HistoryRecordQuery = '9d4ef9fba3f84d6933bb1f6f436f7200',
    HistoryRecordRefetchQuery = '6cd71021eb35a793e3252f7a95deb75a',
    MyOutfitDetailQuery = 'd935d9e9ba7a5b6b5d6ece7f253304fc',
    MyOutfitsQuery = '81d9a6849467d2aa6b1603ebcedbddbe',
    MyOutfitsRefetchQuery = '10db4e349f3123c56df14e3adec2ee6f',
    MyOutfitCommonDataEquipmentsQuery = 'd29cd0c2b5e6bac90dd5b817914832f8',
    MyOutfitCommonDataFilteringConditionQuery = 'd02ab22c9dccc440076055c8baa0fa7a',
    PhotoAlbumQuery = '7e950e4f69a5f50013bba8a8fb6a3807',
    PhotoAlbumRefetchQuery = '53fb0ad32c13dd9a6e617b1158cc2d41',
    ReplayQuery = 'f98cc8326d0d17b07a5785096b0f3517',
    ReplayUploadedReplayListRefetchQuery = 'dd56e76c75cda6af077a223c351ad61d',
    SettingQuery = '61228d553e7463c203e05e7810dd79a7',
    StageRecordQuery = 'f08a932d533845dde86e674e03bbb7d3',
    StageRecordsRefetchQuery = '2fb1b3fa2d40c9b5953ea1ae263e54c1',
    StageScheduleQuery = '7d4bb0565342b7385ceb97d109e14897',
    WeaponRecordQuery = 'a0c277c719b758a926772879d8e53ef8',
    WeaponRecordsRefetchQuery = '23c9b2b4ad878c2d91a68859be928dea',
    CatalogQuery = 'aead379b98c14798df81f0dd3ebe6121',
    CatalogRefetchQuery = '02d2de8967f4ad2ce4f67a3c6c7c4d48',
    HomeQuery = 'dba47124d5ec3090c97ba17db5d2f4b3',
    VsHistoryDetailPagerRefetchQuery = '994cf141e55213e6923426caf37a1934',
    VsHistoryDetailQuery = '2b085984f729cd51938fc069ceef784a',
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
    [RequestId.SupportButton_SupportChallengeMutation]: [RequestType.MUTATION, SupportButtonSupportChallengeVariables, SupportButtonSupportChallengeResult];
    [RequestId.CheckinWithQRCodeMutation]: [RequestType.MUTATION, CheckinWithQRCodeMutationVariables, CheckinWithQRCodeMutationResult];
    [RequestId.CoopPagerLatestCoopQuery]: [RequestType.QUERY, {}, CoopPagerLatestCoopResult];
    [RequestId.VotesUpdateFestVoteMutation]: [RequestType.MUTATION, VotesUpdateFestVoteVariables, VotesUpdateFestVoteResult];
    [RequestId.CreateMyOutfitMutation]: [RequestType.MUTATION, CreateMyOutfitVariables, CreateMyOutfitResult];
    [RequestId.UpdateMyOutfitMutation]: [RequestType.MUTATION, UpdateMyOutfitVariables, UpdateMyOutfitResult];
    [RequestId.DownloadSearchReplayQuery]: [RequestType.QUERY, DownloadSearchReplayVariables, DownloadSearchReplayResult];
    [RequestId.ReplayModalReserveReplayDownloadMutation]: [RequestType.MUTATION, ReplayModalReserveReplayDownloadVariables, ReplayModalReserveReplayDownloadResult];
    [RequestId.PagerLatestVsDetailQuery]: [RequestType.QUERY, {}, PagerLatestVsDetailResult];
    '67224c25f7b2e605205d152009f593c9': [RequestType.QUERY, PagerUpdateBattleHistoriesByVsModeVariables_67224c2, PagerUpdateBattleHistoriesByVsModeResult_67224c2];
    [RequestId.PagerUpdateBattleHistoriesByVsModeQuery]: [RequestType.QUERY, PagerUpdateBattleHistoriesByVsModeVariables, PagerUpdateBattleHistoriesByVsModeResult];
    [RequestId.ConfigureAnalyticsQuery]: [RequestType.QUERY, {}, ConfigureAnalyticsResult];
    [RequestId.CurrentFestQuery]: [RequestType.QUERY, {}, CurrentFestResult];
    'c1553ac75de0a3ea497cdbafaa93e95b': [RequestType.QUERY, {}, BankaraBattleHistoriesResult];
    [RequestId.BankaraBattleHistoriesQuery]: [RequestType.QUERY, {}, BankaraBattleHistoriesResult];
    'd8a8662345593bbbcd63841c91d4c6f5': [RequestType.QUERY, BankaraBattleHistoriesRefetchVariables, BankaraBattleHistoriesRefetchResult];
    [RequestId.BankaraBattleHistoriesRefetchQuery]: [RequestType.QUERY, BankaraBattleHistoriesRefetchVariables, BankaraBattleHistoriesRefetchResult];
    '7d8b560e31617e981cf7c8aa1ca13a00': [RequestType.QUERY, {}, LatestBattleHistoriesResult];
    [RequestId.LatestBattleHistoriesQuery]: [RequestType.QUERY, {}, LatestBattleHistoriesResult];
    '80585ad4e4ecb674c3d8cd278adb1d21': [RequestType.QUERY, LatestBattleHistoriesRefetchVariables, LatestBattleHistoriesRefetchResult];
    [RequestId.LatestBattleHistoriesRefetchQuery]: [RequestType.QUERY, LatestBattleHistoriesRefetchVariables, LatestBattleHistoriesRefetchResult];
    '51981299595060692440e0ca66c475a1': [RequestType.QUERY, {}, PrivateBattleHistoriesResult_5198129];
    '38e0529de8bc77189504d26c7a14e0b8': [RequestType.QUERY, {}, PrivateBattleHistoriesResult];
    [RequestId.PrivateBattleHistoriesQuery]: [RequestType.QUERY, {}, PrivateBattleHistoriesResult];
    '9ef974f2686a88f24e0dbff6f63a83c4': [RequestType.QUERY, PrivateBattleHistoriesRefetchVariables_9ef974f, PrivateBattleHistoriesRefetchResult_9ef974f];
    'b304e707648f0669a939943d46febce1': [RequestType.QUERY, PrivateBattleHistoriesRefetchVariables, PrivateBattleHistoriesRefetchResult];
    [RequestId.PrivateBattleHistoriesRefetchQuery]: [RequestType.QUERY, PrivateBattleHistoriesRefetchVariables, PrivateBattleHistoriesRefetchResult];
    '819b680b0c7962b6f7dc2a777cd8c5e4': [RequestType.QUERY, {}, RegularBattleHistoriesResult_819b680];
    'f6e7e0277e03ff14edfef3b41f70cd33': [RequestType.QUERY, {}, RegularBattleHistoriesResult];
    [RequestId.RegularBattleHistoriesQuery]: [RequestType.QUERY, {}, RegularBattleHistoriesResult];
    'fed6e752513a9986177e8eec50dfdd3c': [RequestType.QUERY, RegularBattleHistoriesRefetchVariables_fed6e75, RegularBattleHistoriesRefetchResult_fed6e75];
    '333d0a48071b0036449e35ece577b06f': [RequestType.QUERY, RegularBattleHistoriesRefetchVariables, RegularBattleHistoriesRefetchResult];
    [RequestId.RegularBattleHistoriesRefetchQuery]: [RequestType.QUERY, RegularBattleHistoriesRefetchVariables, RegularBattleHistoriesRefetchResult];
    [RequestId.XBattleHistoriesQuery]: [RequestType.QUERY, {}, XBattleHistoriesResult];
    [RequestId.XBattleHistoriesRefetchQuery]: [RequestType.QUERY, XBattleHistoriesRefetchVariables, XBattleHistoriesResult];
    [RequestId.BattleHistoryCurrentPlayerQuery]: [RequestType.QUERY, {}, BattleHistoryCurrentPlayerResult];
    [RequestId.ChallengeQuery]: [RequestType.QUERY, {}, ChallengeResult];
    [RequestId.ChallengeRefetchQuery]: [RequestType.QUERY, {}, ChallengeRefetchResult];
    [RequestId.JourneyChallengeDetailQuery]: [RequestType.QUERY, JourneyChallengeDetailVariables, JourneyChallengeDetailResult];
    [RequestId.JourneyChallengeDetailRefetchQuery]: [RequestType.QUERY, JourneyChallengeDetailRefetchVariables, JourneyChallengeDetailRefetchResult];
    [RequestId.JourneyQuery]: [RequestType.QUERY, JourneyVariables, JourneyResult];
    [RequestId.JourneyRefetchQuery]: [RequestType.QUERY, JourneyRefetchVariables, JourneyRefetchResult];
    [RequestId.CheckinQuery]: [RequestType.QUERY, {}, CheckinHistory];
    [RequestId.CoopHistoryDetailQuery]: [RequestType.QUERY, CoopHistoryDetailVariables, CoopHistoryDetailResult];
    [RequestId.CoopHistoryDetailRefetchQuery]: [RequestType.QUERY, CoopHistoryDetailRefetchVariables, CoopHistoryDetailRefetchResult];
    [RequestId.CoopHistoryQuery]: [RequestType.QUERY, {}, CoopHistoryResult];
    [RequestId.RefetchableCoopHistory_CoopResultQuery]: [RequestType.QUERY, {}, RefetchableCoopHistory_CoopResult];
    [RequestId.DetailFestRecordDetailQuery]: [RequestType.QUERY, DetailFestRecordDetailVariables, DetailFestRecordDetailResult];
    [RequestId.DetailFestRefethQuery]: [RequestType.QUERY, DetailFestRefetchVariables, DetailFestRefetchResult];
    [RequestId.DetailFestVotingStatusRefethQuery]: [RequestType.QUERY, DetailFestVotingStatusRefetchVariables, DetailFestVotingStatusRefetchResult];
    [RequestId.DetailRankingQuery]: [RequestType.QUERY, DetailRankingVariables, DetailRankingResult];
    [RequestId.DetailVotingStatusQuery]: [RequestType.QUERY, DetailVotingStatusVariables, DetailVotingStatusResult];
    [RequestId.FestRecordQuery]: [RequestType.QUERY, {}, FestRecordResult];
    [RequestId.FestRecordRefetchQuery]: [RequestType.QUERY, {}, FestRecordRefetchResult];
    [RequestId.FriendListQuery]: [RequestType.QUERY, {}, FriendListResult];
    [RequestId.FriendListRefetchQuery]: [RequestType.QUERY, {}, FriendListRefetchResult];
    'd08dbdd29f31471e61daa978feea697a': [RequestType.QUERY, {}, GesotownResult_d08dbdd];
    [RequestId.GesotownQuery]: [RequestType.QUERY, {}, GesotownResult];
    'c61bf8a7f7bc47393b8c0e7590ae11f4': [RequestType.QUERY, {}, GesotownRefetchResult_c61bf8a];
    [RequestId.GesotownRefetchQuery]: [RequestType.QUERY, {}, GesotownRefetchResult];
    'aebd822b4a4e48dc48f618411054b8f5': [RequestType.MUTATION, SaleGearDetailOrderGesotownGearVariables_aebd822, SaleGearDetailOrderGesotownGearResult_aebd822];
    [RequestId.SaleGearDetailOrderGesotownGearMutation]: [RequestType.MUTATION, SaleGearDetailOrderGesotownGearVariables, SaleGearDetailOrderGesotownGearResult];
    '7c4173bb0f5d56f29dbec889173cff24': [RequestType.QUERY, SaleGearDetailVariables_7c4173b, SaleGearDetailResult_7c4173b];
    [RequestId.SaleGearDetailQuery]: [RequestType.QUERY, SaleGearDetailVariables, SaleGearDetailResult];
    [RequestId.HeroHistoryQuery]: [RequestType.QUERY, {}, HeroHistoryResult];
    [RequestId.HeroHistoryRefetchQuery]: [RequestType.QUERY, {}, HeroHistoryRefetchQuery];
    '29957cf5d57b893934de857317cd46d8': [RequestType.QUERY, {}, HistoryRecordResult_29957cf];
    [RequestId.HistoryRecordQuery]: [RequestType.QUERY, {}, HistoryRecordResult];
    '5e1d0bb4b52e2a99049df6e17117f363': [RequestType.QUERY, {}, HistoryRecordRefetchResult_5e1d0bb];
    [RequestId.HistoryRecordRefetchQuery]: [RequestType.QUERY, {}, HistoryRecordRefetchResult];
    [RequestId.MyOutfitDetailQuery]: [RequestType.QUERY, MyOutfitDetailVariables, MyOutfitDetailResult];
    [RequestId.MyOutfitsQuery]: [RequestType.QUERY, {}, MyOutfitsResult];
    [RequestId.MyOutfitsRefetchQuery]: [RequestType.QUERY, {}, MyOutfitsRefetchResult];
    [RequestId.MyOutfitCommonDataEquipmentsQuery]: [RequestType.QUERY, {}, MyOutfitCommonDataEquipmentsResult];
    [RequestId.MyOutfitCommonDataFilteringConditionQuery]: [RequestType.QUERY, {}, MyOutfitCommonDataFilteringConditionResult];
    [RequestId.PhotoAlbumQuery]: [RequestType.QUERY, {}, PhotoAlbumResult];
    [RequestId.PhotoAlbumRefetchQuery]: [RequestType.QUERY, {}, PhotoAlbumRefetchResult];
    [RequestId.ReplayQuery]: [RequestType.QUERY, {}, ReplayResult];
    [RequestId.ReplayUploadedReplayListRefetchQuery]: [RequestType.QUERY, {}, ReplayUploadedReplayListRefetchResult];
    [RequestId.SettingQuery]: [RequestType.QUERY, {}, SettingResult];
    '53dffcfb06b273dd7bdf6a303d310730': [RequestType.QUERY, {}, StageRecordResult_53dffcf];
    '56c46bdbdfa4519eaf7845ce9f3cd67a': [RequestType.QUERY, {}, StageRecordResult];
    [RequestId.StageRecordQuery]: [RequestType.QUERY, {}, StageRecordResult];
    '38624d4864879c745c7b20e653e062db': [RequestType.QUERY, {}, StageRecordsRefetchResult_38624d4];
    'fe965bef54377d20e9133087cc6cdf3f': [RequestType.QUERY, {}, StageRecordsRefetchResult];
    [RequestId.StageRecordsRefetchQuery]: [RequestType.QUERY, {}, StageRecordsRefetchResult];
    '10e1d424391e78d21670227550b3509f': [RequestType.QUERY, {}, StageScheduleResult_10e1d42];
    [RequestId.StageScheduleQuery]: [RequestType.QUERY, {}, StageScheduleResult];
    [RequestId.WeaponRecordQuery]: [RequestType.QUERY, {}, WeaponRecordResult];
    [RequestId.WeaponRecordsRefetchQuery]: [RequestType.QUERY, {}, WeaponRecordsRefetchResult];
    [RequestId.CatalogQuery]: [RequestType.QUERY, {}, CatalogResult];
    [RequestId.CatalogRefetchQuery]: [RequestType.QUERY, {}, CatalogRefetchResult];
    [RequestId.HomeQuery]: [RequestType.QUERY, {}, HomeResult];
    [RequestId.VsHistoryDetailPagerRefetchQuery]: [RequestType.QUERY, VsHistoryDetailPagerRefetchVariables, VsHistoryDetailPagerRefetchResult];
    'cd82f2ade8aca7687947c5f3210805a6': [RequestType.QUERY, VsHistoryDetailVariables_cd82f2a, VsHistoryDetailResult_cd82f2a];
    [RequestId.VsHistoryDetailQuery]: [RequestType.QUERY, VsHistoryDetailVariables, VsHistoryDetailResult];
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
