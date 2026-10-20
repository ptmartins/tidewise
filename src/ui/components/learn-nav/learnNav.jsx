'use client'

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './learnNav.module.css';

// A section becomes "current" once its top passes this fraction of the viewport
const ACTIVATION_LINE = 0.3;

function LearnNav({ items, label }) {
    const [active, setActive] = useState(items[0]?.id);
    const navRef = useRef(null);
    const listRef = useRef(null);
    // While a menu click is smooth-scrolling, ignore scroll updates so the
    // highlight doesn't flicker through every section on the way
    const locked = useRef(false);
    const unlockTimer = useRef(null);

    useEffect(() => {
        const sections = items.map(({ id }) => document.getElementById(id)).filter(Boolean);
        if (!sections.length) return;

        let frame = 0;

        const update = () => {
            frame = 0;

            const line = window.innerHeight * ACTIVATION_LINE;
            const first = sections[0].getBoundingClientRect().top;
            const last = sections.at(-1).getBoundingClientRect().bottom;
            const progress = Math.min(Math.max((line - first) / (last - first), 0), 1);
            navRef.current?.style.setProperty('--progress', progress);

            if (locked.current) return;

            let current = sections[0];
            for (const section of sections) {
                if (section.getBoundingClientRect().top > line) break;
                current = section;
            }

            // The last sections may be too short to ever reach the line
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            setActive(atBottom ? sections.at(-1).id : current.id);
        };

        const onScroll = () => {
            if (locked.current) {
                clearTimeout(unlockTimer.current);
                unlockTimer.current = setTimeout(() => { locked.current = false; }, 150);
            }
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(unlockTimer.current);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [items]);

    // On small screens the menu is a horizontal strip: keep the active item in view
    useEffect(() => {
        const list = listRef.current;
        const link = list?.querySelector('[aria-current]');
        if (!link || list.scrollWidth <= list.clientWidth) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        list.scrollTo({
            left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2,
            behavior: reduceMotion ? 'auto' : 'smooth',
        });
    }, [active]);

    const onClick = (event, id) => {
        const target = document.getElementById(id);
        if (!target) return;

        event.preventDefault();
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
        history.replaceState(null, '', `#${id}`);

        setActive(id);
        locked.current = true;
        clearTimeout(unlockTimer.current);
        unlockTimer.current = setTimeout(() => { locked.current = false; }, 1000);
    };

    return (
        <nav ref={navRef} className={styles.nav} aria-label={label}>
            <span className={styles.nav__label}>{label}</span>
            <span className={styles.nav__progress} aria-hidden="true" />

            <ol ref={listRef} className={styles.list}>
                {items.map(({ id, title, icon }, index) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className={`${styles.link} ${id === active ? styles['link--active'] : ''}`}
                            aria-current={id === active ? 'location' : undefined}
                            onClick={(event) => onClick(event, id)}
                        >
                            <span className={styles.link__number}>{String(index + 1).padStart(2, '0')}</span>
                            <Icon icon={icon} width="16" height="16" className={styles.link__icon} />
                            <span className={styles.link__title}>{title}</span>
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default LearnNav;
