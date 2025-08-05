import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import Badge from "./Badge";
import Card from "./Card"

export default function experienceSection({ experiences }) {

  return (
    <div className="section alt-background" id="experience">
      <div className="section-content">
      <h1> Experience </h1>
      <div>
        {experiences.map((exp) => (
          <Card key={exp.id}>
            {/* Expereinece Heading */}
            <div>
              <div>
                <div> {exp.title}</div>
                <div>
                  <Calendar />
                  {exp.duration}
                </div>
              </div>

              <div>
                <div> {exp.company}</div>
                <div>
                  {" "}
                  <MapPin /> {exp.location}
                </div>
              </div>
              <div className="badges">
                <Badge>{exp.type}</Badge>
              </div>
            </div>

            {/* Body */}
            <div>
              <div>{exp.description}</div>

              <ul>
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>

              <div>
                <h4>
                  Technologies Used:
                </h4>
                <div>
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
}
