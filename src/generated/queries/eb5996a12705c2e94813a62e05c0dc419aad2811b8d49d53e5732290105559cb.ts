import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Image, MaskingImage, SpecialWeapon, VsHistoryDetail, VsHistoryDetailConnection, VsHistoryGroup, VsHistoryGroupConnection, VsHistorySummary, VsMode, VsPlayer, VsResult, VsRule, VsStage, VsTeam, VsTeamResult, Weapon, XMatchMeasurement, XPower } from '../../types.js';

/**
 * eb5996a12705c2e94813a62e05c0dc419aad2811b8d49d53e5732290105559cb XBattleHistoriesQuery
 *
 * query XBattleHistoriesQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface XBattleHistoriesQuery_eb5996a {
    xBattleHistories: /** VsResult */ OperationFieldType<'XBattleHistoriesQuery', 'vsResult', {
        historyGroups: /** VsHistoryGroupConnection */ LinkedFieldType<VsResult, 'historyGroups', {
            nodes: /** VsHistoryGroup */ LinkedFieldType<VsHistoryGroupConnection, 'nodes', {
                historyDetails: /** VsHistoryDetailConnection */ LinkedFieldType<VsHistoryGroup, 'historyDetails', {
                    nodes: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetailConnection, 'nodes', {
                        id: VsHistoryDetail['id'];
                        judgement: VsHistoryDetail['judgement'];
                        knockout: VsHistoryDetail['knockout'];
                        myTeam: /** VsTeam */ LinkedFieldType<VsHistoryDetail, 'myTeam', {
                            result: /** VsTeamResult */ LinkedFieldType<VsTeam, 'result', {
                                paintPoint: VsTeamResult['paintPoint'];
                                score: VsTeamResult['score'];
                            }, false>;
                        }, false>;
                        nextHistoryDetail: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetail, 'nextHistoryDetail', {
                            id: VsHistoryDetail['id'];
                        }, false>;
                        player: /** VsPlayer */ LinkedFieldType<VsHistoryDetail, 'player', {
                            id: VsPlayer['id'];
                            weapon: /** Weapon */ LinkedFieldType<VsPlayer, 'weapon', {
                                id: Weapon['id'];
                                image: /** Image */ LinkedFieldType<Weapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                name: Weapon['name'];
                            }, false>;
                        }, false>;
                        previousHistoryDetail: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetail, 'previousHistoryDetail', {
                            id: VsHistoryDetail['id'];
                        }, false>;
                        vsMode: /** VsMode */ LinkedFieldType<VsHistoryDetail, 'vsMode', {
                            id: VsMode['id'];
                            mode: VsMode['mode'];
                        }, false>;
                        vsRule: /** VsRule */ LinkedFieldType<VsHistoryDetail, 'vsRule', {
                            id: VsRule['id'];
                            name: VsRule['name'];
                        }, false>;
                        vsStage: /** VsStage */ LinkedFieldType<VsHistoryDetail, 'vsStage', {
                            id: VsStage['id'];
                            image: /** Image */ LinkedFieldType<VsStage, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: VsStage['name'];
                        }, false>;
                    }, true>;
                }, false>;
                xMatchMeasurement: /** XMatchMeasurement */ LinkedFieldType<VsHistoryGroup, 'xMatchMeasurement', {
                    isInitial: XMatchMeasurement['isInitial'];
                    loseCount: XMatchMeasurement['loseCount'];
                    maxInitialBattleCount: XMatchMeasurement['maxInitialBattleCount'];
                    maxLoseCount: XMatchMeasurement['maxLoseCount'];
                    maxWinCount: XMatchMeasurement['maxWinCount'];
                    state: XMatchMeasurement['state'];
                    vsRule: /** VsRule */ LinkedFieldType<XMatchMeasurement, 'vsRule', {
                        id: VsRule['id'];
                        name: VsRule['name'];
                        rule: VsRule['rule'];
                    }, false>;
                    winCount: XMatchMeasurement['winCount'];
                    xPowerAfter: XMatchMeasurement['xPowerAfter'];
                }, false>;
            }, true>;
        }, false>;
        historyGroupsOnlyFirst: /** VsHistoryGroupConnection */ LinkedFieldType<VsResult, 'historyGroups', {
            nodes: /** VsHistoryGroup */ LinkedFieldType<VsHistoryGroupConnection, 'nodes', {
                historyDetails: /** VsHistoryDetailConnection */ LinkedFieldType<VsHistoryGroup, 'historyDetails', {
                    nodes: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetailConnection, 'nodes', {
                        id: VsHistoryDetail['id'];
                        player: /** VsPlayer */ LinkedFieldType<VsHistoryDetail, 'player', {
                            id: VsPlayer['id'];
                            weapon: /** Weapon */ LinkedFieldType<VsPlayer, 'weapon', {
                                id: Weapon['id'];
                                specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                                    id: SpecialWeapon['id'];
                                    maskingImage: /** MaskingImage */ LinkedFieldType<SpecialWeapon, 'maskingImage', {
                                        height: MaskingImage['height'];
                                        maskImageUrl: MaskingImage['maskImageUrl'];
                                        overlayImageUrl: MaskingImage['overlayImageUrl'];
                                        width: MaskingImage['width'];
                                    }, false>;
                                }, false>;
                            }, false>;
                        }, false>;
                    }, true>;
                }, false>;
            }, true>;
        }, false>;
        summary: /** VsHistorySummary */ LinkedFieldType<VsResult, 'summary', {
            assistAverage: VsHistorySummary['assistAverage'];
            deathAverage: VsHistorySummary['deathAverage'];
            killAverage: VsHistorySummary['killAverage'];
            lose: VsHistorySummary['lose'];
            perUnitTimeMinute: VsHistorySummary['perUnitTimeMinute'];
            specialAverage: VsHistorySummary['specialAverage'];
            win: VsHistorySummary['win'];
            xPowerAr: /** XPower */ LinkedFieldType<VsHistorySummary, 'xPowerAr', {
                lastXPower: XPower['lastXPower'];
            }, false>;
            xPowerCl: /** XPower */ LinkedFieldType<VsHistorySummary, 'xPowerCl', {
                lastXPower: XPower['lastXPower'];
            }, false>;
            xPowerGl: /** XPower */ LinkedFieldType<VsHistorySummary, 'xPowerGl', {
                lastXPower: XPower['lastXPower'];
            }, false>;
            xPowerLf: /** XPower */ LinkedFieldType<VsHistorySummary, 'xPowerLf', {
                lastXPower: XPower['lastXPower'];
            }, false>;
        }, false>;
    }>;
}

export default XBattleHistoriesQuery_eb5996a;
export { XBattleHistoriesQuery_eb5996a };
