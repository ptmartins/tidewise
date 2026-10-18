import styles from "./page.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Accordion from "@/ui/components/accordion/accordion";
import { getAllSpeciesSlugs, getSpeciesBySlug, IUCN_LABELS } from "@/lib/mock/species";

const IUCN_SCALE = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'];

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const TREND_ICONS = {
    increasing: 'lucide:trending-up',
    stable: 'lucide:move-right',
    decreasing: 'lucide:trending-down',
    unknown: 'lucide:circle-help',
};

const formatRange = ({ min, max }, unit) => `${min}–${max} ${unit}`;

const firstSentence = (paragraphs) => paragraphs[0].split(/(?<=\.)\s/)[0];

export function generateStaticParams() {
    return getAllSpeciesSlugs();
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const species = getSpeciesBySlug(slug);

    if (!species) return {};

    return {
        title: `${species.commonName} (${species.scientificName}) · Tidewise`,
        description: species.summary,
    };
}

export default async function SpeciesPage({ params }) {
    const { slug } = await params;
    const species = getSpeciesBySlug(slug);

    if (!species) notFound();

    const quickFacts = [
        { icon: 'lucide:weight', label: 'Weight', value: formatRange(species.weight, 'kg') },
        { icon: 'lucide:ruler', label: 'Length', value: formatRange(species.length, 'm') },
        { icon: 'lucide:hourglass', label: 'Lifespan', value: `Up to ${species.lifespan.max} years` },
        { icon: 'lucide:globe', label: 'Distribution', value: species.distributionShort },
    ];

    const sections = [
        { id: 'about', icon: 'lucide:book-open', title: 'About the species', body: species.about },
        { id: 'population', icon: 'lucide:chart-line', title: 'Population status', body: species.populationStatus },
        { id: 'appearance', icon: 'lucide:scan-eye', title: 'Appearance', body: species.appearance },
        { id: 'behaviour', icon: 'lucide:fish', title: 'Behaviour & diet', body: species.behaviourAndDiet },
        { id: 'reproduction', icon: 'lucide:heart-handshake', title: 'Lifespan & reproduction', body: species.lifespanAndReproduction },
        { id: 'threats', icon: 'lucide:triangle-alert', title: 'Threats', body: species.threatsDetail },
    ];

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`innerWrapper ${styles.innerWrapper}`}>
                    <div className={styles.hero__text}>
                        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                            <Link href="/">Explore</Link>
                            <Icon icon="lucide:chevron-right" width="14" height="14" />
                            <span>{species.category}s</span>
                        </nav>

                        <span className={styles.tag}>{species.category} · {species.family}</span>
                        <h1 className={styles.hero__title}>{species.commonName}</h1>
                        <p className={styles.hero__scientific}>
                            <em>{species.scientificName}</em>
                            <span>{species.authority}</span>
                        </p>

                        <p className={styles.hero__summary}>{species.summary}</p>

                        <ul className={styles.altNames} aria-label="Other common names">
                            {species.alternativeNames.map((name) => (
                                <li key={name}>{name}</li>
                            ))}
                        </ul>
                    </div>

                    <figure className={styles.hero__media}>
                        <Image
                            src={species.mainImage.src}
                            alt={species.mainImage.alt}
                            width={species.mainImage.width}
                            height={species.mainImage.height}
                            sizes="(max-width: 900px) 100vw, 55vw"
                            className={styles.hero__image}
                            priority
                        />
                        <figcaption>{species.mainImage.credit}</figcaption>
                    </figure>
                </div>
            </section>

            {/* Status + quick facts */}
            <section className={styles.overview}>
                <div className={`innerWrapper ${styles.overview__grid}`}>
                    <div className={styles.status}>
                        <div className={styles.status__header}>
                            <span className={styles.label}>Conservation status</span>
                            <span className={styles.status__badge} data-status={species.iucnStatus}>
                                {species.iucnStatus}
                            </span>
                        </div>
                        <p className={styles.status__name}>{IUCN_LABELS[species.iucnStatus]}</p>
                        <span className={styles.status__source}>IUCN Red List · global</span>

                        <ol className={styles.iucnScale} aria-label="IUCN Red List scale">
                            {IUCN_SCALE.map((code) => (
                                <li
                                    key={code}
                                    data-status={code}
                                    className={code === species.iucnStatus ? styles['iucnScale--active'] : ''}
                                    title={IUCN_LABELS[code]}
                                    aria-current={code === species.iucnStatus ? 'true' : undefined}
                                >
                                    {code}
                                </li>
                            ))}
                        </ol>

                        <dl className={styles.status__meta}>
                            <div>
                                <dt>In Portugal</dt>
                                <dd>
                                    <span className={styles.status__dot} data-status={species.nationalStatus} />
                                    {IUCN_LABELS[species.nationalStatus]}
                                    <small>{species.nationalStatusNote}</small>
                                </dd>
                            </div>
                            <div>
                                <dt>Population trend</dt>
                                <dd>
                                    <Icon icon={TREND_ICONS[species.populationTrend]} width="18" height="18" />
                                    <span className={styles.capitalize}>{species.populationTrend}</span>
                                </dd>
                            </div>
                        </dl>

                        <div className={styles.status__protection}>
                            <span className={styles.label}>Legally protected under</span>
                            <ul className={styles.chips}>
                                {species.protectedUnder.map((item) => (
                                    <li key={item}>
                                        <Icon icon="lucide:shield-check" width="14" height="14" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.facts}>
                        {quickFacts.map(({ icon, label, value }) => (
                            <div key={label} className={styles.fact}>
                                <span className={styles.fact__icon}>
                                    <Icon icon={icon} width="22" height="22" />
                                </span>
                                <span className={styles.label}>{label}</span>
                                <span className={styles.fact__value}>{value}</span>
                            </div>
                        ))}

                        <div className={`${styles.fact} ${styles['fact--wide']}`}>
                            <span className={styles.fact__icon}>
                                <Icon icon="lucide:shield-alert" width="22" height="22" />
                            </span>
                            <span className={styles.label}>Main threats</span>
                            <ul className={styles.chips}>
                                {species.threats.map((threat) => (
                                    <li key={threat}>{threat}</li>
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
                        <span className={styles.tag}>Field guide</span>
                        <h2>Get to know <span>the {species.commonName.split(' ').at(-1)}</span></h2>
                        <p className={styles.guide__intro}>Everything you need to recognise, understand and help protect this species.</p>

                        <div className={styles.spotting}>
                            <h3 className={styles.spotting__title}>
                                <Icon icon="lucide:binoculars" width="20" height="20" /> Where to spot it
                            </h3>

                            <ul className={styles.chips}>
                                {species.regionsInPortugal.map((region) => (
                                    <li key={region}>{region}</li>
                                ))}
                            </ul>

                            <dl className={styles.spotting__meta}>
                                <div>
                                    <dt>Presence</dt>
                                    <dd>{species.residency}</dd>
                                </div>
                                <div>
                                    <dt>Sightings</dt>
                                    <dd>{species.sightingFrequency}</dd>
                                </div>
                            </dl>

                            <span className={styles.label}>Best months</span>
                            <ol className={styles.months}>
                                {MONTHS.map((month) => (
                                    <li
                                        key={month}
                                        className={species.bestMonths.includes(month) ? styles['months--active'] : ''}
                                        title={month}
                                    >
                                        {month[0]}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>

                    <div className={styles.accordions}>
                        {sections.map(({ id, icon, title, body }, index) => (
                            <Accordion
                                key={id}
                                number={String(index + 1).padStart(2, '0')}
                                icon={icon}
                                title={title}
                                teaser={firstSentence(body)}
                                defaultOpen={index === 0}
                            >
                                {body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}

                                {id === 'threats' && (
                                    <div className={styles.protection}>
                                        <span className={styles.label}>Legal protection</span>
                                        <ul>
                                            {species.legalProtection.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </Accordion>
                        ))}

                        <Accordion
                            number={String(sections.length + 1).padStart(2, '0')}
                            icon="lucide:network"
                            title="Scientific classification"
                            teaser={species.classification.map(({ name }) => name).slice(-3).join(' › ')}
                        >
                            <ol className={styles.taxonomy}>
                                {species.classification.map(({ rank, name, italic }) => (
                                    <li key={rank}>
                                        <span>{rank}</span>
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
                        <span className={styles.tag}>You can help</span>
                        <h2>Spotted a {species.commonName.toLowerCase()}?</h2>
                        <p>Every record helps researchers track populations along our coast.</p>
                    </div>
                    <div className={styles.cta__buttons}>
                        <button className="btn btn--secondary">
                            <Icon icon="lucide:binoculars" width="24" height="24" />
                            Report a sighting
                            <Icon icon="lucide:chevron-right" width="24" height="24" />
                        </button>
                        <button className="btn">
                            <Icon icon="lucide:shield-alert" width="24" height="24" />
                            Report a stranding
                            <Icon icon="lucide:chevron-right" width="24" height="24" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
