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
                <a href="https://twitter.com/kharybdys/status/1477514871885352962"><img src={Knight} alt="sketch" className="workimage subwrapper1"/></a>
                <a href="https://twitter.com/kharybdys/status/1470218547909443590"><img src={Kat} alt="sketch" className="workimage subwrapper2"/></a>
                <a href="https://twitter.com/kharybdys/status/1434985079986552834"><img src={Services} alt="sketch" className="workimage subwrapper3"/></a>
                <img src={Sketch} alt="sketch" className="workimage subwrapper4"/>
                <img src={Angel} alt="sketch" className="workimage subwrapper5"/>
                <a href="https://twitter.com/kharybdys/status/1473575928496222209"><img src={Firelord} alt="sketch" className="workimage subwrapper6"/></a>
            </box>
        </div>
    );
  }

export default Works;