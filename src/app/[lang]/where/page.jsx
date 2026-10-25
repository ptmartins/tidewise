import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { REGIONS } from "@/ui/components/species-explorer/options";
import { getRegionSpecies } from "@/lib/where";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

const REGION_ICONS = { mainland: 'lucide:map', azores: 'lucide:mountain', madeira: 'lucide:tree-palm' };

export async function generateMetadata() {
    const { where, meta } = await getDictionary();

    return {
        title: format(where.metaTitle, { site: meta.title }),
        description: where.intro,
    };
}

export default async function Where() {
    const locale = await getLocale();
    const { where: t } = await getDictionary();
    const base = `/${locale}/where`;
    const counts = Object.fromEntries(await Promise.all(REGIONS.map(async (region) => [region, (await getRegionSpecies(region, locale)).length])));

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title} <span>{t.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{t.intro}</p>
                </div>
            </section>

            {/* Regions */}
            <section className={styles.block} aria-label={t.regionsLabel}>
                <ul className={`innerWrapper ${styles.grid}`}>
                    {REGIONS.map((region) => (
                        <li key={region} className={styles.card}>
                            <span className={styles.card__icon}>
                                <Icon icon={REGION_ICONS[region]} width="22" height="22" />
                            </span>
                            <h2>{t.regions[region].title}</h2>
                            <p>{t.regions[region].teaser}</p>
                            <Link href={`${base}/${region}`} className={styles.link}>
                                {format(t.regionLink, { count: counts[region] })}
                                <Icon icon="lucide:arrow-right" width="18" height="18" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Calendar teaser */}
            <section className={styles.block}>
                <div className="innerWrapper">
                    <Link href={`${base}/calendar`} className={`${styles.card} ${styles.cardLink}`}>
                        <span className={styles.card__icon}>
                            <Icon icon="lucide:calendar-days" width="22" height="22" />
                        </span>
                        <h2>{t.calendarTitle}</h2>
                        <p>{t.calendarIntro}</p>
                    </Link>
                </div>
            </section>

            {/* Responsible watching */}
            <section id="watching" className={styles.block} aria-labelledby="watching-title">
                <div className="innerWrapper">
                    <header className={styles.block__header}>
                        <h2 id="watching-title">{t.watchingTitle}</h2>
                        <p>{t.watchingIntro}</p>
                    </header>
                    <ul className={styles.checklist}>
                        {t.watching.map((item) => (
                            <li key={item}><Icon icon="lucide:check" width="20" height="20" />{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
