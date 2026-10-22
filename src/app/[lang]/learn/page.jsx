import styles from "./page.module.css";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
import LearnNav from "@/ui/components/learn-nav/learnNav";
import { getLearnContent } from "@/lib/content/learn";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";
import ReportActions from "@/ui/components/report-actions/reportActions";

const WORDS_PER_MINUTE = 220;

// "*Orcinus orca* hunts" -> [<em>Orcinus orca</em>, " hunts"]
const rich = (text) =>
    text.split(/(\*[^*]+\*)/g).map((part, index) => (
        <Fragment key={index}>{/^\*[^*]+\*$/.test(part) ? <em>{part.slice(1, -1)}</em> : part}</Fragment>
    ));

// Every string in the content, for the reading-time estimate
const collectText = (value) =>
    typeof value === 'string' ? [value] : value && typeof value === 'object' ? Object.values(value).flatMap(collectText) : [];

function Block({ block }) {
    if (typeof block === 'string') return <p>{rich(block)}</p>;

    switch (block.type) {
        case 'h3':
            return <h3 className={styles.subheading}>{rich(block.text)}</h3>;

        case 'facts':
            return (
                <dl className={styles.facts}>
                    {block.items.map(({ value, label }) => (
                        <div key={label} className={styles.fact}>
                            <dt>{rich(label)}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            );

        case 'cards':
            return (
                <ul className={styles.cards}>
                    {block.items.map(({ icon, title, text }) => (
                        <li key={title} className={styles.card}>
                            {icon && (
                                <span className={styles.card__icon}>
                                    <Icon icon={icon} width="22" height="22" />
                                </span>
                            )}
                            <h4 className={styles.card__title}>{rich(title)}</h4>
                            <p>{rich(text)}</p>
                        </li>
                    ))}
                </ul>
            );

        case 'timeline':
            return (
                <ol className={styles.timeline}>
                    {block.items.map(({ when, title, text }) => (
                        <li key={title} className={styles.timeline__item}>
                            <span className={styles.timeline__when}>{when}</span>
                            <h4 className={styles.timeline__title}>{rich(title)}</h4>
                            <p>{rich(text)}</p>
                        </li>
                    ))}
                </ol>
            );

        case 'list':
            return (
                <ul className={styles.list}>
                    {block.items.map((item) => <li key={item}>{rich(item)}</li>)}
                </ul>
            );

        case 'callout':
            return (
                <aside className={styles.callout}>
                    <span className={styles.callout__icon}>
                        <Icon icon="lucide:lightbulb" width="22" height="22" />
                    </span>
                    <div>
                        <h4 className={styles.callout__title}>{rich(block.title)}</h4>
                        <p>{rich(block.text)}</p>
                    </div>
                </aside>
            );

        default:
            return null;
    }
}

export async function generateMetadata() {
    const { learn, meta } = await getDictionary();

    return {
        title: format(learn.metaTitle, { site: meta.title }),
        description: learn.intro,
    };
}

export default async function Learn() {
    const locale = await getLocale();
    const { learn, common } = await getDictionary();
    const { sections, references, locale: contentLocale } = getLearnContent(locale);

    const words = collectText(sections).join(' ').split(/\s+/).length;
    const minutes = Math.round(words / WORDS_PER_MINUTE);

    const menu = [
        ...sections.map(({ id, nav, icon }) => ({ id, title: nav, icon })),
        { id: 'sources', title: learn.sourcesNav, icon: 'lucide:library' },
    ];

    return (
        <>
            {/* Header */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{learn.tag}</span>
                    <h1>{learn.title} <span>{learn.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{learn.intro}</p>

                    <ul className={styles.meta}>
                        <li>
                            <Icon icon="lucide:book-open" width="16" height="16" />
                            {format(learn.chapters, { count: sections.length })}
                        </li>
                        <li>
                            <Icon icon="lucide:clock" width="16" height="16" />
                            {format(learn.readingTime, { minutes })}
                        </li>
                        <li>
                            <Icon icon="lucide:library" width="16" height="16" />
                            {format(learn.referencesCount, { count: references.length })}
                        </li>
                    </ul>

                    {contentLocale !== locale && (
                        <p className={styles.notice}>
                            <Icon icon="lucide:languages" width="18" height="18" />
                            {learn.englishOnly}
                        </p>
                    )}
                </div>
            </section>

            {/* Article + side menu */}
            <div className={`innerWrapper ${styles.layout}`}>
                <article className={styles.article} lang={contentLocale !== locale ? contentLocale : undefined}>
                    {sections.map(({ id, icon, title, lede, blocks }, index) => (
                        <section key={id} id={id} className={styles.chapter} aria-labelledby={`${id}-title`} tabIndex={-1}>
                            <header className={styles.chapter__header}>
                                <span className={styles.chapter__icon}>
                                    <Icon icon={icon} width="24" height="24" />
                                </span>
                                <span className={styles.chapter__number}>{String(index + 1).padStart(2, '0')}</span>
                            </header>
                            <h2 id={`${id}-title`}>{rich(title)}</h2>
                            <p className={styles.chapter__lede}>{rich(lede)}</p>

                            <div className={styles.prose}>
                                {blocks.map((block, i) => <Block key={i} block={block} />)}
                            </div>
                        </section>
                    ))}

                    <section id="sources" className={`${styles.chapter} ${styles.sources}`} aria-labelledby="sources-title" tabIndex={-1}>
                        <header className={styles.chapter__header}>
                            <span className={styles.chapter__icon}>
                                <Icon icon="lucide:library" width="24" height="24" />
                            </span>
                        </header>
                        <h2 id="sources-title" lang={contentLocale !== locale ? locale : undefined}>{learn.sourcesTitle}</h2>
                        <p className={styles.chapter__lede} lang={contentLocale !== locale ? locale : undefined}>{learn.sourcesIntro}</p>

                        <ol className={styles.references}>
                            {references.map((reference) => <li key={reference}>{rich(reference)}</li>)}
                        </ol>
                    </section>
                </article>

                <aside className={styles.aside}>
                    <LearnNav items={menu} label={learn.navLabel} />
                </aside>
            </div>

            {/* Call to action */}
            <section className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h2>{learn.ctaTitle}</h2>
                        <p>{learn.ctaText}</p>
                    </div>
                    <div className={styles.cta__buttons}>
                        <ReportActions />
                    </div>
                </div>
            </section>
        </>
    );
}
