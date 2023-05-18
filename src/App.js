import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const cvRef = useRef(null);

  const handleScrollToRef = (refName) => {
    const ref = getRefByName(refName);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getRefByName = (refName) => {
    switch (refName) {
      case "homeRef":
        return homeRef;
      case "aboutRef":
        return aboutRef;
      case "contactRef":
        return contactRef;
      case "projectsRef":
        return projectsRef;
      case "cvRef":
        return cvRef;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Navbar handleScrollToRef={handleScrollToRef} />
      <div className="content-container">
        <div className="welcome-container">
          <Welcome />
        </div>
        <div className="scrollContainer">
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
