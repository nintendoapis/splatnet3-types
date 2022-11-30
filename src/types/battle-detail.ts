import { ClothingGear_vsPlayer, HeadGear_vsPlayer, ShoesGear_vsPlayer, VsHistoryDetail, VsPlayer, VsTeam, VsTeamResult } from './battles.js';
import { Image } from './common.js';
import { Brand, ClothingGear, HeadGear, ShoesGear } from './gear.js';
import { SpecialWeapon, SubWeapon, Weapon } from './weapon.js';

/** 2b085984f729cd51938fc069ceef784a VsHistoryDetailQuery */
export interface VsHistoryDetailResult {
    vsHistoryDetail: VsHistoryDetail_result | null;
}

export type VsHistoryDetail_result = Pick<VsHistoryDetail, '__typename' | 'id' | 'vsRule' | 'vsMode' | 'judgement' | 'vsStage' | 'festMatch' | 'knockout' | 'bankaraMatch' | 'xMatch' | 'duration' | 'playedTime' | 'awards' | 'leagueMatch' | 'nextHistoryDetail' | 'previousHistoryDetail'> & {
    player: VsPlayer_result;
    myTeam: VsTeam_result;
    otherTeams: VsTeam_result[];
};
export type VsPlayer_result = Pick<VsPlayer, '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'nameplate' | 'headGear' | 'clothingGear' | 'shoesGear' | 'paint'>;

export type VsTeam_result = Pick<VsTeam, 'color' | 'judgement' | 'tricolorRole' | 'festTeamName' | 'order'> & {
    result: Pick<VsTeamResult, 'paintRatio' | 'score' | 'noroshi'> | null;
    players: VsPlayer_result_VsTeam[];
};
export type VsPlayer_result_VsTeam = Pick<VsPlayer, '__typename' | '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'isMyself' | 'weapon' | 'species' | 'nameplate' | 'paint' | 'result' | 'festDragonCert'> & {
    headGear: HeadGear_vsPlayer;
    clothingGear: ClothingGear_vsPlayer;
    shoesGear: ShoesGear_vsPlayer;
};

/** 2b085984f729cd51938fc069ceef784a VsHistoryDetailQuery variables */
export interface VsHistoryDetailVariables {
    vsResultId: string;
}

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
