'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';

function NavBar() {

    let path = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [menuOpen]);

    return (
        <nav className={styles.navbar}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image src="/logo.png" alt="WhaleTale" width={1408} height={768} priority />
                </Link>
                <div id="primary-menu" className={`${styles.menu} ${menuOpen ? styles['menu--open'] : ''}`}>
                    <ul className={styles.navLinks}>
                        <li className={`${styles.navLink} ${path === '/' ? styles['navLink--active'] : ''}`}>
                            <Link href="/" onClick={closeMenu}>Explore</Link>
                        </li>
                        <li className={`${styles.navLink} ${path === '/learn' ? styles['navLink--active'] : ''}`}>
                            <Link href="/learned" onClick={closeMenu}>Learn</Link>
                        </li>
                        <li className={`${styles.navLink} ${path === '/sightings' ? styles['navLink--active'] : ''}`}>
                            <Link href="/sightingsed" onClick={closeMenu}>Field reports</Link>
                        </li>
                    </ul>
                    <button className={`btn ${styles.reportButton}`}>Report a sighting</button>
                </div>
                <span className={styles.avatar}>PM</span>
                <button
                    type="button"
                    className={styles.menuToggle}
                    aria-controls="primary-menu"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Icon icon={menuOpen ? 'lucide:x' : 'lucide:menu'} width="24" height="24" />
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
