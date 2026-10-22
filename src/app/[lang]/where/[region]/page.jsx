import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import SpeciesCard from "@/ui/components/species-card/speciesCard";
import ReportCard from "@/ui/components/report-card/reportCard";
import SeasonCalendar from "@/ui/components/season-calendar/seasonCalendar";
import ReportActions from "@/ui/components/report-actions/reportActions";
import { REGIONS, toCard } from "@/ui/components/species-explorer/options";
import { getHotspots, getRegionSpecies, isRegion } from "@/lib/where";
import { getReports } from "@/lib/mock/reports";
import { getToday } from "@/lib/time";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format, label } from "@/i18n/format";

const RECENT_REPORTS = 3;

export function generateStaticParams() {
    return REGIONS.map((region) => ({ region }));
}

export async function generateMetadata({ params }) {
    const { region } = await params;
    if (!isRegion(region)) return {};

    const { where, meta } = await getDictionary();

    return {
        title: format(where.regionMetaTitle, { region: where.regions[region].title, site: meta.title }),
        description: where.regions[region].intro,
    };
}

export default async function Region({ params }) {
    const { region } = await params;
    if (!isRegion(region)) notFound();

    const locale = await getLocale();
    const { where: t, data, common } = await getDictionary();
    const { month } = await getToday();
    const species = getRegionSpecies(region, locale);
    const hotspots = getHotspots(species, region);
    const reports = getReports(locale).filter((report) => report.region === region).slice(0, RECENT_REPORTS);
    const copy = t.regions[region];

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <nav className={styles.breadcrumb} aria-label={t.breadcrumb}>
                        <Link href={`/${locale}/where`}>{t.tag}</Link>
                        <Icon icon="lucide:chevron-right" width="14" height="14" />
                        <span>{copy.title}</span>
                    </nav>
                    <h1>{copy.title}</h1>
                    <p className={styles.hero__intro}>{copy.intro}</p>

                    {hotspots.length > 0 && (
                        <nav className={styles.jump} aria-label={t.hotspotsLabel}>
                            <ul>
                                {hotspots.map(({ place, count }) => (
                                    <li key={place}>
                                        <span className={styles.pill}>
                                            <Icon icon="lucide:map-pin" width="14" height="14" />
                                            {label(data.regions, place)}
                                            <small>{count}</small>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </section>

            {/* Species */}
            <section className={styles.block} aria-labelledby="species-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="species-title">{format(t.speciesTitle, { count: species.length })}</h2>
                        <p>{t.speciesIntro}</p>
                    </header>
                    <ul className={styles.grid}>
                        {species.map((item) => (
                            <li key={item.slug}><SpeciesCard species={toCard(item)} /></li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* When to look */}
            <section id="calendar" className={styles.block} aria-labelledby="calendar-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="calendar-title">{t.calendarTitle}</h2>
                        <p>{t.calendarRegionIntro}</p>
                    </header>
                    <SeasonCalendar
                        species={species}
                        locale={locale}
                        currentMonth={month}
                        caption={format(t.calendarCaption, { region: copy.title })}
                        groupLabels={data.groupsPlural}
                    />
                </div>
            </section>

            {/* Recent reports */}
            <section className={styles.block} aria-labelledby="recent-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="recent-title">{t.recentTitle}</h2>
                    </header>
                    {reports.length > 0 ? (
                        <ol className={styles.reports}>
                            {reports.map((report) => <li key={report.id}><ReportCard report={report} /></li>)}
                        </ol>
                    ) : (
                        <p>{t.noRecent}</p>
                    )}
                    <p className={styles.notice}>
                        <Link href={`/${locale}/sightings`} className={styles.link}>
                            {t.allReports}
                            <Icon icon="lucide:arrow-right" width="18" height="18" />
                        </Link>
                        <Link href={`/${locale}/where#watching`} className={styles.link}>
                            {t.watchingTitle}
                            <Icon icon="lucide:arrow-right" width="18" height="18" />
                        </Link>
                    </p>
                </div>
            </section>

            <section className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h2>{format(t.ctaTitle, { region: copy.title })}</h2>
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
