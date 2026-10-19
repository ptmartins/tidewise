// Filter / sort options for the species explorer, plus helpers that shape
// full species records into the lightweight data the cards need.

export const GROUPS = [
    { value: 'Baleen whale', label: 'Baleen whales', icon: 'fluent-emoji-high-contrast:spouting-whale' },
    { value: 'Toothed whale', label: 'Toothed whales', icon: 'fluent-emoji-high-contrast:whale' },
    { value: 'Dolphin', label: 'Dolphins', icon: 'fluent-emoji-high-contrast:dolphin' },
    { value: 'Porpoise', label: 'Porpoises', icon: 'fluent-emoji-high-contrast:dolphin' },
    { value: 'Seal', label: 'Seals', icon: 'fluent-emoji-high-contrast:seal' },
];

export const REGIONS = [
    { value: 'mainland', label: 'Mainland coast' },
    { value: 'azores', label: 'Azores' },
    { value: 'madeira', label: 'Madeira' },
];

// Threat order, most threatened first
export const IUCN_ORDER = ['CR', 'EN', 'VU', 'NT', 'DD', 'LC'];

export const THREATENED = ['VU', 'EN', 'CR'];

export const PRESENCE = [
    { value: 'Resident (year-round)', label: 'Resident' },
    { value: 'Seasonal / migratory', label: 'Seasonal' },
    { value: 'Occasional visitor', label: 'Occasional' },
    { value: 'Rare / vagrant', label: 'Vagrant' },
];

export const SIGHTINGS = ['Very common', 'Common', 'Uncommon', 'Rare'];

export const SIZES = [
    { value: 'small', label: 'Under 4 m', test: (length) => length < 4 },
    { value: 'medium', label: '4–10 m', test: (length) => length >= 4 && length <= 10 },
    { value: 'large', label: 'Over 10 m', test: (length) => length > 10 },
];

export const TRENDS = [
    { value: 'increasing', label: 'Increasing' },
    { value: 'stable', label: 'Stable' },
    { value: 'decreasing', label: 'Decreasing' },
    { value: 'unknown', label: 'Unknown' },
];

export const SORTS = [
    { value: 'relevant', label: 'Most relevant' },
    { value: 'name-asc', label: 'Name, A–Z' },
    { value: 'name-desc', label: 'Name, Z–A' },
    { value: 'size-desc', label: 'Size, largest first' },
    { value: 'size-asc', label: 'Size, smallest first' },
    { value: 'threat', label: 'Most threatened' },
];

export const groupFor = (category) => GROUPS.find(({ value }) => value === category) ?? GROUPS[0];

// Regions are free text in the mock data ("Lisbon coast", "Mainland — North"…),
// so fold them into the three broad areas used for filtering.
const toRegion = (region) => {
    if (/azores/i.test(region)) return 'azores';
    if (/madeira|desertas/i.test(region)) return 'madeira';
    return 'mainland';
};

export const toCard = (species) => ({
    slug: species.slug,
    commonName: species.commonName,
    scientificName: species.scientificName,
    alternativeNames: species.alternativeNames ?? [],
    category: species.category,
    iucnStatus: species.iucnStatus,
    length: species.length?.max ?? 0,
    regions: [...new Set((species.regionsInPortugal ?? []).map(toRegion))],
    residency: species.residency,
    sightingFrequency: species.sightingFrequency,
    populationTrend: species.populationTrend,
    thumbnail: species.thumbnail ?? null,
});
