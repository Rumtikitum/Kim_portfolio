import "./Works.css"
import Sketch from "./sketch.jpg"
import Angel from "./angel.jpg"
import Services from "./services.jpg"
import Firelord from "./firelord.jpg"
import Knight from "./knight.jpg"
import Kat from "./kat.jpg"


function Works() {
    return (
        <div className="works">
            <box className="wrapper">
                <img src={Knight} alt="sketch" className="workimage subwrapper1"/>
                <img src={Kat} alt="sketch" className="workimage subwrapper2"/>
                <img src={Services} alt="sketch" className="workimage subwrapper3"/>
                <img src={Sketch} alt="sketch" className="workimage subwrapper4"/>
                <img src={Angel} alt="sketch" className="workimage subwrapper5"/>
                <img src={Firelord} alt="sketch" className="workimage subwrapper6"/>
            </box>
        </div>
    );
  }

export default Works;