import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionProvider } from "@/context/SectionContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Paulforbe",
    default: "Paulforbe - Gestion de Patrimoine",
  },
  description: "Cabinet de gestion de patrimoine d'excellence. Stratégie patrimoniale, investissement immobilier, placements financiers et optimisation fiscale.",
  keywords: ["Paul Forbe", "Paulforbe", "Gestion de patrimoine", "Conseiller en gestion de patrimoine", "Investissement immobilier", "Courtier crédit", "Défiscalisation", "SCPI", "Assurance vie", "Paris"],

  openGraph: {
    title: "Paulforbe - Gestion de Patrimoine",
    description: "Cabinet de gestion de patrimoine d'excellence valant conseil en investissement financier, immobilier et optimisation fiscale.",
    url: "https://paulforbe.com",
    siteName: "Paulforbe",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${greatVibes.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <SectionProvider>
            <Navbar />
            <main className="flex-grow pt-20">
            {children}
            </main>
            <Footer />
        </SectionProvider>
      </body>
    </html>
  );
}
