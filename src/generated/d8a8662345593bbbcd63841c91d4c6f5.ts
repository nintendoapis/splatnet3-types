import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { BankaraMatchChallenge, BankaraMatchHistory, CurrentPlayer, Image, MaskingImage, SpecialWeapon, VsHistoryDetail, VsHistoryDetailConnection, VsHistoryGroup, VsHistoryGroupConnection, VsHistorySummary, VsMode, VsPlayer, VsResult, VsRule, VsStage, VsTeam, VsTeamResult, Weapon } from '../types.js';

/**
 * d8a8662345593bbbcd63841c91d4c6f5 BankaraBattleHistoriesRefetchQuery
 *
 * query BankaraBattleHistoriesRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-216d0219.
 */
type BankaraBattleHistoriesRefetchQuery_d8a8662<
    fetchCurrentPlayer extends boolean = boolean,
> = ({
    bankaraBattleHistories: /** VsResult */ OperationFieldType<'BankaraBattleHistoriesRefetchQuery', 'vsResult', {
        historyGroups: /** VsHistoryGroupConnection */ LinkedFieldType<VsResult, 'historyGroups', {
            nodes: /** VsHistoryGroup */ LinkedFieldType<VsHistoryGroupConnection, 'nodes', {
                bankaraMatchChallenge: /** BankaraMatchChallenge */ LinkedFieldType<VsHistoryGroup, 'bankaraMatchChallenge', {
                    earnedUdemaePoint: BankaraMatchChallenge['earnedUdemaePoint'];
                    isPromo: BankaraMatchChallenge['isPromo'];
                    isUdemaeUp: BankaraMatchChallenge['isUdemaeUp'];
                    loseCount: BankaraMatchChallenge['loseCount'];
                    maxLoseCount: BankaraMatchChallenge['maxLoseCount'];
                    maxWinCount: BankaraMatchChallenge['maxWinCount'];
                    state: BankaraMatchChallenge['state'];
                    udemaeAfter: BankaraMatchChallenge['udemaeAfter'];
                    winCount: BankaraMatchChallenge['winCount'];
                }, false>;
                historyDetails: /** VsHistoryDetailConnection */ LinkedFieldType<VsHistoryGroup, 'historyDetails', {
                    nodes: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetailConnection, 'nodes', {
                        id: VsHistoryDetail['id'];
                        bankaraMatch: /** BankaraMatchHistory */ LinkedFieldType<VsHistoryDetail, 'bankaraMatch', {
                            earnedUdemaePoint: BankaraMatchHistory['earnedUdemaePoint'];
                        }, false>;
                        judgement: VsHistoryDetail['judgement'];
                        knockout: VsHistoryDetail['knockout'];
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

export default BankaraBattleHistoriesRefetchQuery_d8a8662;
export { BankaraBattleHistoriesRefetchQuery_d8a8662 };
