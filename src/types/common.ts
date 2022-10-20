import { Species } from '../enum.js';
import { Fest, FestTeam } from './fest.js';
import { ClothingGear, HeadGear, ShoesGear } from './gear.js';
import { SpecialWeapon, SubWeapon, Weapon } from './weapon.js';

interface _NodeList<T> {
    nodes: T[];
    totalCount: number;
}
export type NodeList<T> = Pick<_NodeList<T>, 'nodes'>;
export type NodeListWithCount<T> = _NodeList<T>;
export type NodeListTotal = Pick<_NodeList<unknown>, 'totalCount'>;

export interface Colour {
    a: number;
    r: number;
    g: number;
    b: number;
}

export interface CurrentPlayer {
    __isPlayer: 'CurrentPlayer';
    byname: string;
    name: string;
    nameId: string;
    nameplate: Nameplate;
    userIcon: Pick<Image, 'url'>;
    species: Species | Species[keyof Species];
    weapon: Weapon_currentPlayer;
    headGear: Pick<HeadGear, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
    clothingGear: Pick<ClothingGear, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
    shoesGear: Pick<ShoesGear, '__isGear' | 'name' | 'image' | 'primaryGearPower' | 'additionalGearPowers'>;
}

type Weapon_currentPlayer = Pick<Weapon, 'id' | 'name' | 'image'> & {
    subWeapon: Pick<SubWeapon, 'id' | 'name' | 'image'>;
    specialWeapon: Pick<SpecialWeapon, 'id' | 'name' | 'image'>;
};

export type Fest_app = Pick<Fest, 'id' | 'state'> & {
    teams: Pick<FestTeam, 'id' | 'color'>;
};

export interface Image {
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
    badges: (Badge_Nameplate | null)[];
    background: NameplateBackground;
}

export interface NameplateBackground {
    id: string;
    image: Pick<Image, 'url'>;
    textColor: Colour;
}

export interface Badge {
    id: string;
    image: Pick<Image, 'url'>;
    description: string;
}
type Badge_Nameplate = Pick<Badge, 'id' | 'image'>;

export interface VsRule {
    name: string;
    rule: string;
    id: string;
}

export interface VsMode {
    id: string; // "VnNNb2RlLTI=" (2 == Anarchy Series), "VnNNb2RlLTUx" (51 == Anarchy Open)
    mode: string; // "BANKARA"
    name: string; // "Anarchy Battle"
}

export interface XPower {
    lastXPower: unknown;
}

export type UserError = unknown;
