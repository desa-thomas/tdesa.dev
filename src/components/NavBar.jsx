import { SiRefinedgithub, SiLinkedin } from "react-icons/si";

export default function NavBar( {scrollToSection, activeSection} ) {
  return (
    <>
      {/* Navigation header */}
      <div className="nav-bar">
        <div className="nav-containers" style={{"justifyContent": "flex-end"}}>
          <h2 >tdesa.dev</h2>
        </div>

        {/* navigation links */}
        <div className="nav-button-container">
          {["home", "about", "experience", "projects", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                // className= {activeSection === section ? "active": ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Socials */}
        <div className="nav-containers" style={{"justifyContent": "flex-start"}}> 
          <a target="_blank" href="https://github.com/desa-thomas" rel="noopener noreferrer">
            <SiRefinedgithub size={26}/>
          </a>
          <a> <SiLinkedin size={26}/></a>
        </div>

      </div>
    </>
  );
}
