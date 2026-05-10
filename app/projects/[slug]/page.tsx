/**
 * Page de détail d'un projet
 *
 * Cette page récupère les données du projet via son slug et les transmet
 * au composant ProjectHero pour l'affichage.
 *
 * @page
 * @route /projects/[slug]
 */

import { projects, getProjectBySlug, getNextProject, getPreviousProject } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";
import AboutProject from "@/components/AboutProject";
import ProjectScreenshots from "@/components/ProjectScreenshots";
import ProjectNavigation from "@/components/ProjectNavigation";
import PageEndSection from "@/components/PageEndSection";

// Génère les paramètres statiques pour tous les projets (nécessaire pour static export)
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Composant principal de la page de projet
 * @async - Récupère les données du projet côté serveur
 * @param {Promise<{ slug: string }>} params - Paramètre de route contenant le slug du projet
 */
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Récupération du slug depuis les paramètres de la route
  const { slug } = await params;

  // Récupération des données du projet et des projets adjacent
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(slug);
  const previousProject = getPreviousProject(slug);

  // Gestion du cas où le projet n'existe pas
  if (!project) {
    return (
      <main className="min-h-screen bg-[#121212] flex items-center justify-center">
        <p className="text-white">Projet non trouvé</p>
      </main>
    );
  }

  // Affichage du composant ProjectHero avec les données du projet
  return (
    <>
      <ProjectHero
        project={project}
        nextProject={nextProject}
        previousProject={previousProject}
      />
      {project.overview && project.coreFeatures && (
        <AboutProject
          overview={project.overview}
          coreFeatures={project.coreFeatures}
          technologies={project.technologies || []}
          links={{
            demo: project.demoLink,
            github: project.repoLink,
          }}
        />
      )}
      {project.screenshots && project.screenshots.length > 0 && (
        <ProjectScreenshots screenshots={project.screenshots} />
      )}
      <ProjectNavigation
        nextProject={nextProject ? { slug: nextProject.slug, title: nextProject.title, image: nextProject.image } : null}
        previousProject={previousProject ? { slug: previousProject.slug, title: previousProject.title, image: previousProject.image } : null}
      />
      <div className="w-full flex h-[10vh] md:h-[25vh]"></div>
      <PageEndSection />
    </>
  );
}