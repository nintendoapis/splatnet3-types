import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, CurrentPlayer, Fest, FestConnection, FestPlayerResult, FestTeam, FestTeamResult, Image } from '../../types.js';

/**
 * c8660a636e73dcbf55c12932bc301b1c9db2aa9a78939ff61bf77a0ea8ff0a88 FestRecordQuery
 *
 * query FestRecordQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface FestRecordQuery_c8660a6 {
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

export default FestRecordQuery_c8660a6;
export { FestRecordQuery_c8660a6 };
