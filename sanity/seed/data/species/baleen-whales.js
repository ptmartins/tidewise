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
      'One of the most endangered whales on Earth. Once hunted on both sides of the North Atlantic, the North Atlantic right whale now survives almost entirely off eastern North America, with only a few hundred animals left.',
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
    oceans: ['north-atlantic'],
    distributionInPortugal: 'Right whales were once hunted along the Iberian coast. Only a handful of confirmed records exist in Portuguese waters in recent decades, including sightings around the Azores, and any sighting is of great scientific importance.',

    about: [
      'The North Atlantic right whale is a large, rotund baleen whale with no dorsal fin, a strongly arched mouth and rough patches of skin called callosities on its head. Its name is said to come from whalers, who considered it the “right” whale to hunt: slow, coastal and buoyant once killed.',
      'Today almost the entire population lives in the western North Atlantic, between Florida and Canada. The eastern population that once fed and calved off Europe, including the Iberian Peninsula, was hunted to near extinction by the 18th century.',
    ],
    populationStatus: [
      'Fewer than 400 individuals remain, with fewer than 70 breeding females. The species is listed as Critically Endangered, and deaths caused by humans currently outpace births.',
      'Most of the population now moves between feeding grounds off New England and Canada and calving grounds off Florida and Georgia. Sightings in the eastern North Atlantic, where the species once lived, are now exceptional.',
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
      'The largest animal that has ever lived. Blue whales roam every ocean, migrating between rich feeding grounds and warmer waters, and calling to each other across hundreds of kilometres.',
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
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian', 'southern'],
    distributionInPortugal: 'Blue whales are most often seen in the Azores, where they pause to feed on krill during their spring migration, and less often around Madeira and off the mainland.',

    about: [
      'Blue whales can reach 30 metres and weigh as much as 150 tonnes — heavier than any dinosaur. Their heart alone is the size of a small car, and their calls are among the loudest sounds made by any animal.',
      'They are found in every ocean, usually far offshore. Many populations migrate between high-latitude feeding grounds in summer and lower latitudes in winter, pausing wherever dense krill swarms form.',
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
      'The second-largest animal on Earth and one of the fastest whales, nicknamed the “greyhound of the sea”. Fin whales live in all the world’s oceans, from the tropics to the edge of the polar ice.',
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
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian', 'arctic', 'southern'],
    distributionInPortugal: 'Fin whales are seen mostly in the Azores during the spring migration, often alongside blue and sei whales. They also occur off the mainland and Madeira, and were once hunted from Portuguese shore stations.',

    about: [
      'Fin whales are long, slender baleen whales capable of bursts of speed over 35 km/h. They are found in all the world’s oceans, mostly offshore in temperate and polar waters.',
      'Unusually among the large whales, a genetically distinct population lives year-round in the Mediterranean Sea, while others migrate seasonally between feeding and breeding areas.',
    ],
    populationStatus: [
      'Fin whales were heavily hunted in the 20th century, with more than 700,000 killed in the Southern Hemisphere alone. Populations have been recovering since protection and the species was moved from Endangered to Vulnerable in 2018.',
      'Tens of thousands of fin whales are thought to live in the North Atlantic, and the global population is estimated at around 100,000 mature animals.',
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
      'Fin whales are among the whales most often struck by large ships, a significant problem in busy shipping areas such as the Mediterranean and the approaches to major ports.',
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
      'A fast, elusive baleen whale of the open ocean, found in every ocean but rarely seen from shore. Sei whales migrate between subpolar feeding grounds and warmer waters.',
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
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian', 'southern'],
    distributionInPortugal: 'Sei whales pass through the Azores in large numbers every spring, which makes the archipelago one of the best places in the world to see them. Smaller numbers occur off Madeira.',

    about: [
      'Sei whales are the third-largest rorqual, after blue and fin whales. Their name comes from the Norwegian word for pollock (“seje”), as both arrived off Norway at the same time each year.',
      'They are found in deep, offshore waters worldwide and are rarely seen from the coast. Their movements are less predictable than those of other rorquals: they may appear in large numbers in an area one year and be almost absent the next.',
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
      'A warm-water rorqual with three distinctive ridges on its head. Bryde’s whales stay in tropical and warm temperate seas all year, feeding on small schooling fish.',
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
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Madeira lies near the northern edge of the species’ range in the eastern Atlantic and is one of the most reliable places in Europe to see it, mostly from late spring to autumn. Photo-identification there suggests some individuals return in several years, but most appear to be only passing through.',

    about: [
      'Bryde’s (pronounced “broo-dus”) whales live in tropical and warm temperate waters between about 40°N and 40°S. Unlike most baleen whales, they do not make long migrations between polar and tropical waters.',
      'Taxonomists still debate how many species and subspecies there are: a smaller coastal form and a larger offshore form are recognised, and the closely related Rice’s whale of the Gulf of Mexico was described as a separate species in 2021.',
    ],
    populationStatus: [
      'The species is listed as Least Concern globally, but its taxonomy is still debated and some regional populations are small. Numbers in the eastern North Atlantic are not well known.',
      'Coastal populations, such as those off South Africa and in the Gulf of California, are better known than offshore ones, and some appear to stay in the same area all year.',
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
      'One of the smallest and most abundant baleen whales. Common minke whales often surface briefly and quietly before disappearing, and a dwarf form lives in the Southern Hemisphere.',
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
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian', 'arctic'],
    distributionInPortugal: 'Minke whales occur in small numbers off the mainland — especially the north and centre — and around the Azores and Madeira. Their numbers in Portuguese waters have not been estimated.',

    about: [
      'The common minke whale is the smallest and most abundant rorqual in the North Atlantic. Its pointed head gives it a distinctly triangular profile when seen from above.',
      'Common minke whales are found from the tropics to the edge of the polar ice in the North Atlantic and North Pacific. A smaller form, the dwarf minke whale, lives in the Southern Hemisphere and is famous for approaching divers on Australia’s Great Barrier Reef.',
    ],
    populationStatus: [
      'With hundreds of thousands of animals worldwide, the species is listed as Least Concern. Around 130,000 minke whales are estimated in the central and north-eastern North Atlantic.',
      'Minke whales are still hunted commercially, mainly by Norway and Japan, and are the whale species most often killed today.',
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
      'Commercial whaling continues in the North Atlantic and the western North Pacific, where the depleted “J-stock” of the Sea of Japan is of particular concern.',
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
      'Famous for its long flippers, acrobatic breaches and complex songs. Humpbacks make some of the longest migrations of any mammal, between polar feeding grounds and tropical breeding areas.',
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
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian', 'arctic', 'southern'],
    distributionInPortugal: 'Humpbacks are seen mostly in the Azores and Madeira in late winter and spring, and sightings off the mainland coast have been increasing. Song has been recorded in the Azores and off the Portuguese coast.',

    about: [
      'Humpback whales are known for their spectacular behaviour: breaching clear of the water, slapping the surface with their long flippers and lifting their tails high before diving.',
      'They undertake some of the longest migrations of any mammal, between cold feeding grounds and warm breeding areas. Humpbacks live in every ocean, and the population of the Arabian Sea is unusual in staying in tropical waters all year.',
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
      'Males sing long, complex songs on the breeding grounds that can last for hours and change gradually from year to year. Song is also heard on feeding grounds and along migration routes.',
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
  {
    slug: 'bowhead-whale',
    commonName: 'Bowhead whale',
    alternativeNames: ['Greenland right whale', 'Arctic whale'],
    scientificName: 'Balaena mysticetus',
    authority: 'Linnaeus, 1758',
    category: 'Baleen whale',
    family: 'Balaenidae',
    summary:
      'The only baleen whale that lives in the Arctic all year, and the longest-lived mammal known: some bowheads are thought to live for more than 200 years. Its huge, bow-shaped skull can break through sea ice to make a breathing hole.',
    mainImage: null,

    length: { min: 14, max: 18 },
    weight: { min: 75000, max: 100000 },
    lifespan: { min: 100, max: 200 },
    threats: ['Sea ice loss', 'Ship strikes', 'Entanglement', 'Underwater noise', 'Hunting'],
    distributionShort: 'Arctic & sub-Arctic seas',
    oceans: ['arctic', 'north-atlantic', 'north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium', 'US Endangered Species Act — Endangered', 'US Marine Mammal Protection Act'],

    about: [
      'The bowhead whale is a massive, dark baleen whale with no dorsal fin and an enormous head that makes up about a third of its body. It spends its whole life in and around the Arctic sea ice, following the ice edge as it advances and retreats with the seasons.',
      'Its thick skull lets it break through ice to breathe, and its blubber — up to half a metre thick, the thickest of any animal — keeps it warm in near-freezing water. There are four main populations: in the Bering, Chukchi and Beaufort seas, in eastern Canada and West Greenland, around Svalbard and the Barents Sea, and in the Sea of Okhotsk.',
    ],
    populationStatus: [
      'Bowheads were hunted intensively by European and American whalers from the 17th to the early 20th century, and every population was severely depleted. Since protection, the Bering–Chukchi–Beaufort population has recovered to more than 10,000 animals, and the species as a whole is listed as Least Concern.',
      'The Svalbard–Barents Sea and Sea of Okhotsk populations remain small and are considered Endangered. Indigenous communities in Alaska, Canada, Greenland and Chukotka continue a small, regulated subsistence hunt that is central to their culture.',
    ],
    appearance: [
      'Bowheads are stocky and almost entirely black, with a white chin patch and often a pale band at the base of the tail. The mouth is strongly bowed, and the back is smooth, with no dorsal fin or hump.',
      'They have the longest baleen of any whale — up to about 4 metres — hanging in more than 300 plates on each side of the upper jaw. The V-shaped blow can reach 6 metres.',
    ],
    behaviourAndDiet: [
      'Bowheads skim-feed on copepods, krill and other small crustaceans, swimming slowly with their mouths open at the surface or in mid-water, and sometimes feeding close to the seabed.',
      'They are among the most vocal of all whales. Bowheads around Svalbard sing a huge and constantly changing repertoire of songs during the dark Arctic winter, more like the variety of songbirds than the slowly evolving songs of humpbacks.',
    ],
    lifespanAndReproduction: [
      'Chemical changes in the lenses of their eyes, and old stone and metal harpoon tips found in harvested whales, suggest that some bowheads live for more than 200 years — longer than any other mammal.',
      'They mature late, at about 25 years. After a gestation of 13–14 months, a calf of about 4–4.5 metres is born in spring, and females give birth only every three to four years.',
    ],
    threatsDetail: [
      'As Arctic sea ice shrinks, shipping, oil and gas exploration and fishing are moving into waters that were once ice-covered all year, bringing new risks of ship strikes, entanglement, oil spills and noise.',
      'Less ice may also expose bowheads to more attacks by killer whales, which are moving further into the Arctic. At the same time, changing ocean conditions are altering the plankton they feed on.',
    ],
    classification: mysticete('Balaenidae', 'Balaena', 'Balaena mysticetus'),
  },
  {
    slug: 'southern-right-whale',
    commonName: 'Southern right whale',
    alternativeNames: [],
    scientificName: 'Eubalaena australis',
    authority: 'Desmoulins, 1822',
    category: 'Baleen whale',
    family: 'Balaenidae',
    summary:
      'A large, slow-moving whale of the Southern Hemisphere, with pale callosities on its head. Each winter, mothers and calves gather in sheltered bays in Argentina, South Africa, Australia and New Zealand, where they can be watched from the shore.',
    mainImage: null,

    length: { min: 13, max: 17 },
    weight: { min: 40000, max: 80000 },
    lifespan: { min: 70, max: 100 },
    threats: ['Entanglement', 'Ship strikes', 'Climate change', 'Underwater noise'],
    distributionShort: 'Temperate & sub-Antarctic Southern Hemisphere',
    oceans: ['south-atlantic', 'south-pacific', 'indian', 'southern'],

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium', 'US Endangered Species Act — Endangered'],

    about: [
      'The southern right whale is the Southern Hemisphere counterpart of the North Atlantic and North Pacific right whales. It feeds in cold sub-Antarctic waters in summer and moves to warmer coastal waters in winter to give birth.',
      'Its main calving grounds — Península Valdés in Argentina, the southern coast of South Africa, southern Australia and New Zealand’s sub-Antarctic Auckland Islands — are among the best places in the world to watch large whales from land.',
    ],
    populationStatus: [
      'Commercial whaling reduced southern right whales to perhaps a few hundred animals by the 1920s. Since protection they have recovered steadily, at around 7% a year in some areas, and today number more than 10,000, so the species is listed as Least Concern.',
      'Some populations, such as those off Chile and Peru, remain very small. Long-term photo-identification at Península Valdés, running since 1970, has made this one of the best-studied whale populations on Earth.',
    ],
    appearance: [
      'Southern right whales are large and rotund, mostly black, often with white patches on the belly. They have no dorsal fin, and the head is covered in rough, pale callosities whose pattern is unique to each animal.',
      'A small proportion of calves are born pale, almost white, and darken as they grow. The blow is V-shaped and bushy, and the broad, smooth flukes are often lifted high before a dive.',
    ],
    behaviourAndDiet: [
      'Southern right whales skim-feed on copepods and krill, mostly in the open ocean between the subtropical and Antarctic fronts. They hardly feed at all on the calving grounds.',
      'Off Argentina, they sometimes hold their tails up in the wind for long periods, a behaviour known as “sailing”. Mothers and calves rest close to shore, and the calves are often playful and curious.',
    ],
    lifespanAndReproduction: [
      'Southern right whales probably live for 70 years or more. Females give birth to a single calf of about 5–6 metres after a gestation of about one year.',
      'They typically calve every three years, but in recent decades the interval has lengthened in some populations, apparently because of poorer feeding conditions linked to climate change.',
    ],
    threatsDetail: [
      'Entanglement in fishing gear and collisions with ships are the main direct threats, especially near busy coastal calving grounds.',
      'Warming seas and changes in krill abundance in the Southern Ocean are thought to be reducing the body condition of females and slowing reproduction. At Península Valdés, kelp gulls that peck at the backs of resting whales have become a serious welfare problem for calves.',
    ],
    classification: mysticete('Balaenidae', 'Eubalaena', 'Eubalaena australis'),
  },
  {
    slug: 'north-pacific-right-whale',
    commonName: 'North Pacific right whale',
    alternativeNames: [],
    scientificName: 'Eubalaena japonica',
    authority: 'Lacépède, 1818',
    category: 'Baleen whale',
    family: 'Balaenidae',
    summary:
      'Probably the rarest large whale on Earth. The eastern population, in the Bering Sea and Gulf of Alaska, numbers only around 30 animals, and nobody knows where it gives birth.',
    mainImage: noaaImage('north-pacific-right-whale', 'Illustration of a North Pacific right whale: a stocky black whale with no dorsal fin and pale callosities on its head'),

    length: { min: 13, max: 18 },
    weight: { min: 40000, max: 90000 },
    lifespan: { min: 70, max: 100 },
    threats: ['Small population', 'Ship strikes', 'Entanglement', 'Climate change'],
    distributionShort: 'North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'EN',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium', 'US Endangered Species Act — Endangered', 'US Marine Mammal Protection Act'],

    about: [
      'The North Pacific right whale was recognised as a separate species from its North Atlantic and southern relatives only in the 2000s, after genetic studies. It once ranged across the whole North Pacific, from Japan to California.',
      'Today it survives as two small populations: a western one that feeds mainly in the Sea of Okhotsk, and a tiny eastern one in the south-eastern Bering Sea and Gulf of Alaska.',
    ],
    populationStatus: [
      'Right whales were hunted heavily in the 19th century, and in the 1960s illegal Soviet whaling killed several hundred more, devastating the eastern population just as it might have begun to recover.',
      'The eastern population is estimated at around 30 animals and is listed as Critically Endangered on its own. The western population may number a few hundred. Sightings of calves are extremely rare, and no calving ground has ever been found.',
    ],
    appearance: [
      'North Pacific right whales are large, black and rotund, with no dorsal fin and a strongly arched jaw. Their heads carry pale callosities, rough patches of skin colonised by whale lice.',
      'They are almost impossible to tell apart from other right whales by sight, but their range does not overlap with the other two species.',
    ],
    behaviourAndDiet: [
      'They feed on dense swarms of copepods, skimming slowly through the water with their mouths open. In the Bering Sea they are found mainly over the middle shelf in summer.',
      'In 2019, researchers reported that male North Pacific right whales sing — the first time song had been recorded in any right whale. Their repeated patterns of “gunshot” calls may serve, as in other whales, to attract mates.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history, but it is probably similar to that of other right whales: a long life, maturity at around 10 years, and a single calf after a gestation of about a year.',
      'Because so few calves have been seen, scientists do not know where or when they are born — a major gap for conservation.',
    ],
    threatsDetail: [
      'With so few animals left, every death matters. Collisions with ships and entanglement in fishing gear are the main known risks, and shipping through the Bering Sea is increasing as Arctic ice retreats.',
      'Oil and gas development, noise and climate-driven changes in the copepods they eat are further concerns.',
    ],
    classification: mysticete('Balaenidae', 'Eubalaena', 'Eubalaena japonica'),
  },
  {
    slug: 'pygmy-right-whale',
    commonName: 'Pygmy right whale',
    alternativeNames: [],
    scientificName: 'Caperea marginata',
    authority: 'Gray, 1846',
    category: 'Baleen whale',
    family: 'Neobalaenidae',
    summary:
      'The smallest and most mysterious baleen whale. Rarely seen alive, the pygmy right whale may be the last survivor of an ancient family of whales that was thought to have died out millions of years ago.',
    mainImage: null,

    length: { min: 5.5, max: 6.5 },
    weight: { min: 3000, max: 3500 },
    lifespan: null,
    threats: ['Bycatch', 'Climate change'],
    distributionShort: 'Temperate Southern Hemisphere',
    oceans: ['south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I'],
    legalProtection: ['CITES — Appendix I', 'IWC commercial whaling moratorium'],

    about: [
      'The pygmy right whale lives in temperate waters of the Southern Hemisphere, between about 30°S and 55°S. Despite its name, it is not closely related to the true right whales.',
      'In 2012, palaeontologists suggested that it is the last living member of the cetotheres, a group of baleen whales known from fossils and thought to have gone extinct around two million years ago — a “living fossil” among whales.',
    ],
    populationStatus: [
      'There are no estimates of population size. The species is listed as Least Concern because it is widespread and was never hunted commercially, but almost everything about it is uncertain.',
      'Most of what we know comes from stranded animals in Australia, New Zealand and South Africa. Confirmed sightings at sea are rare.',
    ],
    appearance: [
      'Pygmy right whales are small and slender, dark grey above and paler below, with a strongly arched jawline and a small, hooked dorsal fin set well back on the body.',
      'Inside, they are unique: they have 17 pairs of broad, flattened ribs — more than any other baleen whale — that may help support the body or protect the organs during feeding.',
    ],
    behaviourAndDiet: [
      'They are thought to feed mainly on copepods and krill, using their arched mouths to skim or gulp small prey.',
      'At sea they surface briefly and inconspicuously, often without a visible blow, and are usually seen alone or in pairs. Young animals are sometimes found in coastal bays.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about their life history. Calves are thought to be around 2 metres long at birth.',
    ],
    threatsDetail: [
      'No major threats are known, but occasional bycatch occurs, and their reliance on small crustaceans means they may be affected by changes in ocean productivity.',
      'Because they are so rarely seen, it would be difficult to detect a decline.',
    ],
    classification: mysticete('Neobalaenidae', 'Caperea', 'Caperea marginata'),
  },
  {
    slug: 'gray-whale',
    commonName: 'Gray whale',
    alternativeNames: ['Grey whale', 'California gray whale'],
    scientificName: 'Eschrichtius robustus',
    authority: 'Lilljeborg, 1861',
    category: 'Baleen whale',
    family: 'Eschrichtiidae',
    summary:
      'A barnacle-covered whale that feeds by sucking mud from the seabed. Gray whales make one of the longest migrations of any mammal, between Arctic feeding grounds and the warm lagoons of Mexico where they give birth.',
    mainImage: noaaImage('gray-whale', 'Illustration of a gray whale: a mottled grey whale with pale barnacle patches and a row of knuckles along its back'),

    length: { min: 12, max: 15 },
    weight: { min: 15000, max: 35000 },
    lifespan: { min: 50, max: 70 },
    threats: ['Climate change', 'Ship strikes', 'Entanglement', 'Prey depletion', 'Underwater noise'],
    distributionShort: 'North Pacific coasts',
    oceans: ['north-pacific', 'arctic'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'IWC commercial whaling moratorium', 'US Endangered Species Act — Endangered (western population)', 'US Marine Mammal Protection Act'],

    about: [
      'The gray whale is the only living member of its family. It lives in coastal waters of the North Pacific, migrating each year between feeding grounds in the Bering, Chukchi and Beaufort seas and calving lagoons in Baja California — a round trip of up to 20,000 km.',
      'Gray whales disappeared from the North Atlantic by the 18th century. Yet in 2010 and again in 2021, single gray whales turned up in the Mediterranean, and one appeared off Namibia in 2013 — probably travelling through Arctic waters that are now ice-free in summer.',
    ],
    populationStatus: [
      'The eastern North Pacific population recovered from whaling so well that it was removed from the US endangered species list in 1994. It has since fluctuated between about 15,000 and 27,000 animals, with hundreds of whales stranding during an unusual mortality event between 2019 and 2023.',
      'The western North Pacific population, which feeds off Sakhalin Island in Russia, numbers only a few hundred animals and is listed as Endangered.',
    ],
    appearance: [
      'Gray whales are mottled grey and covered in white and orange patches of barnacles and whale lice. They have no dorsal fin, but a low hump followed by a series of “knuckles” along the back.',
      'The head is narrow and slightly arched, with short, creamy baleen and only two to five throat grooves. The blow is low and heart-shaped.',
    ],
    behaviourAndDiet: [
      'Gray whales are the only baleen whales that regularly feed on the seabed. They roll on their side, suck up mouthfuls of sediment and filter out amphipods and other small animals, leaving pits in the sea floor. Most rub one side of the head on the bottom, wearing down the baleen on that side.',
      'In the lagoons of Baja California, some mothers and calves approach small boats and allow people to touch them — the famous “friendly whales” of San Ignacio Lagoon.',
    ],
    lifespanAndReproduction: [
      'Gray whales live for 50–70 years. Females give birth every two years, after a gestation of about 13 months, mostly in January and February.',
      'Calves are 4.5–5 metres long at birth and spend their first months in the sheltered lagoons before starting the long journey north with their mothers.',
    ],
    threatsDetail: [
      'Warming in the Arctic is changing the seabed communities gray whales feed on, and poor feeding conditions are thought to have contributed to the recent mass mortality.',
      'Along the migration route they face ship strikes, entanglement and noise, and the western population is exposed to oil and gas development off Sakhalin.',
    ],
    classification: mysticete('Eschrichtiidae', 'Eschrichtius', 'Eschrichtius robustus'),
  },
  {
    slug: 'antarctic-minke-whale',
    commonName: 'Antarctic minke whale',
    alternativeNames: ['Southern minke whale'],
    scientificName: 'Balaenoptera bonaerensis',
    authority: 'Burmeister, 1867',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'The most abundant baleen whale of the Southern Ocean, at home among the pack ice. For decades its strange underwater “bio-duck” quacks puzzled scientists, until they were traced to this whale in 2014.',
    mainImage: null,

    length: { min: 7, max: 10.7 },
    weight: { min: 5000, max: 11000 },
    lifespan: { min: 40, max: 60 },
    threats: ['Sea ice loss', 'Climate change', 'Whaling'],
    distributionShort: 'Southern Hemisphere, mainly Antarctic',
    oceans: ['southern', 'south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II', 'IWC commercial whaling moratorium'],

    about: [
      'The Antarctic minke whale lives mainly in the Southern Ocean, where it is the commonest baleen whale close to and within the pack ice. Many migrate to tropical and subtropical waters in winter, although some appear to stay in Antarctica all year.',
      'It was recognised as a separate species from the common minke whale only in the 1990s, after genetic studies showed the two had been apart for millions of years.',
    ],
    populationStatus: [
      'Surveys by the International Whaling Commission estimated about half a million Antarctic minke whales around 2000. Earlier surveys gave higher figures, and it is still debated whether the population has declined or the methods differed.',
      'Japan killed thousands of Antarctic minke whales under scientific permits between 1987 and 2019, when it left the IWC and stopped whaling in the Antarctic. The species is listed as Near Threatened.',
    ],
    appearance: [
      'Antarctic minke whales are dark grey above and white below, with a narrow, pointed snout and a tall, hooked dorsal fin. Unlike common minke whales, they usually lack a bright white band on the flippers.',
      'They are slightly larger than common minke whales, and their blow is low and often hard to see.',
    ],
    behaviourAndDiet: [
      'They feed almost entirely on Antarctic krill, often under or near the edge of the sea ice, where few other whales can follow.',
      'The low, repetitive “bio-duck” sound, first heard by submarine crews in the 1960s, was finally traced to Antarctic minke whales in 2014 using acoustic tags. It is heard mostly in winter and spring.',
    ],
    lifespanAndReproduction: [
      'Antarctic minke whales live for around 40–60 years. They mature at about 7–8 years, and females can give birth almost every year.',
      'Gestation lasts about 10 months, and calves are about 2.8 metres long at birth, probably born in warmer waters in winter.',
    ],
    threatsDetail: [
      'Because they depend so closely on sea ice and krill, Antarctic minke whales are especially vulnerable to the effects of climate change on the Southern Ocean.',
      'Commercial and scientific whaling in the Antarctic has ended for now, but a renewed hunt or growing krill fisheries could add to the pressure.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera bonaerensis'),
  },
  {
    slug: 'rices-whale',
    commonName: 'Rice’s whale',
    alternativeNames: ['Gulf of Mexico Bryde’s whale'],
    scientificName: 'Balaenoptera ricei',
    authority: 'Rosel, Wilcox, Yamada & Mullin, 2021',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'One of the most endangered whales on Earth, described as a new species only in 2021. Around 50 Rice’s whales survive, all of them in a small area of the north-eastern Gulf of Mexico.',
    mainImage: noaaImage('rices-whale', 'Illustration of a Rice’s whale: a sleek grey rorqual with a tall, hooked dorsal fin'),

    length: { min: 10, max: 12.7 },
    weight: { min: 15000, max: 27000 },
    lifespan: null,
    threats: ['Small population', 'Ship strikes', 'Pollution', 'Underwater noise', 'Entanglement'],
    distributionShort: 'Gulf of Mexico',
    oceans: ['north-atlantic'],

    iucnStatus: 'CR',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix I', 'IWC commercial whaling moratorium', 'US Endangered Species Act — Endangered', 'US Marine Mammal Protection Act'],

    about: [
      'Rice’s whale was long thought to be a population of Bryde’s whale. Genetic and skull studies showed it to be a distinct species, and it was named in 2021 after the American cetologist Dale Rice, who first noticed whales in the area in the 1960s.',
      'It is the only baleen whale that lives year-round in the Gulf of Mexico, and almost all sightings come from a narrow band of water 100–400 metres deep along the De Soto Canyon, off Florida.',
    ],
    populationStatus: [
      'The population is estimated at only around 50 animals, making it one of the smallest of any whale species. It is listed as Critically Endangered.',
      'The 2010 Deepwater Horizon oil spill covered nearly half of its known habitat and is estimated to have killed around a fifth of the population.',
    ],
    appearance: [
      'Rice’s whales look very like Bryde’s whales: sleek and dark grey, with three ridges on the top of the head and a tall, hooked dorsal fin.',
      'They can only be reliably told apart by their skulls, genetics and calls — and by where they live.',
    ],
    behaviourAndDiet: [
      'Tagging studies show they feed close to the seabed, especially at night, on schooling fish. Between feeding dives they spend long periods just below the surface.',
      'Their low-frequency calls are distinctive, and passive acoustic monitoring is helping to map where they go.',
    ],
    lifespanAndReproduction: [
      'Very little is known about their reproduction or lifespan. Calves have been seen, but how often females give birth is unknown.',
    ],
    threatsDetail: [
      'With so few animals, the loss of even one or two a year could push the species towards extinction. Their habit of resting near the surface at night makes them vulnerable to ship strikes.',
      'Oil and gas activity, oil spills, seismic surveys, shipping noise and entanglement in fishing gear are all concerns in the busy waters of the Gulf.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera ricei'),
  },
  {
    slug: 'omuras-whale',
    commonName: 'Omura’s whale',
    alternativeNames: ['Dwarf fin whale'],
    scientificName: 'Balaenoptera omurai',
    authority: 'Wada, Oishi & Yamada, 2003',
    category: 'Baleen whale',
    family: 'Balaenopteridae',
    summary:
      'A small, elusive rorqual described only in 2003 from dead specimens. It was not studied alive until 2013, when researchers found a population off the coast of Madagascar.',
    mainImage: null,

    length: { min: 9, max: 11.5 },
    weight: null,
    lifespan: null,
    threats: ['Bycatch', 'Ship strikes', 'Underwater noise'],
    distributionShort: 'Tropical Indo-Pacific & Atlantic',
    oceans: ['indian', 'north-pacific', 'south-pacific', 'north-atlantic', 'south-atlantic'],

    iucnStatus: 'DD',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I'],
    legalProtection: ['CITES — Appendix I', 'IWC commercial whaling moratorium'],

    about: [
      'Omura’s whale was named in 2003 after the Japanese cetologist Hideo Omura, from specimens collected in the 1970s and a whale that stranded in Japan. Until then, it had been confused with Bryde’s whales.',
      'It lives in tropical and warm temperate waters, mostly in the Indian and western Pacific oceans, but records from West Africa and Brazil show it also occurs in the Atlantic.',
    ],
    populationStatus: [
      'There are no population estimates, and the species is listed as Data Deficient.',
      'The first detailed field studies, off north-west Madagascar from 2013, revealed a small population feeding in shallow coastal waters. Since then, the species has also been identified off Australia, Indonesia, Sri Lanka and elsewhere.',
    ],
    appearance: [
      'Omura’s whales are slender, dark grey above and pale below. Like fin whales, their colouring is asymmetrical: the right lower jaw is pale and the left one dark.',
      'They have a single ridge on top of the head — unlike the three ridges of Bryde’s whales — and a tall, curved dorsal fin.',
    ],
    behaviourAndDiet: [
      'They lunge-feed on small crustaceans and fish, sometimes close to shore. They are usually seen alone or in pairs.',
      'Males sing a simple, rhythmic low-frequency song that can be recorded across their range, helping researchers detect them in places where they are rarely seen.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about their life history, though mothers with calves have been photographed off Madagascar.',
    ],
    threatsDetail: [
      'Bycatch in coastal fisheries and ship strikes are probably the main threats in parts of their range.',
      'Seismic surveys and other noise sources in shallow tropical waters may also affect them.',
    ],
    classification: mysticete('Balaenopteridae', 'Balaenoptera', 'Balaenoptera omurai'),
  },
]

