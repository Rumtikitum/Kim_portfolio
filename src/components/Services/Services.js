import "./Services.css"
import kitty from "./kitty.jpg"

function Services() {
    return (
        <div className="container bannercontainer" id="portfolio">
            <img src={kitty} alt="banner art" id="services"/>
            <header>Services</header>
            <p className="subservicesnote">Meow is the time to tell you what I can do for you...</p>
        </div>
    );
  }

export default Services;