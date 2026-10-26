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
      'A small, shy porpoise of cool coastal waters and one of the most widespread cetaceans of the Northern Hemisphere. Some local populations, such as those of the Baltic Sea and Iberia, are seriously threatened.',
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
    oceans: ['north-atlantic', 'mediterranean', 'north-pacific'],
    distributionInPortugal: 'The Iberian population is found mainly along the northern and central mainland coast, in waters less than 200 metres deep. It is estimated at only a few thousand animals, is thought to be declining because of bycatch, and is among the most threatened marine mammals in Portugal.',

    about: [
      'The harbour porpoise is a small, shy cetacean of cool coastal waters in the Northern Hemisphere. Porpoises are a separate family from dolphins, with spade-shaped teeth and no obvious beak.',
      'It lives in several separate populations: in the North Atlantic, the North Pacific, the Black Sea (a distinct subspecies) and off Iberia and north-west Africa, where a genetically distinct population is isolated from porpoises further north.',
    ],
    populationStatus: [
      'Globally the species is abundant and listed as Least Concern, but several populations are small and declining. The Baltic Proper population numbers only a few hundred animals and is listed as Critically Endangered.',
      'High levels of bycatch in coastal fisheries have made porpoises a priority for conservation agreements such as ASCOBANS in Europe.',
    ],
    appearance: [
      'Harbour porpoises are small and stocky, with a rounded head, no beak and a short, triangular dorsal fin. They are dark grey above, fading to a pale belly.',
      'Porpoises in Iberia and north-west Africa are larger on average than those further north. At sea, they are usually seen only as a small back and fin rolling briefly at the surface.',
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
      'Bycatch in gillnets and trammel nets is the main threat across the species’ range, and in several small populations it is likely higher than they can sustain.',
      'Overfishing of prey, pollution and underwater noise from shipping, construction and wind farms add pressure to this small, coastal population.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Phocoena', species: 'Phocoena phocoena' }),
  },
  {
    slug: 'vaquita',
    commonName: 'Vaquita',
    alternativeNames: ['Gulf of California porpoise', 'Cochito'],
    scientificName: 'Phocoena sinus',
    authority: 'Norris & McFarland, 1958',
    category: 'Porpoise',
    family: 'Phocoenidae',
    summary:
      'The smallest and most endangered cetacean in the world. Only around ten vaquitas survive, in a small corner of the northern Gulf of California, killed by illegal gillnets set for another endangered fish.',
    mainImage: noaaImage('vaquita', 'Illustration of a vaquita: a small grey porpoise with dark rings around its eyes and a triangular dorsal fin'),

    length: { min: 1.2, max: 1.5 },
    weight: { min: 30, max: 55 },
    lifespan: { min: 20, max: 22 },
    threats: ['Bycatch', 'Small population'],
    distributionShort: 'Northern Gulf of California',
    oceans: ['north-pacific'],

    iucnStatus: 'CR',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'US Endangered Species Act — Endangered'],

    about: [
      'The vaquita (“little cow” in Spanish) lives only in the shallow, murky waters of the northern Gulf of California, in Mexico — the smallest range of any marine mammal.',
      'It was described only in 1958, and was first studied alive decades later. Most people who have tried to see one never have.',
    ],
    populationStatus: [
      'There were around 600 vaquitas in 1997. By 2018 there were fewer than 20, and surveys in the 2020s have found only about ten.',
      'Encouragingly, the survivors appear healthy, and calves are still being born. If gillnets are removed completely from their range, the species could still recover.',
    ],
    appearance: [
      'Vaquitas are small and grey, with a relatively tall, triangular dorsal fin. Their most striking features are the dark rings around the eyes and dark lips, like smudged make-up.',
    ],
    behaviourAndDiet: [
      'They feed on small fish, squid and crustaceans near the seabed, and are shy, avoiding boats. They are usually seen alone or in pairs.',
    ],
    lifespanAndReproduction: [
      'Vaquitas live for about 20 years. Females give birth every one to two years, after a gestation of about 10–11 months.',
    ],
    threatsDetail: [
      'Almost every known death has been caused by gillnets. Since the 2010s, illegal nets set for totoaba — a large, endangered fish whose swim bladder sells for high prices in Asia — have driven the vaquita to the edge of extinction.',
      'Mexico has banned gillnets in the vaquita’s range and created a zero-tolerance area, but enforcement remains the key to its survival.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Phocoena', species: 'Phocoena sinus' }),
  },
  {
    slug: 'burmeisters-porpoise',
    commonName: 'Burmeister’s porpoise',
    alternativeNames: ['Black porpoise'],
    scientificName: 'Phocoena spinipinnis',
    authority: 'Burmeister, 1865',
    category: 'Porpoise',
    family: 'Phocoenidae',
    summary:
      'A dark, shy porpoise of the coasts of South America, with an unusual dorsal fin that is set far back and points backwards.',
    mainImage: null,

    length: { min: 1.4, max: 2 },
    weight: { min: 40, max: 85 },
    lifespan: null,
    threats: ['Bycatch', 'Hunting', 'Pollution'],
    distributionShort: 'Coastal South America',
    oceans: ['south-atlantic', 'south-pacific'],

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'Burmeister’s porpoise lives in cool coastal waters of South America, from Peru round Cape Horn to southern Brazil.',
      'It is rarely seen because it is shy and surfaces with little splash, but many have been caught in fishing nets.',
    ],
    populationStatus: [
      'There are no reliable estimates. It is listed as Near Threatened because of high bycatch, especially off Peru and Chile.',
    ],
    appearance: [
      'It is dark grey to almost black, with a low, triangular dorsal fin set far back on the body. The leading edge of the fin is covered with small, tooth-like bumps (tubercles).',
    ],
    behaviourAndDiet: [
      'It feeds on anchovies, hake and squid, usually in small groups of two to eight.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history.',
    ],
    threatsDetail: [
      'Thousands have been caught in gillnets, and in Peru porpoises have been sold for food or used as bait.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Phocoena', species: 'Phocoena spinipinnis' }),
  },
  {
    slug: 'spectacled-porpoise',
    commonName: 'Spectacled porpoise',
    alternativeNames: [],
    scientificName: 'Phocoena dioptrica',
    authority: 'Lahille, 1912',
    category: 'Porpoise',
    family: 'Phocoenidae',
    summary:
      'A striking black-and-white porpoise of the sub-Antarctic, named for the white rings around its eyes. It is one of the least-seen cetaceans on Earth.',
    mainImage: null,

    length: { min: 1.3, max: 2.2 },
    weight: { min: 60, max: 115 },
    lifespan: null,
    threats: ['Bycatch'],
    distributionShort: 'Sub-Antarctic Southern Ocean',
    oceans: ['southern', 'south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The spectacled porpoise lives in cold sub-Antarctic waters around the Southern Hemisphere, with most records from Tierra del Fuego, the Falkland Islands, South Georgia, Kerguelen, Macquarie Island and the Auckland Islands.',
      'Almost everything known about it comes from stranded animals; it has rarely been photographed alive at sea.',
    ],
    populationStatus: [
      'There are no population estimates. It is listed as Least Concern because its range is remote and few threats are known.',
    ],
    appearance: [
      'It is sharply two-toned: black above and white below. Each eye is surrounded by a dark patch ringed with white — the “spectacles”. Adult males have a large, rounded dorsal fin.',
    ],
    behaviourAndDiet: [
      'Its behaviour is almost unknown. It probably feeds on small fish and squid.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about its life history.',
    ],
    threatsDetail: [
      'Occasional bycatch occurs in Argentina and Chile.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Phocoena', species: 'Phocoena dioptrica' }),
  },
  {
    slug: 'dalls-porpoise',
    commonName: 'Dall’s porpoise',
    alternativeNames: [],
    scientificName: 'Phocoenoides dalli',
    authority: 'True, 1885',
    category: 'Porpoise',
    family: 'Phocoenidae',
    summary:
      'One of the fastest small cetaceans, throwing up a distinctive “rooster tail” of spray as it races along the surface of the cold North Pacific.',
    mainImage: noaaImage('dalls-porpoise', 'Illustration of a Dall’s porpoise: a stocky black porpoise with a large white flank patch'),

    length: { min: 1.7, max: 2.4 },
    weight: { min: 130, max: 200 },
    lifespan: { min: 15, max: 20 },
    threats: ['Hunting', 'Bycatch', 'Pollution'],
    distributionShort: 'Cold North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'Dall’s porpoise lives in cold waters of the North Pacific, from Japan and the Sea of Okhotsk to the Bering Sea and southern California.',
      'It can swim at more than 50 km/h, faster than any other porpoise.',
    ],
    populationStatus: [
      'There are probably more than a million, and the species is listed as Least Concern.',
      'Japan’s hand-harpoon hunt for Dall’s porpoises has been the largest direct hunt of any small cetacean, killing thousands every year in the past, though catches have declined.',
    ],
    appearance: [
      'It is stocky and black, with a large white patch on the flanks and belly and white tips to the dorsal fin and tail flukes — like a miniature killer whale.',
    ],
    behaviourAndDiet: [
      'It feeds on squid and small schooling fish such as lanternfish, diving to 500 metres.',
      'It often rides the bow waves of fast boats, zigzagging in and out of the spray.',
    ],
    lifespanAndReproduction: [
      'It lives for about 15–20 years. Females can give birth every year after a gestation of about 10–11 months.',
    ],
    threatsDetail: [
      'Hunting in Japan and bycatch in fishing nets are the main threats. Many thousands were killed in high-seas drift nets before they were banned in 1992.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Phocoenoides', species: 'Phocoenoides dalli' }),
  },
  {
    slug: 'narrow-ridged-finless-porpoise',
    commonName: 'Narrow-ridged finless porpoise',
    alternativeNames: ['Yangtze finless porpoise', 'East Asian finless porpoise'],
    scientificName: 'Neophocaena asiaeorientalis',
    authority: 'Pilleri & Gihr, 1972',
    category: 'Porpoise',
    family: 'Phocoenidae',
    summary:
      'A porpoise with no dorsal fin, found in coastal waters of China, Korea and Japan. Its Yangtze River subspecies is the last cetacean left in the river after the loss of the baiji.',
    mainImage: null,

    length: { min: 1.5, max: 1.9 },
    weight: { min: 30, max: 72 },
    lifespan: { min: 20, max: 25 },
    threats: ['Bycatch', 'Habitat loss', 'Pollution', 'Ship strikes'],
    distributionShort: 'Coastal East Asia & Yangtze River',
    oceans: ['north-pacific', 'freshwater'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The narrow-ridged finless porpoise lives in shallow coastal waters of the Yellow Sea, the East China Sea and around Japan and Korea. One subspecies lives entirely in fresh water, in the Yangtze River and its lakes.',
      'Instead of a dorsal fin, it has a low ridge along its back covered in small bumps, which may help it sense its surroundings or carry its calf.',
    ],
    populationStatus: [
      'The species is listed as Endangered. The Yangtze finless porpoise is Critically Endangered, with around 1,000–1,250 animals.',
      'After a ten-year fishing ban on the Yangtze began in 2021, the 2022 survey found that numbers had risen for the first time in decades.',
    ],
    appearance: [
      'It is small and grey, with a rounded head and no beak, and a narrow ridge on its back instead of a fin.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish, shrimp and squid. Calves sometimes ride on their mothers’ backs.',
    ],
    lifespanAndReproduction: [
      'It lives for about 20–25 years. Calves are born after a gestation of about 11 months.',
    ],
    threatsDetail: [
      'Bycatch, sand dredging, dams, pollution and heavy shipping traffic are the main threats, especially in the Yangtze, one of the busiest rivers in the world.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Neophocaena', species: 'Neophocaena asiaeorientalis' }),
  },
  {
    slug: 'indo-pacific-finless-porpoise',
    commonName: 'Indo-Pacific finless porpoise',
    alternativeNames: ['Wide-ridged finless porpoise'],
    scientificName: 'Neophocaena phocaenoides',
    authority: 'G. Cuvier, 1829',
    category: 'Porpoise',
    family: 'Phocoenidae',
    summary:
      'A small, finless porpoise of the shallow coasts of the Indian Ocean and South-East Asia, from the Persian Gulf to the South China Sea.',
    mainImage: null,

    length: { min: 1.4, max: 1.7 },
    weight: { min: 30, max: 45 },
    lifespan: { min: 20, max: 25 },
    threats: ['Bycatch', 'Habitat loss', 'Pollution'],
    distributionShort: 'Coastal Indian Ocean & South-East Asia',
    oceans: ['indian', 'north-pacific'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Indo-Pacific finless porpoise lives in shallow coastal waters, estuaries and mangroves from the Persian Gulf and India to Indonesia, southern China and Taiwan.',
      'It differs from the narrow-ridged finless porpoise in the broader area of small bumps along its back.',
    ],
    populationStatus: [
      'It is listed as Vulnerable. Populations have declined across much of its range because of coastal fisheries and development.',
    ],
    appearance: [
      'It is small, grey to pale grey, with a rounded head, no beak and no dorsal fin.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish, shrimp and squid in shallow water, usually alone or in small groups.',
    ],
    lifespanAndReproduction: [
      'It lives for about 20 years. Calves are born after a gestation of about 11 months.',
    ],
    threatsDetail: [
      'Bycatch in gillnets and trawls and the loss of coastal habitat to reclamation and ports are the main threats.',
    ],
    classification: cetaceanClassification({ parvorder: 'Odontoceti', family: 'Phocoenidae', genus: 'Neophocaena', species: 'Neophocaena phocaenoides' }),
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
      'One of the rarest seals in the world. Small but recovering colonies survive in the eastern Mediterranean, on the coast of north-west Africa and in the Madeira archipelago, where the seals shelter in sea caves.',
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
    oceans: ['north-atlantic', 'mediterranean'],
    distributionInPortugal: 'Portugal’s only resident pinniped — the “lobo-marinho” of Câmara de Lobos. The Madeira population, centred on the Desertas Islands Nature Reserve, fell to six to eight animals in the late 1980s and has slowly recovered to a few dozen. It is classified as Critically Endangered in the Portuguese Red Book of Mammals.',

    about: [
      'The Mediterranean monk seal once lived throughout the Mediterranean and along the Atlantic coast of north-west Africa. Centuries of hunting and persecution reduced it to a few isolated colonies.',
      'The largest colony lives at Cabo Blanco, on the border of Western Sahara and Mauritania, and others survive in Greece, Turkey and the Madeira archipelago. When Portuguese explorers arrived in Madeira in the 15th century, seals were so common that the town of Câmara de Lobos (“chamber of sea wolves”) was named after them.',
    ],
    populationStatus: [
      'Globally, fewer than a thousand mature individuals remain. Thanks to conservation efforts, numbers are increasing and the species was moved from Endangered to Vulnerable in 2023.',
      'The Cabo Blanco colony lost about two-thirds of its animals in a mass die-off in 1997, but has since recovered to several hundred seals. In Madeira, strict protection has allowed a slow recovery from as few as six to eight animals in the late 1980s to a few dozen today.',
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
      'Pups are born after a gestation of about 11 months and nurse for around four months. Births can occur throughout the year, with a peak in autumn in most colonies.',
    ],
    threatsDetail: [
      'With such small populations, each colony is very vulnerable to chance events such as storms that destroy caves, disease outbreaks or the loss of a few breeding females.',
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
      'A large seal of the North Atlantic, with a long, straight “Roman nose” in adult males. Grey seals breed on remote islands and beaches on both sides of the ocean, and their numbers have grown strongly since protection.',
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
    oceans: ['north-atlantic'],
    distributionInPortugal: 'Portugal lies outside the breeding range, but young grey seals occasionally turn up on beaches in the north and centre of the mainland, mostly in winter, after dispersing from colonies in the British Isles and France. Records have become more frequent in recent decades.',

    about: [
      'The grey seal lives along the coasts of the North Atlantic, with large colonies in the British Isles, France, the Baltic and eastern Canada.',
      'Grey seals breed in three main areas: the western North Atlantic (Canada and the north-eastern United States), the north-east Atlantic (the British Isles, Iceland, Norway and France) and the Baltic Sea. Young animals disperse widely after weaning, sometimes travelling hundreds of kilometres.',
    ],
    populationStatus: [
      'The species is listed as Least Concern and populations in most areas are increasing after past hunting and persecution.',
      'Numbers have increased strongly in many areas since hunting ended, and Sable Island, off Nova Scotia, is now home to the largest grey seal colony in the world.',
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
      'If you find a seal on a beach, keep your distance, keep dogs away and report it to the local stranding network — seals often rest on land and are not necessarily in distress.',
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
      'The most widespread seal in the Northern Hemisphere, with a rounded, dog-like face. Harbour seals live along temperate and sub-Arctic coasts of the North Atlantic and North Pacific, resting on sandbanks and rocky shores.',
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
    oceans: ['north-atlantic', 'north-pacific', 'arctic'],
    distributionInPortugal: 'The nearest colonies to Portugal are in northern France and the British Isles. Only a few vagrant animals have been recorded on Portuguese beaches, and the species is not known to breed there.',

    about: [
      'The harbour seal, or common seal, is found along the coasts of the North Atlantic and North Pacific, often in estuaries, sandbanks and sheltered bays.',
      'Harbour seals are found from the Wadden Sea and the British Isles to Svalbard, the eastern United States, Alaska and Japan. Unlike many seals, they rarely travel far from home.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, with several hundred thousand animals worldwide, although some regional populations have declined.',
      'Some local populations have declined sharply, for example in parts of Scotland and Alaska, for reasons that are not fully understood.',
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
      'An Arctic seal famous for the inflatable red “balloon” males blow out of their nose. Young hooded seals are great wanderers and sometimes turn up thousands of kilometres from their home on the drifting pack ice.',
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
    oceans: ['north-atlantic', 'arctic'],
    distributionInPortugal: 'A few young hooded seals have reached the Portuguese coast. These records are exceptional.',

    about: [
      'The hooded seal lives on the drifting pack ice of the Arctic and North Atlantic, between Canada, Greenland and Norway.',
      'Young hooded seals are known to wander extraordinary distances, with records as far south as the Caribbean, the Canary Islands and the Iberian coast.',
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

  // ---------- Ice seals of the Arctic ----------
  {
    slug: 'bearded-seal',
    commonName: 'Bearded seal',
    alternativeNames: ['Square flipper'],
    scientificName: 'Erignathus barbatus',
    authority: 'Erxleben, 1777',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'A large Arctic seal with a luxuriant “beard” of long whiskers, which it uses to search the seabed for clams and crabs. Males sing long, haunting trills under the ice in spring.',
    mainImage: noaaImage('bearded-seal', 'Illustration of a bearded seal: a large brown seal with long whiskers lying on its side'),

    length: { min: 2.1, max: 2.7 },
    weight: { min: 200, max: 430 },
    lifespan: { min: 25, max: 30 },
    threats: ['Sea ice loss', 'Climate change', 'Underwater noise', 'Pollution', 'Hunting'],
    distributionShort: 'Arctic & sub-Arctic seas',
    oceans: ['arctic', 'north-atlantic', 'north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['US Endangered Species Act — Threatened (Beringia and Okhotsk populations)', 'US Marine Mammal Protection Act'],

    about: [
      'The bearded seal lives around the Arctic, mostly in shallow seas over the continental shelf where it can reach the seabed. It rests on drifting pack ice, usually alone.',
      'Its long, flattened whiskers, which curl into spirals when dry, are extremely sensitive and help it find prey in the dark.',
    ],
    populationStatus: [
      'There are probably several hundred thousand bearded seals, and the species is listed as Least Concern. Some populations are listed as Threatened in the United States because of the projected loss of sea ice.',
    ],
    appearance: [
      'Bearded seals are large and grey-brown, with a small, rounded head, a long, dense moustache of whiskers and squarish fore-flippers, which give them their nickname.',
    ],
    behaviourAndDiet: [
      'They feed on clams, crabs, shrimp, octopus and bottom fish, rooting through soft sediment with their whiskers and sucking prey up.',
      'In spring, males produce long, descending, warbling trills underwater that can last more than a minute and are thought to attract females and defend territories.',
    ],
    lifespanAndReproduction: [
      'They live for 25–30 years. Pups are born on drifting ice in spring and can swim within hours of birth.',
      'Pups are nursed for about three weeks and double their weight in that time.',
    ],
    threatsDetail: [
      'Bearded seals depend on sea ice over shallow water for giving birth, nursing and moulting, so the shrinking of Arctic ice is the main long-term threat.',
      'Increasing shipping, oil and gas activity and noise in the Arctic add to the pressure. They are hunted by Indigenous peoples, an important source of food and skins.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Erignathus', species: 'Erignathus barbatus' }),
  },
  {
    slug: 'ringed-seal',
    commonName: 'Ringed seal',
    alternativeNames: ['Netsik', 'Jar seal'],
    scientificName: 'Pusa hispida',
    authority: 'Schreber, 1775',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The smallest and most widespread Arctic seal, and the main prey of polar bears. It keeps breathing holes open through thick ice with its claws and raises its pups in hidden snow caves.',
    mainImage: noaaImage('ringed-seal', 'Illustration of a ringed seal: a small grey seal covered in pale rings'),

    length: { min: 1.1, max: 1.6 },
    weight: { min: 50, max: 110 },
    lifespan: { min: 25, max: 45 },
    threats: ['Sea ice loss', 'Climate change', 'Pollution', 'Bycatch', 'Hunting'],
    distributionShort: 'Arctic seas & some northern lakes',
    oceans: ['arctic', 'north-atlantic', 'north-pacific', 'freshwater'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['EU Habitats Directive — Annex II & IV (Saimaa population)', 'EU Habitats Directive — Annex V', 'US Endangered Species Act — Threatened (Arctic population)', 'US Endangered Species Act — Endangered (Saimaa and Ladoga populations)', 'US Marine Mammal Protection Act'],

    about: [
      'Ringed seals live throughout the Arctic Ocean and in nearby seas such as Hudson Bay, the Baltic and the Sea of Okhotsk. Small, isolated subspecies also live in two freshwater lakes: Saimaa in Finland and Ladoga in Russia.',
      'Unlike most seals, they can live under thick, unbroken ice, scratching and maintaining breathing holes with the strong claws on their fore-flippers.',
    ],
    populationStatus: [
      'There are probably several million ringed seals, and the species is listed as Least Concern.',
      'The Saimaa ringed seal, one of the rarest seals in the world, fell to a few hundred animals and is slowly recovering thanks to fishing restrictions and help with building snow lairs in mild winters.',
    ],
    appearance: [
      'Ringed seals are small, with a rounded head and a short snout. Their grey coat is covered in pale rings around dark spots, which give them their name.',
    ],
    behaviourAndDiet: [
      'They feed on Arctic cod and other small fish, as well as shrimp-like crustaceans.',
      'Females dig lairs in the snow drifts that build up over breathing holes. The pup is born and nursed inside, hidden from polar bears and Arctic foxes and sheltered from the cold.',
    ],
    lifespanAndReproduction: [
      'They can live for over 40 years. Pups are born in late winter or spring and nursed for about six weeks.',
    ],
    threatsDetail: [
      'Ringed seals need stable ice and enough snow to build their lairs. Earlier spring melt and rain-on-snow events can collapse lairs and expose pups to cold and predators.',
      'They are a vital food source for Arctic Indigenous communities and for polar bears, so their decline would have wide effects.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Pusa', species: 'Pusa hispida' }),
  },
  {
    slug: 'spotted-seal',
    commonName: 'Spotted seal',
    alternativeNames: ['Largha seal'],
    scientificName: 'Phoca largha',
    authority: 'Pallas, 1811',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'A close relative of the harbour seal that breeds on the edge of the sea ice in the North Pacific, from the Bering Sea to the Yellow Sea.',
    mainImage: noaaImage('spotted-seal', 'Illustration of a spotted seal: a silvery-brown seal covered in dark spots'),

    length: { min: 1.5, max: 1.7 },
    weight: { min: 65, max: 115 },
    lifespan: { min: 30, max: 35 },
    threats: ['Sea ice loss', 'Hunting', 'Bycatch', 'Pollution'],
    distributionShort: 'North Pacific & Bering Sea ice',
    oceans: ['north-pacific', 'arctic'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['US Endangered Species Act — Threatened (southern population)', 'US Marine Mammal Protection Act'],

    about: [
      'The spotted seal lives in the Bering, Chukchi and Okhotsk seas and around northern Japan, with a small southern population in the Yellow Sea and Bohai Sea of China and Korea.',
      'In winter and spring it breeds on the edge of the drifting pack ice; in summer and autumn it moves to coasts and river mouths.',
    ],
    populationStatus: [
      'There are probably several hundred thousand, and the species is listed as Least Concern. The southern population in China and Korea has declined sharply and is listed as Threatened in the United States.',
    ],
    appearance: [
      'It is silvery-grey with dense, dark spots, very similar to the harbour seal, but slightly smaller and with a narrower snout.',
    ],
    behaviourAndDiet: [
      'It feeds on fish such as herring, pollock and salmon, as well as crustaceans and octopus.',
      'During the breeding season, a mother, her pup and an attending male often stay together on an ice floe, forming a “family triad”.',
    ],
    lifespanAndReproduction: [
      'It lives for about 30–35 years. Pups are born on the ice in spring with a white, woolly coat and nursed for about a month.',
    ],
    threatsDetail: [
      'Loss of sea ice, hunting, bycatch and pollution are the main threats, especially for the southern population.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Phoca', species: 'Phoca largha' }),
  },
  {
    slug: 'ribbon-seal',
    commonName: 'Ribbon seal',
    alternativeNames: [],
    scientificName: 'Histriophoca fasciata',
    authority: 'Zimmermann, 1783',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The most strikingly marked seal in the world: adult males are dark, with four broad white ribbons around the neck, hips and flippers.',
    mainImage: noaaImage('ribbon-seal', 'Illustration of a ribbon seal: a dark seal with pale bands around its neck, flippers and hips'),

    length: { min: 1.5, max: 1.75 },
    weight: { min: 70, max: 90 },
    lifespan: { min: 20, max: 30 },
    threats: ['Sea ice loss', 'Climate change', 'Pollution'],
    distributionShort: 'Bering & Okhotsk seas',
    oceans: ['north-pacific', 'arctic'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['US Marine Mammal Protection Act'],
    legalProtection: ['US Marine Mammal Protection Act'],

    about: [
      'The ribbon seal lives in the Bering and Okhotsk seas. It uses the pack ice only from late winter to early summer to give birth and moult, and spends the rest of the year at sea.',
      'It has an inflatable air sac connected to its windpipe, possibly used to make underwater sounds.',
    ],
    populationStatus: [
      'There are probably several hundred thousand, and the species is listed as Least Concern, but it is one of the least-studied seals.',
    ],
    appearance: [
      'Adult males are dark brown to black, with four white bands: one around the neck, one around each fore-flipper and one around the hips. Females have the same pattern but paler.',
    ],
    behaviourAndDiet: [
      'It feeds on pollock, cod and squid. On the ice, it moves in a quick, side-to-side wriggle, and it is unusually tolerant of people approaching.',
    ],
    lifespanAndReproduction: [
      'It lives for 20–30 years. Pups are born on the ice in spring and nursed for three to four weeks.',
    ],
    threatsDetail: [
      'Sea ice loss is the main long-term threat. Oil and gas development and increased shipping in the Bering Sea are further concerns.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Histriophoca', species: 'Histriophoca fasciata' }),
  },
  {
    slug: 'harp-seal',
    commonName: 'Harp seal',
    alternativeNames: ['Saddleback seal', 'Greenland seal'],
    scientificName: 'Pagophilus groenlandicus',
    authority: 'Erxleben, 1777',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'One of the most abundant seals on Earth, famous for its fluffy white pups. Harp seals gather in huge numbers on the North Atlantic pack ice to give birth.',
    mainImage: null,

    length: { min: 1.7, max: 1.9 },
    weight: { min: 115, max: 140 },
    lifespan: { min: 30, max: 35 },
    threats: ['Sea ice loss', 'Hunting', 'Bycatch', 'Climate change'],
    distributionShort: 'North Atlantic & Arctic ice',
    oceans: ['north-atlantic', 'arctic'],

    iucnStatus: 'LC',
    populationTrend: 'stable',
    protectedUnder: ['US Marine Mammal Protection Act'],
    legalProtection: ['US Marine Mammal Protection Act'],

    about: [
      'Harp seals breed on the pack ice in three areas: off Newfoundland and in the Gulf of St Lawrence, in the Greenland Sea, and in the White Sea. They spend summer feeding further north, in Arctic waters.',
      'The north-west Atlantic population alone numbers several million, making the harp seal one of the most abundant seals in the world.',
    ],
    populationStatus: [
      'The species is listed as Least Concern. A commercial hunt continues in Canada, but since 1987 it has been illegal to kill the white-coated pups, and the European Union banned trade in seal products in 2009.',
    ],
    appearance: [
      'Adults are silver-grey with a black face and a dark, harp- or saddle-shaped band across the back. Newborn pups have a thick, white coat for their first couple of weeks.',
    ],
    behaviourAndDiet: [
      'They feed on capelin, Arctic cod, herring and crustaceans, diving to several hundred metres.',
      'They are very social and gather in their hundreds of thousands on the breeding ice.',
    ],
    lifespanAndReproduction: [
      'Harp seals can live for 30–35 years. Pups are nursed for only about 12 days, on milk so rich that they triple their weight.',
    ],
    threatsDetail: [
      'In years with poor ice, many pups drown or are crushed before they can swim. Warming is making such years more common.',
      'Commercial hunting, bycatch and competition with fisheries are additional pressures.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Pagophilus', species: 'Pagophilus groenlandicus' }),
  },

  // ---------- Seals of the Antarctic ----------
  {
    slug: 'leopard-seal',
    commonName: 'Leopard seal',
    alternativeNames: ['Sea leopard'],
    scientificName: 'Hydrurga leptonyx',
    authority: 'Blainville, 1820',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The top predator among Antarctic seals, with a huge, reptilian head and powerful jaws. It hunts penguins and other seals, but also sieves krill through its interlocking teeth.',
    mainImage: null,

    length: { min: 2.5, max: 3.5 },
    weight: { min: 200, max: 600 },
    lifespan: { min: 20, max: 26 },
    threats: ['Climate change', 'Sea ice loss'],
    distributionShort: 'Antarctic pack ice',
    oceans: ['southern', 'south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['Antarctic Treaty System'],
    legalProtection: ['Convention for the Conservation of Antarctic Seals'],

    about: [
      'The leopard seal lives mainly in the pack ice around Antarctica. Young animals regularly wander north to sub-Antarctic islands, and occasionally reach Australia, New Zealand, South America and South Africa.',
      'It is a solitary hunter that patrols the ice edge and the waters near penguin colonies.',
    ],
    populationStatus: [
      'There are probably a few hundred thousand, but numbers are hard to estimate because the seals are spread across vast areas of pack ice. The species is listed as Least Concern.',
    ],
    appearance: [
      'Leopard seals are long and slender, with a large head, wide gape and long fore-flippers. They are dark grey above and paler below, with dark spots on the throat and flanks.',
      'Females are slightly larger than males.',
    ],
    behaviourAndDiet: [
      'They eat penguins, other seals, fish and squid, but krill makes up a large part of their diet. Their back teeth have complex lobes that interlock to form a sieve.',
      'They are very vocal underwater, and males produce long series of calls during the breeding season.',
    ],
    lifespanAndReproduction: [
      'They live for about 25 years. Pups are born on the pack ice in summer and nursed for about a month.',
    ],
    threatsDetail: [
      'No major direct threats are known. Changes in sea ice and in the abundance of krill and penguins could affect them in the long term.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Hydrurga', species: 'Hydrurga leptonyx' }),
  },
  {
    slug: 'weddell-seal',
    commonName: 'Weddell seal',
    alternativeNames: [],
    scientificName: 'Leptonychotes weddellii',
    authority: 'Lesson, 1826',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The southernmost mammal on Earth, living under the Antarctic fast ice all year. Weddell seals saw breathing holes through the ice with their teeth and fill the water beneath with eerie trills.',
    mainImage: null,

    length: { min: 2.5, max: 3.3 },
    weight: { min: 400, max: 600 },
    lifespan: { min: 20, max: 30 },
    threats: ['Climate change', 'Sea ice loss'],
    distributionShort: 'Antarctic coasts & fast ice',
    oceans: ['southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['Antarctic Treaty System'],
    legalProtection: ['Convention for the Conservation of Antarctic Seals'],

    about: [
      'Weddell seals live around the coast of Antarctica, on the fast ice that is attached to land, as far south as McMurdo Sound at 77°S.',
      'They stay under the ice even in the depths of winter, keeping breathing holes open by grinding the ice with their teeth.',
    ],
    populationStatus: [
      'There are probably several hundred thousand, and the species is listed as Least Concern. A population in Erebus Bay has been studied every year since 1968, one of the longest-running studies of any mammal.',
    ],
    appearance: [
      'They are large and robust, dark grey with silvery blotches, with a small head, short snout and a face that seems to be smiling.',
    ],
    behaviourAndDiet: [
      'Weddell seals dive to 600 metres and can stay under for more than an hour, hunting Antarctic toothfish, silverfish and squid. Their physiology has taught scientists much about how mammals cope with diving.',
      'They are very vocal under the ice, producing trills, chirps and whistles that can be heard through the ice.',
    ],
    lifespanAndReproduction: [
      'They live for about 20–30 years. Teeth worn down by ice-grinding may limit how long they survive.',
      'Pups are born on the ice in spring, enter the water at about two weeks old and are weaned at six to seven weeks.',
    ],
    threatsDetail: [
      'No major threats are known. Changes in fast ice and growing fisheries for Antarctic toothfish could affect them in the future.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Leptonychotes', species: 'Leptonychotes weddellii' }),
  },
  {
    slug: 'crabeater-seal',
    commonName: 'Crabeater seal',
    alternativeNames: [],
    scientificName: 'Lobodon carcinophaga',
    authority: 'Hombron & Jacquinot, 1842',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'Probably the most abundant seal on Earth — and it doesn’t eat crabs. Crabeater seals strain Antarctic krill through their intricately lobed teeth.',
    mainImage: null,

    length: { min: 2.2, max: 2.6 },
    weight: { min: 200, max: 300 },
    lifespan: { min: 20, max: 39 },
    threats: ['Sea ice loss', 'Climate change', 'Prey depletion'],
    distributionShort: 'Antarctic pack ice',
    oceans: ['southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['Antarctic Treaty System'],
    legalProtection: ['Convention for the Conservation of Antarctic Seals'],

    about: [
      'Crabeater seals live on the drifting pack ice all around Antarctica. Estimates of their numbers vary widely, from several million to more than ten million, making them probably the most abundant seal in the world.',
      'Despite their name, they feed almost entirely on krill.',
    ],
    populationStatus: [
      'The species is listed as Least Concern. Because it lives on remote, shifting pack ice, it is very difficult to count.',
    ],
    appearance: [
      'Crabeater seals are slender, with a long snout, and silvery to pale brown — becoming almost cream in summer. Many adults carry long parallel scars from leopard seal attacks when young.',
      'Each of their cheek teeth has several finger-like lobes that interlock to form a sieve, letting water out while holding krill in.',
    ],
    behaviourAndDiet: [
      'They feed mainly at night, diving to tens of metres to catch swarms of krill.',
      'They are surprisingly fast on the ice and are often seen in groups.',
    ],
    lifespanAndReproduction: [
      'They can live for up to about 40 years. Pups are born on the pack ice in spring, and a male often guards the mother and pup.',
    ],
    threatsDetail: [
      'As krill specialists that depend on pack ice, they are vulnerable to warming and to changes in krill abundance, including growing krill fisheries.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Lobodon', species: 'Lobodon carcinophaga' }),
  },
  {
    slug: 'ross-seal',
    commonName: 'Ross seal',
    alternativeNames: [],
    scientificName: 'Ommatophoca rossii',
    authority: 'Gray, 1844',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The least-known seal of the Antarctic, with huge eyes for its size and a short snout. It lives in the dense pack ice, where few ships can reach it.',
    mainImage: null,

    length: { min: 1.7, max: 2.1 },
    weight: { min: 130, max: 215 },
    lifespan: { min: 20, max: 21 },
    threats: ['Climate change', 'Sea ice loss'],
    distributionShort: 'Dense Antarctic pack ice',
    oceans: ['southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['Antarctic Treaty System'],
    legalProtection: ['Convention for the Conservation of Antarctic Seals'],

    about: [
      'The Ross seal lives in the thick, heavy pack ice around Antarctica and spends much of the year at sea, far from the ice. It is the rarest and least-studied of the Antarctic seals.',
      'Tracking studies show it spends the months after moulting far out in the open ocean, diving for squid and fish.',
    ],
    populationStatus: [
      'Estimates range widely, from tens of thousands to a few hundred thousand. It is listed as Least Concern.',
    ],
    appearance: [
      'Ross seals are plump, with a short, wide head, a small mouth and very large eyes — the largest, relative to body size, of any seal. The throat and chest often have dark streaks.',
    ],
    behaviourAndDiet: [
      'They feed on squid, fish and krill. When approached, they raise their heads and inflate their throats, producing trills and siren-like sounds.',
    ],
    lifespanAndReproduction: [
      'Little is known about their reproduction. Pups are born on the ice in spring.',
    ],
    threatsDetail: [
      'No direct threats are known, but long-term changes in Antarctic sea ice may affect them.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Ommatophoca', species: 'Ommatophoca rossii' }),
  },

  // ---------- Elephant seals ----------
  {
    slug: 'northern-elephant-seal',
    commonName: 'Northern elephant seal',
    alternativeNames: [],
    scientificName: 'Mirounga angustirostris',
    authority: 'Gill, 1866',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'A giant seal that was hunted down to perhaps a few dozen animals in the 1890s and has since recovered to more than 200,000 — one of the great comebacks in conservation.',
    mainImage: noaaImage('northern-elephant-seal', 'Illustration of a male northern elephant seal raising its head and large, drooping nose'),

    length: { min: 2.5, max: 5 },
    weight: { min: 400, max: 2300 },
    lifespan: { min: 9, max: 20 },
    threats: ['Entanglement', 'Pollution', 'Climate change'],
    distributionShort: 'Eastern North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['US Marine Mammal Protection Act'],
    legalProtection: ['US Marine Mammal Protection Act'],

    about: [
      'Northern elephant seals breed on islands and beaches of California and Baja California and spend most of the year at sea, making two long foraging trips a year that can total 18,000–21,000 km.',
      'Adult males have a large, inflatable nose, or proboscis, that amplifies their deep, rhythmic threat calls.',
    ],
    populationStatus: [
      'Hunted for their oil, they were thought to be extinct by the 1880s, until a small colony was found on Guadalupe Island, Mexico. Protected by Mexico and the United States, they now number more than 200,000.',
      'Because they all descend from so few survivors, they have very little genetic diversity.',
    ],
    appearance: [
      'Males are enormous — up to 5 metres and over 2 tonnes — with a thick, scarred chest shield. Females are much smaller, at around 3 metres and 400–900 kg.',
    ],
    behaviourAndDiet: [
      'They dive almost continuously while at sea, typically to 300–800 metres and sometimes beyond 1,500 metres, feeding on squid and fish. They sleep for only about two hours a day while at sea, in short naps during deep dives.',
      'On the breeding beaches, dominant males fight for access to groups of females.',
    ],
    lifespanAndReproduction: [
      'Females live for about 20 years; males, worn out by fighting and breeding, rarely live beyond 13.',
      'Pups are nursed for about four weeks and then left to teach themselves to swim and feed.',
    ],
    threatsDetail: [
      'Entanglement in debris and fishing gear, pollution and changes in prey linked to warming are the main concerns. Disturbance on beaches is managed in popular viewing areas.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Mirounga', species: 'Mirounga angustirostris' }),
  },
  {
    slug: 'southern-elephant-seal',
    commonName: 'Southern elephant seal',
    alternativeNames: [],
    scientificName: 'Mirounga leonina',
    authority: 'Linnaeus, 1758',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The largest seal and the largest carnivoran on Earth: males can weigh up to 4 tonnes. Southern elephant seals dive deeper than 2,000 metres in the Southern Ocean.',
    mainImage: null,

    length: { min: 2.6, max: 5.8 },
    weight: { min: 350, max: 4000 },
    lifespan: { min: 20, max: 23 },
    threats: ['Disease', 'Climate change', 'Prey depletion'],
    distributionShort: 'Sub-Antarctic islands & Southern Ocean',
    oceans: ['southern', 'south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'stable',
    protectedUnder: ['CITES II', 'Antarctic Treaty System'],
    legalProtection: ['CITES — Appendix II', 'Convention for the Conservation of Antarctic Seals'],

    about: [
      'Southern elephant seals breed on sub-Antarctic islands such as South Georgia, Kerguelen and Macquarie, and on Península Valdés in Argentina. They spend most of the year feeding in the Southern Ocean.',
      'Tagging studies on elephant seals have collected huge amounts of ocean data, helping oceanographers measure temperature and salinity under the sea ice.',
    ],
    populationStatus: [
      'There are several hundred thousand, and the species is listed as Least Concern. Like their northern relatives, they were heavily hunted for oil in the 19th century.',
      'In 2023, an outbreak of avian influenza killed most of the pups born that year at Península Valdés, and the virus has since reached sub-Antarctic islands.',
    ],
    appearance: [
      'Males are enormous, with a large, trunk-like nose, and can be ten times heavier than females. Both sexes are grey to brown.',
    ],
    behaviourAndDiet: [
      'They feed on squid and fish, diving almost continuously at sea, typically to 400–1,000 metres and sometimes beyond 2,000 metres, for up to two hours.',
      'Breeding males defend large groups of females on the beaches, roaring and fighting with rivals.',
    ],
    lifespanAndReproduction: [
      'Females live for about 20 years and males somewhat less. Pups are nursed for about three weeks and quadruple their birth weight.',
    ],
    threatsDetail: [
      'Disease, especially highly pathogenic avian influenza, is now a serious threat. Changes in the Southern Ocean ecosystem may affect their food supply.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Mirounga', species: 'Mirounga leonina' }),
  },

  // ---------- Monk seals and inland seals ----------
  {
    slug: 'hawaiian-monk-seal',
    commonName: 'Hawaiian monk seal',
    alternativeNames: ['ʻĪlio-holo-i-ka-uaua'],
    scientificName: 'Neomonachus schauinslandi',
    authority: 'Matschie, 1905',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'One of the most endangered seals in the world, found only in the Hawaiian Islands. Around 1,600 survive, and their numbers are slowly rising thanks to intensive conservation.',
    mainImage: noaaImage('hawaiian-monk-seal', 'Illustration of a Hawaiian monk seal: a grey seal with a pale belly and a rounded head'),

    length: { min: 2.1, max: 2.4 },
    weight: { min: 170, max: 270 },
    lifespan: { min: 25, max: 30 },
    threats: ['Small population', 'Entanglement', 'Disease', 'Habitat loss', 'Human disturbance'],
    distributionShort: 'Hawaiian Islands',
    oceans: ['north-pacific'],

    iucnStatus: 'EN',
    populationTrend: 'increasing',
    protectedUnder: ['CITES I', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix I', 'US Endangered Species Act — Endangered', 'US Marine Mammal Protection Act'],

    about: [
      'The Hawaiian monk seal lives only in the Hawaiian archipelago, mostly in the remote Northwestern Hawaiian Islands of Papahānaumokuākea, with a growing number in the main islands.',
      'In 2014 it was placed in its own genus, Neomonachus, together with the extinct Caribbean monk seal, after DNA showed it is not as close to the Mediterranean monk seal as once thought.',
    ],
    populationStatus: [
      'The population fell for decades to around 1,100 animals, but has risen to around 1,600 since the early 2010s thanks to work that includes rescuing young seals, removing marine debris and vaccinating against disease.',
    ],
    appearance: [
      'Monk seals are grey above and cream below, often with a greenish tinge from algae. They have a rounded head and short snout.',
    ],
    behaviourAndDiet: [
      'They feed on fish, octopus, eels and crustaceans on reefs and slopes, sometimes diving to more than 500 metres.',
      'They rest on sandy beaches, often alone, and are easily disturbed by people and dogs.',
    ],
    lifespanAndReproduction: [
      'They live for about 25–30 years. Pups are nursed for five to six weeks, during which the mother does not feed.',
    ],
    threatsDetail: [
      'Entanglement in marine debris, poor survival of young seals, toxoplasmosis spread by cats, and human disturbance are major threats.',
      'Rising seas and storms are eroding the low islands where most pups are born: in 2018, a hurricane washed away almost all of East Island, an important breeding site.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Neomonachus', species: 'Neomonachus schauinslandi' }),
  },
  {
    slug: 'caspian-seal',
    commonName: 'Caspian seal',
    alternativeNames: [],
    scientificName: 'Pusa caspica',
    authority: 'Gmelin, 1788',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'A small seal found only in the Caspian Sea, the largest lake on Earth. Its numbers have fallen by more than 90% since the early 20th century.',
    mainImage: null,

    length: { min: 1.2, max: 1.5 },
    weight: { min: 50, max: 86 },
    lifespan: { min: 35, max: 50 },
    threats: ['Bycatch', 'Hunting', 'Pollution', 'Climate change', 'Disease'],
    distributionShort: 'Caspian Sea',
    oceans: ['freshwater'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: [],
    legalProtection: [],

    about: [
      'The Caspian seal lives only in the Caspian Sea, a vast, landlocked body of brackish water between Europe and Asia. It breeds on the winter ice of the shallow northern Caspian and spreads through the rest of the sea in summer.',
      'Its ancestors are thought to have reached the Caspian from the Arctic via rivers and lakes during or after the ice ages.',
    ],
    populationStatus: [
      'There were perhaps a million Caspian seals at the start of the 20th century. Hunting, bycatch and habitat loss have reduced them by more than 90%, and the species is listed as Endangered.',
      'Mass die-offs, including outbreaks of distemper, have been recorded repeatedly in recent decades.',
    ],
    appearance: [
      'It is a small seal, grey with dark spots, closely related to the ringed seal and the Baikal seal.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish such as sprat and gobies, as well as crustaceans.',
    ],
    lifespanAndReproduction: [
      'It can live for up to about 50 years. Pups are born on the ice in late winter with a white coat and are nursed for four to five weeks.',
    ],
    threatsDetail: [
      'Thousands drown every year in illegal fishing nets set for sturgeon. Pollution from oil and gas development and the shrinking of winter ice as the climate warms are growing threats.',
      'The level of the Caspian Sea is falling, which may reduce the shallow northern areas where the seals breed.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Pusa', species: 'Pusa caspica' }),
  },
  {
    slug: 'baikal-seal',
    commonName: 'Baikal seal',
    alternativeNames: ['Nerpa'],
    scientificName: 'Pusa sibirica',
    authority: 'Gmelin, 1788',
    category: 'Seal',
    family: 'Phocidae',
    summary:
      'The only seal that lives entirely in fresh water, found only in Lake Baikal in Siberia — more than 1,500 km from the nearest sea.',
    mainImage: null,

    length: { min: 1.1, max: 1.4 },
    weight: { min: 50, max: 90 },
    lifespan: { min: 40, max: 56 },
    threats: ['Hunting', 'Pollution', 'Climate change', 'Disease'],
    distributionShort: 'Lake Baikal',
    oceans: ['freshwater'],

    iucnStatus: 'LC',
    populationTrend: 'stable',
    protectedUnder: [],
    legalProtection: [],

    about: [
      'The Baikal seal lives only in Lake Baikal, the deepest and oldest lake on Earth. How its ancestors got there is still debated, but they probably came from the Arctic Ocean through rivers and lakes during the ice ages.',
      'It is one of the smallest seals, and it can dive to 300 metres in the cold, clear water of the lake.',
    ],
    populationStatus: [
      'There are around 100,000 Baikal seals, and the species is listed as Least Concern. A regulated hunt continues.',
    ],
    appearance: [
      'It is small and plump, uniformly silvery-grey, with large eyes adapted to the dim light at depth.',
    ],
    behaviourAndDiet: [
      'It feeds mainly on golomyanka — translucent, oily fish found only in Lake Baikal — and on sculpins.',
      'Like ringed seals, it keeps breathing holes open in the ice with its claws, and females give birth in snow lairs on the frozen lake.',
    ],
    lifespanAndReproduction: [
      'It is one of the longest-lived seals: females can live for more than 50 years.',
    ],
    threatsDetail: [
      'Pollution, hunting and disease are the main concerns; a distemper outbreak in 1987–88 killed thousands. Shorter winters with less ice and snow could threaten the lairs that pups depend on.',
    ],
    classification: pinnipedClassification({ family: 'Phocidae', genus: 'Pusa', species: 'Pusa sibirica' }),
  },
]
