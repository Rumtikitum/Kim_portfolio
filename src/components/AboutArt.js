import "./AboutArt.css"
import Fanart from "./fanart.jpg"

function AboutArt() {
    return (
        <div className="aboutartcontainer">
            <img src={Fanart} alt="fanart"/>
        </div>
    );
  }

export default AboutArt;