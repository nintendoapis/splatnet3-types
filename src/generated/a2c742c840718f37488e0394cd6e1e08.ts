import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, Fest, FestTeam, FestVote, FestVoteConnection, Image, UpdateFestVotePayload, UserError } from '../types.js';

/**
 * a2c742c840718f37488e0394cd6e1e08 VotesUpdateFestVoteMutation
 *
 * mutation VotesUpdateFestVoteMutation
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-8a061f6c.
 */
interface VotesUpdateFestVoteMutation_a2c742c {
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

export default VotesUpdateFestVoteMutation_a2c742c;
export { VotesUpdateFestVoteMutation_a2c742c };
