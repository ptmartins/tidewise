// Region-level views of the species data for the /where pages.

import { getAllSpecies } from '@/lib/mock/species';
import { REGIONS, SIGHTINGS, toCard, toRegion } from '@/ui/components/species-explorer/options';

export const isRegion = (id) => REGIONS.includes(id);

// Species recorded in a region, commonest first
export function getRegionSpecies(region, locale) {
    return getAllSpecies(locale)
        .filter((species) => toCard(species).regions.includes(region))
        .sort((a, b) => SIGHTINGS.indexOf(a.sightingFrequency) - SIGHTINGS.indexOf(b.sightingFrequency));
}

// Named places within a region ("Sado estuary", "Lisbon coast"…) and how many
// species are recorded at each, busiest first
export function getHotspots(species, region) {
    const counts = new Map();
    for (const { regionsInPortugal = [] } of species) {
        for (const place of regionsInPortugal) {
            if (toRegion(place) === region) counts.set(place, (counts.get(place) ?? 0) + 1);
        }
    }
    return [...counts].map(([place, count]) => ({ place, count })).sort((a, b) => b.count - a.count);
}
