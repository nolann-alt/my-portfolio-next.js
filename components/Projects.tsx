import Title from "@/components/Title";
import {Github, Video} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Skills Portfolio – BUT Informatique, IUT of Vannes",
        description: "Portfolio showcasing my work, skills, and reflections as part of the BUT Informatique program at IUT of Vannes. It includes proof of learning (SAEs), self-assessments, and my progress throughout the BUT Informatique program.",
        technologies: ["/techno/notion.png"],
        demoLink: "https://lescop-nolann.notion.site/Portfolio-de-comp-tences-BUT-informatique-IUT-de-Vannes-1bc65c526a3880dd8b51caef7c8637ae",
        repoLink: "#",
        image: "/projects/portfolio_notion.jpg"
    },
    {
        id: 2,
        title: "Old Portfolio Website",
        description: "My first personal portfolio website built to showcase my projects, skills, and background. " +
            "It represents my early experience in front-end development and serves as the basis for my current, " +
            "more advanced portfolio.",
        technologies: ["/techno/html.svg", "/techno/css.svg", "/techno/js.svg"],
        demoLink: "https://nolann-alt.github.io/site-nolann-lescop/",
        repoLink: "https://github.com/nolann-alt/site-nolann-lescop",
        image: "/projects/old_website.jpg"
    },
    {
        id: 3,
        title: "SAE 1.02 - Algorithm Comparison (Grundy Game)",
        description: "University project focused on comparing and optimizing different algorithmic approaches in Java. " +
            "The goal was to simulate and analyze the Grundy game using several algorithmic versions, measure their performance, " +
            "and apply mathematical theorems to improve efficiency.",
        technologies: ["/techno/java.svg"],
        demoLink: "https://www.youtube.com/watch?v=hvCCPTWwUAY",
        repoLink: "https://github.com/nolann-alt/SAE_S1.02",
        image: "/projects/Grundy.jpg"
    },
    {
        id: 4,
        title: "Step‑by‑Step Practice Repository",
        description: "A collection of exercises, mini‑projects and practice code to strengthen my development skills in JavaScript, Java, HTML, CSS and Python.",
        technologies: ["/techno/js.svg", "/techno/java.svg", "/techno/html.svg", "/techno/css.svg", "/techno/python.svg"],
        demoLink: "#",
        repoLink: "https://github.com/nolann-alt/step-by-step",
        image: "/projects/step-by-step.jpg"
    }
]

const Projects : React.FC = () => {
    return (
        <section id="projects" className="relative mt-10 text-white mb-10 md:mb-32">
            <Title title="My Projects"/>
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="border  border-[#C77DFF] p-5 h-fit rounded-xl shadow-lg">
                        <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover"/>
                        <div>
                            <h1 className="my-2 font-bold">{project.title}</h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap my-3 gap-2 ">
                            {project.technologies.map((tech, idx) => (
                                <img key={idx} src={tech} alt={tech} className="h-12 w-12 object-cover border border-[#C77DFF] rounded-xl p-1"/>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn bg-[#C77DFF] w-2/3 text-white" href={project.demoLink}>
                                Demo
                                <Video className="w-4"/>
                            </a>

                            <a className="btn  w-1/3 ml-2 text-white" href={project.repoLink}>
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