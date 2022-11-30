import { GraphQLResponse } from './graphql.js';
import { BankaraBattleHistoriesResult } from './types/battle-bankara.js';
import { VsHistoryDetailResult, VsHistoryDetailResult_cd82f2a } from './types/battle-detail.js';
import { LatestBattleHistoriesResult } from './types/battle-latest.js';
import { PrivateBattleHistoriesResult, PrivateBattleHistoriesResult_5198129 } from './types/battle-private.js';
import { RegularBattleHistoriesResult, RegularBattleHistoriesResult_819b680 } from './types/battle-regular.js';
import { CoopHistoryDetailResult, CoopHistoryDetailResult_f3799a0, CoopHistoryResult, CoopHistoryResult_817618c } from './types/coop.js';

export type OverviewLatest = GraphQLResponse<LatestBattleHistoriesResult | CoopHistoryResult>[] |
    GraphQLResponse<LatestBattleHistoriesResult | CoopHistoryResult_817618c>[];

export type OverviewSpecific = GraphQLResponse<RegularBattleHistoriesResult | BankaraBattleHistoriesResult | PrivateBattleHistoriesResult | CoopHistoryResult>[] |
    GraphQLResponse<RegularBattleHistoriesResult_819b680 | BankaraBattleHistoriesResult | PrivateBattleHistoriesResult_5198129 | CoopHistoryResult_817618c>[];

export type Overview = OverviewLatest | OverviewSpecific;

export type Results = GraphQLResponse<VsHistoryDetailResult>[] |
    GraphQLResponse<VsHistoryDetailResult_cd82f2a>[];

export type CoopResults = GraphQLResponse<CoopHistoryDetailResult>[] |
    GraphQLResponse<CoopHistoryDetailResult_f3799a0>[];
