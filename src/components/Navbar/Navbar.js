import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">Download CV</a>
        </li>
      </ul>
    </nav>
  );
}
