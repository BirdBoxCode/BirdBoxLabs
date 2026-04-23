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
                    <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4 uppercase">About</h2>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        I’m a creative developer and designer dedicated to building clean, expressive, and user-focused digital experiences.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        My work sits at the intersection of front-end engineering, visual design, and narrative-driven storytelling. With a background in design and communications, I approach every project with an emphasis on clarity, usability, and aesthetic precision. I enjoy transforming ideas into polished, functional interfaces that feel intuitive and visually engaging.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        From high-performance healthcare platforms to experimental interactive journeys, I specialize in bridging the gap between design intent and technical execution.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-2">
                        Over the past years, I’ve contributed to a diverse range of digital projects, from websites for healthcare, culture and education, to playful interactive experiences for events and creative communities.
                    </p>

                    <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4 uppercase">Selected Work</h2>
                    <ul className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4 list-disc list-outside ml-4">
                        <li className="mb-2"><strong>Ninaro</strong> <span className="text-[#fd36d4]">(Coming Soon)</span> — A bespoke digital experience crafted for a visionary artist and tattooist. Moving beyond traditional layouts, Ninaro features a uniquely structured design language built to translate a specific creative vision into a fluid, interactive reality.</li>
                        <li className="mb-2"><strong>Kino Games</strong> — Built an immersive Next.js and Sanity CMS experience that breaks traditional UX conventions to deliver a cinematic, narrative-driven journey. Developed a custom CI/CD pipeline and integrated Notion APIs to streamline studio operations and inbound inquiries.</li>
                        <li className="mb-2"><strong>Games Ground</strong> — Co-developed a large-scale Webflow ecosystem, with custom JavaScript components and relational CMS architectures to handle dynamic festival data.</li>
                        <li className="mb-2"><strong>Vriendjes</strong> — designing and building a full Webflow experience with a complex booking system, custom JavaScript interactions, and playful motion.</li>
                        <li className="mb-2"><strong>NOHETO!</strong> — delivering a crisp, multilingual website for a pharmaceutical consultancy with thoughtful layout animation and content refinement.</li>
                        <li className="mb-2"><strong>NerdAdvisor</strong> — Steering front-end development and UI/UX product direction for a gaming-career platform, focusing on scalable component libraries and user retention loops.</li>
                    </ul>

                    <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4 uppercase">What I Do</h2>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-4">
                        I design and build digital experiences that balance visual creativity with a solid technical foundation. Whether I'm working with a React-based stack or a customized CMS, I focus on performance, brand expression, maintainable code.
                    </p>
                    <p className="font-jura font-light text-[#FFFBF8] text-[1vw] mb-[1em]">
                        Full breakdown of tools and experience? <a href="https://drive.google.com/file/d/1HIt5OOZioMAZT7CY-y3djO8mAZhHhEMT/view?usp=sharing" target="_blank" className="text-[#fd36d4] hover:text-[#09FFD8] transition-colors duration-200">Check my CV</a>.
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
                 <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center uppercase">About</h2>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    I’m a creative developer and designer dedicated to building clean, expressive, and user-focused digital experiences.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    My work sits at the intersection of front-end engineering, visual design, and narrative-driven storytelling. With a background in design and communications, I approach every project with an emphasis on clarity, usability, and aesthetic precision. I enjoy transforming ideas into polished, functional interfaces that feel intuitive and visually engaging.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    From high-performance healthcare platforms to experimental interactive journeys, I specialize in bridging the gap between design intent and technical execution.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-2">
                    Over the past years, I’ve contributed to a diverse range of digital projects, from websites for healthcare, culture and education, to playful interactive experiences for events and creative communities.
                 </p>

                 <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center uppercase">Selected Work</h2>
                 <ul className="font-jura font-light text-[#FFFBF8] text-[1em] text-left mb-4 list-disc list-outside ml-6 inline-block">
                    <li className="mb-2"><strong>Ninaro</strong> <span className="text-[#fd36d4]">(Coming Soon)</span> — A bespoke digital experience crafted for a visionary artist and tattooist. Moving beyond traditional layouts, Ninaro features a uniquely structured design language built to translate a specific creative vision into a fluid, interactive reality.</li>
                    <li className="mb-2"><strong>Kino Games</strong> — Built an immersive Next.js and Sanity CMS experience that breaks traditional UX conventions to deliver a cinematic, narrative-driven journey. Developed a custom CI/CD pipeline and integrated Notion APIs to streamline studio operations and inbound inquiries.</li>
                    <li className="mb-2"><strong>Games Ground</strong> — Co-developed a large-scale Webflow ecosystem, with custom JavaScript components and relational CMS architectures to handle dynamic festival data.</li>
                    <li className="mb-2"><strong>Vriendjes</strong> — designing and building a full Webflow experience with a complex booking system, custom JavaScript interactions, and playful motion.</li>
                    <li className="mb-2"><strong>NOHETO!</strong> — delivering a crisp, multilingual website for a pharmaceutical consultancy with thoughtful layout animation and content refinement.</li>
                    <li className="mb-2"><strong>NerdAdvisor</strong> — Steering front-end development and UI/UX product direction for a gaming-career platform, focusing on scalable component libraries and user retention loops.</li>
                 </ul>

                 <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center uppercase">What I Do</h2>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-4">
                    I design and build digital experiences that balance visual creativity with a solid technical foundation. Whether I'm working with a React-based stack or a customized CMS, I focus on performance, brand expression, maintainable code.
                 </p>
                 <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-[1em]">
                    Full breakdown of tools and experience? <a href="https://drive.google.com/file/d/1HIt5OOZioMAZT7CY-y3djO8mAZhHhEMT/view?usp=sharing" target="_blank" className="text-[#fd36d4] hover:text-[#09FFD8] transition-colors duration-200">Check my CV</a>.
                 </p>
            </div>
             <br/><br/><br/><br/>
        </div>
    </div>
  );
}
