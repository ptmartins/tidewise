import styles from "./page.module.css";
import extra from "@/ui/styles/contentPage.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Accordion from "@/ui/components/accordion/accordion";
import SpeciesCard from "@/ui/components/species-card/speciesCard";
import ReportCard from "@/ui/components/report-card/reportCard";
import { toCard } from "@/ui/components/species-explorer/options";
import { getAllSpeciesSlugs, getSimilarSpecies, getSpeciesBySlug } from "@/lib/data/species";
import { getReports } from "@/lib/data/reports";
import { HELP_ICONS, helpActionsFor } from "@/lib/help";
import { monthNames } from "@/lib/time";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format, formatNumber, label } from "@/i18n/format";
import ReportActions from "@/ui/components/report-actions/reportActions";

const RECENT_REPORTS = 3;

const IUCN_SCALE = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'];

const TREND_ICONS = {
    increasing: 'lucide:trending-up',
    stable: 'lucide:move-right',
    decreasing: 'lucide:trending-down',
    unknown: 'lucide:circle-help',
};

const formatRange =(locale, { min, max }, unit) => `${formatNumber(locale, min)}–${formatNumber(locale, max)} ${unit}`;

const formatWeight = (locale, { min, max }) =>
    max >= 1000 ? formatRange(locale, { min: min / 1000, max: max / 1000 }, 't') : formatRange(locale, { min, max }, 'kg');

const withArticle = (noun) => `${/^[aeiou]/i.test(noun) ? 'an' : 'a'} ${noun}`;

const firstSentence = (paragraphs) => paragraphs[0].split(/(?<=\.)\s/)[0];

export async function generateStaticParams() {
    return await getAllSpeciesSlugs();
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const species = await getSpeciesBySlug(slug, await getLocale());

    if (!species) return {};

    const dict = await getDictionary();

    return {
        title: format(dict.species.metaTitle, { name: species.commonName, scientificName: species.scientificName }),
        description: species.summary,
    };
}

export default async function SpeciesPage({ params }) {
    const { slug } = await params;
    const locale = await getLocale();
    const species = await getSpeciesBySlug(slug, locale);

    if (!species) notFound();

    const { species: t, common, data, nav } = await getDictionary();
    const similar = await getSimilarSpecies(species.slug, locale);
    const recentReports = (await getReports(locale)).filter((report) => report.species.slug === species.slug).slice(0, RECENT_REPORTS);
    const helpActions = helpActionsFor(species.threats);

    const quickFacts = [
        { icon: 'lucide:weight', label: t.weight, value: formatWeight(locale, species.weight) },
        { icon: 'lucide:ruler', label: t.length, value: formatRange(locale, species.length, 'm') },
        { icon: 'lucide:hourglass', label: t.lifespan, value: species.lifespan ? format(t.lifespanValue, { max: species.lifespan.max }) : t.unknown },
        { icon: 'lucide:globe', label: t.distribution, value: label(data.distribution, species.distributionShort) },
    ];

    const sections = [
        { id: 'about', icon: 'lucide:book-open', body: species.about },
        { id: 'population', icon: 'lucide:chart-line', body: species.populationStatus },
        { id: 'appearance', icon: 'lucide:scan-eye', body: species.appearance },
        { id: 'behaviour', icon: 'lucide:fish', body: species.behaviourAndDiet },
        { id: 'reproduction', icon: 'lucide:heart-handshake', body: species.lifespanAndReproduction },
        { id: 'threats', icon: 'lucide:triangle-alert', body: species.threatsDetail },
    ];

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`innerWrapper ${styles.innerWrapper}`}>
                    <div className={styles.hero__text}>
                        <nav className={styles.breadcrumb} aria-label={t.breadcrumb}>
                            <Link href={`/${locale}/species`}>{nav.species}</Link>
                            <Icon icon="lucide:chevron-right" width="14" height="14" />
                            <span>{label(data.groupsPlural, species.category)}</span>
                        </nav>

                        <span className={styles.tag}>{label(data.groups, species.category)} · {species.family}</span>
                        <h1 className={styles.hero__title}>{species.commonName}</h1>
                        <p className={styles.hero__scientific}>
                            <em>{species.scientificName}</em>
                            <span>{species.authority}</span>
                        </p>

                        <p className={styles.hero__summary}>{species.summary}</p>

                        <ul className={styles.altNames} aria-label={t.otherNames}>
                            {species.alternativeNames.map((name) => (
                                <li key={name}>{name}</li>
                            ))}
                        </ul>
                    </div>

                    <figure className={styles.hero__media}>
                        {species.mainImage ? (
                            <>
                                <Image
                                    src={species.mainImage.src}
                                    alt={species.mainImage.alt}
                                    width={species.mainImage.width}
                                    height={species.mainImage.height}
                                    sizes="(max-width: 900px) 100vw, 55vw"
                                    className={`${styles.hero__image} ${species.category === 'Seal' ? styles['hero__image--static'] : ''}`}
                                    preload
                                    fetchPriority="high"
                                />
                                <figcaption>{species.mainImage.credit}</figcaption>
                            </>
                        ) : (
                            <div className={styles.hero__placeholder}>
                                <Icon icon="lucide:image-off" width="32" height="32" />
                                <span>{t.imageComingSoon}</span>
                            </div>
                        )}
                    </figure>
                </div>
            </section>

            {/* Status + quick facts */}
            <section className={styles.overview}>
                <div className={`innerWrapper ${styles.overview__grid}`}>
                    <div className={styles.status}>
                        <div className={styles.status__header}>
                            <span className={styles.label}>{t.conservationStatus}</span>
                            <span className={styles.status__badge} data-status={species.iucnStatus}>
                                {species.iucnStatus}
                            </span>
                        </div>
                        <p className={styles.status__name}>{data.iucn[species.iucnStatus]}</p>
                        <span className={styles.status__source}>{t.iucnSource}</span>

                        <ol className={styles.iucnScale} aria-label={t.iucnScale}>
                            {IUCN_SCALE.map((code) => (
                                <li
                                    key={code}
                                    data-status={code}
                                    className={code === species.iucnStatus ? styles['iucnScale--active'] : ''}
                                    title={data.iucn[code]}
                                    aria-current={code === species.iucnStatus ? 'true' : undefined}
                                >
                                    {code}
                                </li>
                            ))}
                        </ol>

                        <dl className={styles.status__meta}>
                            {species.nationalStatus && (
                                <div>
                                    <dt>{t.inPortugal}</dt>
                                    <dd>
                                        <span className={styles.status__dot} data-status={species.nationalStatus} />
                                        {data.iucn[species.nationalStatus]}
                                        {species.nationalStatusNote && <small>{label(data.nationalNotes, species.nationalStatusNote)}</small>}
                                    </dd>
                                </div>
                            )}
                            <div>
                                <dt>{t.populationTrend}</dt>
                                <dd>
                                    <Icon icon={TREND_ICONS[species.populationTrend]} width="18" height="18" />
                                    <span>{label(data.trends, species.populationTrend)}</span>
                                </dd>
                            </div>
                        </dl>

                        <div className={styles.status__protection}>
                            <span className={styles.label}>{t.protectedUnder}</span>
                            <ul className={styles.chips}>
                                {species.protectedUnder.map((item) => (
                                    <li key={item}>
                                        <Icon icon="lucide:shield-check" width="14" height="14" />
                                        {label(data.protection, item)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.facts}>
                        {quickFacts.map(({ icon, label: name, value }) => (
                            <div key={name} className={styles.fact}>
                                <span className={styles.fact__icon}>
                                    <Icon icon={icon} width="22" height="22" />
                                </span>
                                <span className={styles.label}>{name}</span>
                                <span className={styles.fact__value}>{value}</span>
                            </div>
                        ))}

                        <div className={`${styles.fact} ${styles['fact--wide']}`}>
                            <span className={styles.fact__icon}>
                                <Icon icon="lucide:shield-alert" width="22" height="22" />
                            </span>
                            <span className={styles.label}>{t.mainThreats}</span>
                            <ul className={styles.chips}>
                                {species.threats.map((threat) => (
                                    <li key={threat}>{label(data.threats, threat)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Field guide */}
            <section className={`section ${styles.guide}`}>
                <div className={`innerWrapper ${styles.guide__grid}`}>
                    <aside className={styles.guide__aside}>
                        <span className={styles.tag}>{t.fieldGuide}</span>
                        <h2>{t.guideTitle} <span>{format(t.guideHighlight, { shortName: species.commonName.split(' ').at(-1) })}</span></h2>
                        <p className={styles.guide__intro}>{t.guideIntro}</p>

                        <div className={styles.spotting}>
                            <h3 className={styles.spotting__title}>
                                <Icon icon="lucide:binoculars" width="20" height="20" /> {t.whereToSpot}
                            </h3>

                            <ul className={styles.chips}>
                                {species.regionsInPortugal.map((region) => (
                                    <li key={region}>{label(data.regions, region)}</li>
                                ))}
                            </ul>

                            <dl className={styles.spotting__meta}>
                                <div>
                                    <dt>{t.presence}</dt>
                                    <dd>{label(data.residency, species.residency)}</dd>
                                </div>
                                <div>
                                    <dt>{t.sightings}</dt>
                                    <dd>{label(data.sightings, species.sightingFrequency)}</dd>
                                </div>
                            </dl>

                            <span className={styles.label}>{t.bestMonths}</span>
                            {species.bestMonths.length === 0 && (
                                <p className={styles.months__note}>{t.noSeasonalPattern}</p>
                            )}
                            <ol className={styles.months}>
                                {monthNames(locale).map(({ month, name, initial }) => (
                                    <li
                                        key={month}
                                        className={species.bestMonths.includes(month) ? styles['months--active'] : ''}
                                        title={name}
                                    >
                                        {initial}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {species.sound && (
                            <figure className={styles.listen}>
                                <h3 className={styles.spotting__title}>
                                    <Icon icon="lucide:audio-waveform" width="20" height="20" /> {t.listenTitle}
                                </h3>
                                <audio src={species.sound.src} controls preload="none" className={styles.listen__player}>
                                    {t.listenUnsupported}
                                </audio>
                                <figcaption>
                                    <p>{species.sound.description}</p>
                                    <small>
                                        {t.listenCredit}:{' '}
                                        <a href={species.sound.sourceUrl} target="_blank" rel="noopener noreferrer">{species.sound.credit}</a>
                                        {species.sound.license && ` · ${species.sound.license}`}
                                    </small>
                                </figcaption>
                            </figure>
                        )}
                    </aside>

                    <div className={styles.accordions}>
                        {sections.map(({ id, icon, body }, index) => (
                            <Accordion
                                key={id}
                                number={String(index + 1).padStart(2, '0')}
                                icon={icon}
                                title={t.sections[id]}
                                teaser={firstSentence(body)}
                                defaultOpen={index === 0}
                            >
                                {body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}

                                {id === 'threats' && (
                                    <div className={styles.protection}>
                                        <span className={styles.label}>{t.legalProtection}</span>
                                        <ul>
                                            {species.legalProtection.map((item) => <li key={item}>{label(data.protection, item)}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </Accordion>
                        ))}

                        <Accordion
                            number={String(sections.length + 1).padStart(2, '0')}
                            icon="lucide:network"
                            title={t.classification}
                            teaser={species.classification.map(({ name }) => name).slice(-3).join(' › ')}
                        >
                            <ol className={styles.taxonomy}>
                                {species.classification.map(({ rank, name, italic }) => (
                                    <li key={rank}>
                                        <span>{label(data.ranks, rank)}</span>
                                        {italic ? <em>{name}</em> : <strong>{name}</strong>}
                                    </li>
                                ))}
                            </ol>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* How you can help */}
            <section className={extra.block} aria-labelledby="help-title">
                <div className="innerWrapper">
                    <header className={extra.block__header}>
                        <span className={extra.tag}>{common.youCanHelp}</span>
                        <h2 id="help-title">{t.help.title}</h2>
                        <p>{t.help.intro}</p>
                    </header>
                    <ul className={extra.grid}>
                        {helpActions.map((action) => (
                            <li key={action} className={extra.card}>
                                <span className={extra.card__icon}>
                                    <Icon icon={HELP_ICONS[action]} width="22" height="22" />
                                </span>
                                <h3>{t.help.actions[action].title}</h3>
                                <p>{t.help.actions[action].text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Similar species */}
            {similar.length > 0 && (
                <section className={extra.block} aria-labelledby="similar-title">
                    <div className="innerWrapper">
                        <header className={extra.block__header}>
                            <h2 id="similar-title">{t.similarTitle}</h2>
                            <p>{t.similarIntro}</p>
                        </header>
                        <ul className={extra.grid}>
                            {similar.map((other) => (
                                <li key={other.slug}><SpeciesCard species={toCard(other)} /></li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {/* Recent sightings */}
            {recentReports.length > 0 && (
                <section className={extra.block} aria-labelledby="recent-title">
                    <div className="innerWrapper">
                        <header className={extra.block__header}>
                            <h2 id="recent-title">{t.recentTitle}</h2>
                        </header>
                        <ol className={extra.reports}>
                            {recentReports.map((report) => <li key={report.id}><ReportCard report={report} /></li>)}
                        </ol>
                        <p className={extra.notice}>
                            <Link href={`/${locale}/sightings`} className={extra.link}>
                                {t.allReports}
                                <Icon icon="lucide:arrow-right" width="18" height="18" />
                            </Link>
                        </p>
                    </div>
                </section>
            )}

            {/* Sources & review */}
            <section className={extra.block} aria-labelledby="sources-title">
                <div className="innerWrapper">
                    <div className={extra.review}>
                        <Icon icon="lucide:library" width="22" height="22" />
                        <div>
                            <h2 id="sources-title" className={extra.review__title}>{t.sourcesTitle}</h2>
                            <p>{t.sourcesText}</p>
                            <p className={extra.review__links}>
                                <Link href={`/${locale}/about#methodology`} className={extra.link}>{t.sourcesMethodology}</Link>
                                <Link href={`/${locale}/about#contact`} className={extra.link}>{t.sourcesError}</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h2>{format(t.ctaTitle, { nameWithArticle: withArticle(species.commonName.toLowerCase()) })}</h2>
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
