import { FestState, FestTeamRole, FestVoteState } from '../enum.js';
import { Colour, CurrentPlayer, EdgeConnections, Nameplate, NodeList, NodeListTotal, NodeListWithCount } from './common.js';
import { Image } from './common.js';
import { VsStage } from './stage.js';
import { SpecialWeapon, SubWeapon, Weapon } from './weapon.js';

export interface Fest {
    __typename: 'Fest';
    id: string;
    title: string;
    lang: string;
    startTime: string;
    endTime: string;
    midtermTime: string;
    state: FestState | keyof typeof FestState;
    image: Pick<Image, 'url'>;
    teams: FestTeam[];
    playerResult: FestPlayerResult | null;
    myTeam: Pick<FestTeam, 'id' | 'teamName' | 'color'> | null;
    isVotable: boolean;
    undecidedVotes: NodeListTotal | null;
    tricolorStage: Pick<VsStage, 'id' | 'name' | 'image'>;
}

export interface FestTeam {
    __typename: 'FestTeam';
    id: string;
    teamName: string;
    color: Colour;
    image: Pick<Image, 'url'>;
    /** null = not voted or not voted for this team */
    myVoteState: FestVoteState | null;
    preVotes: NodeListTotal | null;
    votes: NodeListTotal | null;
    role: FestTeamRole | keyof typeof FestTeamRole | null;
    result: FestTeamResult;
}

export interface FestVote {
    playerName: string;
    userIcon: Pick<Image, 'url'>;
}

export interface FestTeamResult {
    __typename: 'FestTeamResult';
    isWinner: boolean;
    horagaiRatio: number;
    isHoragaiRatioTop: boolean;
    voteRatio: number;
    isVoteRatioTop: boolean;
    regularContributionRatio: number;
    isRegularContributionRatioTop: boolean;
    challengeContributionRatio: number;
    isChallengeContributionRatioTop: boolean;
    tricolorContributionRatio: number | null;
    isTricolorContributionRatioTop: boolean | null;
    rankingHolders: EdgeConnections<FestRankingHolder>;
}

export interface FestRankingHolder {
    __typename: 'FestRankingHolder';
    __isPlayer: 'FestRankingHolder';
    id: string;
    name: string;
    nameId: string;
    byname: string;
    rank: number;
    festPower: number;
    weapon: Weapon_festRankingHolder;
    nameplate: Nameplate;
}

export type Weapon_festRankingHolder = Pick<Weapon, 'id' | 'name'> & {
    subWeapon: Pick<SubWeapon, 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image'>;
    image3d: Pick<Image, 'url'>;
    image2d: Pick<Image, 'url'>;
    image3dThumbnail: Pick<Image, 'url'>;
    image2dThumbnail: Pick<Image, 'url'>;
};

export interface FestPlayerResult {
    grade: string; // "Gear Ruler"
    horagai: number;
    regularContributionAverage: number;
    regularContributionTotal: number;
    challengeContributionAverage: number | null;
    challengeContributionTotal: number | null;
    tricolorContributionEnabled: boolean;
    tricolorContributionAverage: number | null;
    tricolorContributionTotal: number | null;
    maxFestPower: number | null;
}

/** 96c3a7fd484b8d3be08e0a3c99eb2a3d DetailFestRecordDetailQuery */
export interface DetailFestRecordDetailResult {
    fest: Fest_detail | null;
    currentPlayer: Pick<CurrentPlayer, 'name' | 'userIcon'>;
}

export type Fest_detail = Pick<Fest, '__typename' | 'id' | 'title' | 'lang' | 'startTime' | 'endTime' | 'state' | 'image' | 'playerResult' | 'myTeam' | 'isVotable' | 'undecidedVotes'> & {
    teams: FestTeam_detail[];
};
export type FestTeam_detail = Pick<FestTeam, 'id' | 'teamName' | 'color' | 'image' | 'myVoteState' | 'preVotes' | 'votes' | 'role'> & {
    result: Pick<FestTeamResult, '__typename' | 'isWinner' | 'horagaiRatio' | 'isHoragaiRatioTop' | 'voteRatio' | 'isVoteRatioTop' | 'regularContributionRatio' | 'isRegularContributionRatioTop' | 'challengeContributionRatio' | 'isChallengeContributionRatioTop' | 'tricolorContributionRatio' | 'isTricolorContributionRatioTop'> | null;
};

/** 96c3a7fd484b8d3be08e0a3c99eb2a3d DetailFestRecordDetailQuery variables */
export interface DetailFestRecordDetailVariables {
    festId: string;
}

/** 18c7c465b18de5829347b7a7f1e571a1 DetailFestRefethQuery */
export type DetailFestRefetchResult = DetailFestRecordDetailResult;
/** 18c7c465b18de5829347b7a7f1e571a1 DetailFestRefethQuery variables */
export type DetailFestRefetchVariables = DetailFestRecordDetailVariables;

/** 2d661988c055d843b3be290f04fb0db9 DetailFestRecordDetailQuery */
export interface DetailFestRecordDetailResult_2d66198 {
    fest: Fest_detail_2d66198 | null;
    currentPlayer: Pick<CurrentPlayer, 'name' | 'userIcon'>;
}

export type Fest_detail_2d66198 = Pick<Fest, '__typename' | 'id' | 'title' | 'lang' | 'startTime' | 'endTime' | 'state' | 'image' | 'myTeam' | 'isVotable' | 'undecidedVotes'> & {
    teams: FestTeam_detail_2d66198[];
    playerResult: FestPlayerResult_detail_2d66198 | null;
};
export type FestTeam_detail_2d66198 = Pick<FestTeam, 'id' | 'teamName' | 'color' | 'image' | 'myVoteState' | 'preVotes' | 'votes' | 'role'> & {
    result: Pick<FestTeamResult, '__typename' | 'isWinner' | 'horagaiRatio' | 'isHoragaiRatioTop' | 'voteRatio' | 'isVoteRatioTop' | 'regularContributionRatio' | 'isRegularContributionRatioTop' | 'challengeContributionRatio' | 'isChallengeContributionRatioTop'> | null;
};
export type FestPlayerResult_detail_2d66198 = Pick<FestPlayerResult, 'grade' | 'horagai' | 'regularContributionAverage' | 'regularContributionTotal' | 'challengeContributionAverage' | 'challengeContributionTotal' | 'maxFestPower'>;

/** 2d661988c055d843b3be290f04fb0db9 DetailFestRecordDetailQuery variables */
export type DetailFestRecordDetailVariables_2d66198 = DetailFestRecordDetailVariables;

/** 0eb7bac3d8aabcad0e9d663ee5b90846 DetailFestRefethQuery */
export type DetailFestRefetchResult_0eb7bac = DetailFestRecordDetailResult_2d66198;
/** 0eb7bac3d8aabcad0e9d663ee5b90846 DetailFestRefethQuery variables */
export type DetailFestRefetchVariables_0eb7bac = DetailFestRecordDetailVariables_2d66198;

/** 4869de13d0d209032b203608cb598aef DetailRankingQuery */
export interface DetailRankingResult {
    fest: Fest_ranking | null;
}

export type Fest_ranking = Pick<Fest, '__typename' | 'id' | 'lang'> & {
    teams: FestTeam_ranking[];
};
export type FestTeam_ranking = Pick<FestTeam, 'id' | 'teamName' | 'image' | 'color'> & {
    result: Pick<FestTeamResult, 'rankingHolders'> | null;
};

/** 4869de13d0d209032b203608cb598aef DetailRankingQuery variables */
export interface DetailRankingVariables {
    festId: string;
}

/** 58bdd28e3cf71c3bf38bc45836ee1e96 DetailRankingQuery */
export interface DetailRankingResult_58bdd28 {
    fest: Fest_ranking_58bdd28 | null;
}

export type Fest_ranking_58bdd28 = Pick<Fest, '__typename' | 'id' | 'lang'> & {
    teams: FestTeam_ranking_58bdd28[];
};
export type FestTeam_ranking_58bdd28 = Pick<FestTeam, 'id' | 'teamName' | 'image' | 'color'> & {
    result: FestTeamResult_ranking_58bdd28 | null;
};
export type FestTeamResult_ranking_58bdd28 = Pick<FestTeamResult, never> & {
    rankingHolders: NodeList<FestRankingHolder_ranking_58bdd28>;
};
export type FestRankingHolder_ranking_58bdd28 = Pick<FestRankingHolder, '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'rank' | 'festPower' | 'nameplate'> & {
    weapon: Weapon_festRankingHolder_58bdd28;
};
export type Weapon_festRankingHolder_58bdd28 = Pick<Weapon, 'id' | 'name' | 'image'> & {
    subWeapon: Pick<SubWeapon, 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image'>;
    image3d: Pick<Image, 'url'>;
    image2d: Pick<Image, 'url'>;
    image3dThumbnail: Pick<Image, 'url'>;
    image2dThumbnail: Pick<Image, 'url'>;
    originalImage: Pick<Image, 'url'>;
};

/** 58bdd28e3cf71c3bf38bc45836ee1e96 DetailRankingQuery variables */
export type DetailRankingVariables_58bdd28 = DetailRankingVariables;

/** be2eb9e9b8dd680519eb59cc46c1a32b RankingHoldersFestTeamRankingHoldersPaginationQuery */
export interface RankingHoldersFestTeamRankingHoldersPaginationResult {
    node: FestTeam_rankingPagination;
}

export type FestTeam_rankingPagination = Pick<FestTeam, '__typename' | 'id' | 'teamName' | 'color'> & {
    result: FestTeamResult_rankingPagination | null;
};
export type FestTeamResult_rankingPagination = Pick<FestTeamResult, never> & {
    rankingHolders: EdgeConnections<FestRankingHolder_rankingPagination>;
};
export type FestRankingHolder_rankingPagination = Pick<FestRankingHolder, '__typename' | '__isPlayer' | 'id' | 'name' | 'nameId' | 'byname' | 'rank' | 'festPower' | 'nameplate'> & {
    weapon: Weapon_rankingPagination;
};
export type Weapon_rankingPagination = Pick<Weapon, 'id' | 'name' | 'image'> & {
    subWeapon: Pick<SubWeapon, 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image'>;
    image3d: Pick<Image, 'url'>;
    image2d: Pick<Image, 'url'>;
    image3dThumbnail: Pick<Image, 'url'>;
    image2dThumbnail: Pick<Image, 'url'>;
};

/** be2eb9e9b8dd680519eb59cc46c1a32b RankingHoldersFestTeamRankingHoldersPaginationQuery variables */
export interface RankingHoldersFestTeamRankingHoldersPaginationVariables {
    /** PageInfo.endCursor */
    cursor: string;
    /** Always 25 in the app */
    first: number;
    /** FestTeam ID */
    id: string;
}

/** 53ee6b6e2acc3859bf42454266d671fc DetailVotingStatusQuery */
export interface DetailVotingStatusResult {
    fest: Fest_votingStatus | null;
}

export type Fest_votingStatus = Pick<Fest, '__typename' | 'id' | 'lang'> & {
    teams: FestTeam_votingStatus[];
    undecidedVotes: NodeList<FestVote> | null;
};
export type FestTeam_votingStatus = Pick<FestTeam, 'id' | 'teamName' | 'image' | 'color' | 'myVoteState'> & {
    preVotes: NodeList<FestVote> | null;
    votes: NodeList<FestVote> | null;
};

/** 53ee6b6e2acc3859bf42454266d671fc DetailVotingStatusQuery */
export interface DetailVotingStatusVariables {
    festId: string;
}

/** 92f51ed1ab462bbf1ab64cad49d36f79 DetailFestVotingStatusRefethQuery */
export type DetailFestVotingStatusRefetchResult = DetailVotingStatusResult;
/** 92f51ed1ab462bbf1ab64cad49d36f79 DetailFestVotingStatusRefethQuery variables */
export type DetailFestVotingStatusRefetchVariables = DetailVotingStatusVariables;

/** 44c76790b68ca0f3da87f2a3452de986 FestRecordQuery */
export interface FestRecordResult {
    festRecords: NodeList<Fest_record>;
    currentPlayer: Pick<CurrentPlayer, 'name' | 'userIcon'>;
}

export type Fest_record = Pick<Fest, 'id' | 'title' | 'lang' | 'startTime' | 'endTime' | 'state' | 'image'> & {
    playerResult: Pick<FestPlayerResult, 'grade'> | null;
    teams: FestTeam_record[];
    myTeam: Pick<FestTeam, 'id' | 'teamName' | 'image' | 'color'> | null;
};

export type FestTeam_record = Pick<FestTeam, 'id' | 'teamName'> & {
    result: Pick<FestTeamResult, 'isWinner'> | null;
};

/** 73b9837d0e4dd29bfa2f1a7d7ee0814a FestRecordRefetchQuery */
export type FestRecordRefetchResult = FestRecordResult;

/** a2c742c840718f37488e0394cd6e1e08 VotesUpdateFestVoteMutation */
export type VotesUpdateFestVoteResult = unknown;

/** a2c742c840718f37488e0394cd6e1e08 VotesUpdateFestVoteMutation variables */
export interface VotesUpdateFestVoteVariables {
    teamId: string;
}
