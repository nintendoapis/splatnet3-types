import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CheckinHistory, ConsumingReward, Image, NameplateBackground, NameplateBackgroundReward } from '../types.js';

/**
 * 5d0d1b45ebf4e324d0dae017d9df06d2 CheckinQuery
 *
 * query CheckinQuery
 *
 * Generated 01/06/2023 from SplatNet 3 4.0.0-e2ee936d.
 */
interface CheckinQuery_5d0d1b4 {
    checkinHistories: /** CheckinHistory */ OperationFieldType<'CheckinQuery', 'checkinHistories', {
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
    }>[];
}

export default CheckinQuery_5d0d1b4;
export { CheckinQuery_5d0d1b4 };
