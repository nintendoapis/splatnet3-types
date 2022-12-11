import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { BankaraMatchHistory, Color, CurrentPlayer, Fest, FestTeam, Image, LeagueMatchHistory, MaskingImage, SpecialWeapon, VsHistoryDetail, VsHistoryDetailConnection, VsHistoryGroup, VsHistoryGroupConnection, VsHistorySummary, VsMode, VsPlayer, VsResult, VsRule, VsStage, VsTeam, VsTeamResult, Weapon } from '../types.js';

/**
 * 80585ad4e4ecb674c3d8cd278adb1d21 LatestBattleHistoriesRefetchQuery
 *
 * query LatestBattleHistoriesRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5644e7a2.
 */
type LatestBattleHistoriesRefetchQuery_80585ad<
    fetchCurrentPlayer extends boolean = boolean,
> = ({
    currentFest: /** Fest */ OperationFieldType<'LatestBattleHistoriesRefetchQuery', 'currentFest', {
        id: Fest['id'];
        state: Fest['state'];
        teams: /** FestTeam */ LinkedFieldType<Fest, 'teams', {
            id: FestTeam['id'];
            color: /** Color */ LinkedFieldType<FestTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
        }, true>;
    }>;
    latestBattleHistories: /** VsResult */ OperationFieldType<'LatestBattleHistoriesRefetchQuery', 'vsResult', {
        historyGroups: /** VsHistoryGroupConnection */ LinkedFieldType<VsResult, 'historyGroups', {
            nodes: /** VsHistoryGroup */ LinkedFieldType<VsHistoryGroupConnection, 'nodes', {
                historyDetails: /** VsHistoryDetailConnection */ LinkedFieldType<VsHistoryGroup, 'historyDetails', {
                    nodes: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetailConnection, 'nodes', {
                        id: VsHistoryDetail['id'];
                        bankaraMatch: /** BankaraMatchHistory */ LinkedFieldType<VsHistoryDetail, 'bankaraMatch', {
                            earnedUdemaePoint: BankaraMatchHistory['earnedUdemaePoint'];
                        }, false>;
                        judgement: VsHistoryDetail['judgement'];
                        knockout: VsHistoryDetail['knockout'];
                        leagueMatch: /** LeagueMatchHistory */ LinkedFieldType<VsHistoryDetail, 'leagueMatch', {
                            myLeaguePower: LeagueMatchHistory['myLeaguePower'];
                        }, false>;
                        myTeam: /** VsTeam */ LinkedFieldType<VsHistoryDetail, 'myTeam', {
                            result: /** VsTeamResult */ LinkedFieldType<VsTeam, 'result', {
                                paintPoint: VsTeamResult['paintPoint'];
                                paintRatio: VsTeamResult['paintRatio'];
                                score: VsTeamResult['score'];
                            }, false>;
                        }, false>;
                        nextHistoryDetail: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetail, 'nextHistoryDetail', {
                            id: VsHistoryDetail['id'];
                        }, false>;
                        player: /** VsPlayer */ LinkedFieldType<VsHistoryDetail, 'player', {
                            id: VsPlayer['id'];
                            festGrade: VsPlayer['festGrade'];
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
                        udemae: VsHistoryDetail['udemae'];
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

export default LatestBattleHistoriesRefetchQuery_80585ad;
export { LatestBattleHistoriesRefetchQuery_80585ad };
