import React from "react";
import mojNp from "./assets for project/mojnpslika.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="big-container">
      <h1 className="title-project">
        Here are some of my projects and previous experience
      </h1>
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
                <b>Moj Novi Pazar</b> <br></br>I worked as frontend developer at
                MojNp. We made a town guide app for tourists, highlighting the
                best local spots for dining, sightseeing, and exploration.
              </div>
            </div>
          </a>
        </div>
        <div>
          <ul>
            <li className="txt">
              Internship at{" "}
              <a href="https://moonstruck.io/" rel="noreferrer" target="_blank">
                MoonStruck{" "}
              </a>
            </li>
            <li className="txt">
              Frontend Developer at{" "}
              <a
                href="https://mojnovipazar.info/"
                rel="noreferrer"
                target="_blank"
              >
                MojNp{" "}
              </a>
            </li>
            <li className="txt">
              Teaching kids at{" "}
              <a
                href="https://centarnit.com/en/"
                rel="noreferrer"
                target="_blank"
              >
                Center Nit{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
