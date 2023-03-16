import { PlayControlOption } from './types.js';

//
// Challenge
//

/** bc71fc0264f3f72256724b069f7a4097 JourneyQuery variables */
export interface JourneyVariables {
    id: string;
}

/** 09eee118fa16415d6bc3846bc6e5d8e5 JourneyRefetchQuery variables */
export type JourneyRefetchVariables = JourneyVariables;

/** 5a199948d059985bd758cc0175131f4a JourneyChallengeDetailQuery variables */
export interface JourneyChallengeDetailVariables {
    journeyId: string;
}

/** 38e58b84376a2ad49ddbe4061b948455 JourneyChallengeDetailQuery variables */
export type JourneyChallengeDetailVariables_38e58b8 = JourneyChallengeDetailVariables;

/** e7414c7a64bf80bb50ce21d5ccfde772 JourneyChallengeDetailRefetchQuery variables */
export type JourneyChallengeDetailRefetchVariables = JourneyChallengeDetailVariables;

/** 8dc246933b1f4e26a6dfd251878cf786 JourneyChallengeDetailRefetchQuery variables */
export type JourneyChallengeDetailRefetchVariables_8dc2469 = JourneyChallengeDetailVariables;

/** 991bace9e8c52d63084cd1570a97a5b4 SupportButton_SupportChallengeMutation variables */
export type SupportButtonSupportChallengeVariables = unknown;
/** 30aa261475d43bd765b4200fc67003c8 SupportButton_SupportChallengeMutation variables */
export type SupportButtonSupportChallengeVariables_30aa261 = unknown;

//
// Checkin
//

/** daffd9621680664dbf19d27e87484ac7 CheckinWithQRCodeMutation variables */
export interface CheckinWithQRCodeMutationVariables {
    checkinEventId: string;
}

/** 8d54e1c6bdcc65181f65adc582914ad8 CheckinWithQRCodeMutation variables */
export type CheckinWithQRCodeMutationVariables_8d54e1c = CheckinWithQRCodeMutationVariables;

/** 8e3fecf7cfce83f6831b17e9052791d0 CheckinWithQRCodeMutation variables */
export type CheckinWithQRCodeMutationVariables_8e3fecf = CheckinWithQRCodeMutationVariables;

//
// VsHistory
//

/** 094a9b44ff21e8c409d6046fc1af9dfe PagerUpdateBattleHistoriesByVsModeQuery variables */
export interface PagerUpdateBattleHistoriesByVsModeVariables {
    /** Always false in the official app */
    isBankara: boolean;
    /** Always false in the official app */
    isLeague: boolean;
    /** Always false in the official app */
    isPrivate: boolean;
    /** Always false in the official app */
    isRegular: boolean;
    /** Always false in the official app */
    isXBattle: boolean;
}

/** 7297ae42bbb1958cfe438736865d304e PagerUpdateBattleHistoriesByVsModeQuery */
export type PagerUpdateBattleHistoriesByVsModeVariables_7297ae4 = PagerUpdateBattleHistoriesByVsModeVariables;

/** 000afbc113f5653d2c2cee42ff6cdeab PagerUpdateBattleHistoriesByVsModeQuery */
export type PagerUpdateBattleHistoriesByVsModeVariables_000afbc = PagerUpdateBattleHistoriesByVsModeVariables;

/** 67224c25f7b2e605205d152009f593c9 PagerUpdateBattleHistoriesByVsModeQuery variables */
export type PagerUpdateBattleHistoriesByVsModeVariables_67224c2 = PagerUpdateBattleHistoriesByVsModeVariables;

/** 92b56403c0d9b1e63566ec98fef52eb3 BankaraBattleHistoriesRefetchQuery variables */
export interface BankaraBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}

/** 964c03ed28eb640438d8113534de2fe4 BankaraBattleHistoriesRefetchQuery variables */
export type BankaraBattleHistoriesRefetchVariables_964c03e = BankaraBattleHistoriesRefetchVariables;

/** d8a8662345593bbbcd63841c91d4c6f5 BankaraBattleHistoriesRefetchQuery variables */
export type BankaraBattleHistoriesRefetchVariables_d8a8662 = BankaraBattleHistoriesRefetchVariables;

/** 7161210aad0793e58e76f20e0443855e LatestBattleHistoriesRefetchQuery variables */
export interface LatestBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}

/** 047c1ff4d6b9f03b082aa6ffdb200a6a LatestBattleHistoriesRefetchQuery variables */
export type LatestBattleHistoriesRefetchVariables_047c1ff = LatestBattleHistoriesRefetchVariables;

/** 80585ad4e4ecb674c3d8cd278adb1d21 LatestBattleHistoriesRefetchQuery variables */
export type LatestBattleHistoriesRefetchVariables_80585ad = LatestBattleHistoriesRefetchVariables;

/** 89bc61012dcf170d9253f406ebebee67 PrivateBattleHistoriesRefetchQuery variables */
export interface PrivateBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}

/** 4835a28419ad3c7bfacbb30ca4008140 PrivateBattleHistoriesRefetchQuery variables */
export type PrivateBattleHistoriesRefetchVariables_4835a28 = PrivateBattleHistoriesRefetchVariables;

/** b304e707648f0669a939943d46febce1 PrivateBattleHistoriesRefetchQuery variables */
export type PrivateBattleHistoriesRefetchVariables_b304e70 = PrivateBattleHistoriesRefetchVariables;

/** 9ef974f2686a88f24e0dbff6f63a83c4 PrivateBattleHistoriesRefetchQuery variables */
export type PrivateBattleHistoriesRefetchVariables_9ef974f = PrivateBattleHistoriesRefetchVariables;

/** 4c95233c8d55e7c8cc23aae06109a2e8 RegularBattleHistoriesRefetchQuery variables */
export interface RegularBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}

/** 04e5d83f4243541c369b2e7556b9b809 RegularBattleHistoriesRefetchQuery variables */
export type RegularBattleHistoriesRefetchVariables_04e5d83 = RegularBattleHistoriesRefetchVariables;

/** 333d0a48071b0036449e35ece577b06f RegularBattleHistoriesRefetchQuery variables */
export type RegularBattleHistoriesRefetchVariables_333d0a4 = RegularBattleHistoriesRefetchVariables;

/** fed6e752513a9986177e8eec50dfdd3c RegularBattleHistoriesRefetchQuery variables */
export type RegularBattleHistoriesRefetchVariables_fed6e75 = RegularBattleHistoriesRefetchVariables;

/** 94711fc9f95dd78fc640909f02d09215 XBattleHistoriesRefetchQuery variables */
export interface XBattleHistoriesRefetchVariables {
    /** Always true in the official app */
    fetchCurrentPlayer: boolean;
}

/** ba35dcea6d5666463e86273e1756d9ed XBattleHistoriesRefetchQuery variables */
export type XBattleHistoriesRefetchVariables_ba35dce = XBattleHistoriesRefetchVariables;

/** 291295ad311b99a6288fc95a5c4cb2d2 VsHistoryDetailQuery variables */
export interface VsHistoryDetailVariables {
    vsResultId: string;
}

/** 2b085984f729cd51938fc069ceef784a VsHistoryDetailQuery variables */
export type VsHistoryDetailVariables_2b08598 = VsHistoryDetailVariables;

/** cd82f2ade8aca7687947c5f3210805a6 VsHistoryDetailQuery variables */
export type VsHistoryDetailVariables_cd82f2a = VsHistoryDetailVariables;

/** 994cf141e55213e6923426caf37a1934 VsHistoryDetailPagerRefetchQuery variables */
export interface VsHistoryDetailPagerRefetchVariables {
    vsResultId: string;
}

//
// CoopHistory
//

/** 379f0d9b78b531be53044bcac031b34b CoopHistoryDetailQuery variables */
export interface CoopHistoryDetailVariables {
    coopHistoryDetailId: string;
}

/** 9ade2aa3656324870ccec023636aed32 CoopHistoryDetailQuery variables */
export type CoopHistoryDetailVariables_9ade2aa = CoopHistoryDetailVariables;

/** 3cc5f826a6646b85f3ae45db51bd0707 CoopHistoryDetailQuery variables */
export type CoopHistoryDetailVariables_3cc5f82 = CoopHistoryDetailVariables;

/** f3799a033f0a7ad4b1b396f9a3bafb1e CoopHistoryDetailQuery variables */
export type CoopHistoryDetailVariables_f3799a0 = CoopHistoryDetailVariables;

/** d3188df2fd4436870936b109675e2849 CoopHistoryDetailRefetchQuery variables */
export interface CoopHistoryDetailRefetchVariables {
    id: string;
}

/** 2b83817b6e88b202d25939fe04658d33 CoopRecordBigRunRecordContainerPaginationQuery variables */
export type CoopRecordBigRunRecordContainerPaginationVariables = unknown;

//
// Fest
//

/** 96c3a7fd484b8d3be08e0a3c99eb2a3d DetailFestRecordDetailQuery variables */
export interface DetailFestRecordDetailVariables {
    festId: string;
}

/** 18c7c465b18de5829347b7a7f1e571a1 DetailFestRefethQuery variables */
export type DetailFestRefetchVariables = DetailFestRecordDetailVariables;

/** 2d661988c055d843b3be290f04fb0db9 DetailFestRecordDetailQuery variables */
export type DetailFestRecordDetailVariables_2d66198 = DetailFestRecordDetailVariables;

/** 0eb7bac3d8aabcad0e9d663ee5b90846 DetailFestRefethQuery variables */
export type DetailFestRefetchVariables_0eb7bac = DetailFestRecordDetailVariables;

/** cc38f388c51f9930bd7cca966893f1b4 DetailRankingQuery variables */
export interface DetailRankingVariables {
    festId: string;
}

/** 4869de13d0d209032b203608cb598aef DetailRankingQuery variables */
export type DetailRankingVariables_4869de1 = DetailRankingVariables;

/** 58bdd28e3cf71c3bf38bc45836ee1e96 DetailRankingQuery variables */
export type DetailRankingVariables_58bdd28 = DetailRankingVariables;

/** f488fccdad37b9e19aed50a8d6e83a24 RankingHoldersFestTeamRankingHoldersPaginationQuery variables */
export interface RankingHoldersFestTeamRankingHoldersPaginationVariables {
    /** PageInfo.endCursor */
    cursor: string;
    /** Always 25 in the app */
    first: number;
    /** FestTeam ID */
    id: string;
}

/** be2eb9e9b8dd680519eb59cc46c1a32b RankingHoldersFestTeamRankingHoldersPaginationQuery variables */
export type RankingHoldersFestTeamRankingHoldersPaginationVariables_be2eb9e = RankingHoldersFestTeamRankingHoldersPaginationVariables;

/** 53ee6b6e2acc3859bf42454266d671fc DetailVotingStatusQuery */
export interface DetailVotingStatusVariables {
    festId: string;
}

/** 92f51ed1ab462bbf1ab64cad49d36f79 DetailFestVotingStatusRefethQuery variables */
export type DetailFestVotingStatusRefetchVariables = DetailVotingStatusVariables;

/** a2c742c840718f37488e0394cd6e1e08 VotesUpdateFestVoteMutation variables */
export interface VotesUpdateFestVoteVariables {
    teamId: string;
}

//
// Gesotown
//

/** 6eb1b255b2cf04c08041567148c883ad SaleGearDetailQuery variables */
export interface SaleGearDetailVariables {
    saleGearId: string;
}

/** 7c4173bb0f5d56f29dbec889173cff24 SaleGearDetailQuery variables */
export type SaleGearDetailVariables_7c4173b = SaleGearDetailVariables;

/** b79b7a101a243912754f72437e2ad7e5 SaleGearDetailOrderGesotownGearMutation variables */
export interface SaleGearDetailOrderGesotownGearVariables {
    input: {
        id: string;
        isForceOrder: boolean;
    };
}

/** aebd822b4a4e48dc48f618411054b8f5 SaleGearDetailOrderGesotownGearMutation variables */
export type SaleGearDetailOrderGesotownGearVariables_aebd822 = unknown;

//
// Outfits
//

/** d935d9e9ba7a5b6b5d6ece7f253304fc MyOutfitDetailQuery variables */
export interface MyOutfitDetailVariables {
    myOutfitId: string;
}

/** 31ff008ea218ffbe11d958a52c6f959f CreateMyOutfitMutation variables */
export interface CreateMyOutfitVariables {
    input: {
        myOutfit: CreateMyOutfitInput;
    };
    /** Always ["client:root:__connection_myOutfits_connection"] */
    connections: string[];
}

/** bb809066282e7d659d3b9e9d4e46b43b UpdateMyOutfitMutation variables */
export interface UpdateMyOutfitVariables {
    input: {
        myOutfit: UpdateMyOutfitInput;
    };
}

export interface MyOutfitInput {
    controlOptionConsole: PlayControlOption;
    controlOptionHandheld: PlayControlOption;
    weaponId: number;
    headGearId: number;
    clothingGearId: number;
    shoesGearId: number;
}

export type CreateMyOutfitInput = MyOutfitInput;
export type UpdateMyOutfitInput = {
    id: string;
} & MyOutfitInput;

/** 3ba5572efce5bebbd859fc2d269d223c useShareMyOutfitQuery variables */
export interface ShareMyOutfitVariables {
    myOutfitIndex: number;
    timezoneOffset: number;
}

//
// Replay
//

/** 8e904b52b5080b6f4b4448a50762362c DownloadSearchReplayQuery variables */
export interface DownloadSearchReplayVariables {
    code: string;
}

/** 43a5f23eec238d7ee827cc87f47f050c DownloadSearchReplayQuery variables */
export type DownloadSearchReplayVariables_43a5f23 = DownloadSearchReplayVariables;

/** cde4fe7d6467b32d5a06279492aa21dc DownloadSearchReplayQuery variables */
export type DownloadSearchReplayVariables_cde4fe7 = DownloadSearchReplayVariables;

/** b461048f9ffc414b3967a3cdad0805dd DownloadSearchReplayQuery variables */
export type DownloadSearchReplayVariables_b461048 = DownloadSearchReplayVariables;

/** 87bff2b854168b496c2da8c0e7f3e5bc ReplayModalReserveReplayDownloadMutation variables */
export interface ReplayModalReserveReplayDownloadVariables {
    input: {
        id: string;
    };
}

//
// Home/Settings
//

/** 22e2fa8294168003c21b00c333c35384 HomeQuery variables */
export interface HomeVariables {
    naCountry: string;
}

/** 73bd677ed986ad2cb7004ceabfff4d38 SettingQuery variables */
export interface SettingVariables {
    naCountry: string;
}
