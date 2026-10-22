'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';
import { useDictionary, useLocale } from "@/i18n/I18nProvider";
import AccountMenu from "../account-menu/accountMenu";

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
                    <Image src="/logo.png" alt="WhaleTale" width={1935} height={812} sizes="191px" priority />
                    <div className={styles.logo__text}>
                        <h4><span>W</span>hale<span>T</span>ale</h4>
                        <h6>Science Communication</h6>
                    </div>
                </Link>
                <div id="primary-menu" className={`${styles.menu} ${menuOpen ? styles['menu--open'] : ''}`}>
                    <ul className={styles.navLinks}>
                        <li className={`${styles.navLink} ${path === home ? styles['navLink--active'] : ''}`}>
                            <Link href={home} onClick={closeMenu}>{nav.explore}</Link>
                        </li>
                        <li className={`${styles.navLink} ${path === `${home}/learn` ? styles['navLink--active'] : ''}`}>
                            <Link href={`${home}/learn`} onClick={closeMenu}>{nav.learn}</Link>
                        </li>
                        <li className={`${styles.navLink} ${path === `${home}/sightings` ? styles['navLink--active'] : ''}`}>
                            <Link href={`${home}/sightings`} onClick={closeMenu}>{nav.fieldReports}</Link>
                        </li>
                        <li className={`${styles.navLink} ${path === `${home}/links` ? styles['navLink--active'] : ''}`}>
                            <Link href={`${home}/links`} onClick={closeMenu}>{nav.links}</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.actions}>
                    {/* Emergency shortcut: stays visible at every width, one tap from any page */}
                    <Link
                        href={`${home}/stranding`}
                        className={`${styles.stranding} ${path === `${home}/stranding` ? styles['stranding--active'] : ''}`}
                        aria-label={nav.strandingLabel}
                        title={nav.strandingLabel}
                        onClick={closeMenu}
                    >
                        <Icon icon="lucide:siren" width="20" height="20" />
                        <span>{nav.stranding}</span>
                    </Link>
                    <Link href={`${home}/report`} className={`btn ${styles.reportButton}`} onClick={closeMenu}>{nav.reportShort}</Link>
                    {/* No auth yet, so everyone is a guest. Pass `user` here once login exists. */}
                    <AccountMenu onOpen={closeMenu} />
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
            </div>
            <Link href={`${home}/report`} className={styles.reportFab} aria-label={nav.reportSighting} onClick={closeMenu}>
                <Icon icon="lucide:plus" width="26" height="26" />
            </Link>
        </nav>
    )
}

export default NavBar;
