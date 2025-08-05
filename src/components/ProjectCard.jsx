import Badge from "./Badge";
import { SiGit } from "react-icons/si";
import { ExternalLink } from "lucide-react";

/**
 *
 * @param {*} project - A project object. refer to data/projects.json
 */
export default function ProjectCard({ project }) {
  return (
    <div class="projectCard">

      {/* Project Image */}
      <div className="img-container">
        <img src={project.image} />
      </div>

        {/* Project content */}
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div>
          {/* Technologies */}
          <div className="badges">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-gray-700 text-gray-200"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Project Links */}
          <div>
            <button onClick={() => window.open(project.githubUrl, "_blank")}>
              <SiGit />
              Code
            </button>
            {project.liveUrl && (
              <button onClick={() => window.open(project.liveUrl, "_blank")}>
                <ExternalLink />
                Live Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
