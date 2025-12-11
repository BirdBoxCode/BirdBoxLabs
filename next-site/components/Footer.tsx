

export default function Footer() {
  return (
    <footer className="bg-[#0D0E11] pt-8 fixed bottom-0 w-full z-10">
       <div className="foot-wrap border-t border-[#9D9D9D] mx-8 md:mx-4 flex justify-center md:block"> 
        {/* Mobile: mx-4, flex justify-center. Desktop: mx-8 (2em), block/default? 
           Original: .foot-wrap { margin: 0em 2em; } 
           Mobile .foot-wrap { display: flex; justify-center; margin: 0em 1em; } 
           So Desktop needs margin 2em (approx 8 in Tailwind). 
        */}
        
        <div className="flex-links flex my-[1vw] border-x border-[#9D9D9D] rounded-[10px] w-full md:w-[35vw] md:mx-0 mx-4 justify-between md:justify-start">
             {/* 
                Original Desktop: .flex-links { width: 35vw; border-left/right... }
                Original Mobile: .flex-links { width: 100%; margin: 1em 2em; }
             */}
          
          <div className="link-wrapper border-r border-[#9D9D9D] w-full h-[90%] text-center">
            <p className="my-1 mx-auto text-[#FFFBF8] font-light text-[1vw] md:mr-12">
               {/* Desktop p margins: marginRight 3em, margin 0.3em auto. 
                   Mobile p: textAlign center, fontSize 1em.
                   I will use simplified utilities.
               */}
              <a href="https://github.com/BirdBoxCode" target="_blank" className="hover:text-[#fd36d4] hover:shadow-[0_0_12px_#fd36d4] transition-all duration-100 text-[2.8vw] md:text-[0.8vw]">GitHub</a>
            </p>
          </div>
          <div className="link-wrapper border-r border-[#9D9D9D] w-full h-[90%] text-center">
            <p className="my-1 mx-auto text-[#FFFBF8] font-light text-[1vw] md:mr-12">
              <a href="https://www.linkedin.com/in/christopher-mccarthy/" target="_blank" className="hover:text-[#fd36d4] hover:shadow-[0_0_12px_#fd36d4] transition-all duration-100 text-[2.8vw] md:text-[0.8vw]">LinkedIn</a>
            </p>
          </div>
          <div className="link-wrapper border-r border-[#9D9D9D] w-full h-[90%] text-center">
             <p className="my-1 mx-auto text-[#FFFBF8] font-light text-[1vw] md:mr-12">
              <a href="https://www.behance.net/birdboxcode" target="_blank" className="hover:text-[#fd36d4] hover:shadow-[0_0_12px_#fd36d4] transition-all duration-100 text-[2.8vw] md:text-[0.8vw]">Behance</a>
            </p>
          </div>
          <div className="link-wrapper border-none w-full h-[90%] text-center">
             <p className="my-1 mx-auto text-[#FFFBF8] font-light text-[1vw] md:mr-12">
              <a href="https://vimeo.com/user187343242" target="_blank" className="hover:text-[#fd36d4] hover:shadow-[0_0_12px_#fd36d4] transition-all duration-100 text-[2.8vw] md:text-[0.8vw]">Vimeo</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
