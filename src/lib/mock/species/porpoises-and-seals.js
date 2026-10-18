import { cetaceanClassification, noaaImage, pinnipedClassification } from './_shared'

const SEAL_PROTECTION = {
  protectedUnder: ['EU Habitats Directive', 'Bern Convention'],
  legalProtection: ['EU Habitats Directive — Annex II & V', 'Bern Convention — Appendix III'],
}

export const porpoises = [
  {
    slug: 'harbour-porpoise',
    commonName: 'Harbour porpoise',
    alternativeNames: ['Bôto'],
    scientificName: 'Phocoena phocoena',
    authority: 'Linnaeus, 1758',
    category: 'Porpoise',
    family: 'Phocoenidae',
    summary:
      'The smallest cetacean in Portuguese waters. A genetically distinct Iberian population lives along the mainland coast, and it is among the most threatened marine mammals in the country.',
    mainImage: noaaImage('harbour-porpoise', 'Illustration of a harbour porpoise: a small, rounded grey cetacean with a short triangular dorsal fin'),

    length: { min: 1.4, max: 2 },
    weight: { min: 45, max: 75 },
    lifespan: { min: 12, max: 24 },
    threats: ['Bycatch', 'Prey depletion', 'Pollution', 'Underwater noise'],
    distributionShort: 'Coastal North Atlantic & North Pacific',

    iucnStatus: 'LC',
    populationTrend: 'decreasing',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bern Convention', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex II & IV', 'CITES — Appendix II', 'Bern Convention — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'ASCOBANS'],

    regionsInPortugal: ['Mainland — North', 'Mainland — Centre', 'Lisbon coast'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Uncommon',
    bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],

    about: [
      'The harbour porpoise is a small, shy cetacean of cool coastal waters in the Northern Hemisphere. Porpoises are a separate family from dolphins, with spade-shaped teeth and no obvious beak.',
      'Off the Atlantic coast of Iberia lives a genetically distinct population, isolated from porpoises further north. In Portugal it is found mainly along the northern and central mainland coast, in waters less than 200 metres deep.',
    ],
    populationStatus: [
      'Globally the species is abundant and listed as Least Concern, but the Iberian population is small — estimated at only a few thousand animals — and is thought to be declining.',
      'High levels of bycatch in coastal fisheries have led scientists to consider the Iberian porpoise one of the most threatened cetacean populations in Europe.',
    ],
    appearance: [
      'Harbour porpoises are small and stocky, with a rounded head, no beak and a short, triangular dorsal fin. They are dark grey above, fading to a pale belly.',
      'Iberian porpoises are larger on average than those in northern Europe. At sea, they are usually seen only as a small back and fin rolling briefly at the surface.',
    ],
    behaviourAndDiet: [
      'Porpoises must eat almost constantly to stay warm, consuming up to 10% of their body weight every day. They feed on small fish such as sardines, horse mackerel, blue whiting and gobies, as well as squid.',
      'They are usually seen alone or in small groups of two to five. They are discreet, rarely approach boats and use high-frequency clicks for echolocation.',
    ],
    lifespanAndReproduction: [
      'Harbour porpoises have short lives for a cetacean, rarely living beyond 12–15 years, with a maximum of around 24 years.',
      'Females reach maturity at 3–4 years and can give birth every year after a gestation of about 10–11 months. Calves are about 70–90 cm long at birth.',
    ],
    threatsDetail: [
      'Bycatch in gillnets and trammel nets is the main threat to the Iberian population and is likely higher than the population can sustain.',
      'Overfishing of prey, pollution and underwater noise from shipping, construction and wind farms add pressure to this small, coastal population.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Phocoena', species: 'Phocoena phocoena' }),
  },
]

export const seals = [
  {
    slug: 'mediterranean-monk-seal',
    commonName: 'Mediterranean monk seal',
    alternativeNames: ['Lobo-marinho', 'Foca-monge-do-mediterrâneo'],
    scientificName: 'Monachus monachus',
    authority: 'Hermann, 1779',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'One of the rarest seals in the world and Portugal’s only resident pinniped. A small but recovering colony lives in the sea caves of the Desertas Islands, off Madeira — the “lobo-marinho” of Câmara de Lobos.',
    mainImage: null,

    length: { min: 2.3, max: 2.8 },
    weight: { min: 240, max: 320 },
    lifespan: { min: 20, max: 45 },
    threats: ['Habitat loss', 'Entanglement', 'Human disturbance', 'Small population'],
    distributionShort: 'Madeira, NW Africa & E Mediterranean',

    iucnStatus: 'VU',
    nationalStatus: 'CR',
    nationalStatusNote: 'Madeira population',
    populationTrend: 'increasing',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bern Convention', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex II (priority) & IV', 'CITES — Appendix I', 'Bern Convention — Appendix II', 'Bonn Convention (CMS) — Appendix I', 'Desertas Islands Nature Reserve'],

    regionsInPortugal: ['Madeira', 'Desertas Islands'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Rare',
    bestMonths: ['may', 'june', 'july', 'august', 'september'],

    about: [
      'The Mediterranean monk seal once lived throughout the Mediterranean and along the Atlantic coast of north-west Africa. Centuries of hunting and persecution reduced it to a few isolated colonies.',
      'In Portugal it survives only in the Madeira archipelago, mainly in the Desertas Islands. When Portuguese explorers arrived in Madeira in the 15th century, seals were so common that the town of Câmara de Lobos (“chamber of sea wolves”) was named after them.',
    ],
    populationStatus: [
      'Globally, fewer than a thousand mature individuals remain. Thanks to conservation efforts, numbers are increasing and the species was moved from Endangered to Vulnerable in 2023.',
      'The Madeira population fell to as few as six to eight animals in the late 1980s. Strict protection in the Desertas Islands Nature Reserve has allowed a slow recovery to a few dozen animals, but the colony remains critically small.',
    ],
    appearance: [
      'Monk seals are large, with short, dense fur that is dark brown or black in adult males and lighter brown or grey in females, often with a pale patch on the belly.',
      'Pups are born with a black, woolly coat with a white patch on the belly. The species gets its name from the folds of skin around the neck, said to resemble a monk’s hood.',
    ],
    behaviourAndDiet: [
      'Monk seals feed on a variety of fish, octopus and squid, foraging in coastal waters typically less than 70 metres deep but sometimes diving much deeper.',
      'Historically they rested on open beaches, but persecution has driven the remaining populations to use inaccessible sea caves for resting and giving birth.',
    ],
    lifespanAndReproduction: [
      'Monk seals live for around 20–30 years, and some individuals may reach 45. Females reach maturity at around 4 years.',
      'Pups are born after a gestation of about 11 months and nurse for around four months. In Madeira, births can occur throughout the year, with a peak in autumn.',
    ],
    threatsDetail: [
      'With such a small population, the Madeira colony is very vulnerable to chance events such as storms that destroy caves, disease outbreaks or the loss of a few breeding females.',
      'Entanglement in fishing gear, disturbance from boats and people, and conflict with fishers are ongoing threats. Responsible behaviour at sea — keeping a distance and never approaching caves — is essential.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Monachus', species: 'Monachus monachus' }),
  },
  {
    slug: 'grey-seal',
    commonName: 'Grey seal',
    alternativeNames: ['Foca-cinzenta'],
    scientificName: 'Halichoerus grypus',
    authority: 'Fabricius, 1791',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'A large seal of the North Atlantic that occasionally reaches the Portuguese coast. Most records are young animals that have travelled south from colonies in the British Isles and France.',
    mainImage: noaaImage('grey-seal', 'Illustration of a grey seal: a large, mottled grey seal with a long, straight snout'),

    length: { min: 1.6, max: 2.5 },
    weight: { min: 100, max: 300 },
    lifespan: { min: 25, max: 35 },
    threats: ['Entanglement', 'Bycatch', 'Pollution', 'Human disturbance'],
    distributionShort: 'Temperate North Atlantic coasts',

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    ...SEAL_PROTECTION,

    regionsInPortugal: ['Mainland — North', 'Mainland — Centre'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: ['december', 'january', 'february', 'march'],

    about: [
      'The grey seal lives along the coasts of the North Atlantic, with large colonies in the British Isles, France, the Baltic and eastern Canada.',
      'Portugal lies outside its breeding range, but young grey seals occasionally turn up on beaches in the north and centre of the mainland, mostly in winter, after dispersing far from their birth colonies.',
    ],
    populationStatus: [
      'The species is listed as Least Concern and populations in most areas are increasing after past hunting and persecution.',
      'In Portugal, the grey seal is an occasional visitor, and records have become more frequent in recent decades.',
    ],
    appearance: [
      'Grey seals have a long, straight snout, giving them a “Roman nose” profile — their scientific name means “hook-nosed sea pig”. Adult males are much larger than females and have heavier heads.',
      'Their coat is grey to brown with darker blotches. Females are usually paler with dark spots, and males darker with pale markings.',
    ],
    behaviourAndDiet: [
      'Grey seals are opportunistic predators of fish such as sand eels, cod and flatfish, as well as squid and octopus.',
      'They haul out on rocky shores and beaches to rest, moult and breed. Young seals can travel hundreds of kilometres in their first year.',
    ],
    lifespanAndReproduction: [
      'Grey seals live for around 25 years, with females sometimes exceeding 35 years.',
      'Pups are born with a white, woolly coat and are fed very rich milk for about three weeks, tripling their weight before being left to fend for themselves.',
    ],
    threatsDetail: [
      'Entanglement in nets and marine debris is a common problem. Pollution and disturbance at haul-out sites can also affect them.',
      'If you find a seal on a Portuguese beach, keep your distance, keep dogs away and report it to the stranding network — seals often rest on land and are not necessarily in distress.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Halichoerus', species: 'Halichoerus grypus' }),
  },
  {
    slug: 'harbour-seal',
    commonName: 'Harbour seal',
    alternativeNames: ['Foca-comum'],
    scientificName: 'Phoca vitulina',
    authority: 'Linnaeus, 1758',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The most widespread seal in the Northern Hemisphere, with a rounded, dog-like face. Harbour seals are rare vagrants in Portugal, with only occasional records on the mainland coast.',
    mainImage: noaaImage('harbour-seal', 'Illustration of a harbour seal: a spotted grey seal with a rounded head and short snout'),

    length: { min: 1.2, max: 1.9 },
    weight: { min: 55, max: 170 },
    lifespan: { min: 25, max: 35 },
    threats: ['Disease', 'Entanglement', 'Pollution', 'Human disturbance'],
    distributionShort: 'Coastal North Atlantic & North Pacific',

    iucnStatus: 'LC',
    populationTrend: 'stable',
    ...SEAL_PROTECTION,

    regionsInPortugal: ['Mainland — North', 'Mainland — Centre'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],

    about: [
      'The harbour seal, or common seal, is found along the coasts of the North Atlantic and North Pacific, often in estuaries, sandbanks and sheltered bays.',
      'The nearest colonies to Portugal are in northern France and the British Isles. Only a few vagrant animals have been recorded on Portuguese beaches.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, with several hundred thousand animals worldwide, although some regional populations have declined.',
      'In Portugal, the harbour seal is a rare vagrant and is not known to breed.',
    ],
    appearance: [
      'Harbour seals have a rounded head with a short, concave snout and V-shaped nostrils, giving them a dog-like face.',
      'Their coat varies from silver-grey to brown, with many fine dark spots. They are smaller than grey seals.',
    ],
    behaviourAndDiet: [
      'They feed on a wide range of fish, squid and crustaceans, usually in shallow coastal waters.',
      'Harbour seals haul out on sandbanks and rocks at low tide, often resting in a characteristic “banana” posture with head and tail raised.',
    ],
    lifespanAndReproduction: [
      'Harbour seals can live for 25–35 years. Females reach maturity at 3–5 years.',
      'Pups can swim within hours of birth and are nursed for about four weeks.',
    ],
    threatsDetail: [
      'Outbreaks of phocine distemper virus have killed tens of thousands of harbour seals in Europe.',
      'Entanglement, pollution and disturbance at haul-out sites are additional threats.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Phoca', species: 'Phoca vitulina' }),
  },
  {
    slug: 'hooded-seal',
    commonName: 'Hooded seal',
    alternativeNames: ['Foca-de-capuz'],
    scientificName: 'Cystophora cristata',
    authority: 'Erxleben, 1777',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'An Arctic seal famous for the inflatable red “balloon” males blow out of their nose. Young hooded seals occasionally wander as far south as Portugal, far from their home on the drifting pack ice.',
    mainImage: noaaImage('hooded-seal', 'Illustration of a male hooded seal: a large, blotchy grey seal inflating a red balloon-like membrane from its nose'),

    length: { min: 2, max: 2.7 },
    weight: { min: 145, max: 400 },
    lifespan: { min: 30, max: 35 },
    threats: ['Climate change', 'Hunting', 'Entanglement'],
    distributionShort: 'Arctic & sub-Arctic North Atlantic',

    iucnStatus: 'VU',
    populationTrend: 'unknown',
    ...SEAL_PROTECTION,

    regionsInPortugal: ['Mainland coast'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],

    about: [
      'The hooded seal lives on the drifting pack ice of the Arctic and North Atlantic, between Canada, Greenland and Norway.',
      'Young hooded seals are known to wander extraordinary distances, and a few have reached the Iberian coast, including Portugal. These records are exceptional.',
    ],
    populationStatus: [
      'The species is listed as Vulnerable. The north-east Atlantic population has declined sharply since the mid-20th century and has not recovered, despite reduced hunting.',
      'Loss of sea ice due to climate change is a growing concern for its future.',
    ],
    appearance: [
      'Adult males have an inflatable black hood on the head and can blow a red, balloon-like membrane out of one nostril during displays.',
      'Adults are silver-grey with irregular dark blotches. Pups, called “bluebacks”, have a blue-grey back and a pale belly.',
    ],
    behaviourAndDiet: [
      'They feed on deep-water fish such as Greenland halibut and redfish, as well as squid, diving to over 1,000 metres.',
      'Hooded seals are solitary for most of the year and gather on the ice only to breed and moult.',
    ],
    lifespanAndReproduction: [
      'Hooded seals live for around 30–35 years.',
      'They have the shortest nursing period of any mammal: pups are weaned after just four days, during which they double their weight on extremely rich milk.',
    ],
    threatsDetail: [
      'Climate change is reducing the sea ice they depend on for breeding and moulting. Historical over-hunting caused major declines.',
      'Entanglement and pollution are additional threats.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Cystophora', species: 'Cystophora cristata' }),
  },
]
