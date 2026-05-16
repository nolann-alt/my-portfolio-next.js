/**
 * Layout principal
 * @description Configuration globale: polices Google (Pinyon Script, Bebas Neue, Bodoni), Navbar, Footer
 * @layout
 */

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pinyon_Script, Bebas_Neue, Bodoni_Moda } from 'next/font/google';
import "./globals.css";

export const metadata = {
    title: "Nolann Lescop Portfolio",
    description: "Portfolio of Nolann Lescop",
};

// Police Script pour les titres élégants
const pinyon = Pinyon_Script({ weight: '400', subsets: ['latin'], variable: '--font-script' });

// Police Sans-Serif condensée pour les gros titres
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-sans' });

// Police Serif pour les citations
const bodoni = Bodoni_Moda({ subsets: ['latin'], weight: ['800'], variable: '--font-bodoni' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`relative min-h-screen bg-[#f4f4f3] text-[#1f1d1f] antialiased ${pinyon.variable} ${bebas.variable} ${bodoni.variable}`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}