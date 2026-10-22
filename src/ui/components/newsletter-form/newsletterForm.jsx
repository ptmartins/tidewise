'use client';

import styles from './newsletterForm.module.css';
import Link from 'next/link';
import { startTransition, useActionState } from 'react';
import { Icon } from '@iconify/react';
import { subscribe } from '@/lib/actions/newsletter';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';

// Seasonal updates sign-up, shown in the footer
function NewsletterForm() {
    const locale = useLocale();
    const { newsletter: t } = useDictionary();
    const [state, action, pending] = useActionState(subscribe, { status: 'idle' });

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => action(formData));
    };

    if (state.status === 'success') {
        return (
            <p className={styles.done} role="status">
                <Icon icon="lucide:circle-check" width="20" height="20" />
                {t.success}
            </p>
        );
    }

    const message = state.status === 'error' ? t.errors[state.error] : state.status === 'unavailable' ? t.unavailable : state.status === 'failed' ? t.failed : null;

    return (
        <form className={styles.form} onSubmit={onSubmit} noValidate>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.text}>{t.text}</p>
            <input type="hidden" name="locale" value={locale} />
            <div className={styles.honeypot} aria-hidden="true">
                <label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div className={styles.row}>
                <label className="visually-hidden" htmlFor="newsletter-email">{t.email}</label>
                <input id="newsletter-email" type="email" name="email" placeholder={t.email} autoComplete="email" required />
                <button type="submit" className="btn btn--primary" disabled={pending}>{pending ? t.sending : t.submit}</button>
            </div>
            <label className={styles.consent}>
                <input type="checkbox" name="consent" required />
                <span>{t.consent} <Link href={`/${locale}/privacy`}>{t.privacyLink}</Link></span>
            </label>
            {message && <p className={styles.error} role="alert">{message}</p>}
        </form>
    );
}

export default NewsletterForm;
