import React from "react";
import toDo from "./assets for project/toDo.png";
import BridTv from "./assets for project/BridTv.png";
import GuessNumber from "./assets for project/guessNumber.png";
import ReactProject from "./assets for project/reactProject.png";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <h1 className="title-project">Here are some of my projects</h1>
      <div className="projects-container">
        <div className="projects-first">
          <a href="nesto" className="img-href">
            <div className="image-overlay">
              <img src={toDo} alt="project" className="project-img" />
              <div className="image-text">To-do List Project</div>
            </div>
          </a>
        </div>
        <a href="nesto" className="img-href">
          <div className="image-overlay">
            <img src={BridTv} alt="project" className="project-img" />
            <div className="image-text">BridTv Project</div>
          </div>
        </a>
        <a href="nesto" className="img-href">
          <div className="image-overlay">
            <img src={GuessNumber} alt="project" className="project-img" />
            <div className="image-text">Guess Number Project</div>
          </div>
        </a>
        <a href="nesto" className="img-href">
          <div className="image-overlay">
            <img src={ReactProject} alt="project" className="project-img" />
            <div className="image-text">React Project</div>
          </div>
        </a>
      </div>
    </>
  );
}
