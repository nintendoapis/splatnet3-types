import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, Fest, FestTeam, FestVote, FestVoteConnection, Image } from '../types.js';

/**
 * 92f51ed1ab462bbf1ab64cad49d36f79 DetailFestVotingStatusRefethQuery
 *
 * query DetailFestVotingStatusRefethQuery
 *
 * Generated 01/06/2023 from SplatNet 3 4.0.0-e2ee936d.
 */
interface DetailFestVotingStatusRefethQuery_92f51ed {
    fest: /** unknown type */ OperationFieldType<'DetailFestVotingStatusRefethQuery', 'node', ({
        __typename: string;
        id: Fest['id'];
    }) & (/** Fest */ {
        lang: Fest['lang'];
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
            preVotes: /** FestVoteConnection */ LinkedFieldType<FestTeam, 'preVotes', {
                nodes: /** FestVote */ LinkedFieldType<FestVoteConnection, 'nodes', {
                    playerName: FestVote['playerName'];
                    userIcon: /** Image */ LinkedFieldType<FestVote, 'userIcon', {
                        url: Image['url'];
                    }, false>;
                }, true>;
            }, false>;
            teamName: FestTeam['teamName'];
            votes: /** FestVoteConnection */ LinkedFieldType<FestTeam, 'votes', {
                nodes: /** FestVote */ LinkedFieldType<FestVoteConnection, 'nodes', {
                    playerName: FestVote['playerName'];
                    userIcon: /** Image */ LinkedFieldType<FestVote, 'userIcon', {
                        url: Image['url'];
                    }, false>;
                }, true>;
            }, false>;
        }, true>;
        undecidedVotes: /** FestVoteConnection */ LinkedFieldType<Fest, 'undecidedVotes', {
            nodes: /** FestVote */ LinkedFieldType<FestVoteConnection, 'nodes', {
                playerName: FestVote['playerName'];
                userIcon: /** Image */ LinkedFieldType<FestVote, 'userIcon', {
                    url: Image['url'];
                }, false>;
            }, true>;
        }, false>;
    }) & ({
        __typename: 'Fest';
    })>;
}

export default DetailFestVotingStatusRefethQuery_92f51ed;
export { DetailFestVotingStatusRefethQuery_92f51ed };
