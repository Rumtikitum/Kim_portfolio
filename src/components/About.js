import "./About.css"
import AboutArt from './AboutArt'
import AboutContent from "./AboutContent";

function About() {
    return (
        <div className="aboutcontainer">
            <AboutContent className="about1"></AboutContent>
            <AboutArt className="about2"></AboutArt>
        </div>

    );
  }

export default About;