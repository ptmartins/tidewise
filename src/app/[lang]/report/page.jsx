import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

// Landing for every "Report" button. The form itself comes later (Sanity
// `report` document); until then this explains what to note and where it goes.

export async function generateMetadata() {
    const { report, meta } = await getDictionary();

    return {
        title: format(report.metaTitle, { site: meta.title }),
        description: report.intro,
    };
}

export default async function Report() {
    const locale = await getLocale();
    const { report: t } = await getDictionary();

    return (
        <>
            {/* Header */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title} <span>{t.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{t.intro}</p>
                    <p className={styles.notice}>
                        <Icon icon="lucide:info" width="18" height="18" />
                        {t.notice}
                    </p>
                </div>
            </section>

            {/* Sighting or stranding */}
            <section className={styles.block}>
                <div className={`innerWrapper ${styles.grid}`}>
                    <div className={styles.card}>
                        <span className={styles.card__icon}>
                            <Icon icon="lucide:binoculars" width="22" height="22" />
                        </span>
                        <h2>{t.sightingTitle}</h2>
                        <p>{t.sightingText}</p>
                        <ul className={styles.checklist}>
                            {t.sightingChecklist.map((item) => (
                                <li key={item}><Icon icon="lucide:check" width="20" height="20" />{item}</li>
                            ))}
                        </ul>
                        <Link href={`/${locale}#explorer`} className={styles.link}>
                            {t.sightingLink}
                            <Icon icon="lucide:arrow-right" width="18" height="18" />
                        </Link>
                    </div>
                    <div className={`${styles.card} ${styles['card--alert']}`}>
                        <span className={styles.card__icon}>
                            <Icon icon="lucide:shield-alert" width="22" height="22" />
                        </span>
                        <h2>{t.strandingTitle}</h2>
                        <p>{t.strandingText}</p>
                        <Link href={`/${locale}/stranding`} className="btn btn--secondary">
                            <Icon icon="lucide:siren" width="24" height="24" />
                            {t.strandingButton}
                            <Icon icon="lucide:chevron-right" width="24" height="24" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Closing the loop: what happens next */}
            <section className={styles.block} aria-labelledby="loop-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="loop-title">{t.loopTitle}</h2>
                    </header>
                    <ol className={styles.steps}>
                        {t.loop.map(({ title, text }) => (
                            <li key={title}>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
}
