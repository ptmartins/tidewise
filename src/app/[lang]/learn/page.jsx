import styles from "./page.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { rich, readingMinutes } from "./blocks";
import { getLearnContent } from "@/lib/data/learn";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";
import ReportActions from "@/ui/components/report-actions/reportActions";

export async function generateMetadata() {
    const { learn, meta } = await getDictionary();

    return {
        title: format(learn.metaTitle, { site: meta.title }),
        description: learn.intro,
    };
}

// Hub for the field notes: every chapter lives on its own page (/learn/[chapter])
export default async function Learn() {
    const locale = await getLocale();
    const { learn, common } = await getDictionary();
    const { sections, references, locale: contentLocale } = await getLearnContent(locale);
    const contentLang = contentLocale !== locale ? contentLocale : undefined;

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
                            {format(learn.readingTime, { minutes: readingMinutes(sections) })}
                        </li>
                        <li>
                            <Icon icon="lucide:library" width="16" height="16" />
                            {format(learn.referencesCount, { count: references.length })}
                        </li>
                    </ul>

                    {contentLang && (
                        <p className={styles.notice}>
                            <Icon icon="lucide:languages" width="18" height="18" />
                            {learn.englishOnly}
                        </p>
                    )}
                </div>
            </section>

            {/* Chapters */}
            <section className={`section ${styles.hub}`} aria-label={learn.chaptersLabel}>
                <div className="innerWrapper">
                    <ol className={styles.chapters} lang={contentLang}>
                        {sections.map((section, index) => (
                            <li key={section.id}>
                                <Link href={`/${locale}/learn/${section.id}`} className={styles.chapterCard}>
                                    <span className={styles.chapter__header}>
                                        <span className={styles.chapter__icon}>
                                            <Icon icon={section.icon} width="22" height="22" />
                                        </span>
                                        <span className={styles.chapter__number}>{String(index + 1).padStart(2, '0')}</span>
                                    </span>
                                    <span className={styles.chapterCard__title}>{rich(section.title)}</span>
                                    <span className={styles.chapterCard__lede}>{rich(section.lede)}</span>
                                    <span className={styles.chapterCard__meta} lang={contentLang ? locale : undefined}>
                                        <Icon icon="lucide:clock" width="14" height="14" />
                                        {format(learn.readingTime, { minutes: readingMinutes(section) })}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>

                    {/* Extras */}
                    <div className={styles.extras}>
                        <Link href={`/${locale}/learn/glossary`} className={styles.extra}>
                            <Icon icon="lucide:book-a" width="24" height="24" />
                            <span>
                                <strong>{learn.glossaryTitle}</strong>
                                {learn.glossaryTeaser}
                            </span>
                            <Icon icon="lucide:arrow-right" width="20" height="20" />
                        </Link>
                        <Link href={`/${locale}/identify`} className={styles.extra}>
                            <Icon icon="lucide:scan-search" width="24" height="24" />
                            <span>
                                <strong>{learn.identifyTitle}</strong>
                                {learn.identifyTeaser}
                            </span>
                            <Icon icon="lucide:arrow-right" width="20" height="20" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sources */}
            <section id="sources" className={`section ${styles.sources}`} aria-labelledby="sources-title">
                <div className="innerWrapper">
                    <h2 id="sources-title">{learn.sourcesTitle}</h2>
                    <p className={styles.chapter__lede}>{learn.sourcesIntro}</p>
                    <ol className={styles.references} lang={contentLang}>
                        {references.map((reference) => <li key={reference}>{rich(reference)}</li>)}
                    </ol>
                </div>
            </section>

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
