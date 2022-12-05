import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
      <SocialLinks />
    </div>
  );
}

export default App;
