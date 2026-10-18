// Mock species data. Field names mirror the Sanity `species` schema
// (sanity/schemaTypes/species.js) so this can later be swapped for a GROQ query.
// Long-form sections are plain paragraph arrays for now (Portable Text later).

export const IUCN_LABELS = {
  NE: 'Not Evaluated',
  DD: 'Data Deficient',
  LC: 'Least Concern',
  NT: 'Near Threatened',
  VU: 'Vulnerable',
  EN: 'Endangered',
  CR: 'Critically Endangered',
  EW: 'Extinct in the Wild',
  EX: 'Extinct',
}

const species = [
  {
    slug: 'bottlenose-dolphin',
    commonName: 'Common bottlenose dolphin',
    alternativeNames: ['Roaz', 'Golfinho-roaz', 'Roaz-corvineiro'],
    scientificName: 'Tursiops truncatus',
    authority: 'Montagu, 1821',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'Curious, social and remarkably adaptable, the bottlenose dolphin is one of the most familiar cetaceans in the world — and Portugal is home to one of Europe’s few resident estuarine communities, in the Sado estuary.',

    mainImage: {
      src: '/species/bottlenose-dolphin.png',
      width: 800,
      height: 534,
      alt: 'Side-profile illustration of a common bottlenose dolphin with a grey back, pale belly and short, thick snout',
      credit: 'Illustration: NOAA Fisheries',
    },

    // Quick facts
    length: { min: 1.9, max: 4 },
    weight: { min: 150, max: 650 },
    lifespan: { min: 40, max: 60 },
    threats: ['Bycatch', 'Boat disturbance', 'Pollution', 'Underwater noise', 'Prey depletion'],
    distributionShort: 'Temperate & tropical seas worldwide',

    // Status
    iucnStatus: 'LC',
    nationalStatus: 'EN',
    nationalStatusNote: 'Sado estuary resident population',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bern Convention', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex II & IV', 'CITES — Appendix II', 'Bern Convention — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    // Where to see it
    regionsInPortugal: ['Sado estuary', 'Lisbon coast', 'Algarve', 'Azores', 'Madeira'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Common',
    bestMonths: ['may', 'june', 'july', 'august', 'september', 'october'],

    // Long-form sections
    about: [
      'The common bottlenose dolphin is a medium-sized toothed whale found in temperate and tropical waters around the globe. Its short, stubby beak — the “bottle nose” — and permanent, curved smile have made it the archetypal dolphin in popular culture.',
      'Scientists recognise two broad ecotypes: a smaller coastal form that lives in bays, estuaries and near-shore waters, and a larger, more robust offshore form that ranges over the continental shelf and open ocean. Both occur in Portuguese waters.',
      'In mainland Portugal the species is best known for the resident community of the Sado estuary, near Setúbal — one of only a handful of resident estuarine bottlenose populations in Europe, studied continuously since the 1980s.',
    ],
    populationStatus: [
      'Globally, the species is abundant and widespread, with a total population estimated in the hundreds of thousands. It is listed as Least Concern on the IUCN Red List, although many local populations are small, isolated and declining.',
      'The Sado estuary community illustrates this contrast: it numbered around 40 animals in the 1980s and fell to fewer than 30 in the following decades, with very low calf survival. It is classified as Endangered in the Portuguese Red Book of Mammals.',
      'Offshore animals around the Azores and Madeira appear to be more numerous and wide-ranging, with some individuals moving between the two archipelagos.',
    ],
    appearance: [
      'Bottlenose dolphins are robust, with a dark grey back fading to lighter grey flanks and a pale, sometimes pinkish belly. A faint dorsal “cape” is often visible just below the tall, curved (falcate) dorsal fin set midway along the back.',
      'Adults usually measure between 1.9 and 4 metres. Animals living in colder waters tend to be larger and heavier, an adaptation that helps them retain heat. Males are generally slightly bigger than females.',
      'Nicks, notches and scars on the trailing edge of the dorsal fin are unique to each animal — researchers use them like fingerprints to identify individuals in photo-identification studies.',
    ],
    behaviourAndDiet: [
      'Bottlenose dolphins live in fluid “fission–fusion” societies, where group membership changes from hour to hour. Typical groups have 2–15 animals, but offshore groups can number in the hundreds.',
      'They are opportunistic hunters that feed mainly on fish — mullet, sea bream, croaker, hake and sardine — as well as squid and cuttlefish. Groups often cooperate to herd fish into tight balls or against the shore.',
      'Each dolphin develops its own signature whistle, which works much like a name. They are frequently seen bow-riding, surfing waves and leaping clear of the water.',
    ],
    lifespanAndReproduction: [
      'Bottlenose dolphins are long-lived: females can live beyond 60 years, while males rarely exceed 40–50 years.',
      'Females reach sexual maturity at 5–13 years and males at 9–14 years. After a gestation of around 12 months, a single calf of about 1 metre is born, usually in the warmer months.',
      'Calves nurse for up to two years and stay with their mothers for three to six years, learning how to hunt and navigate social life. With such a slow reproductive rate, small populations take a long time to recover from losses.',
    ],
    threatsDetail: [
      'Accidental capture in fishing gear (bycatch) is one of the main causes of death for coastal dolphins in Portugal, particularly in gillnets and trammel nets.',
      'Intense boat traffic, poorly managed dolphin-watching and underwater noise can disrupt feeding, resting and communication. In the Sado estuary, port activity, dredging and shipping add to this pressure.',
      'As top predators, dolphins accumulate pollutants such as PCBs and heavy metals in their blubber, which can impair immunity and reproduction. Overfishing of prey species further reduces the food available to them.',
    ],
    classification: [
      { rank: 'Kingdom', name: 'Animalia' },
      { rank: 'Phylum', name: 'Chordata' },
      { rank: 'Class', name: 'Mammalia' },
      { rank: 'Order', name: 'Artiodactyla' },
      { rank: 'Infraorder', name: 'Cetacea' },
      { rank: 'Parvorder', name: 'Odontoceti' },
      { rank: 'Family', name: 'Delphinidae' },
      { rank: 'Genus', name: 'Tursiops', italic: true },
      { rank: 'Species', name: 'Tursiops truncatus', italic: true },
    ],
  },
]

export function getAllSpeciesSlugs() {
  return species.map(({ slug }) => ({ slug }))
}

export function getSpeciesBySlug(slug) {
  return species.find((item) => item.slug === slug) ?? null
}
