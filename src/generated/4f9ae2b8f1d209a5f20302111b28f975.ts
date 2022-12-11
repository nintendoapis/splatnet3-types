import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { DownloadImage, HeroRecord, HeroSite, HeroStage, HeroSupplyWeapon, Image, WallpaperReward } from '../types.js';

/**
 * 4f9ae2b8f1d209a5f20302111b28f975 HeroHistoryRefetchQuery
 *
 * query HeroHistoryRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5e2bcdfb.
 */
interface HeroHistoryRefetchQuery_4f9ae2b {
    heroRecord: /** HeroRecord */ OperationFieldType<'HeroHistoryRefetchQuery', 'heroRecord', {
        fullReward: /** WallpaperReward */ LinkedFieldType<HeroRecord, 'fullReward', {
            id: WallpaperReward['id'];
            downloadImages: /** DownloadImage */ LinkedFieldType<WallpaperReward, 'downloadImages', {
                url: DownloadImage['url'];
                variant: DownloadImage['variant'];
            }, true>;
            sampleImage: /** Image */ LinkedFieldType<WallpaperReward, 'sampleImage', {
                url: Image['url'];
            }, false>;
        }, false>;
        progressComment: HeroRecord['progressComment'];
        progressPhrase: HeroRecord['progressPhrase'];
        progressRate: HeroRecord['progressRate'];
        reward: /** WallpaperReward */ LinkedFieldType<HeroRecord, 'reward', {
            id: WallpaperReward['id'];
            downloadImages: /** DownloadImage */ LinkedFieldType<WallpaperReward, 'downloadImages', {
                url: DownloadImage['url'];
                variant: DownloadImage['variant'];
            }, true>;
            sampleImage: /** Image */ LinkedFieldType<WallpaperReward, 'sampleImage', {
                url: Image['url'];
            }, false>;
        }, false>;
        sites: /** HeroSite */ LinkedFieldType<HeroRecord, 'sites', {
            id: HeroSite['id'];
            clearedStages: /** HeroStage */ LinkedFieldType<HeroSite, 'clearedStages', {
                bestClearTimeSec: HeroStage['bestClearTimeSec'];
                bestClearWeapon: /** HeroSupplyWeapon */ LinkedFieldType<HeroStage, 'bestClearWeapon', {
                    category: HeroSupplyWeapon['category'];
                    image: /** Image */ LinkedFieldType<HeroSupplyWeapon, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: HeroSupplyWeapon['name'];
                }, false>;
                description: HeroStage['description'];
                isBoss: HeroStage['isBoss'];
                stageName: HeroStage['stageName'];
                stageNumber: HeroStage['stageNumber'];
            }, true>;
            image: /** Image */ LinkedFieldType<HeroSite, 'image', {
                url: Image['url'];
            }, false>;
            progressComment: HeroSite['progressComment'];
            progressCommentSpeaker: HeroSite['progressCommentSpeaker'];
            progressRate: HeroSite['progressRate'];
            reward: /** WallpaperReward */ LinkedFieldType<HeroSite, 'reward', {
                id: WallpaperReward['id'];
                downloadImages: /** DownloadImage */ LinkedFieldType<WallpaperReward, 'downloadImages', {
                    url: DownloadImage['url'];
                    variant: DownloadImage['variant'];
                }, true>;
                sampleImage: /** Image */ LinkedFieldType<WallpaperReward, 'sampleImage', {
                    url: Image['url'];
                }, false>;
            }, false>;
            siteName: HeroSite['siteName'];
            siteNumber: HeroSite['siteNumber'];
        }, true>;
    }>;
}

export default HeroHistoryRefetchQuery_4f9ae2b;
export { HeroHistoryRefetchQuery_4f9ae2b };
