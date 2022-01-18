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
            <box className="wrapper arty">
                <a href="https://twitter.com/kharybdys/status/1477514871885352962" className="workimage subwrapper1"><img src={Knight} alt="sketch"/></a>
                <a href="https://twitter.com/kharybdys/status/1470218547909443590" className="workimage subwrapper2"><img src={Kat} alt="sketch"/></a>
                <a href="https://twitter.com/kharybdys/status/1434985079986552834" className="workimage subwrapper3"><img src={Services} alt="sketch"/></a>
                <a href="https://twitter.com/kharybdys/status/1435785629665693700" className="workimage subwrapper4"><img src={Sketch} alt="sketch"/></a>
                <a href="https://twitter.com/kharybdys/status/1447579369317158915" className="workimage subwrapper5"><img src={Angel} alt="sketch"/></a>
                <a href="https://twitter.com/kharybdys/status/1473575928496222209" className="workimage subwrapper6"><img src={Firelord} alt="sketch"/></a>
            </box>
        </div>
    );
  }

export default Works;