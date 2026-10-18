import InfoCard from "@/ui/components/info-card/infoCard";

function Learn() {
    return(
        <section className="section section--learn">
            <div className="innerWrapper">
                <h1>Learn from the ocean</h1>
                <p>Explore how marine mammals evolved, thrive in connected <br /> ecosystems, and navigate a changing ocean.</p>

                <InfoCard number="01" icon="lucide:waves" title="Return to the sea" description="From otter to whale, discover the remarkable evolutionaty story of marine mammals" />
            </div>
        </section>
    )
}

export default Learn;