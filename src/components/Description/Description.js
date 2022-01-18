import "./Description.css"
import halo from "./halo.jpg"
import goodbye from "./goodbye.jpg"

function Description() {
    return (
        <div className="description">
          <div className="describe">
             <h1 className="servicetitle title1">Colored</h1>
             <p className="service">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             <h1 className="servicetitle">Sketches</h1>
             <p className="service">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
             <h1 className="servicetitle title1">Prints</h1>
             <p className="service">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
           <div className="describeart">
             <img src={goodbye} alt="goodbye"/>
             <img src={halo} alt="halo"/>
           </div>
        </div>
    );
  }

export default Description;
