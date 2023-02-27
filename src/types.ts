import { AwardRank, BankaraMatchChallengeState, BankaraMatchMode, CatalogRewardState, ChallengeState, CoopBigRunState, CoopGradePointDiff, CoopMode, CoopRule, CoopTrophy, DragonMatchType, FestDragonCert, FestState, FestTeamRole, FestVoteState, FriendOnlineState, HeroProgressCommentSpeaker, HeroSupplyWeaponCategory, Judgement, JudgementKnockout, Species, TricolourRole, XMatchMeasurementState } from './enum.js';
import { UnknownScalarType } from './generated-type-helpers.js';

export interface Connection<T> {
    nodes: T[];
    edges: Edge<T>[];
    pageInfo: PageInfo;
    totalCount: number;
}

export interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
}

export interface Edge<T> {
    node: T;
    cursor: string;
}

export interface Colour {
    a: number;
    r: number;
    g: number;
    b: number;
}

export { Colour as Color };

export interface CurrentPlayer {
    __typename: 'CurrentPlayer';
    __isPlayer: 'CurrentPlayer';
    byname: string;
    name: string;
    nameId: string;
    nameplate: Nameplate;
    userIcon: Image;
    species: Species | keyof typeof Species;
    weapon: Weapon;
    headGear: HeadGear;
    clothingGear: ClothingGear;
    shoesGear: ShoesGear;
}

export interface Image {
    __typename: 'Image';
    url: string;
    width: number;
    height: number;
}
export interface MaskingImage {
    width: number;
    height: number;
    maskImageUrl: string;
    overlayImageUrl: string;
}
export interface DownloadImage {
    url: string;
    variant: string;
}

export interface Nameplate {
    badges: (Badge | null)[];
    background: NameplateBackground;
}

export interface NameplateBackground {
    id: string;
    image: Pick<Image, 'url'>;
    textColor: Colour;
}

export interface Badge {
    __typename: 'Badge';
    id: string;
    image: Pick<Image, 'url'>;
    description: string;
}

export interface VsRule {
    __typename: 'VsRule';
    name: string;
    rule: string;
    id: string;
}

export interface VsMode {
    __typename: 'VsMode';
    id: string; // "VnNNb2RlLTI=" (2 == Anarchy Series), "VnNNb2RlLTUx" (51 == Anarchy Open)
    mode: string; // "BANKARA"
    name: string; // "Anarchy Battle"
}

export interface UserError {
    code: number;
    message: string;
}

export interface PhotoAlbum {
    __typename: 'PhotoAlbum';
    items: PhotoAlbumItemConnection;
    nplnUserId: string;
}

export type PhotoAlbumItemConnection = Connection<PhotoAlbumItem>;

export interface PhotoAlbumItem {
    __typename: 'PhotoAlbumItem';
    id: string;
    thumbnail: Image;
    photo: Image;
    uploadedTime: string;
}

export interface Catalog {
    progress: CatalogProgress;
    seasonName: string;
    seasonEndTime: string;
    bonus: CatalogBonus;
}

export interface CatalogProgress {
    __typename: 'CatalogProgress';
    level: number;
    totalPoint: number;
    levelUpPoint: number;
    currentPoint: number;
    extraReward: CatalogExtraReward | null;
    rewards: CatalogReward[];
}

export type CatalogExtraReward = any;

export interface CatalogReward {
    level: number;
    currentPoint: number;
    state: CatalogRewardState | keyof typeof CatalogRewardState;
    item: CatalogItem;
}

export interface CatalogItem {
    id: string;
    kind: string;
    name: string;
    amount: number;
    image: Image;
    primaryGearPower: GearPower | null;
}

export interface CatalogBonus {
    dailyWinPoint: number;
    isBigRun: boolean;
    isFest: boolean;
    isSeasonClosing: boolean;
}

export interface ChallengeJourney {
    __typename: 'ChallengeJourney';
    id: string;
    name: string;
    subName: string;
    desc: string;
    image: Image;
    gratitude: unknown | null;
    reward: GearReward;
    challengeCount: number;
    supportedCount: number;
    state: ChallengeState | keyof typeof ChallengeState;
    challenges: Challenge[];
}

export type ChallengeJourneyConnection = Connection<ChallengeJourney>;

export interface GearReward {
    id: string;
    gear: Gear;
}

export interface Challenge {
    id: string;
    isSupported: boolean;
    challengeNumber: number;
    name: string;
    desc: string;
    image: Image;
    goalPoint: number;
    reward: ChallengeReward | null;
}

export type ChallengeReward = BynameReward | CardSleeveReward | WallpaperReward | IconReward | GraffitiReward | {
    __typename: string & never;
    id: string;
};

export interface BynameReward {
    __typename: 'BynameReward';
    id: string;
    byname: string;
}
export interface CardSleeveReward {
    __typename: 'CardSleeveReward';
    id: string;
    name: string;
    sampleImage: Image;
}
export interface IconReward {
    __typename: 'IconReward';
    id: string;
    downloadIcons: DownloadIcon;
    name: string;
}
export interface DownloadIcon {
    bgColor: string;
    url: string;
}
export interface GraffitiReward {
    __typename: 'GraffitiReward';
    image: DownloadImage;
    id: string;
    name: string;
}

export interface ChallengeHome {
    currentPaintPoint: number;
    challengeJourneys: ChallengeJourneyConnection;
}

export interface SupportChallengePayload {
    afterPaintPoint: number;
    challenge: Challenge;
    challengeJourney: ChallengeJourney;
    nextChallengeJourney: ChallengeJourney | null;
    userErrors: UserError[] | null;
}

export interface CheckinHistory {
    id: string;
    title: string;
    checkinTime: string;
    description: string;
    reward: NameplateBackgroundReward | ConsumingReward | {
        __typename: string & never;
        id: string;
    };
}

export type CreateCheckinHistoryPayload = any;

export interface NameplateBackgroundReward {
    __typename: 'NameplateBackgroundReward';
    id: string;
    nameplateBackground: NameplateBackground;
}
export interface ConsumingReward {
    __typename: 'ConsumingReward';
    id: string;
    name: string;
    image: Image;
    amount: number;
}

export interface CoopStage {
    __typename: 'CoopStage';
    id: string; // "Q29vcFN0YWdlLTI="
    name: string; // "Sockeye Station"
    coopStageId: number; // 2
    image: Image;
    thumbnailImage: Image;
}

export interface CoopSupplyWeapon {
    __typename: 'CoopSupplyWeapon';
    name: string; // "Splattershot Jr."
    image: Image;
}

export interface CoopSupplySpecialWeapon {
    weaponId: number;
    name: string;
    image: Image;
}

export interface CoopHistoryDetail {
    __typename: 'CoopHistoryDetail';
    id: string;
    rule: CoopRule | keyof typeof CoopRule;
    weapons: CoopSupplyWeapon[];
    nextHistoryDetail: CoopHistoryDetail | null;
    previousHistoryDetail: CoopHistoryDetail | null;
    resultWave: number;
    coopStage: CoopStage;
    afterGrade: CoopGrade | null;
    afterGradePoint: number | null;
    gradePointDiff: CoopGradePointDiff | keyof typeof CoopGradePointDiff;
    bossResult: CoopBossResult | null;
    myResult: CoopPlayerResult;
    memberResults: CoopPlayerResult[];
    enemyResults: CoopEnemyResult[];
    waveResults: CoopWaveResult[];
    playedTime: string;
    dangerRate: number;
    scenarioCode: unknown | null;
    smellMeter: number | null;
    scale: CoopScale | null;
    jobPoint: number | null;
    jobScore: number | null;
    jobRate: number | null;
    jobBonus: number | null;
}

export interface CoopBossResult {
    boss: unknown;
    hasDefeatBoss: unknown;
}

export interface CoopPlayerResult {
    player: CoopPlayer;
    weapons: CoopSupplyWeapon[];
    specialWeapon: CoopSupplySpecialWeapon | null;
    defeatEnemyCount: number;
    deliverCount: number;
    goldenAssistCount: number;
    goldenDeliverCount: number;
    rescueCount: number;
    rescuedCount: number;
}

export interface CoopPlayer {
    __isPlayer: 'CoopPlayer';
    id: string;
    name: string;
    nameId: string;
    byname: string;
    nameplate: Nameplate;
    uniform: CoopUniform;
    isMyself: boolean;
    species: Species | keyof typeof Species;
}

export interface CoopUniform {
    id: string;
    name: string;
    image: Image;
}

export interface CoopWaveResult {
    waveNumber: number;
    waterLevel: number;
    eventWave: CoopEventWave | null;
    deliverNorm: number | null;
    goldenPopCount: number;
    teamDeliverCount: number | null;
    specialWeapons: SpecialWeapon[];
}

export interface CoopEventWave {
    id: string;
    name: string;
}

export interface CoopEnemyResult {
    defeatCount: number;
    teamDefeatCount: number;
    popCount: number;
    enemy: CoopEnemy;
}

export interface CoopEnemy {
    id: string;
    name: string;
    image: Image;
}

export interface CoopResult {
    // historyGroupsOnlyFirst: CoopHistoryGroup;
    regularAverageClearWave: number;
    regularGrade: CoopGrade;
    regularGradePoint: number;
    monthlyGear: Gear;
    scale: CoopScale;
    pointCard: CoopPointCard;
    historyGroups: CoopHistoryGroupConnection;
}

export interface CoopGrade {
    id: string;
    name: string;
}

export interface CoopScale {
    gold: number;
    silver: number;
    bronze: number;
}

export interface CoopPointCard {
    defeatBossCount: number;
    deliverCount: number;
    goldenDeliverCount: number;
    playCount: number;
    rescueCount: number;
    regularPoint: number;
    totalPoint: number;
    limitedPoint: unknown | null;
}

export interface CoopHistoryGroup {
    startTime: string;
    endTime: string;
    mode: CoopMode | keyof typeof CoopMode;
    rule: CoopRule | keyof typeof CoopRule;
    highestResult: CoopGroupHighestResult;
    historyDetails: CoopHistoryDetailConnection;
}

export interface CoopGroupHighestResult {
    grade: CoopGrade;
    gradePoint: number;
    jobScore: number;
    trophy: CoopTrophy | null;
}

export type CoopHistoryGroupConnection = Connection<CoopHistoryGroup>;
export type CoopHistoryDetailConnection = Connection<CoopHistoryDetail>;

export interface CoopRecord {
    bigRunRecord: CoopBigRunRecord;
    teamContestRecord: CoopTeamContestRecord;
}

export interface CoopBigRunRecord {
    records: CoopBigRunRecordItemConnection;
}

export type CoopBigRunRecordItemConnection = Connection<CoopBigRunRecordItem>;
export type CoopBigRunRecordItemEdge = Edge<CoopBigRunRecordItem>;

export interface CoopBigRunRecordItem {
    __typename: 'CoopBigRunRecordItem';
    startTime: string;
    endTime: string;
    trophy: CoopTrophy | null;
    coopStage: CoopStage;
    highestGrade: CoopGrade;
    highestGradePoint: number;
    highestJobScore: number;
}

export interface CoopTeamContestRecord {
    attend: number;
    bronze: number;
    gold: number;
    silver: number;
}

export interface Fest {
    __typename: 'Fest';
    id: string;
    title: string;
    lang: string;
    startTime: string;
    endTime: string;
    midtermTime: string;
    state: FestState | keyof typeof FestState;
    image: Image;
    teams: FestTeam[];
    playerResult: FestPlayerResult | null;
    myTeam: FestTeam | null;
    isVotable: boolean;
    undecidedVotes: FestVoteConnection | null;
    tricolorStage: VsStage;
}

export interface FestTeam {
    __typename: 'FestTeam';
    id: string;
    teamName: string;
    color: Colour;
    image: Image;
    /** null = not voted or not voted for this team */
    myVoteState: FestVoteState | null;
    preVotes: FestVoteConnection | null;
    votes: FestVoteConnection | null;
    role: FestTeamRole | keyof typeof FestTeamRole | null;
    result: FestTeamResult;
}

export interface FestVote {
    playerName: string;
    userIcon: Image;
}

export interface FestTeamResult {
    __typename: 'FestTeamResult';
    isWinner: boolean;
    horagaiRatio: number;
    isHoragaiRatioTop: boolean;
    voteRatio: number;
    isVoteRatioTop: boolean;
    regularContributionRatio: number;
    isRegularContributionRatioTop: boolean;
    challengeContributionRatio: number;
    isChallengeContributionRatioTop: boolean;
    tricolorContributionRatio: number | null;
    isTricolorContributionRatioTop: boolean | null;
    rankingHolders: FestRankingHolderConnection;
}

export interface FestRankingHolder {
    __typename: 'FestRankingHolder';
    __isPlayer: 'FestRankingHolder';
    id: string;
    name: string;
    nameId: string;
    byname: string;
    rank: number;
    festPower: number;
    weapon: Weapon;
    nameplate: Nameplate;
}

export interface FestPlayerResult {
    grade: string; // "Gear Ruler"
    horagai: number;
    regularContributionAverage: number;
    regularContributionTotal: number;
    challengeContributionAverage: number | null;
    challengeContributionTotal: number | null;
    tricolorContributionEnabled: boolean;
    tricolorContributionAverage: number | null;
    tricolorContributionTotal: number | null;
    maxFestPower: number | null;
}

export type FestConnection = Connection<Fest>;
export type FestVoteConnection = Connection<FestVote>;
export type FestRankingHolderConnection = Connection<FestRankingHolder>;
export type FestRankingHolderEdge = Edge<FestRankingHolder>;

export interface Friend {
    id: string;
    onlineState: FriendOnlineState;
    /** Switch user name */
    nickname: string;
    /** Splatoon 3 name, if the user has one set and is currently playing Splatoon 3 */
    playerName: string | null;
    userIcon: Image;
    vsMode: VsMode | null;
    coopRule: string | null;
    isFavorite: boolean;
    isLocked: boolean | null;
    isVcEnabled: boolean | null;
}

export type FriendConnection = Connection<Friend>;

export interface Gear {
    __typename: string;
    name: string;
    rarity: number;
    image: Image;
    brand: Brand;
    primaryGearPower: GearPower;
    additionalGearPowers: GearPower[];
    stats: GearRecordStats | null;
}

export interface HeadGear extends Gear {
    __typename: 'HeadGear';
    __isGear: 'HeadGear';
    headGearId: number;
}

export interface ClothingGear extends Gear {
    __typename: 'ClothingGear';
    __isGear: 'ClothingGear';
    clothingGearId: number;
}

export interface ShoesGear extends Gear {
    __typename: 'ShoesGear';
    __isGear: 'ShoesGear';
    shoesGearId: number;
}

export interface GearPower {
    __typename: 'GearPower';
    gearPowerId: number;
    name: string;
    desc: string;
    image: Image;
    power: number;
    isEmptySlot: boolean;
}

export interface Brand {
    __typename: 'Brand';
    id: string;
    name: string;
    image: Image;
    usualGearPower: GearPower;
}

export interface GearRecordStats {
    exp: number;
}

export type HeadGearConnection = Connection<HeadGear>;
export type ClothingGearConnection = Connection<ClothingGear>;
export type ShoesGearConnection = Connection<ShoesGear>;
export type GearPowerConnection = Connection<GearPower>;

export type BrandConnection = Connection<Brand>;

export interface SaleGear {
    __typename: 'SaleGear';
    id: string;
    saleEndTime: string;
    price: number;
    isAlreadyOrdered: boolean;
    gear: Gear;
    nextGear: SaleGear | null;
    previousGear: SaleGear | null;
}

export interface Gesotown {
    pickupBrand: PickupBrand;
    limitedGears: SaleGear[];
}

export interface PickupBrand {
    image: Image;
    brand: Brand;
    saleEndTime: string;
    brandGears: SaleGear[];
    nextBrand: Brand;
}

export interface OrderGesotownGearPayload {
    gesotownGear: SaleGear;
    previousOrderedGear: SaleGear | null;
    userErrors: UserError[] | null;
}

export interface HeroRecord {
    progressComment: string;
    progressPhrase: string;
    progressRate: number;
    sites: HeroSite[];
    reward: WallpaperReward | null;
    fullReward: WallpaperReward | null;
}

export interface HeroSite {
    id: string;
    image: Image;
    siteNumber: number;
    progressRate: number;
    siteName: string;
    progressComment: string;
    progressCommentSpeaker: HeroProgressCommentSpeaker | keyof typeof HeroProgressCommentSpeaker;
    reward: WallpaperReward | null;
    clearedStages: HeroStage[];
}

export interface HeroStage {
    stageNumber: number;
    isBoss: boolean;
    bestClearTimeSec: number;
    bestClearWeapon: HeroSupplyWeapon;
    stageName: string;
    description: string;
}

export interface HeroSupplyWeapon {
    name: string;
    category: HeroSupplyWeaponCategory | keyof typeof HeroSupplyWeaponCategory;
    image: Image;
}

export interface WallpaperReward {
    id: string;
    name: string;
    sampleImage: Image;
    downloadImages: DownloadImage[];
}

export interface PlayHistory {
    currentTime: string;
    gameStartTime: string;
    rank: number;
    udemae: string;
    udemaeMax: string;
    xMatchRankAr: unknown | null;
    xMatchRankCl: unknown | null;
    xMatchRankGl: unknown | null;
    xMatchRankLf: unknown | null;
    xMatchMaxAr: XMatchMax;
    xMatchMaxCl: XMatchMax;
    xMatchMaxGl: XMatchMax;
    xMatchMaxLf: XMatchMax;
    winCountTotal: number;
    frequentlyUsedWeapons: Weapon[];
    paintPointTotal: number;
    battleNumTotal: number;
    badges: Badge[];
    weaponHistory: WeaponHistoryConnection;
    recentBadges: Badge[];
    allBadges: Badge[];
    xMatchSeasonHistory: XMatchSeasonHistoryConnection;
}

export interface XMatchMax {
    power: unknown | null;
    rank: unknown | null;
    rankUpdateSeasonName: unknown | null;
    powerUpdateTime: unknown | null;
}

export interface WeaponHistory {
    seasonName: string;
    isMonthly: boolean;
    startTime: string;
    endTime: string;
    weaponCategories: WeaponCategoryUtilRatio[];
    weapons: WeaponUtilRatio[];
}

export type WeaponHistoryConnection = Connection<WeaponHistory>;

export interface WeaponCategoryUtilRatio {
    weaponCategory: WeaponCategory;
    utilRatio: number;
    weapons: WeaponUtilRatio[];
}

export interface WeaponUtilRatio {
    weapon: Weapon;
    utilRatio: number;
}

export interface XMatchSeasonHistory {
    powerAr: unknown;
    powerCl: unknown;
    powerGl: unknown;
    powerLf: unknown;
    rankAr: unknown;
    rankCl: unknown;
    rankGl: unknown;
    rankLf: unknown;
    xRankingSeason: XRankingSeason;
}

export type XMatchSeasonHistoryConnection = Connection<XMatchSeasonHistory>;
export type XMatchSeasonHistoryEdge = Edge<XMatchSeasonHistory>;

export interface Banner {
    image: Image;
    message: string;
    jumpTo: string;
}

export type HomeFooterMessage = FooterBigRunMessage | FooterFestMessage | FooterSeasonMessage | {
    __typename: string & never;
};

export interface FooterBigRunMessage {
    __typename: 'FooterBigRunMessage';
    state: CoopBigRunState | keyof typeof CoopBigRunState;
}
export interface FooterFestMessage {
    __typename: 'FooterFestMessage';
    state: FestState | keyof typeof FestState;
    festTitle: string;
}
export interface FooterSeasonMessage {
    __typename: 'FooterSeasonMessage';
    seasonName: string;
}

export interface MyOutfit {
    __typename: 'MyOutfit';
    id: string;
    index: number;
    weapon: Weapon;
    headGear: HeadGear;
    clothingGear: ClothingGear;
    shoesGear: ShoesGear;
    controlOptionConsole: PlayControlOption;
    controlOptionHandheld: PlayControlOption;
}

export type MyOutfitConnection = Connection<MyOutfit>;
export type MyOutfitEdge = Edge<MyOutfit>;

export interface PlayControlOption {
    isEnableGyro: boolean;
    isReverseLr: boolean;
    isReverseUd: boolean;
    cameraSpeedGyro: number;
    cameraSpeedStick: number;
}

export interface CreateMyOutfitPayload {
    myOutfit: MyOutfit;
    userErrors: UserError[] | null;
}
export interface UpdateMyOutfitPayload {
    myOutfit: MyOutfit;
    userErrors: UserError[] | null;
}

export interface MyOutfitShare {
    image: Image;
}

export interface Replay {
    id: string;
    historyDetail: VsHistoryDetail;
    replayCode: string;
}

export type ReplayConnection = Connection<Replay>;

export interface ReserveReplayDownloadPayload {
    replay: Replay;
    userErrors: UserError[] | null;
}

export interface VsSchedule {
    __typename: 'VsSchedule';
    startTime: string;
    endTime: string;
    regularMatchSetting: RegularMatchSetting | null;
    bankaraMatchSettings: BankaraMatchSetting[] | null;
    xMatchSetting: XMatchSetting | null;
    leagueMatchSetting: LeagueMatchSetting | null;
    festMatchSetting: FestMatchSetting | null;
}

export type VsScheduleConnection = Connection<VsSchedule>;

export interface VsSetting {
    vsStages: VsStage[];
    vsRule: VsRule;
}

export interface RegularMatchSetting extends VsSetting {
    __typename: 'RegularMatchSetting';
    vsStages: VsStage[];
    vsRule: VsRule;
}
export interface BankaraMatchSetting extends VsSetting {
    __typename: 'BankaraMatchSetting';
    vsStages: VsStage[];
    vsRule: VsRule;
    mode: BankaraMatchMode | keyof typeof BankaraMatchMode;
}
export interface XMatchSetting extends VsSetting {
    __typename: 'XMatchSetting';
    vsStages: VsStage[];
    vsRule: VsRule;
}
export interface LeagueMatchSetting extends VsSetting {
    __typename: 'LeagueMatchSetting';
    vsStages: VsStage[];
    vsRule: VsRule;
}
export interface FestMatchSetting extends VsSetting {
    __typename: 'FestMatchSetting';
    vsStages: VsStage[];
    vsRule: VsRule;
}

export interface CoopGroupingSchedule {
    bannerImage: Image | null;
    bigRunSchedules: CoopScheduleConnection;
    regularSchedules: CoopScheduleConnection;
    teamContestSchedules: CoopScheduleConnection;
}

export interface CoopSchedule {
    __typename: 'CoopSchedule';
    startTime: string;
    endTime: string;
    setting: CoopSetting | null;
}

export type CoopScheduleConnection = Connection<CoopSchedule>;

export interface CoopSetting {
    __typename: 'CoopNormalSetting' | 'CoopBigRunSetting';
    __isCoopSetting: 'CoopNormalSetting' | 'CoopBigRunSetting';
    coopStage: CoopStage;
    weapons: CoopSupplyWeapon[];
    rule: CoopRule | keyof typeof CoopRule;
}

export interface Weapon {
    __typename: 'Weapon';
    id: string;
    weaponId: number;
    weaponCategory: WeaponCategory;
    name: string;
    image: Image;
    subWeapon: SubWeapon;
    specialWeapon: SpecialWeapon;
    /** null = not owned */
    stats: WeaponRecordStats | null;
}

export interface WeaponRecordStats {
    /** null = never used */
    lastUsedTime: string | null;
    paint: number;
    level: number;
    expToLevelUp: number;
    win: number;
    vibes: number;
}

export interface SubWeapon {
    __typename: 'SubWeapon';
    id: string;
    subWeaponId: number;
    name: string;
    image: Image;
}

export interface SpecialWeapon {
    __typename: 'SpecialWeapon';
    id: string;
    specialWeaponId: number;
    name: string;
    image: Image;
    maskingImage: MaskingImage;
}

export interface WeaponCategory {
    __typename: 'WeaponCategory';
    id: string;
    weaponCategoryId: number;
    category: string;
    name: string;
    image: Image;
}

export type WeaponConnection = Connection<Weapon>;
export type WeaponCategoryConnection = Connection<WeaponCategory>;
export type SubWeaponConnection = Connection<SubWeapon>;
export type SpecialWeaponConnection = Connection<SpecialWeapon>;

export interface VsStage {
    __typename: 'VsStage';
    id: string;
    vsStageId: number;
    name: string;
    image: Image;
    stats: VsStageRecordStats | null;
}

export type VsStageConnection = Connection<VsStage>;

export interface VsStageRecordStats {
    lastPlayedTime: string;
    winRateAr: number | null;
    winRateCl: number | null;
    winRateGl: number | null;
    winRateLf: number | null;
}

export interface VsResult {
    __typename: 'VsResult';
    summary: VsHistorySummary;
    historyGroups: VsHistoryGroupConnection;
}

export interface VsHistorySummary {
    assistAverage: number;
    deathAverage: number;
    killAverage: number;
    lose: number;
    perUnitTimeMinute: number;
    specialAverage: number;
    win: number;
    xPowerAr: XPower | null;
    xPowerCl: XPower | null;
    xPowerGl: XPower | null;
    xPowerLf: XPower | null;
}

export interface XPower {
    lastXPower: unknown;
}

export interface VsHistoryGroup {
    __typename: 'VsHistoryGroup';
    bankaraMatchChallenge: BankaraMatchChallenge | null;
    xMatchMeasurement: XMatchMeasurement | null;
    leagueMatchTeamId: string | null;
    historyDetails: VsHistoryDetailConnection;
    regularMatchLastPlayedTime: string | null;
    privateMatchLastPlayedTime: string | null;
}

export interface BankaraMatchChallenge {
    winCount: number;
    loseCount: number;
    maxWinCount: number;
    maxLoseCount: number;
    state: BankaraMatchChallengeState | keyof typeof BankaraMatchChallengeState;
    isPromo: boolean;
    isUdemaeUp: boolean;
    udemaeAfter: string;
    earnedUdemaePoint: number;
}
export interface XMatchMeasurement {
    state: XMatchMeasurementState | keyof typeof XMatchMeasurementState;
    xPowerAfter: number | null;
    isInitial: boolean;
    winCount: number;
    loseCount: number;
    maxInitialBattleCount: number;
    maxWinCount: number;
    maxLoseCount: number;
    vsRule: VsRule;
}

export interface VsHistoryDetail {
    __typename: 'VsHistoryDetail';
    id: string;
    vsMode: VsMode;
    vsRule: VsRule;
    vsStage: VsStage;
    playedTime: string;
    duration: number;
    judgement: Judgement | keyof typeof Judgement;
    player: VsPlayer;
    knockout: JudgementKnockout | keyof typeof JudgementKnockout | null;
    myTeam: VsTeam;
    otherTeams: VsTeam[];
    udemae: unknown | null;
    bankaraMatch: BankaraMatchHistory | null;
    leagueMatch: LeagueMatchHistory | null;
    xMatch: XMatchHistory | null;
    festMatch: FestMatchHistory | null;
    awards: Award[];
    nextHistoryDetail: VsHistoryDetail | null;
    previousHistoryDetail: VsHistoryDetail | null;
}

export interface Award {
    name: string;
    rank: AwardRank | keyof typeof AwardRank;
}

export interface VsPlayer {
    __typename: 'VsPlayer';
    __isPlayer: 'VsPlayer';
    id: string;
    byname: string; // "Splatlandian Youth"
    name: string;
    nameId: string;
    nameplate: Nameplate;
    paint: number;
    isMyself: boolean;
    weapon: Weapon;
    headGear: HeadGear;
    clothingGear: ClothingGear;
    shoesGear: ShoesGear;
    species: Species | keyof typeof Species;
    result: VsPlayerResult | null;
    crown: boolean;
    festDragonCert: FestDragonCert | keyof typeof FestDragonCert;
    festGrade: string | null;
}

export interface VsPlayerResult {
    kill: number;
    death: number;
    assist: number;
    special: number;
    noroshiTry: number | null;
}

export interface VsTeam {
    __typename: 'VsTeam';
    color: Colour;
    judgement: Judgement | keyof typeof Judgement | null;
    result: VsTeamResult | null;
    tricolorRole: TricolourRole | keyof typeof TricolourRole | null;
    festTeamName: string | null;
    festUniformName: string | null;
    festUniformBonusRate: number | null;
    festStreakWinCount: number | null;
    players: VsPlayer[];
    order: number;
}

export interface VsTeamResult {
    __typename: 'VsTeamResult';
    paintPoint: number | null;
    paintRatio: number | null;
    score: number | null;
    noroshi: number | null;
}

export interface BankaraMatchHistory {
    earnedUdemaePoint: number | null;
    mode: BankaraMatchMode | keyof typeof BankaraMatchMode;
}
export interface XMatchHistory {
    lastXPower: number | null;
    entireXPower: number | null;
}
export interface LeagueMatchHistory {
    teamId: string;
    leagueMatchEvent: LeagueMatchEvent | null;
    myLeaguePower: number | null;
}
export interface LeagueMatchEvent {
    id: string;
    name: string;
    desc: string;
}
export interface FestMatchHistory {
    dragonMatchType: DragonMatchType | keyof typeof DragonMatchType;
    contribution: number;
    jewel: number;
    myFestPower: number | null;
}

export type VsHistoryGroupConnection = Connection<VsHistoryGroup>;
export type VsHistoryDetailConnection = Connection<VsHistoryDetail>;

export type XRankingHolder = any;
export type XRankingHolderConnection = Connection<XRankingHolder>;
export type XRankingHolderEdge = Edge<XRankingHolder>;

export interface XRankingSeason {
    __typename: 'XRankingSeason';
    id: string;
    name: string;
    isCurrent: boolean;
    startTime: string;
    endTime: string;
    lastUpdateTime: string;
    xRankingAr: XRankingHolderConnection;
    xRankingCl: XRankingHolderConnection;
    xRankingGl: XRankingHolderConnection;
    xRankingLf: XRankingHolderConnection;
    weaponTopsAr: XRankingHolderConnection;
    weaponTopsCl: XRankingHolderConnection;
    weaponTopsGl: XRankingHolderConnection;
    weaponTopsLf: XRankingHolderConnection;
}

export type XRankingSeasonConnection = Connection<XRankingSeason>;

export type Player = any;
export type XRanking = any;
export type XRankingPlayer = any;
export type XRankingPlayerStats = any;

export type UpdateFestVotePayload = any;
