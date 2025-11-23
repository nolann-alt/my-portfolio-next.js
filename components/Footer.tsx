import {Github, Linkedin, Youtube} from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative footer footer-horizontal footer-center bg-black/30 content p-10">
            <aside>
                <p className="font-bold">
                    <a href="#" className="font-bold text-2xl text-[#EDEDED]">
                        Nolann's <span className="text-[#C77DFF] drop-shadow-[0_0_15px_#C77DFF]">Portfolio</span>
                    </a>
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                   <a href="https://www.youtube.com/@NolannLESCOP" target="_blank" rel="noopener noreferrer">
                       <Youtube className="w-6 h-6 text-current"/>
                   </a>
                    <a href="https://github.com/nolann-alt" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-current"/>
                    </a>
                    <a href="https://www.linkedin.com/in/nolann-lescop-00427233a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current"/>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;