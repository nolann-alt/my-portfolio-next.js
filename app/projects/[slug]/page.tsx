/**
 * Page de détail d'un projet
 *
 * Cette page récupère les données du projet via son slug et les transmet
 * au composant ProjectHero pour l'affichage.
 *
 * @page
 * @route /projects/[slug]
 */

import { getProjectBySlug, getNextProject, getPreviousProject } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";

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
    <ProjectHero
      project={project}
      nextProject={nextProject}
      previousProject={previousProject}
    />
  );
}