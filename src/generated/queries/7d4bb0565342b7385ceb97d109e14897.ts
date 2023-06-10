import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { BankaraMatchSetting, Color, CoopGroupingSchedule, CoopSchedule, CoopScheduleConnection, CoopSetting, CoopStage, CoopSupplyWeapon, CurrentPlayer, Fest, FestTeam, Image, VsRule, VsSchedule, VsScheduleConnection, VsSetting, VsStage, VsStageConnection, VsStageRecordStats } from '../../types.js';

/**
 * 7d4bb0565342b7385ceb97d109e14897 StageScheduleQuery
 *
 * query StageScheduleQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5644e7a2.
 */
interface StageScheduleQuery_7d4bb05 {
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
                mode: BankaraMatchSetting['mode'];
            }), true>;
            endTime: VsSchedule['endTime'];
            festMatchSetting: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSetting', {
                __typename: 'FestMatchSetting';
            }, false>;
            startTime: VsSchedule['startTime'];
        }, true>;
    }>;
    coopGroupingSchedule: /** CoopGroupingSchedule */ OperationFieldType<'StageScheduleQuery', 'coopGroupingSchedule', {
        bigRunSchedules: /** CoopScheduleConnection */ LinkedFieldType<CoopGroupingSchedule, 'bigRunSchedules', {
            nodes: /** CoopSchedule */ LinkedFieldType<CoopScheduleConnection, 'nodes', {
                endTime: CoopSchedule['endTime'];
                setting: /** unknown type */ LinkedFieldType<CoopSchedule, 'setting', {
                    __typename: string;
                    coopStage: /** CoopStage */ LinkedFieldType<CoopSetting, 'coopStage', {
                        id: CoopStage['id'];
                        coopStageId: CoopStage['coopStageId'];
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
                        coopStageId: CoopStage['coopStageId'];
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
            role: FestTeam['role'];
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
    festSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            endTime: VsSchedule['endTime'];
            festMatchSetting: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSetting', ({
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
                mode: BankaraMatchSetting['mode'];
            }), false>;
            startTime: VsSchedule['startTime'];
        }, true>;
    }>;
    leagueSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            endTime: VsSchedule['endTime'];
            festMatchSetting: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSetting', {
                __typename: 'FestMatchSetting';
            }, false>;
            leagueMatchSetting: /** LeagueMatchSetting */ LinkedFieldType<VsSchedule, 'leagueMatchSetting', ({
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
                mode: BankaraMatchSetting['mode'];
            }), false>;
            startTime: VsSchedule['startTime'];
        }, true>;
    }>;
    regularSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            endTime: VsSchedule['endTime'];
            festMatchSetting: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSetting', {
                __typename: 'FestMatchSetting';
            }, false>;
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
                mode: BankaraMatchSetting['mode'];
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
            stageId: VsStage['vsStageId'];
            stats: /** VsStageRecordStats */ LinkedFieldType<VsStage, 'stats', {
                winRateAr: VsStageRecordStats['winRateAr'];
                winRateCl: VsStageRecordStats['winRateCl'];
                winRateGl: VsStageRecordStats['winRateGl'];
                winRateLf: VsStageRecordStats['winRateLf'];
            }, false>;
            vsStageId: VsStage['vsStageId'];
        }, true>;
    }>;
    xSchedules: /** VsScheduleConnection */ OperationFieldType<'StageScheduleQuery', 'vsSchedules', {
        nodes: /** VsSchedule */ LinkedFieldType<VsScheduleConnection, 'nodes', {
            endTime: VsSchedule['endTime'];
            festMatchSetting: /** FestMatchSetting */ LinkedFieldType<VsSchedule, 'festMatchSetting', {
                __typename: 'FestMatchSetting';
            }, false>;
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
                mode: BankaraMatchSetting['mode'];
            }), false>;
        }, true>;
    }>;
}

export default StageScheduleQuery_7d4bb05;
export { StageScheduleQuery_7d4bb05 };
