import Link from "next/link";
import Image from "next/image";
import {notFound} from "next/navigation";
import {Github, Video} from "lucide-react";
import {getProjectBySlug, projects} from "@/data/projects";

type ProjectDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({params}: ProjectDetailPageProps) {
    const {slug} = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <section className="w-[98vw] mx-auto px-4 md:px-10 pt-36 md:pt-44 pb-16 md:pb-24 text-[#1f1d1f]">
            <div className="max-w-[1600px] mx-auto">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 uppercase text-xs md:text-sm tracking-[0.2em] font-bold border-b border-[#1f1d1f] pb-1"
                >
                    Back to projects
                </Link>

                <header className="mt-8 md:mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
                    <div>
                        <h1 className="font-sans text-4xl md:text-7xl lg:text-8xl leading-[0.95] uppercase font-black tracking-tight">
                            {project.title}
                        </h1>
                        <p className="mt-5 md:mt-7 text-base md:text-xl max-w-3xl leading-relaxed">
                            {project.description}
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 border border-[#1f1d1f]/40 rounded-full text-xs md:text-sm uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
                            {project.demoLink && project.demoLink !== "#" && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#1f1d1f] uppercase text-xs md:text-sm font-bold"
                                >
                                    Live demo
                                    <Video className="w-4" />
                                </a>
                            )}
                            {project.repoLink && project.repoLink !== "#" && (
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#1f1d1f] uppercase text-xs md:text-sm font-bold"
                                >
                                    Source code
                                    <Github className="w-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative min-h-[320px] h-[60vh] max-h-[760px] border border-[#1f1d1f]/20 bg-[#0f0f10] overflow-hidden lg:ml-auto lg:w-full lg:max-w-[760px]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 760px"
                        />
                    </div>
                </header>
            </div>
        </section>
    );
}
