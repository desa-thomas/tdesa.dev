
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import Badge from "./Badge";
import { SiGit } from "react-icons/si";



export function ExperienceCard({ exp }) {
  return (
    <div className="experience-card">
      {/* Expereinece Heading */}
      <div className="header-cont">
        <div className="exp-row">
          <h2>{exp.title}</h2>

          <div className="flex-cont">
            <Calendar size={16} />
            <span> {exp.duration}</span>
          </div>
        </div>

        <div className="exp-row">
          <h3> {exp.company}</h3>
          <div className="flex-cont">
            <MapPin size={16} />
            <span>{exp.location}</span>
          </div>
        </div>

        <div className="badges">
          <Badge className={"outline"}>{exp.type}</Badge>
        </div>
      </div>

      {/*  Descripition */}
      <div className="desc">{exp.description}</div>

      {/* Achievements bullets */}
      <div className="flex-cont col" style={{"gap": "5px"}}>
        <b>Key Achievements</b>
        <ul>
          {exp.achievements?.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

          {/* Tech used bullets */}
      <div className="header-cont">
        {exp.technologies != null && <h4>Technologies Used:</h4>}
        <div className="badges">
          {exp.technologies?.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 *
 * @param {*} project - A project object. refer to data/projects.json
 */
export function ProjectCard({ project }) {
  return (
    <div className="project-card">
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
