import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CoopBigRunRecord, CoopBigRunRecordItem, CoopBigRunRecordItemConnection, CoopBigRunRecordItemEdge, CoopGrade, CoopRecord, CoopStage, CoopTeamContestRecord, Image, PageInfo } from '../../types.js';

/**
 * 940418e7b67b69420b7af50bdd292639e46fa8240ae57520a9cf7eed05a10760 CoopRecordQuery
 *
 * query CoopRecordQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface CoopRecordQuery_940418e {
    coopRecord: /** CoopRecord */ OperationFieldType<'CoopRecordQuery', 'coopRecord', {
        bigRunRecord: /** CoopBigRunRecord */ LinkedFieldType<CoopRecord, 'bigRunRecord', ({
            records: /** CoopBigRunRecordItemConnection */ LinkedFieldType<CoopBigRunRecord, 'records', {
                edges: /** CoopBigRunRecordItemEdge */ LinkedFieldType<CoopBigRunRecordItemConnection, 'edges', {
                    cursor: CoopBigRunRecordItemEdge['cursor'];
                    node: /** CoopBigRunRecordItem */ LinkedFieldType<CoopBigRunRecordItemEdge, 'node', {
                        __typename: 'CoopBigRunRecordItem';
                        coopStage: /** CoopStage */ LinkedFieldType<CoopBigRunRecordItem, 'coopStage', {
                            id: CoopStage['id'];
                            image: /** Image */ LinkedFieldType<CoopStage, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: CoopStage['name'];
                        }, false>;
                        endTime: CoopBigRunRecordItem['endTime'];
                        highestGrade: /** CoopGrade */ LinkedFieldType<CoopBigRunRecordItem, 'highestGrade', {
                            id: CoopGrade['id'];
                            name: CoopGrade['name'];
                        }, false>;
                        highestGradePoint: CoopBigRunRecordItem['highestGradePoint'];
                        highestJobScore: CoopBigRunRecordItem['highestJobScore'];
                        startTime: CoopBigRunRecordItem['startTime'];
                        trophy: CoopBigRunRecordItem['trophy'];
                    }, false>;
                }, true>;
                pageInfo: /** PageInfo */ LinkedFieldType<CoopBigRunRecordItemConnection, 'pageInfo', {
                    endCursor: PageInfo['endCursor'];
                    hasNextPage: PageInfo['hasNextPage'];
                }, false>;
            }, false>;
        }) & (/** LinkedHandle */ {}), false>;
        teamContestRecord: /** CoopTeamContestRecord */ LinkedFieldType<CoopRecord, 'teamContestRecord', {
            attend: CoopTeamContestRecord['attend'];
            bronze: CoopTeamContestRecord['bronze'];
            gold: CoopTeamContestRecord['gold'];
            silver: CoopTeamContestRecord['silver'];
        }, false>;
    }>;
}

export default CoopRecordQuery_940418e;
export { CoopRecordQuery_940418e };
