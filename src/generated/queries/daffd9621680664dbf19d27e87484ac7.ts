import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CheckinHistory, ConsumingReward, CreateCheckinHistoryPayload, Image, NameplateBackground, NameplateBackgroundReward, UserError } from '../../types.js';

/**
 * daffd9621680664dbf19d27e87484ac7 CheckinWithQRCodeMutation
 *
 * mutation CheckinWithQRCodeMutation
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface CheckinWithQRCodeMutation_daffd96 {
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

export default CheckinWithQRCodeMutation_daffd96;
export { CheckinWithQRCodeMutation_daffd96 };
