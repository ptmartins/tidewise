import { cetaceanClassification, noaaImage } from './_shared'

const odontocete = (family, genus, species) =>
  cetaceanClassification({ parvorder: 'Odontoceti', family, genus, species })

const BEAKED_WHALE_PROTECTION = {
  protectedUnder: ['EU Habitats Directive', 'CITES II'],
  legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II'],
}

export const toothedWhales = [
  {
    slug: 'sperm-whale',
    commonName: 'Sperm whale',
    alternativeNames: ['Cachalote'],
    scientificName: 'Physeter macrocephalus',
    authority: 'Linnaeus, 1758',
    category: 'Toothed whale',
    family: 'Physeteridae',
    summary:
      'The largest toothed predator on Earth, with the biggest brain of any animal. Sperm whales dive to over 1,000 metres to hunt squid in the dark, in deep waters of every ocean.',
    mainImage: noaaImage('sperm-whale', 'Illustration of a sperm whale: a large, wrinkled brownish-grey whale with a huge square head'),

    length: { min: 11, max: 18 },
    weight: { min: 15000, max: 45000 },
    lifespan: { min: 60, max: 70 },
    threats: ['Ship strikes', 'Plastic ingestion', 'Underwater noise', 'Entanglement'],
    distributionShort: 'Deep waters of all oceans',

    iucnStatus: 'VU',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I & II', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Azores', 'Madeira', 'Mainland coast'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Common',
    bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian', 'southern'],
    distributionInPortugal: 'The Azores are one of the best places on Earth to see sperm whales: family groups of females and young are present year-round, while large adult males visit from higher latitudes. Sperm whales also occur around Madeira and off the mainland.',

    about: [
      'The sperm whale is the largest toothed whale and has the biggest brain of any animal. Its enormous square head contains the spermaceti organ, a waxy reservoir thought to help produce and focus its powerful echolocation clicks.',
      'Sperm whales live in deep waters worldwide. Family groups of females and young stay in warm and temperate waters all year, while adult males roam to high latitudes, reaching the edges of the polar ice.',
    ],
    populationStatus: [
      'Sperm whales were hunted intensively for their oil — including from small open boats in the Azores until 1987. The global population is now estimated at several hundred thousand, and the species is listed as Vulnerable.',
      'Long-term photo-identification in the Azores has catalogued thousands of individuals and shows that many family units return to the islands year after year.',
    ],
    appearance: [
      'Sperm whales are dark brownish-grey with wrinkled, prune-like skin behind the head. The head makes up about a third of the body, and the narrow lower jaw carries 18–26 pairs of large conical teeth.',
      'Instead of a dorsal fin there is a low hump followed by a series of knuckles. The single blowhole sits at the front left of the head, producing a distinctive bushy blow angled forward and to the left.',
    ],
    behaviourAndDiet: [
      'Sperm whales feed mainly on deep-water squid, including giant and colossal squid, as well as fish. They routinely dive to 400–1,200 metres for 45 minutes or more, and can reach depths beyond 2,000 metres.',
      'Females and young live in stable matrilineal family units that babysit each other’s calves. They communicate with patterned click sequences called codas, and different clans in the Atlantic use different coda “dialects”.',
    ],
    lifespanAndReproduction: [
      'Sperm whales live for 60–70 years or more. Females reach maturity at about 9 years, while males do not breed successfully until they are in their late twenties.',
      'Gestation lasts 14–16 months, and calves nurse for two years or longer. Females give birth only every four to six years, so populations recover very slowly.',
    ],
    threatsDetail: [
      'Ship strikes are a significant cause of death, especially around ports and in areas with high-speed ferries. Sperm whales are also known to swallow plastic and fishing gear, which can block the stomach.',
      'Noise from shipping, seismic surveys and military sonar can interfere with their echolocation, and they are occasionally entangled in fishing gear.',
    ],
    classification: odontocete('Physeteridae', 'Physeter', 'Physeter macrocephalus'),
  },
  {
    slug: 'pygmy-sperm-whale',
    commonName: 'Pygmy sperm whale',
    alternativeNames: ['Cachalote-pigmeu'],
    scientificName: 'Kogia breviceps',
    authority: 'Blainville, 1838',
    category: 'Toothed whale',
    family: 'Kogiidae',
    summary:
      'A small, shy whale with a shark-like head and a “false gill” marking. Rarely seen at sea, pygmy sperm whales are known mostly from animals stranded on beaches.',
    mainImage: noaaImage('pygmy-sperm-whale', 'Illustration of a pygmy sperm whale: a small, robust dark grey whale with a blunt head and a small dorsal fin'),

    length: { min: 2.7, max: 3.5 },
    weight: { min: 300, max: 450 },
    lifespan: { min: 20, max: 23 },
    threats: ['Plastic ingestion', 'Underwater noise', 'Bycatch'],
    distributionShort: 'Deep temperate & tropical seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II'],

    regionsInPortugal: ['Azores', 'Madeira', 'Mainland coast'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Rare',
    bestMonths: [],
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'The species is considered rare in Portugal and is known mainly from strandings on the mainland, the Azores and Madeira.',

    about: [
      'Despite its name, the pygmy sperm whale is only distantly related to the sperm whale. It is a small, robust whale that lives in deep waters beyond the continental shelf in temperate and tropical seas.',
      'It is one of the least-known cetaceans. Most of what we know comes from stranded animals, and it strands more often than its rarity at sea would suggest, especially in the south-eastern United States.',
    ],
    populationStatus: [
      'There are no reliable estimates of global abundance. The species is listed as Least Concern, but this reflects its wide range more than any detailed knowledge of population trends.',
      'Its inconspicuous behaviour at sea means it is almost certainly under-recorded wherever it occurs.',
    ],
    appearance: [
      'Pygmy sperm whales have a blunt, squarish head, an underslung lower jaw and a pale bracket-shaped marking behind the eye that looks like a fish’s gill — the “false gill”. Seen from the side, they can look remarkably like a shark.',
      'They are dark bluish-grey above, paler below, with a small, hooked dorsal fin set well behind the middle of the back. Their teeth are found only in the lower jaw.',
    ],
    behaviourAndDiet: [
      'They feed on deep-water squid, octopus, fish and crustaceans, probably diving to several hundred metres.',
      'At the surface they often lie motionless, “logging”, with little of the body visible. When startled they can release a cloud of reddish-brown intestinal fluid — like squid ink — to confuse predators.',
    ],
    lifespanAndReproduction: [
      'Pygmy sperm whales are thought to live for around 20–23 years. Females reach maturity at around 4–5 years.',
      'Gestation lasts about 11 months, and calves are around 1.2 metres long at birth. Females may give birth in consecutive years.',
    ],
    threatsDetail: [
      'Kogia whales are particularly prone to swallowing plastic bags and debris, which has been found in the stomachs of many stranded animals.',
      'They are thought to be sensitive to underwater noise from sonar and seismic surveys, and are sometimes caught accidentally in fishing gear.',
    ],
    classification: odontocete('Kogiidae', 'Kogia', 'Kogia breviceps'),
  },
  {
    slug: 'dwarf-sperm-whale',
    commonName: 'Dwarf sperm whale',
    alternativeNames: ['Cachalote-anão'],
    scientificName: 'Kogia sima',
    authority: 'Owen, 1866',
    category: 'Toothed whale',
    family: 'Kogiidae',
    summary:
      'One of the smallest whales in the world, barely larger than many dolphins. Dwarf sperm whales live in warm, deep seas and are rarely seen, often lying still at the surface.',
    mainImage: noaaImage('dwarf-sperm-whale', 'Illustration of a dwarf sperm whale: a small, stocky grey whale with a blunt head and a taller dorsal fin'),

    length: { min: 2, max: 2.7 },
    weight: { min: 135, max: 270 },
    lifespan: { min: 20, max: 22 },
    threats: ['Plastic ingestion', 'Underwater noise', 'Bycatch'],
    distributionShort: 'Warm temperate & tropical seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II'],

    regionsInPortugal: ['Madeira', 'Azores', 'Mainland coast'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Portugal lies near the northern edge of the species’ range in the eastern Atlantic. Records are few, mostly from strandings and occasional sightings around Madeira and the Azores.',

    about: [
      'The dwarf sperm whale is the smallest of the “whales”, reaching less than 3 metres in length. It is very similar to its close relative, the pygmy sperm whale, and the two are hard to tell apart at sea.',
      'It prefers warm, deep waters over the continental shelf edge and slope, and is often found closer to shore than the pygmy sperm whale.',
    ],
    populationStatus: [
      'There are no global population estimates. The species is listed as Least Concern, but its status in the eastern North Atlantic is essentially unknown.',
      'Because it is so inconspicuous, it is probably far more common than sightings suggest.',
    ],
    appearance: [
      'Dwarf sperm whales are dark grey above, fading to pale grey or pinkish below, with a short, blunt head and a pale “false gill” marking behind the eye.',
      'The main difference from the pygmy sperm whale is the dorsal fin, which is taller, more triangular and set closer to the middle of the back.',
    ],
    behaviourAndDiet: [
      'They feed on squid, octopus, deep-sea fish and crustaceans, probably foraging at depths of 250 metres or more.',
      'They are usually seen alone or in small groups of up to ten, lying still at the surface. Like the pygmy sperm whale, they can release a reddish ink-like fluid when alarmed.',
    ],
    lifespanAndReproduction: [
      'Dwarf sperm whales are thought to live for around 20–22 years and reach maturity at 2.5–5 years.',
      'Gestation lasts about 12 months, and calves are about 1 metre long at birth.',
    ],
    threatsDetail: [
      'Ingestion of plastic debris is a recurring finding in stranded dwarf sperm whales.',
      'They may be sensitive to military sonar and seismic surveys, and are caught occasionally in fisheries in some parts of their range.',
    ],
    classification: odontocete('Kogiidae', 'Kogia', 'Kogia sima'),
  },
  {
    slug: 'cuviers-beaked-whale',
    commonName: 'Cuvier’s beaked whale',
    alternativeNames: ['Baleia-de-bico-de-Cuvier', 'Zífio'],
    scientificName: 'Ziphius cavirostris',
    authority: 'G. Cuvier, 1823',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'The record-holder for the deepest and longest dives of any mammal. Cuvier’s beaked whales live over deep canyons and seamounts in all the world’s oceans except the polar seas.',
    mainImage: noaaImage('cuviers-beaked-whale', 'Illustration of a Cuvier’s beaked whale: a robust brownish whale with a pale head and a short beak'),

    length: { min: 5, max: 7 },
    weight: { min: 2000, max: 3000 },
    lifespan: { min: 40, max: 60 },
    threats: ['Military sonar', 'Underwater noise', 'Plastic ingestion', 'Bycatch'],
    distributionShort: 'Deep waters worldwide',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...BEAKED_WHALE_PROTECTION,

    regionsInPortugal: ['Azores', 'Madeira', 'Mainland coast'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Uncommon',
    bestMonths: ['may', 'june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Cuvier’s beaked whales occur over the steep slopes and canyons off the mainland and are seen fairly regularly around the Azores and Madeira, where long-term studies of their behaviour are underway. They are among the most frequently recorded beaked whales in Portuguese waters.',

    about: [
      'Cuvier’s beaked whale is the most widespread beaked whale, found in deep waters of all oceans except the polar seas. It holds the mammal record for diving depth (almost 3,000 metres) and breath-holding (over 3.5 hours).',
      'It favours steep slopes, canyons and seamounts. Long-term studies off southern California, around the Canary Islands and in the Ligurian Sea of the Mediterranean have revealed much of what we know about its diving behaviour.',
    ],
    populationStatus: [
      'The species is listed as Least Concern globally. Abundance is poorly known in most areas, but it is the only beaked whale regularly found in the Mediterranean, where the population is listed as Vulnerable.',
      'Mass strandings linked to naval sonar exercises in nearby regions, such as the Canary Islands, have raised concern for local populations.',
    ],
    appearance: [
      'Cuvier’s beaked whales are robust and cigar-shaped, with a short beak and a gently sloping forehead that gives the head a goose-like profile. Colour varies from dark grey to reddish-brown, with a paler head.',
      'Adult males have two small tusks at the tip of the lower jaw and are often covered in long, pale scars from fights with other males and oval scars from cookie-cutter sharks.',
    ],
    behaviourAndDiet: [
      'They feed mainly on deep-water squid and fish, which they suck into their mouths. Typical foraging dives last about an hour and reach 1,000–2,000 metres.',
      'At the surface they are usually quiet and inconspicuous, travelling in small groups of two to seven. They are sensitive to boat noise and often avoid vessels.',
    ],
    lifespanAndReproduction: [
      'Cuvier’s beaked whales are estimated to live up to around 60 years. Little is known about their breeding, but females are thought to give birth to a single calf every two to three years.',
      'Calves are about 2.7 metres long at birth.',
    ],
    threatsDetail: [
      'Beaked whales are highly sensitive to military mid-frequency sonar, which has been linked to mass strandings and decompression-like injuries. Other loud noise sources may cause similar problems.',
      'Ingestion of plastic and occasional bycatch in deep-water fisheries are additional threats.',
    ],
    classification: odontocete('Ziphiidae', 'Ziphius', 'Ziphius cavirostris'),
  },
  {
    slug: 'northern-bottlenose-whale',
    commonName: 'Northern bottlenose whale',
    alternativeNames: ['Botinhoso'],
    scientificName: 'Hyperoodon ampullatus',
    authority: 'Forster, 1770',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A large, curious beaked whale of the deep North Atlantic, with a bulbous forehead and a short beak. Its habit of approaching stationary boats once made it easy prey for whalers.',
    mainImage: noaaImage('northern-bottlenose-whale', 'Illustration of a northern bottlenose whale: a pale, chunky whale with a bulbous forehead and a short beak'),

    length: { min: 6, max: 9.8 },
    weight: { min: 5800, max: 7500 },
    lifespan: { min: 35, max: 40 },
    threats: ['Military sonar', 'Underwater noise', 'Plastic ingestion', 'Bycatch'],
    distributionShort: 'Deep, cold North Atlantic',

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES I'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Azores', 'Mainland coast'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Rare',
    bestMonths: ['may', 'june', 'july', 'august'],
    oceans: ['north-atlantic', 'arctic'],
    distributionInPortugal: 'Northern bottlenose whales are mostly seen around the Azores, with occasional strandings on the mainland. These records probably represent animals at the southern edge of the species’ range.',

    about: [
      'The northern bottlenose whale is one of the largest beaked whales, living in deep waters of the North Atlantic from the Arctic to around the latitude of the Azores and Iberia.',
      'It is known for its curiosity, often approaching stationary boats — a trait that made it easy prey for whalers. Its strongholds include the Gully, a submarine canyon off Nova Scotia, and the waters around Iceland and Jan Mayen.',
    ],
    populationStatus: [
      'Tens of thousands were killed by Norwegian and Canadian whalers in the 19th and 20th centuries. The species is listed as Near Threatened, and current abundance across much of its range is uncertain.',
      'The small population of the Scotian Shelf, centred on the Gully, is listed as Endangered in Canada.',
    ],
    appearance: [
      'Northern bottlenose whales have a steep, bulbous forehead (“melon”) and a short, dolphin-like beak. Adult males develop a very large, flattened, pale forehead.',
      'They are brownish-grey, becoming paler with age, with a small, hooked dorsal fin set far back on the body. The blow is bushy and visible in calm conditions.',
    ],
    behaviourAndDiet: [
      'They feed mainly on deep-water squid of the genus Gonatus, along with fish, diving to over 1,000 metres for up to an hour or more.',
      'They live in groups of about four to ten and have a reputation for staying with injured companions. They are among the most approachable beaked whales.',
    ],
    lifespanAndReproduction: [
      'Northern bottlenose whales live for at least 37 years. Females reach maturity at around 8–12 years and give birth every two years or so.',
      'Gestation lasts about 12 months, and calves are about 3 metres long at birth.',
    ],
    threatsDetail: [
      'As deep divers, they are vulnerable to the effects of military sonar and other loud underwater noise.',
      'Ingestion of plastic, entanglement in deep-water fishing gear and changes in their prey caused by climate change are additional concerns.',
    ],
    classification: odontocete('Ziphiidae', 'Hyperoodon', 'Hyperoodon ampullatus'),
  },
  {
    slug: 'sowerbys-beaked-whale',
    commonName: 'Sowerby’s beaked whale',
    alternativeNames: ['Baleia-de-bico-de-Sowerby'],
    scientificName: 'Mesoplodon bidens',
    authority: 'Sowerby, 1804',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'The first beaked whale ever described to science, and one of the most northerly. Sowerby’s beaked whales live in deep, cool waters of the North Atlantic and are rarely seen alive.',
    mainImage: noaaImage('sowerbys-beaked-whale', 'Illustration of a Sowerby’s beaked whale: a slender, dark grey whale with a long, thin beak'),

    length: { min: 4.5, max: 5.5 },
    weight: { min: 1000, max: 1300 },
    lifespan: null,
    threats: ['Military sonar', 'Underwater noise', 'Bycatch'],
    distributionShort: 'Deep, cool North Atlantic',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...BEAKED_WHALE_PROTECTION,

    regionsInPortugal: ['Azores', 'Mainland coast'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],
    oceans: ['north-atlantic'],
    distributionInPortugal: 'The Azores lie near the southern limit of the species’ range, and there are a small number of sightings and strandings from the archipelago and the mainland. It is considered rare in Portugal.',

    about: [
      'Sowerby’s beaked whale was described in 1804 from an animal stranded in Scotland, making it the first beaked whale known to science. It lives in deep, cool waters of the North Atlantic.',
      'Most records come from strandings around northern Europe, especially the British Isles, and from sightings over deep water in places such as the Gully off Nova Scotia.',
    ],
    populationStatus: [
      'There are no reliable population estimates. The species is listed as Least Concern globally, but it is poorly known and difficult to survey.',
      'Every confirmed sighting adds valuable information about its distribution and behaviour.',
    ],
    appearance: [
      'Sowerby’s beaked whales have a long, slender beak and a small bulge in front of the blowhole. They are dark grey to blue-grey, often with pale spots and scars.',
      'Adult males have a pair of triangular teeth in the middle of the lower jaw that are visible outside the mouth. The dorsal fin is small and set two-thirds of the way along the back.',
    ],
    behaviourAndDiet: [
      'They feed on squid and deep-water fish such as cod and hake, diving to depths of several hundred metres or more.',
      'They are usually seen in small groups. They are shy and difficult to approach, and they often surface with the beak pointing up at a steep angle.',
    ],
    lifespanAndReproduction: [
      'Very little is known about their life history. Like other beaked whales, they are thought to give birth to a single calf every two to three years.',
      'Calves are about 2.4 metres long at birth.',
    ],
    threatsDetail: [
      'Beaked whales are particularly vulnerable to military sonar and other loud underwater noise.',
      'Sowerby’s beaked whales are also occasionally caught in drift nets and other deep-water fishing gear.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon bidens'),
  },
  {
    slug: 'blainvilles-beaked-whale',
    commonName: 'Blainville’s beaked whale',
    alternativeNames: ['Baleia-de-bico-de-Blainville'],
    scientificName: 'Mesoplodon densirostris',
    authority: 'Blainville, 1817',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'Named for its incredibly dense jawbone, the densest bone known in the animal kingdom. Blainville’s beaked whales live in warm, deep waters of every ocean, and long-term studies in the Bahamas and Canary Islands have made them one of the best-known beaked whales.',
    mainImage: noaaImage('blainvilles-beaked-whale', 'Illustration of a Blainville’s beaked whale: a dark grey whale with an arched lower jaw and pale spots'),

    length: { min: 4.5, max: 6 },
    weight: { min: 800, max: 1000 },
    lifespan: null,
    threats: ['Military sonar', 'Underwater noise', 'Plastic ingestion', 'Bycatch'],
    distributionShort: 'Deep tropical & warm temperate seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...BEAKED_WHALE_PROTECTION,

    regionsInPortugal: ['Madeira', 'Azores'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Uncommon',
    bestMonths: ['may', 'june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Blainville’s beaked whales are seen mainly around Madeira and the Azores, and are among the more frequently recorded beaked whales around Madeira. Their status in Portuguese waters is unknown.',

    about: [
      'Blainville’s beaked whale is one of the most widespread species in the genus Mesoplodon, found in deep tropical and warm temperate waters worldwide.',
      'Its scientific name, densirostris, means “dense beak”: its jawbone is the densest bone ever measured.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but there are few population estimates. Studies in the Canary Islands and Bahamas have found small, resident populations.',
      'Because they are so hard to see, researchers increasingly track them by listening for their distinctive echolocation clicks.',
    ],
    appearance: [
      'The lower jaw arches sharply upwards in adult males, with a large tooth erupting from the top of each arch — sometimes overgrown with barnacles. This gives the head a striking, almost horned profile.',
      'They are dark blue-grey above and paler below, often covered with oval scars from cookie-cutter sharks and long scratches from other males.',
    ],
    behaviourAndDiet: [
      'They feed on small squid and deep-water fish, diving to depths of around 1,000 metres for nearly an hour, then making a series of shallower dives.',
      'They are usually seen in small groups of three to seven and are quiet near the surface, which helps them avoid predators such as killer whales.',
    ],
    lifespanAndReproduction: [
      'Little is known about their lifespan. Females are thought to reach maturity at around 9 years and give birth to a single calf every three years or so.',
      'Calves are about 2 metres long at birth.',
    ],
    threatsDetail: [
      'Like other beaked whales, Blainville’s beaked whales are very sensitive to military sonar and have been involved in sonar-related mass strandings.',
      'Plastic ingestion and occasional bycatch in fisheries are also recorded.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon densirostris'),
  },
  {
    slug: 'gervais-beaked-whale',
    commonName: 'Gervais’ beaked whale',
    alternativeNames: ['Baleia-de-bico-de-Gervais'],
    scientificName: 'Mesoplodon europaeus',
    authority: 'Gervais, 1855',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A beaked whale of the warm Atlantic, despite its scientific name meaning “European”. Gervais’ beaked whales live in deep water on both sides of the ocean and are known mostly from animals stranded in the western Atlantic.',
    mainImage: noaaImage('gervais-beaked-whale', 'Illustration of a Gervais’ beaked whale: a slender grey whale with a narrow beak'),

    length: { min: 4.5, max: 5.2 },
    weight: { min: 1000, max: 1200 },
    lifespan: null,
    threats: ['Military sonar', 'Underwater noise', 'Bycatch'],
    distributionShort: 'Warm Atlantic waters',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...BEAKED_WHALE_PROTECTION,

    regionsInPortugal: ['Madeira', 'Azores'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Rare',
    bestMonths: ['may', 'june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic'],
    distributionInPortugal: 'Gervais’ beaked whales have been recorded mainly around Madeira and the Azores. Their status in Portuguese waters is unknown.',

    about: [
      'Gervais’ beaked whale lives in deep, warm waters of the Atlantic Ocean. It was named europaeus because the first specimen was found floating in the English Channel, far from its usual range.',
      'Most records come from the western North Atlantic, the Gulf of Mexico and the Caribbean, but sightings and strandings around the Canary Islands, Madeira and the Azores confirm its presence in the eastern Atlantic too.',
    ],
    populationStatus: [
      'There are no reliable estimates of global abundance, and the species is listed as Least Concern.',
      'Its status is unknown in most of its range, and identification at sea is challenging because it looks so similar to other Mesoplodon species.',
    ],
    appearance: [
      'Gervais’ beaked whales have a narrow, short beak and a small bulge in front of the blowhole. They are dark grey above and paler below, often with pale scars.',
      'Adult males have a pair of small, triangular teeth about a third of the way back along the lower jaw. Females and juveniles may have pale patches on the belly.',
    ],
    behaviourAndDiet: [
      'They feed on squid, fish and crustaceans in deep waters, probably diving to over 1,000 metres.',
      'They are usually seen alone or in small groups and are wary of boats, making them difficult to study at sea.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history. Females are thought to give birth to a single calf every few years.',
      'Calves are about 2 metres long at birth.',
    ],
    threatsDetail: [
      'Military sonar and other loud noise sources are the main known threat to beaked whales, causing disorientation and strandings.',
      'Occasional bycatch in fishing gear and ingestion of marine debris also occur.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon europaeus'),
  },
  {
    slug: 'trues-beaked-whale',
    commonName: 'True’s beaked whale',
    alternativeNames: ['Baleia-de-bico-de-True'],
    scientificName: 'Mesoplodon mirus',
    authority: 'True, 1913',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'One of the least-known whales in the world. The Azores and Canary Islands have provided some of the first-ever photographs of living True’s beaked whales.',
    mainImage: noaaImage('trues-beaked-whale', 'Illustration of a True’s beaked whale: a dark grey whale with a short beak and pale markings'),

    length: { min: 4.8, max: 5.4 },
    weight: { min: 1000, max: 1400 },
    lifespan: null,
    threats: ['Military sonar', 'Underwater noise', 'Bycatch'],
    distributionShort: 'Temperate North Atlantic',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...BEAKED_WHALE_PROTECTION,

    regionsInPortugal: ['Azores', 'Madeira'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],
    oceans: ['north-atlantic'],
    distributionInPortugal: 'True’s beaked whale is considered rare in Portuguese waters, with only a small number of confirmed records, mostly from the Azores, where some of the first images of the species alive were taken.',

    about: [
      'True’s beaked whale is known mainly from strandings. It lives in deep, temperate waters of the North Atlantic, on both the American and European sides.',
      'Sightings in the Azores and Canary Islands in the 2010s produced some of the first images and video of the species alive at sea.',
    ],
    populationStatus: [
      'Nothing is known about its global abundance or trends. The species is listed as Least Concern.',
      'Southern Hemisphere beaked whales once thought to be True’s beaked whales were described in 2021 as a separate species, Ramari’s beaked whale.',
    ],
    appearance: [
      'True’s beaked whales have a short beak, a bulging forehead and a robust body. They are dark grey to brownish above and paler below, with a dark patch around the eye.',
      'Adult males have two small teeth at the very tip of the lower jaw. Some animals have a pale area on the back behind the dorsal fin and pale flukes.',
    ],
    behaviourAndDiet: [
      'They are thought to feed on squid and deep-water fish, diving to great depths like other beaked whales.',
      'Observations from the Azores suggest they travel in small groups and may be less shy than some other beaked whales.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about their life history. Calves are probably around 2.2 metres long at birth.',
    ],
    threatsDetail: [
      'As with all beaked whales, military sonar and loud underwater noise are thought to be the main threats.',
      'Bycatch in deep-water fisheries and ingestion of marine debris may also affect them.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon mirus'),
  },

  // ---------- Beluga and narwhal ----------
  {
    slug: 'beluga',
    commonName: 'Beluga',
    alternativeNames: ['White whale', 'Sea canary'],
    scientificName: 'Delphinapterus leucas',
    authority: 'Pallas, 1776',
    category: 'Toothed whale',
    family: 'Monodontidae',
    summary:
      'The white whale of the Arctic, nicknamed the “sea canary” for its chirps, whistles and clicks. Belugas gather in their thousands in shallow estuaries in summer, and can turn their heads and change the shape of their foreheads.',
    mainImage: null,

    length: { min: 3, max: 5.5 },
    weight: { min: 500, max: 1600 },
    lifespan: { min: 60, max: 80 },
    threats: ['Sea ice loss', 'Pollution', 'Underwater noise', 'Hunting', 'Habitat loss'],
    distributionShort: 'Arctic & sub-Arctic coasts',
    oceans: ['arctic', 'north-atlantic', 'north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'US Endangered Species Act — Endangered (Cook Inlet population)', 'US Marine Mammal Protection Act'],

    about: [
      'Belugas live around the Arctic and in sub-Arctic seas such as Hudson Bay, the Sea of Okhotsk and the St Lawrence estuary in Canada. In summer many populations move into shallow bays and river mouths, where thousands may gather to feed, give birth and moult.',
      'Unlike most whales, their neck vertebrae are not fused, so they can nod and turn their heads. Their soft, fatty forehead — the melon — changes shape as they make sounds.',
    ],
    populationStatus: [
      'There are around 20 recognised populations and probably well over 150,000 belugas in total, so the species is listed as Least Concern.',
      'Some populations are in serious trouble: the Cook Inlet population in Alaska has fallen to around 300 animals and is listed as Critically Endangered, and the isolated St Lawrence population is listed as Endangered in Canada.',
    ],
    appearance: [
      'Adults are pure white, but calves are born grey and gradually lighten over several years. Belugas have no dorsal fin — just a low ridge along the back — which helps them swim under ice.',
      'The head is small and rounded, with a prominent melon and a short beak. In summer, belugas moult their outer skin, rubbing themselves on gravel in shallow water.',
    ],
    behaviourAndDiet: [
      'Belugas feed on a wide range of fish, such as Arctic cod, capelin and salmon, as well as squid, shrimp and worms, often near the seabed.',
      'They are extremely vocal and social, travelling in groups that can merge into gatherings of thousands. In winter they live among the pack ice and must find cracks and open water to breathe.',
    ],
    lifespanAndReproduction: [
      'Belugas can live for 60 years or more. Females give birth every three years or so, after a gestation of about 14–15 months, usually in early summer.',
      'Like killer whales and a few other toothed whales, female belugas go through menopause and may live for decades after their last calf.',
    ],
    threatsDetail: [
      'Loss of sea ice is opening the Arctic to more shipping, oil and gas development and noise, which can disturb belugas and mask their calls. Belugas can also be trapped by sudden freezing.',
      'Some populations carry high levels of pollutants: St Lawrence belugas have suffered unusually high rates of cancer. Subsistence hunting continues in parts of the Arctic and is managed with local communities.',
    ],
    classification: odontocete('Monodontidae', 'Delphinapterus', 'Delphinapterus leucas'),
  },
  {
    slug: 'narwhal',
    commonName: 'Narwhal',
    alternativeNames: ['Unicorn of the sea'],
    scientificName: 'Monodon monoceros',
    authority: 'Linnaeus, 1758',
    category: 'Toothed whale',
    family: 'Monodontidae',
    summary:
      'The “unicorn of the sea”. Male narwhals grow a spiralling tusk up to 3 metres long — a single tooth that pierces the upper lip. Narwhals live in the high Arctic and dive to more than 1,500 metres beneath the winter ice.',
    mainImage: null,

    length: { min: 4, max: 5.5 },
    weight: { min: 800, max: 1600 },
    lifespan: { min: 50, max: 100 },
    threats: ['Sea ice loss', 'Underwater noise', 'Ship strikes', 'Hunting', 'Climate change'],
    distributionShort: 'High Arctic',
    oceans: ['arctic', 'north-atlantic'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'Narwhals live farther north than almost any other whale, mainly in the Canadian Arctic, around Greenland and in the Svalbard–Franz Josef Land region. They spend the winter in dense pack ice in Baffin Bay and Davis Strait.',
      'The tusk is an elongated left canine that spirals anticlockwise. It grows in most males and in a small proportion of females, and a few animals grow two. Drone footage has shown narwhals using it to tap and stun Arctic cod, and it probably also plays a role in competition between males.',
    ],
    populationStatus: [
      'There are probably well over 100,000 narwhals, most of them in Baffin Bay, and the species is listed as Least Concern.',
      'Narwhals are hunted for food and ivory by Inuit communities in Canada and Greenland, under quotas. Some small populations, such as those in East Greenland, are of concern.',
    ],
    appearance: [
      'Narwhals are mottled grey and black, becoming paler with age, and have no dorsal fin. The head is rounded, with a small mouth and no other functional teeth.',
      'The tusk can reach about 3 metres in length and is not used for feeding in the way a tooth normally is. The flukes of adults curve forward at the tips, as if they were on backwards.',
    ],
    behaviourAndDiet: [
      'In winter, narwhals make some of the deepest dives of any marine mammal, regularly reaching 800–1,500 metres to feed on Greenland halibut, Arctic cod, squid and shrimp. They eat little in summer.',
      'They travel in groups of a few to dozens of animals, gathering in hundreds or thousands during migration. They are very sensitive to disturbance and noise.',
    ],
    lifespanAndReproduction: [
      'Narwhals can live for 50 years or more, and some studies suggest a few reach about 100. Females give birth every three years after a gestation of about 15 months.',
      'Calves are born in summer, about 1.5 metres long, and nurse for more than a year. Female narwhals, like belugas, are thought to go through menopause.',
    ],
    threatsDetail: [
      'Narwhals are considered among the Arctic mammals most sensitive to climate change, because they depend on predictable sea ice and have a narrow diet and range.',
      'Increasing shipping, seismic surveys and mining in the Arctic bring noise and disturbance, and more open water may allow killer whales to hunt them more often.',
    ],
    classification: odontocete('Monodontidae', 'Monodon', 'Monodon monoceros'),
  },

  // ---------- More beaked whales ----------
  {
    slug: 'bairds-beaked-whale',
    commonName: 'Baird’s beaked whale',
    alternativeNames: ['Giant beaked whale', 'Northern giant bottlenose whale'],
    scientificName: 'Berardius bairdii',
    authority: 'Stejneger, 1883',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'The largest beaked whale, reaching up to 13 metres. Baird’s beaked whales live in the deep, cold waters of the North Pacific, and unusually, males tend to outlive females.',
    mainImage: noaaImage('bairds-beaked-whale', 'Illustration of a Baird’s beaked whale: a long grey whale with a bulging forehead and a tube-like beak'),

    length: { min: 10, max: 13 },
    weight: { min: 8000, max: 14000 },
    lifespan: { min: 50, max: 84 },
    threats: ['Hunting', 'Military sonar', 'Underwater noise', 'Bycatch'],
    distributionShort: 'Deep, cold North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix I', 'US Marine Mammal Protection Act'],

    about: [
      'Baird’s beaked whales live in deep waters of the North Pacific, from Japan and the Sea of Okhotsk to the Bering Sea and California. They are found mostly over the continental slope, seamounts and submarine canyons.',
      'Unlike most beaked whales, both males and females have teeth that erupt from the jaw: two pairs at the tip of the lower jaw, which become worn and covered in barnacles in older animals.',
    ],
    populationStatus: [
      'Population size is not well known, but surveys suggest several thousand off Japan and in the eastern North Pacific. The species is listed as Least Concern.',
      'It is still hunted in small numbers off Japan under a national quota, one of the few beaked whales taken commercially today.',
    ],
    appearance: [
      'Baird’s beaked whales are long and slate grey to brown, with a bulging forehead, a long, tube-like beak and a small, rounded dorsal fin far back on the body.',
      'Adults are covered in long, pale scars from the teeth of other Baird’s beaked whales, as well as oval scars from cookie-cutter sharks.',
    ],
    behaviourAndDiet: [
      'They feed on deep-water fish and squid, making long dives — often over an hour — to depths of 1,000 metres or more.',
      'They live in tight groups of 5–20 animals that surface and blow together, then dive at the same time.',
    ],
    lifespanAndReproduction: [
      'Males can live for more than 80 years, while females rarely exceed about 55 — the opposite of most mammals. Why males live longer is not known.',
      'Gestation is thought to last around 17 months, one of the longest of any whale.',
    ],
    threatsDetail: [
      'Hunting off Japan, military sonar and other loud noise sources are the main known threats.',
      'Occasional bycatch in fisheries and ingestion of debris also occur.',
    ],
    classification: odontocete('Ziphiidae', 'Berardius', 'Berardius bairdii'),
  },
  {
    slug: 'arnouxs-beaked-whale',
    commonName: 'Arnoux’s beaked whale',
    alternativeNames: ['Southern four-toothed whale'],
    scientificName: 'Berardius arnuxii',
    authority: 'Duvernoy, 1851',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A large, little-known beaked whale of the Southern Ocean, sometimes seen in open leads among the Antarctic pack ice. It is the southern counterpart of Baird’s beaked whale.',
    mainImage: null,

    length: { min: 8, max: 9.8 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise', 'Climate change'],
    distributionShort: 'Southern Ocean & cool Southern Hemisphere',
    oceans: ['southern', 'south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I'],
    legalProtection: ['CITES — Appendix I'],

    about: [
      'Arnoux’s beaked whale lives in cold waters of the Southern Hemisphere, from the edge of the Antarctic ice north to about 34°S. Most records come from strandings in New Zealand, South Africa, Argentina and the Falkland Islands.',
      'It is very similar to Baird’s beaked whale of the North Pacific, and the two are sometimes considered close enough to be a single species.',
    ],
    populationStatus: [
      'There are no population estimates. The species is listed as Least Concern because it is widespread and faces few known threats, but it is rarely seen.',
    ],
    appearance: [
      'Arnoux’s beaked whales are long and grey-brown, with a bulging forehead, a long beak and a small dorsal fin set far back. Both sexes have two pairs of teeth at the tip of the lower jaw.',
      'Adults are heavily scarred, from fights with each other and bites from cookie-cutter sharks.',
    ],
    behaviourAndDiet: [
      'They are thought to feed on deep-water squid and fish, diving for an hour or more.',
      'They have been seen in groups of up to 50 animals, sometimes in narrow channels in the Antarctic sea ice.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about their life history.',
    ],
    threatsDetail: [
      'No major threats are known. Like other beaked whales, they are likely to be sensitive to loud underwater noise, and changes in the Southern Ocean may affect their prey.',
    ],
    classification: odontocete('Ziphiidae', 'Berardius', 'Berardius arnuxii'),
  },
  {
    slug: 'satos-beaked-whale',
    commonName: 'Sato’s beaked whale',
    alternativeNames: ['Karasu', 'Black Baird’s beaked whale'],
    scientificName: 'Berardius minimus',
    authority: 'Yamada et al., 2019',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A small, dark beaked whale described as a new species in 2019. Japanese whalers had long spoken of a black “karasu” (“crow”) whale, but scientists only confirmed it from stranded animals and DNA.',
    mainImage: null,

    length: { min: 6, max: 7 },
    weight: null,
    lifespan: null,
    threats: ['Bycatch', 'Underwater noise'],
    distributionShort: 'North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I'],
    legalProtection: ['CITES — Appendix I'],

    about: [
      'Sato’s beaked whale lives in the North Pacific, with most records from Hokkaido in northern Japan and from the Aleutian Islands in Alaska.',
      'Fishers and whalers in northern Japan had described a small, black whale for decades. DNA from stranded and museum specimens confirmed in 2016 that it was distinct from Baird’s beaked whale, and it was formally named in 2019.',
    ],
    populationStatus: [
      'Nothing is known about its abundance. It is one of the most recently described whales, and almost all information comes from a handful of specimens.',
    ],
    appearance: [
      'Sato’s beaked whales are noticeably smaller than Baird’s beaked whales, with a shorter beak and very dark, almost black skin.',
      'Like other Berardius whales, they have teeth at the tip of the lower jaw, but they carry fewer scars than Baird’s beaked whales.',
    ],
    behaviourAndDiet: [
      'Their behaviour has hardly ever been observed. They are presumed to dive deep for squid and fish, like other beaked whales.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about their reproduction or lifespan.',
    ],
    threatsDetail: [
      'Threats are unknown, but bycatch and noise affect other beaked whales in the same waters.',
    ],
    classification: odontocete('Ziphiidae', 'Berardius', 'Berardius minimus'),
  },
  {
    slug: 'southern-bottlenose-whale',
    commonName: 'Southern bottlenose whale',
    alternativeNames: ['Flat-headed bottlenose whale'],
    scientificName: 'Hyperoodon planifrons',
    authority: 'Flower, 1882',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'Probably the most abundant beaked whale of Antarctic waters. Southern bottlenose whales have a bulging forehead and a short beak, and dive deep for squid near the edge of the ice.',
    mainImage: null,

    length: { min: 6, max: 7.5 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise', 'Climate change', 'Plastic ingestion'],
    distributionShort: 'Southern Ocean & cool Southern Hemisphere',
    oceans: ['southern', 'south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I'],
    legalProtection: ['CITES — Appendix I'],

    about: [
      'The southern bottlenose whale lives in deep, cold waters of the Southern Hemisphere, from the Antarctic ice edge to about 30°S. It is the southern counterpart of the northern bottlenose whale.',
      'It is one of the beaked whales most often seen during research cruises in the Antarctic.',
    ],
    populationStatus: [
      'Surveys in the 1980s and 1990s suggested that hundreds of thousands of beaked whales live south of the Antarctic Convergence, most of them probably southern bottlenose whales.',
      'The species was never hunted commercially on a large scale and is listed as Least Concern.',
    ],
    appearance: [
      'Southern bottlenose whales are robust, with a steep, bulbous forehead that becomes flattened and pale in older males, and a short, dolphin-like beak.',
      'They are brownish to grey, often paler on the head and belly, with a small, hooked dorsal fin set well back.',
    ],
    behaviourAndDiet: [
      'They feed mainly on deep-water squid, diving for up to an hour or more.',
      'They are usually seen in small groups of up to 10 animals, often near the ice edge or in open leads.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history, which is probably similar to that of the northern bottlenose whale.',
    ],
    threatsDetail: [
      'Few threats are known. Like all beaked whales, they are likely to be sensitive to loud noise, and plastic has been found in stranded animals.',
    ],
    classification: odontocete('Ziphiidae', 'Hyperoodon', 'Hyperoodon planifrons'),
  },
  {
    slug: 'longmans-beaked-whale',
    commonName: 'Longman’s beaked whale',
    alternativeNames: ['Tropical bottlenose whale', 'Indo-Pacific beaked whale'],
    scientificName: 'Indopacetus pacificus',
    authority: 'Longman, 1926',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'For decades known only from two weathered skulls, Longman’s beaked whale turned out to be the mysterious “tropical bottlenose whale” seen by observers in the Indian and Pacific oceans.',
    mainImage: null,

    length: { min: 6, max: 7.5 },
    weight: null,
    lifespan: null,
    threats: ['Military sonar', 'Underwater noise', 'Bycatch'],
    distributionShort: 'Tropical Indo-Pacific',
    oceans: ['indian', 'north-pacific', 'south-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Longman’s beaked whale was described in 1926 from a skull found in Queensland, Australia. A second skull came from Somalia, and for most of the 20th century nothing more was known.',
      'From the 1960s, observers in the tropical Indian and Pacific oceans reported a large beaked whale they called the “tropical bottlenose whale”. In 2003, specimens confirmed that these were Longman’s beaked whales.',
    ],
    populationStatus: [
      'Surveys around Hawaii and in the eastern tropical Pacific suggest the species is widespread but uncommon. It is listed as Least Concern.',
    ],
    appearance: [
      'Longman’s beaked whales are robust, with a bulbous forehead and a moderately long beak. They are greyish-brown, often with a paler head, and have a prominent, curved dorsal fin.',
      'Adult males have a pair of teeth at the tip of the lower jaw.',
    ],
    behaviourAndDiet: [
      'They are thought to feed on deep-water squid and fish.',
      'Unusually for beaked whales, they often travel in large, tightly packed groups of 15–100 animals, sometimes together with short-finned pilot whales or bottlenose dolphins.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about their life history.',
    ],
    threatsDetail: [
      'Like other beaked whales, they are probably vulnerable to military sonar and other loud noise. Bycatch has been recorded in some tropical fisheries.',
    ],
    classification: odontocete('Ziphiidae', 'Indopacetus', 'Indopacetus pacificus'),
  },
  {
    slug: 'andrews-beaked-whale',
    commonName: 'Andrews’ beaked whale',
    alternativeNames: ['Splay-toothed beaked whale'],
    scientificName: 'Mesoplodon bowdoini',
    authority: 'Andrews, 1908',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A beaked whale of cool southern waters known almost entirely from animals washed up on beaches. It has rarely, if ever, been confidently identified alive at sea.',
    mainImage: null,

    length: { min: 4, max: 4.7 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise', 'Bycatch'],
    distributionShort: 'Temperate Southern Hemisphere',
    oceans: ['south-pacific', 'indian', 'south-atlantic'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Andrews’ beaked whale is known from a few dozen strandings, mostly in southern Australia and New Zealand, with others from sub-Antarctic islands and the South Atlantic.',
      'It was described in 1908 by Roy Chapman Andrews, the American naturalist later famous for finding dinosaur eggs in Mongolia.',
    ],
    populationStatus: [
      'Nothing is known about its abundance, and it is listed as Data Deficient.',
    ],
    appearance: [
      'Andrews’ beaked whales are dark bluish-black, with a short, white-tipped beak.',
      'Adult males have a pair of large, broad teeth that splay outwards from a raised arch midway along the lower jaw.',
    ],
    behaviourAndDiet: [
      'Its behaviour at sea is unknown. Like other Mesoplodon whales, it probably feeds on squid and fish at depth.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about its reproduction or lifespan.',
    ],
    threatsDetail: [
      'No specific threats are known, but it is likely to share the sensitivity of other beaked whales to loud underwater noise.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon bowdoini'),
  },
  {
    slug: 'hubbs-beaked-whale',
    commonName: 'Hubbs’ beaked whale',
    alternativeNames: ['Arch-beaked whale'],
    scientificName: 'Mesoplodon carlhubbsi',
    authority: 'Moore, 1963',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A beaked whale of the temperate North Pacific. Adult males are unmistakable, with a white “cap” on the forehead, a white beak and a body criss-crossed with pale scars.',
    mainImage: null,

    length: { min: 4.8, max: 5.4 },
    weight: { min: 1000, max: 1500 },
    lifespan: null,
    threats: ['Bycatch', 'Military sonar', 'Underwater noise'],
    distributionShort: 'Temperate North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'Hubbs’ beaked whale lives in deep, temperate waters of the North Pacific, from Japan to British Columbia and California. It is known mainly from strandings and from animals caught in drift nets.',
      'It is named after the American ichthyologist Carl Hubbs, who collected the first specimen in California in 1945.',
    ],
    populationStatus: [
      'There are no population estimates, and it is listed as Data Deficient.',
    ],
    appearance: [
      'Adult males are dark grey to black, with a raised white “cap” in front of the blowhole, a white beak and a pair of large, flattened teeth rising from an arch in the lower jaw.',
      'Their bodies are covered in long, white scars from fights with other males. Females and young are greyer and less scarred.',
    ],
    behaviourAndDiet: [
      'They are thought to feed on deep-water squid and fish. Behaviour at sea is very poorly known.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history. Calves are about 2.5 metres long at birth.',
    ],
    threatsDetail: [
      'Some have been killed in high-seas drift nets, and like other beaked whales they are probably vulnerable to military sonar.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon carlhubbsi'),
  },
  {
    slug: 'ramaris-beaked-whale',
    commonName: 'Ramari’s beaked whale',
    alternativeNames: [],
    scientificName: 'Mesoplodon eueu',
    authority: 'Carroll et al., 2021',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A beaked whale of the Southern Hemisphere described in 2021, after scientists found that animals once thought to be True’s beaked whales were a separate species. It honours Ramari Stewart, a Māori expert on whales.',
    mainImage: null,

    length: { min: 4.5, max: 5.3 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise', 'Bycatch'],
    distributionShort: 'Temperate Southern Hemisphere',
    oceans: ['south-pacific', 'indian', 'south-atlantic'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Ramari’s beaked whale is known from strandings in New Zealand, southern Australia, South Africa and South America. Genetic and skull studies published in 2021 showed that these Southern Hemisphere animals differ from True’s beaked whales of the North Atlantic.',
      'Its scientific name, eueu, comes from the Māori language, and its common name honours Ramari Stewart, who helped recover and study a stranded specimen in New Zealand.',
    ],
    populationStatus: [
      'Nothing is known about its abundance or trends.',
    ],
    appearance: [
      'Ramari’s beaked whales are robust and mid-sized for the genus, with a short beak. Adult males have two small teeth at the very tip of the lower jaw.',
      'They are dark grey above and paler below. They differ from True’s beaked whales in details of the skull and in colouring.',
    ],
    behaviourAndDiet: [
      'Its behaviour at sea is almost unknown. It is presumed to feed on squid and fish in deep water.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about its reproduction or lifespan.',
    ],
    threatsDetail: [
      'No specific threats are known, but like other beaked whales it is probably sensitive to loud underwater noise.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon eueu'),
  },
  {
    slug: 'ginkgo-toothed-beaked-whale',
    commonName: 'Ginkgo-toothed beaked whale',
    alternativeNames: [],
    scientificName: 'Mesoplodon ginkgodens',
    authority: 'Nishiwaki & Kamiya, 1958',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A rarely seen beaked whale of the tropical Indo-Pacific, named for the male’s two teeth, which are shaped like the leaves of the ginkgo tree.',
    mainImage: null,

    length: { min: 4.7, max: 5.3 },
    weight: null,
    lifespan: null,
    threats: ['Bycatch', 'Underwater noise'],
    distributionShort: 'Tropical Indo-Pacific',
    oceans: ['north-pacific', 'south-pacific', 'indian'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The ginkgo-toothed beaked whale is known from strandings and bycatch in warm waters of the Pacific and Indian oceans, especially around Japan and Taiwan.',
      'It has rarely, if ever, been confidently identified alive at sea.',
    ],
    populationStatus: [
      'Nothing is known about its abundance, and it is listed as Data Deficient.',
    ],
    appearance: [
      'Adult males are dark grey with pale spots, and lack the heavy scarring of many other beaked whales. Their two teeth, set midway along the lower jaw, are broad and flattened like a ginkgo leaf.',
    ],
    behaviourAndDiet: [
      'Its behaviour is unknown. It probably feeds on squid and fish in deep water.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about its reproduction or lifespan.',
    ],
    threatsDetail: [
      'It is occasionally caught in fishing gear in Asian waters. Like other beaked whales it may be sensitive to loud noise.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon ginkgodens'),
  },
  {
    slug: 'grays-beaked-whale',
    commonName: 'Gray’s beaked whale',
    alternativeNames: ['Scamperdown whale'],
    scientificName: 'Mesoplodon grayi',
    authority: 'von Haast, 1876',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A slender beaked whale of the cool Southern Hemisphere with a long, white beak lined with small teeth. It is one of the beaked whales most often found stranded in New Zealand.',
    mainImage: null,

    length: { min: 4.5, max: 5.6 },
    weight: { min: 1000, max: 1100 },
    lifespan: null,
    threats: ['Underwater noise', 'Bycatch'],
    distributionShort: 'Temperate Southern Hemisphere',
    oceans: ['south-atlantic', 'south-pacific', 'indian', 'southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Gray’s beaked whale lives in temperate and sub-Antarctic waters of the Southern Hemisphere, with most records from New Zealand, Australia, South Africa and southern South America.',
      'It is one of the more frequently stranded beaked whales, sometimes in groups, which suggests it may be fairly common offshore.',
    ],
    populationStatus: [
      'There are no population estimates, but the frequency of strandings suggests it is not rare. It is listed as Least Concern.',
    ],
    appearance: [
      'Gray’s beaked whales are slender, with a long, narrow beak that is white in adults and a small, curved dorsal fin. The body is dark grey above and paler below.',
      'Besides the two triangular teeth of adult males, they have a row of tiny teeth in the upper jaw — unusual for a beaked whale.',
    ],
    behaviourAndDiet: [
      'They probably feed on deep-water squid and fish. At sea they are sometimes seen raising their long beaks out of the water as they surface.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history. Calves are about 2.1 metres long at birth.',
    ],
    threatsDetail: [
      'No major threats are known, but like other beaked whales they may be affected by loud underwater noise.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon grayi'),
  },
  {
    slug: 'hectors-beaked-whale',
    commonName: 'Hector’s beaked whale',
    alternativeNames: [],
    scientificName: 'Mesoplodon hectori',
    authority: 'Gray, 1871',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'One of the smallest beaked whales, known from a few dozen strandings in the cool waters of the Southern Hemisphere.',
    mainImage: null,

    length: { min: 4, max: 4.5 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise', 'Bycatch'],
    distributionShort: 'Temperate Southern Hemisphere',
    oceans: ['south-pacific', 'south-atlantic', 'indian'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Hector’s beaked whale is known from strandings in New Zealand, Tasmania, South Africa, Argentina, Chile and the Falkland Islands. It is named after the New Zealand scientist James Hector.',
      'Specimens from California once attributed to this species were shown in 2002 to belong to a new species, Perrin’s beaked whale.',
    ],
    populationStatus: [
      'Nothing is known about its abundance, and it is listed as Data Deficient.',
    ],
    appearance: [
      'Hector’s beaked whales are small and dark grey-brown, with a short beak. Adult males have a pair of flattened, triangular teeth near the tip of the lower jaw.',
    ],
    behaviourAndDiet: [
      'Its behaviour at sea is almost unknown. It probably feeds on squid and fish.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about its reproduction or lifespan.',
    ],
    threatsDetail: [
      'No specific threats are known.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon hectori'),
  },
  {
    slug: 'deraniyagalas-beaked-whale',
    commonName: 'Deraniyagala’s beaked whale',
    alternativeNames: [],
    scientificName: 'Mesoplodon hotaula',
    authority: 'Deraniyagala, 1963',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A tropical beaked whale first described from Sri Lanka in 1963, later dismissed, and then recognised again as a valid species in 2014 thanks to DNA.',
    mainImage: null,

    length: { min: 4.3, max: 4.9 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise', 'Bycatch'],
    distributionShort: 'Tropical Indo-Pacific',
    oceans: ['indian', 'north-pacific', 'south-pacific'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Deraniyagala’s beaked whale is known from a handful of specimens from Sri Lanka, the Maldives and islands of the central Pacific such as Palmyra Atoll and Kiribati.',
      'It was named by the Sri Lankan zoologist Paulus Deraniyagala in 1963, but later treated as a ginkgo-toothed beaked whale until genetic work in 2014 showed it to be distinct.',
    ],
    populationStatus: [
      'Nothing is known about its abundance.',
    ],
    appearance: [
      'It resembles the ginkgo-toothed beaked whale, with a moderately long beak and, in adult males, a pair of broad teeth in the lower jaw.',
    ],
    behaviourAndDiet: [
      'Its behaviour at sea is unknown.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about its reproduction or lifespan.',
    ],
    threatsDetail: [
      'No specific threats are known.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon hotaula'),
  },
  {
    slug: 'strap-toothed-beaked-whale',
    commonName: 'Strap-toothed beaked whale',
    alternativeNames: ['Layard’s beaked whale'],
    scientificName: 'Mesoplodon layardii',
    authority: 'Gray, 1865',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'The largest of the Mesoplodon beaked whales. In adult males, two strap-like teeth grow up and over the upper jaw, until the whale can open its mouth only a few centimetres.',
    mainImage: null,

    length: { min: 5, max: 6.2 },
    weight: { min: 1000, max: 1300 },
    lifespan: null,
    threats: ['Underwater noise', 'Plastic ingestion'],
    distributionShort: 'Cool Southern Hemisphere',
    oceans: ['south-atlantic', 'south-pacific', 'indian', 'southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The strap-toothed beaked whale lives in cool temperate and sub-Antarctic waters all around the Southern Hemisphere. It is one of the beaked whales most often found stranded in Australia and New Zealand.',
      'Its most famous feature is the male’s pair of long, curving teeth, which grow from the lower jaw and wrap over the beak like straps.',
    ],
    populationStatus: [
      'There are no population estimates, but it seems to be fairly common. It is listed as Least Concern.',
    ],
    appearance: [
      'Strap-toothed beaked whales have a striking black, white and grey pattern: a dark face mask and flippers, a pale throat and a pale “cape” over the back.',
      'In males, the teeth can grow so long that they cross over the upper jaw and limit how wide the mouth opens. Even so, these males feed successfully, probably by sucking in prey.',
    ],
    behaviourAndDiet: [
      'They feed on deep-water squid, using suction. They are shy and rarely approach boats.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history. Calves are about 2.2 metres long at birth.',
    ],
    threatsDetail: [
      'No major threats are known. Plastic has been found in stranded animals, and like other beaked whales they are likely sensitive to loud noise.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon layardii'),
  },
  {
    slug: 'perrins-beaked-whale',
    commonName: 'Perrin’s beaked whale',
    alternativeNames: [],
    scientificName: 'Mesoplodon perrini',
    authority: 'Dalebout, Mead, Baker, Baker & van Helden, 2002',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A beaked whale described in 2002 from a few animals stranded in California, identified using DNA. It has never been confidently identified alive at sea.',
    mainImage: null,

    length: { min: 3.9, max: 4.4 },
    weight: null,
    lifespan: null,
    threats: ['Military sonar', 'Underwater noise'],
    distributionShort: 'Eastern North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'Perrin’s beaked whale is known only from a small number of strandings on the coast of California. The first specimens had been identified as Hector’s beaked whales until DNA studies showed them to be a new species.',
      'It is named after William Perrin, a leading American cetologist.',
    ],
    populationStatus: [
      'Nothing is known about its abundance or range beyond California.',
    ],
    appearance: [
      'It is a small beaked whale, dark grey above and paler below. Adult males have a pair of triangular teeth near the tip of the lower jaw.',
    ],
    behaviourAndDiet: [
      'Its behaviour at sea is unknown. Its stomach contents suggest it feeds on squid.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about its reproduction or lifespan.',
    ],
    threatsDetail: [
      'No specific threats are known, but naval sonar exercises off California could affect it, as they do other beaked whales.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon perrini'),
  },
  {
    slug: 'pygmy-beaked-whale',
    commonName: 'Pygmy beaked whale',
    alternativeNames: ['Peruvian beaked whale', 'Lesser beaked whale'],
    scientificName: 'Mesoplodon peruvianus',
    authority: 'Reyes, Mead & Van Waerebeek, 1991',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'The smallest beaked whale, rarely more than 4 metres long. It was described in 1991 from animals caught in fishing nets off Peru.',
    mainImage: null,

    length: { min: 3.4, max: 3.9 },
    weight: null,
    lifespan: null,
    threats: ['Bycatch', 'Underwater noise'],
    distributionShort: 'Tropical eastern Pacific',
    oceans: ['north-pacific', 'south-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The pygmy beaked whale lives in the tropical and subtropical eastern Pacific, from the Gulf of California to Peru and Chile. Most early specimens came from gillnet fisheries in Peru.',
      'Sightings in the eastern tropical Pacific suggest that some of the small beaked whales reported there belong to this species.',
    ],
    populationStatus: [
      'There are no population estimates. It is listed as Least Concern, but bycatch in coastal fisheries is a concern.',
    ],
    appearance: [
      'It is a small, spindle-shaped beaked whale with a short beak. Adult males are dark grey with a pale band across the back, and have two small teeth near the tip of the lower jaw.',
    ],
    behaviourAndDiet: [
      'It probably feeds on mid-water fish and squid.',
    ],
    lifespanAndReproduction: [
      'Little is known. Calves are about 1.6 metres long at birth.',
    ],
    threatsDetail: [
      'Bycatch in gillnets, especially off Peru, is the main known threat.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon peruvianus'),
  },
  {
    slug: 'stejnegers-beaked-whale',
    commonName: 'Stejneger’s beaked whale',
    alternativeNames: ['Bering Sea beaked whale', 'Sabre-toothed whale'],
    scientificName: 'Mesoplodon stejnegeri',
    authority: 'True, 1885',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'A beaked whale of the cold northern North Pacific, from the Sea of Japan to the Bering Sea. Males have two large, tusk-like teeth that stick out from the lower jaw.',
    mainImage: noaaImage('stejnegers-beaked-whale', 'Illustration of a Stejneger’s beaked whale: a dark, scarred whale with a short beak'),

    length: { min: 5, max: 5.7 },
    weight: { min: 1000, max: 1600 },
    lifespan: null,
    threats: ['Bycatch', 'Military sonar', 'Underwater noise'],
    distributionShort: 'Cold North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'Stejneger’s beaked whale lives in deep, cold waters of the North Pacific. Most records come from strandings in the Aleutian Islands of Alaska and along the coast of the Sea of Japan.',
      'It is named after the Norwegian-American naturalist Leonhard Stejneger, who collected the first skull on Bering Island in 1883.',
    ],
    populationStatus: [
      'There are no population estimates. Animals have been caught in Japanese drift-net fisheries, and the species is listed as Near Threatened.',
    ],
    appearance: [
      'Stejneger’s beaked whales are dark grey to black, with a pale throat. Adult males have a pair of large, flattened teeth that rise from an arch in the lower jaw and point slightly forward.',
    ],
    behaviourAndDiet: [
      'They feed on deep-water squid. They are usually seen in groups of 3–15 that surface and dive together.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history.',
    ],
    threatsDetail: [
      'Bycatch in drift nets and other fishing gear is the main known threat. Military sonar and other loud noise may also affect them.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon stejnegeri'),
  },
  {
    slug: 'spade-toothed-whale',
    commonName: 'Spade-toothed whale',
    alternativeNames: ['Spade-toothed beaked whale', 'Travers’ beaked whale'],
    scientificName: 'Mesoplodon traversii',
    authority: 'Gray, 1874',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'Perhaps the rarest whale known to science. It has never been seen alive, and for over a century it was known only from a jawbone and two skulls — until a mother and calf stranded in New Zealand in 2010.',
    mainImage: null,

    length: { min: 5, max: 5.5 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise'],
    distributionShort: 'South Pacific',
    oceans: ['south-pacific'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The spade-toothed whale was described in 1874 from a jawbone found on the Chatham Islands of New Zealand. Two more skulls were found in the 1950s and 1980s, in New Zealand and Chile.',
      'In 2010, a mother and her male calf stranded on a beach in New Zealand. They were first thought to be Gray’s beaked whales, until DNA analysis in 2012 revealed what they really were — the first complete specimens ever found.',
    ],
    populationStatus: [
      'Nothing is known about its abundance. Its range is presumed to be the deep waters of the South Pacific.',
    ],
    appearance: [
      'The stranded animals were dark grey above and white below, with a dark eye patch and a short, white beak. Adult males are thought to have a pair of broad, spade-shaped teeth.',
    ],
    behaviourAndDiet: [
      'It has never been confidently observed at sea, so its behaviour is completely unknown.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about its reproduction or lifespan.',
    ],
    threatsDetail: [
      'No threats are known. Like other beaked whales, it may be vulnerable to loud underwater noise.',
    ],
    classification: odontocete('Ziphiidae', 'Mesoplodon', 'Mesoplodon traversii'),
  },
  {
    slug: 'shepherds-beaked-whale',
    commonName: 'Shepherd’s beaked whale',
    alternativeNames: ['Tasman beaked whale'],
    scientificName: 'Tasmacetus shepherdi',
    authority: 'Oliver, 1937',
    category: 'Toothed whale',
    family: 'Ziphiidae',
    summary:
      'The only beaked whale with a full set of functional teeth — dozens in each jaw. Shepherd’s beaked whale lives in cool southern waters and was first filmed alive only in the 2010s.',
    mainImage: null,

    length: { min: 6, max: 7 },
    weight: null,
    lifespan: null,
    threats: ['Underwater noise'],
    distributionShort: 'Cool Southern Hemisphere',
    oceans: ['south-atlantic', 'south-pacific', 'indian', 'southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Shepherd’s beaked whale lives in cool temperate waters of the Southern Hemisphere. Most records are strandings in New Zealand, with others from Argentina, Chile, the Juan Fernández Islands and Tristan da Cunha.',
      'In the 2010s, researchers documented groups at sea off New Zealand, southern Australia and Tristan da Cunha, giving the first good look at living animals.',
    ],
    populationStatus: [
      'There are no population estimates, and the species is rarely seen.',
    ],
    appearance: [
      'Shepherd’s beaked whales have a long, pointed beak and a striking pattern: dark grey above, with pale flanks and belly and a pale band sweeping up behind the flippers.',
      'Unlike all other beaked whales, they have many small, functional teeth in both jaws, as well as a pair of larger teeth at the tip of the lower jaw in males.',
    ],
    behaviourAndDiet: [
      'Stomach contents suggest they feed on fish more than other beaked whales do, as well as squid and crabs.',
      'Groups of up to about 10 animals have been seen surfacing together.',
    ],
    lifespanAndReproduction: [
      'Nothing is known about their reproduction or lifespan.',
    ],
    threatsDetail: [
      'No specific threats are known.',
    ],
    classification: odontocete('Ziphiidae', 'Tasmacetus', 'Tasmacetus shepherdi'),
  },
]
