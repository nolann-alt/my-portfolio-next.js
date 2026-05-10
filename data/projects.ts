export type ProjectTech = {
    category: string;
    items: string[];
};

export type ProjectLinks = {
    demo?: string;
    github?: string;
};

export type Project = {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    tags: string[];
    year: number;
    repoLink?: string;
    demoLink?: string;
    hoverVideo?: string;
    featured?: boolean;
    // AboutProject content
    overview?: string;
    coreFeatures?: string;
    technologies?: ProjectTech[];
    links?: ProjectLinks;
    // Screenshots
    screenshots?: string[];
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "skills-portfolio",
        title: "Skills Portfolio",
        shortDescription: "Portfolio de competences pour le BUT Informatique.",
        description:
            "Portfolio de competences pour le BUT Informatique a l'IUT de Vannes, avec des preuves de progression, SAEs et reflexions personnelles.",
        image: "/projects/portfolio_notion.jpg",
        tags: ["Notion", "Design"],
        year: 2025,
        repoLink: "#",
        demoLink:
            "https://lescop-nolann.notion.site/Portfolio-de-comp-ences-BUT-informatique-IUT-de-Vannes-1bc65c526a3880dd8b51caef7c8637ae",
        hoverVideo: "/projects/previews/portfolio.mp4",
        featured: true,
        overview: "Ce portfolio a été créé pour répondre aux exigences du BUT Informatique à l'IUT de Vannes. Il met en valeur mes compétences techniques à travers des projets concrets, des preuves de progression et des réflexions personnelles sur mon parcours.",
        coreFeatures: "Portfolio Notion présentant comment j'ai justifié chaque compétence du BUT Informatique à travers les SAE (Situation d'Apprentissage et d'Évaluation) realisés en groupe pendant les 3 années du BUT. Chaque compétence est démontrée par des projets concrets avec preuves de progression, analyses réflexives et évaluations.",
        technologies: [
            {
                category: "Frontend",
                items: ["Next.js 16", "TypeScript", "React", "Tailwind CSS"]
            },
            {
                category: "Animations",
                items: ["GSAP", "ScrollTrigger", "SplitText"]
            },
            {
                category: "Icons & Tools",
                items: ["Lucide React", "Google Fonts"]
            },
            {
                category: "Deployment",
                items: ["GitHub Pages", "GitHub Actions"]
            }
        ],
        screenshots: [
            "/projects/screenshots/portfolio_notion/notion_1.png",
            "/projects/screenshots/portfolio_notion/notion_2.png",
        ],
    },
    {
        id: 2,
        slug: "old-portfolio-website",
        title: "Old Portfolio Website",
        shortDescription: "Mon ancien portfolio personnel.",
        description:
            "Mon premier portfolio personnel pour presenter mes projets, mes competences et mon parcours en developpement front-end.",
        image: "/projects/old_website.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
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
                items: ["HTML5", "CSS3", "JavaScript"]
            },
            {
                category: "Design",
                items: ["CSS Grid", "Flexbox", "Media Queries"]
            },
            {
                category: "Deployment",
                items: ["GitHub Pages"]
            }
        ],
        screenshots: [
            "/projects/screenshots/old-portfolio-1.jpg",
            "/projects/screenshots/old-portfolio-2.jpg",
        ],
    },
    {
        id: 3,
        slug: "grundy-game",
        title: "Grundy Game",
        shortDescription: "Comparaison d'algorithmes sur le Grundy Game.",
        description:
            "Projet universitaire de comparaison et optimisation d'algorithmes en Java avec analyse de performance et approche mathematique.",
        image: "/projects/Grundy.jpg",
        tags: ["Java", "Algorithmie"],
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
                items: ["Java"]
            },
            {
                category: "Concepts",
                items: ["Algorithmie", "Théorie des jeux", "Analyse complexité"]
            },
            {
                category: "Outils",
                items: ["Eclipse", "JUnit (tests)"]
            }
        ],
        screenshots: [
            "/projects/screenshots/grundy-game-1.jpg",
            "/projects/screenshots/grundy-game-2.jpg",
        ],
    },
    {
        id: 4,
        slug: "step-by-step",
        title: "Step-by-Step",
        shortDescription: "Repertoire d'exercices et mini-projets.",
        description:
            "Collection d'exercices et mini-projets pour renforcer mes bases en JavaScript, Java, HTML, CSS et Python.",
        image: "/projects/step-by-step.jpg",
        tags: ["JavaScript", "Java", "Python"],
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
                items: ["JavaScript", "Java", "Python", "HTML", "CSS"]
            },
            {
                category: "Concepts",
                items: ["POO", "Algorithmie", "SQL", "DOM"]
            },
            {
                category: "Outils",
                items: ["VS Code", "Git", "Node.js"]
            }
        ],
        screenshots: [
            "/projects/screenshots/step-by-step-1.jpg",
            "/projects/screenshots/step-by-step-2.jpg",
        ],
    },
    {
        id: 5,
        slug: "project-five",
        title: "Project Five",
        shortDescription: "Projet supplementaire a completer.",
        description: "Projet supplementaire a completer.",
        image: "/projects/portfolio_notion.jpg",
        tags: ["Next.js", "UI"],
        year: 2025,
    },
    {
        id: 6,
        slug: "project-six",
        title: "Project Six",
        shortDescription: "Projet supplementaire a completer.",
        description: "Projet supplementaire a completer.",
        image: "/projects/old_website.jpg",
        tags: ["TypeScript", "Frontend"],
        year: 2025,
    },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
    const index = projects.findIndex((project) => project.slug === slug);
    if (index === -1 || index === projects.length - 1) {
        return null;
    }
    return projects[index + 1];
}

export function getPreviousProject(slug: string) {
    const index = projects.findIndex((project) => project.slug === slug);
    if (index <= 0) {
        return null;
    }
    return projects[index - 1];
}
