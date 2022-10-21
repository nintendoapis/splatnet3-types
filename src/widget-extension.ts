export * from './types/coral-ios-widget-extension.js';
export * from './types/coral-android-widget-extension.js';

interface GraphQLRequestCoralWidgetsExtension<Variables extends unknown, K = string> {
    extensions: {
        persistedQuery: {
            sha256Hash: K;
            version: 1;
        };
    };
    id: K;
    operationName: string;
    variables: Variables;
}

export {
    GraphQLRequestCoralWidgetsExtension as GraphQLRequest,
};

export {
    GraphQLResponse,
    // Current persisted queries
    CoralWidgetExtensioniOSRequestId as RequestIdiOS,
    CoralWidgetExtensionAndroidRequestId as RequestIdAndroid,
    /** All known persisted query IDs */
    KnownRequestId,
    VariablesTypes,
    ResultTypes,
} from './graphql.js';
