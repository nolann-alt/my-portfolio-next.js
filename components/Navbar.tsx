"use client"
import {Asterisk, Dot, Menu, MoveRight, X} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const isProjectPage = pathname.startsWith('/projects/');

    // Tous les hooks appelé en premier (règle React)
    const [menuOpen, setMenuOpen] = useState(false);
    const menuPcRef = useRef<HTMLElement | null>(null);
    const linkHome = useRef<HTMLAnchorElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);

    // Masquer sur les pages de projet via CSS
    const containerClass = isProjectPage ? "hidden" : `absolute md:fixed top-4 left-0 inset-x-0 z-50 grid grid-cols-2 md:grid-cols-3 items-center p-5 md:px-[3%] ${menuOpen ? "" : "mix-blend-difference text-white"}`;

    useEffect(() => {
        // On enregistre ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Vérifie que les refs sont définies
        if (!menuOpen || !lineRef.current) return;

        const ctx = gsap.context(() => {

            // 1. Étoile Gauche (roule vers la gauche)
            gsap.fromTo(".star-left",
                { x: 200, rotation: -360, opacity: 0 },
                { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
            );

            // 2. Étoile Droite (roule vers la droite)
            gsap.fromTo(".star-right",
                { x: -200, rotation: 360, opacity: 0 },
                { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
            );

            // 3. Titre Portfolio (Apparition centrale avec zoom léger)
            gsap.fromTo(".linkTitre",
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.3 }
            );

            gsap.fromTo(
                lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    duration: 1.2,
                    delay: 0.4, // Attendre que le menu descende un peu
                    transformOrigin: "center"
                }
            );

            // 2. Animation des titres (Remontée + Opacité)
            gsap.fromTo(".linkHome",
                {
                    y: 20,          // Part de 50px plus bas
                    opacity: 0      // Part d'invisible
                },
                {
                    y: 0,           // Arrive à sa position initiale
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.6,     // Commence un peu après la ligne
                    stagger: 0.1,   // Décale chaque titre de 0.1s
                    ease: "power4.out",
                    // Une fois l'animation finie, on retire le transform de GSAP
                    // pour laisser le CSS (hover:scale) prendre le relais proprement.
                    onComplete: () => {
                        gsap.set(".linkHome", { clearProps: "y" });
                    }
                }
            );
        });


        // Nettoyage automatique à la destruction du composant
        return () => ctx.revert();
    }, [menuOpen]);

    // Logique de FERMETURE (On nettoie après la fin de la transition CSS)
    useEffect(() => {
        if (!menuOpen) {
            // On attend que la transition CSS de 500ms soit finie avant de reset GSAP
            const timer = setTimeout(() => {
                gsap.set(".star-left, .star-right, .linkTitre, .linkHome", { opacity: 0 });
                gsap.set(lineRef.current, { scaleX: 0 });
            }, 500); // 500ms correspond à ta transition-transform duration-500
            return () => clearTimeout(timer);
        }
    }, [menuOpen]);

    return (
        <nav className={containerClass}>
            <a href="#" className="font-bold text-3xl md:text-2xl whitespace-nowrap">
                Nolann's <span>Portfolio</span>
            </a>

            <button className="btn btn-ghost text-2xl hidden md:block md:justify-self-center" onClick={() => setMenuOpen(true)}>
                MENU
            </button>
            <button className="btn btn-md btn-ghost md:hidden text-xl justify-self-end" onClick={() => setMenuOpen(true)}>
                <Menu size={35}/>
            </button>

            {/* Menu pc uniquement */}
            <section
                ref={menuPcRef}
                className={`fixed inset-0 bg-[#1e1f1f] text-[#f4f4f3] mix-blend-normal flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 overflow-hidden
                ${menuOpen
                    ? "translate-x-0 translate-y-0 pointer-events-auto opacity-100"
                    : "max-md:translate-x-full md:-translate-y-full pointer-events-none opacity-0"}`}>

                {/* Contenu du menu (identique pour les deux) */}
                <button className="absolute top-5 right-8 md:right-auto btn btn-ghost text-2xl" onClick={() => setMenuOpen(false)}>
                    <span className="hidden md:inline">CLOSE</span>
                    <X size={35} className="md:hidden" />
                </button>

                <div className="flex flex-col justify-center w-full mt-14">
                    {/* --- Header (Portfolio + Étoiles) --- */}
                    <div className="flex justify-center items-center gap-6 md:gap-10">
                        <Asterisk size={45} className="star-left opacity-0"/>
                        <h1 className="linkTitre text-[#f4f4f3] text-5xl md:text-9xl font-bold">Portfolio</h1>
                        <Asterisk size={45} className="star-right opacity-0"/>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-sm font-bold">PAGES</h1>
                        <div ref={lineRef} data-loader="line" // data-loader pour cibler l'élément
                             className="w-[95%] border-t-2 border-dashed border-[#f4f4f3]/60 opacity-70 my-4 mx-0.5">
                        </div>
                        <div>
                            <Link href="/"
                                  onClick={()=> setMenuOpen(false)}
                               className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                HOME </Link>
                        </div>
                        <div>
                            <Link href="/about"
                               onClick={() => setMenuOpen(false)}
                               className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                ABOUT ME </Link>
                        </div>
                        <div>
                            <a href=""
                               target="_blank" // nouvelle fenêtre
                               rel="noopener noreferrer"
                               className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                EXPERIENCES </a>
                        </div>
                        <div>
                            <a href="/projects"
                               target="_blank" // nouvelle fenêtre
                               rel="noopener noreferrer"
                               className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                PROJECTS </a>
                        </div>
                    </div>
                </div>
            </section>

            <ul className="hidden md:flex justify-end space-x-4">
                <li>
                    <a href="#" className="btn btn-ghost text-2xl">
                        Contact
                        <span></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-current"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

