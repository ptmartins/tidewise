import styles from "./page.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Accordion from "@/ui/components/accordion/accordion";
import { getAllSpeciesSlugs, getSpeciesBySlug } from "@/lib/mock/species";
import { LOCALE_DETAILS } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format, formatNumber, label } from "@/i18n/format";

const IUCN_SCALE = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'];

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const TREND_ICONS = {
    increasing: 'lucide:trending-up',
    stable: 'lucide:move-right',
    decreasing: 'lucide:trending-down',
    unknown: 'lucide:circle-help',
};

// Localized month names, e.g. { name: 'janeiro', initial: 'J' }
const monthNames = (locale) => MONTHS.map((month, index) => {
    const date = new Date(Date.UTC(2000, index, 1));
    const name = (style) => new Intl.DateTimeFormat(LOCALE_DETAILS[locale].htmlLang, { month: style, timeZone: 'UTC' }).format(date);
    return { month, name: name('long'), initial: name('narrow') };
});

const formatRange = (locale, { min, max }, unit) => `${formatNumber(locale, min)}–${formatNumber(locale, max)} ${unit}`;

const formatWeight = (locale, { min, max }) =>
    max >= 1000 ? formatRange(locale, { min: min / 1000, max: max / 1000 }, 't') : formatRange(locale, { min, max }, 'kg');

const withArticle = (noun) => `${/^[aeiou]/i.test(noun) ? 'an' : 'a'} ${noun}`;

const firstSentence = (paragraphs) => paragraphs[0].split(/(?<=\.)\s/)[0];

export function generateStaticParams() {
    return getAllSpeciesSlugs();
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const species = getSpeciesBySlug(slug, await getLocale());

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
    const species = getSpeciesBySlug(slug, locale);

    if (!species) notFound();

    const { species: t, common, data, nav } = await getDictionary();

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
                            <Link href={`/${locale}`}>{nav.explore}</Link>
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

            {/* Call to action */}
            <section className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h2>{format(t.ctaTitle, { nameWithArticle: withArticle(species.commonName.toLowerCase()) })}</h2>
                        <p>{t.ctaText}</p>
                    </div>
                    <div className={styles.cta__buttons}>
                        <button className="btn btn--secondary">
                            <Icon icon="lucide:binoculars" width="24" height="24" />
                            {common.reportSighting}
                            <Icon icon="lucide:chevron-right" width="24" height="24" />
                        </button>
                        <button className="btn">
                            <Icon icon="lucide:shield-alert" width="24" height="24" />
                            {common.reportStranding}
                            <Icon icon="lucide:chevron-right" width="24" height="24" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
