import Badge from "./Badge"

export default function AboutMe({ personalinfo, skills})
{
    const aboutme = `about me section, yap etc`

    return <div className="section alt-background" id="about">
      <div className="section-content">
        <h1> About Me </h1>
        <div className="aboutme-content">
            {/* Me description */}
            <div>
                {aboutme}
            </div>
            {/* Skills */}
            <div>
                 {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4>{category}</h4>
                    <div className="badges">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-200">
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
}