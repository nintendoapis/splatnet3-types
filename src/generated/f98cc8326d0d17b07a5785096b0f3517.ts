import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Award, Badge, ClothingGear, Color, Fest, FestTeam, Gear, GearPower, HeadGear, Image, Nameplate, NameplateBackground, Player, Replay, ReplayConnection, ShoesGear, VsHistoryDetail, VsMode, VsPlayer, VsRule, VsStage, VsTeam, VsTeamResult, Weapon } from '../types.js';

/**
 * f98cc8326d0d17b07a5785096b0f3517 ReplayQuery
 *
 * query ReplayQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-63bad6e1.
 */
interface ReplayQuery_f98cc83 {
    currentFest: /** Fest */ OperationFieldType<'ReplayQuery', 'currentFest', {
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
    replays: /** ReplayConnection */ OperationFieldType<'ReplayQuery', 'replays', {
        nodes: /** Replay */ LinkedFieldType<ReplayConnection, 'nodes', {
            id: Replay['id'];
            historyDetail: /** VsHistoryDetail */ LinkedFieldType<Replay, 'historyDetail', {
                id: VsHistoryDetail['id'];
                awards: /** Award */ LinkedFieldType<VsHistoryDetail, 'awards', {
                    name: Award['name'];
                }, true>;
                judgement: VsHistoryDetail['judgement'];
                knockout: VsHistoryDetail['knockout'];
                myTeam: /** VsTeam */ LinkedFieldType<VsHistoryDetail, 'myTeam', {
                    result: /** VsTeamResult */ LinkedFieldType<VsTeam, 'result', {
                        paintPoint: VsTeamResult['paintPoint'];
                        paintRatio: VsTeamResult['paintRatio'];
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

export default ReplayQuery_f98cc83;
export { ReplayQuery_f98cc83 };
