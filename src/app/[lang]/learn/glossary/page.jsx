import styles from "../page.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { rich } from "../blocks";
import { getGlossary, getLearnContent } from "@/lib/data/learn";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

const slugify = (term) => term.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export async function generateMetadata() {
    const { learn, meta } = await getDictionary();

    return {
        title: format(learn.chapterMetaTitle, { chapter: learn.glossaryTitle, site: meta.title }),
        description: learn.glossaryTeaser,
    };
}

export default async function Glossary() {
    const locale = await getLocale();
    const { learn } = await getDictionary();
    const { terms, locale: contentLocale } = await getGlossary(locale);
    const { sections } = await getLearnContent(locale);
    const contentLang = contentLocale !== locale ? contentLocale : undefined;
    const chapterName = Object.fromEntries(sections.map(({ id, nav }) => [id, nav]));

    // A–Z groups
    const letters = [...new Set(terms.map(({ term }) => term[0].toUpperCase()))].sort();

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <nav className={styles.breadcrumb} aria-label={learn.breadcrumb}>
                        <Link href={`/${locale}/learn`}>{learn.tag}</Link>
                        <Icon icon="lucide:chevron-right" width="14" height="14" />
                        <span>{learn.glossaryTitle}</span>
                    </nav>
                    <h1>{learn.glossaryTitle}</h1>
                    <p className={styles.hero__intro}>{learn.glossaryTeaser}</p>

                    <ul className={styles.meta} aria-label={learn.glossaryJump}>
                        {letters.map((letter) => (
                            <li key={letter}><a href={`#letter-${letter}`}>{letter}</a></li>
                        ))}
                    </ul>

                    {contentLang && (
                        <p className={styles.notice}>
                            <Icon icon="lucide:languages" width="18" height="18" />
                            {learn.englishOnly}
                        </p>
                    )}
                </div>
            </section>

            <section className="section">
                <div className="innerWrapper" lang={contentLang}>
                    {letters.map((letter) => (
                        <div key={letter} id={`letter-${letter}`} className={styles.glossary__group}>
                            <h2 className={styles.glossary__letter}>{letter}</h2>
                            <dl className={styles.glossary}>
                                {terms.filter(({ term }) => term[0].toUpperCase() === letter).map(({ term, definition, chapter }) => (
                                    <div key={term} id={slugify(term)} className={styles.glossary__item}>
                                        <dt>{term}</dt>
                                        <dd>
                                            <p>{rich(definition)}</p>
                                            {chapter && chapterName[chapter] && (
                                                <Link href={`/${locale}/learn/${chapter}`} className={styles.glossary__link}>
                                                    {chapterName[chapter]}
                                                    <Icon icon="lucide:arrow-right" width="14" height="14" />
                                                </Link>
                                            )}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
