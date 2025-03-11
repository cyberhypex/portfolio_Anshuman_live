import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Experience from './Experience/Experience';
import Skills from './SkillCard/Skills';
import Projects from './Projects/Projects';
import  CodingProfiles  from './CodingProfiles/CodingProfiles';
import  Social  from './Socials/Social';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <div style={{ marginBottom: "0.5rem" }}></div>
      <About />
      <div style={{ marginBottom: "2rem" }}></div>
      <Experience />
      <div style={{ marginBottom: "2rem" }}></div>
      <Skills />
      <div style={{ marginBottom: "2rem" }}></div>
      <Projects />
      <CodingProfiles />
      <div style={{ marginBottom: "2rem" }}></div>
      <Social />
      <Footer />
      

      
    
    </>
  )
}

export default App;
