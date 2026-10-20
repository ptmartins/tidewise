'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_DETAILS, localizePath } from "@/i18n/config";
import { useDictionary, useLocale } from "@/i18n/I18nProvider";

function NavBar() {

    let path = usePathname();
    const locale = useLocale();
    const { nav } = useDictionary();
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
    const home = `/${locale}`;

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [menuOpen]);

    return (
        <nav className={styles.navbar}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <Link href={home} className={styles.logo} onClick={closeMenu}>
                    <Image src="/logo.png" alt="WhaleTale" width={1408} height={768} priority />
                </Link>
                <div id="primary-menu" className={`${styles.menu} ${menuOpen ? styles['menu--open'] : ''}`}>
                    <ul className={styles.navLinks}>
                        <li className={`${styles.navLink} ${path === home ? styles['navLink--active'] : ''}`}>
                            <Link href={home} onClick={closeMenu}>{nav.explore}</Link>
                        </li>
                        <li className={`${styles.navLink} ${path === `${home}/learn` ? styles['navLink--active'] : ''}`}>
                            <Link href={`${home}/learned`} onClick={closeMenu}>{nav.learn}</Link>
                        </li>
                        <li className={`${styles.navLink} ${path === `${home}/sightings` ? styles['navLink--active'] : ''}`}>
                            <Link href={`${home}/sightingsed`} onClick={closeMenu}>{nav.fieldReports}</Link>
                        </li>
                    </ul>
                    <button className={`btn ${styles.reportButton}`}>{nav.reportSighting}</button>
                    <ul className={styles.languages} aria-label={nav.language}>
                        {LOCALES.map((code) => (
                            <li key={code}>
                                <Link
                                    href={localizePath(path, code)}
                                    hrefLang={LOCALE_DETAILS[code].htmlLang}
                                    lang={LOCALE_DETAILS[code].htmlLang}
                                    title={LOCALE_DETAILS[code].name}
                                    aria-current={code === locale ? 'true' : undefined}
                                    className={code === locale ? styles['language--active'] : ''}
                                    onClick={closeMenu}
                                >
                                    {code.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <span className={styles.avatar}>PM</span>
                <button
                    type="button"
                    className={styles.menuToggle}
                    aria-controls="primary-menu"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Icon icon={menuOpen ? 'lucide:x' : 'lucide:menu'} width="24" height="24" />
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
