'use client';

import styles from './cookiePolicy.module.css';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';
import { format } from '@/i18n/format';

// Only strictly necessary cookies are set, so the ePrivacy rules need a clear notice but no consent banner.
// If analytics or any other optional cookie is ever added, it must wait for opt-in consent.
// TODO: re-check the cookie list in DevTools on the live domain whenever Clerk or the hosting changes.

const HASH = '#cookies';

export default function CookiePolicy({ className }) {
    const locale = useLocale();
    const { cookies: t } = useDictionary();
    const dialogRef = useRef(null);

    const open = () => dialogRef.current.showModal();
    const close = () => dialogRef.current.close();

    // Any link to #cookies (e.g. from the privacy notice) opens the policy
    useEffect(() => {
        const openFromHash = () => {
            if (window.location.hash === HASH && !dialogRef.current.open) open();
        };
        openFromHash();
        window.addEventListener('hashchange', openFromHash);
        return () => window.removeEventListener('hashchange', openFromHash);
    }, []);

    // Drop the hash on close so the same link works again
    const handleClose = () => {
        if (window.location.hash === HASH) {
            history.replaceState(history.state, '', window.location.pathname + window.location.search);
        }
    };

    return (
        <>
            <button type="button" className={className} onClick={open} aria-haspopup="dialog">
                {t.open}
            </button>

            <dialog
                ref={dialogRef}
                className={styles.dialog}
                aria-labelledby="cookie-policy-title"
                onClose={handleClose}
                onClick={(event) => event.target === dialogRef.current && close()}
            >
                <div className={styles.dialog__inner}>
                    <header className={styles.dialog__header}>
                        <h2 id="cookie-policy-title">{t.title}</h2>
                        <button type="button" className={styles.dialog__close} onClick={close} aria-label={t.close}>
                            <Icon icon="lucide:x" width="20" height="20" />
                        </button>
                    </header>

                    <div className={styles.dialog__body}>
                        <p className={styles.summary}>
                            <Icon icon="lucide:shield-check" width="20" height="20" aria-hidden="true" />
                            {t.summary}
                        </p>

                        <p>{t.intro}</p>

                        <section>
                            <h3>{t.essentialTitle}</h3>
                            <p>{t.essentialText}</p>
                            <details className={styles.details}>
                                <summary>
                                    {format(t.showCookies, { count: t.list.length })}
                                    <Icon icon="lucide:chevron-down" width="16" height="16" aria-hidden="true" />
                                </summary>
                                <ul className={styles.list}>
                                    {t.list.map(({ name, provider, purpose, duration }) => (
                                        <li key={name} className={styles.cookie}>
                                            <div className={styles.cookie__header}>
                                                <code className={styles.cookie__name}>{name}</code>
                                                <span>{duration}</span>
                                            </div>
                                            <p>{purpose}</p>
                                            <p className={styles.cookie__provider}>{provider}</p>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </section>

                        {t.sections.map(({ title, text }) => (
                            <section key={title}>
                                <h3>{title}</h3>
                                {text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                            </section>
                        ))}

                        <p className={styles.meta}>
                            {t.updated}
                            {' · '}
                            <Link href={`/${locale}/privacy`} className={styles.link} onClick={close}>{t.privacyLink}</Link>
                        </p>
                    </div>

                    <footer className={styles.dialog__footer}>
                        <button type="button" className="btn btn--primary" onClick={close}>
                            {t.done}
                        </button>
                    </footer>
                </div>
            </dialog>
        </>
    );
}
