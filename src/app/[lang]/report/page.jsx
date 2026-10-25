import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ReportForm from "@/ui/components/report-form/reportForm";
import { getAllSpecies } from "@/lib/data/species";
import { LOCALE_DETAILS } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

// Landing for every "Report" button: the form, plus what to note and where
// the record goes. Submissions are handled by ./actions.js.

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
    const collator = new Intl.Collator(LOCALE_DETAILS[locale].htmlLang);
    const species = (await getAllSpecies(locale))
        .map(({ slug, commonName }) => ({ slug, commonName }))
        .sort((a, b) => collator.compare(a.commonName, b.commonName));

    return (
        <>
            {/* Header */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title} <span>{t.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{t.intro}</p>
                </div>
            </section>

            {/* Form + help */}
            <section className={styles.block}>
                <div className={`innerWrapper ${styles.split}`}>
                    <ReportForm species={species} />

                    <aside className={styles.split__aside}>
                        <div className={`${styles.card} ${styles['card--alert']}`}>
                            <span className={styles.card__icon}>
                                <Icon icon="lucide:shield-alert" width="22" height="22" />
                            </span>
                            <h2>{t.strandingTitle}</h2>
                            <p>{t.strandingText}</p>
                            <Link href={`/${locale}/stranding`} className="btn btn--secondary">
                                <Icon icon="lucide:siren" width="24" height="24" />
                                {t.strandingButton}
                            </Link>
                        </div>

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
                            <Link href={`/${locale}/identify`} className={styles.link}>
                                {t.sightingLink}
                                <Icon icon="lucide:arrow-right" width="18" height="18" />
                            </Link>
                        </div>
                    </aside>
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
