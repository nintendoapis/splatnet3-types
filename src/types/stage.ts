import { Image, NodeList } from './common.js';

export interface VsStage {
    id: string;
    stageId: number;
    vsStageId: number;
    name: string;
    image: Pick<Image, 'url'>;
    stats: VsStageRecordStats | null;
}

export interface VsStageRecordStats {
    lastPlayedTime: string;
    winRateAr: number | null;
    winRateCl: number | null;
    winRateGl: number | null;
    winRateLf: number | null;
}

/** 56c46bdbdfa4519eaf7845ce9f3cd67a StageRecordQuery */
export interface StageRecordResult {
    stageRecords: NodeList<VsStage_records>;
}

/** fe965bef54377d20e9133087cc6cdf3f StageRecordsRefetchQuery */
export type StageRecordsRefetchResult = StageRecordResult;

export type VsStage_records = Pick<VsStage, 'id' | 'stageId' | 'vsStageId' | 'name' | 'image' | 'stats'> & {
    originalImage: Pick<Image, 'url'>;
};
