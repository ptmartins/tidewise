import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <Image />
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/">Explore</Link>
                    </li>
                    <li>
                        <Link href="/species">Learn</Link>
                    </li>
                    <li>
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