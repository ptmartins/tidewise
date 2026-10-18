import { cetaceanClassification, noaaImage } from './_shared'

const mysticete = (family, genus, species) =>
  cetaceanClassification({ parvorder: 'Mysticeti', family, genus, species })

export const baleenWhales = [
  {
    slug: 'north-atlantic-right-whale',
    commonName: 'North Atlantic right whale',
    alternativeNames: ['Baleia-franca-do-atlântico-norte', 'Baleia-franca'],
    scientificName: 'Eubalaena glacialis',
    authority: 'Müller, 1776',
    category: 'Baleen whale',
    family: 'Balaenidae',
    summary:
      'One of the most endangered whales on Earth. Once hunted along the Iberian coast for centuries, the North Atlantic right whale is now a rare vagrant in Portuguese waters, with only a few hundred animals left.',
    mainImage: noaaImage('north-atlantic-right-whale', 'Illustration of a North Atlantic right whale: a stocky black whale with no dorsal fin and pale callosities on its head'),

    length: { min: 13, max: 17 },
    weight: { min: 40000, max: 70000 },
    lifespan: { min: 70, max: 100 },
    threats: ['Ship strikes', 'Entanglement', 'Underwater noise', 'Climate change'],
    distributionShort: 'Western North Atlantic',

    iucnStatus: 'CR',
    populationTrend: 'decreasing',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Azores', 'Mainland coast'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],

    about: [
      'The North Atlantic right whale is a large, rotund baleen whale with no dorsal fin, a strongly arched mouth and rough patches of skin called callosities on its head. Its name is said to come from whalers, who considered it the “right” whale to hunt: slow, coastal and buoyant once killed.',
      'Today almost the entire population lives in the western North Atlantic, between Florida and Canada. The eastern population that once fed and calved off Europe, including the Iberian Peninsula, was hunted to near extinction by the 18th century.',
    ],
    populationStatus: [
      'Fewer than 400 individuals remain, with fewer than 70 breeding females. The species is listed as Critically Endangered, and deaths caused by humans currently outpace births.',
      'In Portuguese waters, only a handful of confirmed records exist in recent decades, including sightings around the Azores. Any sighting is of great scientific importance.',
    ],
    appearance: [
      'Right whales are mostly black, sometimes with white patches on the belly. The head is huge, up to a quarter of the body length, and covered in whitish callosities colonised by tiny crustaceans called whale lice. The callosity pattern is unique to each animal.',
      'They have broad, paddle-shaped flippers, a smooth back with no dorsal fin, and a V-shaped blow up to 5 metres high that is visible from ahead or behind.',
    ],
    behaviourAndDiet: [
      'Right whales are skim feeders: they swim slowly with their mouths open, filtering zooplankton — mainly copepods — through long, fine baleen plates.',
      'They are usually seen alone or in small groups, but can gather in loose “surface active groups” during courtship. Despite their size, they often breach and slap the water with their flippers and tails.',
    ],
    lifespanAndReproduction: [
      'Right whales can live for 70 years or more. Females give birth to a single calf after a gestation of about one year, typically in warm coastal waters in winter.',
      'Healthy females once calved every three years, but stress from entanglements and changes in prey have stretched the interval to six to ten years, slowing any recovery.',
    ],
    threatsDetail: [
      'Collisions with ships and entanglement in fishing gear are by far the main causes of death. Many surviving whales carry scars from previous entanglements.',
      'Climate change is shifting the distribution of the copepods they depend on, pushing whales into areas with heavy shipping and fishing where they are less protected.',
    ],
    classification: mysticete('Balaenidae', 'Eubalaena', 'Eubalaena glacialis'),
  },
  {
    slug: 'blue-whale',
    commonName: 'Blue whale',
    alternativeNames: ['Baleia-azul'],
    scientificName: 'Balaenoptera musculus',
    authority: 'Linnaeus, 1758',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'The largest animal that has ever lived. Every spring, blue whales pass through the Azores and Madeira on their way to northern feeding grounds, offering some of the best chances in Europe to see them.',
    mainImage: noaaImage('blue-whale', 'Illustration of a blue whale: a long, slender blue-grey whale with mottled skin and a tiny dorsal fin far back on the body'),

    length: { min: 20, max: 30 },
    weight: { min: 100000, max: 150000 },
    lifespan: { min: 70, max: 90 },
    threats: ['Ship strikes', 'Underwater noise', 'Entanglement', 'Climate change'],
    distributionShort: 'All oceans, mostly offshore',

    iucnStatus: 'EN',
    populationTrend: 'increasing',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Azores', 'Madeira', 'Mainland coast'],
    residency: 'Seasonal / migratory',
    sightingFrequency: 'Uncommon',
    bestMonths: ['march', 'april', 'may', 'june'],

    about: [
      'Blue whales can reach 30 metres and weigh as much as 150 tonnes — heavier than any dinosaur. Their heart alone is the size of a small car, and their calls are among the loudest sounds made by any animal.',
      'They are found in every ocean, usually far offshore. In Portugal they are most often seen in the Azores, where they pause during their spring migration to feed on krill swarms, and less often around Madeira and off the mainland.',
    ],
    populationStatus: [
      'Industrial whaling in the 20th century killed over 350,000 blue whales, reducing some populations by more than 99%. Since full protection in 1966 they have slowly recovered, and the species is now listed as Endangered.',
      'The North Atlantic population is estimated at a few thousand animals. Photo-identification shows that some individuals seen in the Azores are later recorded off Iceland and Norway.',
    ],
    appearance: [
      'Blue whales are long and streamlined, with a broad, U-shaped head and a mottled blue-grey skin that looks pale turquoise under water. The dorsal fin is tiny and set far back.',
      'Their blow is tall and column-shaped, reaching 9 metres. When diving they often show their broad tail flukes. Diatoms on the skin can give the belly a yellowish tinge, earning them the old name “sulphur-bottom”.',
    ],
    behaviourAndDiet: [
      'Blue whales feed almost exclusively on krill. Each lunge engulfs a volume of water larger than the whale itself, and an adult can eat up to 4 tonnes of krill a day during the feeding season.',
      'They are usually solitary or travel in pairs. Their low-frequency calls can travel hundreds of kilometres under water and are thought to play a role in communication and navigation.',
    ],
    lifespanAndReproduction: [
      'Blue whales are thought to live 70–90 years. Females reach maturity at 5–15 years and give birth every two to three years after a gestation of about 11 months.',
      'Newborn calves are already 7 metres long and drink up to 380 litres of milk a day, gaining about 90 kg every day until weaned at six to eight months.',
    ],
    threatsDetail: [
      'Ship strikes are a major cause of death, especially where shipping lanes cross feeding areas. Noise from ships, seismic surveys and sonar can mask their calls and disrupt behaviour.',
      'Climate change threatens the krill they depend on, and entanglement in fishing gear, although less frequent than for smaller whales, also occurs.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera musculus'),
  },
  {
    slug: 'fin-whale',
    commonName: 'Fin whale',
    alternativeNames: ['Baleia-comum', 'Baleia-boba'],
    scientificName: 'Balaenoptera physalus',
    authority: 'Linnaeus, 1758',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'The second-largest animal on Earth and one of the fastest whales, nicknamed the “greyhound of the sea”. Fin whales are regularly seen off the Azores in spring and occasionally off the mainland coast.',
    mainImage: noaaImage('fin-whale', 'Illustration of a fin whale: a long, sleek grey whale with a pale underside and a small hooked dorsal fin'),

    length: { min: 18, max: 24 },
    weight: { min: 40000, max: 80000 },
    lifespan: { min: 80, max: 90 },
    threats: ['Ship strikes', 'Underwater noise', 'Entanglement', 'Climate change'],
    distributionShort: 'All oceans, temperate to polar',

    iucnStatus: 'VU',
    populationTrend: 'increasing',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Azores', 'Madeira', 'Mainland coast'],
    residency: 'Seasonal / migratory',
    sightingFrequency: 'Uncommon',
    bestMonths: ['march', 'april', 'may', 'june'],

    about: [
      'Fin whales are long, slender baleen whales capable of bursts of speed over 35 km/h. They are found in all the world’s oceans, mostly offshore in temperate and polar waters.',
      'In Portugal, fin whales are seen mostly in the Azores during the spring migration, often alongside blue and sei whales. They also occur off the mainland and Madeira, and occasionally strand on Portuguese beaches.',
    ],
    populationStatus: [
      'Fin whales were heavily hunted in the 20th century, including from Portuguese shore stations. Populations have been recovering since protection and the species was moved from Endangered to Vulnerable in 2018.',
      'Tens of thousands of fin whales are thought to live in the North Atlantic, but numbers in Portuguese waters have not been estimated precisely.',
    ],
    appearance: [
      'Fin whales are dark grey to brownish-black above and white below. Their most distinctive feature is an asymmetric head: the right lower jaw is white, while the left is dark — a pattern unique among whales.',
      'A pale chevron often marks the back behind the head. The dorsal fin is small, hooked and set about two-thirds of the way along the back, appearing shortly after the tall, narrow blow.',
    ],
    behaviourAndDiet: [
      'They feed on krill, small schooling fish and squid, lunging at high speed through prey patches. It is thought they sometimes turn on their right side so the white jaw startles fish into tight schools.',
      'Fin whales are often seen alone or in small groups. Their extremely low-frequency “20 Hz” pulses are among the most powerful sounds in the ocean.',
    ],
    lifespanAndReproduction: [
      'Fin whales can live for 80–90 years. Females reach maturity at 6–10 years and give birth to a single calf every two to three years.',
      'Gestation lasts about 11 months. Calves are around 6 metres long at birth and are weaned at six to seven months, when they are already about 11 metres long.',
    ],
    threatsDetail: [
      'Fin whales are among the whales most often struck by large ships, a significant problem in busy shipping areas off Iberia and in the Mediterranean.',
      'Noise from shipping and seismic surveys can interfere with their long-distance communication, and entanglement and changes in prey due to climate change are additional pressures.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera physalus'),
  },
  {
    slug: 'sei-whale',
    commonName: 'Sei whale',
    alternativeNames: ['Baleia-sardinheira', 'Baleia-boreal'],
    scientificName: 'Balaenoptera borealis',
    authority: 'Lesson, 1828',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'A fast, elusive baleen whale of the open ocean. Sei whales pass through the Azores in large numbers every spring, making the archipelago one of the best places in the world to see them.',
    mainImage: noaaImage('sei-whale', 'Illustration of a sei whale: a dark grey, streamlined whale with a tall, upright dorsal fin'),

    length: { min: 12, max: 18 },
    weight: { min: 15000, max: 30000 },
    lifespan: { min: 50, max: 70 },
    threats: ['Ship strikes', 'Underwater noise', 'Entanglement', 'Climate change'],
    distributionShort: 'All oceans, mostly offshore',

    iucnStatus: 'EN',
    populationTrend: 'increasing',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Azores', 'Madeira'],
    residency: 'Seasonal / migratory',
    sightingFrequency: 'Uncommon',
    bestMonths: ['april', 'may', 'june'],

    about: [
      'Sei whales are the third-largest rorqual, after blue and fin whales. Their name comes from the Norwegian word for pollock (“seje”), as both arrived off Norway at the same time each year.',
      'They are found in deep, offshore waters worldwide and are rarely seen from the coast. In Portugal, they occur mainly in the Azores during the spring migration, with smaller numbers off Madeira.',
    ],
    populationStatus: [
      'Hundreds of thousands of sei whales were killed in the 20th century once faster whaling ships could catch them. The species is listed as Endangered, although numbers appear to be increasing.',
      'Tagging studies in the Azores have shown sei whales travelling directly from the archipelago to feeding grounds in the Labrador Sea, highlighting the islands’ importance on their migration route.',
    ],
    appearance: [
      'Sei whales are dark steel-grey with a paler belly and often have pale, oval scars caused by cookie-cutter sharks. The head has a single central ridge.',
      'Their tall, sickle-shaped dorsal fin rises at a steeper angle than in fin whales. They typically surface at a shallow angle, showing the blowhole and dorsal fin at the same time, and rarely raise their flukes.',
    ],
    behaviourAndDiet: [
      'Unlike other rorquals that mainly lunge, sei whales often skim-feed at the surface, swimming on their side through dense swarms of copepods and krill. They also eat small schooling fish and squid.',
      'They are usually seen alone or in groups of two to five, but can gather in larger numbers where food is plentiful. They are among the fastest whales, reaching speeds over 50 km/h.',
    ],
    lifespanAndReproduction: [
      'Sei whales can live for 50–70 years. Females reach maturity at around 8–10 years and give birth every two to three years.',
      'Gestation lasts 11–12 months. Calves are about 4.5 metres long at birth and nurse for six to nine months.',
    ],
    threatsDetail: [
      'Ship strikes and entanglement in fishing gear are the main human-related threats today. Their offshore habits mean many incidents likely go unreported.',
      'Climate change could affect the copepod blooms they depend on, and noise from shipping and seismic surveys may disrupt their behaviour.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera borealis'),
  },
  {
    slug: 'brydes-whale',
    commonName: 'Bryde’s whale',
    alternativeNames: ['Baleia-de-Bryde', 'Baleia-tropical'],
    scientificName: 'Balaenoptera edeni',
    authority: 'Anderson, 1879',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'A warm-water rorqual with three distinctive ridges on its head. In Portugal, Bryde’s whales are regular summer visitors around Madeira, where they feed on small schooling fish.',
    mainImage: noaaImage('brydes-whale', 'Illustration of a Bryde’s whale: a sleek, dark grey whale with three ridges on top of its head'),

    length: { min: 11, max: 16 },
    weight: { min: 12000, max: 25000 },
    lifespan: { min: 50, max: 70 },
    threats: ['Ship strikes', 'Entanglement', 'Underwater noise'],
    distributionShort: 'Tropical & warm temperate seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Madeira', 'Azores'],
    residency: 'Seasonal / migratory',
    sightingFrequency: 'Uncommon',
    bestMonths: ['june', 'july', 'august', 'september', 'october'],

    about: [
      'Bryde’s (pronounced “broo-dus”) whales live in tropical and warm temperate waters between about 40°N and 40°S. Unlike most baleen whales, they do not make long migrations between polar and tropical waters.',
      'Madeira lies near the northern edge of their range in the eastern Atlantic, and the archipelago is one of the most reliable places in Europe to see them, mostly from late spring to autumn.',
    ],
    populationStatus: [
      'The species is listed as Least Concern globally, but its taxonomy is still debated and some regional populations are small. Numbers in the eastern North Atlantic are not well known.',
      'Photo-identification work in Madeira suggests that some individuals return in multiple years, but most appear to be only passing through.',
    ],
    appearance: [
      'Bryde’s whales are smoky grey above and paler below. Their most distinctive feature is the set of three parallel ridges on top of the head; other rorquals have only one.',
      'The dorsal fin is tall and strongly hooked. The blow is thin and can be inconspicuous, and the whales often change direction unpredictably at the surface.',
    ],
    behaviourAndDiet: [
      'Bryde’s whales feed mainly on small schooling fish such as sardines, mackerel and anchovies, as well as krill. They lunge through bait balls, often alongside dolphins, tuna and seabirds.',
      'They are usually seen alone or in pairs and can dive for up to 20 minutes. Their surfacing pattern is irregular, making them tricky to follow.',
    ],
    lifespanAndReproduction: [
      'Bryde’s whales are thought to live around 50–70 years. Females reach maturity at about 8–11 years.',
      'They can breed year-round in many areas. After a gestation of about 11–12 months, a 4-metre calf is born and nursed for around six months.',
    ],
    threatsDetail: [
      'Because they feed near the surface in coastal and shelf waters, Bryde’s whales are vulnerable to ship strikes and to entanglement in fishing gear.',
      'Noise from shipping and changes in the abundance of small pelagic fish, driven by fishing pressure and climate change, may also affect them.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera edeni'),
  },
  {
    slug: 'common-minke-whale',
    commonName: 'Common minke whale',
    alternativeNames: ['Baleia-anã', 'Baleia-minke'],
    scientificName: 'Balaenoptera acutorostrata',
    authority: 'Lacépède, 1804',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'The smallest rorqual in the North Atlantic. Minke whales are seen in small numbers off the Portuguese mainland and the islands, often surfacing briefly and quietly before disappearing.',
    mainImage: noaaImage('common-minke-whale', 'Illustration of a common minke whale: a small dark grey whale with a pointed snout and a white band on each flipper'),

    length: { min: 7, max: 10 },
    weight: { min: 5000, max: 10000 },
    lifespan: { min: 40, max: 60 },
    threats: ['Bycatch', 'Ship strikes', 'Underwater noise', 'Whaling'],
    distributionShort: 'Northern Hemisphere, all latitudes',

    iucnStatus: 'LC',
    populationTrend: 'stable',
    protectedUnder: ['EU Habitats Directive', 'CITES I'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Mainland coast', 'Azores', 'Madeira'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Uncommon',
    bestMonths: ['march', 'april', 'may', 'june', 'july'],

    about: [
      'The common minke whale is the smallest and most abundant rorqual in the North Atlantic. Its pointed head gives it a distinctly triangular profile when seen from above.',
      'Minke whales are found from the tropics to the edge of the polar ice. In Portugal they occur off the mainland — especially the north and centre — and around the Azores and Madeira, usually in small numbers.',
    ],
    populationStatus: [
      'With hundreds of thousands of animals worldwide, the species is listed as Least Concern. Around 130,000 minke whales are estimated in the central and north-eastern North Atlantic.',
      'Minke whales are still hunted by Norway and Iceland. Their numbers in Portuguese waters are low and have not been estimated precisely.',
    ],
    appearance: [
      'Minke whales are dark grey-black above and white below, with a pointed, narrow snout. The most useful field mark is a bright white band across each flipper.',
      'The dorsal fin is tall and hooked, and appears at the same time as the low, often invisible blow. They rarely show their flukes when diving.',
    ],
    behaviourAndDiet: [
      'Minke whales eat small schooling fish such as sardines, herring, sand eels and capelin, as well as krill. They use a variety of techniques, including lunging through bait balls and trapping fish against the surface.',
      'They are usually solitary and can be curious, sometimes approaching boats. Their surfacing is brief and inconspicuous, which makes them easy to miss in choppy seas.',
    ],
    lifespanAndReproduction: [
      'Minke whales live for around 40–60 years. They reach maturity at 6–8 years and may breed every year or two.',
      'Gestation lasts about 10 months. Calves are around 2.5–2.8 metres long at birth and nurse for four to six months.',
    ],
    threatsDetail: [
      'Entanglement in fishing gear is a significant threat in coastal areas. Minke whales are also struck by vessels and exposed to underwater noise.',
      'Commercial and scientific whaling continue in parts of the North Atlantic, although the animals hunted belong to different stocks from those seen off Portugal.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera acutorostrata'),
  },
  {
    slug: 'humpback-whale',
    commonName: 'Humpback whale',
    alternativeNames: ['Baleia-de-bossa', 'Baleia-corcunda', 'Jubarte'],
    scientificName: 'Megaptera novaeangliae',
    authority: 'Borowski, 1781',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'Famous for its long flippers, acrobatic breaches and complex songs. Humpbacks are seen in spring in the Azores and Madeira, and are increasingly reported off the Portuguese mainland.',
    mainImage: noaaImage('humpback-whale', 'Illustration of a humpback whale: a dark, bulky whale with very long white flippers and knobs on its head'),

    length: { min: 12, max: 16 },
    weight: { min: 25000, max: 40000 },
    lifespan: { min: 45, max: 90 },
    threats: ['Entanglement', 'Ship strikes', 'Underwater noise', 'Climate change'],
    distributionShort: 'All oceans, migratory',

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['EU Habitats Directive', 'CITES I', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium'],

    regionsInPortugal: ['Azores', 'Madeira', 'Mainland coast'],
    residency: 'Seasonal / migratory',
    sightingFrequency: 'Uncommon',
    bestMonths: ['february', 'march', 'april', 'may'],

    about: [
      'Humpback whales are known for their spectacular behaviour: breaching clear of the water, slapping the surface with their long flippers and lifting their tails high before diving.',
      'They undertake some of the longest migrations of any mammal, between cold feeding grounds and warm breeding areas. In Portugal, they are seen mostly in the Azores and Madeira in late winter and spring, and sightings off the mainland coast have been increasing.',
    ],
    populationStatus: [
      'After intense commercial whaling, humpbacks were protected worldwide in 1966. Most populations have since recovered strongly, and the species was moved to Least Concern in 2008.',
      'North Atlantic humpbacks number in the tens of thousands. Individuals photographed in the Azores and Madeira have been matched to feeding grounds in Norway and Iceland and breeding grounds in the Caribbean and Cape Verde.',
    ],
    appearance: [
      'Humpbacks are robust and mostly dark grey or black, with knobbly bumps called tubercles on the head. Their pectoral flippers are the longest of any whale — up to a third of their body length.',
      'The underside of the tail flukes has a black-and-white pattern unique to each whale, which researchers use like a fingerprint. The dorsal fin sits on a small hump, which gives the species its name.',
    ],
    behaviourAndDiet: [
      'Humpbacks feed on krill and small schooling fish. In some regions, groups cooperate to create “bubble nets” — spirals of bubbles that trap prey before the whales lunge up through the middle.',
      'Males sing long, complex songs on the breeding grounds that can last for hours and change gradually from year to year. Song has been recorded in the Azores and off the Portuguese coast.',
    ],
    lifespanAndReproduction: [
      'Humpbacks are thought to live 45–90 years. Females reach maturity at around 5–10 years and usually give birth every two to three years.',
      'Gestation lasts about 11 months. Calves are born in tropical waters at about 4–5 metres long and stay with their mothers for about a year, travelling with them to the feeding grounds.',
    ],
    threatsDetail: [
      'Entanglement in fishing gear is one of the main threats to humpbacks, and many adults carry scars from past entanglements. Ship strikes are a concern near busy ports and shipping lanes.',
      'Noise pollution can disrupt communication, and climate change may affect the availability of krill and fish on their feeding grounds.',
    ],
    classification: mysticete('Balaenopteridae', 'Megaptera', 'Megaptera novaeangliae'),
  },
]

