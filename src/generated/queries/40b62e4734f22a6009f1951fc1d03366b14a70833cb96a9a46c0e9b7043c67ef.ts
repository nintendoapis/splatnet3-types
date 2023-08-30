import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Catalog, CatalogBonus, CatalogExtraReward, CatalogItem, CatalogProgress, CatalogReward, ClothingGear, GearPower, HeadGear, Image, ShoesGear } from '../../types.js';

/**
 * 40b62e4734f22a6009f1951fc1d03366b14a70833cb96a9a46c0e9b7043c67ef CatalogQuery
 *
 * query CatalogQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface CatalogQuery_40b62e4 {
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

export default CatalogQuery_40b62e4;
export { CatalogQuery_40b62e4 };
