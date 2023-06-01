import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Badge, Color, Image, LeagueMatchEvent, LeagueMatchRankingDetail, LeagueMatchRankingDetailConnection, LeagueMatchRankingPlayer, LeagueMatchRankingTeam, LeagueMatchRankingTimePeriod, LeagueMatchSetting, Nameplate, NameplateBackground, Player, SpecialWeapon, SubWeapon, VsRule, VsStage, Weapon } from '../types.js';

/**
 * cdf4ffe56864817014e59c569ec8630f EventMatchRankingPeriodQuery
 *
 * query EventMatchRankingPeriodQuery
 *
 * Generated 01/06/2023 from SplatNet 3 4.0.0-e2ee936d.
 */
interface EventMatchRankingPeriodQuery_cdf4ffe {
    rankingPeriod: /** unknown type */ OperationFieldType<'EventMatchRankingPeriodQuery', 'node', ({
        __typename: string;
        id: UnknownScalarType | null;
    }) & (/** LeagueMatchRankingTimePeriod */ {
        endTime: LeagueMatchRankingTimePeriod['endTime'];
        leagueMatchSetting: /** LeagueMatchSetting */ LinkedFieldType<LeagueMatchRankingTimePeriod, 'leagueMatchSetting', {
            leagueMatchEvent: /** LeagueMatchEvent */ LinkedFieldType<LeagueMatchSetting, 'leagueMatchEvent', {
                id: LeagueMatchEvent['id'];
                desc: LeagueMatchEvent['desc'];
                name: LeagueMatchEvent['name'];
                regulation: LeagueMatchEvent['regulation'];
                regulationUrl: LeagueMatchEvent['regulationUrl'];
            }, false>;
            vsRule: /** VsRule */ LinkedFieldType<LeagueMatchSetting, 'vsRule', {
                id: VsRule['id'];
                name: VsRule['name'];
                rule: VsRule['rule'];
            }, false>;
            vsStages: /** VsStage */ LinkedFieldType<LeagueMatchSetting, 'vsStages', {
                id: VsStage['id'];
                image: /** Image */ LinkedFieldType<VsStage, 'image', {
                    url: Image['url'];
                }, false>;
                name: VsStage['name'];
            }, true>;
        }, false>;
        startTime: LeagueMatchRankingTimePeriod['startTime'];
        teams: /** LeagueMatchRankingTeam */ LinkedFieldType<LeagueMatchRankingTimePeriod, 'teams', {
            id: LeagueMatchRankingTeam['id'];
            details: /** LeagueMatchRankingDetailConnection */ LinkedFieldType<LeagueMatchRankingTeam, 'details', {
                nodes: /** LeagueMatchRankingDetail */ LinkedFieldType<LeagueMatchRankingDetailConnection, 'nodes', {
                    id: LeagueMatchRankingDetail['id'];
                    players: /** LeagueMatchRankingPlayer */ LinkedFieldType<LeagueMatchRankingDetail, 'players', ({
                        id: LeagueMatchRankingPlayer['id'];
                        name: LeagueMatchRankingPlayer['name'];
                        nameId: LeagueMatchRankingPlayer['nameId'];
                        weapon: /** Weapon */ LinkedFieldType<LeagueMatchRankingPlayer, 'weapon', {
                            id: Weapon['id'];
                            image: /** Image */ LinkedFieldType<Weapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            image2d: /** Image */ LinkedFieldType<Weapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            image2dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            image3d: /** Image */ LinkedFieldType<Weapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            image3dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: Weapon['name'];
                            specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                                id: SpecialWeapon['id'];
                                image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                name: SpecialWeapon['name'];
                            }, false>;
                            subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                                id: SubWeapon['id'];
                                image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                                    url: Image['url'];
                                }, false>;
                                name: SubWeapon['name'];
                            }, false>;
                        }, false>;
                    }) & (/** Player */ {
                        __isPlayer: 'Player';
                        byname: Player['byname'];
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
                    }), true>;
                    power: LeagueMatchRankingDetail['power'];
                    rank: LeagueMatchRankingDetail['rank'];
                }, true>;
            }, false>;
            teamComposition: LeagueMatchRankingTeam['teamComposition'];
        }, true>;
    }) & ({
        __typename: 'LeagueMatchRankingTimePeriod';
    })>;
}

export default EventMatchRankingPeriodQuery_cdf4ffe;
export { EventMatchRankingPeriodQuery_cdf4ffe };
