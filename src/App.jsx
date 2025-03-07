import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Experience from './Experience/Experience';

function App() {

  return (
    <>
      <Header />
      <div style={{ marginBottom: "0.5rem" }}></div>
      <About />
      <div style={{ marginBottom: "2rem" }}></div>
      <Experience />
    </>
  )
}

export default App;
