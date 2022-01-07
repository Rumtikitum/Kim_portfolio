import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import About from "./components/About/About";
import Divider from "./components/Divider";
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Hero></Hero>
      <Divider></Divider>
      <About></About>
      <Content></Content>
    </div>
  );
}

export default App;
