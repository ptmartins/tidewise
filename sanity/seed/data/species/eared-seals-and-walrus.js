import { noaaImage, pinnipedClassification } from './_shared'

const otariid = (genus, species) => pinnipedClassification({ family: 'Otariidae', genus, species })

// Sea lions and fur seals (Otariidae): external ear flaps, long fore-flippers
// they "fly" with underwater, and hind flippers that turn forward to walk.
export const earedSeals = [
  // ---------- Fur seals ----------
  {
    slug: 'northern-fur-seal',
    commonName: 'Northern fur seal',
    alternativeNames: ['Alaska fur seal'],
    scientificName: 'Callorhinus ursinus',
    authority: 'Linnaeus, 1758',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A fur seal of the North Pacific whose dense coat nearly led to its extinction. The treaty that saved it, in 1911, was the first international agreement to protect wildlife.',
    mainImage: noaaImage('northern-fur-seal', 'Illustration of a male northern fur seal sitting upright, with a thick dark coat'),

    length: { min: 1.4, max: 2.1 },
    weight: { min: 30, max: 275 },
    lifespan: { min: 20, max: 26 },
    threats: ['Prey depletion', 'Entanglement', 'Climate change', 'Pollution'],
    distributionShort: 'North Pacific',
    oceans: ['north-pacific'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['US Marine Mammal Protection Act'],
    legalProtection: ['US Marine Mammal Protection Act'],

    about: [
      'Northern fur seals breed on a few islands in the North Pacific, above all the Pribilof Islands in the Bering Sea, and spend most of the year far out at sea, migrating as far south as California and Japan.',
      'Their fur is extremely dense, with tens of thousands of hairs per square centimetre trapping a layer of air against the skin.',
    ],
    populationStatus: [
      'Commercial hunting for their pelts reduced them from millions to a few hundred thousand by 1910. The North Pacific Fur Seal Treaty of 1911, between the United States, Britain, Japan and Russia, was the first international treaty for wildlife conservation.',
      'Numbers recovered, but the Pribilof Islands population has been declining since the 1970s for reasons that are still not fully understood, and the species is listed as Vulnerable.',
    ],
    appearance: [
      'Males are much larger than females and dark brown to black, with a thick mane. Females are grey above and reddish below. They have a short, down-curved snout and very long hind flippers.',
    ],
    behaviourAndDiet: [
      'They feed at night on small schooling fish such as pollock and on squid, usually in the upper 200 metres.',
      'Males arrive first on the breeding beaches and defend territories; females return to give birth and mate again within days.',
    ],
    lifespanAndReproduction: [
      'Females can live for 25 years, males rather less. Pups are nursed for about four months, while mothers make long feeding trips to sea.',
    ],
    threatsDetail: [
      'Changes in prey availability, possibly linked to fisheries and climate, are thought to be behind the recent decline. Entanglement in fishing gear and plastic is a visible problem.',
    ],
    classification: otariid('Callorhinus', 'Callorhinus ursinus'),
  },
  {
    slug: 'guadalupe-fur-seal',
    commonName: 'Guadalupe fur seal',
    alternativeNames: [],
    scientificName: 'Arctocephalus townsendi',
    authority: 'Merriam, 1897',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A fur seal that was declared extinct twice. A handful of survivors were rediscovered on Guadalupe Island, Mexico, in 1954, and the population has since grown to tens of thousands.',
    mainImage: noaaImage('guadalupe-fur-seal', 'Illustration of a Guadalupe fur seal sitting upright, with a pointed snout and brown coat'),

    length: { min: 1.4, max: 2.2 },
    weight: { min: 40, max: 170 },
    lifespan: { min: 17, max: 20 },
    threats: ['Climate change', 'Entanglement', 'Disease'],
    distributionShort: 'Mexico & California',
    oceans: ['north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['CITES I', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix I', 'US Endangered Species Act — Threatened', 'US Marine Mammal Protection Act'],

    about: [
      'The Guadalupe fur seal breeds almost entirely on Guadalupe Island, off Baja California, with a smaller colony on the San Benito Islands. It feeds far offshore and sometimes reaches California.',
      'It was hunted so heavily for its fur in the 19th century that it was thought to be extinct by the 1890s. In 1954, the American biologist Carl Hubbs found a few animals breeding in sea caves on Guadalupe Island.',
    ],
    populationStatus: [
      'Strict protection in Mexico has allowed the population to grow steadily, to tens of thousands of animals, and the species is now listed as Least Concern.',
    ],
    appearance: [
      'It has a long, pointed snout and a thick, dark brown coat. Adult males have a silvery-grey mane.',
    ],
    behaviourAndDiet: [
      'It feeds mostly at night on squid and small fish, travelling hundreds of kilometres from its colonies.',
      'It rests in rocky caves and crevices more than most fur seals do — perhaps one reason a few survived the hunt.',
    ],
    lifespanAndReproduction: [
      'Pups are born in summer and nursed for up to nine months.',
    ],
    threatsDetail: [
      'Marine heatwaves have caused years of high pup mortality, as mothers struggle to find food. Entanglement and disease are additional threats.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus townsendi'),
  },
  {
    slug: 'antarctic-fur-seal',
    commonName: 'Antarctic fur seal',
    alternativeNames: ['Kerguelen fur seal'],
    scientificName: 'Arctocephalus gazella',
    authority: 'Peters, 1875',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'Hunted almost to extinction for its fur in the early 19th century, the Antarctic fur seal has returned in millions, crowding the beaches of South Georgia.',
    mainImage: null,

    length: { min: 1.2, max: 2 },
    weight: { min: 25, max: 200 },
    lifespan: { min: 15, max: 25 },
    threats: ['Climate change', 'Prey depletion', 'Disease', 'Entanglement'],
    distributionShort: 'Sub-Antarctic islands',
    oceans: ['southern', 'south-atlantic', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'stable',
    protectedUnder: ['CITES II', 'Antarctic Treaty System'],
    legalProtection: ['CITES — Appendix II', 'Convention for the Conservation of Antarctic Seals'],

    about: [
      'Antarctic fur seals breed on islands south of or near the Antarctic Polar Front, and above all on South Georgia, which holds the vast majority of the population.',
      'Sealers had nearly wiped them out by the 1830s. From a few surviving animals they recovered spectacularly in the 20th century, helped by the abundance of krill after the large whales were removed by whaling.',
    ],
    populationStatus: [
      'There are a few million, and the species is listed as Least Concern, but numbers at South Georgia have fallen in recent decades as krill has become less reliable.',
    ],
    appearance: [
      'Males are large and dark grey-brown with a thick mane; females are smaller and grey. A small number are born pale cream or “blonde”.',
    ],
    behaviourAndDiet: [
      'They feed mainly on krill, as well as fish and squid, diving mostly at night.',
      'Breeding beaches are crowded and noisy, with males fiercely defending small territories.',
    ],
    lifespanAndReproduction: [
      'Pups are nursed for about four months while their mothers make repeated feeding trips to sea.',
    ],
    threatsDetail: [
      'Climate change and expanding krill fisheries threaten their main food supply. Avian influenza reached South Georgia in 2023.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus gazella'),
  },
  {
    slug: 'subantarctic-fur-seal',
    commonName: 'Subantarctic fur seal',
    alternativeNames: ['Amsterdam Island fur seal'],
    scientificName: 'Arctocephalus tropicalis',
    authority: 'Gray, 1872',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A fur seal of remote islands in the Southern Ocean, recognisable by the creamy-orange face and chest of adults and the crest of fur on males’ heads.',
    mainImage: null,

    length: { min: 1.2, max: 1.8 },
    weight: { min: 25, max: 165 },
    lifespan: { min: 20, max: 25 },
    threats: ['Climate change', 'Entanglement', 'Prey depletion'],
    distributionShort: 'Sub-Antarctic islands of the Atlantic & Indian oceans',
    oceans: ['south-atlantic', 'indian', 'southern'],

    iucnStatus: 'LC',
    populationTrend: 'stable',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'Subantarctic fur seals breed on islands just north of the Antarctic Polar Front, with the largest colonies on Gough Island in the South Atlantic and on Amsterdam and Prince Edward islands in the Indian Ocean.',
      'Wanderers are occasionally found as far away as Brazil, South Africa and Australia.',
    ],
    populationStatus: [
      'After being heavily hunted, they have recovered to several hundred thousand, and the species is listed as Least Concern.',
    ],
    appearance: [
      'Adults have a dark grey-brown back and a creamy-orange face and chest. Males have a tuft of longer fur on top of the head that they can raise when excited.',
    ],
    behaviourAndDiet: [
      'They feed at night on lanternfish and squid.',
    ],
    lifespanAndReproduction: [
      'Pups are nursed for up to ten months, one of the longest nursing periods among fur seals.',
    ],
    threatsDetail: [
      'Entanglement in debris and shifts in prey caused by changing ocean conditions are the main concerns.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus tropicalis'),
  },
  {
    slug: 'south-american-fur-seal',
    commonName: 'South American fur seal',
    alternativeNames: [],
    scientificName: 'Arctocephalus australis',
    authority: 'Zimmermann, 1783',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A fur seal of the rocky coasts of South America, from Peru round Cape Horn to Uruguay, where the largest colonies live on offshore islands.',
    mainImage: null,

    length: { min: 1.4, max: 2 },
    weight: { min: 30, max: 200 },
    lifespan: { min: 20, max: 30 },
    threats: ['Bycatch', 'Climate change', 'Prey depletion', 'Disease'],
    distributionShort: 'Coasts of South America',
    oceans: ['south-atlantic', 'south-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The South American fur seal breeds on rocky shores and islands from Peru and Chile to Tierra del Fuego, the Falkland Islands, Argentina and Uruguay.',
      'The animals of Peru and northern Chile, sometimes treated as a separate subspecies, live in the cold, productive Humboldt Current and suffer badly during El Niño years.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, with the largest numbers in Uruguay. The Peruvian population is much smaller and considered threatened.',
    ],
    appearance: [
      'It has a pointed snout and a dark grey-brown coat. Adult males are much larger, with a thick mane.',
    ],
    behaviourAndDiet: [
      'It feeds on anchovies, sardines, squid and other small prey, often at night.',
    ],
    lifespanAndReproduction: [
      'Pups are nursed for up to a year or more.',
    ],
    threatsDetail: [
      'Bycatch, conflict with fisheries, El Niño events and outbreaks of avian influenza are the main threats.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus australis'),
  },
  {
    slug: 'new-zealand-fur-seal',
    commonName: 'New Zealand fur seal',
    alternativeNames: ['Kekeno', 'Long-nosed fur seal'],
    scientificName: 'Arctocephalus forsteri',
    authority: 'Lesson, 1828',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A common sight on the rocky coasts of New Zealand and southern Australia, where it is recolonising beaches it had abandoned after centuries of hunting.',
    mainImage: null,

    length: { min: 1.5, max: 2.5 },
    weight: { min: 30, max: 160 },
    lifespan: { min: 15, max: 25 },
    threats: ['Bycatch', 'Entanglement', 'Human disturbance'],
    distributionShort: 'New Zealand & southern Australia',
    oceans: ['south-pacific', 'indian'],

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II', 'New Zealand Marine Mammals Protection Act'],

    about: [
      'The New Zealand fur seal lives around New Zealand and its sub-Antarctic islands and along the coasts of South Australia and Western Australia.',
      'Hunted by Māori and then intensively by European sealers, it disappeared from much of its range by the late 19th century. Since protection, it has spread back to many mainland coasts.',
    ],
    populationStatus: [
      'There are a few hundred thousand, and the species is listed as Least Concern.',
    ],
    appearance: [
      'It has a long, pointed snout and a dark grey-brown coat. Males are much larger than females, with a thick mane.',
    ],
    behaviourAndDiet: [
      'It feeds on squid, octopus and fish such as lanternfish and hoki, and is among the deepest-diving fur seals.',
      'Pups gather in “kindergartens” in rock pools and streams near the shore while their mothers feed at sea.',
    ],
    lifespanAndReproduction: [
      'Pups are born in summer and nursed for about ten months.',
    ],
    threatsDetail: [
      'Bycatch in trawl fisheries, entanglement in debris, and disturbance or deliberate harm by people on popular beaches are the main threats.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus forsteri'),
  },
  {
    slug: 'galapagos-fur-seal',
    commonName: 'Galápagos fur seal',
    alternativeNames: [],
    scientificName: 'Arctocephalus galapagoensis',
    authority: 'Heller, 1904',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'The smallest of all eared seals, living on the rocky shores of the equatorial Galápagos Islands, where it shelters from the heat in shady crevices.',
    mainImage: null,

    length: { min: 1.1, max: 1.6 },
    weight: { min: 27, max: 64 },
    lifespan: { min: 20, max: 22 },
    threats: ['Climate change', 'Prey depletion', 'Disease', 'Entanglement'],
    distributionShort: 'Galápagos Islands',
    oceans: ['south-pacific'],

    iucnStatus: 'EN',
    populationTrend: 'unknown',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The Galápagos fur seal lives only in the Galápagos Islands, on the western islands where cool, upwelling water brings food close to shore.',
      'It is the only fur seal that breeds on the equator, and it spends the hottest part of the day resting in caves and shady crevices.',
    ],
    populationStatus: [
      'It is listed as Endangered. Strong El Niño events, which cut off the cold, nutrient-rich water, have repeatedly killed large numbers of seals, especially pups.',
    ],
    appearance: [
      'It is small and stocky, with a short snout, large eyes and a dense, grey-brown coat.',
    ],
    behaviourAndDiet: [
      'It feeds at night on lanternfish and squid, and avoids feeding on bright moonlit nights, when its prey stays deep.',
    ],
    lifespanAndReproduction: [
      'Pups may be nursed for up to two or three years, and a mother may care for a yearling and a newborn at the same time.',
    ],
    threatsDetail: [
      'Climate change could make severe El Niño events more frequent. Diseases spread by dogs and entanglement in fishing gear are additional threats.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus galapagoensis'),
  },
  {
    slug: 'juan-fernandez-fur-seal',
    commonName: 'Juan Fernández fur seal',
    alternativeNames: [],
    scientificName: 'Arctocephalus philippii',
    authority: 'Peters, 1866',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'Millions were killed for their fur, and the species was believed extinct for most of the 20th century — until a small colony was found in 1965. It now numbers in the tens of thousands.',
    mainImage: null,

    length: { min: 1.4, max: 2 },
    weight: { min: 50, max: 140 },
    lifespan: null,
    threats: ['Climate change', 'Entanglement'],
    distributionShort: 'Juan Fernández & Desventuradas Islands',
    oceans: ['south-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The Juan Fernández fur seal breeds only on the Juan Fernández and Desventuradas islands, off the coast of Chile.',
      'In the 17th to 19th centuries, sealers took millions of skins from these islands. By the late 1800s the seals were thought to be gone, until a small colony was rediscovered in 1965.',
    ],
    populationStatus: [
      'Under protection, the population has grown rapidly to tens of thousands, and the species is listed as Least Concern.',
    ],
    appearance: [
      'It has a long, pointed snout and a dark brown coat, with silvery tips on the mane of adult males.',
    ],
    behaviourAndDiet: [
      'Females make long feeding trips — sometimes more than 500 km — to hunt lanternfish and squid at night.',
    ],
    lifespanAndReproduction: [
      'Pups are nursed for up to ten months.',
    ],
    threatsDetail: [
      'Its small range makes it vulnerable to El Niño events, disease and entanglement in fishing gear.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus philippii'),
  },
  {
    slug: 'brown-fur-seal',
    commonName: 'Brown fur seal',
    alternativeNames: ['Cape fur seal', 'Australian fur seal'],
    scientificName: 'Arctocephalus pusillus',
    authority: 'Schreber, 1775',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'The largest fur seal, with two populations: the Cape fur seal of southern Africa, which gathers in colonies of hundreds of thousands, and the Australian fur seal of south-eastern Australia.',
    mainImage: null,

    length: { min: 1.2, max: 2.3 },
    weight: { min: 40, max: 360 },
    lifespan: { min: 18, max: 21 },
    threats: ['Bycatch', 'Entanglement', 'Hunting', 'Prey depletion'],
    distributionShort: 'Southern Africa & south-eastern Australia',
    oceans: ['south-atlantic', 'indian', 'south-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'stable',
    protectedUnder: ['CITES II'],
    legalProtection: ['CITES — Appendix II'],

    about: [
      'The Cape fur seal breeds along the coasts of Namibia and South Africa, with huge colonies such as the one at Cape Cross. The Australian fur seal breeds on islands in the Bass Strait and off Victoria and Tasmania.',
      'Cape fur seals sometimes ambush seabirds, and at Seal Island in False Bay they are hunted by great white sharks that leap clear of the water to catch them.',
    ],
    populationStatus: [
      'There are around two million Cape fur seals and over 100,000 Australian fur seals. The species is listed as Least Concern.',
    ],
    appearance: [
      'Brown fur seals are large and robust, with a broad head and a pointed snout. Males are dark grey-brown with a mane; females are lighter brown.',
    ],
    behaviourAndDiet: [
      'They feed on schooling fish, squid and crustaceans, mostly over the continental shelf.',
    ],
    lifespanAndReproduction: [
      'Pups are born in early summer and nursed for up to a year.',
    ],
    threatsDetail: [
      'Conflict with fisheries, entanglement, and in Namibia a commercial harvest, are the main pressures. Mass deaths of pups have occurred in years of poor food supply.',
    ],
    classification: otariid('Arctocephalus', 'Arctocephalus pusillus'),
  },

  // ---------- Sea lions ----------
  {
    slug: 'steller-sea-lion',
    commonName: 'Steller sea lion',
    alternativeNames: ['Northern sea lion'],
    scientificName: 'Eumetopias jubatus',
    authority: 'Schreber, 1776',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'The largest sea lion, with males weighing over a tonne. Its western population collapsed by about 80% from the 1970s, while the eastern one recovered — a mystery that is still debated.',
    mainImage: noaaImage('steller-sea-lion', 'Illustration of a male Steller sea lion: a large, tawny sea lion with a thick neck'),

    length: { min: 2.3, max: 3.3 },
    weight: { min: 260, max: 1100 },
    lifespan: { min: 20, max: 30 },
    threats: ['Prey depletion', 'Entanglement', 'Climate change', 'Pollution'],
    distributionShort: 'North Pacific rim',
    oceans: ['north-pacific'],

    iucnStatus: 'NT',
    populationTrend: 'unknown',
    protectedUnder: ['US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['US Endangered Species Act — Endangered (western population)', 'US Marine Mammal Protection Act'],

    about: [
      'Steller sea lions live around the rim of the North Pacific, from northern Japan and the Kuril Islands through the Aleutians and Alaska to California.',
      'They are named after Georg Wilhelm Steller, the naturalist on Vitus Bering’s expedition of 1741, who also described Steller’s sea cow.',
    ],
    populationStatus: [
      'The western population, from the Gulf of Alaska to Russia, declined by about 80% between the 1970s and 2000 and is listed as Endangered in the United States. Possible causes include changes in prey, fisheries competition and killer whale predation.',
      'The eastern population, from south-east Alaska to California, grew steadily and was removed from the US endangered list in 2013. The species as a whole is listed as Near Threatened.',
    ],
    appearance: [
      'Steller sea lions are light buff to reddish-brown. Males are about three times heavier than females and have a massive neck and chest with a thick mane.',
    ],
    behaviourAndDiet: [
      'They feed on pollock, herring, salmon, Atka mackerel and squid, and occasionally on seals.',
      'They gather in large, noisy rookeries on remote rocky islands during the breeding season.',
    ],
    lifespanAndReproduction: [
      'Females can live for about 30 years and males about 20. Pups are nursed for one to three years.',
    ],
    threatsDetail: [
      'Changes in the abundance and quality of prey, entanglement in fishing gear and debris, and pollution are the main concerns.',
    ],
    classification: otariid('Eumetopias', 'Eumetopias jubatus'),
  },
  {
    slug: 'california-sea-lion',
    commonName: 'California sea lion',
    alternativeNames: [],
    scientificName: 'Zalophus californianus',
    authority: 'Lesson, 1828',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'The familiar, barking sea lion of harbours and piers along the Pacific coast of North America — intelligent, playful and booming in numbers.',
    mainImage: noaaImage('california-sea-lion', 'Illustration of a male California sea lion: a dark brown sea lion with a raised forehead'),

    length: { min: 1.8, max: 2.4 },
    weight: { min: 80, max: 350 },
    lifespan: { min: 20, max: 30 },
    threats: ['Disease', 'Entanglement', 'Climate change', 'Bycatch'],
    distributionShort: 'Pacific coast of North America',
    oceans: ['north-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'increasing',
    protectedUnder: ['US Marine Mammal Protection Act'],
    legalProtection: ['US Marine Mammal Protection Act'],

    about: [
      'California sea lions breed on islands off southern California and Mexico, including in the Gulf of California, and males travel north as far as British Columbia outside the breeding season.',
      'They readily haul out on docks, buoys and piers, such as the famous Pier 39 in San Francisco.',
    ],
    populationStatus: [
      'Since protection under the US Marine Mammal Protection Act in 1972, the US population has grown to around 250,000 or more. The species is listed as Least Concern.',
    ],
    appearance: [
      'Males are dark brown with a raised bony crest on the forehead that often has pale fur; females are smaller and lighter tan.',
    ],
    behaviourAndDiet: [
      'They feed on anchovies, sardines, mackerel, salmon and squid. Their intelligence has made them a subject of studies on animal learning and reasoning.',
    ],
    lifespanAndReproduction: [
      'They can live for 20–30 years. Pups are born in early summer and nursed for up to a year.',
    ],
    threatsDetail: [
      'Toxic algal blooms produce domoic acid, which causes seizures and brain damage in sea lions. Marine heatwaves have led to mass strandings of starving pups.',
      'Entanglement in fishing gear and conflicts with fisheries are additional problems.',
    ],
    classification: otariid('Zalophus', 'Zalophus californianus'),
  },
  {
    slug: 'galapagos-sea-lion',
    commonName: 'Galápagos sea lion',
    alternativeNames: [],
    scientificName: 'Zalophus wollebaeki',
    authority: 'Sivertsen, 1953',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A playful, curious sea lion found only in the Galápagos Islands, where it sleeps on beaches, benches and boats, and often swims up to snorkellers.',
    mainImage: null,

    length: { min: 1.5, max: 2.5 },
    weight: { min: 50, max: 250 },
    lifespan: { min: 15, max: 24 },
    threats: ['Climate change', 'Disease', 'Entanglement', 'Human disturbance'],
    distributionShort: 'Galápagos Islands',
    oceans: ['south-pacific'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: [],
    legalProtection: ['Galápagos Marine Reserve'],

    about: [
      'The Galápagos sea lion lives throughout the Galápagos archipelago, with a small number on Isla de la Plata off mainland Ecuador.',
      'It is closely related to the California sea lion and was recognised as a separate species in the 2000s.',
    ],
    populationStatus: [
      'Numbers have fallen by more than half since the 1970s, mainly because of El Niño events, and the species is listed as Endangered.',
    ],
    appearance: [
      'Males are dark brown with a raised forehead; females and young are lighter, golden-brown when dry.',
    ],
    behaviourAndDiet: [
      'They feed on sardines and other fish. In some places, groups have been seen cooperating to herd yellowfin tuna into shallow coves.',
    ],
    lifespanAndReproduction: [
      'Pups are nursed for one to three years.',
    ],
    threatsDetail: [
      'El Niño events cut off their food supply. Diseases spread by dogs, entanglement and disturbance from tourism and fishing are additional threats.',
    ],
    classification: otariid('Zalophus', 'Zalophus wollebaeki'),
  },
  {
    slug: 'south-american-sea-lion',
    commonName: 'South American sea lion',
    alternativeNames: ['Southern sea lion', 'Lobo marino'],
    scientificName: 'Otaria byronia',
    authority: 'de Blainville, 1820',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A sea lion with a lion-like mane, found all around the coast of South America. Off Patagonia, killer whales famously strand themselves on the beach to catch its pups.',
    mainImage: null,

    length: { min: 2, max: 2.8 },
    weight: { min: 140, max: 350 },
    lifespan: { min: 15, max: 20 },
    threats: ['Disease', 'Bycatch', 'Prey depletion', 'Entanglement'],
    distributionShort: 'Coasts of South America',
    oceans: ['south-atlantic', 'south-pacific'],

    iucnStatus: 'LC',
    populationTrend: 'unknown',
    protectedUnder: ['Bonn Convention'],
    legalProtection: ['Bonn Convention (CMS) — Appendix II'],

    about: [
      'The South American sea lion lives along the coasts of Peru, Chile, Argentina, Uruguay, southern Brazil and the Falkland Islands.',
      'At Península Valdés in Argentina, some killer whales deliberately surf onto the beach to grab young sea lions from the water’s edge — a risky technique that mothers teach their offspring.',
    ],
    populationStatus: [
      'The species is listed as Least Concern, but in 2023 an outbreak of avian influenza killed tens of thousands of sea lions in Peru, Chile and Argentina.',
    ],
    appearance: [
      'Adult males have a huge head, a short, upturned snout and a thick, lion-like mane. Females are smaller and lighter brown.',
    ],
    behaviourAndDiet: [
      'They feed on fish, squid and octopus, and sometimes take penguins and young fur seals.',
    ],
    lifespanAndReproduction: [
      'Pups are born in summer and nursed for up to a year.',
    ],
    threatsDetail: [
      'Avian influenza, conflict with fisheries, bycatch and entanglement are the main threats.',
    ],
    classification: otariid('Otaria', 'Otaria byronia'),
  },
  {
    slug: 'australian-sea-lion',
    commonName: 'Australian sea lion',
    alternativeNames: [],
    scientificName: 'Neophoca cinerea',
    authority: 'Péron, 1816',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'A sea lion found only in southern and western Australia, with a breeding cycle unlike any other: about every 17½ months, at a different time in each colony.',
    mainImage: null,

    length: { min: 1.3, max: 2.5 },
    weight: { min: 60, max: 300 },
    lifespan: { min: 20, max: 26 },
    threats: ['Bycatch', 'Small population', 'Disease', 'Entanglement'],
    distributionShort: 'Southern & western Australia',
    oceans: ['indian'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: [],
    legalProtection: ['Australian Environment Protection and Biodiversity Conservation Act — Endangered'],

    about: [
      'The Australian sea lion breeds on islands and remote beaches along the coasts of South Australia and Western Australia.',
      'Unusually, females breed roughly every 17½ months, and each colony breeds at its own time, so pups can be born in any season.',
    ],
    populationStatus: [
      'There are probably fewer than 12,000, and numbers have declined by more than half over the last four decades. The species is listed as Endangered.',
    ],
    appearance: [
      'Males are dark chocolate-brown with a pale mane on the head and neck; females are silver-grey above and cream below.',
    ],
    behaviourAndDiet: [
      'They feed near the seabed on fish, octopus, squid and lobster. Females rarely leave the area where they were born.',
    ],
    lifespanAndReproduction: [
      'Pups are nursed for about 17 months, until shortly before the next pup is born.',
    ],
    threatsDetail: [
      'Bycatch in gillnet fisheries, entanglement in debris and a parasitic hookworm that kills many pups are the main threats to these small, isolated colonies.',
    ],
    classification: otariid('Neophoca', 'Neophoca cinerea'),
  },
  {
    slug: 'new-zealand-sea-lion',
    commonName: 'New Zealand sea lion',
    alternativeNames: ['Hooker’s sea lion', 'Whakahao', 'Rāpoka'],
    scientificName: 'Phocarctos hookeri',
    authority: 'Gray, 1844',
    category: 'Sea lion & fur seal',
    family: 'Otariidae',
    summary:
      'One of the rarest sea lions in the world, breeding mainly on New Zealand’s remote sub-Antarctic islands — though it is slowly returning to the mainland.',
    mainImage: null,

    length: { min: 1.6, max: 3.3 },
    weight: { min: 90, max: 450 },
    lifespan: { min: 20, max: 25 },
    threats: ['Bycatch', 'Disease', 'Prey depletion', 'Small population'],
    distributionShort: 'New Zealand & sub-Antarctic islands',
    oceans: ['south-pacific', 'southern'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: [],
    legalProtection: ['New Zealand Marine Mammals Protection Act'],

    about: [
      'The New Zealand sea lion breeds mainly on the Auckland Islands and Campbell Island, far south of New Zealand. Once widespread on the mainland, it was wiped out there by hunting.',
      'In 1993, a female gave birth on the Otago Peninsula, the first mainland birth in about 150 years, and her descendants have started a small breeding colony.',
    ],
    populationStatus: [
      'There are around 12,000, and the species is listed as Endangered. The main colony on the Auckland Islands has declined substantially since the late 1990s.',
    ],
    appearance: [
      'Males are dark brown to black with a thick mane; females are cream to silvery-grey.',
    ],
    behaviourAndDiet: [
      'They make some of the deepest and longest dives of any sea lion, to 500 metres, feeding on fish, squid and octopus near the seabed.',
    ],
    lifespanAndReproduction: [
      'Females can live for about 25 years. Pups are born in summer and nursed for up to a year.',
    ],
    threatsDetail: [
      'Bycatch in the squid trawl fishery, competition with fisheries, and disease — especially a bacterium that kills many pups — are the main threats.',
    ],
    classification: otariid('Phocarctos', 'Phocarctos hookeri'),
  },

  // ---------- Walrus ----------
  {
    slug: 'walrus',
    commonName: 'Walrus',
    alternativeNames: [],
    scientificName: 'Odobenus rosmarus',
    authority: 'Linnaeus, 1758',
    category: 'Walrus',
    family: 'Odobenidae',
    summary:
      'The giant, tusked pinniped of the Arctic, and the last survivor of its family. Walruses use their tusks to haul out onto the ice and suck clams out of their shells on the seabed.',
    mainImage: null,

    length: { min: 2.5, max: 3.6 },
    weight: { min: 400, max: 1700 },
    lifespan: { min: 30, max: 40 },
    threats: ['Sea ice loss', 'Climate change', 'Hunting', 'Human disturbance', 'Underwater noise'],
    distributionShort: 'Arctic seas',
    oceans: ['arctic', 'north-atlantic', 'north-pacific'],

    iucnStatus: 'VU',
    populationTrend: 'unknown',
    protectedUnder: ['US Marine Mammal Protection Act'],
    legalProtection: ['US Marine Mammal Protection Act'],

    about: [
      'Walruses live in shallow seas around the Arctic. The Pacific walrus, the larger subspecies, lives in the Bering and Chukchi seas; the Atlantic walrus lives from north-eastern Canada and Greenland to Svalbard and the Russian Arctic.',
      'Their scientific name, Odobenus, means “tooth-walker”: they hook their tusks onto the ice to help haul their huge bodies out of the water.',
    ],
    populationStatus: [
      'There are probably around 250,000 walruses, most of them Pacific walruses. The species is listed as Vulnerable because of the expected loss of sea ice.',
      'Walruses are hunted by Indigenous communities across the Arctic for food, skins and ivory, under local management.',
    ],
    appearance: [
      'Walruses are enormous, wrinkled and cinnamon-brown to pinkish, turning pale in cold water as blood moves away from the skin. Both sexes have tusks — elongated upper canines — that can reach a metre in males.',
      'Their muzzle carries hundreds of stiff, sensitive whiskers used to find prey on the seabed.',
    ],
    behaviourAndDiet: [
      'They feed mainly on clams and other animals of the seabed, finding them with their whiskers and sucking the soft parts out of the shell with powerful suction.',
      'They are very social, resting in huge, tightly packed herds on ice floes or beaches.',
    ],
    lifespanAndReproduction: [
      'Walruses can live for 30–40 years. Females give birth every three years or so, after a gestation of about 15 months.',
      'Calves stay with their mothers for two years or more — one of the longest periods of maternal care among pinnipeds.',
    ],
    threatsDetail: [
      'As summer sea ice retreats from shallow feeding areas, Pacific walruses increasingly gather in tens of thousands on beaches. Disturbances can cause stampedes that crush young animals.',
      'Increasing shipping, oil and gas development and noise in the Arctic are further pressures.',
    ],
    classification: pinnipedClassification({ family: 'Odobenidae', genus: 'Odobenus', species: 'Odobenus rosmarus' }),
  },
]
