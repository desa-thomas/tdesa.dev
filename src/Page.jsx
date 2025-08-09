import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

import "./styles.css";
import { SiReact, SiLinkedin, SiRefinedgithub } from "react-icons/si";

import { FileText } from "lucide-react";
import { Mail } from "lucide-react";
import { FolderGit2 } from "lucide-react";

import TypedTitle from "./components/TypedTitle";
import Badge from "./components/Badge";

import {ProjectCard, ExperienceCard} from "./components/Cards"


export default function Page() {
  /** Set up states */
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Load data from JSON files on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch projects data
        const projectsResponse = await fetch("/data/projects.json");
        const projectsData = await projectsResponse.json();
        setProjects(projectsData.projects);

        // Fetch experience data
        const experienceResponse = await fetch("/data/experience.json");
        const experienceData = await experienceResponse.json();
        setExperience(experienceData.experience);

        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Personal information
  const personalInfo = {
    name: "Thomas De Sa",
    title: "Mathematics & Computer Science Student",
    university: "Wilfrid Laurier University",
    graduationYear: "2026",
    location: "Waterloo, ON",

    resume_link: "https://github.com/desa-thomas/public-resume/blob/main/resume.pdf", 
    email: "desa2thomas@gmail.com",
    linkedin: "https://www.linkedin.com/in/thomas-de-sa-598379248/",
    github: "https://github.com/desa-thomas",
    bio: `Passionate computer science student with experience in full-stack development,
     and machine learning. Always eager to learn new technologies and solve complex problems.`,
  };

  // Skills data
  const skills = {
    "Programming Languages": [
      "Python",
      "C/C++",
      "Bash",
      "Java",
      "JavaScript",
      "SQL",
      "PHP",
      "R",
    ],
    "Data Analytics & Machine Learning": [
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Seaborn",
    ],
    "Tools & Technologies": [
      "Git",
      "Linux",
      "Jupyter",
      "Docker",
      "AWS",
      "Figma",
      "VS Code",
    ],
    Backend: ["Node.js", "Express", "Flask", "REST APIs"],

    Frontend: ["React", "HTML5", "CSS3", "Tailwind CSS"],
    Database: ["MongoDB", "MySQL", "MariaDB"],
  };

  // Navigation scroll handler
  const scrollToSection = (sectionId) => {
    console.log("Scroll to", sectionId);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  console.log(experience);
  if (loading) {
    return <div className="loading">loading...</div>;
  } else {
    return (
      <>
        <NavBar
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />

        <div className="content">
          {/* Welcome section/ landing page */}
          <LandingPage
            personalInfo={personalInfo}
            scrollToSection={scrollToSection}
          />

          {/* About section */}
          <AboutMe personalinfo={personalInfo} skills={skills} />

          {/* Projects section */}
          <ProjectsSection projects={projects} />

          {/* experience section */}
          <ExperienceSection experiences={experience} />

          {/* Contact section */}
          <Contact personalInfo={personalInfo} />

          {/* Footer */}
          <footer>
              <p>
                © {new Date().getFullYear()} {personalInfo.name}
              </p>
              <p className="footnote">Developed with ❤️, and <SiReact style={{"verticalAlign": "text-bottom"}} fill="#61DAFB"/></p>
          </footer>
        </div>
      </>
    );
  }
}



function LandingPage({ personalInfo, scrollToSection }) {
  return (
    <div className="section" style={{"padding": "0px var(--side-padding"}} id="home">
      <div className="landing-page section-content">
        <TypedTitle name={personalInfo.name}/>
        <h2>{personalInfo.title}</h2>
        <h3>
          {personalInfo.university} • {personalInfo.graduationYear}
        </h3>
        <p>{personalInfo.bio}</p>

        {/* Quick Buttons */}
        <div className="landing-page-button-container">
          <button onClick={() => scrollToSection("projects")}>
            <div>
              <FolderGit2 />
              View my work
            </div>
          </button>
          <button onClick={() => scrollToSection("contact")}>
            <div>
              <Mail />
              Get in touch
            </div>
          </button>
          <button onClick={()=>{ window.open(personalInfo.resume_link, "_blank")}}>
            <div>
              <FileText />
              Resume
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}


function AboutMe({ skills }) {
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

function ProjectsSection({ projects }) {
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


function ExperienceSection({ experiences }) {

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

function Contact( {personalInfo})
{
    return(
        <div className="section" id="contact">
            <div className="section-content">
            <h1>Get in Touch</h1>
            <h4>I'm always open to discussing new opportunities, interesting projects, or just having a chat!</h4>

            <div className="contacts-cont">
                <div className="contact-card">
                    <Mail className="lucide-icon" size={40}/>
                    <h3>Email</h3>
                    <a href={"mailto:" + personalInfo.email}>desa2thomas@gmail.com</a>
                </div>
                <div className="contact-card">
                    <SiLinkedin className="icon" size={40}/>
                    <h3>Linkedin</h3>
                    <a href={personalInfo.linkedin} target="_blank">Connect with me</a>
                </div>
                <div className="contact-card"> 
                    <SiRefinedgithub className="icon" size={40}/>
                    <h3>Github</h3>
                    <a target="_blank" href={personalInfo.github}>View my code</a>
                </div>
            </div>
            </div>
        </div>
    )
}
