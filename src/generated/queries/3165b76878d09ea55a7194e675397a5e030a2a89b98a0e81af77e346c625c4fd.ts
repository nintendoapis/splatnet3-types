import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { BynameReward, CardSleeveReward, Challenge, ChallengeJourney, ChallengeReward, DownloadIcon, DownloadImage, GraffitiReward, IconReward, Image, SupportChallengePayload, UserError, WallpaperReward } from '../../types.js';

/**
 * 3165b76878d09ea55a7194e675397a5e030a2a89b98a0e81af77e346c625c4fd SupportButton_SupportChallengeMutation
 *
 * mutation SupportButton_SupportChallengeMutation
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface SupportButton_SupportChallengeMutation_3165b76 {
    supportChallenge: /** SupportChallengePayload */ OperationFieldType<'SupportButton_SupportChallengeMutation', 'supportChallenge', {
        afterPaintPoint: SupportChallengePayload['afterPaintPoint'];
        challenge: /** Challenge */ LinkedFieldType<SupportChallengePayload, 'challenge', {
            id: Challenge['id'];
            challengeNumber: Challenge['challengeNumber'];
            desc: Challenge['desc'];
            goalPoint: Challenge['goalPoint'];
            image: /** Image */ LinkedFieldType<Challenge, 'image', {
                url: Image['url'];
            }, false>;
            isSupported: Challenge['isSupported'];
            name: Challenge['name'];
            reward: /** unknown type */ LinkedFieldType<Challenge, 'reward', ({
                __typename: string;
                id: ChallengeReward['id'];
            }) & (/** BynameReward */ {
                byname: BynameReward['byname'];
            }) & ({
                __typename: 'BynameReward';
            }) & (/** CardSleeveReward */ {
                name: CardSleeveReward['name'];
                sampleImage: /** Image */ LinkedFieldType<CardSleeveReward, 'sampleImage', {
                    url: Image['url'];
                }, false>;
            }) & ({
                __typename: 'CardSleeveReward';
            }) & (/** WallpaperReward */ {
                downloadImages: /** DownloadImage */ LinkedFieldType<WallpaperReward, 'downloadImages', {
                    url: DownloadImage['url'];
                    variant: DownloadImage['variant'];
                }, true>;
                name: WallpaperReward['name'];
                sampleImage: /** Image */ LinkedFieldType<WallpaperReward, 'sampleImage', {
                    url: Image['url'];
                }, false>;
            }) & ({
                __typename: 'WallpaperReward';
            }) & (/** IconReward */ {
                downloadIcons: /** DownloadIcon */ LinkedFieldType<IconReward, 'downloadIcons', {
                    bgColor: DownloadIcon['bgColor'];
                    url: DownloadIcon['url'];
                }, true>;
                name: IconReward['name'];
            }) & ({
                __typename: 'IconReward';
            }) & (/** GraffitiReward */ {
                image: /** DownloadImage */ LinkedFieldType<GraffitiReward, 'image', {
                    url: DownloadImage['url'];
                }, false>;
                name: GraffitiReward['name'];
            }) & ({
                __typename: 'GraffitiReward';
            }), false>;
        }, false>;
        challengeJourney: /** ChallengeJourney */ LinkedFieldType<SupportChallengePayload, 'challengeJourney', {
            id: ChallengeJourney['id'];
            gratitude: ChallengeJourney['gratitude'];
            state: ChallengeJourney['state'];
            supportedCount: ChallengeJourney['supportedCount'];
        }, false>;
        nextChallengeJourney: /** ChallengeJourney */ LinkedFieldType<SupportChallengePayload, 'nextChallengeJourney', {
            id: ChallengeJourney['id'];
            state: ChallengeJourney['state'];
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<SupportChallengePayload, 'userErrors', {
            message: UserError['message'];
        }, true>;
    }>;
}

export default SupportButton_SupportChallengeMutation_3165b76;
export { SupportButton_SupportChallengeMutation_3165b76 };
