import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
    title: "Nolann Lescop Portfolio",
    description: "Portfolio of Nolann Lescop",
};

export default function RootLayout({
   children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="relative min-h-screen bg-[#0E0E12] text-white">
        <ParticlesBackground/>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
