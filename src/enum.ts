
export enum Judgement {
    WIN = 'WIN',
    LOSE = 'LOSE',
    EXEMPTED_LOSE = 'EXEMPTED_LOSE', // exemption
    DEEMED_LOSE = 'DEEMED_LOSE', // penalty
    DRAW = 'DRAW', // no contest
}
export enum JudgementKnockout {
    NEITHER = 'NEITHER',
    WIN = 'WIN',
    LOSE = 'LOSE',
}
export enum Species {
    INKLING = 'INKLING',
    OCTOLING = 'OCTOLING',
}

export enum FestState {
    SCHEDULED = 'SCHEDULED',
    FIRST_HALF = 'FIRST_HALF',
    SECOND_HALF = 'SECOND_HALF',
    CLOSED = 'CLOSED',
}
export enum FestVoteState {
    VOTED = 'VOTED',
    PRE_VOTED = 'PRE_VOTED',
}
export enum FestTeamRole {
    ATTACK = 'ATTACK',
    DEFENSE = 'DEFENSE',
}
export enum TricolourRole {
    ATTACK_1 = 'ATTACK1',
    ATTACK_2 = 'ATTACK2',
    DEFENSE = 'DEFENSE',
}
export enum DragonMatchType {
    NORMAL = 'NORMAL',
    DECUPLE = 'DECUPLE', // 10x
    DRAGON = 'DRAGON', // 100x
    DOUBLE_DRAGON = 'DOUBLE_DRAGON', // 333x
}
export enum FestDragonCert {
    NONE = 'NONE',
    DRAGON = 'DRAGON', // 100x
    DOUBLE_DRAGON = 'DOUBLE_DRAGON', // 333x
}

export enum CoopGradePointDiff {
    UP = 'UP',
    DOWN = 'DOWN',
    // ...
}

export enum CoopMode {
    REGULAR = 'REGULAR',
    PRIVATE_CUSTOM = 'PRIVATE_CUSTOM',
    PRIVATE_SCENARIO = 'PRIVATE_SCENARIO',
}
export enum CoopRule {
    REGULAR = 'REGULAR',
    BIG_RUN = 'BIG_RUN',
}

export enum FriendOnlineState {
    OFFLINE = 'OFFLINE',
    /**
     * The user is online and selected in *any* game, not just Splatoon 3.
     * Coral may be used to check which game the user is playing.
     */
    ONLINE = 'ONLINE',
    VS_MODE_MATCHING = 'VS_MODE_MATCHING',
    COOP_MODE_MATCHING = 'COOP_MODE_MATCHING',
    VS_MODE_FIGHTING = 'VS_MODE_FIGHTING',
    COOP_MODE_FIGHTING = 'COOP_MODE_FIGHTING',
}

export enum BankaraMatchMode {
    CHALLENGE = 'CHALLENGE',
    OPEN = 'OPEN',
}
