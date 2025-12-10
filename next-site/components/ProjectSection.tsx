"use client";

import { useEffect, useRef, useState } from "react";


type Project = {
  id: string;
  name: string;
  url: string;
  images: string[];
};

const projects: Project[] = [
    {
    id: "noheto",
    name: "NOHETO!",
    url: "http://www.noheto.de/",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765404227/BirdBox%20Code/NOHETO%21/Noheto2_lnz78l.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765404373/BirdBox%20Code/NOHETO%21/Noheto_lfneto.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765404372/BirdBox%20Code/NOHETO%21/Noheto3_tncwdd.png",
    ],
  },
  {
    id: "nerdadvisor",
    name: "NERDADVISOR",
    url: "http://www.nerdadvisor.org/",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074249/BirdBox%20Code/NerdAdvisor_New_Blue_-_HOME_k4owb5.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074431/BirdBox%20Code/NerdAdvisor_New_Blue-_CHALLENGE_SHOW_ovntqh.png",
    ],
  },
  {
    id: "gamesground",
    name: "GAMES GROUND",
    url: "https://gamesground.de/",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074643/BirdBox%20Code/Screenshot_2025-06-05_at_00.01.53_vehrbv.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074641/BirdBox%20Code/Screenshot_2025-06-05_at_00.03.23_jeb8gz.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074641/BirdBox%20Code/Screenshot_2025-06-05_at_00.03.42_w1oufc.png",
    ],
  },
  {
    id: "beatemhub",
    name: "BEAT EM HUB",
    url: "https://beatemhub.com/",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074914/BirdBox%20Code/Screenshot_2025-06-05_at_00.07.00_ynlyyy.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074906/BirdBox%20Code/Screenshot_2025-06-05_at_00.07.35_qqkkma.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074908/BirdBox%20Code/Screenshot_2025-06-05_at_00.08.04_u0qv43.png",
    ],
  },
  {
    id: "mossradio",
    name: "MOSS RADIO",
    url: "https://www.mossradio.live/users/sign_in",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-1_qkkyna.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-2_myse5d.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-3_dic6yy.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-4_orkmym.png",
    ],
  },
  {
    id: "otherdesign",
    name: "OTHER DESIGN", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://drive.google.com/file/d/1vX6L3WkvlFNAVc9XMu0XEv1lNnEQ-JiC/view?usp=sharing",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1681731701/BirdBox%20Code/Cinnovate_czff3f.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017696/BirdBox%20Code/pitch-1_x5d1li.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017697/BirdBox%20Code/pitch-2_loawkp.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017697/BirdBox%20Code/pitch-3_thwuka.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1680017697/BirdBox%20Code/pitch-4_gd3qqk.png",
    ],
  },
];

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<string>("nerdadvisor");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsHeaderRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewHeaderRef = useRef<HTMLDivElement>(null);

  // Scroll opacity effect
  useEffect(() => {
    const handleScroll = (section: HTMLElement, header: HTMLElement) => {
       const scrollPosition = section.scrollTop;
       const headerHeight = header.offsetHeight;
       const opacity = 1 - (scrollPosition / headerHeight);
       header.style.opacity = Math.max(0, opacity).toString();
    };

    const pSection = projectsRef.current;
    const pHeader = projectsHeaderRef.current;
    const preSection = previewRef.current;
    const preHeader = previewHeaderRef.current;

    const onProjectScroll = () => pSection && pHeader && handleScroll(pSection, pHeader);
    const onPreviewScroll = () => preSection && preHeader && handleScroll(preSection, preHeader);

    if (pSection) pSection.addEventListener("scroll", onProjectScroll);
    if (preSection) preSection.addEventListener("scroll", onPreviewScroll);

    return () => {
      if (pSection) pSection.removeEventListener("scroll", onProjectScroll);
      if (preSection) preSection.removeEventListener("scroll", onPreviewScroll);
    };
  }, []);

  const toggleMobile = (id: string) => {
    setMobileExpanded(mobileExpanded === id ? null : id);
  };

  const currentProjectData = projects.find((p) => p.id === activeProject) || projects[0];

  return (
    <>
      <div className="hidden md:contents desktop-split-view">
        {/* Projects List Column */}
        <div className="projects-section md:col-span-1 overflow-y-scroll h-[80vh] no-scrollbar px-4" ref={projectsRef}>
          <div className="projects-header transition-opacity duration-100 sticky top-0 bg-[#0D0E11] z-10 pb-4" ref={projectsHeaderRef}>
             <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">CURRENT PROJECTS</h2>
          </div>
          
          {projects.map((proj, idx) => (
             <div key={proj.id} className="flex flex-col w-full">
                <div className="separator w-full flex items-center border-t border-[#9D9D9D] my-2"></div>
                <button 
                  onClick={() => setActiveProject(proj.id)}
                  className={`w-full text-left py-2 px-0 bg-transparent border-none cursor-pointer font-jura text-[1vw] transition-colors duration-100
                    ${activeProject === proj.id 
                       ? "text-[#fd36d4] text-glow-pink" 
                       : "text-[#d9d9d9] hover:text-[#fd36d4] hover:text-glow-pink"
                    }`}
                >
                  {proj.name}
                </button>
                {/* Add spacer at the end if it's the last item to match original layout breathing room */}
                {idx === projects.length - 1 && (
                     <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
                )}
             </div>
          ))}
        </div>

        {/* Preview Column */}
        <div className="preview-section md:col-span-2 overflow-y-scroll h-[80vh] no-scrollbar ml-4" ref={previewRef}>
          <div className="preview-header transition-opacity duration-100 sticky top-0 bg-[#0D0E11] z-10 flex justify-between items-center pb-4" ref={previewHeaderRef}>
            <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">PROJECT PREVIEW</h2>
            <button className="btn-contact w-[10vw] h-[5vh] bg-transparent border-none cursor-pointer">
               <a 
                 href={currentProjectData.url} 
                 target="_blank" 
                 className="text-[#fd36d4] text-glow-pink text-[1vw] no-underline hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-100"
               >
                 VIEW SITE
               </a>
            </button>
          </div>

          <div>
             {currentProjectData.images.map((imgSrc, i) => (
                <img 
                  key={i} 
                  className="w-full rounded-[10px] mb-4" 
                  src={imgSrc} 
                  alt={`${currentProjectData.name} preview ${i+1}`} 
                />
             ))}
             <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
          </div>
        </div>
      </div>

      {/* MOBILE DISPLAY */}
      <div className="md:hidden mob-projects-section mx-8">
         <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center">CURRENT PROJECTS</h2>
         <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-2">Tap To View</p>
         
         {projects.map((proj) => (
            <div key={proj.id}>
               <div className="separator w-full border-t border-[#9D9D9D] my-2"></div>
               <button 
                  onClick={() => toggleMobile(proj.id)}
                  className={`w-full h-[5vh] text-center bg-transparent border-none cursor-pointer font-jura text-[5vw] transition-colors duration-100
                    ${mobileExpanded === proj.id 
                       ? "text-[#fd36d4] text-glow-pink" 
                       : "text-[#FFFBF8]"
                    }`}
               >
                 {proj.name}
               </button>
               
               <div 
                 className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileExpanded === proj.id ? 'max-h-[200vh] opacity-100' : 'max-h-0 opacity-0'}`}
               >
                  <div className="mob-preview-header sticky top-0 flex justify-end w-full my-2">
                     <button className="mob-view-btn w-[20vw] h-[2.5vh] rounded-[10px] bg-transparent border-none">
                        <a href={proj.url} target="_blank" className="font-jura text-[3vw] text-[#fd36d4] text-glow-pink no-underline hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-200">VIEW SITE</a>
                     </button>
                  </div>
                  {proj.images.map((imgSrc, i) => (
                     <img 
                       key={i} 
                       className="w-full rounded-[10px] mb-4" 
                       src={imgSrc} 
                       alt={`${proj.name} mobile preview ${i+1}`} 
                     />
                  ))}
               </div>
            </div>
         ))}
         <div className="separator w-full border-t border-[#9D9D9D] my-2"></div>
      </div>
    </>
  );
}
