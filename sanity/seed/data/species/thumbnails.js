// Card thumbnails: photos of each species at sea, more generic than the
// side-profile illustrations used on the species pages. Cropped to 800×500.
//
// Most are from NOAA Fisheries species pages (US government work, public domain).
// Where NOAA has no usable photo, images come from Wikimedia Commons — public
// domain or Creative Commons, which require the credit and licence to be shown.

const photo = (slug, alt, credit = 'NOAA Fisheries', extra = {}) => ({
    src: `/species/thumbs/${slug}.jpg`,
    width: 800,
    height: 500,
    alt,
    credit: `Photo: ${credit}`,
    ...extra,
})

const commons = (file, license) => ({
    license,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${file}`,
})

export const thumbnails = {
    // Baleen whales
    'north-atlantic-right-whale': photo('north-atlantic-right-whale', 'A North Atlantic right whale breaching'),
    'blue-whale': photo('blue-whale', 'A blue whale swimming just below the surface'),
    'fin-whale': photo('fin-whale', 'A fin whale surfacing with a visible blow'),
    'sei-whale': photo('sei-whale', 'A sei whale mother and calf seen from above'),
    'brydes-whale': photo('brydes-whale', 'A Bryde’s whale swimming at the surface'),
    'common-minke-whale': photo('common-minke-whale', 'A minke whale surfacing in open water'),
    'humpback-whale': photo('humpback-whale', 'A humpback whale breaching'),

    // Toothed whales
    'sperm-whale': photo('sperm-whale', 'A group of sperm whales seen from above', 'NOAA Northeast Fisheries Science Center'),
    'pygmy-sperm-whale': photo('pygmy-sperm-whale', 'A pygmy sperm whale resting at the surface', 'NOAA Pacific Islands Fisheries Science Center/Mark P. Cotter'),
    'dwarf-sperm-whale': photo('dwarf-sperm-whale', 'A dwarf sperm whale leaping out of the water', 'Robert Pitman/NOAA', commons('Dwarf_sperm_whale_(NOAA_Pitman).jpg', 'Public domain')),
    'cuviers-beaked-whale': photo('cuviers-beaked-whale', 'A Cuvier’s beaked whale cruising just under the surface', 'NOAA Fisheries/Richard Holt (Permit #21938)'),
    'northern-bottlenose-whale': photo('northern-bottlenose-whale', 'A northern bottlenose whale leaping clear of the water', 'Saana Isojunno', commons('Hyperoodon_ampullatus_jumping.jpg', 'CC BY-SA 4.0')),
    'sowerbys-beaked-whale': photo('sowerbys-beaked-whale', 'A Sowerby’s beaked whale surfacing'),
    'blainvilles-beaked-whale': photo('blainvilles-beaked-whale', 'An adult male Blainville’s beaked whale surfacing'),
    'gervais-beaked-whale': photo('gervais-beaked-whale', 'A Gervais’ beaked whale at the surface'),
    'trues-beaked-whale': photo('trues-beaked-whale', 'A True’s beaked whale photographed underwater in Macaronesia', 'Roland Edler (Aguilar de Soto et al., 2017, PeerJ)', commons('The_True%27s_beaked_whale_photographed_underwater.jpg', 'CC BY 4.0')),

    // Dolphins
    'bottlenose-dolphin': photo('bottlenose-dolphin', 'A common bottlenose dolphin leaping near the coast'),
    'common-dolphin': photo('common-dolphin', 'Short-beaked common dolphins porpoising through the water'),
    'striped-dolphin': photo('striped-dolphin', 'A striped dolphin leaping out of the water'),
    'atlantic-spotted-dolphin': photo('atlantic-spotted-dolphin', 'An Atlantic spotted dolphin swimming fast at the surface'),
    'rissos-dolphin': photo('rissos-dolphin', 'A scarred Risso’s dolphin breaching', 'NOAA Fisheries/J. Cotton'),
    'rough-toothed-dolphin': photo('rough-toothed-dolphin', 'Rough-toothed dolphins leaping'),
    'frasers-dolphin': photo('frasers-dolphin', 'A fast-moving group of Fraser’s dolphins'),
    'killer-whale': photo('killer-whale', 'A pod of killer whales surfacing together'),
    'false-killer-whale': photo('false-killer-whale', 'A false killer whale surfacing offshore'),
    'long-finned-pilot-whale': photo('long-finned-pilot-whale', 'A group of long-finned pilot whales at the surface', 'U.S. Fish and Wildlife Service', commons('Photo_of_the_Week_-_Long-finned_Pilot_Whales_(RI)_(6892801246).jpg', 'Public domain')),
    'short-finned-pilot-whale': photo('short-finned-pilot-whale', 'Two short-finned pilot whales spy-hopping'),

    // Porpoises
    'harbour-porpoise': photo('harbour-porpoise', 'A harbour porpoise surfacing', 'NOAA Fisheries/Northeast Fisheries Science Center'),

    // Seals
    'mediterranean-monk-seal': photo('mediterranean-monk-seal', 'A Mediterranean monk seal swimming over the seabed', 'Marinko Babić', commons('Monachus_monachus_DSC_0384.jpg', 'CC BY-SA 4.0')),
    'grey-seal': photo('grey-seal', 'A grey seal resting on the shore'),
    'harbour-seal': photo('harbour-seal', 'Harbour seals hauled out on a sandy beach'),
    'hooded-seal': photo('hooded-seal', 'A juvenile hooded seal lying on the ice', 'NOAA Northeast Fisheries Science Center'),
}
