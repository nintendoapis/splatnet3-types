import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { CheckinHistory, ConsumingReward, Image, NameplateBackground, NameplateBackgroundReward } from '../../types.js';

/**
 * 6dfce83d02761395758ae21454cb46924e81c22c3f151f91330b0602278a060e CheckinQuery
 *
 * query CheckinQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface CheckinQuery_6dfce83 {
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

export default CheckinQuery_6dfce83;
export { CheckinQuery_6dfce83 };
