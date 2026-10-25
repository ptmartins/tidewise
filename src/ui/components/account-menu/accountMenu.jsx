'use client'

import styles from './accountMenu.module.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useClerk, useUser } from '@clerk/nextjs';
import { LOCALES, LOCALE_DETAILS, localizePath } from '@/i18n/config';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';

const initialsOf = ({ firstName, lastName, fullName, primaryEmailAddress }) =>
    (firstName && lastName ? `${firstName[0]}${lastName[0]}` : (fullName || primaryEmailAddress?.emailAddress || '?').slice(0, 2)).toUpperCase();

// Guests get a user-icon trigger with sign-in links; signed-in users get their
// initials and the account sections. Both keep the language section.
function AccountMenu({ onOpen }) {
    const path = usePathname();
    const locale = useLocale();
    const { nav } = useDictionary();
    // Until Clerk has loaded, show neither guest nor account sections
    const { isLoaded, user: account } = useUser();
    const { signOut } = useClerk();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const user = account && {
        name: account.fullName || account.primaryEmailAddress?.emailAddress,
        initials: initialsOf(account),
    };
    // After signing in, come back to the page the menu was opened on
    const back = encodeURIComponent(path);

    useEffect(() => {
        if (!open) return;

        const onPointerDown = (event) => !ref.current.contains(event.target) && setOpen(false);
        const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    const toggle = () => {
        if (!open) onOpen?.();
        setOpen(!open);
    };

    const label = user ? `${nav.account}: ${user.name}` : nav.account;

    return (
        <div ref={ref} className={styles.account}>
            <button
                type="button"
                className={`${styles.trigger} ${user ? styles['trigger--user'] : ''}`}
                aria-controls="account-menu"
                aria-expanded={open}
                aria-label={label}
                onClick={toggle}
            >
                {user ? user.initials : <Icon icon="lucide:user-round" width="18" height="18" />}
            </button>

            {open && (
                <div id="account-menu" className={styles.menu}>
                    {isLoaded && !user && (
                        <ul className={styles.section}>
                            <li>
                                <Link href={`/${locale}/sign-in?redirect_url=${back}`} className={styles.option} onClick={() => setOpen(false)}>
                                    <Icon icon="lucide:log-in" width="16" height="16" />
                                    {nav.signIn}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/sign-up?redirect_url=${back}`} className={styles.option} onClick={() => setOpen(false)}>
                                    <Icon icon="lucide:user-round-plus" width="16" height="16" />
                                    {nav.signUp}
                                </Link>
                            </li>
                        </ul>
                    )}

                    {user && (
                        <>
                            <p className={styles.user}>{user.name}</p>
                            <ul className={styles.section}>
                                <li>
                                    <Link href={`/${locale}/sightings`} className={styles.option} onClick={() => setOpen(false)}>
                                        <Icon icon="lucide:binoculars" width="16" height="16" />
                                        {nav.mySightings}
                                    </Link>
                                </li>
                            </ul>
                        </>
                    )}

                    <p className={styles.heading}>{nav.language}</p>
                    <ul className={styles.section}>
                        {LOCALES.map((code) => (
                            <li key={code}>
                                <Link
                                    href={localizePath(path, code)}
                                    hrefLang={LOCALE_DETAILS[code].htmlLang}
                                    lang={LOCALE_DETAILS[code].htmlLang}
                                    aria-current={code === locale ? 'true' : undefined}
                                    className={styles.option}
                                    onClick={() => setOpen(false)}
                                >
                                    <span className={styles.option__code}>{code.toUpperCase()}</span>
                                    {LOCALE_DETAILS[code].name}
                                    {code === locale && <Icon icon="lucide:check" width="16" height="16" className={styles.option__check} />}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {user && (
                        <ul className={styles.section}>
                            <li>
                                <button type="button" className={styles.option} onClick={() => signOut({ redirectUrl: `/${locale}` })}>
                                    <Icon icon="lucide:log-out" width="16" height="16" />
                                    {nav.signOut}
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

export default AccountMenu;
