(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProjectHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "default",
    ()=>ProjectHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/asterisk.js [app-client] (ecmascript) <export default as Asterisk>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Base path pour le déploiement GitHub Pages
const BASE_PATH = "/my-portfolio-next.js";
function ProjectHero({ project, nextProject, previousProject }) {
    _s();
    // =========================================
    // REFS pour les animations GSAP
    // =========================================
    /** Référence au conteneur principal pour le contexte GSAP */ const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence au conteneur de l'image pour l'animation de reveal */ const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence au titre pour l'animation de scale */ const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence à l'étoile gauche pour l'animation de rotation */ const starLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence à l'étoile droite pour l'animation de rotation */ const starRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence à la navigation pour l'animation des boutons */ const buttonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence à la description du projet */ const descriptionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence à l'année du projet */ const yearRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence au carrousel des technos */ const tagsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Référence à la ligne de séparation */ const separatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // =========================================
    // ANIMATIONS GSAP à l'apparition
    // =========================================
    /**
   * Animation d'apparition des éléments:
   * 1. Image: reveal de bas en haut (clipPath)
   * 2. Titre: scale depuis 0.3 jusqu'à 1
   * 3. Étoiles: translation depuis le centre + rotation 180°
   * 4. Boutons: fade in avec stagger
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectHero.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ProjectHero.useEffect.ctx": ()=>{
                    // Timeline avec easing par défaut power3.out pour un effet fluide
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "power3.out"
                        }
                    });
                    // --- Animation 1: Image ---
                    // L'image apparaît en "reveal" de bas en haut
                    // Départ: clipPath cache entièrement l'image (inset 100%)
                    // Fin: clipPath découvre complètement l'image (inset 0%)
                    tl.fromTo(imageRef.current, {
                        clipPath: "inset(100% 0% 0% 0%)"
                    }, {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.2,
                        delay: 0.2
                    });
                    // --- Animation 2: Titre ---
                    // Le titre grossit depuis une petite taille
                    // Départ: scale 0.3 (30% de la taille finale) + invisible
                    // Fin: scale 1 (taille normale) + visible
                    tl.fromTo(titleRef.current, {
                        scale: 0.3,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 1
                    }, "-=0.8" // Démarre 0.8s avant la fin de l'animation précédente
                    );
                    // --- Animation 3: Étoiles ---
                    // Les étoiles viennent du centre vers les bords en tournant
                    // Étoile gauche: part de -100px à gauche, rotation 180° → 45°
                    // Étoile droite: part de 100px à droite, rotation -180° → 45°
                    // ease "back.out(1.5)" crée un effet d'overshoot (rebond)
                    tl.fromTo(starLeftRef.current, {
                        x: -100,
                        rotation: 180,
                        opacity: 0
                    }, {
                        x: 0,
                        rotation: 45,
                        opacity: 1,
                        duration: 1,
                        ease: "back.out(1.5)"
                    }, "-=0.6");
                    tl.fromTo(starRightRef.current, {
                        x: 100,
                        rotation: -180,
                        opacity: 0
                    }, {
                        x: 0,
                        rotation: 45,
                        opacity: 1,
                        duration: 1,
                        ease: "back.out(1.5)"
                    }, "<" // Démarre en même temps que l'étoile gauche
                    );
                    // --- Animation 4: Boutons ---
                    // Les boutons Back/Home/Next apparaissent avec un stagger
                    // Chaque bouton apparaît 0.1s après le précédent
                    const buttons = containerRef.current?.querySelectorAll('.nav-item');
                    if (buttons) {
                        tl.fromTo(buttons, {
                            opacity: 0,
                            y: 10
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            stagger: 0.1
                        }, "-=0.4");
                    }
                    // --- Animation 5: Description du projet ---
                    // Apparition depuis la gauche avec un effet de slide
                    tl.fromTo(descriptionRef.current, {
                        opacity: 0,
                        x: -50
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.8
                    }, "-=0.3");
                    // --- Animation 6: Année du projet ---
                    // Apparition depuis la droite
                    tl.fromTo(yearRef.current, {
                        opacity: 0,
                        x: 50
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.8
                    }, "-=0.6");
                    // --- Animation 7: Carrousel des technos ---
                    // Apparition depuis le bas avec un léger scale
                    tl.fromTo(tagsRef.current, {
                        opacity: 0,
                        y: 30,
                        scale: 0.9
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8
                    }, "-=0.6");
                    // --- Animation 8: Ligne de séparation ---
                    // Apparition de la gauche vers la droite (scaleX)
                    tl.fromTo(separatorRef.current, {
                        scaleX: 0,
                        transformOrigin: "left"
                    }, {
                        scaleX: 1,
                        duration: 1
                    }, "-=0.4");
                }
            }["ProjectHero.useEffect.ctx"], containerRef);
            // Nettoyage: revert toutes les animations quand le composant est démonté
            return ({
                "ProjectHero.useEffect": ()=>ctx.revert()
            })["ProjectHero.useEffect"];
        }
    }["ProjectHero.useEffect"], []);
    // =========================================
    // ANIMATION PARALLAXE AU SCROLL
    // =========================================
    /**
   * Animation parallax: l'image bouge légèrement quand on descend
   * L'image se déplace à une vitesse différente du scroll (effet de profondeur)
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectHero.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ProjectHero.useEffect.ctx": ()=>{
                    // L'image bouge de 50px vers le haut pendant le scroll
                    // scrub: lie l'animation au scroll (1s de délai)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageRef.current, {
                        y: -50,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: 1
                        }
                    });
                }
            }["ProjectHero.useEffect.ctx"], containerRef);
            return ({
                "ProjectHero.useEffect": ()=>ctx.revert()
            })["ProjectHero.useEffect"];
        }
    }["ProjectHero.useEffect"], []);
    // =========================================
    // RENDU JSX
    // =========================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "jsx-52d031f21e69b617" + " " + "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-52d031f21e69b617" + " " + "relative w-full px-2 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: imageRef,
                    className: "jsx-52d031f21e69b617" + " " + "relative w-full h-[calc(60vh-16px)] md:h-[calc(75vh-16px)] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: `${BASE_PATH}${project.image}`,
                            alt: `${project.title} - Project showcase`,
                            fill: true,
                            className: "object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            ref: buttonsRef,
                            className: "jsx-52d031f21e69b617" + " " + "absolute bottom-2 left-0 right-0 flex justify-between items-center px-2 md:px-8",
                            children: [
                                previousProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/projects/${previousProject.slug}`,
                                    className: "nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-52d031f21e69b617",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectHero.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-52d031f21e69b617" + " " + "nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-52d031f21e69b617",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectHero.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                nextProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/projects/${nextProject.slug}`,
                                    className: "nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-52d031f21e69b617",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectHero.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-52d031f21e69b617" + " " + "nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectHero.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectHero.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-52d031f21e69b617" + " " + "px-4 mt-5 md:mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-52d031f21e69b617" + " " + "flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__["Asterisk"], {
                                ref: starLeftRef,
                                strokeWidth: 1,
                                className: "h-10 w-10 md:h-28 md:w-28 text-[#1e1f1f] md:ml-5",
                                style: {
                                    rotate: "45deg"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectHero.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                ref: titleRef,
                                className: "jsx-52d031f21e69b617" + " " + "font-script text-4xl md:text-[10rem] text-gray-900 whitespace-nowrap",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectHero.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__["Asterisk"], {
                                ref: starRightRef,
                                strokeWidth: 1,
                                className: "h-10 w-10 md:h-28 md:w-28 text-[#1e1f1f] md:ml-5",
                                style: {
                                    rotate: "45deg"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectHero.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-52d031f21e69b617" + " " + "text-center mt-5 md:mt-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            ref: descriptionRef,
                            className: "jsx-52d031f21e69b617" + " " + "text-xl md:text-5xl font-bold text-[#1e1f1f] uppercase max-w-[70vw] mx-auto",
                            children: project.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-52d031f21e69b617" + " " + "text-center mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            ref: yearRef,
                            className: "jsx-52d031f21e69b617" + " " + "text-lg md:text-xl text-gray-900 uppercase",
                            children: [
                                "Year: ",
                                project.year
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: tagsRef,
                        className: "jsx-52d031f21e69b617" + " " + "mt-2 overflow-hidden w-[60vw] md:w-[20vw] mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-52d031f21e69b617" + " " + "flex animate-scroll gap-8 md:gap-12 items-center justify-start",
                            children: [
                                ...project.tags,
                                ...project.tags,
                                ...project.tags
                            ].map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-52d031f21e69b617" + " " + "text-xs md:text-sm text-[#1e1f1f] uppercase tracking-wider whitespace-nowrap",
                                    children: tag
                                }, index, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectHero.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: separatorRef,
                className: "jsx-52d031f21e69b617" + " " + "mt-20 md:mt-32 border-t-2 border-[#1e1f1f] mb-20"
            }, void 0, false, {
                fileName: "[project]/components/ProjectHero.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "52d031f21e69b617",
                children: ".nav-btn{transition:all .3s;display:inline-block}.nav-btn:hover{transform:scale(1.1)}.nav-btn:hover span{animation:.3s textBounce;display:inline-block}@keyframes textBounce{0%{transform:translateY(0)}50%{transform:translateY(-3px)}to{transform:translateY(0)}}.animate-scroll{width:fit-content;animation:8s linear infinite scroll}@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-33.33%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectHero.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_s(ProjectHero, "h0iQrZRTlTy4GTGAwDKeEIcOWKA=");
_c = ProjectHero;
var _c;
__turbopack_context__.k.register(_c, "ProjectHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectScreenshots.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ProjectScreenshots - Section d'affichage des captures d'écran du projet
 *
 * Style identique à FeaturedProjects (grille 2 par ligne, cartes avec overlay)
 * Titre centré: "Screenshots"
 */ __turbopack_context__.s([
    "default",
    ()=>ProjectScreenshots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/asterisk.js [app-client] (ecmascript) <export default as Asterisk>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BASE_PATH = "/my-portfolio-next.js";
function ProjectScreenshots({ screenshots }) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const asteriskLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const asteriskRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Animations GSAP à l'apparition (identiques à FeaturedProjects)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectScreenshots.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ProjectScreenshots.useEffect.ctx": ()=>{
                    // Étoile gauche : vient du centre vers la gauche en tournant
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(asteriskLeftRef.current, {
                        x: -100,
                        rotation: 180,
                        opacity: 0
                    }, {
                        x: 0,
                        rotation: 45,
                        opacity: 1,
                        duration: 1,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: ".screenshots-title",
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    // Étoile droite : vient du centre vers la droite en tournant
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(asteriskRightRef.current, {
                        x: 100,
                        rotation: -180,
                        opacity: 0
                    }, {
                        x: 0,
                        rotation: 45,
                        opacity: 1,
                        duration: 1,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: ".screenshots-title",
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    // Titre : apparition depuis le bas
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".screenshots-title", {
                        y: 40,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".screenshots-title",
                            start: "top 80%",
                            toggleActions: "restart reverse restart reverse"
                        }
                    });
                    // Sous-titre : apparition depuis le bas
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".screenshots-subtitle", {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        delay: 0.1,
                        scrollTrigger: {
                            trigger: ".screenshots-subtitle",
                            start: "top 85%",
                            toggleActions: "restart reverse restart reverse"
                        }
                    });
                    // Images : même animation que fp-card dans FeaturedProjects
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".screenshot-card", {
                        clipPath: "inset(0 0 100% 0)",
                        y: -20,
                        opacity: 0
                    }, {
                        clipPath: "inset(0 0 0% 0)",
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                        delay: 0.2,
                        stagger: {
                            each: 0.16
                        },
                        scrollTrigger: {
                            trigger: ".screenshot-card",
                            start: "top 85%",
                            once: true
                        }
                    });
                }
            }["ProjectScreenshots.useEffect.ctx"], sectionRef);
            return ({
                "ProjectScreenshots.useEffect": ()=>ctx.revert()
            })["ProjectScreenshots.useEffect"];
        }
    }["ProjectScreenshots.useEffect"], []);
    // Ne pas afficher si pas de screenshots
    if (!screenshots || screenshots.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "w-full px-0 py-12 md:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:items-center md:justify-center w-full z-10 px-4 text-center mb-10 md:mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 md:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__["Asterisk"], {
                                    ref: asteriskLeftRef,
                                    strokeWidth: 1,
                                    className: "h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] mr-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectScreenshots.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "screenshots-title font-script text-5xl md:text-[10rem] lg:text-[12rem] tracking-tight leading-none font-light",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#1e1f1f]",
                                        children: "Screenshots"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectScreenshots.tsx",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectScreenshots.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__["Asterisk"], {
                                    ref: asteriskRightRef,
                                    strokeWidth: 1,
                                    className: "h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] ml-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectScreenshots.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectScreenshots.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "screenshots-subtitle md:-mt-4 max-w-[16rem] px-3 text-xs md:text-2xl font-bold text-[#1f1d1f] md:max-w-[28rem] text-center",
                            children: "A visual overview of the project's interface and features"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectScreenshots.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectScreenshots.tsx",
                    lineNumber: 133,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectScreenshots.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-[#121212] py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[98vw] mx-auto flex flex-col gap-8",
                    children: screenshots.map((screenshot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "screenshot-card relative w-full overflow-hidden bg-[#1a1a1a]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${BASE_PATH}${screenshot}`,
                                alt: `Screenshot ${index + 1}`,
                                className: "w-full h-auto max-h-[70vh] object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectScreenshots.tsx",
                                lineNumber: 155,
                                columnNumber: 29
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/ProjectScreenshots.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ProjectScreenshots.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectScreenshots.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectScreenshots.tsx",
        lineNumber: 130,
        columnNumber: 9
    }, this);
}
_s(ProjectScreenshots, "cXR/7TZ4JzgzqLZiaLaiVzGb4gk=");
_c = ProjectScreenshots;
var _c;
__turbopack_context__.k.register(_c, "ProjectScreenshots");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ProjectNavigation - Navigation de bas de page pour naviguer entre projets
 *
 * Contient: Next/Previous project avec image centrale cliquable
 * Style: Minimaliste avec points dans les angles
 */ __turbopack_context__.s([
    "default",
    ()=>ProjectNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
"use client";
;
;
;
;
const BASE_PATH = "/my-portfolio-next.js";
function ProjectNavigation({ nextProject, previousProject }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen grid grid-rows-[auto_1fr_auto]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-4 mt-4 md:mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectNavigation.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectNavigation.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectNavigation.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[70%] md:w-[60%] lg:w-[50%]",
                    children: [
                        nextProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/projects/${nextProject.slug}`,
                            className: "flex justify-between items-end mb-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]",
                                    children: "Next Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f] group-hover:translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 51,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectNavigation.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-end mb-2 opacity-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]",
                                    children: "Next Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectNavigation.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, this),
                        nextProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/projects/${nextProject.slug}`,
                            className: "block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: `${BASE_PATH}${nextProject.image}`,
                                    alt: nextProject.title,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 69,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectNavigation.tsx",
                                lineNumber: 68,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectNavigation.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-video bg-[#e5e5e0] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1f1d1f] font-bold uppercase text-sm md:text-3xl",
                                children: "End of projects"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectNavigation.tsx",
                                lineNumber: 79,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectNavigation.tsx",
                            lineNumber: 78,
                            columnNumber: 25
                        }, this),
                        previousProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/projects/${previousProject.slug}`,
                            className: "flex justify-between items-start mt-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f] group-hover:-translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 89,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]",
                                    children: "Previous Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectNavigation.tsx",
                            lineNumber: 85,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mt-2 opacity-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-6 h-6 md:w-8 md:h-8 text-[#1f1f1f]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#1f1d1f]",
                                    children: "Previous Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectNavigation.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectNavigation.tsx",
                            lineNumber: 95,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectNavigation.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectNavigation.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-4 mb-4 md:mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectNavigation.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1f1f] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectNavigation.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectNavigation.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectNavigation.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c = ProjectNavigation;
var _c;
__turbopack_context__.k.register(_c, "ProjectNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PageEndSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PageEndSection = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function PageEndSection({ title = "Let's work together !", ctaLabel = "CONTACT ME", ctaHref = "mailto:nolann.lescop@outlook.com" }, ref) {
    _s();
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageEndSection.PageEndSection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "PageEndSection.PageEndSection.useEffect.ctx": ()=>{
                    // Titre "Let's work together!" : apparition depuis le bas
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(titleRef.current, {
                        y: 80,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    // CTA "CONTACT ME" : apparition depuis le bas avec délai
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(ctaRef.current, {
                        y: 80,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: ctaRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["PageEndSection.PageEndSection.useEffect.ctx"]);
            return ({
                "PageEndSection.PageEndSection.useEffect": ()=>ctx.revert()
            })["PageEndSection.PageEndSection.useEffect"];
        }
    }["PageEndSection.PageEndSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center justify-center min-h-[55vh] w-full px-6 mb-20 md:mb-80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cta-reveal w-[98vw] max-w-[2200px] flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: titleRef,
                    className: "font-script text-[clamp(2.6rem,9.5vw,8.5rem)] md:text-[clamp(3.7rem,10.5vw,10.5rem)] tracking-tight leading-none text-[#1f1d1f]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/PageEndSection.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: ctaRef,
                    className: "font-sans text-[clamp(3.9rem,12.5vw,10.5rem)] md:text-[clamp(5.2rem,14.5vw,14.5rem)] uppercase font-black tracking-tight text-[#1f1d1f] md:-mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: ctaHref,
                        className: "relative inline-block group",
                        children: [
                            ctaLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cta-underline absolute left-0 bottom-1 md:bottom-12 h-3 md:h-4 w-full origin-left scale-x-0 bg-[#1f1d1f] transition-transform duration-300 ease-out md:group-hover:scale-x-100"
                            }, void 0, false, {
                                fileName: "[project]/components/PageEndSection.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PageEndSection.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PageEndSection.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PageEndSection.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PageEndSection.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}, "ORVHDfz8whlKfmNIoYnI8nvm1uU=")), "ORVHDfz8whlKfmNIoYnI8nvm1uU=");
_c1 = PageEndSection;
const __TURBOPACK__default__export__ = PageEndSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageEndSection$forwardRef");
__turbopack_context__.k.register(_c1, "PageEndSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_8f10ddef._.js.map