import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { LeagueMatchEvent, LeagueMatchRankingSeason, LeagueMatchRankingSeasonConnection, LeagueMatchRankingSeasonEdge, LeagueMatchRankingTimePeriod, LeagueMatchRankingTimePeriodGroup, LeagueMatchRankingTimePeriodGroupConnection, LeagueMatchRankingTimePeriodGroupEdge, LeagueMatchSetting, PageInfo, VsRule } from '../types.js';

/**
 * 2acc36b477328ebb281fa91a07110e2d EventMatchRankingQuery
 *
 * query EventMatchRankingQuery
 *
 * Generated 01/06/2023 from SplatNet 3 4.0.0-e2ee936d.
 */
interface EventMatchRankingQuery_2acc36b {
    leagueMatchRankingSeasons: /** LeagueMatchRankingSeasonConnection */ OperationFieldType<'EventMatchRankingQuery', 'leagueMatchRankingSeasons', {
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

export default EventMatchRankingQuery_2acc36b;
export { EventMatchRankingQuery_2acc36b };
