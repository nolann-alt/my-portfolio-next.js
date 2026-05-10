"use client";
import {Mail} from "lucide-react";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BASE_PATH = "/my-portfolio-next.js";

const Intro: React.FC = () => {
    // Refs pour cibler les éléments dans GSAP
    const imageRef = useRef<HTMLImageElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const descRef= useRef<HTMLParagraphElement | null>(null);
    const titleRef= useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        // On enregistre ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Vérifie que les refs sont définies
        if (!imageRef.current || !textRef.current || !sectionRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            const navbarEl = document.querySelector("nav");
            const navbarBottom = navbarEl
                ? Math.ceil(navbarEl.getBoundingClientRect().bottom)
                : 96;
            const padding = 12; // marge autour de l'image a taille max

            // Calcule le scale max pour que l'image ne dépasse pas l'écran
            const imageEl = imageRef.current;
            if (!imageEl) return; // vérifie que l'image existe

            // Taille initiale déjà responsive
            const rect = imageEl.getBoundingClientRect();
            const initialWidth = rect.width;
            const initialHeight = rect.height;

            // Taille max pour ne pas dépasser l'écran
            const maxWidth = window.innerWidth - padding * 2;
            const minTop = navbarBottom + padding;
            const maxHeight = window.innerHeight - minTop - padding;

            // Scale max pour contenir l'image dans l'ecran (sans toucher les bords)
            const scaleX = maxWidth / initialWidth;
            const scaleY = maxHeight / initialHeight;
            const targetScale = (window.innerWidth * 1.3) / initialWidth;
            const scaleMax = Math.min(scaleX, scaleY, targetScale, 6.0);

            const offsetY = minTop - rect.top;

            // Durée du scroll (ici 100% de la hauteur de la fenêtre)
            const scrollLength = window.innerHeight;

            // Texte remonte + disparition
            gsap.fromTo(
                textRef.current,
                { opacity: 1, y: 0 },
                {
                    opacity: 0,
                    y: scrollLength * 0.55,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${scrollLength}`,
                        scrub: true,
                    },
                }
            );

            // Zoom de l'image avec limite pour ne pas dépasser l'écran
            gsap.to(imageRef.current, {
                scale: scaleMax,
                transformOrigin: "center top",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${scrollLength -10}`,
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

            // Animation description
            gsap.fromTo(
                descRef.current,
                {
                    opacity: 0,
                    x: 100,
                },
                {
                    opacity: 1,
                    x: 0,
                    ease: "power2.out",
                    duration: 1,
                    delay: 0.3,
                }
            );

            // Animation titre
            gsap.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    x: -100,
                },
                {
                    opacity: 1,
                    x: 0,
                    ease: "power2.out",
                    duration: 1,
                    delay: 0.3,
                }
            );

            // Animation image - sur mobile on garde la position CSS originale (en bas, au-dessus de la ligne)
            gsap.set(imageRef.current, { y: window.innerWidth < 768 ? 0 : offsetY });
            gsap.fromTo(
                imageRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: "power2.out",
                    duration: 1,
                    delay: 0.3,
                }
            );

        }, sectionRef);

        // Nettoyage automatique à la destruction du composant
        return () => ctx.revert();
    }, []);

    return (
        <section id="#"  ref={sectionRef} className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-end items-center gap-10">
                <div ref={imageRef} className="w-[63vw] md:w-[53vw] lg:w-[43vw] aspect-[16/9] overflow-hidden shadow-xl">
                    <img src={`${BASE_PATH}/velo/moi.jpg`} alt="profil" className="w-full h-full object-cover"/>
                </div>
                <div ref={textRef} className="flex flex-col justify-center items-center">
                    <div data-loader="line" // data-loader pour cibler l'élément
                         ref={lineRef}
                         className="w-full border-t-2 border-dashed border-[#1e1f1f] opacity-70 my-2 md:my-8 mx-0.5">
                    </div>
                    <p ref={descRef} className="my-4 text-2xl md:text-6xl text-center md:text-left">
                        Computer Science B.U.T. Student.
                    </p>
                    <h1 ref={titleRef} className="text-5xl md:text-[12vw] font-bold text-center md:text-left -mt-2 md:mt-0">
                        Nolann <span className="text-[#1e1f1f]">LESCOP</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Intro;

