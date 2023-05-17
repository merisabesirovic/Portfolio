import React from "react";
import "./Navbar.css";

export default function Navbar({ handleScrollToRef }) {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <button className="btn" onClick={() => handleScrollToRef("homeRef")}>
            Home
          </button>
        </li>
        <li>
          <button className="btn" onClick={() => handleScrollToRef("aboutRef")}>
            About
          </button>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => handleScrollToRef("contactRef")}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => handleScrollToRef("projectsRef")}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            style={{ borderBottom: "1px solid #1e1815" }}
            className="btn"
            onClick={() => handleScrollToRef("cvRef")}
          >
            Download CV
          </button>
        </li>
      </ul>
    </nav>
  );
}
