import fs from 'node:fs';

const operation_type_map = {
    'CoopHistoryDetailQuery.node': 'CoopHistoryDetail',
    'CoopHistoryDetailRefetchQuery.node': 'CoopHistoryDetail',
    'DetailFestRecordDetailQuery.node': 'Fest',
    'DetailFestRefethQuery.node': 'Fest',
    'DetailFestVotingStatusRefethQuery.node': 'Fest',
    'DetailTabViewWeaponTopsArRefetchQuery.node': 'XRankingSeason',
    'DetailTabViewWeaponTopsClRefetchQuery.node': 'XRankingSeason',
    'DetailTabViewWeaponTopsGlRefetchQuery.node': 'XRankingSeason',
    'DetailTabViewWeaponTopsLfRefetchQuery.node': 'XRankingSeason',
    'DetailTabViewXRankingArRefetchQuery.node': 'XRankingSeason',
    'DetailTabViewXRankingClRefetchQuery.node': 'XRankingSeason',
    'DetailTabViewXRankingGlRefetchQuery.node': 'XRankingSeason',
    'DetailTabViewXRankingLfRefetchQuery.node': 'XRankingSeason',
    'DetailRankingQuery.node': 'Fest',
    'DetailVotingStatusQuery.node': 'Fest',
    'JourneyChallengeDetailQuery.node': 'ChallengeJourney',
    'JourneyChallengeDetailRefetchQuery.node': 'ChallengeJourney',
    'JourneyQuery.node': 'ChallengeJourney',
    'JourneyRefetchQuery.node': 'ChallengeJourney',
    'MyOutfitDetailQuery.node': 'MyOutfit',
    'RankingHoldersFestTeamRankingHoldersPaginationQuery.node': 'FestTeam',
    'SaleGearDetailQuery.node': 'SaleGear',
    'VsHistoryDetailQuery.node': 'VsHistoryDetail',
    'VsHistoryDetailPagerRefetchQuery.node': 'VsHistoryDetail',
    'XRankingDetailQuery.node': 'XRankingSeason',
    'XRankingDetailRefetchQuery.node': 'XRankingSeason',
};
const field_type_map = {
    'Challenge[\'reward\']': 'ChallengeReward',
    'CoopSchedule[\'setting\']': 'CoopSetting',
};

const fields_order = [
    '__typename',
    '__isPlayer',
    '__isGear',
    '__isVsSetting',
    '__isCoopSetting',
    'id',

    'Color.r',
    'Color.g',
    'Color.b',
    'Color.a',
];

interface Request {
    fragment: unknown;
    kind: 'Request';
    operation: RequestOperation;
    params: RequestParameters;
    hash: string;
}

interface RequestParameters {
    id: string;
    metadata: {};
    name: string;
    operationKind: 'query' | 'mutation';
    text: null;
}

interface RequestOperation {
    argumentDefinitions: unknown[];
    kind: 'Operation';
    name: string;
    selections: RequestSelection[];
}

type RequestSelection =
    RequestLinkedField | RequestScalarField | RequestInlineFragment | RequestCondition |
    RequestLinkedHandle | RequestClientExtension | RequestTypeDiscriminator;
type RequestSelectionParent = RequestOperation |
    RequestLinkedField | RequestInlineFragment | RequestCondition;

interface RequestLinkedField {
    alias: string | null;
    args: null;
    concreteType: string | null;
    kind: 'LinkedField';
    name: string;
    plural: false;
    selections: RequestSelection[];
}

interface RequestScalarField {
    alias: string | null;
    args: unknown[] | null;
    kind: 'ScalarField';
    name: string;
    storageKey: string | null;
}

interface RequestInlineFragment {
    kind: 'InlineFragment';
    selections: RequestSelection[];
    type: string;
    abstractKey: string | null;
}

interface RequestCondition {
    condition: string;
    kind: 'Condition';
    passingValue: boolean;
    selections: RequestSelection[];
}

interface RequestLinkedHandle {
    alias: string | null;
    args: null;
    filters: null;
    handle: string;
    key: string;
    kind: 'LinkedHandle';
    name: string;
    handleArgs: unknown[];
}

interface RequestClientExtension {
    kind: 'ClientExtension';
    selections: RequestSelection;
}

interface RequestTypeDiscriminator {
    kind: 'TypeDiscriminator';
    abstractKey: string;
}

function generateTypeForOperation(
    operation: RequestOperation, suffix = '',
    type_imports: Set<string>, conditions = new Set<string>(),
) {
    let type = '';

    const selection_types = generateTypesForSelections(operation.selections, [operation], type_imports, conditions);

    if (selection_types.length > 1) {
        type += `type ${operation.name}${suffix}`;
        type += generateTypeGenericsForConditions(conditions);
        type += ' = ';
        type += generateTypeForSelectionTypes(selection_types);
        type += ';';
    } else {
        type += `interface ${operation.name}${suffix}`;
        type += generateTypeGenericsForConditions(conditions);
        type += ' {\n';
        type += selection_types[0];
        type += '}';
    }

    return type;
}

function generateTypeGenericsForConditions(conditions: Set<string>) {
    let type = '';

    if (conditions.size) {
        type += '<\n';

        for (const condition of conditions) {
            type += `    ${condition} extends boolean = boolean,\n`;
        }

        type += '>';
    }

    return type;
}

function generateTypesForSelections(
    selections: RequestSelection[], parents: RequestSelectionParent[],
    type_imports: Set<string>, conditions: Set<string>,
): string[] {
    const sorted_selections = (selections
        .filter(s => s.kind === 'LinkedField' || s.kind === 'ScalarField') as
            (RequestLinkedField | RequestScalarField)[]
    ).sort((a, b) => {
        const parent_type = getSelectionParentType(null, parents);

        const a_index: number = parent_type && fields_order.includes(parent_type[0] + '.' + a.name) ?
            fields_order.indexOf(parent_type[0] + '.' + a.name) :
            fields_order.indexOf(a.name);
        const b_index: number = parent_type && fields_order.includes(parent_type[0] + '.' + b.name) ?
            fields_order.indexOf(parent_type[0] + '.' + b.name) :
            fields_order.indexOf(b.name);

        if (a_index !== -1 && b_index !== -1) {
            return a_index - b_index;
        } else if (a_index !== -1) {
            return -1;
        } else if (b_index !== -1) {
            return 1;
        } else if ((a.alias ?? a.name) < (b.alias ?? b.name)) {
            return -1;
        } else if ((a.alias ?? a.name) > (b.alias ?? b.name)) {
            return 1;
        } else {
            return 0;
        }
    });

    const types: string[] = [];
    let type = '';

    for (const selection of sorted_selections) {
        const selection_type = generateTypeForSelection(selection, parents, type_imports, conditions)
            .replace(/\n/g, '\n    ');

        type += `    ${selection.alias ?? selection.name}: ${selection_type};\n`;
    }

    for (const selection of selections) {
        if (selection.kind === 'LinkedField' || selection.kind === 'ScalarField') continue;

        if (selection.kind === 'InlineFragment') {
            const [first, ...remaining] = generateTypesForInlineFragment(selection, parents, type_imports, conditions);
            types.push(`/** ${selection.type ?? 'unknown InlineFragment'} */ {\n${first}}`, ...remaining);
            continue;
        }

        if (selection.kind === 'TypeDiscriminator') {
            type += `    ${selection.abstractKey}: string;\n`;
            continue;
        }

        const selection_type = generateTypeForSelection(selection, parents, type_imports, conditions);

        types.push(selection_type ?
            `/** ${selection.kind} */ ${selection_type}` :
            `    __unknown_${selections.indexOf(selection)}: /** ${selection.kind} */ ${selection_type}\n`);
    }

    return [type, ...types];
}

function getSelectionParentType(name: string | null, parents: RequestSelectionParent[], type_imports?: Set<string>):
    [string, RequestSelectionParent[]] | null {
    const selections = [];
    let type = '';
    let last: [/** name */ string, /** type */ string] | null = name ? [name, ''] : null;

    for (const selection of parents) {
        if (selection.kind === 'Operation') {
            selections.push(selection);

            if (last && `${selection.name}.${last[0]}` in operation_type_map) {
                const name = operation_type_map[`${selection.name}.${last[0]}` as keyof typeof operation_type_map];
                type_imports?.add(name);
                return [name + last[1], selections];
            }
            if (selection.name in operation_type_map) {
                const name = operation_type_map[selection.name as keyof typeof operation_type_map];
                type_imports?.add(name);
                return [name, selections];
            }

            console.warn('[warn] Error finding type for selection, reached Operation',
                selection.name, 'unknown' + type, parents.length);
            return null;
        } else if (selection.kind === 'LinkedField') {
            selections.push(selection);

            if (selection.concreteType) {
                if (`${selection.concreteType}${type}` in field_type_map) {
                    const name = field_type_map[`${selection.concreteType}${type}` as keyof typeof field_type_map];
                    type_imports?.add(name);
                    return [name, selections];
                }

                type_imports?.add(selection.concreteType);
                return [`${selection.concreteType}${type}`, selections];
            }

            last = [selection.name, type];
            type = `['${selection.name}']${selection.plural ? '[0]' : ''}${type}`;
        } else if (selection.kind === 'Condition') {
            //
        } else if (selection.kind === 'InlineFragment') {
            if (selection.type) {
                selections.push(selection);
                if (`${selection.type}${type}` in field_type_map) {
                    const name = field_type_map[`${selection.type}${type}` as keyof typeof field_type_map];
                    type_imports?.add(name);
                    return [name, selections];
                }
                type_imports?.add(selection.type);
                return [`${selection.type}${type}`, selections];
            }

            //
        } else {
            console.warn('[warn] Error finding type for selection');
        }
    }

    return [type, selections];
}

function generateTypeForSelectionTypes(types: string[]) {
    let type = '';
    
    const [first, ...remaining] = types;

    type += `{\n${first ?? ''}}`;

    if (types.length > 1) {
        type = `(${type}) & (${remaining.join(') & (')})`;
    }

    return type;
}

function generateTypeForSelection(
    selection: RequestSelection, parents: RequestSelectionParent[],
    type_imports: Set<string>, conditions: Set<string>,
) {
    let type = '';

    if (selection.kind === 'LinkedField') {
        type += generateTypeForSelectionTypes(generateTypesForSelections(selection.selections, [selection, ...parents], type_imports, conditions));
        const parent_types = getSelectionParentType(selection.name, parents, type_imports);
        if (parents[0].kind === 'Operation') {
            type = `OperationFieldType<'${parents[0].name}', '${selection.name}', ${type}>`;
            if (selection.plural) type += '[]';
        } else if (parent_types) {
            const [parent_type] = parent_types;
            type = `LinkedFieldType<${parent_type}, '${selection.name}', ${type}, ${selection.plural ? 'true' : 'false'}>`;
        } else {
            type = `(${type} | null)`;
            if (selection.plural) type += '[]';
        }

        type = `/** ${selection.concreteType ?? 'unknown type'} */ ${type}`;
    } else if (selection.kind === 'ScalarField') {
        if (selection.name === '__typename') {
            if (parents[0].kind === 'LinkedField') {
                if (parents[0].concreteType) return `'${parents[0].concreteType}'`;
            }
            if (parents[0].kind === 'InlineFragment') {
                if (parents[0].type) return `'${parents[0].type}'`;
            }
            return 'string';
        }

        const parent_types = getSelectionParentType(selection.name, parents, type_imports);

        if (parent_types) {
            type += `${parent_types[0]}['${selection.name}']`;
        } else {
            type += 'UnknownScalarType | null';
        }
    } else if (selection.kind === 'InlineFragment') {
        const selection_types = generateTypesForInlineFragment(selection, parents, type_imports, conditions);
        type += generateTypeForSelectionTypes(selection_types);
    } else if (selection.kind === 'Condition') {
        type += `${selection.condition} extends ${selection.passingValue} ? `;
        type += generateTypeForSelectionTypes(generateTypesForSelections(selection.selections, [selection, ...parents], type_imports, conditions));
        type += ' : {}';

        conditions.add(selection.condition);
    } else if (selection.kind === 'LinkedHandle') {
        type += '{}';
    } else {
        console.warn('[warn] Unknown selection type %s', (selection as any).kind);
        type += 'unknown';
    }

    return type;
}

function generateTypesForInlineFragment(
    selection: RequestInlineFragment, parents: RequestSelectionParent[],
    type_imports: Set<string>, conditions: Set<string>,
) {
    const selection_types = generateTypesForSelections(selection.selections, [selection, ...parents], type_imports, conditions);

    if (selection.abstractKey) {
        selection_types[0] = `    ${selection.abstractKey}: '${selection.type}';\n` + selection_types[0];
    }

    if (selection.type) {
        const keys = new Set();

        for (const parent of parents) {
            if (parent.kind !== 'Operation' && parent.kind !== 'LinkedField') break;

            for (const s of parent.selections) {
                if (s.kind === 'ScalarField' && s.name === '__typename') {
                    keys.add(s.alias ?? s.name);
                }
                if (s.kind === 'TypeDiscriminator') {
                    keys.add(s.abstractKey);
                }
            }
        }

        const type = [...keys].map(k => `    ${k}: '${selection.type}';\n`).join('');
        if (type) selection_types.push(`{\n${type}}`);
    }

    return selection_types;
}

const json = fs.readFileSync(0, 'utf-8');
const data: Request = JSON.parse(json);

const type_imports = new Set<string>();
const conditions = new Set<string>();

const result_type = generateTypeForOperation(data.operation, '_' + data.params.id.substr(0, 7), type_imports, conditions);

const output = `import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { ${[...type_imports].sort().join(', ')} } from '../types.js';

/**
 * ${data.params.id} ${data.params.name}
 *
 * ${data.params.operationKind} ${data.operation.name}
 *
 * Generated ${new Date().toLocaleDateString('en-GB')}${process.env.APP_REVISION ? ' from SplatNet 3 ' + process.env.APP_REVISION : ''}.
 */
${result_type}

export default ${data.operation.name}_${data.params.id.substr(0, 7)};
export { ${data.operation.name}_${data.params.id.substr(0, 7)} };
`;

console.log(output.trim());
