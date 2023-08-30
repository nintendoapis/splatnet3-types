import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { BankaraMatchSetting, Color, CoopGroupingSchedule, CoopSchedule, CoopScheduleConnection, CoopSetting, CoopStage, CoopSupplyWeapon, CurrentPlayer, Fest, FestMatchSetting, FestTeam, Image, LeagueMatchEvent, LeagueMatchSchedule, LeagueMatchScheduleConnection, LeagueMatchSetting, TimePeriod, VsRule, VsSchedule, VsScheduleConnection, VsSetting, VsStage, VsStageConnection, VsStageRecordStats } from '../../types.js';

/**
 * 9b6b90568f990b2a14f04c25dd6eb53b35cc12ac815db85ececfccee64215edd StageScheduleQuery
 *
 * query StageScheduleQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface StageScheduleQuery_9b6b905 {
    bankaraSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            bankaraMatchSettings: /** BankaraMatchSetting */ LinkedFieldType<VsSchedule, 'bankaraMatchSettings', ({
            }) & (/** VsSetting */ {
                __isVsSetting: 'VsSetting';
                __typename: 'VsSetting';
                vsRule: /** VsRule */ LinkedFieldType<VsSetting, 'vsRule', {
                    id: VsRule['id'];
                    name: VsRule['name'];
                    rule: VsRule['rule'];
                }, false>;
                vsStages: /** VsStage */ LinkedFieldType<VsSetting, 'vsStages', {
                    id: VsStage['id'];
                    image: /** Image */ LinkedFieldType<VsStage, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: VsStage['name'];
                    vsStageId: VsStage['vsStageId'];
                }, true>;
            }) & (/** BankaraMatchSetting */ {
                bankaraMode: BankaraMatchSetting['mode'];
            }) & (/** FestMatchSetting */ {
                festMode: FestMatchSetting['mode'];
            }), true>;
            endTime: VsSchedule['endTime'];
            festMatchSettings: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSettings', {
                __typename: 'FestMatchSetting';
            }, true>;
            startTime: VsSchedule['startTime'];
        }, true>;
    }>;
    coopGroupingSchedule: /** CoopGroupingSchedule */ OperationFieldType<'StageScheduleQuery', 'coopGroupingSchedule', {
        bannerImage: /** Image */ LinkedFieldType<CoopGroupingSchedule, 'bannerImage', {
            url: Image['url'];
        }, false>;
        bigRunSchedules: /** CoopScheduleConnection */ LinkedFieldType<CoopGroupingSchedule, 'bigRunSchedules', {
            nodes: /** CoopSchedule */ LinkedFieldType<CoopScheduleConnection, 'nodes', {
                endTime: CoopSchedule['endTime'];
                setting: /** unknown type */ LinkedFieldType<CoopSchedule, 'setting', {
                    __typename: string;
                    coopStage: /** CoopStage */ LinkedFieldType<CoopSetting, 'coopStage', {
                        id: CoopStage['id'];
                        image: /** Image */ LinkedFieldType<CoopStage, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: CoopStage['name'];
                        thumbnailImage: /** Image */ LinkedFieldType<CoopStage, 'image', {
                            url: Image['url'];
                        }, false>;
                    }, false>;
                    rule: CoopSetting['rule'];
                    weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopSetting, 'weapons', {
                        image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: CoopSupplyWeapon['name'];
                    }, true>;
                    __isCoopSetting: string;
                }, false>;
                startTime: CoopSchedule['startTime'];
            }, true>;
        }, false>;
        regularSchedules: /** CoopScheduleConnection */ LinkedFieldType<CoopGroupingSchedule, 'regularSchedules', {
            nodes: /** CoopSchedule */ LinkedFieldType<CoopScheduleConnection, 'nodes', {
                endTime: CoopSchedule['endTime'];
                setting: /** unknown type */ LinkedFieldType<CoopSchedule, 'setting', {
                    __typename: string;
                    coopStage: /** CoopStage */ LinkedFieldType<CoopSetting, 'coopStage', {
                        id: CoopStage['id'];
                        image: /** Image */ LinkedFieldType<CoopStage, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: CoopStage['name'];
                        thumbnailImage: /** Image */ LinkedFieldType<CoopStage, 'image', {
                            url: Image['url'];
                        }, false>;
                    }, false>;
                    weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopSetting, 'weapons', {
                        image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: CoopSupplyWeapon['name'];
                    }, true>;
                    __isCoopSetting: string;
                }, false>;
                startTime: CoopSchedule['startTime'];
            }, true>;
        }, false>;
        teamContestSchedules: /** CoopScheduleConnection */ LinkedFieldType<CoopGroupingSchedule, 'teamContestSchedules', {
            nodes: /** CoopSchedule */ LinkedFieldType<CoopScheduleConnection, 'nodes', {
                endTime: CoopSchedule['endTime'];
                setting: /** unknown type */ LinkedFieldType<CoopSchedule, 'setting', {
                    __typename: string;
                    coopStage: /** CoopStage */ LinkedFieldType<CoopSetting, 'coopStage', {
                        id: CoopStage['id'];
                        image: /** Image */ LinkedFieldType<CoopStage, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: CoopStage['name'];
                        thumbnailImage: /** Image */ LinkedFieldType<CoopStage, 'image', {
                            url: Image['url'];
                        }, false>;
                    }, false>;
                    rule: CoopSetting['rule'];
                    weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopSetting, 'weapons', {
                        image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: CoopSupplyWeapon['name'];
                    }, true>;
                    __isCoopSetting: string;
                }, false>;
                startTime: CoopSchedule['startTime'];
            }, true>;
        }, false>;
    }>;
    currentFest: /** Fest */ OperationFieldType<'StageScheduleQuery', 'currentFest', {
        id: Fest['id'];
        endTime: Fest['endTime'];
        midtermTime: Fest['midtermTime'];
        startTime: Fest['startTime'];
        state: Fest['state'];
        teams: /** FestTeam */ LinkedFieldType<Fest, 'teams', {
            id: FestTeam['id'];
            color: /** Color */ LinkedFieldType<FestTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
            myVoteState: FestTeam['myVoteState'];
        }, true>;
        title: Fest['title'];
        tricolorStage: /** VsStage */ LinkedFieldType<Fest, 'tricolorStage', {
            id: VsStage['id'];
            image: /** Image */ LinkedFieldType<VsStage, 'image', {
                url: Image['url'];
            }, false>;
            name: VsStage['name'];
        }, false>;
    }>;
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'StageScheduleQuery', 'currentPlayer', {
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
    }>;
    eventSchedules: /** LeagueMatchScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'leagueMatchSchedules', {
        nodes: /** LeagueMatchSchedule */ LinkedFieldType<LeagueMatchScheduleConnection, 'nodes', {
            leagueMatchSetting: /** LeagueMatchSetting */ LinkedFieldType<LeagueMatchSchedule, 'leagueMatchSetting', ({
                leagueMatchEvent: /** LeagueMatchEvent */ LinkedFieldType<LeagueMatchSetting, 'leagueMatchEvent', {
                    id: LeagueMatchEvent['id'];
                    desc: LeagueMatchEvent['desc'];
                    leagueMatchEventId: LeagueMatchEvent['leagueMatchEventId'];
                    name: LeagueMatchEvent['name'];
                    regulation: LeagueMatchEvent['regulation'];
                    regulationUrl: LeagueMatchEvent['regulationUrl'];
                }, false>;
                vsStages: /** VsStage */ LinkedFieldType<LeagueMatchSetting, 'vsStages', {
                    id: VsStage['id'];
                    image: /** Image */ LinkedFieldType<VsStage, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: VsStage['name'];
                    vsStageId: VsStage['vsStageId'];
                }, true>;
            }) & (/** VsSetting */ {
                __isVsSetting: 'VsSetting';
                __typename: 'VsSetting';
                vsRule: /** VsRule */ LinkedFieldType<VsSetting, 'vsRule', {
                    id: VsRule['id'];
                    name: VsRule['name'];
                    rule: VsRule['rule'];
                }, false>;
            }) & (/** BankaraMatchSetting */ {
                bankaraMode: BankaraMatchSetting['mode'];
            }) & (/** FestMatchSetting */ {
                festMode: FestMatchSetting['mode'];
            }), false>;
            timePeriods: /** TimePeriod */ LinkedFieldType<LeagueMatchSchedule, 'timePeriods', {
                endTime: TimePeriod['endTime'];
                startTime: TimePeriod['startTime'];
            }, true>;
        }, true>;
    }>;
    festSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            endTime: VsSchedule['endTime'];
            festMatchSettings: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSettings', ({
                __typename: 'FestMatchSetting';
            }) & (/** VsSetting */ {
                __isVsSetting: 'VsSetting';
                vsRule: /** VsRule */ LinkedFieldType<VsSetting, 'vsRule', {
                    id: VsRule['id'];
                    name: VsRule['name'];
                    rule: VsRule['rule'];
                }, false>;
                vsStages: /** VsStage */ LinkedFieldType<VsSetting, 'vsStages', {
                    id: VsStage['id'];
                    image: /** Image */ LinkedFieldType<VsStage, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: VsStage['name'];
                    vsStageId: VsStage['vsStageId'];
                }, true>;
            }) & (/** BankaraMatchSetting */ {
                bankaraMode: BankaraMatchSetting['mode'];
            }) & (/** FestMatchSetting */ {
                festMode: FestMatchSetting['mode'];
            }) & ({
                __typename: 'VsSetting';
            }), true>;
            startTime: VsSchedule['startTime'];
        }, true>;
    }>;
    regularSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            endTime: VsSchedule['endTime'];
            festMatchSettings: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSettings', {
                __typename: 'FestMatchSetting';
            }, true>;
            regularMatchSetting: /** RegularMatchSetting */ LinkedFieldType<VsSchedule, 'regularMatchSetting', ({
            }) & (/** VsSetting */ {
                __isVsSetting: 'VsSetting';
                __typename: 'VsSetting';
                vsRule: /** VsRule */ LinkedFieldType<VsSetting, 'vsRule', {
                    id: VsRule['id'];
                    name: VsRule['name'];
                    rule: VsRule['rule'];
                }, false>;
                vsStages: /** VsStage */ LinkedFieldType<VsSetting, 'vsStages', {
                    id: VsStage['id'];
                    image: /** Image */ LinkedFieldType<VsStage, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: VsStage['name'];
                    vsStageId: VsStage['vsStageId'];
                }, true>;
            }) & (/** BankaraMatchSetting */ {
                bankaraMode: BankaraMatchSetting['mode'];
            }) & (/** FestMatchSetting */ {
                festMode: FestMatchSetting['mode'];
            }), false>;
            startTime: VsSchedule['startTime'];
        }, true>;
    }>;
    vsStages: /** VsStageConnection */ OperationFieldType<'StageScheduleQuery', 'vsStages', {
        nodes: /** VsStage */ LinkedFieldType<VsStageConnection, 'nodes', {
            id: VsStage['id'];
            name: VsStage['name'];
            originalImage: /** Image */ LinkedFieldType<VsStage, 'image', {
                url: Image['url'];
            }, false>;
            stats: /** VsStageRecordStats */ LinkedFieldType<VsStage, 'stats', {
                winRateAr: VsStageRecordStats['winRateAr'];
                winRateCl: VsStageRecordStats['winRateCl'];
                winRateGl: VsStageRecordStats['winRateGl'];
                winRateLf: VsStageRecordStats['winRateLf'];
                winRateTw: VsStageRecordStats['winRateTw'];
            }, false>;
            vsStageId: VsStage['vsStageId'];
        }, true>;
    }>;
    xSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            endTime: VsSchedule['endTime'];
            festMatchSettings: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSettings', {
                __typename: 'FestMatchSetting';
            }, true>;
            startTime: VsSchedule['startTime'];
            xMatchSetting: /** XMatchSetting */ LinkedFieldType<VsSchedule, 'xMatchSetting', ({
            }) & (/** VsSetting */ {
                __isVsSetting: 'VsSetting';
                __typename: 'VsSetting';
                vsRule: /** VsRule */ LinkedFieldType<VsSetting, 'vsRule', {
                    id: VsRule['id'];
                    name: VsRule['name'];
                    rule: VsRule['rule'];
                }, false>;
                vsStages: /** VsStage */ LinkedFieldType<VsSetting, 'vsStages', {
                    id: VsStage['id'];
                    image: /** Image */ LinkedFieldType<VsStage, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: VsStage['name'];
                    vsStageId: VsStage['vsStageId'];
                }, true>;
            }) & (/** BankaraMatchSetting */ {
                bankaraMode: BankaraMatchSetting['mode'];
            }) & (/** FestMatchSetting */ {
                festMode: FestMatchSetting['mode'];
            }), false>;
        }, true>;
    }>;
}

export default StageScheduleQuery_9b6b905;
export { StageScheduleQuery_9b6b905 };
