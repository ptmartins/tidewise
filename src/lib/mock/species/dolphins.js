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
      'Curious, social and remarkably adaptable, the bottlenose dolphin is one of the most familiar cetaceans in the world — and Portugal is home to one of Europe’s few resident estuarine communities, in the Sado estuary.',
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
      'The most abundant cetacean in Portuguese waters. Fast, playful and often seen in large, splashing groups, common dolphins can be found year-round along the whole mainland coast and around the islands.',
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

    about: [
      'The short-beaked common dolphin is one of the most widespread and abundant dolphins in the world. It lives in temperate and warm waters over the continental shelf and in the open ocean.',
      'It is the cetacean most often seen off the Portuguese mainland, from Minho to the Algarve, and it is also common around the Azores and Madeira. Groups frequently approach boats to ride the bow wave.',
    ],
    populationStatus: [
      'Globally, there are several million common dolphins, and the species is listed as Least Concern. Hundreds of thousands live in the north-east Atlantic.',
      'Despite their abundance, high numbers die every year in fishing gear along the Atlantic coasts of Portugal, Spain and France, raising concern about the long-term sustainability of these losses.',
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
      'A fast, acrobatic dolphin of offshore waters, with elegant dark stripes along its sides. Striped dolphins are seen off the Portuguese mainland and around both archipelagos, often leaping high out of the water.',
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

    about: [
      'The striped dolphin lives in warm temperate and tropical waters around the world, usually beyond the continental shelf.',
      'In Portugal it is found off the mainland — more often in deeper, offshore waters — and around the Azores and Madeira. It is also one of the species that most often strands on the Portuguese coast.',
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
      'A playful summer visitor to the Azores and Madeira. Atlantic spotted dolphins are born without spots and become increasingly speckled as they age.',
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

    about: [
      'The Atlantic spotted dolphin is found only in the warm and tropical waters of the Atlantic Ocean. It is closely related to the pantropical spotted dolphin.',
      'In Portugal it occurs mainly around the Azores and Madeira, where it arrives in large numbers in summer and early autumn when the water is warmest.',
    ],
    populationStatus: [
      'The species is listed as Least Concern and is estimated to number hundreds of thousands across the Atlantic.',
      'Around the Portuguese islands, it is one of the most commonly seen dolphins during the summer months.',
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
      'A large, blunt-headed dolphin that turns almost white with age as it accumulates scars. Risso’s dolphins are residents in the Azores and are also seen off the mainland and Madeira.',
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

    about: [
      'Risso’s dolphin is a large dolphin with a blunt, rounded head and no beak. It prefers deep waters along steep continental slopes and around oceanic islands.',
      'In Portugal it is regularly seen in the Azores — where a resident population has been studied for years — and also off Madeira and the mainland.',
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
      'An unusual, almost prehistoric-looking dolphin with a long, sloping beak and wrinkled teeth. Rough-toothed dolphins are seen in warm months around Madeira and occasionally in the Azores.',
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

    about: [
      'The rough-toothed dolphin lives in deep tropical and warm temperate waters worldwide. Its name comes from the fine vertical ridges on its teeth.',
      'In Portugal it is seen mainly around Madeira, where groups are recorded every year, and occasionally in the Azores.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but its abundance is not well known in most regions, including the north-east Atlantic.',
      'Records around Madeira suggest a regular presence in warmer months, possibly linked to higher water temperatures.',
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
      'A tropical deep-water dolphin first described from a single skull in 1956 and not seen alive until the 1970s. In Portugal it is known only from rare records around Madeira and the Azores.',
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

    about: [
      'Fraser’s dolphin lives in deep tropical waters worldwide. It was described in 1956 from a skull collected in Borneo decades earlier, and was first seen alive in the early 1970s.',
      'Madeira and the Azores are at the northern edge of its range, and records there are very rare.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but little is known about its abundance in most areas.',
      'In Portuguese waters it is considered a rare visitor.',
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
      'The largest member of the dolphin family and a top ocean predator. A small Iberian population follows bluefin tuna along the Portuguese coast and has become famous for interacting with sailing boats.',
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

    about: [
      'Killer whales are the largest dolphins and one of the most widely distributed mammals on Earth, found from polar ice to the tropics. Different populations specialise on different prey, from fish to seals and other whales.',
      'Off Portugal, a small population known as the Iberian orcas follows Atlantic bluefin tuna between the Strait of Gibraltar and the Bay of Biscay. Since 2020, some of these animals have become known for pushing and biting the rudders of sailing boats.',
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
      'Iberian orcas specialise in hunting bluefin tuna, sometimes chasing them to exhaustion, and they have learned to take tuna from fishing lines in the Strait of Gibraltar.',
      'Killer whales live in tight-knit family groups led by older females. Each pod has its own repertoire of calls, and hunting techniques are passed down from generation to generation — a form of culture.',
    ],
    lifespanAndReproduction: [
      'Females can live for 50–90 years and go through menopause, continuing to lead and help their families long after they stop breeding. Males usually live 30–60 years.',
      'Gestation lasts about 17 months — one of the longest of any whale — and females give birth only every three to ten years.',
    ],
    threatsDetail: [
      'For the Iberian population, the main threats are the availability of bluefin tuna, disturbance from boats, and high levels of pollutants such as PCBs, which can affect reproduction.',
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
      'A large, sleek, all-black dolphin that hunts big fish such as tuna and shares its catch with others. False killer whales are rare visitors to the Azores, Madeira and the Portuguese mainland.',
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

    about: [
      'False killer whales are large members of the dolphin family that live in deep tropical and warm temperate waters. Despite the name, they are more closely related to pilot whales and Risso’s dolphins than to orcas.',
      'In Portugal they are rare but regular visitors, mostly around Madeira and the Azores, with occasional records off the mainland.',
    ],
    populationStatus: [
      'The species is listed as Near Threatened. It is naturally uncommon, and several populations are small and affected by bycatch.',
      'Its abundance in Portuguese waters is unknown.',
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
      'A highly social, round-headed member of the dolphin family that lives in close-knit pods. Long-finned pilot whales are seen off the Portuguese mainland, especially over deep canyons.',
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

    about: [
      'Long-finned pilot whales are large, robust members of the dolphin family that live in cold temperate waters of the North Atlantic and Southern Hemisphere.',
      'In Portugal they are mainly seen off the mainland, especially over the deep Nazaré and Lisbon canyons, and occasionally around the Azores. Further south and around Madeira they are largely replaced by short-finned pilot whales.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, with hundreds of thousands of animals in the North Atlantic.',
      'Local abundance in Portuguese waters is unknown, but groups are seen regularly in some offshore areas.',
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
      'A deep-diving, sociable relative of the long-finned pilot whale. Short-finned pilot whales are among the most frequently seen cetaceans off Madeira, where some groups are resident year-round.',
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

    about: [
      'The short-finned pilot whale lives in tropical and warm temperate waters worldwide. It is closely related to the long-finned pilot whale and very similar in appearance.',
      'Madeira hosts both resident and visiting groups, making it one of the best places in Europe to see this species. It also occurs around the Azores, mainly in summer.',
    ],
    populationStatus: [
      'The species is listed as Least Concern and is widespread, with several hundred thousand animals worldwide.',
      'Long-term photo-identification in Madeira has identified island-associated groups that are seen year after year.',
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
      'Around Madeira, the growing whale-watching industry can disturb resting groups if boats approach too closely or too often.',
      'Bycatch, underwater noise and pollutants are additional threats across their range.',
    ],
    classification: delphinid('Globicephala', 'Globicephala macrorhynchus'),
  },
]
