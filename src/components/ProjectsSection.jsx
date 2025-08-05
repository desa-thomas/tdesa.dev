import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <div className="section" id="projects">
      <div className="section-content">
        <h1> Projects </h1>
      {projects.map((project) => (  
        <ProjectCard project={project} key={project.id}/>
        ))}
        </div>
    </div>
  );
}
