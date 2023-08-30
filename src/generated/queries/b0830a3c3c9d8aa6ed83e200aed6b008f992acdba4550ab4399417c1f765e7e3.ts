import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, Fest, FestTeam, FestVote, FestVoteConnection, Image, UpdateFestVotePayload, UserError } from '../../types.js';

/**
 * b0830a3c3c9d8aa6ed83e200aed6b008f992acdba4550ab4399417c1f765e7e3 VotesUpdateFestVoteMutation
 *
 * mutation VotesUpdateFestVoteMutation
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface VotesUpdateFestVoteMutation_b0830a3 {
    updateFestVote: /** UpdateFestVotePayload */ OperationFieldType<'VotesUpdateFestVoteMutation', 'updateFestVote', {
        fest: /** Fest */ LinkedFieldType<UpdateFestVotePayload, 'fest', {
            id: Fest['id'];
            isVotable: Fest['isVotable'];
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
                    nodes: /** FestVote */ LinkedFieldType<FestVoteConnection, 'nodes', {
                        playerName: FestVote['playerName'];
                        userIcon: /** Image */ LinkedFieldType<FestVote, 'userIcon', {
                            url: Image['url'];
                        }, false>;
                    }, true>;
                    totalCount: FestVoteConnection['totalCount'];
                }, false>;
                teamName: FestTeam['teamName'];
                votes: /** FestVoteConnection */ LinkedFieldType<FestTeam, 'votes', {
                    nodes: /** FestVote */ LinkedFieldType<FestVoteConnection, 'nodes', {
                        playerName: FestVote['playerName'];
                        userIcon: /** Image */ LinkedFieldType<FestVote, 'userIcon', {
                            url: Image['url'];
                        }, false>;
                    }, true>;
                    totalCount: FestVoteConnection['totalCount'];
                }, false>;
            }, true>;
            undecidedVotes: /** FestVoteConnection */ LinkedFieldType<Fest, 'undecidedVotes', {
                nodes: /** FestVote */ LinkedFieldType<FestVoteConnection, 'nodes', {
                    playerName: FestVote['playerName'];
                    userIcon: /** Image */ LinkedFieldType<FestVote, 'userIcon', {
                        url: Image['url'];
                    }, false>;
                }, true>;
                totalCount: FestVoteConnection['totalCount'];
            }, false>;
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<UpdateFestVotePayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default VotesUpdateFestVoteMutation_b0830a3;
export { VotesUpdateFestVoteMutation_b0830a3 };
