import styles from "./page.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { LINK_CATEGORIES } from "@/lib/mock/links";
import { getDictionary } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

export async function generateMetadata() {
    const { links, meta } = await getDictionary();

    return {
        title: format(links.metaTitle, { site: meta.title }),
        description: links.intro,
    };
}

export default async function Links() {
    const { links, common } = await getDictionary();
    const total = LINK_CATEGORIES.reduce((sum, { links }) => sum + links.length, 0);

    return (
        <>
            {/* Header */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{links.tag}</span>
                    <h1>{links.title} <span>{links.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{links.intro}</p>

                    <nav className={styles.jump} aria-label={links.jumpLabel}>
                        <ul>
                            {LINK_CATEGORIES.map(({ id, icon }) => (
                                <li key={id}>
                                    <a href={`#${id}`}>
                                        <Icon icon={icon} width="16" height="16" />
                                        {links.categories[id].title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <p className={styles.notice}>
                        <Icon icon="lucide:info" width="18" height="18" />
                        {format(links.notice, { count: total })}
                    </p>
                </div>
            </section>

            {/* Categories */}
            {LINK_CATEGORIES.map(({ id, icon, highlight, links: items }) => (
                <section
                    key={id}
                    id={id}
                    className={`${styles.category} ${highlight ? styles['category--highlight'] : ''}`}
                    aria-labelledby={`${id}-title`}
                >
                    <div className={`innerWrapper ${styles.category__inner}`}>
                        <header className={styles.category__header}>
                            <span className={styles.category__icon}>
                                <Icon icon={icon} width="24" height="24" />
                            </span>
                            <div>
                                <h2 id={`${id}-title`}>{links.categories[id].title}</h2>
                                <p>{links.categories[id].description}</p>
                            </div>
                        </header>

                        <ul className={styles.list}>
                            {items.map(({ id: linkId, title, href }) => (
                                <li key={linkId}>
                                    <Link href={href} className={styles.item} target="_blank" rel="noopener noreferrer">
                                        <span className={styles.item__title}>{title}</span>
                                        <Icon icon="lucide:arrow-up-right" width="20" height="20" className={styles.item__arrow} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            ))}

            {/* Suggest a resource */}
            <section className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h2>{links.ctaTitle}</h2>
                        <p>{links.ctaText}</p>
                    </div>
                    <button className="btn btn--secondary">
                        <Icon icon="lucide:link" width="24" height="24" />
                        {links.ctaButton}
                        <Icon icon="lucide:chevron-right" width="24" height="24" />
                    </button>
                </div>
            </section>
        </>
    );
}
