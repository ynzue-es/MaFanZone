import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://mafanzone.fr";
const TITLE = "MaFanZone — Location d’écrans géants LED pour fan zones";
const DESCRIPTION =
  "Location d’écrans géants LED clé en main pour associations, clubs de sport et comités des fêtes. Réunissez vos supporters devant les grands matchs. Devis gratuit dans l’Ain, le Rhône, le Jura et le Bugey.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · MaFanZone",
  },
  description: DESCRIPTION,
  applicationName: "MaFanZone",
  keywords: [
    "écran géant LED",
    "location écran géant",
    "fan zone",
    "diffusion match",
    "écran géant événement",
    "club de sport",
    "comité des fêtes",
    "association",
    "Ain",
    "Rhône",
    "Jura",
    "Bugey",
  ],
  authors: [{ name: "MaFanZone" }],
  creator: "MaFanZone",
  publisher: "MaFanZone",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "MaFanZone",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  // Vérification Google Search Console : faite via l'enregistrement DNS TXT
  // (côté registrar), donc pas de balise meta nécessaire ici.
};

// Données structurées : aide Google à associer le logo et les infos à la marque.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MaFanZone",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  email: "yannis.nzuepro@gmail.com",
  areaServed: ["Ain", "Rhône", "Jura", "Bugey"],
  slogan: "Faites vivre les grands matchs à vos supporters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${bricolage.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
