import styles from './not-found.module.css';
import { Icon } from '@iconify/react';
import Link from 'next/link';

function NotFound() {
    return(
        <section className={`section section--notFound notFound ${styles.notFound}`}>
            <div className={`innerWrapper ${styles.notFound__wrapper}`}>
                <div className={styles.notFound__content}>
                    <span className={styles.notFound__error}>Error: 404</span>
                    <h1 className={styles.notFound__title}>This page drifted <br /> <span>off course</span> </h1>
                    <p className={styles.notFound__subtitle}>The tide has carried this page somewhere beyond the fold. Let's get you back to the waters we know.</p>
                    <Link href="/" className="btn"> <Icon icon="lucide:home" /> Return home </Link>
                </div>

                <svg className={styles.notFound__illustration} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
                    <defs>
                        <clipPath id="notFoundClip">
                            <circle cx="200" cy="160" r="150" />
                        </clipPath>
                    </defs>

                    <g clipPath="url(#notFoundClip)">
                        <circle className={styles.notFound__backdrop} cx="200" cy="160" r="150" />

                        <g className={styles.notFound__tail}>
                            <path d="M186 228 C188 196 190 168 192 150 C170 142 140 126 118 92 C145 102 175 108 200 128 C225 108 255 102 282 92 C260 126 230 142 208 150 C210 168 212 196 214 228 Z" />
                        </g>

                        <path className={`${styles.notFound__wave} ${styles['notFound__wave--back']}`} d="M-100 208 Q-75 196 -50 208 T0 208 T50 208 T100 208 T150 208 T200 208 T250 208 T300 208 T350 208 T400 208 T450 208 T500 208 V320 H-100 Z" />
                        <path className={`${styles.notFound__wave} ${styles['notFound__wave--middle']}`} d="M-100 228 Q-75 216 -50 228 T0 228 T50 228 T100 228 T150 228 T200 228 T250 228 T300 228 T350 228 T400 228 T450 228 T500 228 V320 H-100 Z" />
                        <path className={`${styles.notFound__wave} ${styles['notFound__wave--front']}`} d="M-100 252 Q-75 240 -50 252 T0 252 T50 252 T100 252 T150 252 T200 252 T250 252 T300 252 T350 252 T400 252 T450 252 T500 252 V320 H-100 Z" />
                    </g>

                    <g className={styles.notFound__drops}>
                        <ellipse cx="120" cy="110" rx="3" ry="5" />
                        <ellipse cx="128" cy="130" rx="2" ry="3.5" />
                        <ellipse cx="280" cy="110" rx="3" ry="5" />
                        <ellipse cx="272" cy="132" rx="2" ry="3.5" />
                    </g>

                    <g className={styles.notFound__bubbles}>
                        <circle cx="150" cy="282" r="6" />
                        <circle cx="166" cy="270" r="3.5" />
                        <circle cx="252" cy="288" r="4.5" />
                    </g>
                </svg>
            </div>
        </section>
    )
}

export default NotFound;
