import { playfair, inter } from "@/ui/fonts/fonts";
import "./globals.css";
import Header from "@/ui/components/header/header";
import Footer from "@/ui/components/footer/footer";

export const metadata = {
  title: "Tidewise",
  description: "A simple app to grow your knowledge of marine mammal species in Portuguse waters, report sightings and strandings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
