import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CheckinHistory, ConsumingReward, CreateCheckinHistoryPayload, Image, NameplateBackground, NameplateBackgroundReward, UserError } from '../types.js';

/**
 * 8d54e1c6bdcc65181f65adc582914ad8 CheckinWithQRCodeMutation
 *
 * mutation CheckinWithQRCodeMutation
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-8a061f6c.
 */
interface CheckinWithQRCodeMutation_8d54e1c {
    createCheckinHistory: /** CreateCheckinHistoryPayload */ OperationFieldType<'CheckinWithQRCodeMutation', 'createCheckinHistory', {
        event: /** CheckinHistory */ LinkedFieldType<CreateCheckinHistoryPayload, 'event', {
            id: CheckinHistory['id'];
            checkinTime: CheckinHistory['checkinTime'];
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
            }) & (/** ConsumingReward */ {
                amount: ConsumingReward['amount'];
                image: /** Image */ LinkedFieldType<ConsumingReward, 'image', {
                    url: Image['url'];
                }, false>;
                name: ConsumingReward['name'];
            }) & ({
                __typename: 'ConsumingReward';
            }), false>;
            title: CheckinHistory['title'];
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<CreateCheckinHistoryPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default CheckinWithQRCodeMutation_8d54e1c;
export { CheckinWithQRCodeMutation_8d54e1c };
