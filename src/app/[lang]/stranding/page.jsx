import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { EMERGENCY_NUMBER, STRANDING_REGIONS } from "@/lib/mock/stranding";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

// Emergency page. Deliberately free of sponsors and distractions: the job is
// to get the visitor to call for help, then to do the right things meanwhile.

export async function generateMetadata() {
    const { stranding, meta } = await getDictionary();

    return {
        title: format(stranding.metaTitle, { site: meta.title }),
        description: stranding.intro,
    };
}

export default async function Stranding() {
    const locale = await getLocale();
    const { stranding: t, explorer, common } = await getDictionary();
    const number = { number: EMERGENCY_NUMBER };

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

            {/* Call for help */}
            <section className={styles.block} aria-labelledby="call-title">
                <div className="innerWrapper">
                    <div className={styles.call}>
                        <div>
                            <h2 id="call-title">{format(t.callTitle, number)}</h2>
                            <p>{t.callText}</p>
                        </div>
                        <a href={`tel:${EMERGENCY_NUMBER}`} className="btn btn--secondary">
                            <Icon icon="lucide:phone" width="24" height="24" />
                            {format(t.callButton, number)}
                        </a>
                    </div>
                </div>
            </section>

            {/* Do / don't */}
            <section className={styles.block}>
                <div className={`innerWrapper ${styles.grid}`}>
                    <div className={styles.card}>
                        <h2>{t.doTitle}</h2>
                        <ul className={styles.checklist}>
                            {t.do.map((item) => (
                                <li key={item}><Icon icon="lucide:check" width="20" height="20" />{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles.card} ${styles['card--alert']}`}>
                        <h2>{t.dontTitle}</h2>
                        <ul className={`${styles.checklist} ${styles['checklist--dont']}`}>
                            {t.dont.map((item) => (
                                <li key={item}><Icon icon="lucide:x" width="20" height="20" />{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.card__icon}>
                            <Icon icon="lucide:microscope" width="22" height="22" />
                        </span>
                        <h3>{t.deadTitle}</h3>
                        <p>{t.deadText}</p>
                    </div>
                </div>
            </section>

            {/* Who to call, by region */}
            <section className={styles.block} aria-labelledby="networks-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="networks-title">{t.networksTitle}</h2>
                        <p>{t.networksIntro}</p>
                    </header>
                    <div className={styles.grid}>
                        {STRANDING_REGIONS.map(({ id, networks }) => (
                            <div key={id} className={styles.card}>
                                <h3>{explorer.regions[id]}</h3>
                                {networks.length > 0 ? (
                                    <ul className={styles.networks}>
                                        {networks.map(({ id: networkId, title, href }) => (
                                            <li key={networkId}>
                                                <a href={href} target="_blank" rel="noopener noreferrer">
                                                    {title}
                                                    <Icon icon="lucide:arrow-up-right" width="18" height="18" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{format(t.noNetworks, number)}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className={styles.notice}>
                        <Link href={`/${locale}/links#rescue`} className={styles.link}>
                            {t.networksLink}
                            <Icon icon="lucide:arrow-right" width="18" height="18" />
                        </Link>
                    </p>
                </div>
            </section>

            {/* Follow-up report */}
            <section className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{common.youCanHelp}</span>
                        <h2>{t.ctaTitle}</h2>
                        <p>{t.ctaText}</p>
                    </div>
                    <Link href={`/${locale}/report`} className="btn btn--secondary">
                        <Icon icon="lucide:clipboard-pen" width="24" height="24" />
                        {common.reportStranding}
                        <Icon icon="lucide:chevron-right" width="24" height="24" />
                    </Link>
                </div>
            </section>
        </>
    );
}
