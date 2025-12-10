import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import StaticNoise from "@/components/StaticNoise";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StaticNoise />
      <main className="min-h-screen grid grid-rows-[auto_1fr_auto] md:grid-rows-[auto_1fr] md:h-screen md:overflow-hidden pb-16 md:pb-0"> 
          {/* Mobile: min-h-screen, scrollable body (default), padding bottom for footer.
              Desktop: h-screen, overflow-hidden (internal scrolls), grid layout. */}
          
          <div className="w-full">
            <Navbar />
            <section className="header mx-4 md:mx-8"> 
                <div className="header-container border-y border-[#9D9D9D] py-2 md:py-0 text-center">
                    <h1 className="font-jura text-[10vw] md:text-[11.7vw] text-[#FFFBF8] text-glow-white tracking-[0.62vw]">BIRDBOX LABS</h1>
                </div>
            </section>
          </div>

          <div className="block md:grid md:grid-cols-4 md:px-8 h-full md:overflow-hidden md:gap-0">
             {/* 
                Grid layout based on grid.css:
                Total 8 cols. About: 2 (25%), Projects: 2 (25%), Preview: 4 (50%).
                Using grid-cols-4: About(1), Projects(1), Preview(2).
             */}
             <AboutSection />
             <ProjectSection />
          </div>
          
          <Footer />
      </main>
    </>
  );
}
