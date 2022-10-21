import { PhotoAlbum, PhotoAlbumItem } from './album.js';
import { VsHistoryDetail, VsHistoryGroup, VsPlayer, VsResult, VsTeam, VsTeamResult } from './battles.js';
import { CurrentPlayer, NodeList, VsMode, VsRule } from './common.js';
import { CoopStage, CoopSupplyWeapon } from './coop.js';
import { Fest } from './fest.js';
import { ClothingGear, GearPower, HeadGear, ShoesGear } from './gear.js';
import { BankaraMatchSetting, CoopSchedule, CoopSetting, FestMatchSetting, LeagueMatchSetting, RegularMatchSetting, VsSchedule, XMatchSetting } from './schedules.js';
import { VsStage } from './stage.js';
import { SpecialWeapon, SubWeapon, Weapon } from './weapon.js';

/** c5723d79aab0dbcff9dd8808869544c2ef2bb3a5d882147b6b91386c9718a365 LatestAlbumPhoto */
export interface CoralAndroidWidgetExtensionLatestAlbumPhotoResult {
    photoAlbum: PhotoAlbum_widgetAndroidLatestPhoto;
}

export type PhotoAlbum_widgetAndroidLatestPhoto = Pick<PhotoAlbum, 'nplnUserId'> & {
    items: NodeList<Pick<PhotoAlbumItem, '__typename' | 'photo'>>;
};

/** 23f3cb83d08f46e36a3eced4bffb538a16cfd6ae21799cc8fb54909fa2962706 LatestVsResults */
export interface CoralAndroidWidgetExtensionLatestVsResultsResult {
    vsResult: VsResult_widgetAndroidLatestResults;
}

export type VsResult_widgetAndroidLatestResults = Pick<VsResult, never> & {
    historyGroups: NodeList<VsHistoryGroup_widgetAndroidLatestResults>;
};
export type VsHistoryGroup_widgetAndroidLatestResults = Pick<VsHistoryGroup, never> & {
    historyDetails: NodeList<VsHistoryDetail_widgetAndroidLatestResults>;
};
export type VsHistoryDetail_widgetAndroidLatestResults = Pick<VsHistoryDetail, '__typename' | 'id' | 'judgement' | 'knockout'> & {
    vsMode: Pick<VsMode, 'name' | 'mode'>;
    vsRule: Pick<VsRule, 'name'>;
    vsStage: Pick<VsStage, 'name'>;
    player: VsPlayer_widgetAndroidLatestResults;
    myTeam: VsTeam_widgetAndroidLatestResults;
};
export type VsPlayer_widgetAndroidLatestResults = Pick<VsPlayer, never> & {
    weapon: Pick<Weapon, 'image'>;
};
export type VsTeam_widgetAndroidLatestResults = Pick<VsTeam, never> & {
    result: Pick<VsTeamResult, 'score' | 'paintPoint'>;
};

/** fb86e1a8d5845b7d7408b3e8074cd19bd9277970da8e21ffb869de6513ea99aa StageSchedules */
export interface CoralAndroidWidgetExtensionStageSchedulesResult {
    vsSchedules: NodeList<VsSchedule_widgetAndroidSchedules>;
    coopSchedules: NodeList<CoopSchedule_widgetAndroidSchedules>;
    currentPlayer: CurrentPlayer_widgetAndroidSchedules;
    currentFest: Pick<Fest, unknown & never> | null;
}

export type VsSchedule_widgetAndroidSchedules = Pick<VsSchedule, '__typename' | 'startTime' | 'endTime'> & {
    regularMatchSetting: RegularMatchSetting_widgetAndroidSchedules | null;
    /** BankaraMatchSetting_widgetSchedules does not include the BankaraMatchMode - the app just assumes the first is CHALLENGE and second is OPEN */
    bankaraMatchSettings: BankaraMatchSetting_widgetAndroidSchedules[] | null;
    xMatchSetting: XMatchSetting_widgetAndroidSchedules | null;
    leagueMatchSetting: LeagueMatchSetting_widgetAndroidSchedules | null;
    festMatchSetting: FestMatchSetting_widgetAndroidSchedules | null;
};

export type RegularMatchSetting_widgetAndroidSchedules = Pick<RegularMatchSetting, never> & {
    vsStages: VsStage_widgetAndroidSchedules[];
};
export type BankaraMatchSetting_widgetAndroidSchedules = Pick<BankaraMatchSetting, never> & {
    vsStages: VsStage_widgetAndroidSchedules[];
    vsRule: Pick<VsRule, '__typename' | 'name'>;
};
export type XMatchSetting_widgetAndroidSchedules = Pick<XMatchSetting, never> & {
    vsStages: VsStage_widgetAndroidSchedules[];
    vsRule: Pick<VsRule, '__typename' | 'name'>;
};
export type LeagueMatchSetting_widgetAndroidSchedules = Pick<LeagueMatchSetting, never> & {
    vsStages: VsStage_widgetAndroidSchedules[];
    vsRule: Pick<VsRule, '__typename' | 'name'>;
};
export type FestMatchSetting_widgetAndroidSchedules = Pick<FestMatchSetting, never> & {
    vsStages: VsStage_widgetAndroidSchedules[];
    // ...
};

export type VsStage_widgetAndroidSchedules = Pick<VsStage, '__typename' | 'id' | 'name' | 'image'>;

export type CoopSchedule_widgetAndroidSchedules = Pick<CoopSchedule, '__typename' | 'startTime' | 'endTime'> & {
    setting: CoopSetting_widgetAndroidSchedules | null;
};
export type CoopSetting_widgetAndroidSchedules = Pick<CoopSetting, 'rule'> & {
    coopStage: Pick<CoopStage, '__typename' | 'id' | 'name' | 'image'>;
    weapons: Pick<CoopSupplyWeapon, '__typename' | 'image'>[];
};

export type CurrentPlayer_widgetAndroidSchedules = Pick<CurrentPlayer, '__typename'> & {
    weapon: Pick<Weapon, 'image'> & {
        subWeapon: Pick<SubWeapon, 'image'>;
        specialWeapon: Pick<SpecialWeapon, 'image'>;
    };
    headGear: CurrentPlayer_widgetAndroidSchedules_Gear<HeadGear>;
    clothingGear: CurrentPlayer_widgetAndroidSchedules_Gear<ClothingGear>;
    shoesGear: CurrentPlayer_widgetAndroidSchedules_Gear<ShoesGear>;
};
type CurrentPlayer_widgetAndroidSchedules_Gear<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__typename' | 'image'> & {
    primaryGearPower: Pick<GearPower, 'image'>;
    additionalGearPowers: Pick<GearPower, 'image'>[];
};
