import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { BankaraMatchSetting, Color, CoopGroupingSchedule, CoopSchedule, CoopScheduleConnection, CoopSetting, CoopStage, CoopSupplyWeapon, CurrentPlayer, Fest, FestTeam, Image, VsRule, VsSchedule, VsScheduleConnection, VsSetting, VsStage, VsStageConnection, VsStageRecordStats } from '../../types.js';

/**
 * df9738cb0fbd533a888feaf21f1e2b14 StageScheduleQuery
 *
 * query StageScheduleQuery
 *
 * Generated 25/01/2023 from SplatNet 3 2.0.0-7070f95e.
 */
interface StageScheduleQuery_df9738c {
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

export default StageScheduleQuery_df9738c;
export { StageScheduleQuery_df9738c };
