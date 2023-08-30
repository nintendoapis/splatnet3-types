import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Award, Badge, ClothingGear, Color, Fest, FestTeam, Gear, GearPower, HeadGear, Image, LeagueMatchEvent, LeagueMatchHistory, Nameplate, NameplateBackground, Player, Replay, ReplayConnection, ShoesGear, VsHistoryDetail, VsMode, VsPlayer, VsRule, VsStage, VsTeam, VsTeamResult, Weapon } from '../../types.js';

/**
 * 4e83edd3d0964716c6ab27b9d6acf17f ReplayUploadedReplayListRefetchQuery
 *
 * query ReplayUploadedReplayListRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface ReplayUploadedReplayListRefetchQuery_4e83edd {
    currentFest: /** Fest */ OperationFieldType<'ReplayUploadedReplayListRefetchQuery', 'currentFest', {
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
    replays: /** ReplayConnection */ OperationFieldType<'ReplayUploadedReplayListRefetchQuery', 'replays', {
        nodes: /** Replay */ LinkedFieldType<ReplayConnection, 'nodes', {
            id: Replay['id'];
            historyDetail: /** VsHistoryDetail */ LinkedFieldType<Replay, 'historyDetail', {
                id: VsHistoryDetail['id'];
                awards: /** Award */ LinkedFieldType<VsHistoryDetail, 'awards', {
                    name: Award['name'];
                }, true>;
                judgement: VsHistoryDetail['judgement'];
                knockout: VsHistoryDetail['knockout'];
                leagueMatch: /** LeagueMatchHistory */ LinkedFieldType<VsHistoryDetail, 'leagueMatch', {
                    leagueMatchEvent: /** LeagueMatchEvent */ LinkedFieldType<LeagueMatchHistory, 'leagueMatchEvent', {
                        id: LeagueMatchEvent['id'];
                        name: LeagueMatchEvent['name'];
                    }, false>;
                }, false>;
                myTeam: /** VsTeam */ LinkedFieldType<VsHistoryDetail, 'myTeam', {
                    result: /** VsTeamResult */ LinkedFieldType<VsTeam, 'result', {
                        paintPoint: VsTeamResult['paintPoint'];
                        score: VsTeamResult['score'];
                    }, false>;
                }, false>;
                playedTime: VsHistoryDetail['playedTime'];
                player: /** VsPlayer */ LinkedFieldType<VsHistoryDetail, 'player', ({
                    id: VsPlayer['id'];
                    clothingGear: /** ClothingGear */ LinkedFieldType<VsPlayer, 'clothingGear', ({
                        image: /** Image */ LinkedFieldType<ClothingGear, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: ClothingGear['name'];
                    }) & (/** Gear */ {
                        __isGear: 'Gear';
                        additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, true>;
                        primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, false>;
                    }), false>;
                    festGrade: VsPlayer['festGrade'];
                    headGear: /** HeadGear */ LinkedFieldType<VsPlayer, 'headGear', ({
                        image: /** Image */ LinkedFieldType<HeadGear, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: HeadGear['name'];
                    }) & (/** Gear */ {
                        __isGear: 'Gear';
                        additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, true>;
                        primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, false>;
                    }), false>;
                    shoesGear: /** ShoesGear */ LinkedFieldType<VsPlayer, 'shoesGear', ({
                        image: /** Image */ LinkedFieldType<ShoesGear, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: ShoesGear['name'];
                    }) & (/** Gear */ {
                        __isGear: 'Gear';
                        additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, true>;
                        primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, false>;
                    }), false>;
                    weapon: /** Weapon */ LinkedFieldType<VsPlayer, 'weapon', {
                        id: Weapon['id'];
                        image: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Weapon['name'];
                    }, false>;
                }) & (/** Player */ {
                    __isPlayer: 'Player';
                    byname: Player['byname'];
                    name: Player['name'];
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
                vsMode: /** VsMode */ LinkedFieldType<VsHistoryDetail, 'vsMode', {
                    id: VsMode['id'];
                    mode: VsMode['mode'];
                    name: VsMode['name'];
                }, false>;
                vsRule: /** VsRule */ LinkedFieldType<VsHistoryDetail, 'vsRule', {
                    id: VsRule['id'];
                    name: VsRule['name'];
                }, false>;
                vsStage: /** VsStage */ LinkedFieldType<VsHistoryDetail, 'vsStage', {
                    id: VsStage['id'];
                    name: VsStage['name'];
                }, false>;
            }, false>;
            replayCode: Replay['replayCode'];
        }, true>;
    }>;
}

export default ReplayUploadedReplayListRefetchQuery_4e83edd;
export { ReplayUploadedReplayListRefetchQuery_4e83edd };
