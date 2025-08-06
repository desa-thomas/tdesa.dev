import { Mail } from "lucide-react";
import { SiLinkedin, SiRefinedgithub } from "react-icons/si";

export default function Contact( {personalInfo})
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
                    <a href={personalInfo.linkedin}>Connect with me</a>
                </div>
                <div className="contact-card"> 
                    <SiRefinedgithub className="icon" size={40}/>
                    <h3>Github</h3>
                    <a href={personalInfo.github}>View my code</a>
                </div>
            </div>
            </div>
        </div>
    )
}