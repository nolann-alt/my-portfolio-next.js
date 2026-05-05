import Title from "@/components/Title";
import Link from "next/link";
import {Github, Video} from "lucide-react";
import {projects} from "@/data/projects";

const Projects : React.FC = () => {
    return (
        <section id="projects" className="relative mt-10 mb-10 md:mb-32">
            <Title title="My Projects"/>
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="border border-[#1e1f1f] p-5 h-fit rounded-xl shadow-lg">
                        <Link href={`/projects/${project.slug}`}>
                            <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover"/>
                        </Link>
                        <div>
                            <h1 className="my-2 font-bold">{project.title}</h1>
                            <p className="text-sm">{project.shortDescription}</p>
                        </div>
                        <div className="flex flex-wrap my-3 gap-2 ">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs border border-[#1e1f1f] rounded-xl px-2 py-1 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn w-2/3 border border-[#1e1f1f] text-[#1f1d1f]" href={project.demoLink || "#"}>
                                Demo
                                <Video className="w-4"/>
                            </a>

                            <a className="btn w-1/3 ml-2 text-[#1f1d1f]" href={project.repoLink || "#"}>
                                <Github className="w-4"/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Projects;