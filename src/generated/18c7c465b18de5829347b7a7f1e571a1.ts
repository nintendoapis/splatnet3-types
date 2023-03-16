import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, CurrentPlayer, Fest, FestPlayerResult, FestTeam, FestTeamResult, FestVoteConnection, Image } from '../types.js';

/**
 * 18c7c465b18de5829347b7a7f1e571a1 DetailFestRefethQuery
 *
 * query DetailFestRefethQuery
 *
 * Generated 16/03/2023 from SplatNet 3 3.0.0-6049221b.
 */
interface DetailFestRefethQuery_18c7c46 {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'DetailFestRefethQuery', 'currentPlayer', {
        name: CurrentPlayer['name'];
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
    }>;
    fest: /** unknown type */ OperationFieldType<'DetailFestRefethQuery', 'node', ({
        __typename: string;
        id: Fest['id'];
    }) & (/** Fest */ {
        endTime: Fest['endTime'];
        image: /** Image */ LinkedFieldType<Fest, 'image', {
            url: Image['url'];
        }, false>;
        isVotable: Fest['isVotable'];
        lang: Fest['lang'];
        myTeam: /** FestTeam */ LinkedFieldType<Fest, 'myTeam', {
            id: FestTeam['id'];
            color: /** Color */ LinkedFieldType<FestTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
            teamName: FestTeam['teamName'];
        }, false>;
        playerResult: /** FestPlayerResult */ LinkedFieldType<Fest, 'playerResult', {
            challengeContributionAverage: FestPlayerResult['challengeContributionAverage'];
            challengeContributionTotal: FestPlayerResult['challengeContributionTotal'];
            grade: FestPlayerResult['grade'];
            horagai: FestPlayerResult['horagai'];
            maxFestPower: FestPlayerResult['maxFestPower'];
            regularContributionAverage: FestPlayerResult['regularContributionAverage'];
            regularContributionTotal: FestPlayerResult['regularContributionTotal'];
            tricolorContributionAverage: FestPlayerResult['tricolorContributionAverage'];
            tricolorContributionEnabled: FestPlayerResult['tricolorContributionEnabled'];
            tricolorContributionTotal: FestPlayerResult['tricolorContributionTotal'];
        }, false>;
        startTime: Fest['startTime'];
        state: Fest['state'];
        teams: /** FestTeam */ LinkedFieldType<Fest, 'teams', {
            id: FestTeam['id'];
            color: /** Color */ LinkedFieldType<FestTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
            image: /** Image */ LinkedFieldType<FestTeam, 'image', {
                url: Image['url'];
            }, false>;
            myVoteState: FestTeam['myVoteState'];
            preVotes: /** FestVoteConnection */ LinkedFieldType<FestTeam, 'preVotes', {
                totalCount: FestVoteConnection['totalCount'];
            }, false>;
            result: /** FestTeamResult */ LinkedFieldType<FestTeam, 'result', {
                __typename: 'FestTeamResult';
                challengeContributionRatio: FestTeamResult['challengeContributionRatio'];
                horagaiRatio: FestTeamResult['horagaiRatio'];
                isChallengeContributionRatioTop: FestTeamResult['isChallengeContributionRatioTop'];
                isHoragaiRatioTop: FestTeamResult['isHoragaiRatioTop'];
                isRegularContributionRatioTop: FestTeamResult['isRegularContributionRatioTop'];
                isTricolorContributionRatioTop: FestTeamResult['isTricolorContributionRatioTop'];
                isVoteRatioTop: FestTeamResult['isVoteRatioTop'];
                isWinner: FestTeamResult['isWinner'];
                regularContributionRatio: FestTeamResult['regularContributionRatio'];
                tricolorContributionRatio: FestTeamResult['tricolorContributionRatio'];
                voteRatio: FestTeamResult['voteRatio'];
            }, false>;
            role: FestTeam['role'];
            teamName: FestTeam['teamName'];
            votes: /** FestVoteConnection */ LinkedFieldType<FestTeam, 'votes', {
                totalCount: FestVoteConnection['totalCount'];
            }, false>;
        }, true>;
        title: Fest['title'];
        undecidedVotes: /** FestVoteConnection */ LinkedFieldType<Fest, 'undecidedVotes', {
            totalCount: FestVoteConnection['totalCount'];
        }, false>;
    }) & ({
        __typename: 'Fest';
    })>;
}

export default DetailFestRefethQuery_18c7c46;
export { DetailFestRefethQuery_18c7c46 };
