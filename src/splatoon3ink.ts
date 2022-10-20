import { NodeList } from './types/common.js';
import { CoopHistoryResult, CoopResult, CoopSupplyWeapon } from './types/coop.js';
import { Fest, FestPlayerResult, FestRecordResult, FestTeam, FestTeamResult } from './types/fest.js';
import { Brand, ClothingGear, GearPower, HeadGear, ShoesGear } from './types/gear.js';
import { Gesotown, GesotownResult, PickupBrand, SaleGear } from './types/gesotown.js';
import { CoopSchedule, CoopSetting, StageScheduleResult } from './types/schedules.js';

type ReplaceProperty<T, K extends keyof T, V> = Omit<T, K> & {[A in K]: V};
type ReplaceProperties<T, R extends {[K in keyof T]?: any}> = Omit<T, keyof R> & R;

/** https://splatoon3.ink/data/schedules.json */
export interface Schedules {
    data: StageScheduleResult_splatoon3ink;
}

type StageScheduleResult_splatoon3ink = Omit<StageScheduleResult, 'coopGroupingSchedule'> & {
    coopGroupingSchedule: {
        regularSchedules: NodeList<CoopSchedule_splatoon3ink>;
        bigRunSchedules: NodeList<CoopSchedule_splatoon3ink>;
    };
};
type CoopSchedule_splatoon3ink = Omit<CoopSchedule, 'setting'> & {
    setting: CoopSetting_splatoon3ink;
};
type CoopSetting_splatoon3ink = Omit<CoopSetting, 'weapons'> & {
    weapons: CoopSupplyWeapon_splatoon3ink[];
};
type CoopSupplyWeapon_splatoon3ink = Pick<CoopSupplyWeapon, 'name' | 'image'> & {
    __splatoon3ink_id: string;
};

/** https://splatoon3.ink/data/gear.json */
export interface Gear {
    data: GesotownResult_splatoon3ink;
}

type GesotownResult_splatoon3ink = ReplaceProperty<GesotownResult, 'gesotown', Gesotown_splatoon3ink>;
type Gesotown_splatoon3ink = ReplaceProperties<Gesotown, {
    pickupBrand: PickupBrand_splatoon3ink;
    limitedGears: SaleGear_splatoon3ink[];
}>;
type PickupBrand_splatoon3ink = ReplaceProperties<PickupBrand, {
    brand: Brand_splatoon3ink;
    brandGears: SaleGear_splatoon3ink[];
}>;
type Brand_splatoon3ink = ReplaceProperty<Pick<Brand, 'id' | 'name' | 'usualGearPower'>, 'usualGearPower', GearPower_splatoon3ink>;
type GearPower_splatoon3ink = Pick<GearPower, 'name' | 'image' | 'desc' | 'isEmptySlot'> & {
    __splatoon3ink_id: string;
};
type SaleGear_splatoon3ink = Pick<SaleGear, 'id' | 'saleEndTime' | 'price'> & {
    gear: SaleGear_splatoon3ink_Gear<HeadGear | ClothingGear | ShoesGear>;
};
type SaleGear_splatoon3ink_Gear<T extends HeadGear | ClothingGear | ShoesGear> = Pick<T, '__typename' | 'name' | 'image'> & {
    __splatoon3ink_id: string;
    primaryGearPower: Pick<GearPower_splatoon3ink, '__splatoon3ink_id' | 'name' | 'image'>;
    additionalGearPowers: Pick<GearPower_splatoon3ink, '__splatoon3ink_id' | 'name' | 'image'>[];
    brand: Pick<Brand, 'id' | 'name' | 'image'>;
};

/** https://splatoon3.ink/data/coop.json */
export interface Coop {
    data: CoopHistoryResult_splatoon3ink;
}

type CoopHistoryResult_splatoon3ink = ReplaceProperty<CoopHistoryResult, 'coopResult', CoopResult_splatoon3ink>;
type CoopResult_splatoon3ink = ReplaceProperty<CoopResult, 'monthlyGear', HeadGear_splatoon3inkcoop | ClothingGear_splatoon3inkcoop | ShoesGear_splatoon3inkcoop>;

type HeadGear_splatoon3inkcoop = Pick<HeadGear, '__typename' | 'name' | 'image'>;
type ClothingGear_splatoon3inkcoop = Pick<ClothingGear, '__typename' | 'name' | 'image'>;
type ShoesGear_splatoon3inkcoop = Pick<ShoesGear, '__typename' | 'name' | 'image'>;

/** https://splatoon3.ink/data/festivals.json */
export interface Festivals {
    US: {
        data: FestRecordResult_splatoon3ink;
    };
    EU: {
        data: FestRecordResult_splatoon3ink;
    };
    JP: {
        data: FestRecordResult_splatoon3ink;
    };
    AP: {
        data: FestRecordResult_splatoon3ink;
    };
}

type FestRecordResult_splatoon3ink = ReplaceProperty<FestRecordResult, 'festRecords', NodeList<Fest_splatoon3ink>>;
type Fest_splatoon3ink = Pick<Fest, '__typename' | 'id' | 'title' | 'lang' | 'startTime' | 'endTime' | 'state' | 'image' | 'isVotable' | 'undecidedVotes'> & {
    playerResult: Pick<FestPlayerResult, 'grade'> | null;
    teams: FestTeam_splatoon3ink[];
    myTeam: Pick<FestTeam, 'id' | 'teamName' | 'image' | 'color'> | null;
};
type FestTeam_splatoon3ink = Pick<FestTeam, 'id' | 'teamName' | 'color' | 'image' | 'myVoteState' | 'preVotes' | 'votes' | 'role'> & {
    result: Pick<FestTeamResult, '__typename' | 'isWinner' | 'horagaiRatio' | 'isHoragaiRatioTop' | 'voteRatio' | 'isVoteRatioTop' | 'regularContributionRatio' | 'isRegularContributionRatioTop' | 'challengeContributionRatio' | 'isChallengeContributionRatioTop'> | null;
};
