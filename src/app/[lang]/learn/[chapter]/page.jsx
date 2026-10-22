import styles from "../page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import { Block, rich, readingMinutes } from "../blocks";
import ChapterNav from "@/ui/components/learn-nav/chapterNav";
import ReportActions from "@/ui/components/report-actions/reportActions";
import { getLearnContent } from "@/lib/content/learn";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

export function generateStaticParams() {
    return getLearnContent('en').sections.map(({ id }) => ({ chapter: id }));
}

const findChapter = async (params) => {
    const { chapter } = await params;
    const locale = await getLocale();
    const content = getLearnContent(locale);
    const index = content.sections.findIndex(({ id }) => id === chapter);
    return { locale, content, index, section: content.sections[index] };
};

const plain = (text) => text.replace(/\*/g, '');

export async function generateMetadata({ params }) {
    const { section } = await findChapter(params);
    if (!section) return {};

    const { learn, meta } = await getDictionary();

    return {
        title: format(learn.chapterMetaTitle, { chapter: plain(section.title), site: meta.title }),
        description: plain(section.lede),
    };
}

export default async function Chapter({ params }) {
    const { locale, content, index, section } = await findChapter(params);
    if (!section) notFound();

    const { learn, common } = await getDictionary();
    const { sections, locale: contentLocale } = content;
    const contentLang = contentLocale !== locale ? contentLocale : undefined;
    const previous = sections[index - 1];
    const next = sections[index + 1];
    const base = `/${locale}/learn`;

    return (
        <>
            <div className={`innerWrapper ${styles.layout}`}>
                <article className={styles.article}>
                    <section className={styles.chapter} aria-labelledby="chapter-title">
                        <nav className={styles.breadcrumb} aria-label={learn.breadcrumb}>
                            <Link href={base}>{learn.tag}</Link>
                            <Icon icon="lucide:chevron-right" width="14" height="14" />
                            <span>{format(learn.chapterOf, { number: index + 1, total: sections.length })}</span>
                        </nav>

                        <header className={styles.chapter__header}>
                            <span className={styles.chapter__icon}>
                                <Icon icon={section.icon} width="24" height="24" />
                            </span>
                            <span className={styles.chapter__number}>{String(index + 1).padStart(2, '0')}</span>
                            <span className={styles.chapter__number}>·</span>
                            <span className={styles.chapter__number}>{format(learn.readingTime, { minutes: readingMinutes(section) })}</span>
                        </header>

                        <div lang={contentLang}>
                            <h1 id="chapter-title" className={styles.chapter__title}>{rich(section.title)}</h1>
                            <p className={styles.chapter__lede}>{rich(section.lede)}</p>

                            <div className={styles.prose}>
                                {section.blocks.map((block, i) => <Block key={i} block={block} />)}
                            </div>
                        </div>

                        {contentLang && (
                            <p className={styles.notice}>
                                <Icon icon="lucide:languages" width="18" height="18" />
                                {learn.englishOnly}
                            </p>
                        )}

                        <p className={styles.notice}>
                            <Icon icon="lucide:library" width="18" height="18" />
                            <Link href={`${base}#sources`}>{learn.sourcesLink}</Link>
                        </p>
                    </section>

                    {/* Previous / next */}
                    <nav className={styles.pager} aria-label={learn.pagerLabel}>
                        {previous ? (
                            <Link href={`${base}/${previous.id}`} className={styles.pager__link} rel="prev">
                                <span className={styles.pager__label}><Icon icon="lucide:arrow-left" width="16" height="16" />{learn.previous}</span>
                                <span className={styles.pager__title} lang={contentLang}>{previous.nav}</span>
                            </Link>
                        ) : <span />}
                        {next ? (
                            <Link href={`${base}/${next.id}`} className={`${styles.pager__link} ${styles['pager__link--next']}`} rel="next">
                                <span className={styles.pager__label}>{learn.next}<Icon icon="lucide:arrow-right" width="16" height="16" /></span>
                                <span className={styles.pager__title} lang={contentLang}>{next.nav}</span>
                            </Link>
                        ) : (
                            <Link href={`${base}/glossary`} className={`${styles.pager__link} ${styles['pager__link--next']}`}>
                                <span className={styles.pager__label}>{learn.next}<Icon icon="lucide:arrow-right" width="16" height="16" /></span>
                                <span className={styles.pager__title}>{learn.glossaryTitle}</span>
                            </Link>
                        )}
                    </nav>
                </article>

                <aside className={styles.aside}>
                    <ChapterNav
                        label={learn.navChapters}
                        current={section.id}
                        progress={(index + 1) / sections.length}
                        items={sections.map(({ id, nav, icon }) => ({ id, title: nav, icon, href: `${base}/${id}` }))}
                    />
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
