module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/projects/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuredProjects",
    ()=>featuredProjects,
    "getNextProject",
    ()=>getNextProject,
    "getPreviousProject",
    ()=>getPreviousProject,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 1,
        slug: "skills-portfolio",
        title: "Skills Portfolio",
        shortDescription: "Portfolio de competences pour le BUT Informatique.",
        description: "Portfolio de competences pour le BUT Informatique a l'IUT de Vannes, avec des preuves de progression, SAEs et reflexions personnelles.",
        image: "/projects/portfolio_notion.jpg",
        tags: [
            "Notion",
            "Design"
        ],
        year: 2025,
        repoLink: "#",
        demoLink: "https://lescop-nolann.notion.site/Portfolio-de-comp-ences-BUT-informatique-IUT-de-Vannes-1bc65c526a3880dd8b51caef7c8637ae",
        hoverVideo: "/projects/previews/portfolio.mp4",
        featured: true,
        overview: "Ce portfolio a été créé pour répondre aux exigences du BUT Informatique à l'IUT de Vannes. Il met en valeur mes compétences techniques à travers des projets concrets, des preuves de progression et des réflexions personnelles sur mon parcours.",
        coreFeatures: "Portfolio Notion présentant comment j'ai justifié chaque compétence du BUT Informatique à travers les SAE (Situation d'Apprentissage et d'Évaluation) realisés en groupe pendant les 3 années du BUT. Chaque compétence est démontrée par des projets concrets avec preuves de progression, analyses réflexives et évaluations.",
        technologies: [
            {
                category: "Frontend",
                items: [
                    "Next.js 16",
                    "TypeScript",
                    "React",
                    "Tailwind CSS"
                ]
            },
            {
                category: "Animations",
                items: [
                    "GSAP",
                    "ScrollTrigger",
                    "SplitText"
                ]
            },
            {
                category: "Icons & Tools",
                items: [
                    "Lucide React",
                    "Google Fonts"
                ]
            },
            {
                category: "Deployment",
                items: [
                    "GitHub Pages",
                    "GitHub Actions"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/portfolio_notion/notion_1.png",
            "/projects/screenshots/portfolio_notion/notion_2.png"
        ]
    },
    {
        id: 2,
        slug: "old-portfolio-website",
        title: "Old Portfolio Website",
        shortDescription: "Mon ancien portfolio personnel.",
        description: "Mon premier portfolio personnel pour presenter mes projets, mes competences et mon parcours en developpement front-end.",
        image: "/projects/old_website.jpg",
        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        year: 2024,
        repoLink: "https://github.com/nolann-alt/site-nolann-lescop",
        demoLink: "https://nolann-alt.github.io/site-nolann-lescop/",
        hoverVideo: "/projects/previews/old-portfolio.mp4",
        featured: true,
        overview: "Mon premier portfolio personnel créé lors de mes premiers mois en BUT Informatique. Ce projet m'a permis de mettre en pratique les bases du développement web (HTML, CSS, JavaScript) tout en créant une présence en ligne professionnelle. C'était l'occasion d'expérimenter avec les animations CSS et le design responsive.",
        coreFeatures: "Premier site web personnel présentant mes projets, compétences et parcours en développement front-end. Site statique avec animations CSS et design responsive.",
        technologies: [
            {
                category: "Frontend",
                items: [
                    "HTML5",
                    "CSS3",
                    "JavaScript"
                ]
            },
            {
                category: "Design",
                items: [
                    "CSS Grid",
                    "Flexbox",
                    "Media Queries"
                ]
            },
            {
                category: "Deployment",
                items: [
                    "GitHub Pages"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/old-portfolio-1.jpg",
            "/projects/screenshots/old-portfolio-2.jpg"
        ]
    },
    {
        id: 3,
        slug: "grundy-game",
        title: "Grundy Game",
        shortDescription: "Comparaison d'algorithmes sur le Grundy Game.",
        description: "Projet universitaire de comparaison et optimisation d'algorithmes en Java avec analyse de performance et approche mathematique.",
        image: "/projects/Grundy.jpg",
        tags: [
            "Java",
            "Algorithmie"
        ],
        year: 2025,
        repoLink: "https://github.com/nolann-alt/SAE_S1.02",
        demoLink: "https://www.youtube.com/watch?v=hvCCPTWwUAY",
        hoverVideo: "/projects/previews/grundy.mp4",
        featured: true,
        overview: "Projet universitaire de la SAE S1.02 visant à comparer différents algorithmes de résolution du Grundy Game (jeu de Nim multidimensionnel). Ce projet m'a permis d'approfondir mes connaissances en algorithmie, en analyse de complexité et en optimisation. Nous avons implémenté plusieurs stratégies et les avons comparées selon leur efficacité.",
        coreFeatures: "Projet universitaire de comparaison et optimisation d'algorithmes en Java. Implémentation de plusieurs stratégies de résolution du Grundy Game avec analyse de performance et complexité.",
        technologies: [
            {
                category: "Langage",
                items: [
                    "Java"
                ]
            },
            {
                category: "Concepts",
                items: [
                    "Algorithmie",
                    "Théorie des jeux",
                    "Analyse complexité"
                ]
            },
            {
                category: "Outils",
                items: [
                    "Eclipse",
                    "JUnit (tests)"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/grundy-game-1.jpg",
            "/projects/screenshots/grundy-game-2.jpg"
        ]
    },
    {
        id: 4,
        slug: "step-by-step",
        title: "Step-by-Step",
        shortDescription: "Repertoire d'exercices et mini-projets.",
        description: "Collection d'exercices et mini-projets pour renforcer mes bases en JavaScript, Java, HTML, CSS et Python.",
        image: "/projects/step-by-step.jpg",
        tags: [
            "JavaScript",
            "Java",
            "Python"
        ],
        year: 2025,
        repoLink: "https://github.com/nolann-alt/step-by-step",
        demoLink: "#",
        hoverVideo: "/projects/previews/step-by-step.mp4",
        featured: true,
        overview: "Repository personnel contenant tous les exercices et mini-projets que j'ai réalisés pour consolider mes bases en programmation. Ce répertoire sert de portfolio d'apprentissage et témoignent de ma progression dans différents langages et technologies. Chaque dossier contient des exercices guidés et des défis personnels.",
        coreFeatures: "Repository d'exercices et mini-projets en plusieurs langages (JavaScript, Java, Python, HTML, CSS) pour renforcer mes bases en programmation. Chaque dossier contient des exercices guidés et des défis personnels.",
        technologies: [
            {
                category: "Langages",
                items: [
                    "JavaScript",
                    "Java",
                    "Python",
                    "HTML",
                    "CSS"
                ]
            },
            {
                category: "Concepts",
                items: [
                    "POO",
                    "Algorithmie",
                    "SQL",
                    "DOM"
                ]
            },
            {
                category: "Outils",
                items: [
                    "VS Code",
                    "Git",
                    "Node.js"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/step-by-step-1.jpg",
            "/projects/screenshots/step-by-step-2.jpg"
        ]
    },
    {
        id: 5,
        slug: "project-five",
        title: "Project Five",
        shortDescription: "Projet supplementaire a completer.",
        description: "Projet supplementaire a completer.",
        image: "/projects/portfolio_notion.jpg",
        tags: [
            "Next.js",
            "UI"
        ],
        year: 2025
    },
    {
        id: 6,
        slug: "project-six",
        title: "Project Six",
        shortDescription: "Projet supplementaire a completer.",
        description: "Projet supplementaire a completer.",
        image: "/projects/old_website.jpg",
        tags: [
            "TypeScript",
            "Frontend"
        ],
        year: 2025
    }
];
const featuredProjects = projects.filter((project)=>project.featured);
function getProjectBySlug(slug) {
    return projects.find((project)=>project.slug === slug);
}
function getNextProject(slug) {
    const index = projects.findIndex((project)=>project.slug === slug);
    if (index === -1 || index === projects.length - 1) {
        return null;
    }
    return projects[index + 1];
}
function getPreviousProject(slug) {
    const index = projects.findIndex((project)=>project.slug === slug);
    if (index <= 0) {
        return null;
    }
    return projects[index - 1];
}
}),
"[project]/components/ProjectHero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProjectHero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProjectHero.tsx <module evaluation>", "default");
}),
"[project]/components/ProjectHero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProjectHero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProjectHero.tsx", "default");
}),
"[project]/components/ProjectHero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ProjectHero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ProjectHero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/AboutProject.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/AboutProject.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/AboutProject.tsx <module evaluation>", "default");
}),
"[project]/components/AboutProject.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/AboutProject.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/AboutProject.tsx", "default");
}),
"[project]/components/AboutProject.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/AboutProject.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/AboutProject.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/ProjectScreenshots.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProjectScreenshots.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProjectScreenshots.tsx <module evaluation>", "default");
}),
"[project]/components/ProjectScreenshots.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProjectScreenshots.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProjectScreenshots.tsx", "default");
}),
"[project]/components/ProjectScreenshots.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectScreenshots$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ProjectScreenshots.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectScreenshots$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ProjectScreenshots.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectScreenshots$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/PageEndSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-rsc] (ecmascript)");
;
;
;
;
const PageEndSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function PageEndSection({ title = "Let's work together !", ctaLabel = "CONTACT ME", ctaHref = "mailto:nolann.lescop@outlook.com" }, ref) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            // Titre "Let's work together!" : apparition depuis le bas
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(titleRef.current, {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
            // CTA "CONTACT ME" : apparition depuis le bas avec délai
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(ctaRef.current, {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);
        return ()=>ctx.revert();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: (el)=>{
            sectionRef.current = el;
            if (ref && 'current' in ref) {
                ref.current = el;
            }
        },
        className: "flex flex-col items-center justify-center min-h-[55vh] w-full px-6 mb-20 md:mb-80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cta-reveal w-[98vw] max-w-[2200px] flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: titleRef,
                    className: "font-script text-[clamp(2.6rem,9.5vw,8.5rem)] md:text-[clamp(3.7rem,10.5vw,10.5rem)] tracking-tight leading-none text-[#1f1d1f]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/PageEndSection.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: ctaRef,
                    className: "font-sans text-[clamp(3.9rem,12.5vw,10.5rem)] md:text-[clamp(5.2rem,14.5vw,14.5rem)] uppercase font-black tracking-tight text-[#1f1d1f] md:-mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: ctaHref,
                        className: "relative inline-block group",
                        children: [
                            ctaLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cta-underline absolute left-0 bottom-1 md:bottom-12 h-3 md:h-4 w-full origin-left scale-x-0 bg-[#1f1d1f] transition-transform duration-300 ease-out md:group-hover:scale-x-100"
                            }, void 0, false, {
                                fileName: "[project]/components/PageEndSection.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PageEndSection.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PageEndSection.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PageEndSection.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PageEndSection.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
});
const __TURBOPACK__default__export__ = PageEndSection;
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Page de détail d'un projet
 *
 * Cette page récupère les données du projet via son slug et les transmet
 * au composant ProjectHero pour l'affichage.
 *
 * @page
 * @route /projects/[slug]
 */ __turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AboutProject.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectScreenshots$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectScreenshots.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageEndSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PageEndSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            slug: project.slug
        }));
}
async function ProjectDetailPage({ params }) {
    // Récupération du slug depuis les paramètres de la route
    const { slug } = await params;
    // Récupération des données du projet et des projets adjacent
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug);
    const nextProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextProject"])(slug);
    const previousProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPreviousProject"])(slug);
    // Gestion du cas où le projet n'existe pas
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[#121212] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white",
                children: "Projet non trouvé"
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/projects/[slug]/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    // Affichage du composant ProjectHero avec les données du projet
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                project: project,
                nextProject: nextProject,
                previousProject: previousProject
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            project.overview && project.coreFeatures && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                overview: project.overview,
                coreFeatures: project.coreFeatures,
                technologies: project.technologies || [],
                links: {
                    demo: project.demoLink,
                    github: project.repoLink
                }
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            project.screenshots && project.screenshots.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectScreenshots$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                screenshots: project.screenshots
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex h-[10vh] md:h-[25vh]"
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageEndSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b34953aa._.js.map