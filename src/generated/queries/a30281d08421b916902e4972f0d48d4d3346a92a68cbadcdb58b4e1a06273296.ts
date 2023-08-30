import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CurrentPlayer, Image, LeagueMatchEvent, LeagueMatchHistoryGroup, MaskingImage, SpecialWeapon, VsHistoryDetail, VsHistoryDetailConnection, VsHistoryGroup, VsHistoryGroupConnection, VsHistorySummary, VsMode, VsPlayer, VsResult, VsRule, VsStage, VsTeam, VsTeamResult, Weapon } from '../../types.js';

/**
 * a30281d08421b916902e4972f0d48d4d3346a92a68cbadcdb58b4e1a06273296 EventBattleHistoriesRefetchQuery
 *
 * query EventBattleHistoriesRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
type EventBattleHistoriesRefetchQuery_a30281d<
    fetchCurrentPlayer extends boolean = boolean,
> = ({
    eventBattleHistories: /** VsResult */ OperationFieldType<'EventBattleHistoriesRefetchQuery', 'vsResult', {
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
                leagueMatchHistoryGroup: /** LeagueMatchHistoryGroup */ LinkedFieldType<VsHistoryGroup, 'leagueMatchHistoryGroup', {
                    leagueMatchEvent: /** LeagueMatchEvent */ LinkedFieldType<LeagueMatchHistoryGroup, 'leagueMatchEvent', {
                        id: LeagueMatchEvent['id'];
                        name: LeagueMatchEvent['name'];
                    }, false>;
                    measurementState: LeagueMatchHistoryGroup['measurementState'];
                    myLeaguePower: LeagueMatchHistoryGroup['myLeaguePower'];
                    teamComposition: LeagueMatchHistoryGroup['teamComposition'];
                    vsRule: /** VsRule */ LinkedFieldType<LeagueMatchHistoryGroup, 'vsRule', {
                        id: VsRule['id'];
                        name: VsRule['name'];
                        rule: VsRule['rule'];
                    }, false>;
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
        }, false>;
    }>;
}) & (/** Condition */ fetchCurrentPlayer extends true ? {
    currentPlayer: /** CurrentPlayer */ ({
        species: CurrentPlayer['species'];
        weapon: /** Weapon */ LinkedFieldType<CurrentPlayer, 'weapon', {
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
    } | null);
} : {});

export default EventBattleHistoriesRefetchQuery_a30281d;
export { EventBattleHistoriesRefetchQuery_a30281d };
