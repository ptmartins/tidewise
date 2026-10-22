'use client';

import styles from './reportForm.module.css';
import Link from 'next/link';
import { startTransition, useActionState, useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { submitReport } from '@/app/[lang]/report/actions';
import { BEHAVIOURS, PLATFORMS } from '@/lib/reportOptions';
import { REGIONS } from '../species-explorer/options';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';

// "2026-10-22T14:05" in the visitor's own time zone, for <input type="datetime-local">
const localNow = () => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
};

function Field({ label, hint, error, children, wide }) {
    return (
        <label className={`${styles.field} ${wide ? styles['field--wide'] : ''}`}>
            <span className={styles.field__label}>{label}</span>
            {children}
            {hint && !error && <span className={styles.field__hint}>{hint}</span>}
            {error && <span className={styles.field__error} role="alert">{error}</span>}
        </label>
    );
}

function ReportForm({ species }) {
    const locale = useLocale();
    const { report: { form: t }, reports, explorer } = useDictionary();
    const [state, action, pending] = useActionState(submitReport, { status: 'idle' });
    const [type, setType] = useState('sighting');
    const [condition, setCondition] = useState('');
    const dateRef = useRef(null);
    const [position, setPosition] = useState({ lat: '', lng: '' });
    const [locating, setLocating] = useState('');
    const [formKey, setFormKey] = useState(0);
    // The success state that "Report another" dismissed
    const [dismissed, setDismissed] = useState(null);

    // Prefilled in the browser only: the page is prerendered, so "now" can't be in the markup
    useEffect(() => {
        if (dateRef.current && !dateRef.current.value) dateRef.current.value = localNow();
    }, [formKey]);

    const errors = state.errors ?? {};
    const errorText = (field) => errors[field] && t.errors[errors[field]];

    const locate = () => {
        if (!navigator.geolocation) return setLocating('unsupported');
        setLocating('busy');
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setPosition({ lat: coords.latitude.toFixed(5), lng: coords.longitude.toFixed(5) });
                setLocating('done');
            },
            () => setLocating('denied'),
            { enableHighAccuracy: true, timeout: 15_000 }
        );
    };

    // Submitting by hand (not via the form's `action` prop) stops React from
    // resetting the fields after each attempt, so a validation error keeps what was typed
    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => action(formData));
    };

    const reset = () => {
        setType('sighting');
        setCondition('');
        setPosition({ lat: '', lng: '' });
        setLocating('');
        setFormKey(formKey + 1);
    };

    if (state.status === 'success' && state !== dismissed) {
        return (
            <div className={styles.done} role="status">
                <Icon icon="lucide:circle-check" width="40" height="40" />
                <h2>{t.successTitle}</h2>
                <p>{t.successText}</p>
                <div className={styles.done__actions}>
                    <button type="button" className="btn btn--primary" onClick={() => { setDismissed(state); reset(); }}>
                        {t.another}
                    </button>
                    <Link href={`/${locale}/sightings`} className="btn">{t.seeReports}</Link>
                </div>
            </div>
        );
    }

    return (
        <form key={formKey} onSubmit={onSubmit} className={styles.form} noValidate>
            <input type="hidden" name="locale" value={locale} />
            {/* Honeypot: hidden from people, tempting for bots */}
            <div className={styles.honeypot} aria-hidden="true">
                <label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>

            {/* What */}
            <fieldset className={styles.group}>
                <legend>{t.whatTitle}</legend>

                <div className={styles.toggle} role="radiogroup" aria-label={t.type}>
                    {['sighting', 'stranding'].map((value) => (
                        <label key={value} className={styles.toggle__option}>
                            <input type="radio" name="type" value={value} checked={type === value} onChange={() => setType(value)} />
                            <Icon icon={value === 'sighting' ? 'lucide:binoculars' : 'lucide:shield-alert'} width="18" height="18" />
                            {reports.types[value]}
                        </label>
                    ))}
                </div>

                {type === 'stranding' && (
                    <p className={styles.alert}>
                        <Icon icon="lucide:siren" width="20" height="20" />
                        <span>
                            {t.strandingFirst}{' '}
                            <Link href={`/${locale}/stranding`}>{t.strandingLink}</Link>
                        </span>
                    </p>
                )}

                <div className={styles.grid}>
                    <Field label={t.species} error={errorText('species')} hint={t.speciesHint}>
                        <select name="species" defaultValue="unknown">
                            <option value="unknown">{t.unknownSpecies}</option>
                            {species.map(({ slug, commonName }) => <option key={slug} value={slug}>{commonName}</option>)}
                        </select>
                    </Field>

                    <Field label={t.count} error={errorText('count')}>
                        <input type="number" name="count" min="1" max="10000" step="1" defaultValue="1" inputMode="numeric" />
                    </Field>

                    {type === 'sighting' ? (
                        <>
                            <Field label={t.platform}>
                                <select name="platform" defaultValue="">
                                    <option value="">—</option>
                                    {PLATFORMS.map((value) => <option key={value} value={value}>{reports.platforms[value]}</option>)}
                                </select>
                            </Field>

                            <label className={styles.check}>
                                <input type="checkbox" name="calves" />
                                {t.calves}
                            </label>

                            <fieldset className={`${styles.field} ${styles['field--wide']}`}>
                                <legend className={styles.field__label}>{reports.behaviourLabel}</legend>
                                <div className={styles.chips}>
                                    {BEHAVIOURS.map((value) => (
                                        <label key={value} className={styles.chip}>
                                            <input type="checkbox" name="behaviour" value={value} />
                                            {reports.behaviours[value]}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        </>
                    ) : (
                        <Field label={t.condition}>
                            <select name="condition" value={condition} onChange={(event) => setCondition(event.target.value)}>
                                <option value="">—</option>
                                <option value="alive">{reports.conditions.alive}</option>
                                <option value="dead">{reports.conditions.dead}</option>
                            </select>
                        </Field>
                    )}
                </div>
            </fieldset>

            {/* Where and when */}
            <fieldset className={styles.group}>
                <legend>{t.whereTitle}</legend>
                <div className={styles.grid}>
                    <Field label={t.date} error={errorText('date')}>
                        <input ref={dateRef} type="datetime-local" name="date" required />
                    </Field>

                    <Field label={explorer.regionLabel} error={errorText('region')}>
                        <select name="region" defaultValue="" required>
                            <option value="" disabled>{t.choose}</option>
                            {REGIONS.map((value) => <option key={value} value={value}>{explorer.regions[value]}</option>)}
                        </select>
                    </Field>

                    <Field label={t.location} hint={t.locationHint} error={errorText('location')} wide>
                        <input type="text" name="location" maxLength="200" placeholder={t.locationPlaceholder} required />
                    </Field>

                    <div className={`${styles.field} ${styles['field--wide']}`}>
                        <span className={styles.field__label}>{t.position}</span>
                        <div className={styles.position}>
                            <input type="text" name="lat" inputMode="decimal" placeholder={t.lat} aria-label={t.lat} value={position.lat} onChange={(event) => setPosition({ ...position, lat: event.target.value })} />
                            <input type="text" name="lng" inputMode="decimal" placeholder={t.lng} aria-label={t.lng} value={position.lng} onChange={(event) => setPosition({ ...position, lng: event.target.value })} />
                            <button type="button" className="btn" onClick={locate} disabled={locating === 'busy'}>
                                <Icon icon="lucide:locate-fixed" width="18" height="18" />
                                {locating === 'busy' ? t.locating : t.useLocation}
                            </button>
                        </div>
                        {locating === 'denied' || locating === 'unsupported' ? (
                            <span className={styles.field__error} role="alert">{t.locationDenied}</span>
                        ) : (
                            errorText('position') ? <span className={styles.field__error} role="alert">{errorText('position')}</span> : <span className={styles.field__hint}>{t.positionHint}</span>
                        )}
                    </div>
                </div>
            </fieldset>

            {/* Details */}
            <fieldset className={styles.group}>
                <legend>{t.detailsTitle}</legend>
                <div className={styles.grid}>
                    <Field label={t.notes} hint={t.notesHint} wide>
                        <textarea name="notes" rows="4" maxLength="2000" />
                    </Field>

                    <Field label={t.photos} hint={t.photosHint} error={errorText('photos')} wide>
                        <input type="file" name="photos" accept="image/*" multiple />
                    </Field>
                </div>
            </fieldset>

            {/* About you */}
            <fieldset className={styles.group}>
                <legend>{t.youTitle}</legend>
                <div className={styles.grid}>
                    <Field label={t.name} hint={t.nameHint}>
                        <input type="text" name="name" maxLength="100" autoComplete="name" />
                    </Field>
                    <Field label={t.email} hint={t.emailHint} error={errorText('email')}>
                        <input type="email" name="email" maxLength="200" autoComplete="email" />
                    </Field>

                    <label className={`${styles.check} ${styles['field--wide']}`}>
                        <input type="checkbox" name="consent" required />
                        <span>
                            {t.consent}{' '}
                            <Link href={`/${locale}/privacy`} target="_blank">{t.privacyLink}</Link>
                        </span>
                    </label>
                    {errorText('consent') && <span className={`${styles.field__error} ${styles['field--wide']}`} role="alert">{errorText('consent')}</span>}
                </div>
            </fieldset>

            {state.status === 'error' && <p className={styles.alert} role="alert"><Icon icon="lucide:circle-alert" width="20" height="20" />{t.fixErrors}</p>}
            {state.status === 'unavailable' && <p className={styles.alert} role="alert"><Icon icon="lucide:plug-zap" width="20" height="20" />{t.unavailable}</p>}
            {state.status === 'failed' && <p className={styles.alert} role="alert"><Icon icon="lucide:circle-alert" width="20" height="20" />{t.failed}</p>}

            <button type="submit" className={`btn btn--secondary ${styles.submit}`} disabled={pending}>
                <Icon icon={pending ? 'lucide:loader-circle' : 'lucide:send'} width="20" height="20" className={pending ? styles.spin : undefined} />
                {pending ? t.sending : t.submit}
            </button>
        </form>
    );
}

export default ReportForm;
