import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, CurrentPlayer, Fest, FestConnection, FestPlayerResult, FestTeam, FestTeamResult, Image } from '../types.js';

/**
 * 44c76790b68ca0f3da87f2a3452de986 FestRecordQuery
 *
 * query FestRecordQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-63bad6e1.
 */
interface FestRecordQuery_44c7679 {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'FestRecordQuery', 'currentPlayer', {
        name: CurrentPlayer['name'];
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
    }>;
    festRecords: /** FestConnection */ OperationFieldType<'FestRecordQuery', 'festRecords', {
        nodes: /** Fest */ LinkedFieldType<FestConnection, 'nodes', {
            id: Fest['id'];
            endTime: Fest['endTime'];
            image: /** Image */ LinkedFieldType<Fest, 'image', {
                url: Image['url'];
            }, false>;
            lang: Fest['lang'];
            myTeam: /** FestTeam */ LinkedFieldType<Fest, 'myTeam', {
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
                teamName: FestTeam['teamName'];
            }, false>;
            playerResult: /** FestPlayerResult */ LinkedFieldType<Fest, 'playerResult', {
                grade: FestPlayerResult['grade'];
            }, false>;
            startTime: Fest['startTime'];
            state: Fest['state'];
            teams: /** FestTeam */ LinkedFieldType<Fest, 'teams', {
                id: FestTeam['id'];
                result: /** FestTeamResult */ LinkedFieldType<FestTeam, 'result', {
                    isWinner: FestTeamResult['isWinner'];
                }, false>;
                teamName: FestTeam['teamName'];
            }, true>;
            title: Fest['title'];
        }, true>;
    }>;
}

export default FestRecordQuery_44c7679;
export { FestRecordQuery_44c7679 };
