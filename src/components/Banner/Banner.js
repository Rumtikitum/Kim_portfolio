import "./Banner.css"
import bannerkim from "./bannerkim.jpg"
import SubBanner from "./SubBanner";

function Banner() {
    return (
        <div className="container bannercontainer">
            <img src={bannerkim} alt="banner art"/>
            <header>Kharybdys</header>
            <SubBanner></SubBanner>
        </div>

    );
  }

export default Banner;