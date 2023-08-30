import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Challenge, ChallengeHome, ChallengeJourney, GearReward, Image } from '../../types.js';

/**
 * d5fc5dd3a144139e89815b9e3af6499f58e5fc5185876840dd6edadb0ca214b4 JourneyRefetchQuery
 *
 * query JourneyRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface JourneyRefetchQuery_d5fc5dd {
    challengeInfo: /** ChallengeHome */ OperationFieldType<'JourneyRefetchQuery', 'challenge', ({
        currentPaintPoint: ChallengeHome['currentPaintPoint'];
    }) & (/** ClientExtension */ unknown)>;
    journey: /** unknown type */ OperationFieldType<'JourneyRefetchQuery', 'node', ({
        __typename: string;
        id: ChallengeJourney['id'];
    }) & (/** ChallengeJourney */ {
        challenges: /** Challenge */ LinkedFieldType<ChallengeJourney, 'challenges', {
            id: Challenge['id'];
            challengeNumber: Challenge['challengeNumber'];
            goalPoint: Challenge['goalPoint'];
            image: /** Image */ LinkedFieldType<Challenge, 'image', {
                url: Image['url'];
            }, false>;
            isSupported: Challenge['isSupported'];
            name: Challenge['name'];
        }, true>;
        desc: ChallengeJourney['desc'];
        gratitude: ChallengeJourney['gratitude'];
        image: /** Image */ LinkedFieldType<ChallengeJourney, 'image', {
            url: Image['url'];
        }, false>;
        name: ChallengeJourney['name'];
        reward: /** GearReward */ LinkedFieldType<ChallengeJourney, 'reward', {
            id: GearReward['id'];
            gear: /** unknown type */ LinkedFieldType<GearReward, 'gear', {
                __typename: string;
                image: /** Image */ LinkedFieldType<GearReward['gear'], 'image', {
                    url: Image['url'];
                }, false>;
                name: GearReward['gear']['name'];
            }, false>;
        }, false>;
        state: ChallengeJourney['state'];
        subName: ChallengeJourney['subName'];
    }) & ({
        __typename: 'ChallengeJourney';
    })>;
}

export default JourneyRefetchQuery_d5fc5dd;
export { JourneyRefetchQuery_d5fc5dd };
