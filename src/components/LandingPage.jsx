import { FileText } from "lucide-react";
import { Mail } from "lucide-react";
import { FolderGit2 } from "lucide-react";
import TypedTitle from "./TypedTitle";

export default function LandingPage({ personalInfo, scrollToSection }) {
  return (
    <div className="section" style={{"padding": "0px var(--side-padding"}} id="home">
      <div className="landing-page section-content">
        <TypedTitle name={personalInfo.name}/>
        <h2>{personalInfo.title}</h2>
        <h3>
          {personalInfo.university} • {personalInfo.graduationYear}
        </h3>
        <p>{personalInfo.bio}</p>

        {/* Quick Buttons */}
        <div className="landing-page-button-container">
          <button onClick={() => scrollToSection("projects")}>
            <div>
              <FolderGit2 />
              View my work
            </div>
          </button>
          <button onClick={() => scrollToSection("contact")}>
            <div>
              <Mail />
              Get in touch
            </div>
          </button>
          {/* TODO redirct to resume */}
          <button>
            <div>
              <FileText />
              Resume
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
