import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CoopBigRunRecord, CoopBigRunRecordItem, CoopBigRunRecordItemConnection, CoopBigRunRecordItemEdge, CoopGrade, CoopRecord, CoopStage, Image, PageInfo } from '../../types.js';

/**
 * 2b83817b6e88b202d25939fe04658d33 CoopRecordBigRunRecordContainerPaginationQuery
 *
 * query CoopRecordBigRunRecordContainerPaginationQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface CoopRecordBigRunRecordContainerPaginationQuery_2b83817 {
    coopRecord: /** CoopRecord */ OperationFieldType<'CoopRecordBigRunRecordContainerPaginationQuery', 'coopRecord', {
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
    }>;
}

export default CoopRecordBigRunRecordContainerPaginationQuery_2b83817;
export { CoopRecordBigRunRecordContainerPaginationQuery_2b83817 };
