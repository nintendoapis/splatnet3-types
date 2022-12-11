export * from './types/album.js';
export * from './types/battle-bankara.js';
export * from './types/battle-detail.js';
export * from './types/battle-latest.js';
export * from './types/battle-private.js';
export * from './types/battle-regular.js';
export * from './types/battle-xmatch.js';
export * from './types/battles.js';
export * from './types/catalog.js';
export * from './types/challenge.js';
export * from './types/checkin.js';
export * from './types/common.js';
export * from './types/coop.js';
export * from './types/fest.js';
export * from './types/friends.js';
export * from './types/gear.js';
export * from './types/gesotown.js';
export * from './types/hero.js';
export * from './types/history.js';
export * from './types/home.js';
export * from './types/outfits.js';
export * from './types/replay.js';
export * from './types/schedules.js';
export * from './types/stage.js';
export * from './types/weapon.js';

export * from './enum.js';

export {
    GraphQLResponse,
    GraphQLSuccessResponse,
    GraphQLErrorResponse,
    GraphQLError,

    /** Current persisted queries */
    RequestId,
    /** All known persisted query IDs */
    KnownRequestId,

    VariablesTypes,
    ResultTypes,
} from './graphql.js';

export interface GraphQLRequest<Variables extends unknown> {
    variables: Variables;
    extensions: {
        persistedQuery: {
            version: 1;
            sha256Hash: RequestParameters['id'];
        };
    };
}

interface RequestParameters {
    id: string;
    // ...
}
