import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

// Plain-language privacy notice for the report form and newsletter.
// TODO: have it reviewed for GDPR compliance and add the data controller's details.

export async function generateMetadata() {
    const { privacy, meta } = await getDictionary();

    return {
        title: format(privacy.metaTitle, { site: meta.title }),
        description: privacy.intro,
    };
}

export default async function Privacy() {
    const locale = await getLocale();
    const { privacy: t } = await getDictionary();

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title}</h1>
                    <p className={styles.hero__intro}>{t.intro}</p>
                </div>
            </section>

            <section className={styles.block}>
                <div className={`innerWrapper ${styles.prose}`}>
                    {t.sections.map(({ title, text }) => (
                        <section key={title}>
                            <h2>{title}</h2>
                            {text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </section>
                    ))}
                    <p>
                        <Link href={`/${locale}/about#contact`} className={styles.link}>{t.contact}</Link>
                    </p>
                </div>
            </section>
        </>
    );
}
