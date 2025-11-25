"use client";
import {Mail, MoveRight, Rows} from "lucide-react";
import Title from "@/components/Title";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

const Hero: React.FC = () => {

    const sectionRef = useRef<HTMLElement | null>(null);
    const learnMore = useRef<HTMLAnchorElement | null>(null);
    const arrowRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        // On enregistre ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(SplitText);

        const ctx = gsap.context(() => {

            gsap.fromTo(".titleSection",
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    ease: "power4.out",
                    opacity: 1,
                    delay: 0.3,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        toggleActions: "play none none reset", // Recharger l'animation
                    }
                }
            );

            gsap.fromTo(".titleH1",
                {
                    x: -100,
                    opacity: 0
                },
                {
                    x: 0,
                    ease: "power4.out",
                    opacity: 1,
                    delay: 0.3,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        toggleActions: "play none none reset", // Recharger l'animation
                    }
                }
            );

            gsap.fromTo(".textP",
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    ease: "power4.out",
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        toggleActions: "play none none reset", // Recharger l'animation
                    }
                }
            );

            const split = new SplitText(learnMore.current, { type: "chars" });
            const chars = split.chars;
            if(!chars) return;

            const enterAnim = () => {
                gsap.to(chars, {
                    x: 10,
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    rotation: 10,
                    ease: "power3.out",
                });
                gsap.to(arrowRef.current, {
                    x: 10,
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    rotation: 10,
                    ease: "power3.out",
                });
            };

            const leaveAnim = () => {
                gsap.to(chars, {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power3.inOut",
                    stagger: 0.05,
                    rotation: 0,
                    onComplete: () => {
                        // Flèche animée après que tous les caractères sont apparus
                        gsap.to(arrowRef.current, {
                            x: 0,
                            opacity: 1,
                            duration: 0.3,
                            rotation: 0,
                            ease: "power3.out",
                        });
                    }
                });
            };

            if(!learnMore.current || !arrowRef.current) return;
            learnMore.current.addEventListener("mouseenter", enterAnim);
            learnMore.current.addEventListener("mouseleave", leaveAnim);



        }, sectionRef);


        // Nettoyage automatique à la destruction du composant
        return () => ctx.revert();
    }, []);


    return (
        <section ref={sectionRef} id="hero" className="relative md:h-screen flex flex-col justify-center items-center my-20 md:my-0">
            <div className="flex flex-col justify-center items-center">
                <h1 className="titleSection uppercase mb-3 text-center text-xl text-white">About Me</h1>
                <h1 className="titleH1 text-5xl md:text-8xl font-bold text-center mt-0">
                    Hi there, <br/> I'm Nolann <span className="text-[#C77DFF] drop-shadow-[0_0_15px_#C77DFF]">LESCOP</span>
                </h1>
                <p className="textP my-4 text-md text-center max-w-2xl">
                    I'm a student at the IUT in Vannes in the second year of a computer
                    science degree, and I'm looking for an internship to apply
                    my knowledge and develop my skills in the IT field.
                </p>
                <div className="flex flex-col justify-center items-center mt-12 md:w-[40%] w-[60%]">
                    <div data-loader="line" // data-loader pour cibler l'élément
                         className="w-full border-t border-dashed border-[#C77DFF] drop-shadow-[0_0_10px_#C77DFF]">
                    </div>
                    <a href=""
                       target="_blank" // nouvelle fenêtre
                       rel="noopener noreferrer"
                       ref={learnMore}
                       className="flex flew-row items-center gap-1 uppercase text-white py-1 font-bold text-xl md:text-3xl">
                        LEARN MORE <MoveRight ref={arrowRef}/>
                    </a>
                    <div data-loader="line" // data-loader pour cibler l'élément
                         className="w-full border-t border-dashed border-[#C77DFF] drop-shadow-[0_0_10px_#C77DFF] flex flex-coljustify-center">
                    </div>
                </div>

            </div>
            {/*<div className="md:ml-60">*/}
            {/*    <img src="/profil.jpg" alt="profil"*/}
            {/*         className="w-96 h-96 object-cover border-8 border-[#C77DFF] shadow-xl"*/}
            {/*         style={{*/}
            {/*             borderRadius : "65% 35% 25% 75% / 63% 71% 29% 37% "*/}
            {/*         }}*/}
            {/*    />*/}
            {/*</div>*/}
        </section>
    );
}

export default Hero;

