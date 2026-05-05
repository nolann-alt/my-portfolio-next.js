import {forwardRef} from "react";

type PageEndSectionProps = {
    title?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

const PageEndSection = forwardRef<HTMLElement, PageEndSectionProps>(function PageEndSection(
    {
        title = "Let's work together !",
        ctaLabel = "CONTACT ME",
        ctaHref = "mailto:nolann.lescop@outlook.com",
    },
    ref
) {
    return (
        <section ref={ref} className="flex flex-col items-center justify-center min-h-[55vh] w-full px-6 mb-20 md:mb-80">
            <div className="cta-reveal w-[98vw] max-w-[2200px] flex flex-col items-center text-center">
                <p className="font-script text-[clamp(2.6rem,9.5vw,8.5rem)] md:text-[clamp(3.7rem,10.5vw,10.5rem)] tracking-tight leading-none text-[#1f1d1f]">
                    {title}
                </p>
                <h2 className="font-sans text-[clamp(3.9rem,12.5vw,10.5rem)] md:text-[clamp(5.2rem,14.5vw,14.5rem)] uppercase font-black tracking-tight text-[#1f1d1f] md:-mt-10">
                    <a href={ctaHref} className="relative inline-block group">
                        {ctaLabel}
                        <span className="cta-underline absolute left-0 bottom-1 md:bottom-12 h-3 md:h-4 w-full origin-left scale-x-0 bg-[#1f1d1f] transition-transform duration-300 ease-out md:group-hover:scale-x-100"></span>
                    </a>
                </h2>
            </div>
        </section>
    );
});

export default PageEndSection;
