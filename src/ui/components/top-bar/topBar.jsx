'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import styles from "./topBar.module.css";
import { LOCALES, LOCALE_DETAILS, localizePath } from "@/i18n/config";
import { useDictionary, useLocale } from "@/i18n/I18nProvider";
import { format } from "@/i18n/format";
import { getHotline, hotlineLabel } from "@/lib/emergency";

// Secondary row above the main navigation: the stranding hotline and language.
// It slides away once the page scrolls (see Header), so nothing here can be the only way somewhere.
function TopBar({ hidden }) {
    const path = usePathname();
    const locale = useLocale();
    const { nav } = useDictionary();
    const home = `/${locale}`;
    const hotline = getHotline(locale);

    return (
        <div className={`${styles.topBar} ${hidden ? styles['topBar--hidden'] : ''}`} inert={hidden}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <p className={styles.hotline}>
                    <Icon icon="lucide:siren" width="16" height="16" />
                    <Link href={`${home}/stranding`} className={styles.hotline__label}>
                        <span className={styles.hotline__long}>{nav.hotline}</span>
                        <span className={styles.hotline__short}>{nav.stranding}</span>
                    </Link>
                    <a href={`tel:${hotline.tel}`} className={styles.hotline__call}>
                        <Icon icon="lucide:phone" width="13" height="13" />
                        {format(nav.call, { number: hotlineLabel(hotline) })}
                    </a>
                    <Link href={`${home}/stranding`} className={styles.hotline__more}>
                        {nav.whatToDo}
                        <Icon icon="lucide:arrow-right" width="14" height="14" />
                    </Link>
                </p>

                <ul className={styles.languages} aria-label={nav.language}>
                    {LOCALES.map((code) => (
                        <li key={code}>
                            <Link
                                href={localizePath(path, code)}
                                hrefLang={LOCALE_DETAILS[code].htmlLang}
                                lang={LOCALE_DETAILS[code].htmlLang}
                                title={LOCALE_DETAILS[code].name}
                                aria-label={LOCALE_DETAILS[code].name}
                                aria-current={code === locale ? 'true' : undefined}
                            >
                                {code.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TopBar;
