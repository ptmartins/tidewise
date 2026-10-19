'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';

function NavBar() {

    let path = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.png" alt="Tidewise" width={1408} height={768} priority />
                </Link>
                <ul className={styles.navLinks}>
                    <li className={`${styles.navLink} ${path === '/' ? styles['navLink--active'] : ''}`}>
                        <Link href="/">Explore</Link>
                    </li>
                    <li className={`${styles.navLink} ${path === '/learn' ? styles['navLink--active'] : ''}`}>
                        <Link href="/learn">Learn</Link>
                    </li>
                    <li className={`${styles.navLink} ${path === '/sightings' ? styles['navLink--active'] : ''}`}>
                        <Link href="/sightings">Field reports</Link>
                    </li>
                </ul>
                <button className={`btn ${styles.reportButton}`}>Report a sighting</button>
                <span>PM</span>
            </div>
        </nav>
    )
}

export default NavBar;