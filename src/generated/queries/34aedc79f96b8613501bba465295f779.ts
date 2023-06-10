import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { ChallengeHome, ChallengeJourney, ChallengeJourneyConnection, Image } from '../../types.js';

/**
 * 34aedc79f96b8613501bba465295f779 ChallengeRefetchQuery
 *
 * query ChallengeRefetchQuery
 *
 * Generated 10/06/2023 from SplatNet 3 4.0.0-d5178440.
 */
interface ChallengeRefetchQuery_34aedc7 {
    challenge: /** ChallengeHome */ OperationFieldType<'ChallengeRefetchQuery', 'challenge', {
        challengeJourneys: /** ChallengeJourneyConnection */ LinkedFieldType<ChallengeHome, 'challengeJourneys', {
            nodes: /** ChallengeJourney */ LinkedFieldType<ChallengeJourneyConnection, 'nodes', {
                id: ChallengeJourney['id'];
                challengeCount: ChallengeJourney['challengeCount'];
                image: /** Image */ LinkedFieldType<ChallengeJourney, 'image', {
                    url: Image['url'];
                }, false>;
                name: ChallengeJourney['name'];
                state: ChallengeJourney['state'];
                subName: ChallengeJourney['subName'];
                supportedCount: ChallengeJourney['supportedCount'];
            }, true>;
        }, false>;
        currentPaintPoint: ChallengeHome['currentPaintPoint'];
    }>;
}

export default ChallengeRefetchQuery_34aedc7;
export { ChallengeRefetchQuery_34aedc7 };
