import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, Fest, FestTeam, FestVote, FestVoteConnection, Image } from '../../types.js';

/**
 * e2aafab18dab26ba1b6d40838c6842201f6480d62f8f3dffecad8dd4c5b102c1 DetailVotingStatusQuery
 *
 * query DetailVotingStatusQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface DetailVotingStatusQuery_e2aafab {
    fest: /** unknown type */ OperationFieldType<'DetailVotingStatusQuery', 'node', ({
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

export default DetailVotingStatusQuery_e2aafab;
export { DetailVotingStatusQuery_e2aafab };
