import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";
import { getHotline, hotlineLabel } from "@/lib/emergency";
import { getPartners } from "@/lib/data/partners";
import { getToday } from "@/lib/time";

async function Footer() {
    const locale = await getLocale();
    const { footer } = await getDictionary();
    const { year } = await getToday();
    const partners = await getPartners('footer');
    const home = `/${locale}`;

    const columns = [
        {
            id: 'explore',
            links: [
                { href: `${home}/species`, label: footer.species },
                { href: `${home}/identify`, label: footer.identify },
                { href: `${home}/where`, label: footer.where },
                { href: `${home}/sightings`, label: footer.fieldReports },
                { href: `${home}/links`, label: footer.resources },
            ],
        },
        {
            id: 'learn',
            links: [
                { href: `${home}/learn`, label: footer.fieldNotes },
                { href: `${home}/learn/evolution`, label: footer.evolution },
                { href: `${home}/learn/conservation`, label: footer.conservation },
                { href: `${home}/learn/portugal`, label: footer.inPortugal },
            ],
        },
        {
            id: 'act',
            links: [
                { href: `${home}/report`, label: footer.reportSighting },
                { href: `${home}/stranding`, label: footer.stranding },
                { href: `${home}/learn/help`, label: footer.howToHelp },
            ],
        },
        {
            id: 'about',
            links: [
                { href: `${home}/about`, label: footer.aboutUs },
                { href: `${home}/about#methodology`, label: footer.methodology },
                { href: `${home}/about#partners`, label: footer.partners },
                { href: `${home}/about#contact`, label: footer.contact },
            ],
        },
    ];

    return(
        <footer className={styles.footer}>
            <div className={`innerWrapper ${styles.main}`}>
                <div className={styles.brand}>
                    <Image src="/logo.png" alt="WhaleTale" width={1935} height={812} sizes="115px" className={styles.footer__logo} />
                    <p>{footer.tagline}</p>
                </div>

                <nav className={styles.columns}>
                    {columns.map(({ id, links }) => (
                        <div key={id} className={styles.column}>
                            <h2 className={styles.column__title}>{footer.columns[id]}</h2>
                            <ul>
                                {links.map(({ href, label }) => (
                                    <li key={href}><Link href={href}>{label}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Partner strip: hidden until there's someone to thank */}
            {partners.length > 0 && (
                <div className={`innerWrapper ${styles.partners}`}>
                    <Link href={`${home}/about#partners`} className={styles.partners__label}>{footer.supportedBy}</Link>
                    <ul>
                        {partners.map(({ id, name, href, logo }) => (
                            <li key={id}>
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    <Image src={logo.src} alt={name} width={logo.width} height={logo.height} sizes="120px" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className={`innerWrapper ${styles.bottom}`}>
                <p>
                    {format(footer.copyright, { year })}
                    <Link href={`${home}/privacy`} className={styles.bottom__link}>{footer.privacy}</Link>
                </p>
                <p>
                    {footer.developedBy}{" "}
                    <a href="https://pedromartin.com.pt" target="_blank" rel="noopener noreferrer">Pedro Martins</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
