import { cetaceanClassification, noaaImage } from './_shared'

const delphinid = (genus, species) =>
  cetaceanClassification({ parvorder: 'Odontoceti', family: 'Delphinidae', genus, species })

const SMALL_CETACEAN_PROTECTION = {
  protectedUnder: ['EU Habitats Directive', 'CITES II'],
  legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II'],
}

export const dolphins = [
  {
    slug: 'bottlenose-dolphin',
    commonName: 'Common bottlenose dolphin',
    alternativeNames: ['Roaz', 'Golfinho-roaz', 'Roaz-corvineiro'],
    scientificName: 'Tursiops truncatus',
    authority: 'Montagu, 1821',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'Curious, social and remarkably adaptable, the bottlenose dolphin is one of the most familiar cetaceans in the world, living everywhere from estuaries and harbours to the open ocean.',
    mainImage: {
      src: '/species/bottlenose-dolphin.png',
      width: 800,
      height: 534,
      alt: 'Side-profile illustration of a common bottlenose dolphin with a grey back, pale belly and short, thick snout',
      credit: 'Illustration: NOAA Fisheries',
    },

    length: { min: 1.9, max: 4 },
    weight: { min: 150, max: 650 },
    lifespan: { min: 40, max: 60 },
    threats: ['Bycatch', 'Boat disturbance', 'Pollution', 'Underwater noise', 'Prey depletion'],
    distributionShort: 'Temperate & tropical seas worldwide',

    iucnStatus: 'LC',
    nationalStatus: 'EN',
    nationalStatusNote: 'Sado estuary resident population',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bern Convention', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex II & IV', 'CITES — Appendix II', 'Bern Convention — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    regionsInPortugal: ['Sado estuary', 'Lisbon coast', 'Algarve', 'Azores', 'Madeira'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Common',
    bestMonths: ['may', 'june', 'july', 'august', 'september', 'october'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'In mainland Portugal the species is best known for the resident community of the Sado estuary, near Setúbal — one of only a handful of resident estuarine bottlenose populations in Europe, studied continuously since the 1980s. It numbered around 40 animals in the 1980s and fell to fewer than 30 in the following decades, with very low calf survival, and is classified as Endangered in the Portuguese Red Book of Mammals. Offshore animals around the Azores and Madeira appear to be more numerous and wide-ranging.',

    about: [
      'The common bottlenose dolphin is a medium-sized toothed whale found in temperate and tropical waters around the globe. Its short, stubby beak — the “bottle nose” — and permanent, curved smile have made it the archetypal dolphin in popular culture.',
      'Scientists recognise two broad ecotypes: a smaller coastal form that lives in bays, estuaries and near-shore waters, and a larger, more robust offshore form that ranges over the continental shelf and open ocean. The two differ in body size, diet and genetics, and in some regions they are treated as separate subspecies.',
      'Some coastal communities, such as those of Sarasota Bay in Florida and the Moray Firth in Scotland, have been studied for decades and are among the best-known wild mammal populations on Earth.',
    ],
    populationStatus: [
      'Globally, the species is abundant and widespread, with a total population estimated in the hundreds of thousands. It is listed as Least Concern on the IUCN Red List, although many local populations are small, isolated and declining.',
      'Many coastal communities number only a few dozen animals and live in heavily used bays and estuaries, where they are exposed to bycatch, pollution and disturbance.',
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
      'Accidental capture in fishing gear (bycatch) is one of the main causes of death for coastal dolphins in many parts of the world, particularly in gillnets and trammel nets.',
      'Intense boat traffic, poorly managed dolphin-watching and underwater noise can disrupt feeding, resting and communication, especially for small communities living in busy ports and estuaries.',
      'As top predators, dolphins accumulate pollutants such as PCBs and heavy metals in their blubber, which can impair immunity and reproduction. Overfishing of prey species further reduces the food available to them.',
    ],
    classification: delphinid('Tursiops', 'Tursiops truncatus'),
  },
  {
    slug: 'common-dolphin',
    commonName: 'Short-beaked common dolphin',
    alternativeNames: ['Golfinho-comum'],
    scientificName: 'Delphinus delphis',
    authority: 'Linnaeus, 1758',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'One of the most abundant dolphins on Earth. Fast, playful and often seen in large, splashing groups, common dolphins live in temperate and warm seas around the world.',
    mainImage: noaaImage('common-dolphin', 'Illustration of a short-beaked common dolphin with a dark back, tan-yellow patch on the side and a white belly'),

    length: { min: 1.7, max: 2.4 },
    weight: { min: 70, max: 135 },
    lifespan: { min: 25, max: 35 },
    threats: ['Bycatch', 'Pollution', 'Prey depletion', 'Underwater noise'],
    distributionShort: 'Temperate & warm seas worldwide',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'ASCOBANS'],

    regionsInPortugal: ['Mainland coast', 'Algarve', 'Azores', 'Madeira'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Very common',
    bestMonths: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'The most abundant cetacean in Portuguese waters. It is the species most often seen off the mainland, from Minho to the Algarve, all year round, and it is also common around the Azores and Madeira.',

    about: [
      'The short-beaked common dolphin is one of the most widespread and abundant dolphins in the world. It lives in temperate and warm waters over the continental shelf and in the open ocean.',
      'Groups frequently approach boats to ride the bow wave. The long-beaked common dolphin, once treated as a separate species, is now considered a form of the same species.',
    ],
    populationStatus: [
      'Globally, there are several million common dolphins, and the species is listed as Least Concern. Hundreds of thousands live in the north-east Atlantic.',
      'Despite their abundance, high numbers die every year in fishing gear, particularly along the north-east Atlantic coasts of France, Spain and Portugal, raising concern about the long-term sustainability of these losses.',
    ],
    appearance: [
      'Common dolphins are slender, with a medium-length beak and a tall, curved dorsal fin. Their most distinctive feature is an hourglass pattern on the side: tan or yellowish in front, light grey behind, meeting below the dorsal fin.',
      'The back is dark grey to black and the belly white. A dark stripe runs from the lower jaw to the flipper.',
    ],
    behaviourAndDiet: [
      'They feed on small schooling fish such as sardines, anchovies and horse mackerel, as well as squid. Groups cooperate to herd fish into tight bait balls, often attracting seabirds and other predators.',
      'Common dolphins are highly social and energetic, living in groups of tens to hundreds — occasionally thousands. They often leap, bow-ride and travel at high speed.',
    ],
    lifespanAndReproduction: [
      'Common dolphins live for around 25–35 years. Females reach maturity at about 8–10 years.',
      'Gestation lasts 10–11 months, and calves are about 80–90 cm long at birth. Females give birth every two to three years.',
    ],
    threatsDetail: [
      'Bycatch is the main threat. Thousands of common dolphins die every year in trawls, gillnets and other fishing gear in the Bay of Biscay and along the Iberian coast.',
      'Pollution, depletion of prey fish such as sardine, and underwater noise may add to this pressure.',
    ],
    classification: delphinid('Delphinus', 'Delphinus delphis'),
  },
  {
    slug: 'striped-dolphin',
    commonName: 'Striped dolphin',
    alternativeNames: ['Golfinho-riscado'],
    scientificName: 'Stenella coeruleoalba',
    authority: 'Meyen, 1833',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A fast, acrobatic dolphin of offshore waters, with elegant dark stripes along its sides. Striped dolphins live in warm and temperate oceans worldwide and often leap high out of the water.',
    mainImage: noaaImage('striped-dolphin', 'Illustration of a striped dolphin with a dark stripe from eye to tail and a pale shoulder blaze'),

    length: { min: 2.2, max: 2.6 },
    weight: { min: 90, max: 160 },
    lifespan: { min: 50, max: 58 },
    threats: ['Bycatch', 'Pollution', 'Disease', 'Underwater noise'],
    distributionShort: 'Warm temperate & tropical seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    regionsInPortugal: ['Mainland coast', 'Azores', 'Madeira'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Common',
    bestMonths: ['may', 'june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Striped dolphins are found off the mainland — more often in deeper, offshore waters — and around the Azores and Madeira. They are also among the species that most often strand on the Portuguese coast.',

    about: [
      'The striped dolphin lives in warm temperate and tropical waters around the world, usually beyond the continental shelf.',
      'It is the most abundant cetacean in the Mediterranean Sea, and one of the species most often found stranded on European coasts.',
    ],
    populationStatus: [
      'With around two million animals worldwide, the species is listed as Least Concern. Hundreds of thousands are estimated to live in the north-east Atlantic.',
      'Outbreaks of morbillivirus have caused mass die-offs in the Mediterranean, and high pollutant loads may increase vulnerability to disease.',
    ],
    appearance: [
      'Striped dolphins have a slender body and a moderately long beak. A dark stripe runs from the eye along the side to the base of the tail, with a second, shorter stripe from the eye to the flipper.',
      'A pale “shoulder blaze” sweeps up from the flank towards the dorsal fin, making the species easy to identify when it leaps.',
    ],
    behaviourAndDiet: [
      'They feed on small fish, squid and crustaceans, diving to depths of 200–700 metres along the continental slope.',
      'Striped dolphins usually live in groups of 25–100 animals. They are highly acrobatic, performing high leaps, somersaults and a fast “roto-tailing” spin.',
    ],
    lifespanAndReproduction: [
      'Striped dolphins can live for over 50 years. Females reach maturity at around 9 years.',
      'Gestation lasts about 12 months, and calves are about 1 metre long at birth. Females give birth every three to four years.',
    ],
    threatsDetail: [
      'Bycatch in drift nets, purse seines and trawls is a significant threat. Pollutants such as PCBs accumulate in their tissues and may weaken their immune system.',
      'Disease outbreaks and underwater noise are additional pressures.',
    ],
    classification: delphinid('Stenella', 'Stenella coeruleoalba'),
  },
  {
    slug: 'atlantic-spotted-dolphin',
    commonName: 'Atlantic spotted dolphin',
    alternativeNames: ['Golfinho-pintado-do-atlântico', 'Golfinho-malhado'],
    scientificName: 'Stenella frontalis',
    authority: 'G. Cuvier, 1829',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A playful dolphin of the warm Atlantic. Atlantic spotted dolphins are born without spots and become increasingly speckled as they age.',
    mainImage: noaaImage('atlantic-spotted-dolphin', 'Illustration of an Atlantic spotted dolphin: a stocky dolphin covered in dark and pale spots'),

    length: { min: 1.7, max: 2.3 },
    weight: { min: 100, max: 145 },
    lifespan: { min: 30, max: 50 },
    threats: ['Bycatch', 'Boat disturbance', 'Pollution'],
    distributionShort: 'Warm Atlantic waters',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...SMALL_CETACEAN_PROTECTION,

    regionsInPortugal: ['Azores', 'Madeira'],
    residency: 'Seasonal / migratory',
    sightingFrequency: 'Common',
    bestMonths: ['june', 'july', 'august', 'september', 'october'],
    oceans: ['north-atlantic', 'south-atlantic'],
    distributionInPortugal: 'Atlantic spotted dolphins arrive around the Azores and Madeira in large numbers in summer and early autumn, when the water is warmest, and are then among the most commonly seen dolphins there.',

    about: [
      'The Atlantic spotted dolphin is found only in the warm and tropical waters of the Atlantic Ocean. It is closely related to the pantropical spotted dolphin.',
      'It ranges from the coasts of the Americas to West Africa and the Atlantic islands. In the Bahamas, groups that interact with snorkellers have been studied underwater since the 1980s.',
    ],
    populationStatus: [
      'The species is listed as Least Concern and is estimated to number hundreds of thousands across the Atlantic.',
      'Coastal and offshore forms differ in size and spotting, with coastal animals usually larger and more heavily spotted.',
    ],
    appearance: [
      'Atlantic spotted dolphins are robust, with a moderately long, white-tipped beak and a tall, curved dorsal fin. A pale blaze often sweeps up from the flank towards the dorsal fin.',
      'Calves are unspotted. Spots appear as they mature — dark spots on the pale belly and pale spots on the dark back — and some older adults are so heavily spotted they look almost white or black.',
    ],
    behaviourAndDiet: [
      'They feed on small fish, squid and bottom-dwelling invertebrates, often diving to 40–60 metres and sometimes much deeper.',
      'They usually travel in groups of 5–50 and are fast, playful and acrobatic. They readily approach boats to bow-ride.',
    ],
    lifespanAndReproduction: [
      'Atlantic spotted dolphins can live for up to around 50 years. Females reach maturity at around 8–15 years.',
      'Gestation lasts about 11–12 months, and females give birth every three years or so.',
    ],
    threatsDetail: [
      'Bycatch in fishing gear is a threat in parts of their range. Intense dolphin-watching can disturb resting and feeding groups if not managed responsibly.',
      'Pollutants accumulate in their tissues, as in other top predators.',
    ],
    classification: delphinid('Stenella', 'Stenella frontalis'),
  },
  {
    slug: 'rissos-dolphin',
    commonName: 'Risso’s dolphin',
    alternativeNames: ['Grampo', 'Golfinho-de-Risso'],
    scientificName: 'Grampus griseus',
    authority: 'G. Cuvier, 1812',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A large, blunt-headed dolphin that turns almost white with age as it accumulates scars. Risso’s dolphins hunt squid along steep continental slopes in warm and temperate oceans worldwide.',
    mainImage: noaaImage('rissos-dolphin', 'Illustration of a Risso’s dolphin: a robust grey dolphin with a blunt head and many pale scratch scars'),

    length: { min: 2.6, max: 4 },
    weight: { min: 300, max: 500 },
    lifespan: { min: 30, max: 35 },
    threats: ['Bycatch', 'Underwater noise', 'Plastic ingestion', 'Pollution'],
    distributionShort: 'Deep temperate & tropical seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    regionsInPortugal: ['Azores', 'Madeira', 'Mainland coast'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Common',
    bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Risso’s dolphins are regularly seen in the Azores, where a resident population has been studied for years, and also off Madeira and the mainland.',

    about: [
      'Risso’s dolphin is a large dolphin with a blunt, rounded head and no beak. It prefers deep waters along steep continental slopes and around oceanic islands.',
      'It is found in tropical and temperate oceans around the world, including the Mediterranean, but rarely in very cold waters.',
    ],
    populationStatus: [
      'The species is widespread and listed as Least Concern, with several hundred thousand animals worldwide.',
      'Photo-identification in the Azores has shown that many individuals are resident year-round and form long-term bonds.',
    ],
    appearance: [
      'Risso’s dolphins have a tall, dark dorsal fin and a stout body. A vertical crease runs down the front of the bulbous head.',
      'Calves are grey, but adults become covered in white scratches from the teeth of other Risso’s dolphins and from squid. Old animals can look almost completely white.',
    ],
    behaviourAndDiet: [
      'They feed almost entirely on squid and octopus, hunting mainly at night along the continental slope.',
      'Risso’s dolphins typically live in groups of 10–30 and often travel in tight lines. They rarely bow-ride, but may breach, spy-hop and slap their tails.',
    ],
    lifespanAndReproduction: [
      'Risso’s dolphins can live for at least 35 years. Females reach maturity at around 8–10 years.',
      'Gestation lasts 13–14 months, and calves are about 1.5 metres long at birth.',
    ],
    threatsDetail: [
      'Bycatch in gillnets and longlines occurs in parts of their range, and ingestion of plastic has been recorded in stranded animals.',
      'Underwater noise from shipping and military sonar may affect their feeding and communication.',
    ],
    classification: delphinid('Grampus', 'Grampus griseus'),
  },
  {
    slug: 'rough-toothed-dolphin',
    commonName: 'Rough-toothed dolphin',
    alternativeNames: ['Golfinho-de-dentes-rugosos'],
    scientificName: 'Steno bredanensis',
    authority: 'G. Cuvier in Lesson, 1828',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'An unusual, almost prehistoric-looking dolphin with a long, sloping beak and wrinkled teeth. Rough-toothed dolphins live in deep, warm waters around the world and often gather around floating objects.',
    mainImage: noaaImage('rough-toothed-dolphin', 'Illustration of a rough-toothed dolphin with a long, cone-shaped head and pale lips'),

    length: { min: 2.1, max: 2.6 },
    weight: { min: 90, max: 155 },
    lifespan: { min: 30, max: 36 },
    threats: ['Bycatch', 'Pollution', 'Underwater noise'],
    distributionShort: 'Deep tropical & warm temperate seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...SMALL_CETACEAN_PROTECTION,

    regionsInPortugal: ['Madeira', 'Azores'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Uncommon',
    bestMonths: ['july', 'august', 'september', 'october'],
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Rough-toothed dolphins are seen mainly around Madeira, where groups are recorded every year in the warmer months, and occasionally in the Azores.',

    about: [
      'The rough-toothed dolphin lives in deep tropical and warm temperate waters worldwide. Its name comes from the fine vertical ridges on its teeth.',
      'Some of the best-studied groups live around the Hawaiian Islands, where photo-identification shows that many individuals stay close to particular islands.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but its abundance is not well known in most regions, including the north-east Atlantic.',
      'Like other offshore dolphins it is difficult to survey, and most population estimates come from a handful of well-studied areas.',
    ],
    appearance: [
      'Rough-toothed dolphins have a long, narrow beak that slopes smoothly into the forehead without a crease, giving the head a cone-shaped, reptile-like look.',
      'They are dark grey above with a narrow dark cape, pale lips and belly, and irregular white or pinkish blotches on the sides.',
    ],
    behaviourAndDiet: [
      'They feed on fish and squid, sometimes taking large prey such as dorado. They are often seen near floating objects, which attract fish.',
      'They usually live in groups of 10–20 and can swim at the surface with the head and chin above water, a behaviour called “skimming”.',
    ],
    lifespanAndReproduction: [
      'Rough-toothed dolphins can live for at least 36 years. Females reach maturity at around 10 years.',
      'Calves are about 1 metre long at birth.',
    ],
    threatsDetail: [
      'They are caught in various fisheries and may be affected by noise from shipping and sonar.',
      'Pollutants accumulate in their tissues, as in other long-lived predators.',
    ],
    classification: delphinid('Steno', 'Steno bredanensis'),
  },
  {
    slug: 'frasers-dolphin',
    commonName: 'Fraser’s dolphin',
    alternativeNames: ['Golfinho-de-Fraser'],
    scientificName: 'Lagenodelphis hosei',
    authority: 'Fraser, 1956',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A tropical deep-water dolphin first described from a single skull in 1956 and not seen alive until the 1970s. It travels in large, tightly packed groups that churn up the sea as they flee.',
    mainImage: noaaImage('frasers-dolphin', 'Illustration of a Fraser’s dolphin: a stocky dolphin with a short beak, small fins and a dark stripe along the side'),

    length: { min: 2, max: 2.7 },
    weight: { min: 160, max: 210 },
    lifespan: null,
    threats: ['Bycatch', 'Pollution', 'Underwater noise'],
    distributionShort: 'Deep tropical seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...SMALL_CETACEAN_PROTECTION,

    regionsInPortugal: ['Madeira', 'Azores'],
    residency: 'Rare / vagrant',
    sightingFrequency: 'Rare',
    bestMonths: [],
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Madeira and the Azores are at the northern edge of the species’ range, and Fraser’s dolphin is a rare visitor to Portuguese waters.',

    about: [
      'Fraser’s dolphin lives in deep tropical waters worldwide. It was described in 1956 from a skull collected in Borneo decades earlier, and was first seen alive in the early 1970s.',
      'It is found mostly between 30°N and 30°S, and records at higher latitudes are rare.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but little is known about its abundance in most areas.',
      'Most of what is known comes from animals caught in fisheries or found stranded.',
    ],
    appearance: [
      'Fraser’s dolphins have a stocky body, a short beak and small fins and flippers. A bold dark stripe runs from the face to the anus, especially obvious in adult males.',
      'They are bluish-grey above, with a cream-coloured stripe above the dark band and a white or pink belly.',
    ],
    behaviourAndDiet: [
      'They feed on deep-water fish, squid and crustaceans, diving to depths of 250–500 metres.',
      'They often travel in large, tightly packed groups of hundreds of animals, sometimes mixed with other species. When they flee, they churn up the water in a mass of spray.',
    ],
    lifespanAndReproduction: [
      'Little is known about their lifespan. Calves are about 1 metre long at birth, and females are thought to give birth every two years.',
    ],
    threatsDetail: [
      'They are caught in fisheries in several tropical regions. Pollution and noise may also affect them.',
    ],
    classification: delphinid('Lagenodelphis', 'Lagenodelphis hosei'),
  },
  {
    slug: 'killer-whale',
    commonName: 'Killer whale',
    alternativeNames: ['Orca'],
    scientificName: 'Orcinus orca',
    authority: 'Linnaeus, 1758',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'The largest member of the dolphin family and a top ocean predator, found in every ocean from the polar ice to the tropics. Different populations specialise in different prey and have their own cultures.',
    mainImage: noaaImage('killer-whale', 'Illustration of a killer whale: a black and white whale with a tall dorsal fin and a white patch behind the eye'),

    length: { min: 6, max: 9 },
    weight: { min: 3600, max: 6000 },
    lifespan: { min: 50, max: 90 },
    threats: ['Prey depletion', 'Pollution', 'Boat disturbance', 'Bycatch'],
    distributionShort: 'All oceans, polar to tropical',

    iucnStatus: 'DD',
    nationalStatus: 'CR',
    nationalStatusNote: 'Iberian subpopulation (IUCN)',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    regionsInPortugal: ['Mainland coast', 'Algarve', 'Azores', 'Madeira'],
    residency: 'Seasonal / migratory',
    sightingFrequency: 'Uncommon',
    bestMonths: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'north-pacific', 'south-pacific', 'indian', 'arctic', 'southern'],
    distributionInPortugal: 'The Iberian orcas pass along the Portuguese coast as they follow bluefin tuna, and are seen most often from spring to autumn. Since 2020 some have interacted with the rudders of sailing boats off Portugal. The subpopulation has fewer than 40 animals and is listed as Critically Endangered by the IUCN.',

    about: [
      'Killer whales are the largest dolphins and one of the most widely distributed mammals on Earth, found from polar ice to the tropics. Different populations specialise on different prey, from fish to seals and other whales.',
      'Some populations are among the best-studied mammals in the world, such as the fish-eating “resident” killer whales of the north-east Pacific. In Europe, a small population known as the Iberian orcas follows Atlantic bluefin tuna between the Strait of Gibraltar and the Bay of Biscay, and since 2020 some of these animals have become known for pushing and biting the rudders of sailing boats.',
    ],
    populationStatus: [
      'Globally, the species is listed as Data Deficient because populations differ so much in size and ecology. Several regional populations are small and threatened.',
      'The Iberian subpopulation has fewer than 40 individuals and was assessed as Critically Endangered by the IUCN in 2019. It depends heavily on bluefin tuna, whose recovery has been crucial for the orcas.',
    ],
    appearance: [
      'Killer whales are unmistakable: jet black above, white below, with a white patch behind the eye and a grey “saddle” behind the dorsal fin.',
      'Adult males have a very tall, straight dorsal fin up to 1.8 metres high, while females and juveniles have a shorter, curved fin. The flippers are large and paddle-shaped.',
    ],
    behaviourAndDiet: [
      'Some killer whales eat only fish, such as salmon or tuna, while others hunt seals, dolphins and even large whales. In the Strait of Gibraltar, Iberian orcas have learned to take bluefin tuna from fishing lines.',
      'Killer whales live in tight-knit family groups led by older females. Each pod has its own repertoire of calls, and hunting techniques are passed down from generation to generation — a form of culture.',
    ],
    lifespanAndReproduction: [
      'Females can live for 50–90 years and go through menopause, continuing to lead and help their families long after they stop breeding. Males usually live 30–60 years.',
      'Gestation lasts about 17 months — one of the longest of any whale — and females give birth only every three to ten years.',
    ],
    threatsDetail: [
      'For small, specialised populations such as the southern residents of the north-east Pacific and the Iberian orcas, the main threats are the availability of their prey, disturbance from boats, and high levels of pollutants such as PCBs, which can affect reproduction.',
      'Their interactions with sailing boats have created new risks, including retaliation and conflict with mariners, making public awareness and calm, respectful behaviour at sea especially important.',
    ],
    classification: delphinid('Orcinus', 'Orcinus orca'),
  },
  {
    slug: 'false-killer-whale',
    commonName: 'False killer whale',
    alternativeNames: ['Falsa-orca'],
    scientificName: 'Pseudorca crassidens',
    authority: 'Owen, 1846',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A large, sleek, all-black dolphin that hunts big fish such as tuna and shares its catch with others. False killer whales live in deep tropical and warm temperate oceans worldwide.',
    mainImage: noaaImage('false-killer-whale', 'Illustration of a false killer whale: a long, slender dark grey whale with a rounded head'),

    length: { min: 4.5, max: 6 },
    weight: { min: 1000, max: 2200 },
    lifespan: { min: 55, max: 65 },
    threats: ['Bycatch', 'Pollution', 'Underwater noise', 'Prey depletion'],
    distributionShort: 'Deep tropical & warm temperate seas',

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    ...SMALL_CETACEAN_PROTECTION,

    regionsInPortugal: ['Madeira', 'Azores', 'Mainland coast'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Rare',
    bestMonths: ['june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'False killer whales are rare but regular visitors, mostly around Madeira and the Azores, with occasional records off the mainland. Their abundance in Portuguese waters is unknown.',

    about: [
      'False killer whales are large members of the dolphin family that live in deep tropical and warm temperate waters. Despite the name, they are more closely related to pilot whales and Risso’s dolphins than to orcas.',
      'A small population lives around the main Hawaiian Islands and is listed as Endangered under the US Endangered Species Act.',
    ],
    populationStatus: [
      'The species is listed as Near Threatened. It is naturally uncommon, and several populations are small and affected by bycatch.',
      'Most populations have never been counted, as the species is naturally rare and wide-ranging.',
    ],
    appearance: [
      'False killer whales are long and slender, mostly dark grey to black, with a rounded head that overhangs the lower jaw. The dorsal fin is tall and curved.',
      'Their flippers have a distinctive “elbow” — a hump on the leading edge — which helps distinguish them from pilot whales.',
    ],
    behaviourAndDiet: [
      'They hunt large fish such as tuna, mahi-mahi and wahoo, as well as squid. They are known to share food with each other, and sometimes even offer fish to divers.',
      'They are highly social, living in groups of 10–50 that can join into larger gatherings. They are fast swimmers and may leap clear of the water.',
    ],
    lifespanAndReproduction: [
      'False killer whales can live for around 60 years. Like killer whales and pilot whales, females go through menopause.',
      'Gestation lasts about 14–16 months, and females give birth roughly every seven years.',
    ],
    threatsDetail: [
      'They are often caught on longlines when they take bait or hooked fish, which is a serious problem in some regions.',
      'Pollutants, competition with fisheries for prey and underwater noise are additional threats. They are also prone to mass strandings.',
    ],
    classification: delphinid('Pseudorca', 'Pseudorca crassidens'),
  },
  {
    slug: 'long-finned-pilot-whale',
    commonName: 'Long-finned pilot whale',
    alternativeNames: ['Baleia-piloto', 'Boca-de-panela'],
    scientificName: 'Globicephala melas',
    authority: 'Traill, 1809',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A highly social, round-headed member of the dolphin family that lives in close-knit pods in cold temperate waters of the North Atlantic and the Southern Hemisphere.',
    mainImage: noaaImage('long-finned-pilot-whale', 'Illustration of a long-finned pilot whale: a black whale with a bulbous head and a broad, low dorsal fin'),

    length: { min: 4, max: 6.5 },
    weight: { min: 1300, max: 2300 },
    lifespan: { min: 35, max: 60 },
    threats: ['Bycatch', 'Pollution', 'Underwater noise', 'Mass strandings'],
    distributionShort: 'Cold temperate North Atlantic & Southern Ocean',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    regionsInPortugal: ['Mainland coast', 'Azores'],
    residency: 'Occasional visitor',
    sightingFrequency: 'Uncommon',
    bestMonths: ['may', 'june', 'july', 'august', 'september'],
    oceans: ['north-atlantic', 'south-atlantic', 'mediterranean', 'south-pacific', 'indian', 'southern'],
    distributionInPortugal: 'Long-finned pilot whales are mainly seen off the mainland, especially over the deep Nazaré and Lisbon canyons, and occasionally around the Azores. Further south and around Madeira they are largely replaced by short-finned pilot whales.',

    about: [
      'Long-finned pilot whales are large, robust members of the dolphin family that live in cold temperate waters of the North Atlantic and Southern Hemisphere.',
      'Their range is split in two — one population in the North Atlantic and another in the cool waters of the Southern Hemisphere — separated by the tropics, where the short-finned pilot whale takes over.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, with hundreds of thousands of animals in the North Atlantic.',
      'Southern Hemisphere numbers are poorly known, but the species is among the cetaceans most often involved in mass strandings in New Zealand and Tasmania.',
    ],
    appearance: [
      'Pilot whales have a bulbous, rounded head and a broad, low dorsal fin set forward on the back. They are dark grey to black, with a pale anchor-shaped patch on the chest and often a pale saddle behind the fin.',
      'Long-finned pilot whales have very long, sickle-shaped flippers — up to a fifth of their body length — which is the best feature for telling them apart from short-finned pilot whales.',
    ],
    behaviourAndDiet: [
      'They feed mainly on squid, as well as fish such as mackerel and cod, diving to several hundred metres — often at night.',
      'Pilot whales live in very stable social groups of 10–50 animals and can gather in hundreds. Strong social bonds may explain why they are prone to mass strandings.',
    ],
    lifespanAndReproduction: [
      'Females can live up to about 60 years, while males rarely exceed 35–45 years.',
      'Gestation lasts around 12–16 months, and calves nurse for up to three years. Females give birth every three to five years.',
    ],
    threatsDetail: [
      'Bycatch in trawls and gillnets occurs in parts of the North Atlantic. Pilot whales are still hunted in the Faroe Islands.',
      'High pollutant levels and underwater noise may also affect them, and mass strandings can remove whole groups at once.',
    ],
    classification: delphinid('Globicephala', 'Globicephala melas'),
  },
  {
    slug: 'short-finned-pilot-whale',
    commonName: 'Short-finned pilot whale',
    alternativeNames: ['Baleia-piloto-tropical', 'Boca-de-panela'],
    scientificName: 'Globicephala macrorhynchus',
    authority: 'Gray, 1846',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A deep-diving, sociable relative of the long-finned pilot whale, found in tropical and warm temperate seas worldwide. Some groups stay around the same islands for years.',
    mainImage: noaaImage('short-finned-pilot-whale', 'Illustration of a short-finned pilot whale: a black whale with a round head and a broad, curved dorsal fin'),

    length: { min: 3.5, max: 7.2 },
    weight: { min: 1000, max: 3000 },
    lifespan: { min: 45, max: 63 },
    threats: ['Boat disturbance', 'Bycatch', 'Underwater noise', 'Pollution'],
    distributionShort: 'Tropical & warm temperate seas',

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    ...SMALL_CETACEAN_PROTECTION,

    regionsInPortugal: ['Madeira', 'Azores'],
    residency: 'Resident (year-round)',
    sightingFrequency: 'Common',
    bestMonths: ['march', 'april', 'may', 'june', 'july', 'august', 'september', 'october'],
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],
    distributionInPortugal: 'Short-finned pilot whales are among the most frequently seen cetaceans off Madeira, where resident and visiting groups make it one of the best places in Europe to see the species. Long-term photo-identification there has identified island-associated groups seen year after year. They also occur around the Azores, mainly in summer.',

    about: [
      'The short-finned pilot whale lives in tropical and warm temperate waters worldwide. It is closely related to the long-finned pilot whale and very similar in appearance.',
      'Long-term studies around the Canary Islands, Madeira and Hawaii have found both resident, island-associated groups and visitors that pass through.',
    ],
    populationStatus: [
      'The species is listed as Least Concern and is widespread, with several hundred thousand animals worldwide.',
      'Off Japan, two forms that differ in size and colouring have been recognised, and they may represent separate subspecies.',
    ],
    appearance: [
      'Short-finned pilot whales have a rounded, bulbous head, a broad, low dorsal fin set forward on the body and a dark grey to black body with a pale saddle and chest patch.',
      'Their flippers are shorter than those of the long-finned pilot whale — around a sixth of the body length.',
    ],
    behaviourAndDiet: [
      'They feed mainly on squid, making fast, deep dives to 600–1,000 metres — sometimes described as the “cheetahs of the deep” for their high-speed sprints after prey.',
      'They live in stable matrilineal groups of 10–30 animals and are often seen resting at the surface in tight groups, a behaviour known as logging.',
    ],
    lifespanAndReproduction: [
      'Females can live for over 60 years and go through menopause, while males live up to around 45 years.',
      'Gestation lasts about 15 months, and calves nurse for two years or more. Females give birth every five to eight years.',
    ],
    threatsDetail: [
      'Where whale-watching is intense, as in the Canary Islands and Madeira, boats can disturb resting groups if they approach too closely or too often.',
      'Bycatch, underwater noise and pollutants are additional threats across their range.',
    ],
    classification: delphinid('Globicephala', 'Globicephala macrorhynchus'),
  },

  // ---------- Dolphins of the open ocean ----------
  {
    slug: 'pantropical-spotted-dolphin',
    commonName: 'Pantropical spotted dolphin',
    alternativeNames: ['Spotter'],
    scientificName: 'Stenella attenuata',
    authority: 'Gray, 1846',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'One of the most abundant dolphins in the tropics, and the species most affected by the “tuna–dolphin” problem: millions were killed in tuna nets in the eastern Pacific, which led to “dolphin-safe” labels on tuna cans.',
    mainImage: noaaImage('pantropical-spotted-dolphin', 'Illustration of a pantropical spotted dolphin: a slender dolphin with a long beak and pale spots on a dark back'),

    length: { min: 1.6, max: 2.6 },
    weight: { min: 90, max: 120 },
    lifespan: { min: 40, max: 46 },
    threats: ['Bycatch', 'Hunting', 'Pollution'],
    distributionShort: 'Tropical seas worldwide',
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'The pantropical spotted dolphin lives in tropical and subtropical waters of all oceans, from coastal waters to the open sea. Groups often number in the hundreds and sometimes thousands.',
      'In the eastern tropical Pacific, schools of yellowfin tuna swim beneath groups of spotted and spinner dolphins. From the 1950s, fishers set their purse seines around the dolphins to catch the tuna beneath, killing an estimated several million dolphins over the following decades.',
    ],
    populationStatus: [
      'Globally the species numbers in the millions and is listed as Least Concern. However, the north-eastern offshore stock in the eastern tropical Pacific was reduced to a fraction of its former size and has been slow to recover.',
      'Changes in fishing methods since the 1990s have cut dolphin deaths in tuna nets by more than 95%, but chasing and encircling still stresses the animals and may separate mothers from calves.',
    ],
    appearance: [
      'Spotted dolphins are slender, with a long, narrow beak with white lips and a dark cape on the back. Calves are born without spots; adults become covered in pale spots on the back and dark spots on the belly.',
      'The amount of spotting varies greatly between regions: coastal animals are often heavily spotted, while those around Hawaii have very few spots.',
    ],
    behaviourAndDiet: [
      'They feed on small fish and squid, often at night when prey rises towards the surface.',
      'They are fast and acrobatic, and often bow-ride. They frequently travel with spinner dolphins, tuna and seabirds.',
    ],
    lifespanAndReproduction: [
      'Pantropical spotted dolphins can live for over 40 years. Females reach maturity at about 9–11 years and give birth every two to four years.',
      'Gestation lasts about 11 months, and calves are about 80–90 cm long at birth.',
    ],
    threatsDetail: [
      'Bycatch in tuna purse seines remains a concern in the eastern tropical Pacific, and they are caught in gillnets elsewhere.',
      'They are taken in drive hunts in Japan and in directed hunts in some other countries.',
    ],
    classification: delphinid('Stenella', 'Stenella attenuata'),
  },
  {
    slug: 'clymene-dolphin',
    commonName: 'Clymene dolphin',
    alternativeNames: ['Short-snouted spinner dolphin'],
    scientificName: 'Stenella clymene',
    authority: 'Gray, 1846',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A small dolphin of the warm Atlantic that spins in the air like a spinner dolphin. Its genes suggest it arose from ancient hybridisation between spinner and striped dolphins.',
    mainImage: noaaImage('clymene-dolphin', 'Illustration of a Clymene dolphin: a small dolphin with a dark cape, grey flanks and a short beak'),

    length: { min: 1.7, max: 2 },
    weight: { min: 50, max: 90 },
    lifespan: null,
    threats: ['Bycatch', 'Hunting'],
    distributionShort: 'Tropical & warm Atlantic',
    oceans: ['north-atlantic', 'south-atlantic'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'The Clymene dolphin lives only in the tropical and subtropical Atlantic, including the Gulf of Mexico and the Caribbean, mostly in deep offshore waters.',
      'Genetic studies have shown that its genome is a mix of spinner and striped dolphin DNA — one of the first documented cases of a marine mammal species that may have originated through hybridisation.',
    ],
    populationStatus: [
      'There are few population estimates, but it is fairly common in the Gulf of Mexico. It is listed as Least Concern.',
    ],
    appearance: [
      'Clymene dolphins have a short, stout beak, a dark grey cape that dips low below the dorsal fin, light grey flanks and a white belly.',
      'A dark “moustache” marking on the top of the beak helps tell them apart from spinner dolphins.',
    ],
    behaviourAndDiet: [
      'They feed at night on small fish and squid in mid-water.',
      'They often leap and spin in the air, though less elaborately than spinner dolphins, and live in groups of up to several hundred.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history.',
    ],
    threatsDetail: [
      'They are caught in fisheries off West Africa and in directed hunts in parts of the Caribbean.',
    ],
    classification: delphinid('Stenella', 'Stenella clymene'),
  },
  {
    slug: 'spinner-dolphin',
    commonName: 'Spinner dolphin',
    alternativeNames: ['Long-snouted spinner dolphin'],
    scientificName: 'Stenella longirostris',
    authority: 'Gray, 1828',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'Famous for leaping out of the water and spinning up to seven times in the air. Spinner dolphins rest in calm tropical bays by day and head out to sea at night to hunt.',
    mainImage: noaaImage('spinner-dolphin', 'Illustration of a spinner dolphin: a slender, three-toned dolphin with a very long, thin beak'),

    length: { min: 1.3, max: 2.4 },
    weight: { min: 23, max: 80 },
    lifespan: { min: 20, max: 25 },
    threats: ['Bycatch', 'Boat disturbance', 'Human disturbance', 'Pollution'],
    distributionShort: 'Tropical seas worldwide',
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'Spinner dolphins live in tropical and subtropical waters around the world. Several forms are recognised, from the tiny dwarf spinner dolphin of South-East Asia to larger offshore forms in the eastern Pacific.',
      'Around oceanic islands such as Hawaii, groups spend the day resting in shallow, sheltered bays and move offshore at dusk to feed on the deep scattering layer — a band of small animals that rises towards the surface at night.',
    ],
    populationStatus: [
      'There are probably more than a million spinner dolphins, and the species is listed as Least Concern.',
      'The eastern spinner dolphin of the tropical Pacific was heavily depleted by the tuna fishery and has not fully recovered.',
    ],
    appearance: [
      'Spinner dolphins are slender, with a very long, thin beak. Most have a three-part colour pattern: a dark grey back, light grey sides and a pale belly.',
      'In some eastern Pacific forms, adult males have a forward-canted dorsal fin that looks as if it were on backwards.',
    ],
    behaviourAndDiet: [
      'They feed at night on small fish, squid and shrimp, often hunting cooperatively.',
      'Their spinning leaps may help with communication, removing parasites or simply play. Groups can number in the thousands in the open ocean.',
    ],
    lifespanAndReproduction: [
      'Spinner dolphins live for 20–25 years or more. Females give birth every two to three years after a gestation of about 10–11 months.',
    ],
    threatsDetail: [
      'Bycatch in tuna purse seines and gillnets is the main threat. In popular bays, swimmers and tour boats can disturb resting dolphins, and in Hawaii it is now illegal to approach them within 50 yards.',
      'They are also taken in directed hunts in some countries.',
    ],
    classification: delphinid('Stenella', 'Stenella longirostris'),
  },
  {
    slug: 'indo-pacific-bottlenose-dolphin',
    commonName: 'Indo-Pacific bottlenose dolphin',
    alternativeNames: [],
    scientificName: 'Tursiops aduncus',
    authority: 'Ehrenberg, 1833',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A coastal dolphin of the Indian and western Pacific oceans. In Shark Bay, Australia, some females carry sea sponges on their beaks as tools — a skill passed from mother to daughter.',
    mainImage: null,

    length: { min: 2, max: 2.7 },
    weight: { min: 150, max: 230 },
    lifespan: { min: 40, max: 50 },
    threats: ['Bycatch', 'Habitat loss', 'Pollution', 'Boat disturbance'],
    distributionShort: 'Coastal Indian Ocean & western Pacific',
    oceans: ['indian', 'north-pacific', 'south-pacific'],

    iucnStatus: 'NT',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Indo-Pacific bottlenose dolphin lives in warm coastal waters from South Africa and the Red Sea to Australia, China and Japan, usually in water less than 100 metres deep.',
      'It is the species behind some of the best-known studies of dolphin behaviour. In Shark Bay, Western Australia, researchers have documented sponge tool use, “shelling” — trapping fish in large shells — and complex male alliances.',
    ],
    populationStatus: [
      'Because it lives close to shore, it is exposed to many human pressures, and many local populations are small. It is listed as Near Threatened.',
    ],
    appearance: [
      'It is smaller and more slender than the common bottlenose dolphin, with a longer beak. Adults often develop dark spots or flecks on the belly.',
    ],
    behaviourAndDiet: [
      'It feeds on a wide range of coastal fish and cephalopods, using many different, locally learned techniques.',
      'Groups are usually small, from a few to a few dozen animals, with fluid fission–fusion societies.',
    ],
    lifespanAndReproduction: [
      'Females can live for 40 years or more. They give birth every three to six years after a gestation of about 12 months, and calves stay with their mothers for several years.',
    ],
    threatsDetail: [
      'Bycatch in gillnets and shark nets, coastal development, pollution and boat traffic are the main threats. In some regions dolphins are hunted for bait or food.',
    ],
    classification: delphinid('Tursiops', 'Tursiops aduncus'),
  },
  {
    slug: 'pygmy-killer-whale',
    commonName: 'Pygmy killer whale',
    alternativeNames: ['Slender blackfish'],
    scientificName: 'Feresa attenuata',
    authority: 'Gray, 1874',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A small, dark, round-headed dolphin of deep tropical waters. Despite its name, it is only about 2.5 metres long — but it has a reputation for aggressive behaviour towards other dolphins.',
    mainImage: null,

    length: { min: 2, max: 2.6 },
    weight: { min: 110, max: 225 },
    lifespan: null,
    threats: ['Bycatch', 'Hunting', 'Underwater noise'],
    distributionShort: 'Deep tropical seas',
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'The pygmy killer whale lives in deep tropical and subtropical waters around the world. It was known only from two skulls until the 1950s.',
      'A small population has been studied around Hawaii, where photo-identification shows that some groups stay close to the islands for many years.',
    ],
    populationStatus: [
      'It is naturally uncommon. There are few population estimates, and it is listed as Least Concern.',
    ],
    appearance: [
      'Pygmy killer whales are dark grey to black with a rounded head, no beak, white lips and often a white patch around the genitals. They have a dark cape that dips low on the sides.',
      'They are easily confused with melon-headed whales, but have rounder flipper tips and a more rounded head.',
    ],
    behaviourAndDiet: [
      'They feed on fish and squid, and have been seen attacking other dolphins.',
      'They usually live in groups of 12–50 and often rest in tight lines at the surface.',
    ],
    lifespanAndReproduction: [
      'Little is known about their life history.',
    ],
    threatsDetail: [
      'They are caught in fisheries and in directed hunts in some tropical regions, and are sometimes involved in mass strandings.',
    ],
    classification: delphinid('Feresa', 'Feresa attenuata'),
  },
  {
    slug: 'melon-headed-whale',
    commonName: 'Melon-headed whale',
    alternativeNames: ['Electra dolphin', 'Many-toothed blackfish'],
    scientificName: 'Peponocephala electra',
    authority: 'Gray, 1846',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A dark, highly social member of the dolphin family that travels in tight groups of hundreds or even thousands. It is prone to mass strandings, some of which have been linked to human noise.',
    mainImage: noaaImage('melon-headed-whale', 'Illustration of a melon-headed whale: a dark grey dolphin with a rounded, slightly pointed head'),

    length: { min: 2.3, max: 2.75 },
    weight: { min: 160, max: 275 },
    lifespan: { min: 30, max: 47 },
    threats: ['Mass strandings', 'Underwater noise', 'Bycatch', 'Hunting'],
    distributionShort: 'Deep tropical seas',
    oceans: ['north-atlantic', 'south-atlantic', 'north-pacific', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'The melon-headed whale lives in deep, warm waters around the world, usually far from the coast except around oceanic islands.',
      'In 2008, around 100 melon-headed whales stranded in a lagoon in Madagascar. An independent review concluded that a high-powered mapping sonar used by a nearby survey vessel was the most likely trigger — the first time such a sonar had been linked to a mass stranding.',
    ],
    populationStatus: [
      'It is widespread and listed as Least Concern, though little is known about trends.',
    ],
    appearance: [
      'Melon-headed whales are dark grey to black, with a rounded, slightly pointed head, white lips and a dark “mask” on the face. They have a tall, curved dorsal fin and pointed flippers.',
    ],
    behaviourAndDiet: [
      'They feed on squid and small fish, mostly at night.',
      'They are very social, travelling in large, tightly packed groups that often include Fraser’s dolphins.',
    ],
    lifespanAndReproduction: [
      'They can live for more than 40 years. Calves are about 1 metre long at birth.',
    ],
    threatsDetail: [
      'Mass strandings, sometimes linked to sonar and other loud noise, are a significant cause of death. They are also caught in fisheries and in directed hunts in some regions.',
    ],
    classification: delphinid('Peponocephala', 'Peponocephala electra'),
  },

  // ---------- Dolphins of cool and temperate seas ----------
  {
    slug: 'atlantic-white-sided-dolphin',
    commonName: 'Atlantic white-sided dolphin',
    alternativeNames: [],
    scientificName: 'Leucopleurus acutus',
    authority: 'Gray, 1828',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A robust, boldly marked dolphin of the cool North Atlantic, with a white patch and a yellow-ochre stripe along each side. It often travels in groups of hundreds.',
    mainImage: null,

    length: { min: 2.3, max: 2.8 },
    weight: { min: 180, max: 235 },
    lifespan: { min: 22, max: 27 },
    threats: ['Bycatch', 'Hunting', 'Pollution', 'Climate change'],
    distributionShort: 'Cold temperate North Atlantic',
    oceans: ['north-atlantic'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bonn Convention', 'US Marine Mammal Protection Act'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'The Atlantic white-sided dolphin lives in cool temperate and sub-Arctic waters of the North Atlantic, from New England and Canada to Greenland, Iceland, Norway and the North Sea, mostly over the continental shelf edge.',
      'In 2019, genetic studies led scientists to move it from the genus Lagenorhynchus to its own genus, Leucopleurus.',
    ],
    populationStatus: [
      'There are probably hundreds of thousands, and the species is listed as Least Concern.',
      'In the Faroe Islands, white-sided dolphins are sometimes taken in drive hunts. In 2021, more than 1,400 were killed in a single day, causing international outcry.',
    ],
    appearance: [
      'It is stocky, with a short, thick beak and a tall, curved dorsal fin. Its most distinctive marking is a white patch on the flank below the fin, followed by a yellow-ochre band towards the tail.',
    ],
    behaviourAndDiet: [
      'It feeds on schooling fish such as herring, mackerel and sand eels, as well as squid, often cooperating to herd prey.',
      'Groups typically number 50–60 animals but can gather in thousands. They sometimes feed alongside fin and humpback whales.',
    ],
    lifespanAndReproduction: [
      'They live for around 25 years. Females give birth every two to three years after a gestation of about 11 months.',
    ],
    threatsDetail: [
      'Bycatch in trawls and gillnets and drive hunts in the Faroe Islands are the main threats. Pollutants accumulate in their blubber.',
      'As the North Atlantic warms, their range may shift northwards.',
    ],
    classification: delphinid('Leucopleurus', 'Leucopleurus acutus'),
  },
  {
    slug: 'white-beaked-dolphin',
    commonName: 'White-beaked dolphin',
    alternativeNames: [],
    scientificName: 'Lagenorhynchus albirostris',
    authority: 'Gray, 1846',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A large, sturdy dolphin of cold North Atlantic and sub-Arctic waters, with a short, often white beak. As the sea warms, it may be losing ground to warm-water species moving north.',
    mainImage: null,

    length: { min: 2.3, max: 3.1 },
    weight: { min: 180, max: 350 },
    lifespan: { min: 30, max: 40 },
    threats: ['Climate change', 'Bycatch', 'Pollution', 'Hunting'],
    distributionShort: 'Cold North Atlantic',
    oceans: ['north-atlantic', 'arctic'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['EU Habitats Directive', 'CITES II', 'Bonn Convention'],
    legalProtection: ['EU Habitats Directive — Annex IV', 'CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'ASCOBANS', 'US Marine Mammal Protection Act'],

    about: [
      'The white-beaked dolphin lives in cold waters of the North Atlantic, from Cape Cod and Labrador to Greenland, Iceland, Svalbard and the North Sea. It is one of the few dolphins at home in sub-Arctic seas.',
      'It is the only species left in the genus Lagenorhynchus after its relatives were moved to other genera in 2019.',
    ],
    populationStatus: [
      'There are probably more than 100,000, and the species is listed as Least Concern.',
      'Around the British Isles, its range appears to be contracting as warmer waters favour common dolphins.',
    ],
    appearance: [
      'White-beaked dolphins are robust, with a short, thick beak that is often — but not always — white. The back is dark, with pale grey patches in front of and behind the tall dorsal fin.',
    ],
    behaviourAndDiet: [
      'They feed on cod, haddock, herring and other fish, often near the seabed.',
      'They are fast and acrobatic, and often ride the bow waves of boats. Groups usually contain fewer than 30 animals.',
    ],
    lifespanAndReproduction: [
      'They can live for over 35 years. Calves are about 1.2 metres long at birth and are born mostly in summer.',
    ],
    threatsDetail: [
      'Climate change is the long-term concern. Bycatch, pollution and small hunts in Greenland and Canada also occur.',
    ],
    classification: delphinid('Lagenorhynchus', 'Lagenorhynchus albirostris'),
  },
  {
    slug: 'pacific-white-sided-dolphin',
    commonName: 'Pacific white-sided dolphin',
    alternativeNames: ['Lag'],
    scientificName: 'Sagmatias obliquidens',
    authority: 'Gill, 1865',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'An energetic, acrobatic dolphin of the cool North Pacific, often seen in large groups that leap and bow-ride alongside boats.',
    mainImage: noaaImage('pacific-white-sided-dolphin', 'Illustration of a Pacific white-sided dolphin with a two-toned hooked fin and pale stripes along its sides'),

    length: { min: 1.7, max: 2.5 },
    weight: { min: 75, max: 180 },
    lifespan: { min: 35, max: 46 },
    threats: ['Bycatch', 'Pollution', 'Climate change'],
    distributionShort: 'Cool temperate North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'The Pacific white-sided dolphin lives in cool temperate waters of the North Pacific, from Japan and Russia to Alaska and California, both offshore and in coastal waters.',
      'It often travels with northern right whale dolphins and Risso’s dolphins, and has been seen interacting with humpback whales.',
    ],
    populationStatus: [
      'There are probably close to a million, and the species is listed as Least Concern. Many thousands were killed in high-seas drift nets before they were banned in 1992.',
    ],
    appearance: [
      'It has a very short beak, a dark grey back and a tall, strongly hooked, two-toned dorsal fin. Pale grey stripes sweep along the sides from the face to the tail.',
    ],
    behaviourAndDiet: [
      'It feeds on schooling fish such as anchovies, herring and hake, as well as squid.',
      'Groups range from tens to thousands of animals. They are highly acrobatic and often somersault.',
    ],
    lifespanAndReproduction: [
      'They can live for over 40 years. Calves are born in summer after a gestation of about 12 months.',
    ],
    threatsDetail: [
      'Bycatch, pollutants and changes in prey linked to warming ocean conditions are the main threats.',
    ],
    classification: delphinid('Sagmatias', 'Sagmatias obliquidens'),
  },
  {
    slug: 'dusky-dolphin',
    commonName: 'Dusky dolphin',
    alternativeNames: [],
    scientificName: 'Sagmatias obscurus',
    authority: 'Gray, 1828',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'One of the most acrobatic dolphins, known for repeated high leaps. Dusky dolphins live in cool coastal waters of the Southern Hemisphere and hunt anchovies cooperatively off Argentina.',
    mainImage: null,

    length: { min: 1.6, max: 2.1 },
    weight: { min: 70, max: 85 },
    lifespan: { min: 25, max: 35 },
    threats: ['Bycatch', 'Hunting', 'Boat disturbance'],
    distributionShort: 'Cool coastal Southern Hemisphere',
    oceans: ['south-atlantic', 'south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'Dusky dolphins live in cool coastal waters off New Zealand, Argentina, Peru and Chile, and south-western Africa.',
      'Off Patagonia, groups work together to herd anchovies into tight balls against the surface, a behaviour studied for decades by the American biologist Bernd Würsig. Off Kaikōura in New Zealand, groups of hundreds rest close to shore by day and feed offshore at night.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but thousands were once killed every year off Peru for food and bait, and that population is thought to be depleted.',
    ],
    appearance: [
      'Dusky dolphins have a short beak, a dark back and a two-toned dorsal fin. Two pale grey blazes sweep forward and up along the sides.',
    ],
    behaviourAndDiet: [
      'They feed on anchovies, squid and other small fish, using different strategies in different places.',
      'They perform a variety of leaps, including repeated somersaults, which may help coordinate the group.',
    ],
    lifespanAndReproduction: [
      'They live for around 25–35 years. Calves are born in summer after a gestation of about 13 months.',
    ],
    threatsDetail: [
      'Bycatch and illegal hunting off Peru are the main threats. In New Zealand, dolphin-watching is regulated to limit disturbance.',
    ],
    classification: delphinid('Sagmatias', 'Sagmatias obscurus'),
  },
  {
    slug: 'peales-dolphin',
    commonName: 'Peale’s dolphin',
    alternativeNames: ['Black-chinned dolphin'],
    scientificName: 'Sagmatias australis',
    authority: 'Peale, 1848',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A dolphin of the cold coasts of southern South America, often seen feeding along the edges of kelp forests around Patagonia, Tierra del Fuego and the Falkland Islands.',
    mainImage: null,

    length: { min: 2, max: 2.2 },
    weight: { min: 100, max: 115 },
    lifespan: null,
    threats: ['Bycatch', 'Habitat loss'],
    distributionShort: 'Coasts of southern South America',
    oceans: ['south-atlantic', 'south-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'Peale’s dolphin lives in cold, shallow coastal waters of southern Chile and Argentina, around Tierra del Fuego and the Falkland Islands, often in fjords and channels.',
      'It is closely associated with kelp forests, where it hunts fish and octopus.',
    ],
    populationStatus: [
      'It is listed as Least Concern. In the past, it was killed in large numbers in southern Chile for use as crab bait, but this practice has largely stopped.',
    ],
    appearance: [
      'It has a dark face and chin, a short beak, a dark back with a pale flank patch and a white “armpit” behind the flipper.',
    ],
    behaviourAndDiet: [
      'It feeds on fish, octopus and squid near the seabed and in kelp beds, usually in small groups of a few animals.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history. Calves are thought to be born in spring and summer.',
    ],
    threatsDetail: [
      'Bycatch and the expansion of salmon farming in southern Chile, which alters coastal habitats, are concerns.',
    ],
    classification: delphinid('Sagmatias', 'Sagmatias australis'),
  },
  {
    slug: 'hourglass-dolphin',
    commonName: 'Hourglass dolphin',
    alternativeNames: [],
    scientificName: 'Sagmatias cruciger',
    authority: 'Quoy & Gaimard, 1824',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'The only small dolphin that regularly lives in the Southern Ocean, boldly marked in black and white with an hourglass shape on each side.',
    mainImage: null,

    length: { min: 1.6, max: 1.9 },
    weight: { min: 70, max: 95 },
    lifespan: null,
    threats: ['Climate change'],
    distributionShort: 'Southern Ocean',
    oceans: ['southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The hourglass dolphin lives in cold, open waters of the Southern Ocean all around Antarctica, mostly between the Antarctic Convergence and the pack ice.',
      'It is rarely seen close to land, and much of what is known comes from sightings from research and tourist ships.',
    ],
    populationStatus: [
      'Surveys in the 1980s and 1990s estimated around 140,000 animals south of the Antarctic Convergence. It is listed as Least Concern.',
    ],
    appearance: [
      'Hourglass dolphins are black with two white patches on each side, joined by a thin white line to form an hourglass. They have a short beak and a tall, hooked dorsal fin.',
    ],
    behaviourAndDiet: [
      'They feed on small fish, squid and crustaceans. They often ride the bow waves of ships and are frequently seen with fin and sei whales.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about their life history.',
    ],
    threatsDetail: [
      'No major threats are known. Changes in the Southern Ocean ecosystem caused by climate change could affect them in the future.',
    ],
    classification: delphinid('Sagmatias', 'Sagmatias cruciger'),
  },
  {
    slug: 'northern-right-whale-dolphin',
    commonName: 'Northern right whale dolphin',
    alternativeNames: [],
    scientificName: 'Lissodelphis borealis',
    authority: 'Peale, 1848',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A sleek, black dolphin of the North Pacific with no dorsal fin at all. It travels at high speed in large groups, making long, low leaps.',
    mainImage: noaaImage('northern-right-whale-dolphin', 'Illustration of a northern right whale dolphin: a sleek black dolphin with no dorsal fin and a white belly band'),

    length: { min: 2, max: 3 },
    weight: { min: 60, max: 115 },
    lifespan: { min: 40, max: 42 },
    threats: ['Bycatch', 'Pollution'],
    distributionShort: 'Cool temperate North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'US Marine Mammal Protection Act'],

    about: [
      'The northern right whale dolphin lives in cool, deep offshore waters of the North Pacific, from Japan to British Columbia and California.',
      'Like right whales, it has no dorsal fin — hence its name. It is the only dolphin in the North Pacific without one.',
    ],
    populationStatus: [
      'Tens of thousands were killed in high-seas drift nets in the 1980s before they were banned in 1992. The species is now listed as Least Concern.',
    ],
    appearance: [
      'It is very slender and mostly black, with a white band on the belly and a small white patch on the tip of the lower jaw. It has a short beak and small, narrow flippers.',
    ],
    behaviourAndDiet: [
      'It feeds on lanternfish and squid at night, diving to several hundred metres.',
      'Groups often number hundreds and travel quickly, making long, low arcs out of the water. They often mix with Pacific white-sided dolphins.',
    ],
    lifespanAndReproduction: [
      'They can live for around 40 years. Calves are paler than adults when born.',
    ],
    threatsDetail: [
      'Bycatch in fishing gear is the main known threat.',
    ],
    classification: delphinid('Lissodelphis', 'Lissodelphis borealis'),
  },
  {
    slug: 'southern-right-whale-dolphin',
    commonName: 'Southern right whale dolphin',
    alternativeNames: ['Mealy-mouthed porpoise'],
    scientificName: 'Lissodelphis peronii',
    authority: 'Lacépède, 1804',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A striking black-and-white dolphin of the cool Southern Hemisphere with no dorsal fin. It moves in large, fast groups that seem to bounce across the surface.',
    mainImage: null,

    length: { min: 1.8, max: 2.9 },
    weight: { min: 60, max: 116 },
    lifespan: null,
    threats: ['Bycatch'],
    distributionShort: 'Cool Southern Hemisphere',
    oceans: ['south-atlantic', 'south-pacific', 'indian', 'southern'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The southern right whale dolphin lives in cool temperate and sub-Antarctic waters all around the Southern Hemisphere, usually far from shore.',
      'It is closely related to the northern right whale dolphin and, like it, has no dorsal fin.',
    ],
    populationStatus: [
      'There are no reliable population estimates. It is listed as Least Concern.',
    ],
    appearance: [
      'It is slender and sharply two-toned: black on the back and white on the belly, flanks, beak, forehead and flippers.',
    ],
    behaviourAndDiet: [
      'It feeds on lanternfish and squid, mostly at night. Groups can number in the hundreds or thousands, often with dusky dolphins or pilot whales.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about its life history.',
    ],
    threatsDetail: [
      'Bycatch, especially in fisheries off Chile and Peru, is the main known threat.',
    ],
    classification: delphinid('Lissodelphis', 'Lissodelphis peronii'),
  },

  // ---------- Small coastal dolphins of the Southern Hemisphere ----------
  {
    slug: 'commersons-dolphin',
    commonName: 'Commerson’s dolphin',
    alternativeNames: ['Panda dolphin', 'Skunk dolphin'],
    scientificName: 'Cephalorhynchus commersonii',
    authority: 'Lacépède, 1804',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A tiny, panda-coloured dolphin of the cold coasts of Patagonia and the Falkland Islands, with a separate population around the remote Kerguelen Islands in the Indian Ocean.',
    mainImage: null,

    length: { min: 1.2, max: 1.5 },
    weight: { min: 35, max: 60 },
    lifespan: { min: 15, max: 18 },
    threats: ['Bycatch', 'Habitat loss'],
    distributionShort: 'Southern South America & Kerguelen',
    oceans: ['south-atlantic', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'Commerson’s dolphin lives in shallow, cold coastal waters of Argentina, Tierra del Fuego and the Falkland Islands, and around the Kerguelen Islands, more than 8,000 km away.',
      'The Kerguelen population is recognised as a separate subspecies: its animals are larger and grey, black and white rather than black and white.',
    ],
    populationStatus: [
      'There are probably tens of thousands, and the species is listed as Least Concern.',
    ],
    appearance: [
      'It is small and stocky, with a black head, flippers, dorsal fin and tail, and a broad white band around the middle — like a tiny killer whale or a panda.',
      'The dorsal fin is low and rounded, and the flippers are small and rounded.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish, squid and shrimp near the seabed and in kelp beds.',
      'It is fast, active and often curious, riding waves and bow-riding close to shore.',
    ],
    lifespanAndReproduction: [
      'It lives for up to about 18 years. Females mature at about 6–9 years and give birth after a gestation of about 11–12 months.',
    ],
    threatsDetail: [
      'Bycatch in coastal gillnets and trawls is the main threat in parts of Argentina.',
    ],
    classification: delphinid('Cephalorhynchus', 'Cephalorhynchus commersonii'),
  },
  {
    slug: 'chilean-dolphin',
    commonName: 'Chilean dolphin',
    alternativeNames: ['Black dolphin', 'Tonina'],
    scientificName: 'Cephalorhynchus eutropia',
    authority: 'Gray, 1846',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A small, shy dolphin found only along the coast of Chile, in fjords, channels and river mouths. It is Chile’s only endemic cetacean.',
    mainImage: null,

    length: { min: 1.2, max: 1.7 },
    weight: { min: 30, max: 65 },
    lifespan: null,
    threats: ['Bycatch', 'Habitat loss', 'Pollution'],
    distributionShort: 'Coastal Chile',
    oceans: ['south-pacific'],

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Chilean dolphin lives only in the shallow coastal waters of Chile, from about Valparaíso to Cape Horn, often in sheltered bays, fjords and estuaries.',
      'Small, local populations appear to be isolated from one another.',
    ],
    populationStatus: [
      'Total numbers are unknown but probably low, and the species is listed as Near Threatened.',
    ],
    appearance: [
      'It is small and stocky, dark grey with a pale belly, a rounded dorsal fin and small, rounded flippers.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish, squid and crustaceans close to shore, usually in small groups. It tends to avoid boats.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history.',
    ],
    threatsDetail: [
      'It was once killed for crab bait. Today the main threats are bycatch and the rapid growth of salmon and mussel farming in southern Chile.',
    ],
    classification: delphinid('Cephalorhynchus', 'Cephalorhynchus eutropia'),
  },
  {
    slug: 'heavisides-dolphin',
    commonName: 'Heaviside’s dolphin',
    alternativeNames: ['Benguela dolphin'],
    scientificName: 'Cephalorhynchus heavisidii',
    authority: 'Gray, 1828',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A small dolphin found only along the cold Benguela coast of south-western Africa, from South Africa to Namibia and southern Angola.',
    mainImage: null,

    length: { min: 1.5, max: 1.75 },
    weight: { min: 60, max: 75 },
    lifespan: null,
    threats: ['Bycatch', 'Habitat loss', 'Boat disturbance'],
    distributionShort: 'Benguela coast of south-western Africa',
    oceans: ['south-atlantic'],

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'Heaviside’s dolphin lives only in the cold, nutrient-rich waters of the Benguela Current, along the Atlantic coast of South Africa, Namibia and southern Angola.',
      'It often moves close to shore in the morning and offshore in the afternoon, following the daily movements of its prey.',
    ],
    populationStatus: [
      'There are a few thousand to tens of thousands, and the species is listed as Near Threatened because of its small range.',
    ],
    appearance: [
      'It is small and stocky, with a dark grey cape, a pale grey body, white patches on the belly and a distinctive triangular dorsal fin.',
    ],
    behaviourAndDiet: [
      'It feeds on juvenile hake, squid and other small prey, and is usually seen in small groups. It often leaps vertically out of the water.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history.',
    ],
    threatsDetail: [
      'Bycatch, coastal mining and development, and boat traffic are concerns within its small range.',
    ],
    classification: delphinid('Cephalorhynchus', 'Cephalorhynchus heavisidii'),
  },
  {
    slug: 'hectors-dolphin',
    commonName: 'Hector’s dolphin',
    alternativeNames: ['Māui dolphin', 'Upokohue'],
    scientificName: 'Cephalorhynchus hectori',
    authority: 'van Bénéden, 1881',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'One of the world’s smallest and rarest dolphins, found only in New Zealand. Its North Island subspecies, the Māui dolphin, is down to around 50 animals.',
    mainImage: null,

    length: { min: 1.2, max: 1.5 },
    weight: { min: 40, max: 60 },
    lifespan: { min: 20, max: 22 },
    threats: ['Bycatch', 'Disease', 'Small population', 'Pollution'],
    distributionShort: 'Coastal New Zealand',
    oceans: ['south-pacific'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II', 'New Zealand Marine Mammals Protection Act'],

    about: [
      'Hector’s dolphin lives only in shallow coastal waters around New Zealand, mostly around the South Island. A separate subspecies, the Māui dolphin, lives off the west coast of the North Island.',
      'It has a rounded dorsal fin, often compared to a Mickey Mouse ear, which makes it easy to recognise.',
    ],
    populationStatus: [
      'Around 15,000 Hector’s dolphins remain, mostly around the South Island, and the species is listed as Endangered.',
      'The Māui dolphin is Critically Endangered, with only around 50 animals over one year old left. Every death matters for its survival.',
    ],
    appearance: [
      'It is small and stocky, with grey, black and white markings, a black face and a short beak.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish and squid close to shore, usually in small groups. Animals tend to stay within a few tens of kilometres of home all their lives.',
    ],
    lifespanAndReproduction: [
      'Hector’s dolphins live for about 20 years. Females give birth for the first time at 7–9 years and then only every two to four years, so populations recover very slowly.',
    ],
    threatsDetail: [
      'Entanglement in gillnets and trawls has been the main threat, and fishing restrictions have been extended over the past decades.',
      'Toxoplasmosis, a disease spread by cats through run-off into the sea, has been identified as a significant cause of death.',
    ],
    classification: delphinid('Cephalorhynchus', 'Cephalorhynchus hectori'),
  },

  // ---------- Coastal and river dolphins of the tropics ----------
  {
    slug: 'irrawaddy-dolphin',
    commonName: 'Irrawaddy dolphin',
    alternativeNames: [],
    scientificName: 'Orcaella brevirostris',
    authority: 'Owen in Gray, 1866',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A round-headed dolphin of South-East Asian coasts and great rivers like the Mekong and Ayeyarwady. In Myanmar, some dolphins have cooperated with cast-net fishers for generations.',
    mainImage: null,

    length: { min: 2, max: 2.75 },
    weight: { min: 90, max: 200 },
    lifespan: { min: 25, max: 30 },
    threats: ['Bycatch', 'Habitat loss', 'Pollution', 'Small population'],
    distributionShort: 'Coastal South-East Asia & rivers',
    oceans: ['indian', 'north-pacific', 'freshwater'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I & II'],

    about: [
      'The Irrawaddy dolphin lives in coastal waters, estuaries and lagoons from the Bay of Bengal to the Philippines and Indonesia, and in three great rivers: the Ayeyarwady in Myanmar, the Mekong in Cambodia and Laos, and the Mahakam in Borneo.',
      'In the Ayeyarwady River, dolphins and fishers have cooperated for generations: the dolphins herd fish towards the boats and the fishers cast their nets on signal, and both benefit.',
    ],
    populationStatus: [
      'The species is listed as Endangered. The river populations are tiny — around 100 in the Mekong and fewer still in the Mahakam — and are each listed as Critically Endangered.',
    ],
    appearance: [
      'It has a rounded, bulging head with no beak, a small, rounded dorsal fin and a grey to slate-blue body. The neck is flexible, and it can spit jets of water.',
    ],
    behaviourAndDiet: [
      'It feeds on fish, squid and crustaceans, usually in small groups of fewer than six animals.',
    ],
    lifespanAndReproduction: [
      'It lives for about 30 years. Gestation lasts about 14 months, and calves are about 1 metre long at birth.',
    ],
    threatsDetail: [
      'Entanglement in gillnets is the main threat. Dams, sand mining, electrofishing and pollution degrade the rivers they depend on.',
    ],
    classification: delphinid('Orcaella', 'Orcaella brevirostris'),
  },
  {
    slug: 'australian-snubfin-dolphin',
    commonName: 'Australian snubfin dolphin',
    alternativeNames: [],
    scientificName: 'Orcaella heinsohni',
    authority: 'Beasley, Robertson & Arnold, 2005',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A shy, round-headed dolphin of the shallow coasts of northern Australia, described as a new species only in 2005.',
    mainImage: null,

    length: { min: 1.8, max: 2.7 },
    weight: { min: 110, max: 135 },
    lifespan: null,
    threats: ['Bycatch', 'Habitat loss', 'Small population'],
    distributionShort: 'Northern Australia & New Guinea',
    oceans: ['indian', 'south-pacific'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Australian snubfin dolphin lives in shallow coastal waters, estuaries and river mouths of northern Australia and possibly southern New Guinea.',
      'It was long thought to be an Irrawaddy dolphin, until skull, colour and genetic differences led scientists to describe it as a separate species in 2005.',
    ],
    populationStatus: [
      'It lives in small, scattered populations, most numbering fewer than 100 animals. It is listed as Vulnerable.',
    ],
    appearance: [
      'It has a rounded head with no beak, a small dorsal fin and a subtle three-tone colour pattern of brown, grey and white.',
    ],
    behaviourAndDiet: [
      'It feeds on fish and cephalopods in shallow water and sometimes spits water, possibly to herd fish.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history.',
    ],
    threatsDetail: [
      'Bycatch in gillnets and shark nets, and coastal development such as ports and dredging, threaten its small populations.',
    ],
    classification: delphinid('Orcaella', 'Orcaella heinsohni'),
  },
  {
    slug: 'tucuxi',
    commonName: 'Tucuxi',
    alternativeNames: [],
    scientificName: 'Sotalia fluviatilis',
    authority: 'Gervais & Deville, 1853',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A small, grey dolphin of the Amazon river system that shares its waters with the much larger pink river dolphin. It is a true oceanic dolphin that has adapted to life in fresh water.',
    mainImage: null,

    length: { min: 1.3, max: 1.5 },
    weight: { min: 35, max: 55 },
    lifespan: { min: 30, max: 35 },
    threats: ['Bycatch', 'Habitat loss', 'Pollution', 'Hunting'],
    distributionShort: 'Amazon basin',
    oceans: ['freshwater'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The tucuxi (pronounced “too-koo-shee”) lives in the Amazon River and its tributaries in Brazil, Peru, Colombia and Ecuador. Unlike the river dolphins, it belongs to the same family as ocean dolphins.',
      'It keeps to the main river channels and lakes and, unlike the pink river dolphin, rarely enters the flooded forest.',
    ],
    populationStatus: [
      'Studies in the central Amazon have shown sharp declines, and the species was uplisted to Endangered in 2020.',
    ],
    appearance: [
      'It is small, grey above and pale below, with a triangular dorsal fin and a moderately long beak — like a small bottlenose dolphin.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish, usually in groups of two to six. It is lively and often leaps clear of the water.',
    ],
    lifespanAndReproduction: [
      'It lives for about 30–35 years. Gestation lasts about 10–11 months, and calves are about 70–80 cm long at birth.',
    ],
    threatsDetail: [
      'Entanglement in gillnets is the main threat. Dams, mercury pollution from gold mining and killing for bait in the piracatinga catfish fishery are further pressures.',
    ],
    classification: delphinid('Sotalia', 'Sotalia fluviatilis'),
  },
  {
    slug: 'guiana-dolphin',
    commonName: 'Guiana dolphin',
    alternativeNames: ['Costero', 'Boto-cinza'],
    scientificName: 'Sotalia guianensis',
    authority: 'van Bénéden, 1864',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A small coastal dolphin of Central and South America that can sense weak electric fields with pits on its snout — the first dolphin in which this sense was found.',
    mainImage: null,

    length: { min: 1.7, max: 2.2 },
    weight: { min: 60, max: 80 },
    lifespan: { min: 30, max: 35 },
    threats: ['Bycatch', 'Pollution', 'Habitat loss', 'Boat disturbance'],
    distributionShort: 'Coastal Atlantic, Central & South America',
    oceans: ['south-atlantic', 'north-atlantic'],

    iucnStatus: 'NT',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Guiana dolphin lives in coastal waters, bays and estuaries of the western Atlantic, from Honduras to southern Brazil.',
      'In 2011, researchers showed that the small pits on its snout, where whiskers grow in newborns, can detect weak electric fields — possibly helping it find prey in murky water.',
    ],
    populationStatus: [
      'It is listed as Near Threatened. Some well-studied populations, such as the one in Guanabara Bay in Rio de Janeiro, have declined sharply.',
    ],
    appearance: [
      'It looks like a small bottlenose dolphin: grey above and pinkish to pale below, with a triangular dorsal fin.',
    ],
    behaviourAndDiet: [
      'It feeds on fish, squid and shrimp, often cooperating to trap fish against the shore or in tidal channels.',
    ],
    lifespanAndReproduction: [
      'It lives for about 30 years. Calves are born after a gestation of about 12 months.',
    ],
    threatsDetail: [
      'Bycatch in gillnets, pollution, port development and heavy boat traffic threaten populations in busy coastal areas.',
    ],
    classification: delphinid('Sotalia', 'Sotalia guianensis'),
  },
  {
    slug: 'indo-pacific-humpback-dolphin',
    commonName: 'Indo-Pacific humpback dolphin',
    alternativeNames: ['Chinese white dolphin', 'Pink dolphin'],
    scientificName: 'Sousa chinensis',
    authority: 'Osbeck, 1765',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A coastal dolphin of South-East Asia and southern China whose adults often turn pink or white. Hong Kong’s “Chinese white dolphins” live alongside one of the busiest ports in the world.',
    mainImage: noaaImage('indo-pacific-humpback-dolphin', 'Illustration of an Indo-Pacific humpback dolphin: a pink adult with grey speckles and a long beak'),

    length: { min: 2, max: 2.8 },
    weight: { min: 150, max: 230 },
    lifespan: { min: 35, max: 40 },
    threats: ['Habitat loss', 'Bycatch', 'Pollution', 'Boat disturbance', 'Underwater noise'],
    distributionShort: 'Coastal eastern Indian Ocean & western Pacific',
    oceans: ['indian', 'north-pacific'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II', 'US Endangered Species Act — Endangered (Taiwanese subspecies)'],

    about: [
      'The Indo-Pacific humpback dolphin lives in shallow coastal waters and estuaries from eastern India to southern China, Taiwan and Indonesia.',
      'In the Pearl River estuary, around Hong Kong and Macau, adults are often bright pink. The colour comes from blood vessels close to the skin, not from pigment.',
    ],
    populationStatus: [
      'The species is listed as Vulnerable. The Taiwanese subspecies has fewer than 75 animals and is listed as Critically Endangered.',
      'Around Hong Kong, numbers have fallen sharply as land reclamation, bridges and airport expansion have taken over their habitat.',
    ],
    appearance: [
      'Calves are dark grey, but adults turn spotted, then pink or white. They have a long beak and a small dorsal fin on a low hump.',
    ],
    behaviourAndDiet: [
      'They feed on coastal and estuarine fish, often near river mouths, and sometimes follow trawlers.',
    ],
    lifespanAndReproduction: [
      'They live for about 40 years. Calves are born after a gestation of about 11–12 months and stay with their mothers for several years.',
    ],
    threatsDetail: [
      'Coastal development and reclamation, vessel traffic, underwater construction noise, pollution and bycatch all threaten these dolphins.',
    ],
    classification: delphinid('Sousa', 'Sousa chinensis'),
  },
  {
    slug: 'indian-ocean-humpback-dolphin',
    commonName: 'Indian Ocean humpback dolphin',
    alternativeNames: [],
    scientificName: 'Sousa plumbea',
    authority: 'G. Cuvier, 1829',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A coastal dolphin with a prominent hump under its dorsal fin, found from South Africa to India. In South Africa, fewer than 500 remain.',
    mainImage: null,

    length: { min: 2, max: 2.8 },
    weight: { min: 150, max: 260 },
    lifespan: { min: 30, max: 40 },
    threats: ['Bycatch', 'Habitat loss', 'Pollution', 'Boat disturbance'],
    distributionShort: 'Coastal western Indian Ocean',
    oceans: ['indian'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Indian Ocean humpback dolphin lives in shallow coastal waters from South Africa along East Africa and the Arabian Peninsula to India and Sri Lanka.',
      'It is usually found in water less than 30 metres deep, close to shore.',
    ],
    populationStatus: [
      'The species is listed as Endangered. Populations are small and declining in many areas, including South Africa.',
    ],
    appearance: [
      'Adults are grey, with a long beak and a distinctive elongated hump on the back, topped by a small dorsal fin.',
    ],
    behaviourAndDiet: [
      'It feeds on reef and estuarine fish, usually in small groups.',
    ],
    lifespanAndReproduction: [
      'It lives for up to about 40 years. Females give birth every three years or so.',
    ],
    threatsDetail: [
      'Bycatch in gillnets and in shark nets set to protect bathers, coastal development and pollution are the main threats.',
    ],
    classification: delphinid('Sousa', 'Sousa plumbea'),
  },
  {
    slug: 'australian-humpback-dolphin',
    commonName: 'Australian humpback dolphin',
    alternativeNames: [],
    scientificName: 'Sousa sahulensis',
    authority: 'Jefferson & Rosenbaum, 2014',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'A coastal dolphin of northern Australia and southern New Guinea, recognised as a separate species in 2014.',
    mainImage: null,

    length: { min: 2, max: 2.7 },
    weight: { min: 150, max: 230 },
    lifespan: null,
    threats: ['Bycatch', 'Habitat loss', 'Pollution'],
    distributionShort: 'Northern Australia & New Guinea',
    oceans: ['indian', 'south-pacific'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Australian humpback dolphin lives in shallow coastal waters of northern Australia and southern New Guinea, on the Sahul Shelf, after which it is named.',
      'It was described in 2014, when a review of humpback dolphins split them into four species.',
    ],
    populationStatus: [
      'It lives in small, scattered populations and is listed as Vulnerable.',
    ],
    appearance: [
      'Adults are grey with a pale belly and a dark dorsal “cape”, a long beak and a low, broad dorsal fin without a pronounced hump.',
    ],
    behaviourAndDiet: [
      'It feeds on coastal fish, usually in small groups, and sometimes shares feeding areas with Australian snubfin dolphins.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history.',
    ],
    threatsDetail: [
      'Bycatch, shark nets, coastal development and pollution are the main threats.',
    ],
    classification: delphinid('Sousa', 'Sousa sahulensis'),
  },
  {
    slug: 'atlantic-humpback-dolphin',
    commonName: 'Atlantic humpback dolphin',
    alternativeNames: [],
    scientificName: 'Sousa teuszii',
    authority: 'Kükenthal, 1892',
    category: 'Dolphin',
    family: 'Delphinidae',
    summary:
      'One of the most endangered dolphins in the world, living only in shallow coastal waters of West Africa, from Western Sahara to Angola.',
    mainImage: null,

    length: { min: 2, max: 2.6 },
    weight: { min: 100, max: 170 },
    lifespan: null,
    threats: ['Bycatch', 'Habitat loss', 'Small population', 'Hunting'],
    distributionShort: 'Coastal West Africa',
    oceans: ['north-atlantic', 'south-atlantic'],

    iucnStatus: 'CR',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I & II'],

    about: [
      'The Atlantic humpback dolphin lives only in the shallow, coastal waters of West Africa, in small, scattered populations from Western Sahara to Angola.',
      'It is usually found in water less than 20 metres deep, often in the surf zone, around sandbanks and in the mouths of rivers and mangrove channels.',
    ],
    populationStatus: [
      'Total numbers are probably below 3,000, scattered in small groups along a long coastline. It was uplisted to Critically Endangered in 2020.',
    ],
    appearance: [
      'It is grey, with a long beak and a pronounced hump on the back below a small dorsal fin.',
    ],
    behaviourAndDiet: [
      'It feeds on coastal fish such as mullet, usually in small groups.',
    ],
    lifespanAndReproduction: [
      'Almost nothing is known about its life history.',
    ],
    threatsDetail: [
      'Bycatch in artisanal gillnets is the main threat, and dolphins are sometimes eaten or sold as bushmeat. Coastal development and port construction are increasing.',
    ],
    classification: delphinid('Sousa', 'Sousa teuszii'),
  },
]
