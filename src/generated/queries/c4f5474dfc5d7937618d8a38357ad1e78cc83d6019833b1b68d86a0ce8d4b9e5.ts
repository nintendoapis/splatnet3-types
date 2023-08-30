import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Catalog, CatalogBonus, CatalogExtraReward, CatalogItem, CatalogProgress, CatalogReward, ClothingGear, GearPower, HeadGear, Image, ShoesGear } from '../../types.js';

/**
 * c4f5474dfc5d7937618d8a38357ad1e78cc83d6019833b1b68d86a0ce8d4b9e5 CatalogRefetchQuery
 *
 * query CatalogRefetchQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface CatalogRefetchQuery_c4f5474 {
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
                    clothingGear: /** ClothingGear */ LinkedFieldType<CatalogItem, 'clothingGear', {
                        image: /** Image */ LinkedFieldType<ClothingGear, 'image', {
                            url: Image['url'];
                        }, false>;
                        primaryGearPower: /** GearPower */ LinkedFieldType<ClothingGear, 'primaryGearPower', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
                    headGear: /** HeadGear */ LinkedFieldType<CatalogItem, 'headGear', {
                        image: /** Image */ LinkedFieldType<HeadGear, 'image', {
                            url: Image['url'];
                        }, false>;
                        primaryGearPower: /** GearPower */ LinkedFieldType<HeadGear, 'primaryGearPower', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, false>;
                    }, false>;
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
                    shoesGear: /** ShoesGear */ LinkedFieldType<CatalogItem, 'shoesGear', {
                        image: /** Image */ LinkedFieldType<ShoesGear, 'image', {
                            url: Image['url'];
                        }, false>;
                        primaryGearPower: /** GearPower */ LinkedFieldType<ShoesGear, 'primaryGearPower', {
                            image: /** Image */ LinkedFieldType<GearPower, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: GearPower['name'];
                        }, false>;
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

export default CatalogRefetchQuery_c4f5474;
export { CatalogRefetchQuery_c4f5474 };
