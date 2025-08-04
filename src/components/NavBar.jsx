import { SiGithub, SiLinkedin } from "react-icons/si";

export default function NavBar( {scrollToSection, activeSection} ) {
  return (
    <>
      {/* Navigation header */}
      <div className="nav-bar">
        <div> Thomas De Sa</div>

        {/* navigation links */}
        <div>
          {["home", "about", "experience", "projects", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                // className={`capitalize hover:text-blue-400 transition-colors ${
                //   activeSection === section ? "text-blue-400" : "text-gray-300"
                // }`}
              >
                {section}
              </button>
            )
          )}
        </div>

        {/* Socials */}
        <div>
          <a>
            <SiGithub size={24}/>
          </a>
          <a> <SiLinkedin size={24}/></a>
        </div>

      </div>
    </>
  );
}
