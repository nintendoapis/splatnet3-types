import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CoopBigRunRecord, CoopBigRunRecordItem, CoopBigRunRecordItemConnection, CoopBigRunRecordItemEdge, CoopGrade, CoopRecord, CoopStage, CoopTeamContestRecord, Image, PageInfo } from '../types.js';

/**
 * 15035e6c4308b32d1a77e87398be5cd4 CoopRecordRefetchQuery
 *
 * query CoopRecordRefetchQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface CoopRecordRefetchQuery_15035e6 {
    coopRecord: /** CoopRecord */ OperationFieldType<'CoopRecordRefetchQuery', 'coopRecord', {
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

export default CoopRecordRefetchQuery_15035e6;
export { CoopRecordRefetchQuery_15035e6 };
