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
          foundation in software development principles. Furthermore, I have
          actively participated in intensive IT bootcamps to acquire practical,
          hands-on experience in specific technologies and frameworks. This
          blend of formal education and immersive training equips me with a
          well-rounded skill set to proficiently address intricate software
          engineering challenges.
        </p>
      </div>
      <div className="shape" style={{ marginTop: "30px" }}></div>
      <h1 className="about-title">My core services and capabilities</h1>
      <div className="skills">
        <div className="skilovi">
          <p
            className="skills-text"
            style={{ borderRight: "1px solid beige", paddingRight: "20px" }}
          >
            HTML/CSS: Proficiency in writing semantic HTML markup and styling
            with CSS, including CSS frameworks (e.g., Bootstrap, Tailwind CSS).
            JavaScript: Strong knowledge of JavaScript and understanding of DOM
            manipulation, asynchronous programming, and ES6+ features. Frontend
            Frameworks/Libraries: Experience with popular frontend frameworks
            like React.
          </p>
          <p className="skills-text">
            UI/UX Principles: Understanding of user interface (UI) and user
            experience (UX) principles, and ability to create visually appealing
            and user-friendly interfaces.
          </p>
        </div>
        <div className="skilovi">
          <p
            className="skills-text"
            style={{
              borderRight: "1px solid beige",
              paddingRight: "20px",
            }}
          >
            Responsive Web Design: Ability to create websites that adapt and
            function well on different devices and screen sizes.
          </p>
          <p className="skills-text">
            Performance Optimization: Knowledge of techniques for optimizing
            frontend performance, such as code splitting, lazy loading, and
            caching.
          </p>
        </div>
      </div>
    </div>
  );
}
