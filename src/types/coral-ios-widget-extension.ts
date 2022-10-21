import { PhotoAlbum, PhotoAlbumItem } from './album.js';
import { VsHistoryDetail, VsHistoryGroup, VsPlayer, VsResult, VsTeam, VsTeamResult } from './battles.js';
import { CurrentPlayer, Image, NodeList, VsMode, VsRule } from './common.js';
import { Fest } from './fest.js';
import { Brand, ClothingGear, GearPower, HeadGear, ShoesGear } from './gear.js';
import { BankaraMatchSetting, FestMatchSetting, LeagueMatchSetting, RegularMatchSetting, VsSchedule, XMatchSetting } from './schedules.js';
import { VsStage } from './stage.js';
import { SpecialWeapon, SubWeapon, Weapon } from './weapon.js';

/** 6415729605742e57e4f627db2a5714ba38da0992ec91133b243bf517cd905369 CurrentEquipment */
export interface CoralWidgetExtensionCurrentEquipmentResult {
    currentPlayer: CurrentPlayer_widgetEquipment;
}

export type CurrentPlayer_widgetEquipment = Pick<CurrentPlayer, '__typename'> & {
    weapon: Weapon_widgetEquipment;
    headGear: HeadGear_widgetEquipment;
    clothingGear: ClothingGear_widgetEquipment;
    shoesGear: ShoesGear_widgetEquipment;
};
export type Weapon_widgetEquipment = Pick<Weapon, '__typename' | 'name'> & {
    image: Pick<Image, '__typename' | 'url'>;
    subWeapon: SubWeapon_widgetEquipment;
    specialWeapon: SpecialWeapon_widgetEquipment;
};
export type SubWeapon_widgetEquipment = Pick<SubWeapon, '__typename' | 'name'> & {
    image: Pick<Image, '__typename' | 'url'>;
};
export type SpecialWeapon_widgetEquipment = Pick<SpecialWeapon, '__typename' | 'name'> & {
    image: Pick<Image, '__typename' | 'url'>;
};
export type HeadGear_widgetEquipment = Pick<HeadGear, '__typename' | 'name' | 'rarity'> & {
    image: Pick<Image, '__typename' | 'url'>;
    brand: Brand_widgetEquipment;
    primaryGearPower: GearPower_widgetEquipment;
    additionalGearPowers: GearPower_widgetEquipment[];
};
export type ClothingGear_widgetEquipment = Pick<ClothingGear, '__typename' | 'name' | 'rarity'> & {
    image: Pick<Image, '__typename' | 'url'>;
    brand: Brand_widgetEquipment;
    primaryGearPower: GearPower_widgetEquipment;
    additionalGearPowers: GearPower_widgetEquipment[];
};
export type ShoesGear_widgetEquipment = Pick<ShoesGear, '__typename' | 'name' | 'rarity'> & {
    image: Pick<Image, '__typename' | 'url'>;
    brand: Brand_widgetEquipment;
    primaryGearPower: GearPower_widgetEquipment;
    additionalGearPowers: GearPower_widgetEquipment[];
};
export type Brand_widgetEquipment = Pick<Brand, '__typename'> & {
    image: Pick<Image, '__typename' | 'url'>;
};
export type GearPower_widgetEquipment = Pick<GearPower, '__typename' | 'name'> & {
    image: Pick<Image, '__typename' | 'url'>;
};

/** f5131603b235edce2218e71c27ed0d35610cb78c48bb44aa88e98fb37ab08cd0 VsSchedules */
export interface CoralWidgetExtensionVsSchedulesResult {
    vsSchedules: {
        __typename: 'VsScheduleConnection';
    } & NodeList<VsSchedule_widgetSchedules>;
    currentFest: Pick<Fest, unknown & never> | null;
}

export type VsSchedule_widgetSchedules = Pick<VsSchedule, '__typename' | 'startTime' | 'endTime'> & {
    regularMatchSetting: RegularMatchSetting_widgetSchedules | null;
    /** BankaraMatchSetting_widgetSchedules does not include the BankaraMatchMode - the app just assumes the first is CHALLENGE and second is OPEN */
    bankaraMatchSettings: BankaraMatchSetting_widgetSchedules[] | null;
    xMatchSetting: XMatchSetting_widgetSchedules | null;
    leagueMatchSetting: LeagueMatchSetting_widgetSchedules | null;
    festMatchSetting: FestMatchSetting_widgetSchedules | null;
};

export type RegularMatchSetting_widgetSchedules = Pick<RegularMatchSetting, '__typename'> & {
    vsStages: VsStage_widgetSchedules[];
};
export type BankaraMatchSetting_widgetSchedules = Pick<BankaraMatchSetting, '__typename'> & {
    vsStages: VsStage_widgetSchedules[];
    vsRule: Pick<VsRule, '__typename' | 'name'>;
};
export type XMatchSetting_widgetSchedules = Pick<XMatchSetting, '__typename'> & {
    vsStages: VsStage_widgetSchedules[];
    vsRule: Pick<VsRule, '__typename' | 'name'>;
};
export type LeagueMatchSetting_widgetSchedules = Pick<LeagueMatchSetting, '__typename'> & {
    vsStages: VsStage_widgetSchedules[];
    vsRule: Pick<VsRule, '__typename' | 'name'>;
};
export type FestMatchSetting_widgetSchedules = Pick<FestMatchSetting, '__typename'> & {
    vsStages: VsStage_widgetSchedules[];
    // ...
};

export type VsStage_widgetSchedules = Pick<VsStage, '__typename' | 'id' | 'name'> & {
    image: Pick<Image, '__typename' | 'url'>;
};

/** f5131603b235edce2218e71c27ed0d35610cb78c48bb44aa88e98fb37ab08cd0 VsSchedules variables */
export interface CoralWidgetExtensionVsSchedulesVariables {
    /** Always 6 in 2.3.0/2.3.1 */
    first: number;
}

/** 0a6c7ae9561aa05559ab66f4a8c0399b79c134bba682451e8180b895b92b0698 LatestAlbumPhoto */
export interface CoralWidgetExtensionLatestAlbumPhotoResult {
    photoAlbum: PhotoAlbum_widgetLatestPhoto;
}

export type PhotoAlbum_widgetLatestPhoto = Pick<PhotoAlbum, '__typename' | 'nplnUserId'> & {
    items: {
        __typename: 'PhotoAlbumItemConnection';
    } & NodeList<PhotoAlbumItem_widgetLatestPhoto>;
};
export type PhotoAlbumItem_widgetLatestPhoto = Pick<PhotoAlbumItem, '__typename'> & {
    photo: Pick<Image, '__typename' | 'url'>;
};

/** d167126ea863c00e3472fb3c2e9d9fbc37304d6168cd736e98c490288124f390 LatestVsResults */
export interface CoralWidgetExtensionLatestVsResultsResult {
    vsResult: VsResult_widgetLatestResults;
}

export type VsResult_widgetLatestResults = Pick<VsResult, '__typename'> & {
    historyGroups: {
        __typename: 'VsHistoryGroupConnection';
    } & NodeList<VsHistoryGroup_widgetLatestResults>;
};
export type VsHistoryGroup_widgetLatestResults = Pick<VsHistoryGroup, '__typename'> & {
    historyDetails: {
        __typename: 'VsHistoryDetailConnection';
    } & NodeList<VsHistoryDetail_widgetLatestResults>;
};
export type VsHistoryDetail_widgetLatestResults = Pick<VsHistoryDetail, '__typename' | 'id' | 'judgement' | 'knockout'> & {
    vsMode: Pick<VsMode, '__typename' | 'mode'>;
    vsRule: Pick<VsRule, '__typename' | 'name'>;
    vsStage: Pick<VsStage, '__typename' | 'name'>;
    player: VsPlayer_widgetLatestResults;
    myTeam: VsTeam_widgetLatestResults;
};
export type VsPlayer_widgetLatestResults = Pick<VsPlayer, '__typename'> & {
    weapon: Weapon_widgetLatestResults;
};
export type Weapon_widgetLatestResults = Pick<Weapon, '__typename'> & {
    image: Pick<Image, '__typename' | 'url'>;
};
export type VsTeam_widgetLatestResults = Pick<VsTeam, '__typename'> & {
    result: Pick<VsTeamResult, '__typename' | 'score' | 'paintPoint'>;
};
