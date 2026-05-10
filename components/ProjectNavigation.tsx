/**
 * ProjectNavigation - Navigation de bas de page pour naviguer entre projets
 *
 * Contient: Next/Previous project avec image centrale cliquable
 * Style: Minimaliste avec points dans les angles
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BASE_PATH = "/my-portfolio-next.js";

interface ProjectNavigationProps {
    nextProject: { slug: string; title: string; image: string } | null;
    previousProject: { slug: string; title: string; image: string } | null;
}

/**
 * Composant principal de navigation entre projets
 * @param {ProjectNavigationProps} nextProject - Projet suivant (slug, title, image)
 * @param {ProjectNavigationProps} previousProject - Projet précédent (slug, title, image)
 */
export default function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
    return (
        <div className="min-h-screen bg-[#f4f5f0] grid grid-rows-[auto_1fr_auto]">
            {/* =========================================
                LIGNE DU HAUT - Points
                ========================================= */}
            <div className="flex justify-between items-center px-4 mt-4 md:mt-8">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"></div>
            </div>

            {/* =========================================
                CONTENU CENTRAL - Navigation projet
                ========================================= */}
            <div className="flex items-center justify-center py-8">
                <div className="w-[70%] md:w-[60%] lg:w-[50%]">
                    {/* Projet suivant (au-dessus de l'image) */}
                    {nextProject ? (
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className="flex justify-between items-end mb-2 group"
                        >
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]">
                                Next Project
                            </span>
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f] group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div className="flex justify-between items-end mb-2 opacity-40">
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]">
                                Next Project
                            </span>
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f]" />
                        </div>
                    )}

                    {/* Image centrale - Projet suivant */}
                    {nextProject ? (
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className="block"
                        >
                            <div className="relative aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={`${BASE_PATH}${nextProject.image}`}
                                    alt={nextProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                    ) : (
                        <div className="relative aspect-video bg-[#e5e5e0] flex items-center justify-center">
                            <span className="text-[#1f1d1f] font-bold uppercase text-sm md:text-3xl">End of projects</span>
                        </div>
                    )}

                    {/* Projet précédent (sous l'image) */}
                    {previousProject ? (
                        <Link
                            href={`/projects/${previousProject.slug}`}
                            className="flex justify-between items-start mt-2 group"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f] group-hover:-translate-x-1 transition-transform" />
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]">
                                Previous Project
                            </span>
                        </Link>
                    ) : (
                        <div className="flex justify-between items-start mt-2 opacity-40">
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f]" />
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]">
                                Previous Project
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* =========================================
                LIGNE DU BAS - Points
                ========================================= */}
            <div className="flex justify-between items-center px-4 mb-4 md:mb-8">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1f1f] rounded-full"></div>
            </div>
        </div>
    );
}