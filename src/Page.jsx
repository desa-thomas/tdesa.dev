import { useState, useEffect } from "react"
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import "./styles.css"

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
    bio: "Passionate computer science student with experience in full-stack development, machine learning, and software engineering. Always eager to learn new technologies and solve complex problems.",
  }

  // Skills data
  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    Frontend: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
    Backend: ["Node.js", "Express", "Flask", "Django", "REST APIs"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  }

  // Navigation scroll handler
  const scrollToSection = (sectionId) => {
    console.log("Scroll to", sectionId)
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  if (loading) {
    return <div>loading...</div>;
  } 
  else {
    return (
      <>
      <NavBar scrollToSection={scrollToSection} activeSection={activeSection}/>

      {/* Welcome section/ landing page */}
      <LandingPage personalInfo={personalInfo}/>

      {/* About section */}
      {/* Projects section */}
      {/* Expereience section */}
      {/* Contact section */}
      {/* Footer */}

      </>
    );
  }
}
