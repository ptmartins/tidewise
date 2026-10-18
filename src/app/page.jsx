import styles  from "./page.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
    return (

        <>  
            {/* Hero section */}
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <div className={styles.hero__content}>
                        <Image src="/hero.png"
                            alt="A whale breaching the ocean surface"
                            width={1408}
                            height={768}
                            className={styles.hero__image}
                        /> 
                        <div className={styles.hero__text}>
                            <span className={styles.tag}>Explore the ocean</span>
                            <h1 className={styles.hero__title}>Meet the life <br /> <span>of our Atlantic coast</span> </h1>
                            <p className={styles.hero__subtitle}>Learn about the species that inhabit our waters, report sightings and strandings, and contribute to conservation efforts.</p>
                            <button className={`btn ${styles.btn__hero}`}>Explore species <Icon icon="lucide:arrow-right" /> </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge section */}
            <section className={`section ${styles.knowledge}`}>
                <div className={`innerWrapper ${styles.innerWrapper}`}>
                    <div className={styles.knowledge__content}>
                        <span className={styles.tag}>Go deeper</span>
                        <h1> Knowledge is <span>conservation</span> </h1>
                        <p>Understand the extraordinary adaptations, ancient lineages and fragile ecosystems that shape marine mammal life.</p>
                        <button className="btn">Browse field notes</button>
                    </div>
                    <div className={styles.knowledge__cta}>
                        <div className={styles.knowledge__card}>
                            <div className={styles.card__number}>01</div>
                            <div className={styles.card__icon}> 
                                <Icon icon="lucide:waves" width="32" height="32" />
                            </div>
                            <h3 className={styles.card__title}>Return to the sea</h3>
                            <p className={styles.card__description}>How land mammals returned to the sea and made it their home.</p>
                        </div>
                        <div className={styles.knowledge__card}>
                            <div className={styles.card__number}>02</div>
                            <div className={styles.card__icon}> 
                                <Icon icon="lucide:earth" width="32" height="32" />
                            </div>
                            <h3 className={styles.card__title}>Ocean connections</h3>
                            <p className={styles.card__description}>The invisible connections that keep marine ecosystems thriving.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help section */}
            <section className={`section ${styles.help}`}>
                <div className={`innerWrapper ${styles.innerWrapper}`}>
                    <div className={styles.help__content}>
                        <span className={styles.tag}>you can help</span>
                        <h1> Be eyes for the ocean </h1>
                        <p>Every observation adds to our shared understanding. Report what you see, from a breaching whale to a seal on the shore.</p>
                    </div>
                    <div className={styles.help__cta}>
                        <button className="btn btn--secondary">
                            <Icon icon="lucide:binoculars" width="24" height="24" />
                            Report a sighting
                            <Icon icon="lucide:chevron-right" width="24" height="24" />
                        </button>
                        <button className="btn">
                            <Icon icon="lucide:shield-alert" width="24" height="24" />
                            Report a stranding
                            <Icon icon="lucide:chevron-right" width="24" height="24" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
