import styles from "@/ui/styles/contentPage.module.css";
import Identify from "@/ui/components/identify/identify";
import { toCard } from "@/ui/components/species-explorer/options";
import { getAllSpecies } from "@/lib/mock/species";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

export async function generateMetadata() {
    const { identify, meta } = await getDictionary();

    return {
        title: format(identify.metaTitle, { site: meta.title }),
        description: identify.intro,
    };
}

// "What did I see?": narrows the species list down from a few questions
export default async function IdentifyPage() {
    const locale = await getLocale();
    const { identify: t } = await getDictionary();
    const species = getAllSpecies(locale).map((item) => ({ ...toCard(item), bestMonths: item.bestMonths }));

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.title} <span>{t.titleHighlight}</span></h1>
                    <p className={styles.hero__intro}>{t.intro}</p>
                </div>
            </section>

            <section className={styles.block}>
                <div className="innerWrapper">
                    <Identify species={species} />
                </div>
            </section>
        </>
    );
}
