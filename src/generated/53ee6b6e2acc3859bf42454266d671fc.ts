import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, Fest, FestTeam, FestVote, FestVoteConnection, Image } from '../types.js';

/**
 * 53ee6b6e2acc3859bf42454266d671fc DetailVotingStatusQuery
 *
 * query DetailVotingStatusQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-216d0219.
 */
interface DetailVotingStatusQuery_53ee6b6 {
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

export default DetailVotingStatusQuery_53ee6b6;
export { DetailVotingStatusQuery_53ee6b6 };
