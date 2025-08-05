
import ExperienceCard from "./ExpereienceCard";

export default function experienceSection({ experiences }) {

  return (
    <div className="section alt-background" id="experience">
      <div className="section-content">
      <h1> Experience </h1>
      
      <div className="experiences-cont">
        {experiences.map((exp, i) => (
          <ExperienceCard exp={exp} key={i}></ExperienceCard>
        ))}
      </div>
      </div>
    </div>
  );
}
