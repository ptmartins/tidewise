import styles from "@/ui/styles/contentPage.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { PARTNERS, PARTNER_TIERS } from "@/lib/mock/partners";
import { getDictionary } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

// TODO: swap for a dedicated contact address or form once there is one
const CONTACT_HREF = 'https://pedromartin.com.pt';

export async function generateMetadata() {
    const { about, meta } = await getDictionary();

    return {
        title: format(about.metaTitle, { site: meta.title }),
        description: about.intro,
    };
}

export default async function About() {
    const { about: t } = await getDictionary();

    const jump = [
        { id: 'mission', label: t.missionNav },
        { id: 'methodology', label: t.methodologyNav },
        { id: 'partners', label: t.partnersNav },
        { id: 'contact', label: t.contactNav },
    ];

    const tiers = PARTNER_TIERS
        .map((tier) => ({ tier, partners: PARTNERS.filter((partner) => partner.tier === tier) }))
        .filter(({ partners }) => partners.length > 0);

    return (
        <>
            {/* Header */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title} <span>{t.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{t.intro}</p>

                    <nav className={styles.jump} aria-label={t.jumpLabel}>
                        <ul>
                            {jump.map(({ id, label }) => (
                                <li key={id}><a href={`#${id}`}>{label}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </section>

            {/* Mission */}
            <section id="mission" className={styles.block} aria-label={t.missionNav}>
                <ul className={`innerWrapper ${styles.grid}`}>
                    {t.mission.map(({ icon, title, text }) => (
                        <li key={title} className={styles.card}>
                            <span className={styles.card__icon}>
                                <Icon icon={icon} width="22" height="22" />
                            </span>
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How we work */}
            <section id="methodology" className={styles.block} aria-labelledby="methodology-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="methodology-title">{t.methodologyTitle}</h2>
                        <p>{t.methodologyIntro}</p>
                    </header>
                    <ul className={styles.checklist}>
                        {t.methodology.map((item) => (
                            <li key={item}><Icon icon="lucide:check" width="20" height="20" />{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Partners & sponsorship policy */}
            <section id="partners" className={styles.block} aria-labelledby="partners-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="partners-title">{t.partnersTitle}</h2>
                        <p>{t.partnersIntro}</p>
                    </header>

                    {tiers.map(({ tier, partners }) => (
                        <div key={tier}>
                            <h3 className={styles.tier}>{t.tiers[tier]}</h3>
                            <ul className={styles.partners}>
                                {partners.map(({ id, name, href, logo }) => (
                                    <li key={id}>
                                        <a href={href} target="_blank" rel="noopener noreferrer">
                                            <Image src={logo.src} alt={name} width={logo.width} height={logo.height} sizes="160px" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className={styles.grid}>
                        {tiers.length === 0 && (
                            <div className={styles.card}>
                                <span className={styles.card__icon}>
                                    <Icon icon="lucide:handshake" width="22" height="22" />
                                </span>
                                <p>{t.partnersEmpty}</p>
                                <a href="#contact" className="btn">
                                    {t.partnersButton}
                                    <Icon icon="lucide:chevron-right" width="24" height="24" />
                                </a>
                            </div>
                        )}
                        <div className={styles.card}>
                            <h3>{t.policyTitle}</h3>
                            <ul className={styles.checklist}>
                                {t.policy.map((item) => (
                                    <li key={item}><Icon icon="lucide:shield-check" width="20" height="20" />{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className={`section ${styles.cta}`}>
                <div className={`innerWrapper ${styles.cta__inner}`}>
                    <div>
                        <span className={styles.tag}>{t.contactNav}</span>
                        <h2>{t.contactTitle}</h2>
                        <p>{t.contactText}</p>
                    </div>
                    <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                        <Icon icon="lucide:mail" width="24" height="24" />
                        {t.contactButton}
                        <Icon icon="lucide:chevron-right" width="24" height="24" />
                    </a>
                </div>
            </section>
        </>
    );
}
