'use client'

import { useEffect, useState } from "react";
import TopBar from "../top-bar/topBar";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

function Header() {
    const [condensed, setCondensed] = useState(false);

    // Past the top of the page only the main bar stays; the top bar returns when back at the top
    useEffect(() => {
        const onScroll = () => setCondensed(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Sticky elements and anchor offsets read --header-height, so it follows what's actually visible
    useEffect(() => {
        document.documentElement.toggleAttribute('data-header-condensed', condensed);
    }, [condensed]);

    return(
        <header className={`${styles.header} ${condensed ? styles['header--condensed'] : ''}`}>
            <TopBar hidden={condensed} />
            <Navbar condensed={condensed} />
        </header>
    )
}

export default Header;
