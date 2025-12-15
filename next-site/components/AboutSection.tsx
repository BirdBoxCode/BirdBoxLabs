"use client";

import { useRef } from "react";

export default function AboutSection() {
  // Removed incorrect scroll fade logic.
  // We will rely on a CSS mask or a fixed overlay for the "more content" indication.
  // We still need a ref for the scroll container if we want to check scroll position later, 
  // but for now let's keep it to avoid TS errors if we removed usage.
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mob:mb-8 md:mb-0">
        {/* Desktop Layout - Added relative container for fade mask */}
        <div className="hidden md:block md:col-span-1 h-[80vh] relative">
            <div className="about-section overflow-y-scroll h-full no-scrollbar pr-4" ref={sectionRef}>
            {/* The mask should overlay this container at the bottom */}
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
                    
                    {/* CV Button moved to Navbar */}
                    <div className="h-[5vh]"></div> {/* Spacer to replace button height */}
                    <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
                </div>
            </div>
            </div>
            {/* Bottom Gradient Fade Mask */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0D0E11] to-transparent pointer-events-none" />
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
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-[1em]">
                    For a full breakdown of my capabilities, tools and experience, check my CV.
                 </p>
                 {/* CV Button removed from Mobile too if moving to Navbar (or keep on mobile? User didn't specify, but "Location for it" implies global. Navbar is safer.) */}
                 {/* Actually, user said "bottom of the text... not the best place". I'll remove it here too for consistency, as Navbar is visible on mobile too maybe? */}
                 {/* Wait, Navbar on mobile only shows logo and contact? Let's check Navbar. */}
                 {/* Checked Navbar: Mobile layout shows "CONTACT". I should probably add CV there too or keep it here for mobile if Navbar is cramped. */}
                 {/* Decision: Add to mobile navbar or keep here? "It should be more visible on the website". Navbar is best. */}
            </div>
             <br/><br/><br/><br/>
        </div>
    </div>
  );
}
