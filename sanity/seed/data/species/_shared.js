// Shared helpers for the mock species data.

export const IUCN_LABELS = {
  NE: 'Not Evaluated',
  DD: 'Data Deficient',
  LC: 'Least Concern',
  NT: 'Near Threatened',
  VU: 'Vulnerable',
  EN: 'Endangered',
  CR: 'Critically Endangered',
  EW: 'Extinct in the Wild',
  EX: 'Extinct',
}

// Illustrations from NOAA Fisheries species pages (US government work, public domain),
// converted to transparent PNGs on an 800×534 canvas.
export const noaaImage = (slug, alt) => ({
  src: `/species/${slug}.png`,
  width: 800,
  height: 534,
  alt,
  credit: 'Illustration: NOAA Fisheries',
})

export const cetaceanClassification = ({ parvorder, family, genus, species }) => [
  { rank: 'Kingdom', name: 'Animalia' },
  { rank: 'Phylum', name: 'Chordata' },
  { rank: 'Class', name: 'Mammalia' },
  { rank: 'Order', name: 'Artiodactyla' },
  { rank: 'Infraorder', name: 'Cetacea' },
  { rank: 'Parvorder', name: parvorder },
  { rank: 'Family', name: family },
  { rank: 'Genus', name: genus, italic: true },
  { rank: 'Species', name: species, italic: true },
]

export const sirenianClassification = ({ family, genus, species }) => [
  { rank: 'Kingdom', name: 'Animalia' },
  { rank: 'Phylum', name: 'Chordata' },
  { rank: 'Class', name: 'Mammalia' },
  { rank: 'Order', name: 'Sirenia' },
  { rank: 'Family', name: family },
  { rank: 'Genus', name: genus, italic: true },
  { rank: 'Species', name: species, italic: true },
]

// Otters and the polar bear: carnivorans outside the pinnipeds
export const carnivoranClassification = ({ family, genus, species }) => [
  { rank: 'Kingdom', name: 'Animalia' },
  { rank: 'Phylum', name: 'Chordata' },
  { rank: 'Class', name: 'Mammalia' },
  { rank: 'Order', name: 'Carnivora' },
  { rank: 'Family', name: family },
  { rank: 'Genus', name: genus, italic: true },
  { rank: 'Species', name: species, italic: true },
]

export const pinnipedClassification = ({ family, genus, species }) => [
  { rank: 'Kingdom', name: 'Animalia' },
  { rank: 'Phylum', name: 'Chordata' },
  { rank: 'Class', name: 'Mammalia' },
  { rank: 'Order', name: 'Carnivora' },
  { rank: 'Clade', name: 'Pinnipedia' },
  { rank: 'Family', name: family },
  { rank: 'Genus', name: genus, italic: true },
  { rank: 'Species', name: species, italic: true },
]
