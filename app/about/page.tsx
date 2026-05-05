// app/about/page.tsx
"use client"
import { Navbar } from "@/components/Navbar"; // Ajuste le chemin selon ton projet

export default function AboutPage() {
    return (
        <main className="relative overflow-hidden">
            {/* On réaffiche la Navbar pour pouvoir revenir en arrière */}
            <Navbar />

            <section className="flex flex-col items-center justify-center min-h-screen p-5 w-full mt-52">
                {/* Conteneur principal avec largeur max pour les grands écrans */}
                <div className="w-full max-w-[1400px] flex flex-col items-center">

                    {/* Conteneur des titres avec alignement précis */}
                    <div className="flex justify-between items-end w-full z-10">

                        {/* "About" en serif italique */}
                        <h1 className="font-serif italic text-5xl md:text-9xl text-white  tracking-tight">
                            About
                        </h1>

                        {/* "ME" en sans-serif très grand */}
                        <h1 className="font-sans text-8xl md:text-[18rem] text-white leading-[0.75] uppercase">
                            ME
                        </h1>
                    </div>

                    {/* Image pleine largeur avec bordure blanche en bas */}
                    <div className="w-full border-b border-white">
                        <img
                            src="/velo/course_velo.jpg"
                            className="w-full h-[300px] md:h-[600px] object-cover"
                            alt="About me section"
                        />
                    </div>

                    {/* Décoration avec deux petits cercles blancs */}
                    <div className="w-full flex justify-between mt-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center min-h-screen p-5 w-full mt-40">

                {/* Conteneur principal avec largeur max pour les grands écrans */}
                <div className="w-full max-w-[1400px] flex flex-col items-center">
                    {/* Conteneur des titres avec alignement précis */}
                    <div className="flex justify-between items-end w-full z-10">

                        {/* "MY" en sans-serif très grand */}
                        <h1 className="font-sans text-8xl md:text-[18rem] text-white leading-[0.75] uppercase">
                            MY
                        </h1>

                        {/* "Background" en serif italique */}
                        <h1 className="font-serif italic text-5xl md:text-9xl text-white  tracking-tight">
                            Background
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-3">
                        <div className="">
                            <div className="grid grid-cols-2 grid-rows-1">
                                <h1>col</h1>
                                <h1>col</h1>
                            </div>
                        </div>

                        <div className="border-t-1 border-dashed border-white">
                            <div className="grid grid-cols-2 grid-rows-1">
                                <h1>col</h1>
                                <h1>col</h1>
                            </div>
                        </div>

                        <div className="">
                            <div className="grid grid-cols-2 grid-rows-1">
                                <h1>col</h1>
                                <h1>col</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    );
}