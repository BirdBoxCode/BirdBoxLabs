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
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">I&apos;m Chris McCarthy.</p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        A creative professional passionate about crafting precise and visually compelling designs that elevate brands, individuals, and events in the digital space.<br/><br/> 
                        With a sharp eye for detail and a natural affinity for software technologies, I combine expertise in graphic design, web development, and sound design to deliver engaging, user-focused digital experiences.<br/><br/> 
                        My journey has been shaped by community collaboration, contributing to cultural and creative projects alongside diverse collectives. Currently, I lead two companies: Beat Em Hub, a gaming events organizer, and NerdAdvisor, a career development platform, while playing a key role in organizing Games Ground, Berlin’s leading gaming festival.<br/><br/>
                        I thrive in both team-oriented and independent roles, balancing a friendly, people-first mindset with the initiative to achieve meaningful results. Driven by a passion for innovation and collaboration, I aim to create solutions that not only meet needs but leave a lasting impression.<br/>
                    </p>
                    <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">WHAT CAN I DO IN TERMS OF WEB DEV?</h2>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-[1em]">Find more details right here on my CV</p>
                    <button className="btn-contact w-[10vw] h-[5vh] bg-transparent border-none cursor-pointer">
                        <a id="cv-btn" href="https://drive.google.com/file/d/156I20RgYZEw9alS3pNiKOiW7s1efudjl/view?usp=sharing" target="_blank" className="text-[#fd36d4] text-glow-pink hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-200 text-[1vw]">CV</a>
                    </button>
                    <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
                </div>
            </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden mob-about-section mx-8 text-center">
            <div className="mob-about-header">
                 <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center">ABOUT ME</h2>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">I&apos;m Chris McCarthy.</p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                        A creative professional passionate about crafting precise and visually compelling designs that elevate brands, individuals, and events in the digital space.<br/><br/> 
                        With a sharp eye for detail and a natural affinity for software technologies, I combine expertise in graphic design, web development, and sound design to deliver engaging, user-focused digital experiences.<br/><br/> 
                        My journey has been shaped by community collaboration, contributing to cultural and creative projects alongside diverse collectives. Currently, I lead two companies: Beat Em Hub, a gaming events organizer, and NerdAdvisor, a career development platform, while playing a key role in organizing Games Ground, Berlin’s leading gaming festival.<br/><br/>
                        I thrive in both team-oriented and independent roles, balancing a friendly, people-first mindset with the initiative to achieve meaningful results. Driven by a passion for innovation and collaboration, I aim to create solutions that not only meet needs but leave a lasting impression.<br/>
                 </p>
                 <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center">WHAT CAN I DO IN TERMS OF WEB DEV?</h2>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-[1em]">Find more details right here on my CV</p>
                 <button className="btn-contact w-[20vw] h-[4vh] bg-transparent border-none cursor-pointer mx-auto block">
                     <a id="cv-btn" href="https://drive.google.com/file/d/1QWTjVdoovBST_zC-85nUxjKhQ3FDrFji/view?usp=sharing" target="_blank" className="text-[#fd36d4] text-glow-pink hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-200 text-[3vw]">CV</a>
                 </button>
            </div>
             <br/><br/><br/><br/>
        </div>
    </div>
  );
}
