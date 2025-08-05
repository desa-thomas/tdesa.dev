import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <div className="section" id="projects">
      <div className="section-content">
        <h1> Projects </h1>
        <div className="projects-container">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
