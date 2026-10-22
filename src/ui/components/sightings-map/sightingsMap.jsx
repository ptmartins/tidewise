'use client';

import 'leaflet/dist/leaflet.css';
import styles from './sightingsMap.module.css';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useDictionary, useLocale } from '@/i18n/I18nProvider';
import { LOCALE_DETAILS } from '@/i18n/config';

// Rough bounds of each area, for the zoom buttons
const VIEWS = {
    all: [[32.2, -31.5], [42.3, -6]],
    mainland: [[36.8, -10], [42.2, -6.1]],
    azores: [[36.8, -31.5], [39.8, -24.8]],
    madeira: [[32.3, -17.4], [33.2, -16.2]],
};

const COLORS = { sighting: '#246663', stranding: '#e47757' };

// Text-only DOM for popups: report fields come from the public, so never set innerHTML
const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
};

function SightingsMap({ reports }) {
    const locale = useLocale();
    const { reports: t, explorer } = useDictionary();
    const containerRef = useRef(null);
    const mapRef = useRef(null);
    const [view, setView] = useState('all');

    useEffect(() => {
        let map;
        let cancelled = false;

        // Leaflet touches `window` on import, so load it only in the browser
        import('leaflet').then(({ default: L }) => {
            if (cancelled || !containerRef.current) return;

            map = L.map(containerRef.current, { scrollWheelZoom: false, attributionControl: true });
            mapRef.current = map;
            map.fitBounds(VIEWS.all);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            const dateFormat = new Intl.DateTimeFormat(LOCALE_DETAILS[locale].htmlLang, { dateStyle: 'medium' });

            for (const report of reports) {
                if (!report.position) continue;

                const popup = el('div', null, styles.popup);
                const title = el('a', report.species.commonName, styles.popup__title);
                title.href = `/${locale}/species/${report.species.slug}`;
                popup.append(
                    el('span', t.types[report.type], styles.popup__type),
                    title,
                    el('span', `${report.location} · ${dateFormat.format(new Date(report.date))}`),
                );

                L.circleMarker([report.position.lat, report.position.lng], {
                    radius: 7,
                    color: '#fff',
                    weight: 2,
                    fillColor: COLORS[report.type],
                    fillOpacity: .9,
                })
                    .bindPopup(popup)
                    .addTo(map);
            }
        });

        return () => {
            cancelled = true;
            map?.remove();
            mapRef.current = null;
        };
    }, [reports, locale, t]);

    const zoomTo = (id) => {
        setView(id);
        mapRef.current?.flyToBounds(VIEWS[id], { duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : .8 });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.toolbar}>
                <div className={styles.views} role="group" aria-label={explorer.regionLabel}>
                    {Object.keys(VIEWS).map((id) => (
                        <button key={id} type="button" aria-pressed={view === id} onClick={() => zoomTo(id)}>
                            {id === 'all' ? explorer.allRegions : explorer.regions[id]}
                        </button>
                    ))}
                </div>
                <ul className={styles.legend}>
                    {Object.entries(COLORS).map(([type, color]) => (
                        <li key={type}><span style={{ backgroundColor: color }} aria-hidden="true" />{t.typesPlural[type]}</li>
                    ))}
                </ul>
            </div>
            <div ref={containerRef} className={styles.map} role="region" aria-label={t.mapLabel} />
            <p className={styles.note}>
                <Icon icon="lucide:info" width="16" height="16" />
                {t.mapNote}
            </p>
        </div>
    );
}

export default SightingsMap;
