// Curated resources for the /links page. Entries still marked "To be added" use a dummy "#".
// Link titles aren't translated — they're the resource's own name.
// Swap in real entries (or a Sanity query) once the resources are confirmed.

export const LINK_CATEGORIES = [
    {
        id: 'research',
        icon: 'lucide:microscope',
        links: [
            { id: 'research-1', title: 'The CETUS Project (CIIMAR)', href: 'https://www.vliz.be/en/imis?module=dataset&dasid=6202&ext=1' },
            { id: 'research-2', title: 'AIMM Portugal (Association for Marine Megafauna Research)', href: 'https://aimmportugal.org/about-us/our-work/research/' },
            { id: 'research-3', title: 'Mammals in Portugal Dataset', href: 'https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1002/ecy.3654' },
            { id: 'research-5', title: 'GBIF West Central Portugal Vessel Surveys', href: 'https://www.gbif.org/dataset/c2c49376-3b67-416f-a1c8-60690afaff4a' },
            { id: 'research-6', title: 'OBIS-SEAMAP', href: 'https://seamap.env.duke.edu/dataset/list' },
            { id: 'research-7', title: 'Important Marine Mammal Areas (IMMA)', href: 'https://www.marinemammalhabitat.org/immas/immas-searchable-database/' },
            { id: 'research-8', title: 'Society for Marine Mammalogy Taxonomy Database', href: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/' }
        ],
    },
    {
        id: 'rescue',
        icon: 'lucide:life-buoy',
        highlight: true,
        links: [
            { id: 'rescue-1', title: 'RAAlg - Algarve Stranding Network', href: 'https://www.raalg.pt/en' },
            { id: 'rescue-2', title: 'Strandings Network in the North of Portugal (SPVS)', href: 'http://www.facebook.com/arrojamentos' },
            { id: 'rescue-3', title: 'Porto d’Abrigo (Zoomarine)', href: 'https://www.zoomarine.pt/en/togetherweprotect/rehabilitation-center/' },
            { id: 'rescue-4', title:'IFAW (International Fund for Animal Welfare)', href: 'https://www.ifaw.org/uk/projects/stranded-marine-mammal-rescue-global'},
            { id: 'rescue-5', title:'BDMLR (British Divers Marine Life Rescue)', href: 'https://bdmlr.org.uk/about-bdmlr'},
            { id: 'rescue-6', title:'The Marine Mammal Center', href: 'https://www.marinemammalcenter.org/'},
            { id: 'rescue-7', title:'NOAA National Marine Mammal Stranding Network', href: 'https://www.fisheries.noaa.gov/national/marine-life-distress/national-marine-mammal-stranding-response-network'},
            { id: 'rescue-8', title:'WDC (Whale and Dolphin Conservation)', href: 'https://us.whales.org/whales-dolphins/science/marine-animal-rescue-and-response/'},
            { id: 'rescue-9', title:'MARC (Marine Animal Rescue Coalition)', href: 'https://marineanimalrescuecoalition.org/'},
            { id: 'rescue-10', title:'Global Stranding Network', href: 'https://globalstrandingnetwork.com/'}
        ],
    },
    {
        id: 'guides',
        icon: 'lucide:binoculars',
        links: [
            { id: 'guides-1', title: 'Europe’s Sea Mammals Field Guide (WILDGuides)', href: 'https://www.amazon.co.uk/Europes-Mammals-Including-Madeira-WILDGuides/dp/0691182167' },
            { id: 'guides-2', title: 'NHBS Guide to UK & North Atlantic Marine Mammal Identification', href: 'https://www.nhbs.com/blog/the-nhbs-guide-to-uk-marine-mammal-identification' },
            { id: 'guides-3', title: 'IFAW Complete Marine Mammal Diagnostic Hub', href: 'https://www.ifaw.org/international/journal/what-is-marine-mammal-complete-guide' },
        ],
    },
    {
        id: 'conservation',
        icon: 'lucide:shield-check',
        links: [
            {id: 'conservation-1', title:'AIMM Portugal', href: 'https://aimmportugal.org/about-us/our-work/conservation/?srsltid=AU7gw4U6sqHcdHSKfVVVYff60tVq7eyv6k-_arGuxesn33gXE-AioEF0'},
            { id: 'conservation-2', title: 'Oceana', href: 'https://oceana.org/marine-mammals/' },
            { id: 'conservation-3', title: 'Sea Shepherd Global', href: 'https://www.seashepherdglobal.org/' },
            { id: 'conservation-4', title: 'European Cetacean Society (ECS)', href: 'https://www.europeancetaceansociety.eu' },
            { id: 'conservation-5', title: 'Dolphin Project', href: 'https://www.themarinediaries.com/' },
            { id: 'conservation-6', title: 'Hebridean Whale and Dolphin Trust (HWDT)', href: 'https://www.hwdt.org' },
            { id: 'conservation-7', title: 'Cetacean Research & Rescue Unit (CRRU)', href: 'https://crru.org.uk' },
            { id: 'conservation-8', title: 'Marine Mammal Observer Association (MMOA)', href: 'https://mmo-association.org' },
        ],
    },
    {
        id: 'learning',
        icon: 'lucide:graduation-cap',
        links: [
            { id: 'learning-1', title: 'To be added ...', href: '#' },
            { id: 'learning-2', title: 'To be added ...', href: '#' },
            { id: 'learning-3', title: 'To be added ...', href: '#' },
        ],
    },
];
