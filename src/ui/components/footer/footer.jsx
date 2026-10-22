import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";
import { EMERGENCY_NUMBER } from "@/lib/mock/stranding";
import { PARTNERS } from "@/lib/mock/partners";

// Cached with the page, so the year updates on the next build or revalidation
async function getYear() {
    'use cache';
    return new Date().getFullYear();
}

async function Footer() {
    const locale = await getLocale();
    const { footer } = await getDictionary();
    const year = await getYear();
    const home = `/${locale}`;

    const columns = [
        {
            id: 'explore',
            links: [
                { href: `${home}#explorer`, label: footer.species },
                { href: `${home}/sightings`, label: footer.fieldReports },
                { href: `${home}/links`, label: footer.resources },
            ],
        },
        {
            id: 'learn',
            links: [
                { href: `${home}/learn`, label: footer.fieldNotes },
                { href: `${home}/learn#evolution`, label: footer.evolution },
                { href: `${home}/learn#conservation`, label: footer.conservation },
                { href: `${home}/learn#portugal`, label: footer.inPortugal },
            ],
        },
        {
            id: 'act',
            links: [
                { href: `${home}/report`, label: footer.reportSighting },
                { href: `${home}/stranding`, label: footer.stranding },
                { href: `${home}/learn#help`, label: footer.howToHelp },
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
            {/* Emergency band */}
            <div className={styles.emergency}>
                <div className={`innerWrapper ${styles.emergency__inner}`}>
                    <Icon icon="lucide:siren" width="22" height="22" />
                    <p>
                        <strong>{footer.emergencyTitle}</strong>{" "}
                        {format(footer.emergencyText, { number: EMERGENCY_NUMBER })}
                    </p>
                    <Link href={`${home}/stranding`} className={styles.emergency__link}>
                        {footer.emergencyLink}
                        <Icon icon="lucide:arrow-right" width="18" height="18" />
                    </Link>
                </div>
            </div>

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
            {PARTNERS.length > 0 && (
                <div className={`innerWrapper ${styles.partners}`}>
                    <Link href={`${home}/about#partners`} className={styles.partners__label}>{footer.supportedBy}</Link>
                    <ul>
                        {PARTNERS.map(({ id, name, href, logo }) => (
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
                <p>{format(footer.copyright, { year })}</p>
                <p>
                    {footer.developedBy}{" "}
                    <a href="https://pedromartin.com.pt" target="_blank" rel="noopener noreferrer">Pedro Martins</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
