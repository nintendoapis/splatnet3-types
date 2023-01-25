import { RequestId, ResultType } from './graphql.js';

//
// VsHistory
//

export type VsHistoryDetail_result = Exclude<ResultType<RequestId.VsHistoryDetailQuery>['vsHistoryDetail'], null>;
export type VsPlayer_result = VsHistoryDetail_result['player'];
export type VsTeam_result = VsHistoryDetail_result['otherTeams'][0];
export type VsTeam_resultMyTeam = VsHistoryDetail_result['myTeam'];
export type VsPlayer_result_VsTeam = VsTeam_result['players'][0];
export type Weapon_result_VsTeam = VsPlayer_result_VsTeam['weapon'];

export type VsHistoryDetail_pagerRefetch = Exclude<ResultType<RequestId.VsHistoryDetailPagerRefetchQuery>['vsHistoryDetail'], null>;

export type CurrentPlayer_battles = ResultType<RequestId.BattleHistoryCurrentPlayerQuery>['currentPlayer'];

export type VsResult_latest = ResultType<RequestId.LatestBattleHistoriesQuery>['latestBattleHistories'];
export type VsHistoryGroup_latest = VsResult_latest['historyGroups']['nodes'][0];
export type VsHistoryDetail_latest = VsHistoryGroup_latest['historyDetails']['nodes'][0];
export type VsTeam_latest = VsHistoryDetail_latest['myTeam'];

export type HeadGear_vsPlayer = VsTeam_result['players'][0]['headGear'];
export type ClothingGear_vsPlayer = VsTeam_result['players'][0]['clothingGear'];
export type ShoesGear_vsPlayer = VsTeam_result['players'][0]['shoesGear'];
export type HeadGear_vsPlayerSelf = VsHistoryDetail_result['player']['headGear'];
export type ClothingGear_vsPlayerSelf = VsHistoryDetail_result['player']['clothingGear'];
export type ShoesGear_vsPlayerSelf = VsHistoryDetail_result['player']['shoesGear'];

export type VsHistoryGroup_onlyFirst = VsResult_latest['historyGroupsOnlyFirst']['nodes'][0];
export type VsHistoryDetail_onlyFirst = VsHistoryGroup_onlyFirst['historyDetails']['nodes'][0];
export type VsPlayer_onlyFirst = VsHistoryDetail_onlyFirst['player'];

export type VsResult_regular = ResultType<RequestId.RegularBattleHistoriesQuery>['regularBattleHistories'];
export type VsHistoryGroup_regular = VsResult_regular['historyGroups']['nodes'][0];
export type VsHistoryDetail_regular = VsHistoryGroup_latest['historyDetails']['nodes'][0];

export type VsResult_bankara = ResultType<RequestId.BankaraBattleHistoriesQuery>['bankaraBattleHistories'];
export type VsHistoryGroup_bankara = VsResult_bankara['historyGroups']['nodes'][0];
export type VsHistoryDetail_bankara = VsHistoryGroup_bankara['historyDetails']['nodes'][0];

export type VsResult_xMatch = ResultType<RequestId.XBattleHistoriesQuery>['xBattleHistories'];
export type VsHistoryGroup_xMatch = VsResult_xMatch['historyGroups']['nodes'][0];
export type VsHistoryDetail_xMatch = VsHistoryGroup_xMatch['historyDetails']['nodes'][0];

export type VsResult_pagerLatest = ResultType<RequestId.PagerLatestVsDetailQuery>['vsResult'];
export type VsHistoryGroup_pagerLatest = VsResult_pagerLatest['historyGroups']['nodes'][0];
export type VsHistoryDetail_pagerLatest = VsHistoryGroup_pagerLatest['historyDetails']['nodes'][0];

//
// Challenge
//

export type ChallengeJourney_home = ResultType<RequestId.ChallengeQuery>['challenge']['challengeJourneys']['nodes'][0];
export type ChallengeJourney_journey = Exclude<ResultType<RequestId.JourneyQuery>['journey'], null>;
export type ChallengeJourney_challenges = Exclude<ResultType<RequestId.JourneyChallengeDetailQuery>['journey'], null>;

//
// CoopHistory
//

type Gear_coopResult = ResultType<RequestId.CoopHistoryQuery>['coopResult']['monthlyGear'];
export type HeadGear_coopResult = Gear_coopResult & {__typename: 'HeadGear'};
export type ClothingGear_coopResult = Gear_coopResult & {__typename: 'ClothingGear'};
export type ShoesGear_coopResult = Gear_coopResult & {__typename: 'ShoesGear'};

export type CoopResult_record = ResultType<RequestId.CoopHistoryQuery>['coopResult'];
export type CoopHistoryGroup_record = CoopResult_record['historyGroups']['nodes'][0];
export type CoopHistoryDetail_record = CoopHistoryGroup_record['historyDetails']['nodes'][0];

export type CoopHistoryGroup_onlyFirst = CoopResult_record['historyGroupsOnlyFirst']['nodes'][0];
export type CoopHistoryDetail_onlyFirst = CoopHistoryGroup_onlyFirst['historyDetails']['nodes'][0];

export type CoopHistoryDetail_result = Exclude<ResultType<RequestId.CoopHistoryDetailQuery>['coopHistoryDetail'], null>;
export type CoopPlayerResult_result = CoopHistoryDetail_result['myResult'];
export type CoopPlayer_result = CoopPlayerResult_result['player'];

export type CoopHistoryDetail_refetch = Exclude<ResultType<RequestId.CoopHistoryDetailRefetchQuery>['node'], null>;

//
// Fest
//

export type Fest_detail = Exclude<ResultType<RequestId.DetailFestRecordDetailQuery>['fest'], null>;
export type FestTeam_detail = Fest_detail['teams'][0];

export type Fest_ranking = Exclude<ResultType<RequestId.DetailRankingQuery>['fest'], null>;
export type FestTeam_ranking = Fest_ranking['teams'][0];
// export type Weapon_festRankingHolder = FestTeam_ranking['result']['rankingHolders']['edges'][0]['node'];

export type FestTeam_rankingPagination = Exclude<ResultType<RequestId.RankingHoldersFestTeamRankingHoldersPaginationQuery>['node'], null>;
export type FestTeamResult_rankingPagination = FestTeam_rankingPagination['result'];
export type FestRankingHolder_rankingPagination = FestTeamResult_rankingPagination['rankingHolders']['edges'][0]['node'];
// export type Weapon_rankingPagination = FestRankingHolder_rankingPagination['weapon'];

export type Fest_votingStatus = Exclude<ResultType<RequestId.DetailVotingStatusQuery>['fest'], null>;
export type FestTeam_votingStatus = Fest_votingStatus['teams'][0];

export type Fest_record = ResultType<RequestId.FestRecordQuery>['festRecords']['nodes'][0];
export type FestTeam_record = Fest_record['teams'][0];

//
// Friends
//

export type Friend_friendList = ResultType<RequestId.FriendListQuery>['friends']['nodes'][0];

//
// Gesotown
//

type SaleGear_Gear = ResultType<RequestId.SaleGearDetailQuery>['saleGear']['gear'];
export type HeadGear_saleGear = SaleGear_Gear & {__typename: 'HeadGear'};
export type ClothingGear_saleGear = SaleGear_Gear & {__typename: 'ClothingGear'};
export type ShoesGear_saleGear = SaleGear_Gear & {__typename: 'ShoesGear'};

export type SaleGear_gesotown = ResultType<RequestId.GesotownQuery>['gesotown']['limitedGears'][0];
export type HeadGear_gesotown = SaleGear_gesotown['gear'] & {__typename: 'HeadGear'};
export type ClothingGear_gesotown = SaleGear_gesotown['gear'] & {__typename: 'ClothingGear'};
export type ShoesGear_gesotown = SaleGear_gesotown['gear'] & {__typename: 'ShoesGear'};

export type SaleGear_order = ResultType<RequestId.SaleGearDetailOrderGesotownGearMutation>['orderGesotownGear']['gesotownGear'];
export type HeadGear_order = SaleGear_order['gear'] & {__typename: 'HeadGear'};
export type ClothingGear_order = SaleGear_order['gear'] & {__typename: 'ClothingGear'};
export type ShoesGear_order = SaleGear_order['gear'] & {__typename: 'ShoesGear'};

//
// History
//

export type CurrentPlayer_history = ResultType<RequestId.HistoryRecordQuery>['currentPlayer'];
export type PlayHistory_history = ResultType<RequestId.HistoryRecordQuery>['playHistory'];

//
// Home
//

export type PlayHistory_analytics = ResultType<RequestId.ConfigureAnalyticsQuery>['playHistory'];

export type Fest_app = Exclude<ResultType<RequestId.CurrentFestQuery>['currentFest'], null>;

export type Friend_home = ResultType<RequestId.HomeQuery>['friends']['nodes'][0];

//
// Outfits
//

export type MyOutfit_outfits = Exclude<ResultType<RequestId.MyOutfitDetailQuery>['myOutfit'], null>;
export type HeadGear_outfits = MyOutfit_outfits['currentHeadGear'];
export type ClothingGear_outfits = MyOutfit_outfits['currentClothingGear'];
export type ShoesGear_outfits = MyOutfit_outfits['currentShoesGear'];
export type Weapon_outfits = MyOutfit_outfits['currentWeapon'];

export type HeadGear_outfitsCurrentPlayer = ResultType<RequestId.MyOutfitsQuery>['currentPlayer']['headGear'];
export type ClothingGear_outfitsCurrentPlayer = ResultType<RequestId.MyOutfitsQuery>['currentPlayer']['clothingGear'];
export type ShoesGear_outfitsCurrentPlayer = ResultType<RequestId.MyOutfitsQuery>['currentPlayer']['shoesGear'];
export type Weapon_outfitsCurrentPlayer = ResultType<RequestId.MyOutfitsQuery>['currentPlayer']['weapon'];

export type MyOutfit_createPayload = ResultType<RequestId.CreateMyOutfitMutation>['createMyOutfit']['myOutfit'];

//
// Replay
//

export type Replay_replay = Exclude<ResultType<RequestId.DownloadSearchReplayQuery>['replay'], null>;
export type VsHistoryDetail_replay = Replay_replay['historyDetail'];
export type VsPlayer_replay = VsHistoryDetail_replay['player'];
export type VsTeam_replay = VsHistoryDetail_replay['myTeam'];

//
// Schedules
//

export type VsSchedule_regular = ResultType<RequestId.StageScheduleQuery>['regularSchedules']['nodes'][0];
export type VsSchedule_bankara = ResultType<RequestId.StageScheduleQuery>['bankaraSchedules']['nodes'][0];
export type VsSchedule_xMatch = ResultType<RequestId.StageScheduleQuery>['xSchedules']['nodes'][0];
export type VsSchedule_league = ResultType<'730cd98e84f1030d3e9ac86b6f1aae13'>['leagueSchedules']['nodes'][0];
export type VsSchedule_fest = ResultType<RequestId.StageScheduleQuery>['festSchedules']['nodes'][0];

export type RegularMatchSetting_schedule = Exclude<VsSchedule_regular['regularMatchSetting'], null>;
export type BankaraMatchSetting_schedule = VsSchedule_bankara['bankaraMatchSettings'][0];
export type XMatchSetting_schedule = Exclude<VsSchedule_xMatch['xMatchSetting'], null>;
export type LeagueMatchSetting_schedule = Exclude<VsSchedule_league['leagueMatchSetting'], null>;
export type FestMatchSetting_schedule = Exclude<VsSchedule_fest['festMatchSetting'], null>;

export type CoopSchedule_schedule = ResultType<RequestId.StageScheduleQuery>['coopGroupingSchedule']['regularSchedules']['nodes'][0];
export type CoopSetting_schedule = CoopSchedule_schedule['setting'];

export type Fest_schedule = Exclude<ResultType<RequestId.StageScheduleQuery>['currentFest'], null>;
export type FestTeam_schedule = Fest_schedule['teams'][0];

//
// VsStage
//

export type VsStage_records = ResultType<RequestId.StageRecordQuery>['stageRecords']['nodes'][0];

//
// Weapon
//

export type Weapon_records = ResultType<RequestId.WeaponRecordQuery>['weaponRecords']['nodes'][0];
