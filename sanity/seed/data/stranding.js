// Who to call when you find a stranded marine mammal, by region.
// Network titles aren't translated — they're the organisation's own name.
// TODO: confirm each network's direct phone line before publishing; until then
// visitors are pointed to 112, which alerts the authorities and the networks.

export const EMERGENCY_NUMBER = '112';

export const STRANDING_REGIONS = [
    {
        id: 'mainland',
        networks: [
            { id: 'spvs', title: 'Strandings Network in the North of Portugal (SPVS)', href: 'http://www.facebook.com/arrojamentos' },
            { id: 'raalg', title: 'RAAlg - Algarve Stranding Network', href: 'https://www.raalg.pt/en' },
            { id: 'porto-abrigo', title: 'Porto d’Abrigo (Zoomarine)', href: 'https://www.zoomarine.pt/en/togetherweprotect/rehabilitation-center/' },
        ],
    },
    { id: 'azores', networks: [] },
    { id: 'madeira', networks: [] },
];
