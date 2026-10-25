// Who to call about a stranded marine mammal, by country. `number` is shown as the
// country publishes it; `tel` is the dialable international form for tel: links.
export const HOTLINES = [
    { country: 'pt', number: '+351 968 849 101', tel: '+351968849101' },
    { country: 'uk', org: 'RSPCA', number: '0300 1234 999', tel: '+443001234999' },
    { country: 'fr', number: '+33 (0)5 46 44 99 10', tel: '+33546449910' },
];

// Each language defaults to the hotline of the country most of its readers are in.
// /stranding always lists every hotline, for visitors abroad.
const LOCALE_COUNTRY = { en: 'uk', fr: 'fr', pt: 'pt' };

// "RSPCA 0300 1234 999", or just the number when there's no organisation to name
export const hotlineLabel = ({ org, number }) => (org ? `${org} ${number}` : number);

export const getHotline = (locale) =>
    HOTLINES.find(({ country }) => country === LOCALE_COUNTRY[locale]) ?? HOTLINES[0];
