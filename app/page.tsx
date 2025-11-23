"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Home from "@/components/Home";


function App() {
    return (
        <div className="relative">
            <Home />
            <div className="p-5 md:px-[15%] space-y-20">
                <Hero />
            </div>
            <div>
                <About />
            </div>
            <div className="p-5 md:px-[15%] space-y-20">
                <Experiences />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
