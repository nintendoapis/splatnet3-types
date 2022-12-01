import { ClothingGear_vsPlayer, ClothingGear_vsPlayerSelf, HeadGear_vsPlayer, HeadGear_vsPlayerSelf, ShoesGear_vsPlayer, ShoesGear_vsPlayerSelf, VsHistoryDetail, VsPlayer, VsTeam, VsTeamResult } from './battles.js';
import { Image } from './common.js';
import { Brand, ClothingGear, HeadGear, ShoesGear } from './gear.js';
import { SpecialWeapon, SubWeapon, Weapon } from './weapon.js';

/** 291295ad311b99a6288fc95a5c4cb2d2 VsHistoryDetailQuery */
export interface VsHistoryDetailResult {
    vsHistoryDetail: VsHistoryDetail_result | null;
}

export type VsHistoryDetail_result = Pick<VsHistoryDetail, '__typename' | 'id' | 'vsRule' | 'vsMode' | 'judgement' | 'vsStage' | 'festMatch' | 'knockout' | 'bankaraMatch' | 'xMatch' | 'duration' | 'playedTime' | 'awards' | 'leagueMatch' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    player: VsPlayer_result;
    myTeam: VsTeam_resultMyTeam;
    otherTeams: VsTeam_result[];
};
export type VsPlayer_result = Pick<VsPlayer, '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'nameplate' | 'paint'> & {
    headGear: HeadGear_vsPlayerSelf;
    clothingGear: ClothingGear_vsPlayerSelf;
    shoesGear: ShoesGear_vsPlayerSelf;
};

export type VsTeam_result = Pick<VsTeam, 'color' | 'judgement' | 'tricolorRole' | 'festTeamName' | 'festUniformName' | 'festStreakWinCount' | 'order'> & {
    result: Pick<VsTeamResult, 'paintRatio' | 'score' | 'noroshi'> | null;
    players: VsPlayer_result_VsTeam[];
};
export type VsTeam_resultMyTeam = Pick<VsTeam, 'color' | 'judgement' | 'tricolorRole' | 'festTeamName' | 'festUniformName' | 'festUniformBonusRate' | 'festStreakWinCount' | 'order'> & {
    result: Pick<VsTeamResult, 'paintRatio' | 'score' | 'noroshi'> | null;
    players: VsPlayer_result_VsTeam[];
};
export type VsPlayer_result_VsTeam = Pick<VsPlayer, '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'isMyself' | 'species' | 'nameplate' | 'paint' | 'result' | 'crown' | 'festDragonCert'> & {
    weapon: Weapon_result_VsTeam;
    headGear: HeadGear_vsPlayer;
    clothingGear: ClothingGear_vsPlayer;
    shoesGear: ShoesGear_vsPlayer;
};
export type Weapon_result_VsTeam = Pick<Weapon, 'id' | 'name' | 'image'> & {
    subWeapon: Pick<SubWeapon, 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image' | 'maskingImage'>;
    image3d: Pick<Image, 'url'>;
    image2d: Pick<Image, 'url'>;
    image3dThumbnail: Pick<Image, 'url'>;
    image2dThumbnail: Pick<Image, 'url'>;
};

/** 291295ad311b99a6288fc95a5c4cb2d2 VsHistoryDetailQuery variables */
export interface VsHistoryDetailVariables {
    vsResultId: string;
}

/** 2b085984f729cd51938fc069ceef784a VsHistoryDetailQuery */
export interface VsHistoryDetailResult_2b08598 {
    vsHistoryDetail: VsHistoryDetail_result_2b08598 | null;
}

export type VsHistoryDetail_result_2b08598 = Pick<VsHistoryDetail, '__typename' | 'id' | 'vsRule' | 'vsMode' | 'judgement' | 'vsStage' | 'festMatch' | 'knockout' | 'bankaraMatch' | 'xMatch' | 'duration' | 'playedTime' | 'awards' | 'leagueMatch' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    player: VsPlayer_result_2b08598;
    myTeam: VsTeam_result_2b08598;
    otherTeams: VsTeam_result_2b08598[];
};
export type VsPlayer_result_2b08598 = Pick<VsPlayer, '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'nameplate' | 'paint'> & {
    headGear: HeadGear_vsPlayerSelf_2b08598;
    clothingGear: ClothingGear_vsPlayerSelf_2b08598;
    shoesGear: ShoesGear_vsPlayerSelf_2b08598;
};

type VsPlayer_Gear_Self_2b08598<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'> & {
    originalImage: Pick<Image, 'url'>;
    brand: Pick<Brand, 'id' | 'name' | 'image'>;
};
export type HeadGear_vsPlayerSelf_2b08598 = VsPlayer_Gear_Self_2b08598<HeadGear>;
export type ClothingGear_vsPlayerSelf_2b08598 = VsPlayer_Gear_Self_2b08598<ClothingGear>;
export type ShoesGear_vsPlayerSelf_2b08598 = VsPlayer_Gear_Self_2b08598<ShoesGear>;

export type VsTeam_result_2b08598 = Pick<VsTeam, 'color' | 'judgement' | 'tricolorRole' | 'festTeamName' | 'order'> & {
    result: Pick<VsTeamResult, 'paintRatio' | 'score' | 'noroshi'> | null;
    players: VsPlayer_result_VsTeam_2b08598[];
};
export type VsPlayer_result_VsTeam_2b08598 = Pick<VsPlayer, '__typename' | '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'isMyself' | 'species' | 'nameplate' | 'paint' | 'result' | 'festDragonCert'> & {
    weapon: Pick<Weapon, 'id' | 'name' | 'image'>;
    headGear: HeadGear_vsPlayer;
    clothingGear: ClothingGear_vsPlayer;
    shoesGear: ShoesGear_vsPlayer;
};

/** 2b085984f729cd51938fc069ceef784a VsHistoryDetailQuery variables */
export type VsHistoryDetailVariables_2b08598 = VsHistoryDetailVariables;

/** cd82f2ade8aca7687947c5f3210805a6 VsHistoryDetailQuery */
export interface VsHistoryDetailResult_cd82f2a {
    vsHistoryDetail: VsHistoryDetail_result_cd82f2a | null;
}

export type VsHistoryDetail_result_cd82f2a = Pick<VsHistoryDetail, '__typename' | 'id' | 'vsRule' | 'vsMode' | 'judgement' | 'vsStage' | 'festMatch' | 'knockout' | 'bankaraMatch' | 'xMatch' | 'duration' | 'playedTime' | 'awards' | 'leagueMatch' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    player: VsPlayer_result;
    myTeam: VsTeam_result_cd82f2a;
    otherTeams: VsTeam_result_cd82f2a[];
};
type VsTeam_result_cd82f2a = Pick<VsTeam, 'color' | 'judgement' | 'tricolorRole' | 'festTeamName' | 'order'> & {
    result: Pick<VsTeamResult, 'paintRatio' | 'score' | 'noroshi'> | null;
    players: VsPlayer_result_cd82f2a_VsTeam[];
};

type VsPlayer_result_cd82f2a_VsTeam = Pick<VsPlayer, '__typename' | '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'isMyself' | 'species' | 'nameplate' | 'paint' | 'result' | 'festDragonCert'> & {
    headGear: VsPlayer_Gear_cd82f2a<HeadGear>;
    clothingGear: VsPlayer_Gear_cd82f2a<ClothingGear>;
    shoesGear: VsPlayer_Gear_cd82f2a<ShoesGear>;
    weapon: Weapon_result_cd82f2a_VsPlayer_VsTeam;
};
type VsPlayer_Gear_cd82f2a<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__isGear' | 'name' | 'primaryGearPower' | 'additionalGearPowers'> & {
    thumbnailImage: Pick<Image, 'url'>;
    originalImage: Pick<Image, 'url'>;
    brand: Pick<Brand, 'id' | 'name' | 'image'>;
};
type Weapon_result_cd82f2a_VsPlayer_VsTeam = Pick<Weapon, 'id' | 'name' | 'image'> & {
    subWeapon: Pick<SubWeapon, 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image' | 'maskingImage'>;
    image3d: Pick<Image, 'url'>;
    image2d: Pick<Image, 'url'>;
    image3dThumbnail: Pick<Image, 'url'>;
    image2dThumbnail: Pick<Image, 'url'>;
};

/** cd82f2ade8aca7687947c5f3210805a6 VsHistoryDetailQuery variables */
export interface VsHistoryDetailVariables_cd82f2a {
    vsResultId: string;
}

/** 994cf141e55213e6923426caf37a1934 VsHistoryDetailPagerRefetchQuery */
export interface VsHistoryDetailPagerRefetchResult {
    vsHistoryDetail: VsHistoryDetail_pagerRefetch | null;
}

export type VsHistoryDetail_pagerRefetch = Pick<VsHistoryDetail, '__typename' | 'nextHistoryDetail' | 'previousHistoryDetail' | 'id'>;

/** 994cf141e55213e6923426caf37a1934 VsHistoryDetailPagerRefetchQuery variables */
export interface VsHistoryDetailPagerRefetchVariables {
    vsResultId: string;
}
