import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Experience from './Experience/Experience';
import Skills from './SkillCard/Skills';
import Projects from './Projects/Projects';
import CodingProfiles from './CodingProfiles/CodingProfiles';
import Social from './Socials/Social';
import Resume from './Resume/Resume';
import { useEffect } from 'react';

function App() {
  // Ensure scrolling to the correct section when visiting URL directly
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Header />

      <div id="about">
        <About />
      </div>
      <div style={{ marginBottom: "2rem" }}></div>

      <div id="experience">
        <Experience />
      </div>
      <div style={{ marginBottom: "2rem" }}></div>

      <div id="skills">
        <Skills />
      </div>
      <div style={{ marginBottom: "2rem" }}></div>

      <div id="projects">
        <Projects />
      </div>
      <div style={{ marginBottom: "2rem" }}></div>

      <div id="coding-profiles">
        <CodingProfiles />
      </div>
      <div style={{ marginBottom: "2rem" }}></div>

      <div id="socials">
        <Social />
      </div>
      <div style={{ marginBottom: "2rem" }}></div>

      

      <Footer />
    </>
  );
}

export default App;
