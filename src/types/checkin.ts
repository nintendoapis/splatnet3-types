import { Image, NameplateBackground, UserError } from './common.js';

/** 5d0d1b45ebf4e324d0dae017d9df06d2 CheckinQuery */
export interface CheckinResult {
    checkinHistories: CheckinHistory[];
}

export interface CheckinHistory {
    id: string;
    title: string;
    checkinTime: string;
    description: string;
    reward: NameplateBackgroundReward | ConsumingReward | {
        __typename: string & never;
    };
}

export interface NameplateBackgroundReward {
    __typename: 'NameplateBackgroundReward';
    id: string;
    nameplateBackground: Pick<NameplateBackground, 'id' | 'image'>;
}

export interface ConsumingReward {
    __typename: 'ConsumingReward';
    id: string;
    name: string;
    image: Pick<Image, 'url'>;
    amount: number;
}

/** af8cac2c2554e22e2bbada19392083a2 CheckinQuery */
export interface CheckinResult_af8cac2 {
    checkinHistories: CheckinHistory_af8cac2[];
}
export type CheckinHistory_af8cac2 = Omit<CheckinHistory, 'reward'> & {
    reward: NameplateBackgroundReward | {
        __typename: string & never;
    };
};

/** 8e3fecf7cfce83f6831b17e9052791d0 CheckinWithQRCodeMutation variables */
export interface CheckinWithQRCodeMutationVariables {
    checkinEventId: string;
}

/** 8d54e1c6bdcc65181f65adc582914ad8 CheckinWithQRCodeMutation */
export interface CheckinWithQRCodeMutationResult {
    createCheckinHistory: CreateCheckinHistoryPayload;
}

export interface CreateCheckinHistoryPayload {
    event: CheckinHistory;
    userErrors: UserError[] | null;
}

/** 8e3fecf7cfce83f6831b17e9052791d0 CheckinWithQRCodeMutation variables */
export type CheckinWithQRCodeMutationVariables_8e3fecf = CheckinWithQRCodeMutationVariables;
/** 8e3fecf7cfce83f6831b17e9052791d0 CheckinWithQRCodeMutation */
export interface CheckinWithQRCodeMutationResult_8e3fecf {
    createCheckinHistory: CreateCheckinHistoryPayload;
}
export type CreateCheckinHistoryPayload_8e3fecf = Omit<CreateCheckinHistoryPayload, 'event'> & {
    event: CheckinHistory_af8cac2;
};
