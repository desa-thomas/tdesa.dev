import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import Badge from "./Badge";

export default function ExperienceCard({ exp }) {
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
