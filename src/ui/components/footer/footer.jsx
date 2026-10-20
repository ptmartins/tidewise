import styles from "./footer.module.css";
import Image from "next/image";
import { getDictionary } from "@/i18n/getDictionary";

async function Footer() {
    const { footer } = await getDictionary();

    return(
        <footer className={styles.footer}>
            <div className={`innerWrapper ${styles.innerWrapper}`}>
                <div className={styles.footer__links}>
                    <Image src="/logo.png" alt="WhaleTale" width={1408} height={768} className={styles.footer__logo} />
                    <p>{footer.tagline}</p>
                </div>
                <p className={styles.footer__copyright}>
                    {footer.developedBy}{" "}
                    <a href="https://pedromartin.com.pt" target="_blank" rel="noopener noreferrer">Pedro Martins</a>

                    <span> &copy; 2023 Whaletale. </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
