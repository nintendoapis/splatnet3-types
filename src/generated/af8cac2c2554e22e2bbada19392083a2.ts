import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CheckinHistory, Image, NameplateBackground, NameplateBackgroundReward } from '../types.js';

/**
 * af8cac2c2554e22e2bbada19392083a2 CheckinQuery
 *
 * query CheckinQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-63bad6e1.
 */
interface CheckinQuery_af8cac2 {
    checkinHistories: /** CheckinHistory */ OperationFieldType<'CheckinQuery', 'checkinHistories', {
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
    }>[];
}

export default CheckinQuery_af8cac2;
export { CheckinQuery_af8cac2 };
