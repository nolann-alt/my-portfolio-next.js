"use client";
import {Mail} from "lucide-react";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home: React.FC = () => {
    // Refs pour cibler les éléments dans GSAP
    const imageRef = useRef<HTMLImageElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // On enregistre ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Vérifie que les refs sont définies
        if (!imageRef.current || !textRef.current || !sectionRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            const navbarHeight = 80;
            const padding = 32; // marge en px autour de l'image

            // Calcule le scale max pour que l'image ne dépasse pas l'écran
            const imageEl = imageRef.current;
            if (!imageEl) return; // vérifie que l'image existe

            // Taille initiale déjà responsive
            const rect = imageEl.getBoundingClientRect();
            const initialWidth = rect.width;
            const initialHeight = rect.height;

            // Taille max pour ne pas dépasser l'écran
            const maxWidth = window.innerWidth - padding * 2;
            const maxHeight = window.innerHeight - padding * 2 - navbarHeight;

            // Scale max pour le zoom (x1.5 mais limité à l'écran)
            const scaleX = maxWidth / initialWidth;
            const scaleY = maxHeight / initialHeight;
            const scaleMax = Math.min(scaleX, scaleY, 2.3); // pas plus de 1.5

            // Durée du scroll (ici 100% de la hauteur de la fenêtre)
            const scrollLength = window.innerHeight;

            // Texte descend + disparition
            gsap.to(textRef.current, {
                opacity: 0,
                y: 200,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${scrollLength}`,
                    scrub: true,
                },
            });

            // Zoom de l'image avec limite pour ne pas dépasser l'écran
            gsap.to(imageRef.current, {
                scale: scaleMax,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${scrollLength}`,
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                },
            });

            // Animation de la ligne horizontale
            gsap.fromTo(
                lineRef.current,
                {
                    scaleX: 0,
                    transformOrigin: "center"
                },
                {
                    scaleX: 1,
                    ease: "power2.out",
                    duration: 1,
                }
            );

        }, sectionRef);

        // Nettoyage automatique à la destruction du composant
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-10">
                <div ref={imageRef} className="w-[40vw] md:w-[30vw] aspect-[16/9] overflow-hidden border-2 border-[#C77DFF] shadow-xl">
                    <img src="/velo/moi.jpg" alt="profil" className="w-full h-full object-cover"/>
                </div>
                <div ref={textRef} className="flex flex-col justify-center items-center">
                    <div data-loader="line" // data-loader pour cibler l'élément
                         ref={lineRef}
                         className="w-full border-t-2 border-dashed border-[#C77DFF] opacity-70 my-8 drop-shadow-[0_0_10px_#C77DFF] mx-0.5">
                    </div>
                    <p className="my-4 text-3xl md:text-5xl text-center md:text-left">
                        Computer Science B.U.T. Student.
                    </p>
                    <h1 className="text-5xl md:title-home font-bold text-center md:text-left mt-4 md:mt-0">
                        Nolann <span className="text-[#C77DFF] drop-shadow-[0_0_15px_#C77DFF]">LESCOP</span>
                    </h1>
                    {/*<a href="/CV_Stage.pdf"*/}
                    {/*   target="_blank" // nouvelle fenêtre*/}
                    {/*   rel="noopener noreferrer"*/}
                    {/*   className="btn bg-[#C77DFF] md:w-fit text-white">*/}
                    {/*    <Mail className="w-5 h-5"/>*/}
                    {/*    Contact me*/}
                    {/*</a>*/}
                </div>
            </div>
        </section>
    );
}

export default Home;

