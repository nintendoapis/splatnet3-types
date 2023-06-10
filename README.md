SplatNet 3 types
===

TypeScript types for SplatNet 3 and splatoon3.ink.

Usage
---

Types for each GraphQL query are exported from `splatnet3-types/splatnet3` and `splatnet3-types/graphql/...`.

- Current persisted query IDs are available in `RequestId`.
- Result types are available using `ResultTypes` and as named types (e.g. `HomeResult`).
- Variable types are available using `VariablesTypes` and as named types (e.g. `HomeVariables`).

```ts
import { StageScheduleResult } from 'splatnet3-types/splatnet3';
// or
import { RequestId, ResultTypes } from 'splatnet3-types/splatnet3';
type StageScheduleResult = ResultTypes[RequestId.StageScheduleQuery];
// or a specific version
import StageScheduleQuery_df9738c from 'splatnet3-types/graphql/df9738cb0fbd533a888feaf21f1e2b14';
// or
import { ResultTypes } from 'splatnet3-types/splatnet3';
type StageScheduleQuery_df9738c = ResultTypes['df9738cb0fbd533a888feaf21f1e2b14'];

declare const schedules: StageScheduleResult;
```

Types for using all versions of a query can be used with `RequestIds`:

```ts
type SavedVsHistoryDetail = {
    [Id in RequestIds<'VsHistoryDetailQuery'>]: {
        result: ResultType<Id>['vsHistoryDetail'];
        query: Id;
    };
}[RequestIds<'VsHistoryDetailQuery'>];

const data: SavedVsHistoryDetail;

// data.result is a VsHistoryDetailQuery_9ee0099 | VsHistoryDetailQuery_291295a | ...
// data query is a '9ee0099fbe3d8db2a838a75cf42856dd' | '291295ad311b99a6288fc95a5c4cb2d2' | ...

if (data.query === '9ee0099fbe3d8db2a838a75cf42856dd') {
    // data.result is a VsHistoryDetailQuery_9ee0099
}
if (data.query === '291295ad311b99a6288fc95a5c4cb2d2') {
    // data.result is a VsHistoryDetailQuery_291295a
}
```

Additional types for the SplatNet 3 GraphQL API are also exported from `splatnet3-types/splatnet3`.

```ts
import {
    GraphQLError, GraphQLErrorResponse, GraphQLRequest, GraphQLResponse, GraphQLSuccessResponse,
    RequestId, ResultTypes, VariablesTypes,
} from 'splatnet3-types/splatnet3';

const request_data: GraphQLRequest<VariablesTypes[RequestId.HomeQuery]> = {
    // ...
};

const response = await fetch('https://api.lp1.av5ja.srv.nintendo.net/api/graphql', {
    body: JSON.stringify(request_data),
    // ...
});

const data: GraphQLResponse<ResultTypes[RequestId.HomeQuery]> = await response.json();

if (data.errors) {
    // data is a GraphQLSuccessResponse<ResultTypes[RequestId.HomeQuery]> with an errors property
    // or a GraphQLErrorResponse

    // data.errors is an array of GraphQLError objects
} else {
    // data is a GraphQLSuccessResponse<ResultTypes[RequestId.HomeQuery]> (without an errors property)
}
```

### Splatoon3.ink types

Types for [Splatoon3.ink](https://github.com/misenhower/splatoon3.ink) data are exported from `splatnet3-types/splatoon3ink`.

```ts
import { Coop, Festivals, Gear, Schedules } from 'splatnet3-types/splatoon3ink';

const schedules: Schedules = await fetch('https://splatoon3.ink/data/schedules.json').then(r => r.json());
const gear: Gear = await fetch('https://splatoon3.ink/data/gear.json').then(r => r.json());
const coop: Coop = await fetch('https://splatoon3.ink/data/coop.json').then(r => r.json());
const festivals: Festivals = await fetch('https://splatoon3.ink/data/festivals.json').then(r => r.json());
```

### TypeScript configuration

splatnet3-types uses the package.json `exports` field. TypeScript must use `node16` (or `nodenext`) module resolution to resolve imports correctly.

```jsonc
{
    "compilerOptions": {
        "moduleResolution": "node16"
    }
}
```

This option cannot be used with Next.js as it doesn't support JavaScript modules natively. As a workaround types can be imported using relative paths:

```ts
import '../node_modules/splatnet3-types/dist/splatnet3.js'; // instead of splatnet3-types/splatnet3
import '../node_modules/splatnet3-types/dist/splatoon3ink.js'; // instead of splatnet3-types/splatoon3ink
import '../node_modules/splatnet3-types/dist/generated/queries/....js'; // instead of splatnet3-types/graphql/...
```

### Structure

- Types for GraphQL requests in the SplatNet 3 web app are stored in [src/generated](src/generated). These are generated automatically from metadata used by [Relay](https://github.com/facebook/relay) in the app's JS bundle.
- These use the types defined in [src/types.ts](src/types.ts). This file essentially defines the GraphQL schema and is required for correct scalar and null types. Enum values are defined in [src/enum.ts](src/enum.ts).
    - These types are exported but should not be used directly as they will not be returned from the GraphQL API.
- Partial/fragment types for some fields are defined in [src/partial-types.ts](src/partial-types.ts). These are only available for the latest query versions.
- Types for request variables are defined in [src/variable-types.ts](src/variable-types.ts).
- Some helper types, the current version of each query, and links to variable/result types are defined in [src/graphql.ts](src/graphql.ts).
