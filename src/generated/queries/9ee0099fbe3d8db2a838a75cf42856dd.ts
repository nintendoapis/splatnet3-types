import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Award, Badge, BankaraMatchHistory, BankaraMatchPower, Brand, ClothingGear, Color, FestMatchHistory, Gear, GearPower, HeadGear, Image, LeagueMatchEvent, LeagueMatchHistory, MaskingImage, Nameplate, NameplateBackground, Player, ShoesGear, SpecialWeapon, SubWeapon, VsHistoryDetail, VsMode, VsPlayer, VsPlayerResult, VsRule, VsStage, VsTeam, VsTeamResult, Weapon, XMatchHistory } from '../../types.js';

/**
 * 9ee0099fbe3d8db2a838a75cf42856dd VsHistoryDetailQuery
 *
 * query VsHistoryDetailQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface VsHistoryDetailQuery_9ee0099 {
    vsHistoryDetail: /** unknown type */ OperationFieldType<'VsHistoryDetailQuery', 'node', ({
        __typename: string;
        id: VsHistoryDetail['id'];
    }) & (/** VsHistoryDetail */ {
        awards: /** Award */ LinkedFieldType<VsHistoryDetail, 'awards', {
            name: Award['name'];
            rank: Award['rank'];
        }, true>;
        bankaraMatch: /** BankaraMatchHistory */ LinkedFieldType<VsHistoryDetail, 'bankaraMatch', {
            bankaraPower: /** BankaraMatchPower */ LinkedFieldType<BankaraMatchHistory, 'bankaraPower', {
                power: BankaraMatchPower['power'];
            }, false>;
            earnedUdemaePoint: BankaraMatchHistory['earnedUdemaePoint'];
            mode: BankaraMatchHistory['mode'];
        }, false>;
        duration: VsHistoryDetail['duration'];
        festMatch: /** FestMatchHistory */ LinkedFieldType<VsHistoryDetail, 'festMatch', {
            contribution: FestMatchHistory['contribution'];
            dragonMatchType: FestMatchHistory['dragonMatchType'];
            jewel: FestMatchHistory['jewel'];
            myFestPower: FestMatchHistory['myFestPower'];
        }, false>;
        judgement: VsHistoryDetail['judgement'];
        knockout: VsHistoryDetail['knockout'];
        leagueMatch: /** LeagueMatchHistory */ LinkedFieldType<VsHistoryDetail, 'leagueMatch', {
            leagueMatchEvent: /** LeagueMatchEvent */ LinkedFieldType<LeagueMatchHistory, 'leagueMatchEvent', {
                id: LeagueMatchEvent['id'];
                name: LeagueMatchEvent['name'];
            }, false>;
            myLeaguePower: LeagueMatchHistory['myLeaguePower'];
        }, false>;
        myTeam: /** VsTeam */ LinkedFieldType<VsHistoryDetail, 'myTeam', {
            color: /** Color */ LinkedFieldType<VsTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
            festStreakWinCount: VsTeam['festStreakWinCount'];
            festTeamName: VsTeam['festTeamName'];
            festUniformBonusRate: VsTeam['festUniformBonusRate'];
            festUniformName: VsTeam['festUniformName'];
            judgement: VsTeam['judgement'];
            order: VsTeam['order'];
            players: /** VsPlayer */ LinkedFieldType<VsTeam, 'players', ({
                id: VsPlayer['id'];
                byname: VsPlayer['byname'];
                clothingGear: /** ClothingGear */ LinkedFieldType<VsPlayer, 'clothingGear', ({
                    name: ClothingGear['name'];
                    thumbnailImage: /** Image */ LinkedFieldType<ClothingGear, 'image', {
                        url: Image['url'];
                    }, false>;
                }) & (/** Gear */ {
                    __isGear: 'Gear';
                    additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                        id: Brand['id'];
                        image: /** Image */ LinkedFieldType<Brand, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Brand['name'];
                        usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                            desc: GearPower['desc'];
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            isEmptySlot: GearPower['isEmptySlot'];
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
                    originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                        url: Image['url'];
                    }, false>;
                    primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }), false>;
                crown: VsPlayer['crown'];
                festDragonCert: VsPlayer['festDragonCert'];
                headGear: /** HeadGear */ LinkedFieldType<VsPlayer, 'headGear', ({
                    name: HeadGear['name'];
                    thumbnailImage: /** Image */ LinkedFieldType<HeadGear, 'image', {
                        url: Image['url'];
                    }, false>;
                }) & (/** Gear */ {
                    __isGear: 'Gear';
                    additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                        id: Brand['id'];
                        image: /** Image */ LinkedFieldType<Brand, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Brand['name'];
                        usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                            desc: GearPower['desc'];
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            isEmptySlot: GearPower['isEmptySlot'];
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
                    originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                        url: Image['url'];
                    }, false>;
                    primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }), false>;
                isMyself: VsPlayer['isMyself'];
                name: VsPlayer['name'];
                paint: VsPlayer['paint'];
                result: /** VsPlayerResult */ LinkedFieldType<VsPlayer, 'result', {
                    assist: VsPlayerResult['assist'];
                    death: VsPlayerResult['death'];
                    kill: VsPlayerResult['kill'];
                    noroshiTry: VsPlayerResult['noroshiTry'];
                    special: VsPlayerResult['special'];
                }, false>;
                shoesGear: /** ShoesGear */ LinkedFieldType<VsPlayer, 'shoesGear', ({
                    name: ShoesGear['name'];
                    thumbnailImage: /** Image */ LinkedFieldType<ShoesGear, 'image', {
                        url: Image['url'];
                    }, false>;
                }) & (/** Gear */ {
                    __isGear: 'Gear';
                    additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                        id: Brand['id'];
                        image: /** Image */ LinkedFieldType<Brand, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Brand['name'];
                        usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                            desc: GearPower['desc'];
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            isEmptySlot: GearPower['isEmptySlot'];
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
                    originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                        url: Image['url'];
                    }, false>;
                    primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }), false>;
                species: VsPlayer['species'];
                weapon: /** Weapon */ LinkedFieldType<VsPlayer, 'weapon', {
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
                        maskingImage: /** MaskingImage */ LinkedFieldType<SpecialWeapon, 'maskingImage', {
                            height: MaskingImage['height'];
                            maskImageUrl: MaskingImage['maskImageUrl'];
                            overlayImageUrl: MaskingImage['overlayImageUrl'];
                            width: MaskingImage['width'];
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
            }), true>;
            result: /** VsTeamResult */ LinkedFieldType<VsTeam, 'result', {
                noroshi: VsTeamResult['noroshi'];
                paintRatio: VsTeamResult['paintRatio'];
                score: VsTeamResult['score'];
            }, false>;
            tricolorRole: VsTeam['tricolorRole'];
        }, false>;
        nextHistoryDetail: /** VsHistoryDetail */ LinkedFieldType<VsHistoryDetail, 'nextHistoryDetail', {
            id: VsHistoryDetail['id'];
        }, false>;
        otherTeams: /** VsTeam */ LinkedFieldType<VsHistoryDetail, 'otherTeams', {
            color: /** Color */ LinkedFieldType<VsTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
            festStreakWinCount: VsTeam['festStreakWinCount'];
            festTeamName: VsTeam['festTeamName'];
            festUniformName: VsTeam['festUniformName'];
            judgement: VsTeam['judgement'];
            order: VsTeam['order'];
            players: /** VsPlayer */ LinkedFieldType<VsTeam, 'players', ({
                id: VsPlayer['id'];
                byname: VsPlayer['byname'];
                clothingGear: /** ClothingGear */ LinkedFieldType<VsPlayer, 'clothingGear', ({
                    name: ClothingGear['name'];
                    thumbnailImage: /** Image */ LinkedFieldType<ClothingGear, 'image', {
                        url: Image['url'];
                    }, false>;
                }) & (/** Gear */ {
                    __isGear: 'Gear';
                    additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                        id: Brand['id'];
                        image: /** Image */ LinkedFieldType<Brand, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Brand['name'];
                        usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                            desc: GearPower['desc'];
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            isEmptySlot: GearPower['isEmptySlot'];
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
                    originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                        url: Image['url'];
                    }, false>;
                    primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }), false>;
                crown: VsPlayer['crown'];
                festDragonCert: VsPlayer['festDragonCert'];
                headGear: /** HeadGear */ LinkedFieldType<VsPlayer, 'headGear', ({
                    name: HeadGear['name'];
                    thumbnailImage: /** Image */ LinkedFieldType<HeadGear, 'image', {
                        url: Image['url'];
                    }, false>;
                }) & (/** Gear */ {
                    __isGear: 'Gear';
                    additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                        id: Brand['id'];
                        image: /** Image */ LinkedFieldType<Brand, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Brand['name'];
                        usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                            desc: GearPower['desc'];
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            isEmptySlot: GearPower['isEmptySlot'];
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
                    originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                        url: Image['url'];
                    }, false>;
                    primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }), false>;
                isMyself: VsPlayer['isMyself'];
                name: VsPlayer['name'];
                paint: VsPlayer['paint'];
                result: /** VsPlayerResult */ LinkedFieldType<VsPlayer, 'result', {
                    assist: VsPlayerResult['assist'];
                    death: VsPlayerResult['death'];
                    kill: VsPlayerResult['kill'];
                    noroshiTry: VsPlayerResult['noroshiTry'];
                    special: VsPlayerResult['special'];
                }, false>;
                shoesGear: /** ShoesGear */ LinkedFieldType<VsPlayer, 'shoesGear', ({
                    name: ShoesGear['name'];
                    thumbnailImage: /** Image */ LinkedFieldType<ShoesGear, 'image', {
                        url: Image['url'];
                    }, false>;
                }) & (/** Gear */ {
                    __isGear: 'Gear';
                    additionalGearPowers: /** GearPower */ LinkedFieldType<Gear, 'additionalGearPowers', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, true>;
                    brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                        id: Brand['id'];
                        image: /** Image */ LinkedFieldType<Brand, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Brand['name'];
                        usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                            desc: GearPower['desc'];
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            isEmptySlot: GearPower['isEmptySlot'];
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
                    originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                        url: Image['url'];
                    }, false>;
                    primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }), false>;
                species: VsPlayer['species'];
                weapon: /** Weapon */ LinkedFieldType<VsPlayer, 'weapon', {
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
                        maskingImage: /** MaskingImage */ LinkedFieldType<SpecialWeapon, 'maskingImage', {
                            height: MaskingImage['height'];
                            maskImageUrl: MaskingImage['maskImageUrl'];
                            overlayImageUrl: MaskingImage['overlayImageUrl'];
                            width: MaskingImage['width'];
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
            }), true>;
            result: /** VsTeamResult */ LinkedFieldType<VsTeam, 'result', {
                noroshi: VsTeamResult['noroshi'];
                paintRatio: VsTeamResult['paintRatio'];
                score: VsTeamResult['score'];
            }, false>;
            tricolorRole: VsTeam['tricolorRole'];
        }, true>;
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
                brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                    id: Brand['id'];
                    image: /** Image */ LinkedFieldType<Brand, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Brand['name'];
                    usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                        desc: GearPower['desc'];
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        isEmptySlot: GearPower['isEmptySlot'];
                        name: GearPower['name'];
                    }, false>;
                }, false>;
                originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                    url: Image['url'];
                }, false>;
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
                brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                    id: Brand['id'];
                    image: /** Image */ LinkedFieldType<Brand, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Brand['name'];
                    usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                        desc: GearPower['desc'];
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        isEmptySlot: GearPower['isEmptySlot'];
                        name: GearPower['name'];
                    }, false>;
                }, false>;
                originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                    url: Image['url'];
                }, false>;
                primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, false>;
            }), false>;
            paint: VsPlayer['paint'];
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
                brand: /** Brand */ LinkedFieldType<Gear, 'brand', {
                    id: Brand['id'];
                    image: /** Image */ LinkedFieldType<Brand, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Brand['name'];
                    usualGearPower: /** GearPower */ LinkedFieldType<Brand, 'usualGearPower', {
                        desc: GearPower['desc'];
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        isEmptySlot: GearPower['isEmptySlot'];
                        name: GearPower['name'];
                    }, false>;
                }, false>;
                originalImage: /** Image */ LinkedFieldType<Gear, 'image', {
                    url: Image['url'];
                }, false>;
                primaryGearPower: /** GearPower */ LinkedFieldType<Gear, 'primaryGearPower', {
                    image: /** Image */ LinkedFieldType<GearPower, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: GearPower['name'];
                }, false>;
            }), false>;
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
            rule: VsRule['rule'];
        }, false>;
        vsStage: /** VsStage */ LinkedFieldType<VsHistoryDetail, 'vsStage', {
            id: VsStage['id'];
            image: /** Image */ LinkedFieldType<VsStage, 'image', {
                url: Image['url'];
            }, false>;
            name: VsStage['name'];
        }, false>;
        xMatch: /** XMatchHistory */ LinkedFieldType<VsHistoryDetail, 'xMatch', {
            lastXPower: XMatchHistory['lastXPower'];
        }, false>;
    }) & ({
        __typename: 'VsHistoryDetail';
    })>;
}

export default VsHistoryDetailQuery_9ee0099;
export { VsHistoryDetailQuery_9ee0099 };
