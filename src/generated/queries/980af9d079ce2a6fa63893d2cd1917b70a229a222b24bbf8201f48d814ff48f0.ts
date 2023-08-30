import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../../generated-type-helpers.js';
import { Color, Fest, FestTeam } from '../../types.js';

/**
 * 980af9d079ce2a6fa63893d2cd1917b70a229a222b24bbf8201f48d814ff48f0 useCurrentFestQuery
 *
 * query useCurrentFestQuery
 *
 * Generated 30/08/2023 from SplatNet 3 4.0.0-091d4283.
 */
interface useCurrentFestQuery_980af9d {
    currentFest: /** Fest */ OperationFieldType<'useCurrentFestQuery', 'currentFest', {
        id: Fest['id'];
        state: Fest['state'];
        teams: /** FestTeam */ LinkedFieldType<Fest, 'teams', {
            id: FestTeam['id'];
            color: /** Color */ LinkedFieldType<FestTeam, 'color', {
                r: Color['r'];
                g: Color['g'];
                b: Color['b'];
                a: Color['a'];
            }, false>;
        }, true>;
    }>;
}

export default useCurrentFestQuery_980af9d;
export { useCurrentFestQuery_980af9d };
