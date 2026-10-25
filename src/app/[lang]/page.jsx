import styles  from "./page.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import SpeciesCard from "@/ui/components/species-card/speciesCard";
import { SIGHTINGS, THREATENED, toCard } from "@/ui/components/species-explorer/options";
import { getAllSpecies } from "@/lib/data/species";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import ReportActions from "@/ui/components/report-actions/reportActions";
import { format } from "@/i18n/format";
import { getToday, monthNames } from "@/lib/time";

const IN_SEASON = 6;

export default async function Home() {
    const locale = await getLocale();
    const { home, common } = await getDictionary();
    const species = await getAllSpecies(locale);
    const { month } = await getToday();
    const monthName = monthNames(locale).find((entry) => entry.month === month).name;

    // What's most likely to be around this month, commonest first
    const inSeason = species
        .filter(({ bestMonths }) => bestMonths.includes(month))
        .sort((a, b) => SIGHTINGS.indexOf(a.sightingFrequency) - SIGHTINGS.indexOf(b.sightingFrequency))
        .slice(0, IN_SEASON);

    const stats = [
        { value: species.length, label: home.stats.species },
        { value: species.filter(({ iucnStatus }) => THREATENED.includes(iucnStatus)).length, label: home.stats.threatened },
        { value: species.filter(({ residency }) => residency === 'Resident (year-round)').length, label: home.stats.resident },
    ];

    return (

        <>
            {/* Hero section */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <div className={styles.hero__content}>
                        <Image src="/hero.png"
                            alt={home.hero.imageAlt}
                            width={1408}
                            height={768}
                            sizes="(max-width: 1200px) calc(100vw - 2rem), 1168px"
                            className={styles.hero__image}
                            preload
                            fetchPriority="high"
                        />
                        <div className={styles.hero__text}>
                            <span className={styles.tag}>{home.hero.tag}</span>
                            <h1 className={styles.hero__title}>{home.hero.title} <br /> <span>{home.hero.titleHighlight}</span> </h1>
                            <p className={styles.hero__subtitle}>{home.hero.subtitle}</p>
                            <div className={styles.hero__actions}>
                                <Link href={`/${locale}/species`} className={`btn ${styles.btn__hero}`}>{home.hero.cta} <Icon icon="lucide:arrow-right" /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats section */}
            <section className={styles.stats} aria-label={home.stats.label}>
                <div className="innerWrapper">
                    <ul className={styles.stats__list}>
                        {stats.map(({ value, label }) => (
                            <li key={label} className={styles.stat}>
                                <span className={styles.stat__value}>{value}</span>
                                <span className={styles.stat__label}>{label}</span>
                            </li>
                        ))}
                        <li className={styles.stats__remark}>
                            <Icon icon="lucide:microscope" width="22" height="22" />
                            <p>{home.stats.remark}</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* In season now */}
            <section id="explorer" className={`section ${styles.explorer}`}>
                <div className="innerWrapper">
                    <header className={styles.explorer__header}>
                        <span className={styles.tag}>{home.season.tag}</span>
                        <h2>{home.season.title} <span>{format(home.season.titleHighlight, { month: monthName })}</span></h2>
                        <p>{home.season.intro}</p>
                    </header>
                    {inSeason.length > 0 && (
                        <ul className={styles.season__grid}>
                            {inSeason.map((item) => (
                                <li key={item.slug}><SpeciesCard species={toCard(item)} /></li>
                            ))}
                        </ul>
                    )}
                    <div className={styles.season__actions}>
                        <Link href={`/${locale}/species`} className="btn btn--primary">
                            {format(home.season.all, { count: species.length })}
                            <Icon icon="lucide:arrow-right" />
                        </Link>
                        <Link href={`/${locale}/where/calendar`} className="btn">
                            <Icon icon="lucide:calendar-days" />
                            {home.season.calendar}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Knowledge section */}
            <section className={`section ${styles.knowledge}`}>
                <div className={`innerWrapper ${styles.innerWrapper}`}>
                    <div className={styles.knowledge__content}>
                        <span className={styles.tag}>{home.knowledge.tag}</span>
                        <h1> {home.knowledge.title} <span>{home.knowledge.titleHighlight}</span> </h1>
                        <p>{home.knowledge.intro}</p>
                        <Link href={`/${locale}/learn`} className="btn">{home.knowledge.cta}</Link>
                    </div>
                    <div className={styles.knowledge__cta}>
                        <Link href={`/${locale}/learn/evolution`} className={styles.knowledge__card}>
                            <div className={styles.card__number}>01</div>
                            <div className={styles.card__icon}>
                                <Icon icon="lucide:waves" width="32" height="32" />
                            </div>
                            <h3 className={styles.card__title}>{home.knowledge.returnTitle}</h3>
                            <p className={styles.card__description}>{home.knowledge.returnDescription}</p>
                        </Link>
                        <Link href={`/${locale}/learn/ecology`} className={styles.knowledge__card}>
                            <div className={styles.card__number}>02</div>
                            <div className={styles.card__icon}>
                                <Icon icon="lucide:earth" width="32" height="32" />
                            </div>
                            <h3 className={styles.card__title}>{home.knowledge.connectionsTitle}</h3>
                            <p className={styles.card__description}>{home.knowledge.connectionsDescription}</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Help section */}
            <section className={`section ${styles.help}`}>
                <div className={`innerWrapper ${styles.innerWrapper}`}>
                    <div className={styles.help__content}>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h1> {home.help.title} </h1>
                        <p>{home.help.intro}</p>
                    </div>
                    <div className={styles.help__cta}>
                        <ReportActions />
                    </div>
                </div>
            </section>
        </>
    );
}
