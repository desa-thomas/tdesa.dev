import Badge from "./Badge";
import { SiGit } from "react-icons/si";
import { ExternalLink } from "lucide-react";

/**
 *
 * @param {*} project - A project object. refer to data/projects.json
 */
export default function ProjectCard({ project }) {
  return (
    <div class="project-card">
      {/* Project Image */}
      <div className="img-container">
        <img src={project.image} />
      </div>

      {/* Project content */}
      <div className="project-content">
        <div style={{"height": "100%"}}>
             <h3>{project.title}</h3>
        <p>{project.description}</p>
        </div>


        {/* tech used */}

        <div className="badges">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Project Links */}
        <div className="button-container">
          <button onClick={() => window.open(project.githubUrl, "_blank")}>
            <SiGit size={20}/>
            Code
          </button>
          {project.liveUrl && (
            <button style={{"backgroundColor": "var(--dark-highlight-font-color)", "border": "none"}}onClick={() => window.open(project.liveUrl, "_blank")}>
              <ExternalLink size={20}/>
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
