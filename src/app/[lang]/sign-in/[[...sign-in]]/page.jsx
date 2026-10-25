import styles from "@/ui/styles/contentPage.module.css";
import { Suspense } from "react";
import { SignIn } from "@clerk/nextjs";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { format } from "@/i18n/format";

// Clerk's hosted sign-in flow (email code, password reset, social logins)
// mounted at /[lang]/sign-in; the catch-all keeps its sub-steps on this route.

export async function generateMetadata() {
    const { auth, meta } = await getDictionary();

    return {
        title: format(auth.signInMetaTitle, { site: meta.title }),
        robots: { index: false },
    };
}

export default async function SignInPage() {
    const locale = await getLocale();
    const { auth: t } = await getDictionary();

    return (
        <>
            <section className={styles.hero}>
                <div className="innerWrapper">
                    <span className={styles.tag}>{t.tag}</span>
                    <h1>{t.signInTitle}</h1>
                    <p className={styles.hero__intro}>{t.intro}</p>
                </div>
            </section>

            <section className={styles.block}>
                <div className={`innerWrapper ${styles.auth}`}>
                    {/* The widget reads the URL, so it streams in after the prerendered shell */}
                    <Suspense>
                        <SignIn path={`/${locale}/sign-in`} signUpUrl={`/${locale}/sign-up`} fallbackRedirectUrl={`/${locale}/report`} />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
