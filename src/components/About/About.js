import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-container">
      <div className="text-about-container">
        <h1 className="about-title">About me</h1>
        <p className="about-text">
          I am a dedicated and creative frontend developer, constantly seeking
          opportunities to learn and grow.
        </p>
        <p className="about-text">
          Also, I am a software engineering student with a good academic
          foundation in software development principles, including data
          structures, algorithms, and object-oriented programming. Furthermore,
          I have actively participated in intensive IT bootcamps to acquire
          practical, hands-on experience in specific technologies and
          frameworks. This blend of formal education and immersive training
          equips me with a well-rounded skill set to proficiently address
          intricate software engineering challenges.
        </p>
      </div>
      <div className="shape" style={{ marginTop: "30px" }}></div>
      <h1 className="about-title">My core services and capabilities</h1>
      <div className="skills">
        <p className="skills-text">
          HTML/CSS/SCSS: Proficiency in writing semantic HTML markup and styling
          with CSS, including CSS frameworks (e.g., Bootstrap, MUI).
        </p>
        <p className="skills-text">
          UI/UX Principles: Understanding of user interface (UI) and user
          experience (UX) principles, and ability to create visually appealing
          interfaces.
        </p>
        <p className="skills-text">
          Responsive Web Design: Ability to create websites that adapt and
          function well on different devices and screen sizes.
        </p>
        <p className="skills-text">
          JavaScript/TypeScript: I have a strong proficiency in JavaScript,
          utilizing its features and frameworks to develop interactive web
          applications..
        </p>
        <p className="skills-text">
          React: I possess a comprehensive understanding of React and its
          ecosystem, leveraging its component-based architecture to build
          scalable and responsive user interfaces.
        </p>
      </div>
    </div>
  );
}
