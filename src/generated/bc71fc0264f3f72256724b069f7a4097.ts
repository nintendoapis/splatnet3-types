import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Challenge, ChallengeHome, ChallengeJourney, GearReward, Image } from '../types.js';

/**
 * bc71fc0264f3f72256724b069f7a4097 JourneyQuery
 *
 * query JourneyQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5e2bcdfb.
 */
interface JourneyQuery_bc71fc0 {
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

export default JourneyQuery_bc71fc0;
export { JourneyQuery_bc71fc0 };
