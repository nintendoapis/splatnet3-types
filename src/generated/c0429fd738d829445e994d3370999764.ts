import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Color, Fest, FestTeam } from '../types.js';

/**
 * c0429fd738d829445e994d3370999764 useCurrentFestQuery
 *
 * query useCurrentFestQuery
 *
 * Generated 11/12/2022 from SplatNet 3 2.0.0-bd36a652.
 */
interface useCurrentFestQuery_c0429fd {
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

export default useCurrentFestQuery_c0429fd;
export { useCurrentFestQuery_c0429fd };
