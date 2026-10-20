'use client'

import styles from './languageSwitcher.module.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { LOCALES, LOCALE_DETAILS, localizePath } from '@/i18n/config';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';

function LanguageSwitcher({ onOpen }) {
    const path = usePathname();
    const locale = useLocale();
    const { nav } = useDictionary();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

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

    return (
        <div ref={ref} className={styles.switcher}>
            <button
                type="button"
                className={styles.trigger}
                aria-controls="language-menu"
                aria-expanded={open}
                aria-label={`${nav.language}: ${LOCALE_DETAILS[locale].name}`}
                onClick={toggle}
            >
                <Icon icon="lucide:globe" width="18" height="18" />
                <span>{locale.toUpperCase()}</span>
                <Icon icon="lucide:chevron-down" width="14" height="14" className={styles.chevron} />
            </button>

            {open && (
                <ul id="language-menu" className={styles.menu}>
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
            )}
        </div>
    )
}

export default LanguageSwitcher;
