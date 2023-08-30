import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { ChallengeHome, ChallengeJourney, ChallengeJourneyConnection, Image } from '../../types.js';

/**
 * 8a079214500148bf88a8fce1d7209b90 ChallengeQuery
 *
 * query ChallengeQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-22ddb0fd.
 */
interface ChallengeQuery_8a07921 {
    challenge: /** ChallengeHome */ OperationFieldType<'ChallengeQuery', 'challenge', {
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

export default ChallengeQuery_8a07921;
export { ChallengeQuery_8a07921 };
