import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { LeagueMatchEvent, LeagueMatchRankingSeason, LeagueMatchRankingSeasonConnection, LeagueMatchRankingSeasonEdge, LeagueMatchRankingTimePeriod, LeagueMatchRankingTimePeriodGroup, LeagueMatchRankingTimePeriodGroupConnection, LeagueMatchRankingTimePeriodGroupEdge, LeagueMatchSetting, PageInfo, VsRule } from '../../types.js';

/**
 * 875a827a6e460c3cd6b1921e6a0872d8b95a1fce6d52af79df67734c5cc8b527 EventMatchRankingQuery
 *
 * query EventMatchRankingQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface EventMatchRankingQuery_875a827 {
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

export default EventMatchRankingQuery_875a827;
export { EventMatchRankingQuery_875a827 };
