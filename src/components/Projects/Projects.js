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
        <a href="nesto" className="img-href">
          <img src={toDo} alt="project" className="project-img" />
        </a>
        <a href="nesto" className="img-href">
          <img src={BridTv} alt="project" className="project-img" />
        </a>
        <a href="nesto" className="img-href">
          <img src={GuessNumber} alt="project" className="project-img" />
        </a>
        <a href="nesto" className="img-href">
          <img src={ReactProject} alt="project" className="project-img" />
        </a>
      </div>
    </>
  );
}
