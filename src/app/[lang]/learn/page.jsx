import InfoCard from "@/ui/components/info-card/infoCard";
import { getDictionary } from "@/i18n/getDictionary";

async function Learn() {
    const { learn } = await getDictionary();

    return(
        <section className="section section--learn">
            <div className="innerWrapper">
                <h1>{learn.title}</h1>
                <p>{learn.introLine1} <br /> {learn.introLine2}</p>

                <InfoCard number="01" icon="lucide:waves" title={learn.returnTitle} description={learn.returnDescription} />
            </div>
        </section>
    )
}

export default Learn;
