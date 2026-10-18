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
                <Image />
                <ul className={styles.navLinks}>
                    <li className={ path === '/' ? styles['navLink--active'] : styles.navLink}>
                        <Link href="/">Explore</Link>
                    </li>
                    <li className={ path === '/learn' ? styles['navLink--active'] : styles.navLink}>
                        <Link href="/learn">Learn</Link>
                    </li>
                    <li className={ path === '/sightings' ? styles['navLink--active'] : styles.navLink}>
                        <Link href="/sightings">Field Reports</Link>
                    </li>
                </ul>
                <button className={`btn ${styles.reportButton}`}>Report a sighting</button>
                <span>PM</span>
            </div>
        </nav>
    )
}

export default NavBar;