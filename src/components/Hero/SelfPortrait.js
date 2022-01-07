import "./SelfPortrait.css"
import Kim from "./Kim.jpg"

function SelfPortrait() {
    return (
        <div className="portrait_container">
            <img src={Kim} alt="Self Portrait" className="selfportrait"/>
        </div>

    );
  }

export default SelfPortrait;