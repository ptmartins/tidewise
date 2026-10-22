'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_DETAILS, localizePath } from '@/i18n/config';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';
import styles from './footer.module.css';

// Secondary, always-visible language switch: where people look when the header doesn't help
function FooterLanguages() {
    const path = usePathname();
    const locale = useLocale();
    const { nav } = useDictionary();

    return (
        <nav aria-label={nav.language} className={styles.footer__languages}>
            {LOCALES.map((code) => (
                <Link
                    key={code}
                    href={localizePath(path, code)}
                    hrefLang={LOCALE_DETAILS[code].htmlLang}
                    lang={LOCALE_DETAILS[code].htmlLang}
                    aria-current={code === locale ? 'true' : undefined}
                    title={LOCALE_DETAILS[code].name}
                >
                    {code.toUpperCase()}
                </Link>
            ))}
        </nav>
    )
}

export default FooterLanguages;
