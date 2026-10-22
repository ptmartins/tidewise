import styles from "@/ui/styles/contentPage.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SpeciesExplorer from "@/ui/components/species-explorer/speciesExplorer";
import { toCard } from "@/ui/components/species-explorer/options";
import { getAllSpecies } from "@/lib/mock/species";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

export async function generateMetadata() {
    const { speciesIndex, meta } = await getDictionary();

    return {
        title: format(speciesIndex.metaTitle, { site: meta.title }),
        description: speciesIndex.intro,
    };
}

export default async function SpeciesIndex() {
    const locale = await getLocale();
    const { speciesIndex: t } = await getDictionary();
    const species = getAllSpecies(locale);

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title} <span>{t.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{format(t.intro, { count: species.length })}</p>
                    <p className={styles.notice}>
                        <Link href={`/${locale}/identify`} className={styles.link}>
                            <Icon icon="lucide:scan-search" width="18" height="18" />
                            {t.identify}
                        </Link>
                    </p>
                </div>
            </section>

            <section className={styles.block}>
                <div className="innerWrapper">
                    <SpeciesExplorer species={species.map(toCard)} />
                </div>
            </section>
        </>
    );
}
