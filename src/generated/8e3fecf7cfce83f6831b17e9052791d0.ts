import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CheckinHistory, CreateCheckinHistoryPayload, Image, NameplateBackground, NameplateBackgroundReward, UserError } from '../types.js';

/**
 * 8e3fecf7cfce83f6831b17e9052791d0 CheckinWithQRCodeMutation
 *
 * mutation CheckinWithQRCodeMutation
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5644e7a2.
 */
interface CheckinWithQRCodeMutation_8e3fecf {
    createCheckinHistory: /** CreateCheckinHistoryPayload */ OperationFieldType<'CheckinWithQRCodeMutation', 'createCheckinHistory', {
        event: /** CheckinHistory */ LinkedFieldType<CreateCheckinHistoryPayload, 'event', {
            id: CheckinHistory['id'];
            checkinTime: CheckinHistory['checkinTime'];
            description: CheckinHistory['description'];
            reward: /** unknown type */ LinkedFieldType<CheckinHistory, 'reward', ({
                __typename: string;
                id: CheckinHistory['reward']['id'];
            }) & (/** NameplateBackgroundReward */ {
                nameplateBackground: /** NameplateBackground */ LinkedFieldType<NameplateBackgroundReward, 'nameplateBackground', {
                    id: NameplateBackground['id'];
                    image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                        url: Image['url'];
                    }, false>;
                }, false>;
            }) & ({
                __typename: 'NameplateBackgroundReward';
            }), false>;
            title: CheckinHistory['title'];
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<CreateCheckinHistoryPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default CheckinWithQRCodeMutation_8e3fecf;
export { CheckinWithQRCodeMutation_8e3fecf };
