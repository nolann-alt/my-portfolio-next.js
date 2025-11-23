import {Mail} from "lucide-react";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative md:h-screen flex flex-col-reverse md:flex-row justify-center items-center my-10 md:my-0">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Hi there, <br/> I'm Nolann <span className="text-[#C77DFF] drop-shadow-[0_0_15px_#C77DFF]">LESCOP</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    I'm a student at the IUT in Vannes in the second year of a computer  <br/>
                    science degree, and I'm looking for an internship to apply <br/>
                    my knowledge and develop my skills in the IT field.
                </p>
                <a href="/CV_Stage.pdf"
                   target="_blank" // nouvelle fenêtre
                   rel="noopener noreferrer"
                   className="btn bg-[#C77DFF] md:w-fit text-white">
                    <Mail className="w-5 h-5"/>
                    Contact me
                </a>
            </div>
            <div className="md:ml-60">
                <img src="/profil.jpg" alt="profil"
                     className="w-96 h-96 object-cover border-8 border-[#C77DFF] shadow-xl"
                     style={{
                         borderRadius : "65% 35% 25% 75% / 63% 71% 29% 37% "
                     }}
                />
            </div>
        </section>
    );
}

export default Hero;

