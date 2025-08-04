

export default function LandingPage({personalInfo})
{

    return(
        <div className="landing-page">
            <h1>{personalInfo.name}</h1>
            <h2>{personalInfo.title}</h2>
            <h3>{personalInfo.university} • {personalInfo.graduationYear}</h3>
            <div>{personalInfo.bio}</div>
        </div>
    )
}