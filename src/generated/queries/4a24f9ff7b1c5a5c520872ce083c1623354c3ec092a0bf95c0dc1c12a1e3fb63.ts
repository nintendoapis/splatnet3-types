import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, Fest, FestTeam, FestVote, FestVoteConnection, Image } from '../../types.js';

/**
 * 4a24f9ff7b1c5a5c520872ce083c1623354c3ec092a0bf95c0dc1c12a1e3fb63 DetailFestVotingStatusRefethQuery
 *
 * query DetailFestVotingStatusRefethQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface DetailFestVotingStatusRefethQuery_4a24f9f {
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

export default DetailFestVotingStatusRefethQuery_4a24f9f;
export { DetailFestVotingStatusRefethQuery_4a24f9f };
