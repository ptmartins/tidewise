import { cacheLife, cacheTag } from 'next/cache';
import { defineQuery } from 'next-sanity';
import { client } from '../../../sanity/lib/client';

export const PARTNER_TIERS = ['scientific', 'funder', 'supporter'];

// Current partners only: no end date, or one that hasn't passed
const PARTNERS_QUERY = defineQuery(`*[_type == "partner" && defined(logo.asset) && (!defined(end) || end >= now())] | order(name asc){
  "id": _id,
  name,
  "href": url,
  tier,
  "placements": coalesce(placements, []),
  "logo": logo{ "src": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }
}`);

async function fetchPartners() {
    'use cache';
    cacheTag('partner');
    cacheLife('days');
    return client.fetch(PARTNERS_QUERY);
}

// Partners shown in one spot: "footer" or "about" (see the sponsorship policy)
export async function getPartners(placement) {
    return (await fetchPartners()).filter(({ placements }) => placements.includes(placement));
}
