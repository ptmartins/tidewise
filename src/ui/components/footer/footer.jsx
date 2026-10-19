import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <div className={styles.footer__links}>
                    <Image />
                    <p>A field guide for a living ocean</p>
                </div>
                <p className={styles.footer__copyright}>
                    Developed with &hearts; by{" "}
                    <a href="https://pedromartin.com.pt" target="_blank" rel="noopener noreferrer">Pedro Martins</a>

                    <span> &copy; 2023 Whaletale. </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;