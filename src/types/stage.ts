import { Image, NodeList } from './common.js';

export interface VsStage {
    __typename: 'VsStage';
    id: string;
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

export type VsStage_records = Pick<VsStage, 'id' | 'vsStageId' | 'name' | 'image' | 'stats'> & {
    stageId: number;
    originalImage: Pick<Image, 'url'>;
};

/** 53dffcfb06b273dd7bdf6a303d310730 StageRecordQuery */
export type StageRecordResult_53dffcf = unknown;
/** 38624d4864879c745c7b20e653e062db StageRecordsRefetchQuery */
export type StageRecordsRefetchResult_38624d4 = unknown;
