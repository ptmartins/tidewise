import Link from "next/link";
import { Icon } from "@iconify/react";
import { getDictionary, getLocale } from "@/i18n/getDictionary";

// The site-wide pair of calls to action: report a sighting (primary) and get
// help with a stranding. Renders bare links so each page keeps its own wrapper.
async function ReportActions() {
    const locale = await getLocale();
    const { common } = await getDictionary();

    return (
        <>
            <Link href={`/${locale}/report`} className="btn btn--secondary">
                <Icon icon="lucide:binoculars" width="24" height="24" />
                {common.reportSighting}
                <Icon icon="lucide:chevron-right" width="24" height="24" />
            </Link>
            <Link href={`/${locale}/stranding`} className="btn">
                <Icon icon="lucide:shield-alert" width="24" height="24" />
                {common.reportStranding}
                <Icon icon="lucide:chevron-right" width="24" height="24" />
            </Link>
        </>
    );
}

export default ReportActions;
