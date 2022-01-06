import SelfPortrait from "./SelfPortrait";
import Title from "./Title";
import "./Hero.css"

function Hero() {
    return (
        <div className="container">
                <span className="subcontainer">
                    <span className="heroflex1">
                        <SelfPortrait></SelfPortrait>
                    </span>
                    <span className="heroflex2">
                        <Title></Title>
                    </span>
                </span>    
        </div>

    );
  }

export default Hero;