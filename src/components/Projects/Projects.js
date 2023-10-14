import React from "react";
import mojNp from "./assets for project/mojnpslika.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="big-container">
      <h1 className="title-project">Here are some of my projects</h1>
      <div className="projects-container">
        <div className="projects-first">
          <a
            href="https://mojnovipazar.info/"
            Using
            target="_blank"
            without
            rel="noreferrer"
            className="img-href"
          >
            <div className="image-overlay">
              <img src={mojNp} alt="project" className="project-img" />
              <div className="image-text">
                <b>Moj Novi Pazar</b> <br></br>
                Designed a town guide app for tourists, highlighting the best
                local spots for dining, sightseeing, and exploration.
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
