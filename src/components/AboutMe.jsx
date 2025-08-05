import Badge from "./Badge";

export default function AboutMe({ personalinfo, skills }) {
  const aboutme1 = `I'm a passionate computer science student with a strong foundation in 
    mathematics and a keen interest in machine learning and statistics.`;

  const aboutme2 = `
    I am currently pursuing my Bsc at Wilfrid Laurier University, where I've gained hands-on experience through 
    my courses, personal projects, and collaborative work. I enjoy tackling complex problems and am 
    always eager to learn new technologies and methodologies.`;

  return (
    <div className="section alt-background" id="about">
      <div className="section-content">

        <h1> About Me </h1>
        <div className="aboutme-content">
          {/* Me description */}
          <div className="aboutme-section">
            <p>{aboutme1}</p>
            <p>{aboutme2}</p>
          </div>

          {/* Skills */}
          <div className="aboutme-section" style={{"alignItems": "flex-end"}}>

            <div className="tech-skills-container">
              <h2 style={{"alignSelf": "flex-start"}}>Techincal Skills</h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-section">
                <h4>{category}</h4>
                <div className="badges">
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700 text-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
