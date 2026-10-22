import styles from "./page.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ReportFeed from "@/ui/components/report-feed/reportFeed";
import { REGIONS } from "@/ui/components/species-explorer/options";
import { getReports } from "@/lib/mock/reports";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";
import ReportActions from "@/ui/components/report-actions/reportActions";

const TOP_SPECIES = 5;

// Single-series bar list: the bar carries magnitude, the value is printed beside it
function BarList({ items, label }) {
    const max = Math.max(...items.map(({ value }) => value));

    return (
        <ul className={styles.bars} aria-label={label}>
            {items.map(({ key, name, value, href }) => (
                <li key={key} className={styles.bar} title={`${name}: ${value}`}>
                    <span className={styles.bar__label}>
                        {href ? <Link href={href}>{name}</Link> : name}
                    </span>
                    <span className={styles.bar__value}>{value}</span>
                    <span className={styles.bar__track} aria-hidden="true">
                        <span className={styles.bar__fill} style={{ inlineSize: `${(value / max) * 100}%` }} />
                    </span>
                </li>
            ))}
        </ul>
    );
}

export async function generateMetadata() {
    const { reports, meta } = await getDictionary();

    return {
        title: format(reports.metaTitle, { site: meta.title }),
        description: reports.intro,
    };
}

export default async function Sightings() {
    const locale = await getLocale();
    const { reports: t, explorer, common } = await getDictionary();
    const reports = getReports(locale);

    const stats = [
        { value: reports.length, label: t.stats.reports },
        { value: new Set(reports.map(({ species }) => species.slug)).size, label: t.stats.species },
        { value: reports.filter(({ type }) => type === 'stranding').length, label: t.stats.strandings },
        { value: new Set(reports.map(({ observer }) => observer)).size, label: t.stats.observers },
    ];

    const speciesCounts = Object.values(
        reports.reduce((counts, { species }) => {
            counts[species.slug] ??= { key: species.slug, name: species.commonName, value: 0, href: `/${locale}/species/${species.slug}` };
            counts[species.slug].value += 1;
            return counts;
        }, {})
    )
        .sort((a, b) => b.value - a.value || a.name.localeCompare(b.name))
        .slice(0, TOP_SPECIES);

    const regionCounts = REGIONS.map((region) => ({
        key: region,
        name: explorer.regions[region],
        value: reports.filter((report) => report.region === region).length,
    }));

    return (
        <>
            {/* Header */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title} <span>{t.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{t.intro}</p>

                    <ul className={styles.stats} aria-label={t.stats.label}>
                        {stats.map(({ value, label }) => (
                            <li key={label} className={styles.stat}>
                                <span className={styles.stat__value}>{value}</span>
                                <span className={styles.stat__label}>{label}</span>
                            </li>
                        ))}
                    </ul>

                    <p className={styles.notice}>
                        <Icon icon="lucide:info" width="18" height="18" />
                        {t.notice}
                    </p>
                </div>
            </section>

            {/* Feed + side panels */}
            <div className={`innerWrapper ${styles.layout}`}>
                <section className={styles.feed} aria-labelledby="feed-title">
                    <h2 id="feed-title" className="visually-hidden">{t.feedTitle}</h2>
                    <ReportFeed reports={reports} />
                </section>

                <aside className={styles.aside}>
                    <section className={styles.panel} aria-labelledby="top-species-title">
                        <h3 id="top-species-title" className={styles.panel__title}>
                            <Icon icon="lucide:trending-up" width="20" height="20" />
                            {t.topSpecies}
                        </h3>
                        <BarList items={speciesCounts} label={t.topSpecies} />
                    </section>

                    <section className={styles.panel} aria-labelledby="regions-title">
                        <h3 id="regions-title" className={styles.panel__title}>
                            <Icon icon="lucide:map" width="20" height="20" />
                            {t.byRegion}
                        </h3>
                        <BarList items={regionCounts} label={t.byRegion} />
                    </section>

                    <section className={`${styles.panel} ${styles['panel--alert']}`} aria-labelledby="stranding-help-title">
                        <h3 id="stranding-help-title" className={styles.panel__title}>
                            <Icon icon="lucide:life-buoy" width="20" height="20" />
                            {t.strandingTitle}
                        </h3>
                        <ol className={styles.steps}>
                            {t.strandingSteps.map((step) => <li key={step}>{step}</li>)}
                        </ol>
                        <Link href={`/${locale}/links#rescue`} className={styles.panel__link}>
                            {t.strandingLink}
                            <Icon icon="lucide:arrow-right" width="18" height="18" />
                        </Link>
                    </section>
                </aside>
            </div>

            {/* Call to action */}
            <section className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h2>{t.ctaTitle}</h2>
                        <p>{t.ctaText}</p>
                    </div>
                    <div className={styles.cta__buttons}>
                        <ReportActions />
                    </div>
                </div>
            </section>
        </>
    );
}
