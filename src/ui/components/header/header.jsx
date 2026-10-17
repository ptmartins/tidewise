import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

function Header() {
    return(
        <header className={styles.header}>
            <Navbar />
        </header>  
    )
}

export default Header;