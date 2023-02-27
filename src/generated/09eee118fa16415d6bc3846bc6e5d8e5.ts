import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Challenge, ChallengeHome, ChallengeJourney, GearReward, Image } from '../types.js';

/**
 * 09eee118fa16415d6bc3846bc6e5d8e5 JourneyRefetchQuery
 *
 * query JourneyRefetchQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface JourneyRefetchQuery_09eee11 {
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

export default JourneyRefetchQuery_09eee11;
export { JourneyRefetchQuery_09eee11 };
