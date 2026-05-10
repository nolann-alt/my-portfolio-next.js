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
                            src: project.image,
                            alt: `${project.title} - Project showcase`,
                            fill: true,
                            className: "object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 188,
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
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-52d031f21e69b617" + " " + "nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 211,
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
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 215,
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
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-52d031f21e69b617" + " " + "nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectHero.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectHero.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectHero.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-52d031f21e69b617" + " " + "bg-[#f4f5f0] px-4 mt-5 md:mt-20",
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
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                ref: titleRef,
                                className: "jsx-52d031f21e69b617" + " " + "font-script text-4xl md:text-[10rem] text-gray-900 whitespace-nowrap",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectHero.tsx",
                                lineNumber: 251,
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
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-52d031f21e69b617" + " " + "text-center mt-5 md:mt-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-52d031f21e69b617" + " " + "text-xl md:text-5xl font-bold text-[#1e1f1f] uppercase max-w-[70vw] mx-auto",
                            children: project.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-52d031f21e69b617" + " " + "text-center mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-52d031f21e69b617" + " " + "text-lg md:text-xl text-gray-900 uppercase",
                            children: [
                                "Year: ",
                                project.year
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectHero.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectHero.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectHero.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-52d031f21e69b617" + " " + "mt-20 md:mt-32 border-t-2 border-[#1e1f1f] mb-20"
            }, void 0, false, {
                fileName: "[project]/components/ProjectHero.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "52d031f21e69b617",
                children: ".nav-btn{transition:all .3s;display:inline-block}.nav-btn:hover{transform:scale(1.1)}.nav-btn:hover span{animation:.3s textBounce;display:inline-block}@keyframes textBounce{0%{transform:translateY(0)}50%{transform:translateY(-3px)}to{transform:translateY(0)}}.animate-scroll{width:fit-content;animation:8s linear infinite scroll}@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-33.33%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectHero.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(ProjectHero, "mue09zLi2L9qsULKJzr2uq8WKq8=");
_c = ProjectHero;
var _c;
__turbopack_context__.k.register(_c, "ProjectHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ProjectHero_tsx_4adfcf64._.js.map