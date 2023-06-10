import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { BynameReward, CardSleeveReward, Challenge, ChallengeHome, ChallengeJourney, ChallengeReward, DownloadIcon, DownloadImage, GraffitiReward, IconReward, Image, WallpaperReward } from '../../types.js';

/**
 * 8dc246933b1f4e26a6dfd251878cf786 JourneyChallengeDetailRefetchQuery
 *
 * query JourneyChallengeDetailRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-bd36a652.
 */
interface JourneyChallengeDetailRefetchQuery_8dc2469 {
    challengeHome: /** ChallengeHome */ OperationFieldType<'JourneyChallengeDetailRefetchQuery', 'challenge', ({
        currentPaintPoint: ChallengeHome['currentPaintPoint'];
    }) & (/** ClientExtension */ unknown)>;
    journey: /** unknown type */ OperationFieldType<'JourneyChallengeDetailRefetchQuery', 'node', ({
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

export default JourneyChallengeDetailRefetchQuery_8dc2469;
export { JourneyChallengeDetailRefetchQuery_8dc2469 };
