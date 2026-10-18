import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <div className={styles.footerLinks}>
                    <Image />
                    <p>A field guide for a living ocean</p>
                </div>
                <p className={styles.copyright}>&copy; 2023 Tidewise. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;