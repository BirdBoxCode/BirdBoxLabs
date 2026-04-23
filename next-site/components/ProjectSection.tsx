"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCategory = "web" | "pitch";

type Project = {
  id: string;
  name: string;
  url: string;
  category: ProjectCategory;
  images: string[];
  description?: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    id: "ninaro",
    name: "NINARO - Coming soon",
    url: "https://nina-g3i4.onrender.com/",
    category: "web",
    comingSoon: true,
    description: "A bespoke digital experience crafted for a visionary artist and tattooist. Moving beyond traditional layouts, Ninaro features a uniquely structured design language built to translate a specific creative vision into a fluid, interactive reality.",
    images: [],
  },
    {
    id: "kinogames",
    name: "KINO GAMES",
    url: "https://www.kinogames.eu",
    category: "web",
    description: "Built an immersive Next.js and Sanity CMS experience that breaks traditional UX conventions to deliver a cinematic, narrative-driven journey. Developed a custom CI/CD pipeline and integrated Notion APIs to streamline studio operations and inbound inquiries.",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1775661272/BirdBox%20Code/Kino-Games/1_njjbd4.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1775661281/BirdBox%20Code/Kino-Games/2_fgs0zy.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1775661275/BirdBox%20Code/Kino-Games/4_ebsos6.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1775661279/BirdBox%20Code/Kino-Games/5_c60rs6.png",
    ],
  },
  {
    id: "gamesground",
    name: "GAMES GROUND",
    url: "https://gamesground.de/",
    category: "web",
    description: "Co-developed a large-scale Webflow ecosystem, with custom JavaScript components and relational CMS architectures to handle dynamic festival data.",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1775660706/BirdBox%20Code/Games%20Ground/Games_Ground_bktfpx.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1775660704/BirdBox%20Code/Games%20Ground/Games_Ground_3_xmu34d.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1749074643/BirdBox%20Code/Screenshot_2025-06-05_at_00.01.53_vehrbv.png",
    ],
  },
  {
    id: "vriendjes",
    name: "VRIENDJES",
    url: "http://www.vriendjes.nl",
    category: "web",
    description: "Designing and building a full Webflow experience with a complex booking system, custom JavaScript interactions, and playful motion.",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446535/BirdBox%20Code/Vriendjes/Vriendjes_pn7j8w.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446534/BirdBox%20Code/Vriendjes/Vriendjes2_ljy6xm.png",
    ],
  },
    {
    id: "noheto",
    name: "NOHETO!",
    url: "http://www.noheto.de/",
    category: "web",
    description: "Delivering a crisp, multilingual website for a pharmaceutical consultancy with thoughtful layout animation and content refinement.",
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
    description: "Steering front-end development and UI/UX product direction for a gaming-career platform, focusing on scalable component libraries and user retention loops.",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446706/BirdBox%20Code/NerdAdvisor/NA1_fvj5rz.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446708/BirdBox%20Code/NerdAdvisor/NA2_k4j056.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765446706/BirdBox%20Code/NerdAdvisor/NA3_mbb4zb.png",
    ],
  },

  {
    id: "beatemhub",
    name: "BEAT EM HUB",
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
    name: "HEALTHCARE EMPLOYEE DECK", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://www.behance.net/birdboxcode",
    category: "pitch",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806100/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_732_lezhk8.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806100/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_726_jdprgv.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806099/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_731_n3iwon.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806100/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_730_dglmcb.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806101/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_728_skp24p.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806102/BirdBox%20Code/NOHETO%21/hameln%20Employees/Group_729_pedc7v.png",
    ],
  },
  {
    id: "hameln1-pitch",
    name: "HEALTHCARE STRATEGY DECK", // Was "PITCH DECK" or "OTHER DESIGN" in HTML text, ID pitch-btn
    url: "https://www.behance.net/birdboxcode",
    category: "pitch",
    images: [
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806075/BirdBox%20Code/NOHETO%21/hameln%20Board/1_gwlm8n.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806076/BirdBox%20Code/NOHETO%21/hameln%20Board/2_lvrxvn.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806075/BirdBox%20Code/NOHETO%21/hameln%20Board/3_freeim.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806075/BirdBox%20Code/NOHETO%21/hameln%20Board/4_ctbazy.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806075/BirdBox%20Code/NOHETO%21/hameln%20Board/Group_714_vv6yeb.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806076/BirdBox%20Code/NOHETO%21/hameln%20Board/5_yfac7e.png",
      "https://res.cloudinary.com/depkh8amy/image/upload/v1765806076/BirdBox%20Code/NOHETO%21/hameln%20Board/Group_736_aepjpv.png",
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
  const [activeProject, setActiveProject] = useState<string>("ninaro");
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
             <div className="flex bg-[#2a2a2a] rounded-full p-1 border border-[#9D9D9D] relative">
               {["web", "pitch"].map((cat) => (
                 <button
                   key={cat}
                   onClick={() => handleCategoryChange(cat as ProjectCategory)}
                   className={`relative px-3 py-1 rounded-full font-jura text-[0.8vw] transition-colors duration-200 z-10 ${
                     activeCategory === cat ? "text-[#0D0E11]" : "text-[#d9d9d9] hover:text-[#bf5fff]"
                   }`}
                 >
                   {cat === "web" ? "Websites" : "Pitch decks"}
                   {activeCategory === cat && (
                     <motion.div
                       layoutId="active-pill-desktop"
                       className="absolute inset-0 bg-[#bf5fff] rounded-full -z-10"
                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     />
                   )}
                 </button>
               ))}
             </div>
          </div>
          
          <div className="flex flex-col w-full">
           <AnimatePresence mode="wait">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="w-full"
              >
                  <div className="separator w-full flex items-center border-t border-[#9D9D9D] my-2"></div>
                  <motion.button 
                    onClick={() => setActiveProject(activeProject === proj.id ? "" : proj.id)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`w-full text-left py-2 px-0 bg-transparent border-none cursor-pointer font-jura text-[1vw] transition-colors duration-200
                      ${activeProject === proj.id 
                        ? "text-[#bf5fff] text-glow-purple" 
                        : "text-[#d9d9d9] hover:text-[#bf5fff] hover:text-glow-purple"
                      }`}
                  >
                    {proj.name}
                  </motion.button>
                  
                  {/* Expanded Description for Desktop */}
                  <AnimatePresence>
                    {activeProject === proj.id && proj.description && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="font-jura font-light text-[#FFFBF8] text-[0.8vw] pb-4 pr-4 leading-relaxed">
                          {proj.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Add spacer at the end if it's the last item to match original layout breathing room */}
                  {idx === filteredProjects.length - 1 && (
                      <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
                  )}
              </motion.div>
            ))}
           </AnimatePresence>
          </div>
        </div>

        {/* Preview Column */}
        <div className="preview-section md:col-span-2 overflow-y-scroll h-[80vh] no-scrollbar ml-4" ref={previewRef}>
          <div className="preview-header transition-opacity duration-100 sticky top-0 bg-[#0D0E11] z-10 flex justify-between items-center pb-4" ref={previewHeaderRef}>
            <h2 className="font-jura text-[1vw] text-[#d9d9d9] text-glow-gray my-4">PROJECT PREVIEW</h2>
            <div className="flex gap-2">
                 <button className="btn-contact hidden md:flex px-4 py-1 rounded-full bg-[#2a2a2a] border border-[#9D9D9D] cursor-pointer text-center items-center justify-center transition-all duration-300 group">
                   <a
                      className="font-jura text-[0.8vw] text-[#d9d9d9] no-underline group-hover:text-[#bf5fff] transition-all duration-300"
                      href="https://drive.google.com/file/d/1HIt5OOZioMAZT7CY-y3djO8mAZhHhEMT/view?usp=sharing"
                      target="_blank"
                   >
                     CV
                   </a>
                 </button>
                {currentProjectData && (
                  currentProjectData.url ? (
                    <button className="btn-contact px-4 py-1 rounded-full bg-[#2a2a2a] border border-[#9D9D9D] cursor-pointer text-center flex items-center justify-center transition-all duration-300 group">
                       <a
                         href={currentProjectData.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="font-jura text-[0.8vw] text-[#d9d9d9] no-underline group-hover:text-[#bf5fff] transition-all duration-300"
                       >
                         VIEW SITE
                       </a>
                    </button>
                  ) : (
                    <button className="btn-contact px-4 py-1 rounded-full bg-[#2a2a2a] border border-[#9D9D9D] text-center flex items-center justify-center opacity-50 cursor-default">
                      <span className="font-jura text-[0.8vw] text-[#d9d9d9]">COMING SOON</span>
                    </button>
                  )
                )}
            </div>
          </div>

          <div>
             {currentProjectData?.comingSoon ? (
               <div className="relative w-full border border-[#9D9D9D] rounded-[10px] overflow-hidden aspect-video">
                 <iframe
                   src="https://customer-ui5gikvnytrm15ts.cloudflarestream.com/8912c980eeed4c5e9dab3bacfd494557/iframe"
                   className="absolute top-0 left-0 w-full h-full"
                   allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                   allowFullScreen
                 />
               </div>
             ) : (
               currentProjectData?.images.map((imgSrc, i) => (
                 <img
                   key={i}
                   className="w-full rounded-[10px] mb-4"
                   src={imgSrc}
                   alt={`${currentProjectData.name} preview ${i+1}`}
                 />
               ))
             )}
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
            <div className="flex bg-[#2a2a2a] rounded-full p-1 border border-[#9D9D9D] relative">
              {["web", "pitch"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat as ProjectCategory)}
                  className={`relative px-6 py-2 rounded-full font-jura text-[4vw] transition-colors duration-200 z-10 ${
                    activeCategory === cat ? "text-[#0D0E11]" : "text-[#d9d9d9]"
                  }`}
                >
                  {cat === "web" ? "Websites" : "Pitch decks"}
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="active-pill-mobile"
                      className="absolute inset-0 bg-[#bf5fff] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
         </div>

         <p className="font-jura font-light text-[#FFFBF8] text-[1em] text-center mb-2">Tap To View</p>
         
         {filteredProjects.map((proj) => (
            <div key={proj.id}>
               <div className="separator w-full border-t border-[#9D9D9D] my-2"></div>
               <button 
                  onClick={() => toggleMobile(proj.id)}
                  className={`w-full py-4 text-center bg-transparent border-none cursor-pointer font-jura text-[5vw] transition-colors duration-100
                    ${mobileExpanded === proj.id 
                       ? "text-[#bf5fff] text-glow-purple" 
                       : "text-[#FFFBF8]"
                    }`}
               >
                 {proj.name}
               </button>
               
               <div 
                 className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileExpanded === proj.id ? 'max-h-[500vh] opacity-100' : 'max-h-0 opacity-0'}`}
               >
                  {/* Description for Mobile */}
                  {proj.description && (
                    <p className="font-jura font-light text-[#FFFBF8] text-[0.9em] text-center mb-6 leading-relaxed px-4">
                      {proj.description}
                    </p>
                  )}

                  <div className="mob-preview-header sticky top-0 flex justify-end w-full my-2">
                     {proj.url ? (
                       <button className="mob-view-btn w-[20vw] h-[2.5vh] rounded-[10px] bg-transparent border-none">
                         <a href={proj.url} target="_blank" className="font-jura text-[3vw] text-[#bf5fff] text-glow-purple no-underline hover:text-[#09FFD8] hover:text-shadow-[0_0_12px_#09FFD8] transition-all duration-200">VIEW SITE</a>
                       </button>
                     ) : (
                       <span className="font-jura text-[3vw] text-[#9D9D9D] opacity-60">COMING SOON</span>
                     )}
                  </div>
                  {proj.comingSoon ? (
                    <div className="relative w-full border border-[#9D9D9D] rounded-[10px] overflow-hidden aspect-video mb-4">
                      <iframe
                        src="https://customer-ui5gikvnytrm15ts.cloudflarestream.com/8912c980eeed4c5e9dab3bacfd494557/iframe"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    proj.images.map((imgSrc, i) => (
                      <img
                        key={i}
                        className="w-full rounded-[10px] mb-4"
                        src={imgSrc}
                        alt={`${proj.name} mobile preview ${i+1}`}
                      />
                    ))
                  )}
               </div>
            </div>
         ))}
         <div className="separator w-full border-t border-[#9D9D9D] my-2"></div>
      </div>
    </>
  );
}
