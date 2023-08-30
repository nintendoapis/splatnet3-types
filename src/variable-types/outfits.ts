import { PlayControlOption } from '../types.js';

interface request_variables_app {}
export default request_variables_app;

export interface MyOutfitInput {
    controlOptionConsole: PlayControlOption;
    controlOptionHandheld: PlayControlOption;
    weaponId: number;
    headGearId: number;
    clothingGearId: number;
    shoesGearId: number;
}

export type CreateMyOutfitInput = MyOutfitInput;
export type UpdateMyOutfitInput = {
    id: string;
} & MyOutfitInput;

//
// MyOutfitDetailQuery
//

/** e2c9ea77f0469cb8109c54e93f3f35c930dfeb5b79cbf639397828a805ad9248 MyOutfitDetailQuery variables */
export interface MyOutfitDetailVariables {
    myOutfitId: string;
}

/** d935d9e9ba7a5b6b5d6ece7f253304fc MyOutfitDetailQuery variables */
export type MyOutfitDetailVariables_d935d9e = MyOutfitDetailVariables;

interface request_variables_app {
    'd935d9e9ba7a5b6b5d6ece7f253304fc': MyOutfitDetailVariables_d935d9e;
    'e2c9ea77f0469cb8109c54e93f3f35c930dfeb5b79cbf639397828a805ad9248': MyOutfitDetailVariables;
}

//
// CreateMyOutfitMutation
//

/** b5257c5a3840cb01556750cbb56881d758534dfd91e9aec7c0232098fd767bb9 CreateMyOutfitMutation variables */
export interface CreateMyOutfitVariables {
    input: {
        myOutfit: CreateMyOutfitInput;
    };
    /** Always ["client:root:__connection_myOutfits_connection"] */
    connections: string[];
}

/** 31ff008ea218ffbe11d958a52c6f959f CreateMyOutfitMutation variables */
export type CreateMyOutfitVariables_31ff008 = CreateMyOutfitVariables;

interface request_variables_app {
    '31ff008ea218ffbe11d958a52c6f959f': CreateMyOutfitVariables_31ff008;
    'b5257c5a3840cb01556750cbb56881d758534dfd91e9aec7c0232098fd767bb9': CreateMyOutfitVariables;
}

//
// UpdateMyOutfitMutation
//

/** b83ed5a9b58252c088d3aac7f28a34a59acfbaa61b187ee3eebfe8506aa720f9 UpdateMyOutfitMutation variables */
export interface UpdateMyOutfitVariables {
    input: {
        myOutfit: UpdateMyOutfitInput;
    };
}

/** bb809066282e7d659d3b9e9d4e46b43b UpdateMyOutfitMutation variables */
export type UpdateMyOutfitVariables_bb80906 = UpdateMyOutfitVariables;

interface request_variables_app {
    'bb809066282e7d659d3b9e9d4e46b43b': UpdateMyOutfitVariables_bb80906;
    'b83ed5a9b58252c088d3aac7f28a34a59acfbaa61b187ee3eebfe8506aa720f9': UpdateMyOutfitVariables;
}

//
// useShareMyOutfitQuery
//

/** 5502b09121f5e18bec8fefbe80cce21e1641624b579c57c1992b30dcff612b44 useShareMyOutfitQuery variables */
export interface ShareMyOutfitVariables {
    myOutfitIndex: number;
    timezoneOffset: number;
}

/** 3ba5572efce5bebbd859fc2d269d223c useShareMyOutfitQuery variables */
export type ShareMyOutfitVariables_3ba5572 = ShareMyOutfitVariables;

interface request_variables_app {
    '3ba5572efce5bebbd859fc2d269d223c': ShareMyOutfitVariables_3ba5572;
    '5502b09121f5e18bec8fefbe80cce21e1641624b579c57c1992b30dcff612b44': ShareMyOutfitVariables;
}
