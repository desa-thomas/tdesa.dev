import Card from "./Card"
import Badge from "./Badge";
import { SiGit } from "react-icons/si";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection({ projects }) {
  return (
    <div className="section" id="projects">
      <div className="section-content">
        <h1> Projects </h1>
      {projects.map((project) => (
          <Card
            key={project.id}
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gray-700">
              <img/> 
            </div>

            <div>
              <div>
                {project.title}
              </div>
              <div>
                {project.description}
              </div>
            </div>

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
                <button
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <SiGit/>
                  Code
                </button>
                {project.liveUrl && (
                  <button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink/>
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
        </div>
    </div>
  );
}
