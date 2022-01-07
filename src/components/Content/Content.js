import "./Content.css"
import firelord from "./firelord.jpg"

function Content() {
    return (
        <div className="container bannercontainer" id="portfolio">
            <img src={firelord} alt="banner art"/>
            <header>Portfolio</header>
            <p className="subcontentnote">Passion is a flame that can't ever be put out....</p>
        </div>
    );
  }

export default Content;