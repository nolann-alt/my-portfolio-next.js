"use client"
import {Menu, X} from "lucide-react";
import {useState} from "react";

export const Navbar: React.FC = () => {
    // Utilisation d'un state pour gérer l'ouverture du menu, un state permet de re-render le composant
    // c'est à dire de le rafraîchir pour appliquer les changements
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="absolute md:fixed top-4 left-0 w-full z-50 grid grid-cols-2 md:grid-cols-3 items-center p-5 md:px-[3%]">
            <a href="#" className="font-bold text-3xl md:text-2xl text-[#EDEDED] whitespace-nowrap">
                Nolann's <span className="text-[#C77DFF] drop-shadow-[0_0_15px_#C77DFF]">Portfolio</span>
            </a>

            <button className="btn btn-md btn-ghost text-2xl hidden md:block text-white md:justify-self-center border border-white/30 rounded-xl" onClick={() => setMenuOpen(true)}>
                MENU
            </button>
            <button className="btn btn-md btn-ghost md:hidden text-xl text-white justify-self-end" onClick={() => setMenuOpen(true)}>
                <Menu size={35}/>
            </button>

            {/* Menu pc uniquement */}
            <div className={`fixed inset-0 bg-black text-white flex flex-col items-center 
            justify-center transition-transform duration-500 ease-in-out 
            ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>

                <button className="absolute btn btn-md btn-ghost text-2xl top-5" onClick={() => setMenuOpen(false)}>
                    CLOSE
                </button>

            </div>

            {/* Menu mobile uniquement */}
            <div
                className={`fixed inset-0 bg-black text-white flex flex-col items-center 
                justify-center transition-transform duration-500 ease-in-out md:hidden
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button className="btn btn-md btn-ghost absolute top-8 right-8" onClick={() => setMenuOpen(false)}>
                    <X size={35}/>
                </button>
            </div>

            <ul className="hidden md:flex justify-end space-x-4">
                {/*<li>*/}
                {/*    <a href="#" className="btn btn-sm btn-ghost text-xl">*/}
                {/*        Home*/}
                {/*    </a>*/}
                {/*</li>*/}
                <li>
                    <a href="#hero" className="btn btn-sm btn-ghost text-xl">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#experiences" className="btn btn-sm btn-ghost text-xl">
                        Experiences
                    </a>
                </li>
                <li>
                    <a href="#projects" className="btn btn-sm btn-ghost text-xl">
                        Projects
                    </a>
                </li>
                {/*}
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost text-xl">
                        About
                    </a>
                </li>
                {*/}
            </ul>
        </nav>
    );
}

