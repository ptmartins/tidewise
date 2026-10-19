import styles from './speciesCard.module.css';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { IUCN_LABELS } from '@/lib/mock/species/_shared';
import { groupFor, PRESENCE } from '../species-explorer/options';

function SpeciesCard({ species }) {
    const group = groupFor(species.category);
    const presence = PRESENCE.find(({ value }) => value === species.residency)?.label;
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
                            sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 400px"
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
                <span className={styles.card__group}>{species.category}</span>
                <span className={styles.card__badge} title={IUCN_LABELS[species.iucnStatus]}>
                    {species.iucnStatus}
                </span>
            </div>

            <div className={styles.card__body}>
                <h3 className={styles.card__title}>{species.commonName}</h3>
                <p className={styles.card__scientific}><em>{species.scientificName}</em></p>

                <dl className={styles.card__meta}>
                    <div>
                        <dt>Size</dt>
                        <dd>Up to {species.length} m</dd>
                    </div>
                    <div>
                        <dt>Presence</dt>
                        <dd>{presence}</dd>
                    </div>
                </dl>

                <div className={styles.card__footer}>
                    <span className={styles.card__status}>
                        <span className={styles.card__dot} />
                        {IUCN_LABELS[species.iucnStatus]}
                    </span>
                    <Link href={`/species/${species.slug}`} className={`btn ${styles.card__link}`}>
                        View species <Icon icon="lucide:arrow-right" width="18" height="18" />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default SpeciesCard;
