'use client';

import styles from './speciesExplorer.module.css';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import SpeciesCard from '../species-card/speciesCard';
import { IUCN_LABELS } from '@/lib/mock/species/_shared';
import { GROUPS, REGIONS, IUCN_ORDER, PRESENCE, SIGHTINGS, SIZES, TRENDS, SORTS } from './options';

const PAGE_SIZE = 9;

const EMPTY_FILTERS = { status: [], presence: [], sightings: [], size: [], trend: [] };

const normalize = (text) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Lower is better: name starts with the query > name contains it > scientific / other names contain it
const matchScore = (species, query) => {
    if (!query) return 0;
    const name = normalize(species.commonName);
    if (name.startsWith(query)) return 0;
    if (name.split(/[\s-]/).some((word) => word.startsWith(query))) return 1;
    if (name.includes(query)) return 2;
    if (normalize(species.scientificName).includes(query)) return 3;
    if (species.alternativeNames.some((alt) => normalize(alt).includes(query))) return 4;
    return null;
};

const byName = (a, b) => a.commonName.localeCompare(b.commonName);

const SORTERS = {
    // Easiest to spot first, so the default view leads with what people are likely to see
    relevant: (a, b) => a.score - b.score || SIGHTINGS.indexOf(a.sightingFrequency) - SIGHTINGS.indexOf(b.sightingFrequency) || byName(a, b),
    'name-asc': byName,
    'name-desc': (a, b) => byName(b, a),
    'size-desc': (a, b) => b.length - a.length || byName(a, b),
    'size-asc': (a, b) => a.length - b.length || byName(a, b),
    threat: (a, b) => IUCN_ORDER.indexOf(a.iucnStatus) - IUCN_ORDER.indexOf(b.iucnStatus) || byName(a, b),
};

const FILTER_GROUPS = [
    {
        key: 'status',
        title: 'Conservation status',
        hint: 'IUCN Red List, global',
        options: IUCN_ORDER.map((code) => ({ value: code, label: IUCN_LABELS[code] })),
        test: (species, values) => values.includes(species.iucnStatus),
    },
    {
        key: 'presence',
        title: 'Presence in Portuguese waters',
        options: PRESENCE,
        test: (species, values) => values.includes(species.residency),
    },
    {
        key: 'sightings',
        title: 'How often it’s seen',
        options: SIGHTINGS.map((value) => ({ value, label: value })),
        test: (species, values) => values.includes(species.sightingFrequency),
    },
    {
        key: 'size',
        title: 'Adult size',
        options: SIZES,
        test: (species, values) => SIZES.some(({ value, test }) => values.includes(value) && test(species.length)),
    },
    {
        key: 'trend',
        title: 'Population trend',
        options: TRENDS,
        test: (species, values) => values.includes(species.populationTrend),
    },
];

function SpeciesExplorer({ species }) {
    const dialogRef = useRef(null);
    const [query, setQuery] = useState('');
    const [group, setGroup] = useState('');
    const [region, setRegion] = useState('');
    const [filters, setFilters] = useState(EMPTY_FILTERS);
    const [sort, setSort] = useState('relevant');
    const [limit, setLimit] = useState(PAGE_SIZE);

    // Any change to what's shown starts the list again from the top
    const update = (setter) => (value) => {
        setter(value);
        setLimit(PAGE_SIZE);
    };

    const toggleFilter = (key, value) => update(setFilters)({
        ...filters,
        [key]: filters[key].includes(value) ? filters[key].filter((item) => item !== value) : [...filters[key], value],
    });

    const clearAll = () => {
        setQuery('');
        setGroup('');
        setRegion('');
        setFilters(EMPTY_FILTERS);
        setLimit(PAGE_SIZE);
    };

    const search = normalize(query.trim());

    const results = species
        .map((item) => ({ ...item, score: matchScore(item, search) }))
        .filter((item) =>
            item.score !== null &&
            (!group || item.category === group) &&
            (!region || item.regions.includes(region)) &&
            FILTER_GROUPS.every(({ key, test }) => filters[key].length === 0 || test(item, filters[key]))
        )
        .sort(SORTERS[sort]);

    const extraCount = Object.values(filters).flat().length;

    const activeChips = [
        group && { label: GROUPS.find(({ value }) => value === group).label, remove: () => update(setGroup)('') },
        region && { label: REGIONS.find(({ value }) => value === region).label, remove: () => update(setRegion)('') },
        ...FILTER_GROUPS.flatMap(({ key, options }) =>
            filters[key].map((value) => ({
                label: options.find((option) => option.value === value).label,
                remove: () => toggleFilter(key, value),
            }))
        ),
    ].filter(Boolean);

    const hasCriteria = search || activeChips.length > 0;

    return(
        <div className={styles.explorer}>
            {/* Search + promoted filters */}
            <div className={styles.toolbar} role="search">
                <label className={styles.search}>
                    <Icon icon="lucide:search" width="20" height="20" className={styles.search__icon} />
                    <span className="visually-hidden">Search species</span>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => update(setQuery)(event.target.value)}
                        placeholder="Search by common or scientific name…"
                    />
                    {query && (
                        <button type="button" className={styles.search__clear} onClick={() => update(setQuery)('')} aria-label="Clear search">
                            <Icon icon="lucide:x" width="16" height="16" />
                        </button>
                    )}
                </label>

                <label className={styles.select}>
                    <span className="visually-hidden">Group</span>
                    <Icon icon="lucide:layers" width="18" height="18" />
                    <select value={group} onChange={(event) => update(setGroup)(event.target.value)}>
                        <option value="">All groups</option>
                        {GROUPS.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
                    </select>
                    <Icon icon="lucide:chevron-down" width="16" height="16" className={styles.select__chevron} />
                </label>

                <label className={styles.select}>
                    <span className="visually-hidden">Region</span>
                    <Icon icon="lucide:map-pin" width="18" height="18" />
                    <select value={region} onChange={(event) => update(setRegion)(event.target.value)}>
                        <option value="">All regions</option>
                        {REGIONS.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
                    </select>
                    <Icon icon="lucide:chevron-down" width="16" height="16" className={styles.select__chevron} />
                </label>

                <button type="button" className={`btn ${styles.more}`} onClick={() => dialogRef.current.showModal()}>
                    <Icon icon="lucide:sliders-horizontal" width="18" height="18" />
                    More filters
                    {extraCount > 0 && <span className={styles.more__count}>{extraCount}</span>}
                </button>
            </div>

            {/* Results summary + sort */}
            <div className={styles.summary}>
                <div className={styles.summary__info}>
                    <p aria-live="polite">
                        Showing <strong>{results.length}</strong> of {species.length} species
                    </p>
                    {activeChips.length > 0 && (
                        <ul className={styles.chips}>
                            {activeChips.map(({ label, remove }) => (
                                <li key={label}>
                                    <button type="button" onClick={remove} aria-label={`Remove filter: ${label}`}>
                                        {label} <Icon icon="lucide:x" width="14" height="14" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    {hasCriteria && (
                        <button type="button" className={styles.clear} onClick={clearAll}>Clear all</button>
                    )}
                </div>

                <label className={styles.sort}>
                    <span>Sort by</span>
                    <span className={styles.select}>
                        <select value={sort} onChange={(event) => update(setSort)(event.target.value)}>
                            {SORTS.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
                        </select>
                        <Icon icon="lucide:chevron-down" width="16" height="16" className={styles.select__chevron} />
                    </span>
                </label>
            </div>

            {/* Cards */}
            {results.length > 0 ? (
                <>
                    <ul className={styles.grid}>
                        {results.slice(0, limit).map((item) => (
                            <li key={item.slug}>
                                <SpeciesCard species={item} />
                            </li>
                        ))}
                    </ul>

                    {results.length > limit && (
                        <div className={styles.loadMore}>
                            <button type="button" className="btn" onClick={() => setLimit(limit + PAGE_SIZE)}>
                                Show more species
                                <span className={styles.loadMore__count}>{results.length - limit} more</span>
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className={styles.empty}>
                    <Icon icon="lucide:fish-off" width="32" height="32" />
                    <h3>No species match your search</h3>
                    <p>Try a different name or remove some filters.</p>
                    <button type="button" className="btn" onClick={clearAll}>Clear all filters</button>
                </div>
            )}

            {/* More filters */}
            <dialog
                ref={dialogRef}
                className={styles.dialog}
                aria-labelledby="more-filters-title"
                onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
            >
                <div className={styles.dialog__inner}>
                    <header className={styles.dialog__header}>
                        <h3 id="more-filters-title">More filters</h3>
                        <button type="button" className={styles.dialog__close} onClick={() => dialogRef.current.close()} aria-label="Close">
                            <Icon icon="lucide:x" width="20" height="20" />
                        </button>
                    </header>

                    <div className={styles.dialog__body}>
                        {FILTER_GROUPS.map(({ key, title, hint, options }) => (
                            <fieldset key={key} className={styles.fieldset}>
                                <legend>
                                    {title}
                                    {hint && <small>{hint}</small>}
                                </legend>
                                <div className={styles.options}>
                                    {options.map(({ value, label }) => (
                                        <label key={value} className={styles.option} data-status={key === 'status' ? value : undefined}>
                                            <input
                                                type="checkbox"
                                                checked={filters[key].includes(value)}
                                                onChange={() => toggleFilter(key, value)}
                                            />
                                            {key === 'status' && <span className={styles.option__dot} />}
                                            {label}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        ))}
                    </div>

                    <footer className={styles.dialog__footer}>
                        <button
                            type="button"
                            className={styles.clear}
                            onClick={() => update(setFilters)(EMPTY_FILTERS)}
                            disabled={extraCount === 0}
                        >
                            Reset filters
                        </button>
                        <button type="button" className="btn btn--primary" onClick={() => dialogRef.current.close()}>
                            Show {results.length} species
                        </button>
                    </footer>
                </div>
            </dialog>
        </div>
    )
}

export default SpeciesExplorer;
