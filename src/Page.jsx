import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";

import "./styles.css";
import { SiReact } from "react-icons/si";

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
    return <div>loading...</div>;
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
              <p className="footnote">Developed with ❤️, and <span><SiReact style={{"verticalAlign": "text-bottom"}} fill="#61DAFB"/></span></p>
          </footer>
        </div>
      </>
    );
  }
}
