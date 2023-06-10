import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CoopBossResult, CoopEnemy, CoopGrade, CoopGroupHighestResult, CoopHistoryDetail, CoopHistoryDetailConnection, CoopHistoryGroup, CoopHistoryGroupConnection, CoopPlayerResult, CoopPointCard, CoopResult, CoopScale, CoopStage, CoopSupplyWeapon, Image } from '../../types.js';

/**
 * 5711cb6c2e3afce523766c906810f030 CoopPagerLatestCoopQuery
 *
 * query CoopPagerLatestCoopQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-15dc639f.
 */
interface CoopPagerLatestCoopQuery_5711cb6 {
    coopResult: /** CoopResult */ OperationFieldType<'CoopPagerLatestCoopQuery', 'coopResult', {
        historyGroups: /** CoopHistoryGroupConnection */ LinkedFieldType<CoopResult, 'historyGroups', {
            nodes: /** CoopHistoryGroup */ LinkedFieldType<CoopHistoryGroupConnection, 'nodes', {
                endTime: CoopHistoryGroup['endTime'];
                highestResult: /** CoopGroupHighestResult */ LinkedFieldType<CoopHistoryGroup, 'highestResult', {
                    grade: /** CoopGrade */ LinkedFieldType<CoopGroupHighestResult, 'grade', {
                        id: CoopGrade['id'];
                        name: CoopGrade['name'];
                    }, false>;
                    gradePoint: CoopGroupHighestResult['gradePoint'];
                    jobScore: CoopGroupHighestResult['jobScore'];
                }, false>;
                historyDetails: /** CoopHistoryDetailConnection */ LinkedFieldType<CoopHistoryGroup, 'historyDetails', {
                    nodes: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetailConnection, 'nodes', {
                        id: CoopHistoryDetail['id'];
                        afterGrade: /** CoopGrade */ LinkedFieldType<CoopHistoryDetail, 'afterGrade', {
                            id: CoopGrade['id'];
                            name: CoopGrade['name'];
                        }, false>;
                        afterGradePoint: CoopHistoryDetail['afterGradePoint'];
                        bossResult: /** CoopBossResult */ LinkedFieldType<CoopHistoryDetail, 'bossResult', {
                            boss: /** CoopEnemy */ LinkedFieldType<CoopBossResult, 'boss', {
                                id: CoopEnemy['id'];
                                name: CoopEnemy['name'];
                            }, false>;
                            hasDefeatBoss: CoopBossResult['hasDefeatBoss'];
                        }, false>;
                        coopStage: /** CoopStage */ LinkedFieldType<CoopHistoryDetail, 'coopStage', {
                            id: CoopStage['id'];
                            name: CoopStage['name'];
                        }, false>;
                        gradePointDiff: CoopHistoryDetail['gradePointDiff'];
                        memberResults: /** CoopPlayerResult */ LinkedFieldType<CoopHistoryDetail, 'memberResults', {
                            deliverCount: CoopPlayerResult['deliverCount'];
                            goldenDeliverCount: CoopPlayerResult['goldenDeliverCount'];
                        }, true>;
                        myResult: /** CoopPlayerResult */ LinkedFieldType<CoopHistoryDetail, 'myResult', {
                            deliverCount: CoopPlayerResult['deliverCount'];
                            goldenDeliverCount: CoopPlayerResult['goldenDeliverCount'];
                        }, false>;
                        nextHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'nextHistoryDetail', {
                            id: CoopHistoryDetail['id'];
                        }, false>;
                        previousHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'previousHistoryDetail', {
                            id: CoopHistoryDetail['id'];
                        }, false>;
                        resultWave: CoopHistoryDetail['resultWave'];
                        weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopHistoryDetail, 'weapons', {
                            image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: CoopSupplyWeapon['name'];
                        }, true>;
                    }, true>;
                }, false>;
                mode: CoopHistoryGroup['mode'];
                rule: CoopHistoryGroup['rule'];
                startTime: CoopHistoryGroup['startTime'];
            }, true>;
        }, false>;
        historyGroupsOnlyFirst: /** CoopHistoryGroupConnection */ LinkedFieldType<CoopResult, 'historyGroups', {
            nodes: /** CoopHistoryGroup */ LinkedFieldType<CoopHistoryGroupConnection, 'nodes', {
                historyDetails: /** CoopHistoryDetailConnection */ LinkedFieldType<CoopHistoryGroup, 'historyDetails', {
                    nodes: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetailConnection, 'nodes', {
                        id: CoopHistoryDetail['id'];
                    }, true>;
                }, false>;
            }, true>;
        }, false>;
        monthlyGear: /** unknown type */ LinkedFieldType<CoopResult, 'monthlyGear', {
            __typename: string;
            image: /** Image */ LinkedFieldType<CoopResult['monthlyGear'], 'image', {
                url: Image['url'];
            }, false>;
            name: CoopResult['monthlyGear']['name'];
        }, false>;
        pointCard: /** CoopPointCard */ LinkedFieldType<CoopResult, 'pointCard', {
            defeatBossCount: CoopPointCard['defeatBossCount'];
            deliverCount: CoopPointCard['deliverCount'];
            goldenDeliverCount: CoopPointCard['goldenDeliverCount'];
            playCount: CoopPointCard['playCount'];
            regularPoint: CoopPointCard['regularPoint'];
            rescueCount: CoopPointCard['rescueCount'];
            totalPoint: CoopPointCard['totalPoint'];
        }, false>;
        regularAverageClearWave: CoopResult['regularAverageClearWave'];
        regularGrade: /** CoopGrade */ LinkedFieldType<CoopResult, 'regularGrade', {
            id: CoopGrade['id'];
            name: CoopGrade['name'];
        }, false>;
        regularGradePoint: CoopResult['regularGradePoint'];
        scale: /** CoopScale */ LinkedFieldType<CoopResult, 'scale', {
            bronze: CoopScale['bronze'];
            gold: CoopScale['gold'];
            silver: CoopScale['silver'];
        }, false>;
    }>;
}

export default CoopPagerLatestCoopQuery_5711cb6;
export { CoopPagerLatestCoopQuery_5711cb6 };
