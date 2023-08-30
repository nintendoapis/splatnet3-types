import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { ChallengeHome, ChallengeJourney, ChallengeJourneyConnection, Image } from '../../types.js';

/**
 * 65252c7bbca148daf34de9a884e651bf9a5c1880a23f3d1e175a33f146b9f6dc ChallengeQuery
 *
 * query ChallengeQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface ChallengeQuery_65252c7 {
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

export default ChallengeQuery_65252c7;
export { ChallengeQuery_65252c7 };
