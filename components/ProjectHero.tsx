/**
 * ProjectHero - Composant de la section Hero d'une page de projet
 *
 * Fonctionnalités:
 * - Image plein écran avec animation de reveal (de bas en haut)
 * - Titre avec étoilesanimées (partent du centre, tournent et arrivent)
 * - Navigation Back/Home/Next avec animations
 * - Effet de rebond au hover sur les boutons
 *
 * @component
 */

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Asterisk } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Base path pour le déploiement GitHub Pages
const BASE_PATH = "/my-portfolio-next.js";

/**
 * Props du composant ProjectHero
 * @interface ProjectHeroProps
 * @property {Object} project - Données du projet (image, titre)
 * @property {Object|null} nextProject - Projet suivant (slug, title)
 * @property {Object|null} previousProject - Projet précédent (slug, title)
 */
interface ProjectHeroProps {
  project: {
    image: string;
    title: string;
    shortDescription: string;
    year: number;
    tags: string[];
  };
  nextProject: { slug: string; title: string } | null;
  previousProject: { slug: string; title: string } | null;
}

/**
 * Composant principal de la section Hero du projet
 * @param {ProjectHeroProps} project - Données du projet actuel
 * @param {ProjectHeroProps} nextProject - Projet suivant (pour lien Next)
 * @param {ProjectHeroProps} previousProject - Projet précédent (pour lien Back)
 * @returns {JSX.Element} Section Hero avec image, titre et navigation
 */
export default function ProjectHero({ project, nextProject, previousProject }: ProjectHeroProps) {
  // =========================================
  // REFS pour les animations GSAP
  // =========================================

  /** Référence au conteneur principal pour le contexte GSAP */
  const containerRef = useRef<HTMLDivElement>(null);

  /** Référence au conteneur de l'image pour l'animation de reveal */
  const imageRef = useRef<HTMLDivElement>(null);

  /** Référence au titre pour l'animation de scale */
  const titleRef = useRef<HTMLHeadingElement>(null);

  /** Référence à l'étoile gauche pour l'animation de rotation */
  const starLeftRef = useRef<SVGSVGElement>(null);

  /** Référence à l'étoile droite pour l'animation de rotation */
  const starRightRef = useRef<SVGSVGElement>(null);

  /** Référence à la navigation pour l'animation des boutons */
  const buttonsRef = useRef<HTMLDivElement>(null);

  // =========================================
  // ANIMATIONS GSAP à l'apparition
  // =========================================

  /**
   * Animation d'apparition des éléments:
   * 1. Image: reveal de bas en haut (clipPath)
   * 2. Titre: scale depuis 0.3 jusqu'à 1
   * 3. Étoiles: translation depuis le centre + rotation 180°
   * 4. Boutons: fade in avec stagger
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline avec easing par défaut power3.out pour un effet fluide
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // --- Animation 1: Image ---
      // L'image apparaît en "reveal" de bas en haut
      // Départ: clipPath cache entièrement l'image (inset 100%)
      // Fin: clipPath découvre complètement l'image (inset 0%)
      tl.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, delay: 0.2 }
      );

      // --- Animation 2: Titre ---
      // Le titre grossit depuis une petite taille
      // Départ: scale 0.3 (30% de la taille finale) + invisible
      // Fin: scale 1 (taille normale) + visible
      tl.fromTo(
        titleRef.current,
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.8" // Démarre 0.8s avant la fin de l'animation précédente
      );

      // --- Animation 3: Étoiles ---
      // Les étoiles viennent du centre vers les bords en tournant
      // Étoile gauche: part de -100px à gauche, rotation 180° → 45°
      // Étoile droite: part de 100px à droite, rotation -180° → 45°
      // ease "back.out(1.5)" crée un effet d'overshoot (rebond)
      tl.fromTo(
        starLeftRef.current,
        { x: -100, rotation: 180, opacity: 0 },
        { x: 0, rotation: 45, opacity: 1, duration: 1, ease: "back.out(1.5)" },
        "-=0.6"
      );
      tl.fromTo(
        starRightRef.current,
        { x: 100, rotation: -180, opacity: 0 },
        { x: 0, rotation: 45, opacity: 1, duration: 1, ease: "back.out(1.5)" },
        "<" // Démarre en même temps que l'étoile gauche
      );

      // --- Animation 4: Boutons ---
      // Les boutons Back/Home/Next apparaissent avec un stagger
      // Chaque bouton apparaît 0.1s après le précédent
      const buttons = containerRef.current?.querySelectorAll('.nav-item');
      if (buttons) {
        tl.fromTo(
          buttons,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );
      }
    }, containerRef);

    // Nettoyage: revert toutes les animations quand le composant est démonté
    return () => ctx.revert();
  }, []);

  // =========================================
  // ANIMATION PARALLAXE AU SCROLL
  // =========================================

  /**
   * Animation parallax: l'image bouge légèrement quand on descend
   * L'image se déplace à une vitesse différente du scroll (effet de profondeur)
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // L'image bouge de 50px vers le haut pendant le scroll
      // scrub: lie l'animation au scroll (1s de délai)
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // =========================================
  // RENDU JSX
  // =========================================

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* =========================================
          SECTION 1: IMAGE AVEC NAVIGATION
          ========================================= */}
      <section className="relative w-full px-2 pt-2">
        {/* Conteneur de l'image avec hauteur adaptative:
            - Mobile: 60vh - 16px (pour laisser place au titre)
            - Desktop: 75vh - 16px */}
        <div ref={imageRef} className="relative w-full h-[calc(60vh-16px)] md:h-[calc(75vh-16px)] overflow-hidden">
          {/* Image du projet en mode cover (remplit le conteneur) */}
          <Image
            src={`${BASE_PATH}${project.image}`}
            alt={`${project.title} - Project showcase`}
            fill
            className="object-cover"
            priority
          />

          {/* Navigation overlaypositionnée en bas de l'image:
              - mix-blend-difference: le texte s'adapte au contraste de l'image
              - Back/Next désactivés (gris) si pas de projet adjacent */}
          <nav
            ref={buttonsRef}
            className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-2 md:px-8"
          >
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference"
              >
                <span>Back</span>
              </Link>
            ) : (
              <span className="nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference">
                Back
              </span>
            )}
            <Link
              href="/"
              className="nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference"
            >
              <span>Home</span>
            </Link>
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference"
              >
                <span>Next</span>
              </Link>
            ) : (
              <span className="nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference">
                Next
              </span>
            )}
          </nav>
        </div>
      </section>

      {/* =========================================
          SECTION 2: TITRE AVEC ÉTOILES, DESCRIPTION, ANNÉE ET TECHNOS
          ========================================= */}
      <section className="bg-[#f4f5f0] px-4 mt-5 md:mt-20">
        <div className="flex items-center justify-center gap-4">
          {/* Étoile gauche avec rotation 45° */}
          <Asterisk
            ref={starLeftRef}
            strokeWidth={1}
            className="h-10 w-10 md:h-28 md:w-28 text-[#1e1f1f] md:ml-5"
            style={{ rotate: "45deg" }}
          />

          {/* Titre du projet en police script (Pinyon Script) */}
          <h1
            ref={titleRef}
            className="font-script text-4xl md:text-[10rem] text-gray-900 whitespace-nowrap"
          >
            {project.title}
          </h1>

          {/* Étoile droite avec rotation 45° */}
          <Asterisk
            ref={starRightRef}
            strokeWidth={1}
            className="h-10 w-10 md:h-28 md:w-28 text-[#1e1f1f] md:ml-5"
            style={{ rotate: "45deg" }}
          />
        </div>

        {/* Description du projet */}
        <div className="text-center mt-5 md:mt-24">
          <p className="text-xl md:text-5xl font-bold text-[#1e1f1f] uppercase max-w-[70vw] mx-auto">
            {project.shortDescription}
          </p>
        </div>

        {/* Année du projet */}
        <div className="text-center mt-3">
          <span className="text-lg md:text-xl text-gray-900 uppercase">
            Year: {project.year}
          </span>
        </div>

        {/* Carrousel des technos - défile en boucle */}
        <div className="mt-2 overflow-hidden w-[60vw] md:w-[20vw] mx-auto">
          <div className="flex animate-scroll gap-8 md:gap-12 items-center justify-start">
            {[...project.tags, ...project.tags, ...project.tags].map((tag, index) => (
              <span
                key={index}
                className="text-xs md:text-sm text-[#1e1f1f] uppercase tracking-wider whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

       
      </section>

      {/* Ligne de séparation */}
      <div className="mt-20 md:mt-32 border-t-2 border-[#1e1f1f] mb-20"></div>

      {/* =========================================
          STYLES CSS POUR LES ANIMATIONS AU HOVER
          ========================================= */}
      <style jsx global>{`
        /* Animation de transition sur les boutons */
        .nav-btn {
          transition: all 0.3s ease;
          display: inline-block;
        }

        /* Effet au survol: grossissement du bouton */
        .nav-btn:hover {
          transform: scale(1.1);
        }

        /* Animation de rebond sur le texte au hover */
        .nav-btn:hover span {
          display: inline-block;
          animation: textBounce 0.3s ease;
        }

        /* Keyframes pour l'animation de rebond */
        @keyframes textBounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }

        /* Animation du carrousel des technos - défilement infini */
        .animate-scroll {
          animation: scroll 8s linear infinite;
          width: fit-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  );
}