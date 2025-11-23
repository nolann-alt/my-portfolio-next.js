const Navbar: React.FC = () => {
    return (
        <nav className="absolute md:fixed top-4 left-0 w-full z-50 flex justify-center md:justify-between items-center p-5 md:px-[15%]">
            <a href="#" className="font-bold text-3xl md:text-2xl text-[#EDEDED]">
                Nolann's <span className="text-[#C77DFF] drop-shadow-[0_0_15px_#C77DFF]">Portfolio</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#" className="btn btn-sm btn-ghost text-xl">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="btn btn-sm btn-ghost text-xl">
                        About
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

export default Navbar;