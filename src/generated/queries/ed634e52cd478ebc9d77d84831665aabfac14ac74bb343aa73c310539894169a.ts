import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { BynameReward, CardSleeveReward, Challenge, ChallengeHome, ChallengeJourney, ChallengeReward, DownloadIcon, DownloadImage, GraffitiReward, IconReward, Image, WallpaperReward } from '../../types.js';

/**
 * ed634e52cd478ebc9d77d84831665aabfac14ac74bb343aa73c310539894169a JourneyChallengeDetailQuery
 *
 * query JourneyChallengeDetailQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface JourneyChallengeDetailQuery_ed634e5 {
    challengeHome: /** ChallengeHome */ OperationFieldType<'JourneyChallengeDetailQuery', 'challenge', ({
        currentPaintPoint: ChallengeHome['currentPaintPoint'];
    }) & (/** ClientExtension */ unknown)>;
    journey: /** unknown type */ OperationFieldType<'JourneyChallengeDetailQuery', 'node', ({
        __typename: string;
        id: ChallengeJourney['id'];
    }) & (/** ChallengeJourney */ {
        challenges: /** Challenge */ LinkedFieldType<ChallengeJourney, 'challenges', {
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
        }, true>;
        subName: ChallengeJourney['subName'];
    }) & ({
        __typename: 'ChallengeJourney';
    })>;
}

export default JourneyChallengeDetailQuery_ed634e5;
export { JourneyChallengeDetailQuery_ed634e5 };
