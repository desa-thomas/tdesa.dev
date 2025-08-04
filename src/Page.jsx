import { useState, useEffect } from "react"

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
    name: "Alex Johnson",
    title: "Computer Science Student",
    university: "University of Technology",
    graduationYear: "2025",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
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
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  if (loading) {
    return <div>loading...</div>;
  } else {
    return <div> Bruh </div>;
  }
}
