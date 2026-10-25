import { cacheLife, cacheTag } from 'next/cache';
import { defineQuery } from 'next-sanity';
import { readClient } from '../../../sanity/lib/readClient';
import { getAllSpecies } from './species';

// Verified reports only, and only public fields: never email or consent data
const REPORTS_QUERY = defineQuery(`*[_type == "report" && status == "verified"] | order(date desc){
  "id": _id,
  type,
  "speciesSlug": coalesce(species->slug.current, speciesSlug),
  date,
  location,
  "position": position{ lat, lng },
  region,
  count,
  calves,
  "behaviour": coalesce(behaviour, []),
  platform,
  condition,
  status,
  observer,
  notes
}`);

async function fetchReports() {
    'use cache';
    cacheTag('report');
    cacheLife('hours');
    // Reports are private documents; without a read token there's nothing to show
    if (!readClient) return [];
    return readClient.fetch(REPORTS_QUERY);
}

// Reports joined with the species they refer to, newest first. Reports whose
// species is unknown stay in Studio until a moderator sets the species.
export async function getReports(locale) {
    const [reports, species] = await Promise.all([fetchReports(), getAllSpecies(locale)]);
    const bySlug = new Map(species.map((item) => [item.slug, item]));

    return reports
        .map((report) => {
            const item = bySlug.get(report.speciesSlug);
            return {
                ...report,
                species: item && {
                    slug: item.slug,
                    commonName: item.commonName,
                    scientificName: item.scientificName,
                    category: item.category,
                    thumbnail: item.thumbnail,
                },
            };
        })
        .filter(({ species: item }) => item);
}
