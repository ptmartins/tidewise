'use client';

import styles from './identify.module.css';
import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { Icon } from '@iconify/react';
import SpeciesCard from '../species-card/speciesCard';
import { OCEANS, REGIONS, SIZES, bySightings } from '../species-explorer/options';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';
import { MONTHS, monthNames } from '@/lib/months';
import { format } from '@/i18n/format';

// What people describe, mapped onto the data. Pilot and killer whales are
// dolphins to a biologist but "whales" to most observers, so size decides.
const SHAPES = [
    { value: 'whale', icon: 'fluent-emoji-high-contrast:spouting-whale', test: ({ category, length }) => ['Baleen whale', 'Toothed whale'].includes(category) || (category === 'Dolphin' && length >= 5) },
    { value: 'dolphin', icon: 'fluent-emoji-high-contrast:dolphin', test: ({ category, length }) => ['Dolphin', 'River dolphin', 'Porpoise'].includes(category) || (category === 'Toothed whale' && length < 4) },
    { value: 'seal', icon: 'fluent-emoji-high-contrast:seal', test: ({ category }) => ['Seal', 'Sea lion & fur seal', 'Walrus'].includes(category) },
    { value: 'seacow', icon: 'lucide:leaf', test: ({ category }) => category === 'Sirenian' },
    { value: 'otter', icon: 'fluent-emoji-high-contrast:otter', test: ({ category }) => category === 'Otter' },
    { value: 'bear', icon: 'fluent-emoji-high-contrast:polar-bear', test: ({ category }) => category === 'Polar bear' },
];

// Only whales and dolphins vary enough in size for the length question to help
const SIZED = ['whale', 'dolphin'];

const noop = () => () => {};

function Choice({ name, options, value, onChange, legend }) {
    return (
        <fieldset className={styles.question}>
            <legend>{legend}</legend>
            <div className={styles.options}>
                {options.map(({ value: option, label, icon }) => (
                    <label key={option} className={styles.option}>
                        <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} />
                        {icon && <Icon icon={icon} width="20" height="20" />}
                        {label}
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

function Identify({ species }) {
    const locale = useLocale();
    const { identify: t, explorer, data } = useDictionary();
    const [shape, setShape] = useState('');
    const [size, setSize] = useState('');
    const [region, setRegion] = useState('');
    const [pickedMonth, setMonth] = useState(null);
    // Until a month is picked, assume this one. Read in the browser only:
    // the page is prerendered, so the server snapshot is "no month"
    const currentMonth = useSyncExternalStore(noop, () => MONTHS[new Date().getMonth()], () => '');
    const month = pickedMonth ?? currentMonth;


    const shapeTest = SHAPES.find(({ value }) => value === shape)?.test;
    const sizeTest = SIZES.find(({ value }) => value === size)?.test;

    // Seasons are only known for the featured region, so the month only counts there
    const featured = REGIONS.includes(region);

    const results = shape ? species
        .filter((item) => shapeTest(item) && (!sizeTest || !SIZED.includes(shape) || sizeTest(item.length)) && (!region || (featured ? item.regions : item.oceans).includes(region)))
        .map((item) => ({ ...item, inSeason: !featured || !month || item.bestMonths.length === 0 || item.bestMonths.includes(month) }))
        // In season first, then the commonest
        .sort((a, b) => Number(b.inSeason) - Number(a.inSeason) || bySightings(a, b))
        : [];

    const any = { value: '', label: t.notSure };

    return (
        <div className={styles.layout}>
            <form className={styles.questions} onSubmit={(event) => event.preventDefault()}>
                <Choice
                    name="shape"
                    legend={t.shapeQuestion}
                    value={shape}
                    onChange={setShape}
                    options={SHAPES.map(({ value, icon }) => ({ value, icon, label: t.shapes[value] }))}
                />
                {SIZED.includes(shape) && (
                    <Choice
                        name="size"
                        legend={t.sizeQuestion}
                        value={size}
                        onChange={setSize}
                        options={[...SIZES.map(({ value }) => ({ value, label: explorer.sizes[value] })), any]}
                    />
                )}
                {shape && (
                    <>
                        <Choice
                            name="region"
                            legend={t.regionQuestion}
                            value={region}
                            onChange={setRegion}
                            options={[
                                ...OCEANS.map((value) => ({ value, label: explorer.regions[value] })),
                                ...REGIONS.map((value) => ({ value, label: format(t.featuredRegion, { region: explorer.regions[value] }) })),
                                any,
                            ]}
                        />
                        {featured && (
                            <label className={styles.question}>
                                <span className={styles.question__label}>{t.monthQuestion}</span>
                                <select value={month} onChange={(event) => setMonth(event.target.value)} className={styles.select}>
                                    <option value="">{t.notSure}</option>
                                    {monthNames(locale).map(({ month: value, name }) => <option key={value} value={value}>{name}</option>)}
                                </select>
                            </label>
                        )}
                    </>
                )}
            </form>

            <section className={styles.results} aria-live="polite" aria-labelledby="identify-results">
                {!shape ? (
                    <div className={styles.empty}>
                        <Icon icon="lucide:scan-search" width="36" height="36" />
                        <p id="identify-results">{t.start}</p>
                    </div>
                ) : (
                    <>
                        <h2 id="identify-results" className={styles.results__title}>
                            {results.length ? t.resultsTitle : t.noResults}
                        </h2>
                        {results.length > 0 && <p className={styles.results__hint}>{t.resultsHint}</p>}
                        <ol className={styles.grid}>
                            {results.map((item) => (
                                <li key={item.slug} className={styles.result}>
                                    <SpeciesCard species={item} />
                                    <p className={styles.result__meta}>
                                        {featured && month ? (
                                            item.inSeason ? (
                                                <span className={styles.badge}><Icon icon="lucide:calendar-check" width="14" height="14" />{t.inSeason}</span>
                                            ) : (
                                                <span className={`${styles.badge} ${styles['badge--muted']}`}>{t.outOfSeason}</span>
                                            )
                                        ) : null}
                                        {featured && <span>{data.sightings?.[item.sightingFrequency] ?? item.sightingFrequency}</span>}
                                    </p>
                                </li>
                            ))}
                        </ol>
                        <p className={styles.next}>
                            {t.nextStep}{' '}
                            <Link href={`/${locale}/report`}>{t.reportLink}</Link>
                        </p>
                    </>
                )}
            </section>
        </div>
    );
}

export default Identify;
