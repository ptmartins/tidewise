import styles from './accordion.module.css';
import { Icon } from '@iconify/react';

function Accordion({ number, icon, title, teaser, defaultOpen = false, children }) {
    return(
        <details className={styles.accordion} open={defaultOpen}>
            <summary className={styles.accordion__summary}>
                {number && <span className={styles.accordion__number}>{number}</span>}
                {icon && (
                    <span className={styles.accordion__icon}>
                        <Icon icon={icon} width="22" height="22" />
                    </span>
                )}
                <span className={styles.accordion__heading}>
                    <span className={styles.accordion__title}>{title}</span>
                    {teaser && <span className={styles.accordion__teaser}>{teaser}</span>}
                </span>
                <span className={styles.accordion__toggle} aria-hidden="true">
                    <Icon icon="lucide:plus" width="18" height="18" />
                </span>
            </summary>
            <div className={styles.accordion__content}>
                {children}
            </div>
        </details>
    )
}

export default Accordion;
