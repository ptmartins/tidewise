// "How you can help" on species pages: each threat maps to one everyday action.
// Copy lives in the dictionaries under `species.help.actions[action]`.

const THREAT_ACTIONS = {
    'Bycatch': 'fishing',
    'Entanglement': 'fishing',
    'Underwater noise': 'noise',
    'Military sonar': 'noise',
    'Ship strikes': 'boats',
    'Boat disturbance': 'boats',
    'Human disturbance': 'boats',
    'Pollution': 'plastic',
    'Plastic ingestion': 'plastic',
    'Climate change': 'climate',
    'Prey depletion': 'climate',
    'Habitat loss': 'climate',
    'Disease': 'strandings',
    'Mass strandings': 'strandings',
    'Small population': 'strandings',
    'Hunting': 'strandings',
    'Whaling': 'strandings',
};

export const HELP_ICONS = {
    fishing: 'lucide:fish-off',
    noise: 'lucide:volume-x',
    boats: 'lucide:sailboat',
    plastic: 'lucide:recycle',
    climate: 'lucide:leaf',
    strandings: 'lucide:shield-alert',
    report: 'lucide:binoculars',
};

// Actions for a species' threats, in threat order, ending with "report it"
export const helpActionsFor = (threats = []) => [
    ...new Set([...threats.map((threat) => THREAT_ACTIONS[threat]).filter(Boolean), 'report']),
];
