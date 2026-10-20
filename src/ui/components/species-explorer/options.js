// Filter / sort options for the species explorer, plus helpers that shape
// full species records into the lightweight data the cards need.
// Labels live in the dictionaries (src/i18n/dictionaries), keyed by `value`.

export const GROUPS = [
    { value: 'Baleen whale', icon: 'fluent-emoji-high-contrast:spouting-whale' },
    { value: 'Toothed whale', icon: 'fluent-emoji-high-contrast:whale' },
    { value: 'Dolphin', icon: 'fluent-emoji-high-contrast:dolphin' },
    { value: 'Porpoise', icon: 'fluent-emoji-high-contrast:dolphin' },
    { value: 'Seal', icon: 'fluent-emoji-high-contrast:seal' },
];

export const REGIONS = ['mainland', 'azores', 'madeira'];

// Threat order, most threatened first
export const IUCN_ORDER = ['CR', 'EN', 'VU', 'NT', 'DD', 'LC'];

export const THREATENED = ['VU', 'EN', 'CR'];

export const PRESENCE = ['Resident (year-round)', 'Seasonal / migratory', 'Occasional visitor', 'Rare / vagrant'];

export const SIGHTINGS = ['Very common', 'Common', 'Uncommon', 'Rare'];

export const SIZES = [
    { value: 'small', test: (length) => length < 4 },
    { value: 'medium', test: (length) => length >= 4 && length <= 10 },
    { value: 'large', test: (length) => length > 10 },
];

export const TRENDS = ['increasing', 'stable', 'decreasing', 'unknown'];

export const SORTS = ['relevant', 'name-asc', 'name-desc', 'size-desc', 'size-asc', 'threat'];

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
    // Keep the English name searchable when the card shows a translated one
    alternativeNames: [
        ...(species.englishName && species.englishName !== species.commonName ? [species.englishName] : []),
        ...(species.alternativeNames ?? []),
    ],
    category: species.category,
    iucnStatus: species.iucnStatus,
    length: species.length?.max ?? 0,
    regions: [...new Set((species.regionsInPortugal ?? []).map(toRegion))],
    residency: species.residency,
    sightingFrequency: species.sightingFrequency,
    populationTrend: species.populationTrend,
    thumbnail: species.thumbnail ?? null,
});
