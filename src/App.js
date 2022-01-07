import Banner from "./components/Banner"
import Hero from "./components/Hero";
import Content from "./components/Content";
import About from "./components/About";
import Divider from "./components/Divider";
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Hero></Hero>
      <Divider></Divider>
      <About></About>
      <Divider></Divider>
      <Content></Content>
    </div>
  );
}

export default App;
