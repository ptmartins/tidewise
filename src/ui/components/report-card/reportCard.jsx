import styles from './reportCard.module.css';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { groupFor } from '../species-explorer/options';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';
import { LOCALE_DETAILS } from '@/i18n/config';
import { format } from '@/i18n/format';

const TYPE_ICONS = { sighting: 'lucide:binoculars', stranding: 'lucide:shield-alert' };

const PLATFORM_ICONS = { boat: 'lucide:sailboat', shore: 'lucide:mountain', aircraft: 'lucide:plane' };

const initials = (name) => name.split(' ').map((part) => part[0]).slice(0, 2).join('');

// Dates are stored as wall-clock time, so format in UTC to render the same on server and client
const formatDate = (locale, date) =>
    new Intl.DateTimeFormat(LOCALE_DETAILS[locale].htmlLang, {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
    }).format(new Date(`${date}Z`));

function ReportCard({ report }) {
    const locale = useLocale();
    const { reports: t, explorer, data } = useDictionary();
    const { species } = report;
    const group = groupFor(species.category);

    return (
        <article className={styles.card} data-type={report.type}>
            <div className={styles.card__thumb} data-group={species.category}>
                {species.thumbnail ? (
                    <Image
                        src={species.thumbnail.src}
                        alt={species.thumbnail.alt}
                        fill
                        sizes="(max-width: 600px) calc(100vw - 2rem), 220px"
                        className={styles.card__image}
                    />
                ) : (
                    <Icon icon={group.icon} className={styles.card__silhouette} aria-hidden="true" />
                )}
                <span className={styles.card__type}>
                    <Icon icon={TYPE_ICONS[report.type]} width="14" height="14" />
                    {t.types[report.type]}
                </span>
            </div>

            <div className={styles.card__body}>
                <header className={styles.card__header}>
                    <time dateTime={report.date} className={styles.card__date}>{formatDate(locale, report.date)}</time>
                    <span className={styles.card__status} data-status={report.status}>
                        <Icon icon={report.status === 'verified' ? 'lucide:badge-check' : 'lucide:clock'} width="14" height="14" />
                        {t.statuses[report.status]}
                    </span>
                </header>

                <h3 className={styles.card__title}>
                    <Link href={`/${locale}/species/${species.slug}`}>{species.commonName}</Link>
                </h3>
                <p className={styles.card__scientific}><em>{species.scientificName}</em> · {data.groups[species.category]}</p>

                <ul className={styles.card__facts}>
                    <li>
                        <Icon icon="lucide:map-pin" width="16" height="16" />
                        {report.location}, {explorer.regions[report.region]}
                    </li>
                    <li>
                        <Icon icon="lucide:users" width="16" height="16" />
                        {format(report.count === 1 ? t.countOne : t.count, { count: report.count })}
                        {report.calves && ` · ${t.withCalves}`}
                    </li>
                    {report.platform && (
                        <li>
                            <Icon icon={PLATFORM_ICONS[report.platform]} width="16" height="16" />
                            {t.platforms[report.platform]}
                        </li>
                    )}
                    {report.condition && (
                        <li className={styles.card__condition} data-condition={report.condition}>
                            <Icon icon={report.condition === 'alive' ? 'lucide:heart-pulse' : 'lucide:circle-off'} width="16" height="16" />
                            {t.conditions[report.condition]}
                        </li>
                    )}
                </ul>

                {report.behaviour?.length > 0 && (
                    <ul className={styles.card__tags} aria-label={t.behaviourLabel}>
                        {report.behaviour.map((value) => <li key={value}>{t.behaviours[value]}</li>)}
                    </ul>
                )}

                <blockquote className={styles.card__notes} lang={locale !== 'en' ? 'en' : undefined}>
                    <p>{report.notes}</p>
                </blockquote>

                <footer className={styles.card__footer}>
                    <span className={styles.card__avatar} aria-hidden="true">{initials(report.observer)}</span>
                    {format(t.reportedBy, { name: report.observer })}
                </footer>
            </div>
        </article>
    );
}

export default ReportCard;
