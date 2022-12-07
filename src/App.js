import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { About } from "./Components/About";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";
import GithubStats from "./Components/githubStats";
import { MyCarousal } from "./Components/my-carousal/my-carousel";
import { Navbaar } from './Components/Navbar';
import { Projects } from "./Components/Project";
import Skills from "./Components/Skills";


function App() {
  return (
    <div className="App">
      <MyCarousal/>
     
      <Navbaar/>
      <About/>
      <Skills/>
      <Projects/>
      <GithubStats/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
