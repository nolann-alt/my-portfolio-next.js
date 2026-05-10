"use client";

import Intro from "@/components/Intro";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import TextParagraph from "@/components/TextParagraph";
import PageEndSection from "@/components/PageEndSection";


function App() {
    return (
        <div className="relative">
            <Intro />
            <div className="w-[98vw] mx-auto flex justify-between">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"></div>
            </div>
            <Hero/>
            <div className="w-[98vw] mx-auto flex justify-between">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"></div>
            </div>
            <FeaturedProjects />
            <TextParagraph />
            <div className="w-full flex h-[10vh] md:h-[25vh]"></div>
            <PageEndSection />
        </div>
    );
}

export default App;
