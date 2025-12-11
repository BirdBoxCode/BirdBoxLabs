"use client";

import { useEffect, useRef, useState } from "react";


type ProjectCategory = "web" | "pitch";

type Project = {
  id: string;
  name: string;
  url: string;
  category: ProjectCategory;
  images: string[];
};

const projects: Project[] = [
    {
    id: "gamesground",
    name: "GAMES GROUND",
    url: "https://gamesground.de/",
    category: "web",
    images: [
            "https://res.cloudinary.com/depkh8amy/image/upload/v1765446872/BirdBox%20Code/Games%20Ground/Games_Ground_jiaxke.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446874/BirdBox%20Code/Games%20Ground/Games_Ground_2_gterqn.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074643/BirdBox%20Code/Screenshot_2025-06-05_at_00.01.53_vehrbv.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074641/BirdBox%20Code/Games%20Ground/Screenshot_2025-06-05_at_00.03.42_w1oufc.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074641/BirdBox%20Code/Games%20Ground/Screenshot_2025-06-05_at_00.03.23_jeb8gz.png",
    ],
  },
    {
    id: "noheto",
    name: "NOHETO!",
    url: "http://www.noheto.de/",
    category: "web",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765404227/BirdBox%20Code/NOHETO%21/Noheto2_lnz78l.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765404373/BirdBox%20Code/NOHETO%21/Noheto_lfneto.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765404372/BirdBox%20Code/NOHETO%21/Noheto3_tncwdd.png",
    ],
  },
    {
    id: "nerdadvisor",
    name: "NERDADVISOR",
    url: "https://www.figma.com/design/Jxipdu1kwiuZNPZGGXIkys/NerdAdvisor?node-id=1932-568&t=wUn9a32zc66mKfo9-1",
    category: "web",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446706/BirdBox%20Code/NerdAdvisor/NA1_fvj5rz.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446708/BirdBox%20Code/NerdAdvisor/NA2_k4j056.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446706/BirdBox%20Code/NerdAdvisor/NA3_mbb4zb.png",
    ],
  },
  {
    id: "vriendjes",
    name: "VRIENDJES",
    url: "http://www.vriendjes.nl",
    category: "web",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446535/BirdBox%20Code/Vriendjes/Vriendjes_pn7j8w.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446534/BirdBox%20Code/Vriendjes/Vriendjes2_ljy6xm.png",
    ],
  },

  {
    id: "beatemhub",
    name: "BEAT EMM HUB",
    url: "https://beatemhub.com/",
    category: "web",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765447077/BirdBox%20Code/Beat%20em%20Hub/BEH_ifnoj0.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765447079/BirdBox%20Code/Beat%20em%20Hub/BEH2_jblb7s.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074914/BirdBox%20Code/Screenshot_2025-06-05_at_00.07.00_ynlyyy.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074908/BirdBox%20Code/Beat%20em%20Hub/Screenshot_2025-06-05_at_00.08.04_u0qv43.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074906/BirdBox%20Code/Beat%20em%20Hub/Screenshot_2025-06-05_at_00.07.35_qqkkma.png",
    ],
  },
  {
    id: "donna",
    name: "DONNA AVILES",
    url: "https://donna-aviles.com/",
    category: "web",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765447501/BirdBox%20Code/Donna/Donna1_e0ngkq.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765447499/BirdBox%20Code/Donna/Donna2_aslhcj.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074914/BirdBox%20Code/Screenshot_2025-06-05_at_00.07.00_ynlyyy.png",
    ],
  },
    {
    id: "beatemhub-pitch",
    name: "BEAT EM HUB", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://www.behance.net/birdboxcode",
    category: "pitch",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765448510/BirdBox%20Code/Beat%20em%20Hub/Decks/beh_deck_3_zedowk.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765448512/BirdBox%20Code/Beat%20em%20Hub/Decks/beh_deck_2_elz5fn.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765448513/BirdBox%20Code/Beat%20em%20Hub/Decks/beh_deck_1_remk9a.png",
    ],
  },
  {
    id: "hameln2pitch",
    name: "HAMELN EMPLOYEE DECK", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://www.behance.net/birdboxcode",
    category: "pitch",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449719/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_725_ccgpmb.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449721/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_726_uucxnf.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449722/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_727_k5b56g.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449724/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_731_ledtxg.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449726/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_730_akrmyc.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449747/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_728_ehs3kw.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449749/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_729_g7afsz.png",
    ],
  },
  {
    id: "hameln1-pitch",
    name: "HAMELN STRATEGY DECK", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://www.behance.net/birdboxcode",
    category: "pitch",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449527/BirdBox%20Code/NOHETO%21/hameln%20Board/6c925f240121849.69380c4dbc29e_ys4lue.webp",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449528/BirdBox%20Code/NOHETO%21/hameln%20Board/4f515b240121849.69380c4dbe282_wagvjz.webp",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449533/BirdBox%20Code/NOHETO%21/hameln%20Board/e3fa2a240121849.69380c4dbd002_r3tetj.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449529/BirdBox%20Code/NOHETO%21/hameln%20Board/7d0db3240121849.69380c4dbd4a6_tjgwrh.webp",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449532/BirdBox%20Code/NOHETO%21/hameln%20Board/a65441240121849.69380c4dbca60_xvrulq.webp",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765449530/BirdBox%20Code/NOHETO%21/hameln%20Board/135100240121849.69380c4dbda6a_n8squ9.webp",
    ],
  },
  {
    id: "nerdadvisor-pitch",
    name: "NERDADVISOR", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://www.behance.net/birdboxcode",
    category: "pitch",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765448762/BirdBox%20Code/NerdAdvisor/Deck/NA_Deck_v4winb.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765448765/BirdBox%20Code/NerdAdvisor/Deck/NA_Deck2_muufx5.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765448766/BirdBox%20Code/NerdAdvisor/Deck/NA_Deck1_lripel.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765448789/BirdBox%20Code/NerdAdvisor/Deck/NA_Deck3_ywgb2s.png",
    ],
  },
  {
    id: "otherdesign",
    name: "OTHER DESIGN", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://www.behance.net/birdboxcode",
    category: "pitch",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1681731701/BirdBox%20Code/Cinnovate_czff3f.png",
    ],
  },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("web");
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

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    // Determine the new active project - prioritize the first one in the new category
    const firstInNewCategory = projects.find(p => p.category === category);
    if (firstInNewCategory) {
      setActiveProject(firstInNewCategory.id);
    }
    setMobileExpanded(null); // Collapse everything on mobile
  };

  // Ensure current active project is valid for the category, fallback if needed
  // (Though handleCategoryChange takes care of the switch, checking explicitly helps on initial render if logic changes)
  const currentProjectData = filteredProjects.find((p) => p.id === activeProject) || filteredProjects[0];

  return (
    <>
      <div className="hidden md:contents desktop-split-view">
        {/* Projects List Column */}
        <div className="projects-section md:col-span-1 overflow-y-scroll h-[80vh] no-scrollbar px-4" ref={projectsRef}>
          <div className="projects-header transition-opacity duration-100 sticky top-0 bg-[#0D0E11] z-10 pb-4 flex flex-wrap justify-between items-center" ref={projectsHeaderRef}>
             <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">CURRENT PROJECTS</h2>
             
             {/* Desktop Category Toggle */}
             <div className="flex bg-[#2a2a2a] rounded-full p-1 border border-[#9D9D9D]">
                <button
                  onClick={() => handleCategoryChange("web")}
                  className={`px-3 py-1 rounded-full font-jura text-[0.8vw] transition-all duration-200 ${
                    activeCategory === "web" 
                      ? "bg-[#fd36d4] text-[#0D0E11]" 
                      : "text-[#d9d9d9] hover:text-[#fd36d4]"
                  }`}
                >
                  Websites
                </button>
                <button
                  onClick={() => handleCategoryChange("pitch")}
                  className={`px-3 py-1 rounded-full font-jura text-[0.8vw] transition-all duration-200 ${
                    activeCategory === "pitch" 
                      ? "bg-[#fd36d4] text-[#0D0E11]" 
                      : "text-[#d9d9d9] hover:text-[#fd36d4]"
                  }`}
                >
                  Pitch decks
                </button>
             </div>
          </div>
          
          {filteredProjects.map((proj, idx) => (
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
                {idx === filteredProjects.length - 1 && (
                     <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
                )}
             </div>
          ))}
        </div>

        {/* Preview Column */}
        <div className="preview-section md:col-span-2 overflow-y-scroll h-[80vh] no-scrollbar ml-4" ref={previewRef}>
          <div className="preview-header transition-opacity duration-100 sticky top-0 bg-[#0D0E11] z-10 flex justify-between items-center pb-4" ref={previewHeaderRef}>
            <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">PROJECT PREVIEW</h2>
            {currentProjectData && (
              <button className="btn-contact w-[10vw] h-[5vh] bg-transparent border-none cursor-pointer">
                 <a 
                   href={currentProjectData.url} 
                   target="_blank" 
                   className="text-[#fd36d4] text-glow-pink text-[1vw] no-underline hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-100"
                 >
                   VIEW SITE
                 </a>
              </button>
            )}
          </div>

          <div>
             {currentProjectData?.images.map((imgSrc, i) => (
                <img 
                  key={i} 
                  className="w-full rounded-[10px] mb-4" 
                  src={imgSrc} 
                  alt={`${currentProjectData.name} preview ${i+1}`} 
                />
             ))}
             {!currentProjectData && <div className="text-[#d9d9d9] font-jura">Select a project to view details</div>}
             <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
          </div>
        </div>
      </div>

      {/* MOBILE DISPLAY */}
      <div className="md:hidden mob-projects-section mx-8">
         <h2 className="font-jura text-[5vw] text-[#d9d9d9] text-glow-gray my-4 text-center">CURRENT PROJECTS</h2>
         
         {/* Mobile Category Toggle */}
         <div className="flex justify-center mb-4">
            <div className="flex bg-[#2a2a2a] rounded-full p-1 border border-[#9D9D9D]">
              <button
                onClick={() => handleCategoryChange("web")}
                className={`px-6 py-2 rounded-full font-jura text-[4vw] transition-all duration-200 ${
                  activeCategory === "web" 
                    ? "bg-[#fd36d4] text-[#0D0E11]" 
                    : "text-[#d9d9d9]"
                }`}
              >
                Websites
              </button>
              <button
                onClick={() => handleCategoryChange("pitch")}
                className={`px-6 py-2 rounded-full font-jura text-[4vw] transition-all duration-200 ${
                  activeCategory === "pitch" 
                    ? "bg-[#fd36d4] text-[#0D0E11]" 
                    : "text-[#d9d9d9]"
                }`}
              >
                Pitch decks
              </button>
            </div>
         </div>

         <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-2">Tap To View</p>
         
         {filteredProjects.map((proj) => (
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
