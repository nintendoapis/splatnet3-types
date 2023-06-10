import { CoopHistoryQuery_91b917b, DetailFestRecordDetailQuery_96c3a7f, FestRecordQuery_44c7679, GesotownQuery_a43dd44, StageScheduleQuery_d1f062c } from './generated/types.js';
import { CoopSchedule_schedule, CoopSetting_schedule } from './partial-types.js';
import { Brand, ClothingGear, Connection, CoopSupplyWeapon, HeadGear, SaleGear, ShoesGear } from './types.js';

type ReplaceProperty<T, K extends keyof T, V> = Omit<T, K> & {[A in K]: V};
type ReplaceProperties<T, R extends {[K in keyof T]?: any}> = Omit<T, keyof R> & R;

/** https://splatoon3.ink/data/schedules.json */
export interface Schedules {
    data: StageScheduleResult_splatoon3ink;
}

type StageScheduleResult_splatoon3ink = Omit<StageScheduleQuery_d1f062c, 'coopGroupingSchedule'> & {
    coopGroupingSchedule: CoopGroupingSchedule_splatoon3ink;
};
type CoopGroupingSchedule_splatoon3ink = Omit<StageScheduleQuery_d1f062c['coopGroupingSchedule'], 'regularSchedules' | 'bigRunSchedules'> & {
    regularSchedules: Pick<Connection<CoopSchedule_splatoon3ink>, 'nodes'>;
    bigRunSchedules: Pick<Connection<CoopSchedule_splatoon3ink>, 'nodes'>;
};
type CoopSchedule_splatoon3ink = Omit<CoopSchedule_schedule, 'setting'> & {
    setting: CoopSetting_splatoon3ink;
};
type CoopSetting_splatoon3ink = Omit<CoopSetting_schedule, 'weapons'> & {
    weapons: CoopSupplyWeapon_splatoon3ink[];
};
type CoopSupplyWeapon_splatoon3ink = Pick<CoopSupplyWeapon, 'name' | 'image'> & {
    __splatoon3ink_id: string;
};

/** https://splatoon3.ink/data/gear.json */
export interface Gear {
    data: GesotownResult_splatoon3ink;
}

type GesotownResult_splatoon3ink = ReplaceProperty<GesotownQuery_a43dd44, 'gesotown', Gesotown_splatoon3ink>;
type Gesotown_splatoon3ink = ReplaceProperties<GesotownQuery_a43dd44['gesotown'], {
    pickupBrand: PickupBrand_splatoon3ink;
    limitedGears: SaleGear_splatoon3ink[];
}>;
type PickupBrand_splatoon3ink = ReplaceProperties<GesotownQuery_a43dd44['gesotown']['pickupBrand'], {
    brand: Brand_splatoon3ink;
    brandGears: SaleGear_splatoon3ink[];
}>;
type Brand_splatoon3ink = ReplaceProperty<GesotownQuery_a43dd44['gesotown']['pickupBrand']['brand'], 'usualGearPower', GearPower_splatoon3ink>;
type GearPower_splatoon3ink = GesotownQuery_a43dd44['gesotown']['pickupBrand']['brand']['usualGearPower'] & {
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

type CoopHistoryResult_splatoon3ink = ReplaceProperty<CoopHistoryQuery_91b917b, 'coopResult', CoopResult_splatoon3ink>;
type CoopResult_splatoon3ink = ReplaceProperty<CoopHistoryQuery_91b917b['coopResult'], 'monthlyGear', HeadGear_splatoon3inkcoop | ClothingGear_splatoon3inkcoop | ShoesGear_splatoon3inkcoop>;

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

type FestRecordResult_splatoon3ink = ReplaceProperty<FestRecordQuery_44c7679, 'festRecords', Pick<Connection<Fest_splatoon3ink>, 'nodes'>>;
type Fest_splatoon3ink = DetailFestRecordDetailQuery_96c3a7f['fest'];
