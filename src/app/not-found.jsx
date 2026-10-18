import styles from './not-found.module.css';
import { Icon } from '@iconify/react';
import Link from 'next/link';

function NotFound() {
    return(
        <section className="section section--notFound notFound">
            <div className="innerWrapper">
                <div className={styles.notFound__content}>
                    <span className={styles.notFound__error}>Error: 404</span>
                    <h1 className={styles.notFound__title}>This page drifted <br /> <span>off course</span> </h1>
                    <p className={styles.notFound__subtitle}>The tide has carried this page somewhere beyond the fold. Let's get you back to the waters we know.</p>
                    <Link href="/" className="btn"> <Icon icon="lucide:home" /> Return home </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound;