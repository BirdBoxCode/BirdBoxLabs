"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;

    if (!section || !header) return;

    const handleScroll = () => {
      const scrollPosition = section.scrollTop;
      const headerHeight = header.offsetHeight;
      const opacity = 1 - (scrollPosition / headerHeight);
      header.style.opacity = Math.max(0, opacity).toString();
    };

    section.addEventListener("scroll", handleScroll);
    return () => section.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mob:mb-8 md:mb-0">
        {/* Desktop Layout */}
        <div className="hidden md:block about-section md:col-span-1 overflow-y-scroll h-[80vh] no-scrollbar pr-4 transition-all" ref={sectionRef}>
            <div className="about-wrapper">
                <div className="about-header transition-opacity duration-100" ref={headerRef}>
                    <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">ABOUT ME</h2>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        I’m Chris McCarthy — a creative developer and designer building clean, expressive and user-focused digital experiences.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        My work sits at the intersection of front-end development, visual design, and sound-driven storytelling. With a background in design and communications, I approach every project with an emphasis on clarity, usability, and aesthetic precision. I enjoy transforming ideas into polished, functional interfaces that feel intuitive and visually engaging.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-2">
                        Over the past years, I’ve contributed to a diverse range of digital projects, from websites for healthcare, culture and education, to playful interactive experiences for events and creative communities. My recent work includes:
                    </p>
                    <ul className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4 list-disc list-outside ml-4">
                        <li className="mb-2"><strong>Games Ground</strong> — co-developing a large-scale, dynamic Webflow ecosystem with custom components, scroll interactions and cross-linked CMS structures.</li>
                        <li className="mb-2"><strong>Vriendjes</strong> — designing and building a full Webflow experience with a complex booking system, custom JavaScript interactions, and playful motion.</li>
                        <li className="mb-2"><strong>NOHETO!</strong> — delivering a crisp, multilingual website for a pharmaceutical consultancy with thoughtful layout animation and content refinement.</li>
                        <li className="mb-2"><strong>NerdAdvisor</strong> — supporting front-end development, UI/UX and product direction for a gaming career platform.</li>
                    </ul>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        Alongside freelancing, I co-run Beat Em Hub, a gaming events company, and contribute to NerdAdvisor in its prototype phase while helping organize Games Ground, Berlin’s leading gaming festival. Working across different teams and creative environments has shaped my collaborative approach — friendly, problem-solving, and curiosity-driven.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        I enjoy roles that blend technical craft with creative direction, and I’m constantly learning: refining my React and Next.js skills, improving workflows, and experimenting with tools that make the web feel more alive.
                    </p>

                    <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">WHAT CAN I DO?</h2>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-2">
                        I design and build digital experiences that balance creativity with structure.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-[1em]">
                        For a full breakdown of my capabilities, tools and experience, check my CV.
                    </p>
                    <button className="btn-contact w-[10vw] h-[5vh] bg-transparent border-none cursor-pointer">
                        <a id="cv-btn" href="https://drive.google.com/file/d/1QWTjVdoovBST_zC-85nUxjKhQ3FDrFji/view?usp=sharing" target="_blank" className="text-[#fd36d4] text-glow-pink hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-200 text-[1vw]">CV</a>
                    </button>
                    <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
                </div>
            </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden mob-about-section mx-8 text-center">
            <div className="mob-about-header">
                 <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center">ABOUT ME</h2>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    I’m Chris McCarthy — a creative developer and designer building clean, expressive and user-focused digital experiences.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    My work sits at the intersection of front-end development, visual design, and sound-driven storytelling. With a background in design and communications, I approach every project with an emphasis on clarity, usability, and aesthetic precision. I enjoy transforming ideas into polished, functional interfaces that feel intuitive and visually engaging.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-2">
                    Over the past years, I’ve contributed to a diverse range of digital projects, from websites for healthcare, culture and education, to playful interactive experiences for events and creative communities. My recent work includes:
                 </p>
                 <ul className="font-jura font-light text-[#FFFBF8] text-[1em] text-left mb-4 list-disc list-outside ml-6 inline-block">
                    <li className="mb-2"><strong>Games Ground</strong> — co-developing a large-scale, dynamic Webflow ecosystem with custom components, scroll interactions and cross-linked CMS structures.</li>
                    <li className="mb-2"><strong>Vriendjes</strong> — designing and building a full Webflow experience with a complex booking system, custom JavaScript interactions, and playful motion.</li>
                    <li className="mb-2"><strong>NOHETO!</strong> — delivering a crisp, multilingual website for a pharmaceutical consultancy with thoughtful layout animation and content refinement.</li>
                    <li className="mb-2"><strong>NerdAdvisor</strong> — supporting front-end development, UI/UX and product direction for a gaming career platform.</li>
                 </ul>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    Alongside freelancing, I co-run Beat Em Hub, a gaming events company, and contribute to NerdAdvisor in its prototype phase while helping organize Games Ground, Berlin’s leading gaming festival. Working across different teams and creative environments has shaped my collaborative approach — friendly, problem-solving, and curiosity-driven.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    I enjoy roles that blend technical craft with creative direction, and I’m constantly learning: refining my React and Next.js skills, improving workflows, and experimenting with tools that make the web feel more alive.
                 </p>
                 <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center">WHAT CAN I DO?</h2>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-2">
                    I design and build digital experiences that balance creativity with structure.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-[1em]">
                    For a full breakdown of my capabilities, tools and experience, check my CV.
                 </p>
                 <button className="btn-contact w-[20vw] h-[4vh] bg-transparent border-none cursor-pointer mx-auto block">
                     <a id="cv-btn" href="https://drive.google.com/file/d/1QWTjVdoovBST_zC-85nUxjKhQ3FDrFji/view?usp=sharing" target="_blank" className="text-[#fd36d4] text-glow-pink hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-200 text-[3vw]">CV</a>
                 </button>
            </div>
             <br/><br/><br/><br/>
        </div>
    </div>
  );
}
