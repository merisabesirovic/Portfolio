import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar></Navbar>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
