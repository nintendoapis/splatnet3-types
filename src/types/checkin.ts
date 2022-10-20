import { NameplateBackground, UserError } from './common.js';

/** af8cac2c2554e22e2bbada19392083a2 CheckinQuery */
export interface CheckinResult {
    checkinHistories: CheckinHistory[];
}

export interface CheckinHistory {
    id: string;
    title: string;
    checkinTime: string;
    description: string;
    reward: NameplateBackgroundReward | {
        __typename: string & never;
    };
}

export interface NameplateBackgroundReward {
    __typename: 'NameplateBackgroundReward';
    id: string;
    nameplateBackground: Pick<NameplateBackground, 'id' | 'image'>;
}

/** 8e3fecf7cfce83f6831b17e9052791d0 CheckinWithQRCodeMutation variables */
export interface CheckinWithQRCodeMutationVariables {
    checkinEventId: string;
}

/** 8e3fecf7cfce83f6831b17e9052791d0 CheckinWithQRCodeMutation */
export interface CheckinWithQRCodeMutationResult {
    createCheckinHistory: CreateCheckinHistoryPayload;
}

export interface CreateCheckinHistoryPayload {
    event: CheckinHistory;
    userErrors: UserError[] | null;
}
