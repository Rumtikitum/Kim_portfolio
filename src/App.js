import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import About from "./components/About/About";
import Divider from "./components/Divider";
import './App.css';
import Works from "./components/Works/Works";
import Services from "./components/Services/Services";
import Description from "./components/Description/Description";
import Tail from "./components/Tail/Tail";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Hero></Hero>
      <Divider></Divider>
      <About></About>
      <Content></Content>
      <Works></Works>
      <Services></Services>
      <Description></Description>
      <Tail></Tail>
    </div>
  );
}

export default App;
