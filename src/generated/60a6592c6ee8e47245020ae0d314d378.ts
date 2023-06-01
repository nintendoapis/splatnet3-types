import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Catalog, CatalogBonus, CatalogExtraReward, CatalogItem, CatalogProgress, CatalogReward, GearPower, Image } from '../types.js';

/**
 * 60a6592c6ee8e47245020ae0d314d378 CatalogRefetchQuery
 *
 * query CatalogRefetchQuery
 *
 * Generated 01/06/2023 from SplatNet 3 4.0.0-e2ee936d.
 */
interface CatalogRefetchQuery_60a6592 {
    catalog: /** Catalog */ OperationFieldType<'CatalogRefetchQuery', 'catalog', {
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

export default CatalogRefetchQuery_60a6592;
export { CatalogRefetchQuery_60a6592 };
