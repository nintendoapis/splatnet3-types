import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { DownloadImage, HeroRecord, HeroSite, HeroStage, HeroSupplyWeapon, Image, WallpaperReward } from '../../types.js';

/**
 * c6cb0b7cfd8721e90e3a85d3340d190c7f9c759b6b5e627900f5456fec61f6ff HeroHistoryRefetchQuery
 *
 * query HeroHistoryRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface HeroHistoryRefetchQuery_c6cb0b7 {
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

export default HeroHistoryRefetchQuery_c6cb0b7;
export { HeroHistoryRefetchQuery_c6cb0b7 };
