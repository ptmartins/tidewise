import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from './learnNav.module.css';

// Route-based sibling of LearnNav: same look, but every item is its own page,
// so the current one is known on the server and there's no scroll spy.
function ChapterNav({ items, current, progress, label }) {
    return (
        <nav className={styles.nav} aria-label={label} style={{ '--progress': progress }}>
            <span className={styles.nav__label}>{label}</span>
            <span className={styles.nav__progress} aria-hidden="true" />

            <ol className={styles.list}>
                {items.map(({ id, title, icon, href }, index) => (
                    <li key={id}>
                        <Link
                            href={href}
                            className={`${styles.link} ${id === current ? styles['link--active'] : ''}`}
                            aria-current={id === current ? 'page' : undefined}
                        >
                            <span className={styles.link__number}>{String(index + 1).padStart(2, '0')}</span>
                            <Icon icon={icon} width="16" height="16" className={styles.link__icon} />
                            <span className={styles.link__title}>{title}</span>
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default ChapterNav;
