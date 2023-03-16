import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Badge, Color, CoopBossResult, CoopEnemy, CoopEnemyResult, CoopEventWave, CoopGrade, CoopHistoryDetail, CoopPlayer, CoopPlayerResult, CoopScale, CoopStage, CoopSupplySpecialWeapon, CoopSupplyWeapon, CoopUniform, CoopWaveResult, Image, Nameplate, NameplateBackground, Player, SpecialWeapon } from '../types.js';

/**
 * 379f0d9b78b531be53044bcac031b34b CoopHistoryDetailQuery
 *
 * query CoopHistoryDetailQuery
 *
 * Generated 16/03/2023 from SplatNet 3 3.0.0-6049221b.
 */
interface CoopHistoryDetailQuery_379f0d9 {
    coopHistoryDetail: /** unknown type */ OperationFieldType<'CoopHistoryDetailQuery', 'node', ({
        __typename: string;
        id: CoopHistoryDetail['id'];
    }) & (/** CoopHistoryDetail */ {
        afterGrade: /** CoopGrade */ LinkedFieldType<CoopHistoryDetail, 'afterGrade', {
            id: CoopGrade['id'];
            name: CoopGrade['name'];
        }, false>;
        afterGradePoint: CoopHistoryDetail['afterGradePoint'];
        bossResult: /** CoopBossResult */ LinkedFieldType<CoopHistoryDetail, 'bossResult', {
            boss: /** CoopEnemy */ LinkedFieldType<CoopBossResult, 'boss', {
                id: CoopEnemy['id'];
                image: /** Image */ LinkedFieldType<CoopEnemy, 'image', {
                    url: Image['url'];
                }, false>;
                name: CoopEnemy['name'];
            }, false>;
            hasDefeatBoss: CoopBossResult['hasDefeatBoss'];
        }, false>;
        coopStage: /** CoopStage */ LinkedFieldType<CoopHistoryDetail, 'coopStage', {
            id: CoopStage['id'];
            image: /** Image */ LinkedFieldType<CoopStage, 'image', {
                url: Image['url'];
            }, false>;
            name: CoopStage['name'];
        }, false>;
        dangerRate: CoopHistoryDetail['dangerRate'];
        enemyResults: /** CoopEnemyResult */ LinkedFieldType<CoopHistoryDetail, 'enemyResults', {
            defeatCount: CoopEnemyResult['defeatCount'];
            enemy: /** CoopEnemy */ LinkedFieldType<CoopEnemyResult, 'enemy', {
                id: CoopEnemy['id'];
                image: /** Image */ LinkedFieldType<CoopEnemy, 'image', {
                    url: Image['url'];
                }, false>;
                name: CoopEnemy['name'];
            }, false>;
            popCount: CoopEnemyResult['popCount'];
            teamDefeatCount: CoopEnemyResult['teamDefeatCount'];
        }, true>;
        jobBonus: CoopHistoryDetail['jobBonus'];
        jobPoint: CoopHistoryDetail['jobPoint'];
        jobRate: CoopHistoryDetail['jobRate'];
        jobScore: CoopHistoryDetail['jobScore'];
        memberResults: /** CoopPlayerResult */ LinkedFieldType<CoopHistoryDetail, 'memberResults', {
            defeatEnemyCount: CoopPlayerResult['defeatEnemyCount'];
            deliverCount: CoopPlayerResult['deliverCount'];
            goldenAssistCount: CoopPlayerResult['goldenAssistCount'];
            goldenDeliverCount: CoopPlayerResult['goldenDeliverCount'];
            player: /** CoopPlayer */ LinkedFieldType<CoopPlayerResult, 'player', ({
                id: CoopPlayer['id'];
                name: CoopPlayer['name'];
                species: CoopPlayer['species'];
                uniform: /** CoopUniform */ LinkedFieldType<CoopPlayer, 'uniform', {
                    id: CoopUniform['id'];
                    image: /** Image */ LinkedFieldType<CoopUniform, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: CoopUniform['name'];
                }, false>;
            }) & (/** Player */ {
                __isPlayer: 'Player';
                byname: Player['byname'];
                nameId: Player['nameId'];
                nameplate: /** Nameplate */ LinkedFieldType<Player, 'nameplate', {
                    background: /** NameplateBackground */ LinkedFieldType<Nameplate, 'background', {
                        id: NameplateBackground['id'];
                        image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                            url: Image['url'];
                        }, false>;
                        textColor: /** Color */ LinkedFieldType<NameplateBackground, 'textColor', {
                            r: Color['r'];
                            g: Color['g'];
                            b: Color['b'];
                            a: Color['a'];
                        }, false>;
                    }, false>;
                    badges: /** Badge */ LinkedFieldType<Nameplate, 'badges', {
                        id: Badge['id'];
                        image: /** Image */ LinkedFieldType<Badge, 'image', {
                            url: Image['url'];
                        }, false>;
                    }, true>;
                }, false>;
            }), false>;
            rescueCount: CoopPlayerResult['rescueCount'];
            rescuedCount: CoopPlayerResult['rescuedCount'];
            specialWeapon: /** CoopSupplySpecialWeapon */ LinkedFieldType<CoopPlayerResult, 'specialWeapon', {
                image: /** Image */ LinkedFieldType<CoopSupplySpecialWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: CoopSupplySpecialWeapon['name'];
                weaponId: CoopSupplySpecialWeapon['weaponId'];
            }, false>;
            weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopPlayerResult, 'weapons', {
                image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: CoopSupplyWeapon['name'];
            }, true>;
        }, true>;
        myResult: /** CoopPlayerResult */ LinkedFieldType<CoopHistoryDetail, 'myResult', {
            defeatEnemyCount: CoopPlayerResult['defeatEnemyCount'];
            deliverCount: CoopPlayerResult['deliverCount'];
            goldenAssistCount: CoopPlayerResult['goldenAssistCount'];
            goldenDeliverCount: CoopPlayerResult['goldenDeliverCount'];
            player: /** CoopPlayer */ LinkedFieldType<CoopPlayerResult, 'player', ({
                id: CoopPlayer['id'];
                name: CoopPlayer['name'];
                species: CoopPlayer['species'];
                uniform: /** CoopUniform */ LinkedFieldType<CoopPlayer, 'uniform', {
                    id: CoopUniform['id'];
                    image: /** Image */ LinkedFieldType<CoopUniform, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: CoopUniform['name'];
                }, false>;
            }) & (/** Player */ {
                __isPlayer: 'Player';
                byname: Player['byname'];
                nameId: Player['nameId'];
                nameplate: /** Nameplate */ LinkedFieldType<Player, 'nameplate', {
                    background: /** NameplateBackground */ LinkedFieldType<Nameplate, 'background', {
                        id: NameplateBackground['id'];
                        image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                            url: Image['url'];
                        }, false>;
                        textColor: /** Color */ LinkedFieldType<NameplateBackground, 'textColor', {
                            r: Color['r'];
                            g: Color['g'];
                            b: Color['b'];
                            a: Color['a'];
                        }, false>;
                    }, false>;
                    badges: /** Badge */ LinkedFieldType<Nameplate, 'badges', {
                        id: Badge['id'];
                        image: /** Image */ LinkedFieldType<Badge, 'image', {
                            url: Image['url'];
                        }, false>;
                    }, true>;
                }, false>;
            }), false>;
            rescueCount: CoopPlayerResult['rescueCount'];
            rescuedCount: CoopPlayerResult['rescuedCount'];
            specialWeapon: /** CoopSupplySpecialWeapon */ LinkedFieldType<CoopPlayerResult, 'specialWeapon', {
                image: /** Image */ LinkedFieldType<CoopSupplySpecialWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: CoopSupplySpecialWeapon['name'];
                weaponId: CoopSupplySpecialWeapon['weaponId'];
            }, false>;
            weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopPlayerResult, 'weapons', {
                image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: CoopSupplyWeapon['name'];
            }, true>;
        }, false>;
        nextHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'nextHistoryDetail', {
            id: CoopHistoryDetail['id'];
        }, false>;
        playedTime: CoopHistoryDetail['playedTime'];
        previousHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'previousHistoryDetail', {
            id: CoopHistoryDetail['id'];
        }, false>;
        resultWave: CoopHistoryDetail['resultWave'];
        rule: CoopHistoryDetail['rule'];
        scale: /** CoopScale */ LinkedFieldType<CoopHistoryDetail, 'scale', {
            bronze: CoopScale['bronze'];
            gold: CoopScale['gold'];
            silver: CoopScale['silver'];
        }, false>;
        scenarioCode: CoopHistoryDetail['scenarioCode'];
        smellMeter: CoopHistoryDetail['smellMeter'];
        waveResults: /** CoopWaveResult */ LinkedFieldType<CoopHistoryDetail, 'waveResults', {
            deliverNorm: CoopWaveResult['deliverNorm'];
            eventWave: /** CoopEventWave */ LinkedFieldType<CoopWaveResult, 'eventWave', {
                id: CoopEventWave['id'];
                name: CoopEventWave['name'];
            }, false>;
            goldenPopCount: CoopWaveResult['goldenPopCount'];
            specialWeapons: /** SpecialWeapon */ LinkedFieldType<CoopWaveResult, 'specialWeapons', {
                id: SpecialWeapon['id'];
                image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                    url: Image['url'];
                }, false>;
                name: SpecialWeapon['name'];
            }, true>;
            teamDeliverCount: CoopWaveResult['teamDeliverCount'];
            waterLevel: CoopWaveResult['waterLevel'];
            waveNumber: CoopWaveResult['waveNumber'];
        }, true>;
        weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopHistoryDetail, 'weapons', {
            image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                url: Image['url'];
            }, false>;
            name: CoopSupplyWeapon['name'];
        }, true>;
    }) & ({
        __typename: 'CoopHistoryDetail';
    })>;
}

export default CoopHistoryDetailQuery_379f0d9;
export { CoopHistoryDetailQuery_379f0d9 };
