import React from "react";
import "./Navbar.css";
export default function Navbar({ handleScrollToRef }) {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <button onClick={() => handleScrollToRef("homeRef")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScrollToRef("aboutRef")}>About</button>
        </li>
        <li>
          <button onClick={() => handleScrollToRef("contactRef")}>
            Contact
          </button>
        </li>
        <li>
          <button onClick={() => handleScrollToRef("cvRef")}>
            Download CV
          </button>
        </li>
      </ul>
    </nav>
  );
}
