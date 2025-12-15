

export default function Navbar() {
  return (
    <section className="navbar">
      <header>
        <nav className="mx-4 md:mx-8 my-4">
          <ul className="flex justify-between items-center list-none p-0 m-0">
            <li className="navbar-left">
              <img
                className="bbc h-[7vw] md:h-[3vw]" // Mobile: 7vw, Desktop: implicit or smaller? Original CSS didn't explicitly set desktop height in main block, need to check.
                // Checking style.css: .bbc height not set in desktop block, only in mobile query? 
                // Ah, line 293 in style.css sets .bbc height: 7vw inside mobile media query.
                // In desktop it might be natural size or inherited. I'll guess reasonable size for now.
                src="/birdbox-logo-v3.png"
                alt="BirdBox Code"
              />
            </li>
            <li className="navbar-right flex justify-end items-center gap-2">
               {/* Mobile CV Button */}
               <button className="btn-contact md:hidden px-4 py-1 rounded-full bg-[#2a2a2a] border border-[#9D9D9D] cursor-pointer text-center flex items-center justify-center transition-all duration-300 group">
                 <a
                    className="font-jura text-[3vw] text-[#d9d9d9] no-underline group-hover:text-[#fd36d4] transition-all duration-300"
                    href="https://drive.google.com/file/d/1QWTjVdoovBST_zC-85nUxjKhQ3FDrFji/view?usp=sharing"
                    target="_blank"
                 >
                   CV
                 </a>
               </button>

               <button className="btn-contact px-4 py-1 rounded-full bg-[#2a2a2a] border border-[#9D9D9D] cursor-pointer text-center flex items-center justify-center transition-all duration-300 group">
                <a
                  className="pink-link font-jura text-[3vw] md:text-[0.8vw] text-[#d9d9d9] no-underline group-hover:text-[#fd36d4] transition-all duration-300"
                  href="mailto:chris@birdboxlabs.com"
                >
                  CONTACT
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
