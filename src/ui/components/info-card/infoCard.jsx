import styles from './infoCard.module.css';
import {Icon} from '@iconify/react';

function InfoCard({number, icon, title, description}) {
    return(
        <div className={styles.card}>
            {number && <div className={styles.card__number}> {number} </div>}
            <div className={styles.card__icon}> 
                <Icon icon={icon} />
            </div>
            <h3 className={styles.card__title}> {title} </h3>
            <p className={styles.card__description}> {description} </p>
        </div>
    )
}

export default InfoCard;