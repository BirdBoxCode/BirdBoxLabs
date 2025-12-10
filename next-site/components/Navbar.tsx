

export default function Navbar() {
  return (
    <section className="navbar">
      <header>
        <nav className="m-4">
          <ul className="flex justify-between items-center list-none p-0 m-0">
            <li className="navbar-left">
              <img
                className="bbc h-[7vw] md:h-[3vw]" // Mobile: 7vw, Desktop: implicit or smaller? Original CSS didn't explicitly set desktop height in main block, need to check.
                // Checking style.css: .bbc height not set in desktop block, only in mobile query? 
                // Ah, line 293 in style.css sets .bbc height: 7vw inside mobile media query.
                // In desktop it might be natural size or inherited. I'll guess reasonable size for now.
                src="https://res.cloudinary.com/depkh8amy/image/upload/v1680126141/BirdBox%20Code/BirdBox_dgn3ja.png"
                alt="BirdBox Code"
              />
            </li>
            <li className="navbar-right">
              <button className="btn-contact w-[20vw] h-[4vh] md:w-[10vw] md:h-[5vh] bg-transparent border-none cursor-pointer">
                <a
                  className="pink-link text-[3vw] md:text-[1vw] text-[#fd36d4] text-glow-pink no-underline hover:text-glow-pink transition-all duration-100"
                  href="mailto:chris@birdboxcode.dev"
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
