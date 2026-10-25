import { cacheLife, cacheTag } from 'next/cache';
import { defineQuery } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { REGIONS } from '@/ui/components/species-explorer/options';

// Page order, icons and styling for the /links categories. Labels live in the
// dictionaries (links.categories); the links themselves come from Sanity.
const CATEGORIES = [
    { id: 'research', icon: 'lucide:microscope' },
    { id: 'rescue', icon: 'lucide:life-buoy', highlight: true },
    { id: 'guides', icon: 'lucide:binoculars' },
    { id: 'conservation', icon: 'lucide:shield-check' },
    { id: 'learning', icon: 'lucide:graduation-cap' },
];

const RESOURCES_QUERY = defineQuery(`*[_type == "resource" && defined(url)] | order(order asc, title asc){
  "id": _id, title, "href": url, category, region, phone
}`);

async function fetchResources() {
    'use cache';
    cacheTag('resource');
    cacheLife('days');
    return client.fetch(RESOURCES_QUERY);
}

// Categories with their links; empty categories are left out
export async function getLinkCategories() {
    const resources = await fetchResources();
    return CATEGORIES
        .map((category) => ({ ...category, links: resources.filter((resource) => resource.category === category.id) }))
        .filter(({ links }) => links.length > 0);
}

// Rescue networks per region, for /stranding (resources with category "rescue" and a region)
export async function getStrandingRegions() {
    const resources = await fetchResources();
    return REGIONS.map((id) => ({
        id,
        networks: resources.filter((resource) => resource.category === 'rescue' && resource.region === id),
    }));
}
