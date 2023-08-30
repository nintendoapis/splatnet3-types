import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { ChallengeHome, ChallengeJourney, ChallengeJourneyConnection, Image } from '../../types.js';

/**
 * 636c7f8180469847bbfe005afb589ee041bc8ca653c2a26d07987e582179fcad ChallengeRefetchQuery
 *
 * query ChallengeRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface ChallengeRefetchQuery_636c7f8 {
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

export default ChallengeRefetchQuery_636c7f8;
export { ChallengeRefetchQuery_636c7f8 };
