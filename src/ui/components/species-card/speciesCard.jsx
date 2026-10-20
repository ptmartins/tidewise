import styles from './speciesCard.module.css';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { groupFor } from '../species-explorer/options';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';

function SpeciesCard({ species }) {
    const locale = useLocale();
    const { data } = useDictionary();
    const group = groupFor(species.category);
    const { thumbnail } = species;
    const credit = thumbnail && [thumbnail.credit, thumbnail.license].filter(Boolean).join(' · ');

    return(
        <article className={styles.card} data-status={species.iucnStatus}>
            {/* Photo thumbnail (falls back to a group silhouette) — the detailed illustration lives on the species page */}
            <div className={styles.card__thumb} data-group={species.category}>
                {thumbnail ? (
                    <>
                        <Image
                            src={thumbnail.src}
                            alt={thumbnail.alt}
                            fill
                            sizes="(max-width: 600px) calc(100vw - 2rem), (max-width: 1000px) calc(50vw - 2rem), 373px"
                            className={styles.card__image}
                        />
                        {thumbnail.sourceUrl ? (
                            <a href={thumbnail.sourceUrl} className={styles.card__credit} target="_blank" rel="noopener noreferrer">
                                {credit}
                            </a>
                        ) : (
                            <span className={styles.card__credit}>{credit}</span>
                        )}
                    </>
                ) : (
                    <Icon icon={group.icon} className={styles.card__silhouette} aria-hidden="true" />
                )}
                <span className={styles.card__group}>{data.groups[species.category]}</span>
                <span className={styles.card__badge} title={data.iucn[species.iucnStatus]}>
                    {species.iucnStatus}
                </span>
            </div>

            <div className={styles.card__body}>
                <h3 className={styles.card__title}>
                    <Link href={`/${locale}/species/${species.slug}`} className={styles.card__link}>
                        {species.commonName}
                    </Link>
                </h3>
                <p className={styles.card__scientific}><em>{species.scientificName}</em></p>
            </div>
        </article>
    )
}

export default SpeciesCard;
