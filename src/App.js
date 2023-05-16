import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <div className="welcome-container">
          <Welcome />
        </div>
        <div className="scrollContainer">
          <Home />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
