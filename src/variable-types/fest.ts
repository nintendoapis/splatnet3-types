interface request_variables_app {}
export default request_variables_app;

//
// DetailFestRecordDetailQuery, DetailFestRefethQuery
//

/** 02946c9d6dec617425ed41ee9a9bf467ea2ddfb85e0a36b09e4c3ea2e0b9ac5b DetailFestRecordDetailQuery variables */
export interface DetailFestRecordDetailVariables {
    festId: string;
}

/** 96c3a7fd484b8d3be08e0a3c99eb2a3d DetailFestRecordDetailQuery variables */
export type DetailFestRecordDetailVariables_96c3a7f = DetailFestRecordDetailVariables;

/** dc5c1890cec78094d919e71621e9b4bc1ee06cfa99812dcacb401b8116a1ccad DetailFestRefethQuery variables */
export type DetailFestRefetchVariables = DetailFestRecordDetailVariables;

/** 18c7c465b18de5829347b7a7f1e571a1 DetailFestRefethQuery variables */
export type DetailFestRefetchVariables_18c7c46 = DetailFestRecordDetailVariables;

/** 2d661988c055d843b3be290f04fb0db9 DetailFestRecordDetailQuery variables */
export type DetailFestRecordDetailVariables_2d66198 = DetailFestRecordDetailVariables;

/** 0eb7bac3d8aabcad0e9d663ee5b90846 DetailFestRefethQuery variables */
export type DetailFestRefetchVariables_0eb7bac = DetailFestRecordDetailVariables;

interface request_variables_app {
    '2d661988c055d843b3be290f04fb0db9': DetailFestRecordDetailVariables_2d66198;
    '96c3a7fd484b8d3be08e0a3c99eb2a3d': DetailFestRecordDetailVariables_96c3a7f;
    '02946c9d6dec617425ed41ee9a9bf467ea2ddfb85e0a36b09e4c3ea2e0b9ac5b': DetailFestRecordDetailVariables;

    '0eb7bac3d8aabcad0e9d663ee5b90846': DetailFestRefetchVariables_0eb7bac;
    '18c7c465b18de5829347b7a7f1e571a1': DetailFestRefetchVariables_18c7c46;
    'dc5c1890cec78094d919e71621e9b4bc1ee06cfa99812dcacb401b8116a1ccad': DetailFestRefetchVariables;
}

//
// DetailRankingQuery
//

/** 2e1f603f6da371874a7473bb68418d9308f1fd2492e57fd2b7d9bbb80138f8c0 DetailRankingQuery variables */
export interface DetailRankingVariables {
    festId: string;
}

/** cc38f388c51f9930bd7cca966893f1b4 DetailRankingQuery variables */
export type DetailRankingVariables_cc38f38 = DetailRankingVariables;

/** 4869de13d0d209032b203608cb598aef DetailRankingQuery variables */
export type DetailRankingVariables_4869de1 = DetailRankingVariables;

/** 58bdd28e3cf71c3bf38bc45836ee1e96 DetailRankingQuery variables */
export type DetailRankingVariables_58bdd28 = DetailRankingVariables;

interface request_variables_app {
    '58bdd28e3cf71c3bf38bc45836ee1e96': DetailRankingVariables_58bdd28;
    '4869de13d0d209032b203608cb598aef': DetailRankingVariables_4869de1;
    'cc38f388c51f9930bd7cca966893f1b4': DetailRankingVariables_cc38f38;
    '2e1f603f6da371874a7473bb68418d9308f1fd2492e57fd2b7d9bbb80138f8c0': DetailRankingVariables;
}

//
// RankingHoldersFestTeamRankingHoldersPaginationQuery
//

/** 34460535ce2b699ed0617d67e22a7e3290fd30041559bf6f05d408d06f1c9938 RankingHoldersFestTeamRankingHoldersPaginationQuery variables */
export interface RankingHoldersFestTeamRankingHoldersPaginationVariables {
    /** PageInfo.endCursor */
    cursor: string;
    /** Always 25 in the app */
    first: number;
    /** FestTeam ID */
    id: string;
}

/** f488fccdad37b9e19aed50a8d6e83a24 RankingHoldersFestTeamRankingHoldersPaginationQuery variables */
export type RankingHoldersFestTeamRankingHoldersPaginationVariables_f488fcc = RankingHoldersFestTeamRankingHoldersPaginationVariables;

/** be2eb9e9b8dd680519eb59cc46c1a32b RankingHoldersFestTeamRankingHoldersPaginationQuery variables */
export type RankingHoldersFestTeamRankingHoldersPaginationVariables_be2eb9e = RankingHoldersFestTeamRankingHoldersPaginationVariables;

interface request_variables_app {
    'be2eb9e9b8dd680519eb59cc46c1a32b': RankingHoldersFestTeamRankingHoldersPaginationVariables_be2eb9e;
    'f488fccdad37b9e19aed50a8d6e83a24': RankingHoldersFestTeamRankingHoldersPaginationVariables_f488fcc;
    '34460535ce2b699ed0617d67e22a7e3290fd30041559bf6f05d408d06f1c9938': RankingHoldersFestTeamRankingHoldersPaginationVariables;
}

//
// DetailVotingStatusQuery, DetailFestVotingStatusRefethQuery
//

/** e2aafab18dab26ba1b6d40838c6842201f6480d62f8f3dffecad8dd4c5b102c1 DetailVotingStatusQuery */
export interface DetailVotingStatusVariables {
    festId: string;
}

/** 53ee6b6e2acc3859bf42454266d671fc DetailVotingStatusQuery */
export type DetailVotingStatusVariables_53ee6b6 = DetailVotingStatusVariables;

/** 4a24f9ff7b1c5a5c520872ce083c1623354c3ec092a0bf95c0dc1c12a1e3fb63 DetailFestVotingStatusRefethQuery variables */
export type DetailFestVotingStatusRefetchVariables = DetailVotingStatusVariables;

/** 92f51ed1ab462bbf1ab64cad49d36f79 DetailFestVotingStatusRefethQuery variables */
export type DetailFestVotingStatusRefetchVariables_92f51ed = DetailVotingStatusVariables;

interface request_variables_app {
    '92f51ed1ab462bbf1ab64cad49d36f79': DetailFestVotingStatusRefetchVariables_92f51ed;
    '4a24f9ff7b1c5a5c520872ce083c1623354c3ec092a0bf95c0dc1c12a1e3fb63': DetailFestVotingStatusRefetchVariables;

    '53ee6b6e2acc3859bf42454266d671fc': DetailVotingStatusVariables_53ee6b6;
    'e2aafab18dab26ba1b6d40838c6842201f6480d62f8f3dffecad8dd4c5b102c1': DetailVotingStatusVariables;
}

//
// VotesUpdateFestVoteMutation
//

/** b0830a3c3c9d8aa6ed83e200aed6b008f992acdba4550ab4399417c1f765e7e3 VotesUpdateFestVoteMutation variables */
export interface VotesUpdateFestVoteVariables {
    teamId: string;
}

/** a2c742c840718f37488e0394cd6e1e08 VotesUpdateFestVoteMutation variables */
export type VotesUpdateFestVoteVariables_a2c742c = VotesUpdateFestVoteVariables;

interface request_variables_app {
    'a2c742c840718f37488e0394cd6e1e08': VotesUpdateFestVoteVariables_a2c742c;
    'b0830a3c3c9d8aa6ed83e200aed6b008f992acdba4550ab4399417c1f765e7e3': VotesUpdateFestVoteVariables;
}
