import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { LeagueMatchEvent, LeagueMatchRankingSeason, LeagueMatchRankingSeasonConnection, LeagueMatchRankingSeasonEdge, LeagueMatchRankingTimePeriod, LeagueMatchRankingTimePeriodGroup, LeagueMatchRankingTimePeriodGroupConnection, LeagueMatchRankingTimePeriodGroupEdge, LeagueMatchSetting, PageInfo, VsRule } from '../../types.js';

/**
 * e9af725879a454fd3d5a191862ec3a544f552ae2d9bff6de6b212ac2676e8e14 EventMatchRankingRefetchQuery
 *
 * query EventMatchRankingRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface EventMatchRankingRefetchQuery_e9af725 {
    leagueMatchRankingSeasons: /** LeagueMatchRankingSeasonConnection */ OperationFieldType<'EventMatchRankingRefetchQuery', 'leagueMatchRankingSeasons', {
        edges: /** LeagueMatchRankingSeasonEdge */ LinkedFieldType<LeagueMatchRankingSeasonConnection, 'edges', {
            node: /** LeagueMatchRankingSeason */ LinkedFieldType<LeagueMatchRankingSeasonEdge, 'node', ({
                id: LeagueMatchRankingSeason['id'];
                leagueMatchRankingTimePeriodGroups: /** LeagueMatchRankingTimePeriodGroupConnection */ LinkedFieldType<LeagueMatchRankingSeason, 'leagueMatchRankingTimePeriodGroups', {
                    edges: /** LeagueMatchRankingTimePeriodGroupEdge */ LinkedFieldType<LeagueMatchRankingTimePeriodGroupConnection, 'edges', {
                        cursor: LeagueMatchRankingTimePeriodGroupEdge['cursor'];
                        node: /** LeagueMatchRankingTimePeriodGroup */ LinkedFieldType<LeagueMatchRankingTimePeriodGroupEdge, 'node', {
                            __typename: 'LeagueMatchRankingTimePeriodGroup';
                            id: LeagueMatchRankingTimePeriodGroup['id'];
                            leagueMatchSetting: /** LeagueMatchSetting */ LinkedFieldType<LeagueMatchRankingTimePeriodGroup, 'leagueMatchSetting', {
                                leagueMatchEvent: /** LeagueMatchEvent */ LinkedFieldType<LeagueMatchSetting, 'leagueMatchEvent', {
                                    id: LeagueMatchEvent['id'];
                                    name: LeagueMatchEvent['name'];
                                }, false>;
                                vsRule: /** VsRule */ LinkedFieldType<LeagueMatchSetting, 'vsRule', {
                                    id: VsRule['id'];
                                    name: VsRule['name'];
                                    rule: VsRule['rule'];
                                }, false>;
                            }, false>;
                            timePeriods: /** LeagueMatchRankingTimePeriod */ LinkedFieldType<LeagueMatchRankingTimePeriodGroup, 'timePeriods', {
                                id: LeagueMatchRankingTimePeriod['id'];
                                endTime: LeagueMatchRankingTimePeriod['endTime'];
                                startTime: LeagueMatchRankingTimePeriod['startTime'];
                            }, true>;
                        }, false>;
                    }, true>;
                    pageInfo: /** PageInfo */ LinkedFieldType<LeagueMatchRankingTimePeriodGroupConnection, 'pageInfo', {
                        endCursor: PageInfo['endCursor'];
                        hasNextPage: PageInfo['hasNextPage'];
                    }, false>;
                }, false>;
                seasonName: LeagueMatchRankingSeason['seasonName'];
            }) & (/** LinkedHandle */ {}), false>;
        }, true>;
    }>;
}

export default EventMatchRankingRefetchQuery_e9af725;
export { EventMatchRankingRefetchQuery_e9af725 };
