interface request_variables_app {}
export default request_variables_app;

//
// EventMatchRankingPeriodQuery
//

/** ad4097d5fb900b01f12dffcb02228ef6c20ddbfba41f0158bb91e845335c708e EventMatchRankingPeriodQuery */
export interface EventMatchRankingPeriodVariables {
    eventMatchRankingPeriodId: string;
}

/** cdf4ffe56864817014e59c569ec8630f EventMatchRankingPeriodQuery */
export type EventMatchRankingPeriodVariables_cdf4ffe = EventMatchRankingPeriodVariables;

interface request_variables_app {
    'cdf4ffe56864817014e59c569ec8630f': EventMatchRankingPeriodVariables_cdf4ffe;
    'ad4097d5fb900b01f12dffcb02228ef6c20ddbfba41f0158bb91e845335c708e': EventMatchRankingPeriodVariables;
}

//
// EventMatchRankingSeasonRefetchQuery
//

/** 5b563e5fb86ff7e537cc1ed86485049a41a710ca79af9c38113d41dda1d54643 EventMatchRankingSeasonRefetchQuery */
export type EventMatchRankingSeasonRefetchVariables = unknown & {
    /** PageInfo.endCursor */
    cursor: string;
    /** Always 5 in the app? */
    first: number;
    /** LeagueMatchRankingTimePeriodGroup ID */
    id: string;
};

/** e39d7ce9875a9d6940b4b449ed5b358b EventMatchRankingSeasonRefetchQuery */
export type EventMatchRankingSeasonRefetchVariables_e39d7ce = EventMatchRankingSeasonRefetchVariables;

interface request_variables_app {
    'e39d7ce9875a9d6940b4b449ed5b358b': EventMatchRankingSeasonRefetchVariables_e39d7ce;
    '5b563e5fb86ff7e537cc1ed86485049a41a710ca79af9c38113d41dda1d54643': EventMatchRankingSeasonRefetchVariables;
}
