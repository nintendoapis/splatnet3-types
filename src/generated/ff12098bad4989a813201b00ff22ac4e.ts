import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Catalog, CatalogBonus, CatalogExtraReward, CatalogItem, CatalogProgress, CatalogReward, GearPower, Image } from '../types.js';

/**
 * ff12098bad4989a813201b00ff22ac4e CatalogQuery
 *
 * query CatalogQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface CatalogQuery_ff12098 {
    catalog: /** Catalog */ OperationFieldType<'CatalogQuery', 'catalog', {
        bonus: /** CatalogBonus */ LinkedFieldType<Catalog, 'bonus', {
            dailyWinPoint: CatalogBonus['dailyWinPoint'];
            isBigRun: CatalogBonus['isBigRun'];
            isFest: CatalogBonus['isFest'];
            isSeasonClosing: CatalogBonus['isSeasonClosing'];
        }, false>;
        progress: /** CatalogProgress */ LinkedFieldType<Catalog, 'progress', {
            __typename: 'CatalogProgress';
            currentPoint: CatalogProgress['currentPoint'];
            extraReward: /** CatalogExtraReward */ LinkedFieldType<CatalogProgress, 'extraReward', {
                __typename: 'CatalogExtraReward';
                item: /** CatalogItem */ LinkedFieldType<CatalogExtraReward, 'item', {
                    id: CatalogItem['id'];
                    image: /** Image */ LinkedFieldType<CatalogItem, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: CatalogItem['name'];
                }, false>;
                nextAcceptLevel: CatalogExtraReward['nextAcceptLevel'];
            }, false>;
            level: CatalogProgress['level'];
            levelUpPoint: CatalogProgress['levelUpPoint'];
            rewards: /** CatalogReward */ LinkedFieldType<CatalogProgress, 'rewards', {
                currentPoint: CatalogReward['currentPoint'];
                item: /** CatalogItem */ LinkedFieldType<CatalogReward, 'item', {
                    id: CatalogItem['id'];
                    amount: CatalogItem['amount'];
                    image: /** Image */ LinkedFieldType<CatalogItem, 'image', {
                        url: Image['url'];
                    }, false>;
                    kind: CatalogItem['kind'];
                    name: CatalogItem['name'];
                    primaryGearPower: /** GearPower */ LinkedFieldType<CatalogItem, 'primaryGearPower', {
                        image: /** Image */ LinkedFieldType<GearPower, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: GearPower['name'];
                    }, false>;
                }, false>;
                level: CatalogReward['level'];
                state: CatalogReward['state'];
            }, true>;
            totalPoint: CatalogProgress['totalPoint'];
        }, false>;
        seasonEndTime: Catalog['seasonEndTime'];
        seasonName: Catalog['seasonName'];
    }>;
}

export default CatalogQuery_ff12098;
export { CatalogQuery_ff12098 };
