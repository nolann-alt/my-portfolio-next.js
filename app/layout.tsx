import "./globals.css";
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Playfair_Display, Archivo_Black} from 'next/font/google';

export const metadata = {
    title: "Nolann Lescop Portfolio",
    description: "Portfolio of Nolann Lescop",
};

// Configuration de la police Serif
const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic'],
    variable: '--font-playfair',
});

// Configuration de la police Sans-Serif
const archivo = Archivo_Black({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-archivo',
});

export default function RootLayout({
   children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`relative min-h-screen bg-[#0E0E12] text-white antialiased ${playfair.variable} ${archivo.variable}`}>
        <ParticlesBackground/>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
