import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SeasonCalendar from "@/ui/components/season-calendar/seasonCalendar";
import { REGIONS } from "@/ui/components/species-explorer/options";
import { getAllSpecies } from "@/lib/mock/species";
import { getToday } from "@/lib/time";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

export async function generateMetadata() {
    const { where, meta } = await getDictionary();

    return {
        title: format(where.regionMetaTitle, { region: where.calendarTitle, site: meta.title }),
        description: where.calendarIntro,
    };
}

export default async function Calendar() {
    const locale = await getLocale();
    const { where: t, data } = await getDictionary();
    const { month } = await getToday();
    const species = getAllSpecies(locale);
    const seasonal = species.filter(({ bestMonths }) => bestMonths.length > 0);

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <nav className={styles.breadcrumb} aria-label={t.breadcrumb}>
                        <Link href={`/${locale}/where`}>{t.tag}</Link>
                        <Icon icon="lucide:chevron-right" width="14" height="14" />
                        <span>{t.calendarTitle}</span>
                    </nav>
                    <h1>{t.calendarTitle}</h1>
                    <p className={styles.hero__intro}>{t.calendarIntro}</p>

                    <nav className={styles.jump} aria-label={t.regionsLabel}>
                        <ul>
                            {REGIONS.map((region) => (
                                <li key={region}>
                                    <Link href={`/${locale}/where/${region}#calendar`}>{t.regions[region].title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </section>

            <section className={styles.block}>
                <div className="innerWrapper">
                    <SeasonCalendar
                        species={species}
                        locale={locale}
                        currentMonth={month}
                        caption={t.calendarTitle}
                        groupLabels={data.groupsPlural}
                    />
                    <p className={styles.notice}>
                        <Icon icon="lucide:info" width="18" height="18" />
                        {format(t.calendarNote, { count: species.length - seasonal.length })}
                    </p>
                </div>
            </section>
        </>
    );
}
