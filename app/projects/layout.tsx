/**
 * Layout des pages projets
 * @description Enveloppe commune pour les pages de projets (min-height)
 * @layout
 */

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen">{children}</div>;
}