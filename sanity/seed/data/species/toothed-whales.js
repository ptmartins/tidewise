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
      'The largest toothed predator on Earth and the iconic whale of the Azores. Family groups live around the islands all year, diving to over 1,000 metres to hunt giant squid in the dark.',
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

    about: [
      'The sperm whale is the largest toothed whale and has the biggest brain of any animal. Its enormous square head contains the spermaceti organ, a waxy reservoir thought to help produce and focus its powerful echolocation clicks.',
      'Sperm whales live in deep waters worldwide. The Azores are one of the best places on Earth to see them: family groups of females and young are present year-round, while large adult males visit from higher latitudes.',
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
      'A small, shy whale with a shark-like head and a “false gill” marking. Rarely seen at sea, pygmy sperm whales are known in Portugal mainly from strandings on the mainland and islands.',
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

    about: [
      'Despite its name, the pygmy sperm whale is only distantly related to the sperm whale. It is a small, robust whale that lives in deep waters beyond the continental shelf in temperate and tropical seas.',
      'It is one of the least-known cetaceans. Most of what we know comes from stranded animals, including several records on the Portuguese mainland, the Azores and Madeira.',
    ],
    populationStatus: [
      'There are no reliable estimates of global abundance. The species is listed as Least Concern, but this reflects its wide range more than any detailed knowledge of population trends.',
      'In Portugal, the species is considered rare, though its inconspicuous behaviour means it is almost certainly under-recorded at sea.',
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
      'One of the smallest whales in the world, barely larger than many dolphins. Dwarf sperm whales are rarely recorded in Portugal, mostly from strandings and occasional sightings around Madeira and the Azores.',
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

    about: [
      'The dwarf sperm whale is the smallest of the “whales”, reaching less than 3 metres in length. It is very similar to its close relative, the pygmy sperm whale, and the two are hard to tell apart at sea.',
      'It prefers warm, deep waters over the continental slope. Portugal lies near the northern edge of its range in the eastern Atlantic, and records are few.',
    ],
    populationStatus: [
      'There are no global population estimates. The species is listed as Least Concern, but its status in the eastern North Atlantic is essentially unknown.',
      'Because it is so inconspicuous, it is probably more common in deep Portuguese waters than sightings suggest.',
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
      'The record-holder for the deepest and longest dives of any mammal. Cuvier’s beaked whales live over deep canyons and seamounts, and are regularly seen around the Azores and Madeira.',
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

    about: [
      'Cuvier’s beaked whale is the most widespread beaked whale, found in deep waters of all oceans except the polar seas. It holds the mammal record for diving depth (almost 3,000 metres) and breath-holding (over 3.5 hours).',
      'In Portugal, it occurs over the steep slopes and canyons off the mainland and is seen fairly regularly around the Azores and Madeira, where long-term studies of its behaviour are underway.',
    ],
    populationStatus: [
      'The species is listed as Least Concern globally. Abundance in the North Atlantic is not well known, but it is one of the most frequently recorded beaked whales in Portuguese waters.',
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
      'A large, curious beaked whale of the deep North Atlantic, with a bulbous forehead and a short beak. It visits the Azores and occasionally strands on the Portuguese coast.',
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

    about: [
      'The northern bottlenose whale is one of the largest beaked whales, living in deep waters of the North Atlantic from the Arctic to around the latitude of the Azores and Iberia.',
      'It is known for its curiosity, often approaching stationary boats — a trait that made it easy prey for whalers. In Portugal it is mostly seen around the Azores, with occasional strandings on the mainland.',
    ],
    populationStatus: [
      'Tens of thousands were killed by Norwegian and Canadian whalers in the 19th and 20th centuries. The species is listed as Near Threatened, and current abundance across much of its range is uncertain.',
      'Records in Portuguese waters are rare and probably represent animals at the southern edge of the species’ range.',
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
      'The first beaked whale ever described to science, and one of the most northerly. In Portugal, Sowerby’s beaked whales have been recorded around the Azores and as occasional strandings.',
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

    about: [
      'Sowerby’s beaked whale was described in 1804 from an animal stranded in Scotland, making it the first beaked whale known to science. It lives in deep, cool waters of the North Atlantic.',
      'The Azores lie near the southern limit of its range, and there are a small number of sightings and strandings from the archipelago and the mainland.',
    ],
    populationStatus: [
      'There are no reliable population estimates. The species is listed as Least Concern globally, but it is poorly known and difficult to survey.',
      'In Portugal it is considered rare, and every record contributes valuable information about its distribution.',
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
      'Named for its incredibly dense jawbone, the densest bone known in the animal kingdom. Blainville’s beaked whales live in warm, deep waters and are regularly recorded around Madeira and the Azores.',
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

    about: [
      'Blainville’s beaked whale is one of the most widespread species in the genus Mesoplodon, found in deep tropical and warm temperate waters worldwide.',
      'Its scientific name, densirostris, means “dense beak”: its jawbone is the densest bone ever measured. In Portugal it is seen mainly around Madeira and the Azores.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but there are few population estimates. Studies in the Canary Islands and Bahamas have found small, resident populations.',
      'Its status in Portuguese waters is unknown, though it is one of the more frequently recorded beaked whales around Madeira.',
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
      'A beaked whale of the warm Atlantic, despite its scientific name meaning “European”. Gervais’ beaked whales are recorded around Madeira and the Azores, mostly from sightings of small groups.',
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

    about: [
      'Gervais’ beaked whale lives in deep, warm waters of the Atlantic Ocean. It was named europaeus because the first specimen was found floating in the English Channel, far from its usual range.',
      'In Portugal, it has been recorded mainly around Madeira and the Azores, where sightings and strandings have helped confirm its presence in the eastern Atlantic.',
    ],
    populationStatus: [
      'There are no reliable estimates of global abundance, and the species is listed as Least Concern.',
      'Its status in Portuguese waters is unknown, and identification at sea is challenging because it looks so similar to other Mesoplodon species.',
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
    distributionShort: 'Temperate North Atlantic & Southern Hemisphere',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...BEAKED_WHALE_PROTECTION,

    regionsInPortugal: ['Azores', 'Madeira'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],

    about: [
      'True’s beaked whale is known mainly from strandings. It lives in deep, temperate waters of the North Atlantic and parts of the Southern Hemisphere.',
      'Sightings in the Azores and Canary Islands in the 2010s produced some of the first images and video of the species alive at sea.',
    ],
    populationStatus: [
      'Nothing is known about its global abundance or trends. The species is listed as Least Concern.',
      'It is considered rare in Portuguese waters, with only a small number of confirmed records.',
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
]
