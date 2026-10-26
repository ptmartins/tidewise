// Sound recordings for the species pages, keyed by slug. Files live in /public/sounds.
//
// All recordings are NOAA's own (US government work, public domain). Most come
// from the Northeast Fisheries Science Center "Sounds in the Ocean: Mammals"
// page and are credited in the format that page asks for:
//   Agency. Group. Collection/publication date. Title of sound file. URL
// The date is when the clip was published on that page (April 2023, June 2023
// for the harbour seal). Clips from other institutions hosted on the same page
// (Cornell, DFO Canada, AWI…) are not used.
//
// Low and very high sounds are sped up or slowed down so human ears can hear
// them; the description says so wherever the speed has been changed.

const NEFSC_PAGE = 'https://www.fisheries.noaa.gov/national/science-data/sounds-ocean-mammals'
const PUBLIC_DOMAIN = 'Public domain (US government work)'

const nefsc = (slug, title, description, { year = 2023, ext = 'mp3' } = {}) => ({
  src: `/sounds/${slug}.${ext}`,
  description,
  credit: `NOAA [National Oceanic and Atmospheric Administration]. Northeast Fisheries Science Center. Passive Acoustics Branch. ${year}. ${title}. ${NEFSC_PAGE}`,
  license: PUBLIC_DOMAIN,
  sourceUrl: NEFSC_PAGE,
})

const PILOT_WHALE = nefsc(
  'pilot-whale',
  'Glsp_Multisound_NOAA_PAGroup_01',
  'A mix of pilot whale sounds. The recording is identified only to genus (Globicephala), so it could be either the long-finned or the short-finned pilot whale.',
)

export const sounds = {
  // Baleen whales
  'blue-whale': {
    src: '/sounds/blue-whale.wav',
    description: 'The long, low moan of an Atlantic blue whale (around 19 Hz), recorded on a hydrophone array along the Mid-Atlantic Ridge. Sped up 10× so that it can be heard.',
    credit: 'NOAA [National Oceanic and Atmospheric Administration]. Pacific Marine Environmental Laboratory. Acoustics Program. Atlantic blue whale call (atlblue_512_64_0-50_10x). https://www.pmel.noaa.gov/acoustics/whales/sounds/sounds_atlblu.html',
    license: PUBLIC_DOMAIN,
    sourceUrl: 'https://www.pmel.noaa.gov/acoustics/whales/sounds/sounds_atlblu.html',
  },
  'fin-whale': nefsc('fin-whale', 'Baph_song_NOAA_PAGroup_05', 'Fin whale song: a regular series of powerful, low-frequency pulses. Sped up 5× so that it can be heard.'),
  'sei-whale': nefsc('sei-whale', 'Babo_downsweep_NOAA_PAGroup_06', 'Sei whale "downsweep" calls, which drop in pitch. Sped up 2×.'),
  'humpback-whale': nefsc('humpback-whale', 'Meno_song_NOAA_PAGroup_13', 'Part of a humpback whale song, the most complex song of any animal outside humans and birds.'),
  'common-minke-whale': nefsc('common-minke-whale', 'Baac_pulsetrains_NOAA_PAGroup_25', 'Minke whale pulse trains: long, rapid series of low pulses.'),
  'north-atlantic-right-whale': nefsc('north-atlantic-right-whale', 'Eugl_upcall_NOAA_PAGroup_01', 'The "upcall" of a North Atlantic right whale, a short rising contact call.'),

  // Toothed whales
  'sperm-whale': nefsc('sperm-whale', 'Phma_clicks_NOAA_PAGroup_01', 'Sperm whale echolocation clicks, the loudest sounds made by any animal.'),
  'cuviers-beaked-whale': nefsc('cuviers-beaked-whale', 'Zica_clicks_NOAA_PAGroup_01', 'Echolocation clicks of a Cuvier’s beaked whale hunting at depth. Slowed to 0.3× speed and filtered, as the clicks are mostly too high for human ears.'),
  'trues-beaked-whale': nefsc('trues-beaked-whale', 'Memi_Multisound_NOAA_PAGroup_01', 'Sounds of a True’s beaked whale, one of the least-known whales. Slowed to 0.25× speed so that they can be heard.'),
  beluga: nefsc('beluga', 'Dele_multisound_NOAA_Castellote_01', 'The whistles, chirps and clicks that earned the beluga its nickname, the “sea canary”.'),

  // Dolphins
  'bottlenose-dolphin': nefsc('bottlenose-dolphin', 'Tutr_multisound_NOAA_PAGroup_03', 'A mix of bottlenose dolphin whistles and clicks.'),
  'common-dolphin': nefsc('common-dolphin', 'Dede_whistles_NOAA_PAGroup_01', 'Whistles of short-beaked common dolphins.'),
  'striped-dolphin': nefsc('striped-dolphin', 'Stco_Multisound_NOAA_PAGroup_01', 'A mix of striped dolphin sounds.'),
  'atlantic-spotted-dolphin': nefsc('atlantic-spotted-dolphin', 'Stfr_Multisound_NOAA_PAGroup_01', 'A mix of Atlantic spotted dolphin sounds.'),
  'rissos-dolphin': nefsc('rissos-dolphin', 'Grgr_clicks_NOAA_PAGroup_08', 'Echolocation clicks of Risso’s dolphins.'),
  'atlantic-white-sided-dolphin': nefsc('atlantic-white-sided-dolphin', 'Laac_whistles_NOAA_PAGroup_01', 'Whistles of Atlantic white-sided dolphins.'),
  'white-beaked-dolphin': nefsc('white-beaked-dolphin', 'Laal_multisound_NOAA_PAGroup_01', 'A mix of white-beaked dolphin sounds.'),
  'indo-pacific-humpback-dolphin': nefsc('indo-pacific-humpback-dolphin', 'Soch_clicks_NOAA_PAGroup_01', 'Echolocation clicks of humpback dolphins (genus Sousa).'),
  'long-finned-pilot-whale': PILOT_WHALE,
  'short-finned-pilot-whale': PILOT_WHALE,

  // Seals
  'harbour-seal': nefsc('harbour-seal', 'Phvi_roar_NOAA_PAGroup_01', 'The low underwater "roar" that male harbour seals use to attract females.', { ext: 'wav' }),
}
