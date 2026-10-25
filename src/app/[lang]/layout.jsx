import { Suspense } from "react";
import { playfair, inter } from "@/ui/fonts/fonts";
import "./globals.css";
import Header from "@/ui/components/header/header";
import Footer from "@/ui/components/footer/footer";
import { LOCALES, LOCALE_DETAILS } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { I18nProvider } from "@/i18n/I18nProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { enGB } from "@clerk/localizations/en-GB";
import { ptPT } from "@clerk/localizations/pt-PT";
import { frFR } from "@clerk/localizations/fr-FR";
import { clerkAppearance } from "@/lib/clerkAppearance";

// Clerk's sign-in, sign-up and account screens follow the site language
const CLERK_LOCALIZATIONS = { en: enGB, pt: ptPT, fr: frFR };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata() {
  const { meta } = await getDictionary();

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <html lang={LOCALE_DETAILS[locale].htmlLang} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ClerkProvider
          localization={CLERK_LOCALIZATIONS[locale]}
          appearance={clerkAppearance}
          signInUrl={`/${locale}/sign-in`}
          signUpUrl={`/${locale}/sign-up`}
          afterSignOutUrl={`/${locale}`}
        >
          <I18nProvider locale={locale} dict={dict}>
            <Suspense>
              <Header />
            </Suspense>
            <main className="main" style={{ marginBlockStart: "var(--header-full-height)" }}>
              {children}
            </main>
            <Footer />
          </I18nProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
