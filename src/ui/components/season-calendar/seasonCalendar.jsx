import styles from './seasonCalendar.module.css';
import Link from 'next/link';
import { MONTHS, monthNames } from '@/lib/time';

// Species × month grid of the best months to see each species.
// Server component: everything is known at build time.
function SeasonCalendar({ species, locale, currentMonth, caption, groupLabels }) {
    const months = monthNames(locale);
    const rows = species.filter(({ bestMonths }) => bestMonths.length > 0);

    // Keep species of the same group together, in the order they arrive
    const groups = [...new Set(rows.map(({ category }) => category))];

    return (
        <div className={styles.wrapper}>
            <table className={styles.calendar}>
                <caption className="visually-hidden">{caption}</caption>
                <thead>
                    <tr>
                        <td />
                        {months.map(({ month, short, name }) => (
                            <th key={month} scope="col" title={name} className={month === currentMonth ? styles.current : undefined}>
                                {short}
                            </th>
                        ))}
                    </tr>
                </thead>
                {groups.map((group) => (
                    <tbody key={group}>
                        <tr>
                            <th scope="rowgroup" colSpan={MONTHS.length + 1} className={styles.group}>{groupLabels[group] ?? group}</th>
                        </tr>
                        {rows.filter(({ category }) => category === group).map(({ slug, commonName, bestMonths }) => (
                            <tr key={slug}>
                                <th scope="row" className={styles.species}>
                                    <Link href={`/${locale}/species/${slug}`}>{commonName}</Link>
                                </th>
                                {months.map(({ month, name }) => {
                                    const active = bestMonths.includes(month);
                                    return (
                                        <td
                                            key={month}
                                            className={`${active ? styles.active : ''} ${month === currentMonth ? styles.current : ''}`}
                                            title={`${commonName} · ${name}`}
                                        >
                                            <span className="visually-hidden">{active ? '●' : '–'}</span>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default SeasonCalendar;
