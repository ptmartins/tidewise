import { carnivoranClassification, sirenianClassification } from './_shared'

// Sirenians: the only herbivorous marine mammals, related to elephants
export const sirenians = [
  {
    slug: 'dugong',
    commonName: 'Dugong',
    alternativeNames: ['Sea cow'],
    scientificName: 'Dugong dugon',
    authority: 'Müller, 1776',
    category: 'Sirenian',
    family: 'Dugongidae',
    summary:
      'A gentle, whale-tailed grazer of tropical seagrass meadows, and the only strictly marine plant-eating mammal. Its closest living relatives are elephants.',
    mainImage: null,

    length: { min: 2.4, max: 3 },
    weight: { min: 230, max: 500 },
    lifespan: { min: 50, max: 70 },
    threats: ['Habitat loss', 'Bycatch', 'Hunting', 'Ship strikes', 'Pollution'],
    distributionShort: 'Coastal Indo-Pacific',
    oceans: ['indian', 'north-pacific', 'south-pacific'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II', 'US Endangered Species Act — Endangered'],

    about: [
      'The dugong lives in warm, shallow coastal waters from East Africa and the Red Sea to Australia and the islands of the western Pacific. More than half of the world’s dugongs live in northern Australia.',
      'It is the last living member of its family, which also included the giant Steller’s sea cow of the North Pacific, hunted to extinction in the 18th century.',
    ],
    populationStatus: [
      'The species is listed as Vulnerable. Some populations are much more threatened: those of East Africa and New Caledonia are listed as Critically Endangered and Endangered, and the dugong is thought to have disappeared from Chinese waters.',
    ],
    appearance: [
      'Dugongs are grey-brown and torpedo-shaped, with a whale-like fluked tail, paddle-like flippers and a large, downturned snout covered in bristles.',
      'Adult males and some old females have short tusks.',
    ],
    behaviourAndDiet: [
      'Dugongs feed almost entirely on seagrass, ploughing through the seabed and eating whole plants, roots and all, which leaves meandering feeding trails.',
      'They usually live alone or in pairs, but can gather in large herds where seagrass is plentiful.',
    ],
    lifespanAndReproduction: [
      'Dugongs can live for 70 years. Females have their first calf at 10–17 years and then give birth only every three to seven years, after a gestation of about 13–14 months.',
      'Calves nurse for about 18 months and stay close to their mothers, often riding just above their backs.',
    ],
    threatsDetail: [
      'Loss of seagrass to coastal development, pollution and extreme weather is the biggest threat. Dugongs also drown in fishing nets, are hit by boats and are hunted in some regions.',
      'Because they breed so slowly, even small increases in deaths can cause populations to decline.',
    ],
    classification: sirenianClassification({ family: 'Dugongidae', genus: 'Dugong', species: 'Dugong dugon' }),
  },
  {
    slug: 'west-indian-manatee',
    commonName: 'West Indian manatee',
    alternativeNames: ['Florida manatee', 'Antillean manatee', 'Sea cow'],
    scientificName: 'Trichechus manatus',
    authority: 'Linnaeus, 1758',
    category: 'Sirenian',
    family: 'Trichechidae',
    summary:
      'A slow, gentle giant of warm coasts and rivers, from Florida and the Caribbean to Brazil. In winter, Florida manatees crowd into warm springs and power-plant outflows to survive the cold.',
    mainImage: null,

    length: { min: 2.7, max: 3.5 },
    weight: { min: 400, max: 550 },
    lifespan: { min: 50, max: 65 },
    threats: ['Ship strikes', 'Habitat loss', 'Pollution', 'Climate change', 'Entanglement'],
    distributionShort: 'Caribbean & Atlantic coasts of the Americas',
    oceans: ['north-atlantic', 'south-atlantic', 'freshwater'],

    iucnStatus: 'VU',
    populationTrend: 'unknown',
    protectedUnder: ['CITES I', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix I', 'US Endangered Species Act — Threatened', 'US Marine Mammal Protection Act'],

    about: [
      'The West Indian manatee lives in shallow coastal waters, estuaries and rivers from the south-eastern United States through the Gulf of Mexico and the Caribbean to north-eastern Brazil. It moves freely between salt and fresh water.',
      'There are two subspecies: the Florida manatee and the Antillean manatee.',
    ],
    populationStatus: [
      'The species is listed as Vulnerable. Florida manatees recovered to more than 8,000 animals, but between 2020 and 2022 well over a thousand died of starvation after seagrass beds in the Indian River Lagoon collapsed because of pollution.',
      'Antillean manatees are much less numerous and are threatened by hunting and habitat loss in many countries.',
    ],
    appearance: [
      'Manatees are large, grey and wrinkled, with a rounded, paddle-shaped tail, small flippers with nails and a bristly, flexible upper lip used to grab plants.',
    ],
    behaviourAndDiet: [
      'They graze on seagrasses and freshwater plants, eating around 10% of their body weight every day.',
      'Because of their low metabolism, they cannot tolerate water below about 20 °C for long, and suffer “cold stress” in winter cold snaps.',
    ],
    lifespanAndReproduction: [
      'Manatees can live for 60 years or more. Females give birth every two to five years after a gestation of about 12–13 months, and calves stay with their mothers for up to two years.',
    ],
    threatsDetail: [
      'Collisions with boats are a leading known cause of death in Florida, and most adults bear propeller scars. Loss of seagrass, toxic red tides and cold stress kill many more.',
      'Elsewhere in their range, hunting, bycatch and coastal development are the main threats.',
    ],
    classification: sirenianClassification({ family: 'Trichechidae', genus: 'Trichechus', species: 'Trichechus manatus' }),
  },
  {
    slug: 'amazonian-manatee',
    commonName: 'Amazonian manatee',
    alternativeNames: ['Peixe-boi', 'Vaca marina'],
    scientificName: 'Trichechus inunguis',
    authority: 'Natterer, 1883',
    category: 'Sirenian',
    family: 'Trichechidae',
    summary:
      'The only sirenian that lives entirely in fresh water, in the rivers and flooded forests of the Amazon. It can fast for months during the dry season.',
    mainImage: null,

    length: { min: 2.5, max: 3 },
    weight: { min: 350, max: 500 },
    lifespan: { min: 30, max: 40 },
    threats: ['Hunting', 'Bycatch', 'Habitat loss', 'Climate change'],
    distributionShort: 'Amazon basin',
    oceans: ['freshwater'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix II', 'US Endangered Species Act — Endangered'],

    about: [
      'The Amazonian manatee lives in the Amazon River and its tributaries in Brazil, Peru, Colombia and Ecuador. It is the smallest manatee and the only one that never enters the sea.',
      'It feeds in the flooded forests and floating meadows during the high-water season, building up fat reserves that let it survive for months with little or no food when the water drops.',
    ],
    populationStatus: [
      'In the mid-20th century, tens of thousands were killed every year for their hides, which were used to make machine belts. It is listed as Vulnerable, and hunting for meat continues.',
    ],
    appearance: [
      'It is dark grey, with smooth, rubbery skin and a white or pink patch on the chest. Unlike other manatees, it has no nails on its flippers — its scientific name, inunguis, means “without nails”.',
    ],
    behaviourAndDiet: [
      'It eats aquatic and semi-aquatic plants, such as grasses and water lettuce, and is shy and hard to see in the murky water.',
    ],
    lifespanAndReproduction: [
      'Little is known about its lifespan in the wild. Females give birth to a single calf after a gestation of about a year, timed with rising water.',
    ],
    threatsDetail: [
      'Hunting for meat, bycatch in fishing nets and dams that fragment rivers are the main threats. Severe droughts, made worse by climate change, can strand manatees in drying lakes.',
    ],
    classification: sirenianClassification({ family: 'Trichechidae', genus: 'Trichechus', species: 'Trichechus inunguis' }),
  },
  {
    slug: 'african-manatee',
    commonName: 'African manatee',
    alternativeNames: ['West African manatee'],
    scientificName: 'Trichechus senegalensis',
    authority: 'Link, 1795',
    category: 'Sirenian',
    family: 'Trichechidae',
    summary:
      'The least-known of the manatees, living in coastal lagoons, estuaries and rivers of West and Central Africa — sometimes thousands of kilometres inland.',
    mainImage: null,

    length: { min: 3, max: 4 },
    weight: { min: 400, max: 500 },
    lifespan: { min: 30, max: 40 },
    threats: ['Hunting', 'Bycatch', 'Habitat loss'],
    distributionShort: 'West & Central African coasts and rivers',
    oceans: ['north-atlantic', 'south-atlantic', 'freshwater'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I & II', 'US Endangered Species Act — Threatened'],

    about: [
      'The African manatee lives along the Atlantic coast of Africa from Mauritania to Angola, in coastal lagoons, mangroves, estuaries and rivers. It travels far up rivers such as the Niger, reaching as far inland as Mali.',
      'It is the least studied of all sirenians.',
    ],
    populationStatus: [
      'There are no reliable population estimates. The species is listed as Vulnerable and is thought to be declining in many areas.',
    ],
    appearance: [
      'It looks very like the West Indian manatee: large and grey, with a rounded tail and small flippers with nails.',
    ],
    behaviourAndDiet: [
      'It feeds mainly on plants, including mangrove leaves and riverbank grasses, but has also been reported to take fish from nets and to eat clams.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history, which is probably similar to that of other manatees.',
    ],
    threatsDetail: [
      'Illegal hunting for meat and oil, bycatch in fishing nets and dams that trap manatees in reservoirs or cut them off from the sea are the main threats.',
    ],
    classification: sirenianClassification({ family: 'Trichechidae', genus: 'Trichechus', species: 'Trichechus senegalensis' }),
  },
]

// Otters and the polar bear: carnivorans that still use their paws on land
// but depend on the sea for food
export const fissipeds = [
  {
    slug: 'sea-otter',
    commonName: 'Sea otter',
    alternativeNames: [],
    scientificName: 'Enhydra lutris',
    authority: 'Linnaeus, 1758',
    category: 'Otter',
    family: 'Mustelidae',
    summary:
      'The smallest marine mammal of the North Pacific, with the densest fur of any animal. By eating sea urchins, sea otters protect entire kelp forests — a classic keystone species.',
    mainImage: null,

    length: { min: 1, max: 1.5 },
    weight: { min: 14, max: 45 },
    lifespan: { min: 15, max: 20 },
    threats: ['Pollution', 'Disease', 'Entanglement', 'Small population'],
    distributionShort: 'North Pacific coasts',
    oceans: ['north-pacific'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES II', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II (southern sea otter: Appendix I)', 'US Endangered Species Act — Threatened (southern and south-west Alaska populations)', 'US Marine Mammal Protection Act'],

    about: [
      'Sea otters live along the rocky coasts of the North Pacific, from northern Japan and Russia through the Aleutian Islands and Alaska to California.',
      'They have no blubber. Instead, they rely on extremely dense fur — in the order of 100,000 hairs per square centimetre — and a very high metabolism, eating about a quarter of their body weight every day.',
    ],
    populationStatus: [
      'The fur trade reduced them to perhaps 1,000–2,000 animals in a few isolated colonies by 1911, when hunting was banned. Many populations have since recovered, helped by reintroductions.',
      'The species is listed as Endangered. The south-west Alaska population collapsed in the 1990s, possibly because of killer whale predation, and the southern sea otter of California numbers only around 3,000.',
    ],
    appearance: [
      'Sea otters have thick, brown fur, often paler on the head, webbed hind feet like flippers, and a flattened tail. They spend most of their lives floating on their backs.',
    ],
    behaviourAndDiet: [
      'They dive to the seabed for sea urchins, crabs, clams and abalone, and use rocks as tools to smash shells open on their chests — one of the few mammals besides primates to use tools.',
      'They often wrap themselves in kelp to avoid drifting while they sleep, and may rest in groups called rafts.',
    ],
    lifespanAndReproduction: [
      'Sea otters live for 15–20 years. Females give birth to a single pup, which they carry on their chest for months.',
    ],
    threatsDetail: [
      'Oil spills are deadly because oiled fur loses its insulation: the Exxon Valdez spill in 1989 killed thousands. Disease, including toxoplasmosis from cat faeces washed into the sea, and shark bites are major causes of death in California.',
    ],
    classification: carnivoranClassification({ family: 'Mustelidae', genus: 'Enhydra', species: 'Enhydra lutris' }),
  },
  {
    slug: 'marine-otter',
    commonName: 'Marine otter',
    alternativeNames: ['Chungungo', 'Sea cat', 'Gato marino'],
    scientificName: 'Lontra felina',
    authority: 'Molina, 1782',
    category: 'Otter',
    family: 'Mustelidae',
    summary:
      'The smallest marine mammal in the world, weighing just 3–6 kg. This little otter lives on the wave-battered rocky shores of Peru and Chile.',
    mainImage: null,

    length: { min: 0.85, max: 1.15 },
    weight: { min: 3, max: 6 },
    lifespan: null,
    threats: ['Habitat loss', 'Hunting', 'Pollution', 'Human disturbance'],
    distributionShort: 'Pacific coast of Peru & Chile',
    oceans: ['south-pacific'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I', 'US Endangered Species Act — Endangered'],

    about: [
      'The marine otter lives along the exposed rocky coasts of Peru and Chile, from northern Peru to Cape Horn, rarely venturing more than a few hundred metres from shore.',
      'Unlike the sea otter, it comes ashore regularly to rest, groom and raise its young in rocky caves and crevices.',
    ],
    populationStatus: [
      'It is listed as Endangered. Hunting for its fur, now illegal, greatly reduced its numbers, and it is absent from many stretches of coast.',
    ],
    appearance: [
      'It is small and slender, with coarse, dark brown fur, a pale throat and a long tail. Its length given here includes the tail.',
    ],
    behaviourAndDiet: [
      'It dives for crabs, shrimps, molluscs and fish in the surf zone, and eats its catch on the rocks.',
    ],
    lifespanAndReproduction: [
      'Little is known about its life history. Females give birth to two pups on average, in dens among the rocks.',
    ],
    threatsDetail: [
      'Coastal development, pollution, conflict with fishers, illegal hunting and attacks by dogs are the main threats.',
    ],
    classification: carnivoranClassification({ family: 'Mustelidae', genus: 'Lontra', species: 'Lontra felina' }),
  },
  {
    slug: 'polar-bear',
    commonName: 'Polar bear',
    alternativeNames: ['Nanuq', 'Ice bear'],
    scientificName: 'Ursus maritimus',
    authority: 'Phipps, 1774',
    category: 'Polar bear',
    family: 'Ursidae',
    summary:
      'The largest land carnivore, but classed as a marine mammal because it depends on the sea ice to hunt seals. Its future is tied to the fate of Arctic ice.',
    mainImage: null,

    length: { min: 1.8, max: 3 },
    weight: { min: 150, max: 800 },
    lifespan: { min: 20, max: 30 },
    threats: ['Sea ice loss', 'Climate change', 'Pollution', 'Hunting'],
    distributionShort: 'Arctic sea ice',
    oceans: ['arctic'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES II', 'US Endangered Species Act', 'US Marine Mammal Protection Act'],
    legalProtection: ['CITES — Appendix II', 'Agreement on the Conservation of Polar Bears', 'US Endangered Species Act — Threatened', 'US Marine Mammal Protection Act'],

    about: [
      'Polar bears live around the Arctic Ocean, in Canada, the United States (Alaska), Greenland, Norway (Svalbard) and Russia. They spend most of their lives on the sea ice, hunting seals at breathing holes and the ice edge.',
      'They descend from brown bears, from which they split relatively recently, and the two species can still interbreed.',
    ],
    populationStatus: [
      'There are around 26,000 polar bears in 19 subpopulations. The species is listed as Vulnerable because sea ice loss is expected to cause major declines.',
      'In 1973, the five polar bear countries signed the Agreement on the Conservation of Polar Bears, which ended unregulated hunting.',
    ],
    appearance: [
      'Polar bears are huge, with a long neck, small ears and broad, slightly webbed front paws for swimming. Under their thick, translucent fur, their skin is black.',
      'Males can weigh 800 kg, about twice as much as females.',
    ],
    behaviourAndDiet: [
      'They feed mainly on ringed and bearded seals, eating the energy-rich blubber. They are strong swimmers and have been recorded swimming for days across open water.',
      'Pregnant females dig maternity dens in snow banks, where their tiny cubs — weighing less than a kilogram — are born in mid-winter.',
    ],
    lifespanAndReproduction: [
      'Polar bears can live for 20–30 years. Females usually give birth to twins every three years, and the cubs stay with them for about two and a half years.',
    ],
    threatsDetail: [
      'Sea ice loss is the overwhelming threat: as ice forms later and melts earlier, bears must fast for longer on land, and some populations, such as in western Hudson Bay, have declined.',
      'Pollutants that accumulate in the Arctic food web, conflict with people as bears spend more time on land, and hunting are additional pressures.',
    ],
    classification: carnivoranClassification({ family: 'Ursidae', genus: 'Ursus', species: 'Ursus maritimus' }),
  },
]
