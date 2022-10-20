import { GraphQLResponse } from './graphql.js';
import { BankaraBattleHistoriesResult } from './types/battle-bankara.js';
import { VsHistoryDetailResult, VsHistoryDetailResult_cd82f2a } from './types/battle-detail.js';
import { LatestBattleHistoriesResult } from './types/battle-latest.js';
import { PrivateBattleHistoriesResult, PrivateBattleHistoriesResult_5198129 } from './types/battle-private.js';
import { RegularBattleHistoriesResult, RegularBattleHistoriesResult_819b680 } from './types/battle-regular.js';
import { CoopHistoryDetailResult, CoopHistoryResult } from './types/coop.js';

export type OverviewLatest = GraphQLResponse<LatestBattleHistoriesResult | CoopHistoryResult>[] |
    GraphQLResponse<LatestBattleHistoriesResult | CoopHistoryResult>[];

export type OverviewSpecific = GraphQLResponse<RegularBattleHistoriesResult | BankaraBattleHistoriesResult | PrivateBattleHistoriesResult | CoopHistoryResult>[] |
    GraphQLResponse<RegularBattleHistoriesResult_819b680 | BankaraBattleHistoriesResult | PrivateBattleHistoriesResult_5198129 | CoopHistoryResult>[];

export type Overview = OverviewLatest | OverviewSpecific;

export type Results = GraphQLResponse<VsHistoryDetailResult>[] |
    GraphQLResponse<VsHistoryDetailResult_cd82f2a>[];

export type CoopResults = GraphQLResponse<CoopHistoryDetailResult>[];
