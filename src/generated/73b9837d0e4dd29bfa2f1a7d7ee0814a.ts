import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, CurrentPlayer, Fest, FestConnection, FestPlayerResult, FestTeam, FestTeamResult, Image } from '../types.js';

/**
 * 73b9837d0e4dd29bfa2f1a7d7ee0814a FestRecordRefetchQuery
 *
 * query FestRecordRefetchQuery
 *
 * Generated 11/12/2022 from SplatNet 3 1.0.0-5644e7a2.
 */
interface FestRecordRefetchQuery_73b9837 {
    currentPlayer: /** CurrentPlayer */ OperationFieldType<'FestRecordRefetchQuery', 'currentPlayer', {
        name: CurrentPlayer['name'];
        userIcon: /** Image */ LinkedFieldType<CurrentPlayer, 'userIcon', {
            url: Image['url'];
        }, false>;
    }>;
    festRecords: /** FestConnection */ OperationFieldType<'FestRecordRefetchQuery', 'festRecords', {
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

export default FestRecordRefetchQuery_73b9837;
export { FestRecordRefetchQuery_73b9837 };
