import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Challenge, ChallengeHome, ChallengeJourney, GearReward, Image } from '../../types.js';

/**
 * c0cd04d2f0b00444853bae0d7e7f1ac534dfd7ff593c738ab9ba4456b1e85f8a JourneyQuery
 *
 * query JourneyQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface JourneyQuery_c0cd04d {
    challengeInfo: /** ChallengeHome */ OperationFieldType<'JourneyQuery', 'challenge', ({
        currentPaintPoint: ChallengeHome['currentPaintPoint'];
    }) & (/** ClientExtension */ unknown)>;
    journey: /** unknown type */ OperationFieldType<'JourneyQuery', 'node', ({
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

export default JourneyQuery_c0cd04d;
export { JourneyQuery_c0cd04d };
