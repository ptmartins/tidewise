import { cetaceanClassification } from './_shared'

const riverDolphin = (family, genus, species) =>
  cetaceanClassification({ parvorder: 'Odontoceti', family, genus, species })

// Four families of toothed whales that live in rivers and estuaries. They are
// not each other's closest relatives: their similar looks are convergent.
export const riverDolphins = [
  {
    slug: 'amazon-river-dolphin',
    commonName: 'Amazon river dolphin',
    alternativeNames: ['Boto', 'Pink river dolphin', 'Bufeo'],
    scientificName: 'Inia geoffrensis',
    authority: 'Blainville, 1817',
    category: 'River dolphin',
    family: 'Iniidae',
    summary:
      'The largest river dolphin and the famous “pink dolphin” of the Amazon. Its flexible neck and broad flippers let it swim among the trunks of the flooded forest in search of fish.',
    mainImage: null,

    length: { min: 2, max: 2.7 },
    weight: { min: 100, max: 200 },
    lifespan: { min: 30, max: 35 },
    threats: ['Bycatch', 'Hunting', 'Habitat loss', 'Pollution', 'Climate change'],
    distributionShort: 'Amazon & Orinoco basins',
    oceans: ['freshwater'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The Amazon river dolphin, or boto, lives throughout the Amazon and Orinoco river systems in Brazil, Peru, Colombia, Ecuador, Bolivia and Venezuela. During the rainy season it swims far into the flooded forest.',
      'Unlike ocean dolphins, its neck vertebrae are not fused, so it can turn its head sharply to manoeuvre between roots and branches. In Amazonian folklore, the boto can take human form and come ashore at night.',
    ],
    populationStatus: [
      'It is listed as Endangered. Long-term monitoring at the Mamirauá Reserve in Brazil showed that numbers there were halving roughly every decade, largely because dolphins were killed for bait.',
      'In 2023, a severe drought and extreme water temperatures killed more than 200 river dolphins in Lake Tefé in the Brazilian Amazon within a few weeks.',
    ],
    appearance: [
      'Adults range from grey to bright pink — males are usually pinker, partly because of scarring from fights. They have a long, slender beak with stiff hairs, a bulging forehead and a low ridge instead of a dorsal fin.',
      'Males can be up to 50% heavier than females, an unusual degree of sexual dimorphism in a toothed whale.',
    ],
    behaviourAndDiet: [
      'They feed on more than 50 species of fish, as well as crabs and turtles, using echolocation in the murky water. They have both pointed front teeth and molar-like back teeth for crushing.',
      'Males sometimes carry sticks, weeds or lumps of clay in their mouths, a display that may help attract females.',
    ],
    lifespanAndReproduction: [
      'They live for about 30 years. Females give birth every three to five years, after a gestation of about 11 months, timed with high water.',
    ],
    threatsDetail: [
      'Dolphins are killed illegally for use as bait in the piracatinga catfish fishery and are caught in gillnets. Dams fragment populations, and mercury from gold mining pollutes rivers.',
      'Climate change is bringing more extreme droughts and heatwaves to the Amazon, with deadly consequences for dolphins trapped in shrinking, overheated lakes.',
    ],
    classification: riverDolphin('Iniidae', 'Inia', 'Inia geoffrensis'),
  },
  {
    slug: 'baiji',
    commonName: 'Baiji',
    alternativeNames: ['Yangtze river dolphin', 'Chinese river dolphin'],
    scientificName: 'Lipotes vexillifer',
    authority: 'Miller, 1918',
    category: 'River dolphin',
    family: 'Lipotidae',
    summary:
      'The “goddess of the Yangtze”. No baiji was found in an intensive survey in 2006, and it is feared to be the first cetacean driven to extinction by people.',
    mainImage: null,

    length: { min: 1.4, max: 2.5 },
    weight: { min: 42, max: 167 },
    lifespan: null,
    threats: ['Bycatch', 'Habitat loss', 'Pollution', 'Small population'],
    distributionShort: 'Yangtze River (possibly extinct)',
    oceans: ['freshwater'],

    iucnStatus: 'CR',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'US Endangered Species Act — Endangered'],

    about: [
      'The baiji lived only in the middle and lower Yangtze River in China. It was the only member of its family, which separated from other dolphins more than 20 million years ago.',
      'In Chinese tradition it was revered as the reincarnation of a drowned princess and called the “goddess of the Yangtze”.',
    ],
    populationStatus: [
      'In the 1950s there were perhaps several thousand baiji. By 1980 there were around 400, and by the late 1990s only a handful.',
      'An intensive six-week survey in 2006 failed to find a single animal, and the species was declared functionally extinct. It is listed as Critically Endangered (Possibly Extinct), as a few unconfirmed sightings have been reported since.',
    ],
    appearance: [
      'The baiji was pale blue-grey above and white below, with a long, narrow, slightly upturned beak, a low, triangular dorsal fin and tiny eyes.',
    ],
    behaviourAndDiet: [
      'It fed on a variety of freshwater fish, relying on echolocation in the muddy river. It usually lived in small groups.',
    ],
    lifespanAndReproduction: [
      'It is thought to have lived for about 20–25 years. Calves were born in spring after a gestation of about 10–11 months.',
    ],
    threatsDetail: [
      'The baiji was destroyed by the industrialisation of the Yangtze: bycatch in fishing gear, especially “rolling hooks” and electrofishing, collisions with boats, dams, sand dredging and pollution.',
      'Its loss is a warning for the Yangtze finless porpoise, which shares the same river and remains Critically Endangered.',
    ],
    classification: riverDolphin('Lipotidae', 'Lipotes', 'Lipotes vexillifer'),
  },
  {
    slug: 'ganges-river-dolphin',
    commonName: 'Ganges river dolphin',
    alternativeNames: ['South Asian river dolphin', 'Susu', 'Shushuk'],
    scientificName: 'Platanista gangetica',
    authority: 'Lebeck, 1801',
    category: 'River dolphin',
    family: 'Platanistidae',
    summary:
      'A nearly blind river dolphin of India, Nepal and Bangladesh that “sees” with sound and often swims on its side. It is India’s national aquatic animal.',
    mainImage: null,

    length: { min: 2, max: 2.6 },
    weight: { min: 70, max: 90 },
    lifespan: { min: 25, max: 30 },
    threats: ['Bycatch', 'Habitat loss', 'Pollution', 'Small population'],
    distributionShort: 'Ganges, Brahmaputra & Karnaphuli rivers',
    oceans: ['freshwater'],

    iucnStatus: 'EN',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I & II', 'US Endangered Species Act — Endangered'],

    about: [
      'The Ganges river dolphin lives in the Ganges–Brahmaputra–Meghna and Karnaphuli–Sangu river systems of India, Bangladesh and Nepal, mostly in deep pools and where rivers meet.',
      'Its eyes have no lens and can probably only sense light and its direction. It relies on echolocation and often swims on its side, trailing a flipper along the riverbed.',
    ],
    populationStatus: [
      'There are a few thousand left, and the species is listed as Endangered. Its range has shrunk considerably over the last century.',
      'In 2021, scientists confirmed that the Ganges and Indus river dolphins are separate species, each with its own conservation needs.',
    ],
    appearance: [
      'It is grey-brown, with a long, thin beak filled with sharp, interlocking teeth that are visible even when the mouth is closed. It has broad, paddle-like flippers and a low, triangular hump instead of a dorsal fin.',
      'Females are larger than males and have longer beaks.',
    ],
    behaviourAndDiet: [
      'It feeds on fish and shrimp, using a continuous stream of echolocation clicks. Its local name, “susu”, imitates the sound it makes when breathing.',
    ],
    lifespanAndReproduction: [
      'It lives for up to about 30 years. Calves are born after a gestation of about 9–11 months.',
    ],
    threatsDetail: [
      'Dams and barrages split populations and alter river flow. Bycatch in gillnets, killing for oil used as fish bait, pollution and boat traffic add to the pressure.',
    ],
    classification: riverDolphin('Platanistidae', 'Platanista', 'Platanista gangetica'),
  },
  {
    slug: 'indus-river-dolphin',
    commonName: 'Indus river dolphin',
    alternativeNames: ['Bhulan'],
    scientificName: 'Platanista minor',
    authority: 'Owen, 1853',
    category: 'River dolphin',
    family: 'Platanistidae',
    summary:
      'A nearly blind river dolphin found almost entirely in Pakistan’s Indus River. Protection has helped it slowly increase, a rare success story among river dolphins.',
    mainImage: null,

    length: { min: 2, max: 2.5 },
    weight: { min: 70, max: 90 },
    lifespan: { min: 25, max: 30 },
    threats: ['Habitat loss', 'Bycatch', 'Pollution', 'Small population'],
    distributionShort: 'Indus River',
    oceans: ['freshwater'],

    iucnStatus: 'EN',
    populationTrend: 'increasing',
    protectedUnder: ['CITES I', 'Bonn Convention', 'US Endangered Species Act'],
    legalProtection: ['CITES — Appendix I', 'Bonn Convention (CMS) — Appendix I & II', 'US Endangered Species Act — Endangered'],

    about: [
      'The Indus river dolphin lives in the Indus River in Pakistan, with a tiny population in the Beas River in India. It was recognised as a separate species from the Ganges river dolphin in 2021.',
      'Irrigation barrages built across the river since the 1930s have split it into isolated sections, and it has disappeared from most of its former range.',
    ],
    populationStatus: [
      'Surveys show numbers rising from around 1,200 in 2001 to around 2,000 today, thanks to protection in Pakistan. It is still listed as Endangered.',
    ],
    appearance: [
      'It looks almost identical to the Ganges river dolphin: grey-brown, with a long, toothy beak, tiny eyes and broad flippers.',
    ],
    behaviourAndDiet: [
      'It feeds on fish and shrimp using echolocation, often swimming on its side.',
    ],
    lifespanAndReproduction: [
      'It is thought to live for up to about 30 years. Little else is known about its reproduction.',
    ],
    threatsDetail: [
      'Barrages and water extraction for irrigation have left long stretches of the river with too little water. Dolphins regularly get stranded in irrigation canals and must be rescued.',
      'Pollution and bycatch in fishing nets are additional threats.',
    ],
    classification: riverDolphin('Platanistidae', 'Platanista', 'Platanista minor'),
  },
  {
    slug: 'franciscana',
    commonName: 'Franciscana',
    alternativeNames: ['La Plata dolphin', 'Toninha'],
    scientificName: 'Pontoporia blainvillei',
    authority: 'Gervais & d’Orbigny, 1844',
    category: 'River dolphin',
    family: 'Pontoporiidae',
    summary:
      'A tiny dolphin with the longest beak, relative to its body, of any dolphin. Despite being grouped with the river dolphins, it lives in coastal seas off Brazil, Uruguay and Argentina.',
    mainImage: null,

    length: { min: 1.3, max: 1.7 },
    weight: { min: 25, max: 50 },
    lifespan: { min: 15, max: 20 },
    threats: ['Bycatch', 'Pollution', 'Habitat loss'],
    distributionShort: 'Coastal Brazil, Uruguay & Argentina',
    oceans: ['south-atlantic'],

    iucnStatus: 'VU',
    populationTrend: 'decreasing',
    protectedUnder: ['CITES II', 'Bonn Convention'],
    legalProtection: ['CITES — Appendix II', 'Bonn Convention (CMS) — Appendix II'],

    about: [
      'The franciscana lives in shallow, murky coastal waters of the western South Atlantic, from Espírito Santo in Brazil to northern Patagonia in Argentina, including the Río de la Plata estuary.',
      'It is the only “river dolphin” that lives mainly in the sea. Its name may come from its brownish colour, reminiscent of the habits of Franciscan friars.',
    ],
    populationStatus: [
      'It is listed as Vulnerable. Thousands die every year in gillnets, and several local populations are declining.',
    ],
    appearance: [
      'It is small and brownish-grey, with a very long, narrow beak — up to 15% of its body length — lined with more than 200 small teeth, and broad, rounded flippers.',
    ],
    behaviourAndDiet: [
      'It feeds on small fish, squid and shrimp near the seabed, usually alone or in small groups. It is shy and rarely seen.',
    ],
    lifespanAndReproduction: [
      'It lives fast for a cetacean: females mature at 2–3 years and can give birth every one to two years, but few live beyond 20.',
    ],
    threatsDetail: [
      'Bycatch in coastal gillnets is by far the main threat. Pollution and coastal development add to the pressure.',
    ],
    classification: riverDolphin('Pontoporiidae', 'Pontoporia', 'Pontoporia blainvillei'),
  },
]
