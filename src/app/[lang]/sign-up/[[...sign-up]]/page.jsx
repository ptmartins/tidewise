import styles from "@/ui/styles/contentPage.module.css";
import { Suspense } from "react";
import { SignUp } from "@clerk/nextjs";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

// Clerk's hosted registration flow (incl. email verification) at /[lang]/sign-up

export async function generateMetadata() {
    const { auth, meta } = await getDictionary();

    return {
        title: format(auth.signUpMetaTitle, { site: meta.title }),
        robots: { index: false },
    };
}

export default async function SignUpPage() {
    const locale = await getLocale();
    const { auth: t } = await getDictionary();

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.signUpTitle}</h1>
                    <p className={styles.hero__intro}>{t.intro}</p>
                </div>
            </section>

            <section className={styles.block}>
                <div className={`innerWrapper ${styles.auth}`}>
                    {/* The widget reads the URL, so it streams in after the prerendered shell */}
                    <Suspense>
                        <SignUp path={`/${locale}/sign-up`} signInUrl={`/${locale}/sign-in`} fallbackRedirectUrl={`/${locale}/report`} />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
