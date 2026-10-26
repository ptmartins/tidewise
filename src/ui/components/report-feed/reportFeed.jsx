'use client';

import styles from './reportFeed.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import ReportCard from '../report-card/reportCard';
import { OCEANS, REGIONS } from '../species-explorer/options';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';
import { LOCALE_DETAILS } from '@/i18n/config';
import { format, formatRich } from '@/i18n/format';

const PAGE_SIZE = 6;

const TYPES = [
    { value: '', icon: 'lucide:layout-list' },
    { value: 'sighting', icon: 'lucide:binoculars' },
    { value: 'stranding', icon: 'lucide:shield-alert' },
];

function ReportFeed({ reports }) {
    const locale = useLocale();
    const { reports: t, explorer, common } = useDictionary();
    const collator = new Intl.Collator(LOCALE_DETAILS[locale].htmlLang);

    const [type, setType] = useState('');
    const [region, setRegion] = useState('');
    const [species, setSpecies] = useState('');
    const [sort, setSort] = useState('newest');
    const [limit, setLimit] = useState(PAGE_SIZE);

    // Any change to what's shown starts the list again from the top
    const update = (setter) => (value) => {
        setter(value);
        setLimit(PAGE_SIZE);
    };

    const clearAll = () => {
        setType('');
        setRegion('');
        setSpecies('');
        setLimit(PAGE_SIZE);
    };

    const speciesOptions = [...new Map(reports.map(({ species }) => [species.slug, species.commonName]))]
        .sort(([, a], [, b]) => collator.compare(a, b));

    const results = reports
        .filter((report) =>
            (!type || report.type === type) &&
            (!region || report.region === region) &&
            (!species || report.species.slug === species)
        )
        .sort((a, b) => (sort === 'newest' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));

    const countFor = (value) => (value ? reports.filter((report) => report.type === value).length : reports.length);

    // Nothing verified yet: invite the first report instead of showing empty filters
    if (reports.length === 0) {
        return (
            <div className={styles.empty}>
                <Icon icon="lucide:binoculars" width="32" height="32" />
                <h3>{t.noReports.emptyTitle}</h3>
                <p>{t.noReports.emptyText}</p>
                <Link href={`/${locale}/report`} className="btn btn--secondary">{common.reportSighting}</Link>
            </div>
        );
    }

    return (
        <div className={styles.feed}>
            {/* Type tabs + filters */}
            <div className={styles.toolbar}>
                <div className={styles.tabs} role="group" aria-label={t.typeLabel}>
                    {TYPES.map(({ value, icon }) => (
                        <button
                            key={value || 'all'}
                            type="button"
                            className={styles.tab}
                            aria-pressed={type === value}
                            onClick={() => update(setType)(value)}
                        >
                            <Icon icon={icon} width="16" height="16" />
                            {value ? t.typesPlural[value] : t.allReports}
                            <span className={styles.tab__count}>{countFor(value)}</span>
                        </button>
                    ))}
                </div>

                <div className={styles.filters}>
                    <label className={styles.select}>
                        <span className="visually-hidden">{explorer.regionLabel}</span>
                        <Icon icon="lucide:map-pin" width="18" height="18" />
                        <select value={region} onChange={(event) => update(setRegion)(event.target.value)}>
                            <option value="">{explorer.allRegions}</option>
                            <optgroup label={explorer.oceansLabel}>
                                {OCEANS.map((value) => <option key={value} value={value}>{explorer.regions[value]}</option>)}
                            </optgroup>
                            <optgroup label={explorer.featuredLabel}>
                                {REGIONS.map((value) => <option key={value} value={value}>{explorer.regions[value]}</option>)}
                            </optgroup>
                        </select>
                        <Icon icon="lucide:chevron-down" width="16" height="16" className={styles.select__chevron} />
                    </label>

                    <label className={styles.select}>
                        <span className="visually-hidden">{t.speciesLabel}</span>
                        <Icon icon="lucide:fish" width="18" height="18" />
                        <select value={species} onChange={(event) => update(setSpecies)(event.target.value)}>
                            <option value="">{t.allSpecies}</option>
                            {speciesOptions.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
                        </select>
                        <Icon icon="lucide:chevron-down" width="16" height="16" className={styles.select__chevron} />
                    </label>
                </div>
            </div>

            {/* Results summary + sort */}
            <div className={styles.summary}>
                <p aria-live="polite">
                    {formatRich(t.showing, { count: <strong>{results.length}</strong>, total: reports.length })}
                </p>
                <label className={styles.sort}>
                    <span>{explorer.sortBy}</span>
                    <span className={styles.select}>
                        <select value={sort} onChange={(event) => update(setSort)(event.target.value)}>
                            <option value="newest">{t.sorts.newest}</option>
                            <option value="oldest">{t.sorts.oldest}</option>
                        </select>
                        <Icon icon="lucide:chevron-down" width="16" height="16" className={styles.select__chevron} />
                    </span>
                </label>
            </div>

            {results.length > 0 ? (
                <>
                    <ol className={styles.list}>
                        {results.slice(0, limit).map((report) => (
                            <li key={report.id}>
                                <ReportCard report={report} />
                            </li>
                        ))}
                    </ol>

                    {results.length > limit && (
                        <div className={styles.loadMore}>
                            <button type="button" className="btn" onClick={() => setLimit(limit + PAGE_SIZE)}>
                                {t.showMore}
                                <span className={styles.loadMore__count}>{format(explorer.moreCount, { count: results.length - limit })}</span>
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className={styles.empty}>
                    <Icon icon="lucide:waves" width="32" height="32" />
                    <h3>{t.emptyTitle}</h3>
                    <p>{t.emptyText}</p>
                    <button type="button" className="btn" onClick={clearAll}>{explorer.clearAllFilters}</button>
                </div>
            )}
        </div>
    );
}

export default ReportFeed;
