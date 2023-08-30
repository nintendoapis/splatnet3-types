import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { LeagueMatchEvent, LeagueMatchRankingSeason, LeagueMatchRankingTimePeriod, LeagueMatchRankingTimePeriodGroup, LeagueMatchRankingTimePeriodGroupConnection, LeagueMatchRankingTimePeriodGroupEdge, LeagueMatchSetting, PageInfo, VsRule } from '../../types.js';

/**
 * 5b563e5fb86ff7e537cc1ed86485049a41a710ca79af9c38113d41dda1d54643 EventMatchRankingSeasonRefetchQuery
 *
 * query EventMatchRankingSeasonRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface EventMatchRankingSeasonRefetchQuery_5b563e5 {
    node: /** unknown type */ OperationFieldType<'EventMatchRankingSeasonRefetchQuery', 'node', ({
        __typename: string;
        id: UnknownScalarType | null;
    }) & (/** LeagueMatchRankingSeason */ {
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
    }) & (/** LinkedHandle */ {}) & ({
        __typename: 'LeagueMatchRankingSeason';
    })>;
}

export default EventMatchRankingSeasonRefetchQuery_5b563e5;
export { EventMatchRankingSeasonRefetchQuery_5b563e5 };
