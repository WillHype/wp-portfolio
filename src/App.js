import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
