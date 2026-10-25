// Theme for Clerk's sign-in / sign-up screens, so they read like the rest of the site.
// `variables` must be literal colours (Clerk derives hover and focus shades from them),
// so they mirror the tokens in globals.css; `elements` are plain CSS and use the tokens directly.

const PLAYFAIR = 'var(--font-playfair), Georgia, serif';

// Clerk draws borders as box-shadows on selectors more specific than a plain class,
// so overrides go under "&&" (the class twice) to win, and borders stay box-shadows too.
// A darker teal edge plus a hairline shadow make controls stand out without filling them in.
const RAISED = '0 1px 2px rgba(10, 43, 43, .08)';
const RING = '0 0 0 4px rgba(141, 215, 204, .55)'; // --accent-lighter, translucent

const input = {
    '&&': {
        backgroundColor: 'var(--white)',
        boxShadow: `0 0 0 1px var(--accent-faded), ${RAISED}`,
        fontSize: '1rem',
        padding: '.75rem .85rem',
        transition: 'box-shadow .2s ease-in',
    },
    '&&:hover': { boxShadow: `0 0 0 1px var(--accent), ${RAISED}` },
    '&&:focus, &&:focus-visible': { boxShadow: `0 0 0 1.5px var(--accent), ${RING}`, outline: 'none' },
    '&&[aria-invalid="true"]': { boxShadow: '0 0 0 1.5px var(--secondary-accent-dark)' },
};

const socialButton = {
    '&&': {
        backgroundColor: 'var(--white)',
        boxShadow: `0 0 0 1.5px var(--accent), ${RAISED}`,
        color: 'var(--accent-dark)',
        padding: '.8rem 1rem',
        transition: 'background-color .2s ease-in, box-shadow .2s ease-in, transform .2s ease-in',
    },
    '&&:hover': {
        backgroundColor: 'var(--off-white)',
        boxShadow: '0 0 0 1.5px var(--accent-dark), 0 6px 14px -6px rgba(10, 43, 43, .35)',
        transform: 'translateY(-1px)',
    },
    '&&:focus-visible': { boxShadow: `0 0 0 1.5px var(--accent-dark), ${RING}` },
    '@media (prefers-reduced-motion: reduce)': { '&&:hover': { transform: 'none' } },
};

export const clerkAppearance = {
    variables: {
        colorPrimary: '#246663', // --accent
        colorDanger: '#c55f3f', // --secondary-accent-dark
        colorForeground: '#171717', // --txt
        colorMutedForeground: '#78908b', // --accent-faded
        colorBackground: '#ffffff',
        colorInput: '#ffffff',
        colorInputForeground: '#171717',
        colorBorder: '#bed2cd', // --accent-muted
        colorRing: '#8dd7cc', // --accent-lighter
        fontFamily: 'var(--font)',
        fontFamilyButtons: 'var(--font)',
        fontSize: '1rem',
        borderRadius: '8px', // --border-radius-m
    },
    elements: {
        // Same surface as the site's cards (white, thin teal border), lifted off the page
        // with the deep-teal shadow the account menu uses
        cardBox: {
            border: '1px solid var(--accent-muted)',
            borderRadius: 'var(--border-radius-l)',
            boxShadow: '0 1px 2px rgba(10, 43, 43, .06), 0 24px 40px -20px rgba(10, 43, 43, .35)',
            maxInlineSize: '100%',
        },
        card: {
            boxShadow: 'none',
            padding: '2rem 1.5rem',
        },
        headerTitle: {
            color: 'var(--accent-dark)',
            fontFamily: PLAYFAIR,
            fontSize: '1.6rem',
            fontWeight: 700,
        },
        headerSubtitle: {
            color: 'var(--accent-faded)',
            fontSize: '1rem',
        },
        formFieldLabel: {
            color: 'var(--accent-dark)',
            fontSize: '.9rem',
            fontWeight: 500,
        },
        formFieldInput: input,
        otpCodeFieldInput: input,
        // The site's main call to action is coral (.btn--secondary)
        formButtonPrimary: {
            // Clerk styles this button one level more specifically than the rest, hence "&&&"
            '&&&': {
                backgroundColor: 'var(--secondary-accent)',
                backgroundImage: 'none',
                boxShadow: RAISED,
                fontSize: '1rem',
                fontWeight: 500,
                padding: '.8rem 1rem',
                textTransform: 'none',
            },
            // Clerk's glossy overlay
            '&&&::after': { display: 'none' },
            '&&&:hover': { backgroundColor: 'var(--secondary-accent-dark)' },
            '&&&:focus-visible': { boxShadow: `0 0 0 1.5px var(--secondary-accent-dark), ${RING}` },
        },
        // Social logins: the site's outlined .btn, with a stronger teal edge
        socialButtonsBlockButton: socialButton,
        socialButtonsIconButton: socialButton,
        socialButtonsBlockButtonText: { fontSize: '1rem', fontWeight: 500 },
        dividerLine: { backgroundColor: 'var(--accent-muted)' },
        dividerText: { color: 'var(--accent-faded)' },
        footer: {
            background: 'var(--background)',
            borderBlockStart: '1px solid var(--accent-muted)',
        },
        footerActionText: { color: 'var(--accent-faded)', fontSize: '.95rem' },
        footerActionLink: {
            color: 'var(--accent)',
            fontSize: '.95rem',
            fontWeight: 600,
            '&:hover': { color: 'var(--accent-dark)' },
        },
        formFieldAction: { color: 'var(--accent)' },
        identityPreviewEditButton: { color: 'var(--accent)' },
    },
};
