import { Image, NodeList } from './common.js';
import { ClothingGear, HeadGear, ShoesGear } from './gear.js';

export interface ChallengeJourney {
    __typename: 'ChallengeJourney';
    id: string;
    name: string;
    subName: string;
    desc: string;
    image: Pick<Image, 'url'>;
    gratitude: unknown | null;
    reward: GearReward;
    challengeCount: number;
    supportedCount: number;
    state: ChallengeState | ChallengeState[keyof ChallengeState];
    challenges: Challenge[];
}

export interface GearReward {
    id: string;
    gear: Pick<HeadGear | ClothingGear | ShoesGear, '__typename' | 'name' | 'image'>;
}

enum ChallengeState {
    SUPPORTABLE = 'SUPPORTABLE',
}

export interface Challenge {
    id: string;
    isSupported: boolean;
    challengeNumber: number;
    name: string;
    desc: string;
    image: Pick<Image, 'url'>;
    goalPoint: number;
    reward: unknown | null;
}

/** 8a079214500148bf88a8fce1d7209b90 ChallengeQuery */
export interface ChallengeResult {
    challenge: ChallengeHome;
}

/** 34aedc79f96b8613501bba465295f779 ChallengeRefetchQuery */
export type ChallengeRefetchResult = ChallengeResult;

export interface ChallengeHome {
    currentPaintPoint: number;
    challengeJourneys: NodeList<ChallengeJourney_home>;
}

type ChallengeJourney_home = Pick<ChallengeJourney, 'id' | 'name' | 'subName' | 'challengeCount' | 'supportedCount' | 'state' | 'image'>;

/** bc71fc0264f3f72256724b069f7a4097 JourneyQuery */
export interface JourneyResult {
    challengeInfo: Pick<ChallengeHome, 'currentPaintPoint'>;
    journey: ChallengeJourney_journey;
}

type ChallengeJourney_journey = Pick<ChallengeJourney, '__typename' | 'id' | 'name' | 'subName' | 'desc' | 'gratitude' | 'image' | 'reward' | 'state'> & {
    challenges: Pick<Challenge, 'id' | 'isSupported' | 'challengeNumber' | 'name' | 'image' | 'goalPoint'>[];
};

/** bc71fc0264f3f72256724b069f7a4097 JourneyQuery variables */
export interface JourneyVariables {
    id: string;
}

/** 09eee118fa16415d6bc3846bc6e5d8e5 JourneyRefetchQuery */
export type JourneyRefetchResult = JourneyResult;
/** 09eee118fa16415d6bc3846bc6e5d8e5 JourneyRefetchQuery variables */
export type JourneyRefetchVariables = JourneyVariables;

/** 38e58b84376a2ad49ddbe4061b948455 JourneyChallengeDetailQuery */
export interface JourneyChallengeDetailResult {
    challengeHome: Pick<ChallengeHome, 'currentPaintPoint'>;
    journey: ChallengeJourney_challenges;
}

type ChallengeJourney_challenges = Pick<ChallengeJourney, '__typename' | 'id' | 'subName' | 'challenges'>;

/** 38e58b84376a2ad49ddbe4061b948455 JourneyChallengeDetailQuery variables */
export interface JourneyChallengeDetailVariables {
    journeyId: string;
}

/** 8dc246933b1f4e26a6dfd251878cf786 JourneyChallengeDetailRefetchQuery */
export type JourneyChallengeDetailRefetchResult = JourneyChallengeDetailResult;
/** 8dc246933b1f4e26a6dfd251878cf786 JourneyChallengeDetailRefetchQuery variables */
export type JourneyChallengeDetailRefetchVariables = JourneyChallengeDetailVariables;

/** 30aa261475d43bd765b4200fc67003c8 SupportButton_SupportChallengeMutation */
export type SupportButtonSupportChallengeResult = unknown;
/** 30aa261475d43bd765b4200fc67003c8 SupportButton_SupportChallengeMutation variables */
export type SupportButtonSupportChallengeVariables = unknown;
