import React from "react";
import toDo from "./assets for project/toDo.png";
import BridTv from "./assets for project/BridTv.png";
import GuessNumber from "./assets for project/guessNumber.png";
import ReactProject from "./assets for project/reactProject.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="big-container">
      <h1 className="title-project">Here are some of my projects</h1>
      <div className="projects-container">
        <div className="projects-first">
          <a href="nesto" className="img-href">
            <div className="image-overlay">
              <img src={toDo} alt="project" className="project-img" />
              <div className="image-text">
                <b>To-do List Project</b>
                <br></br>
                This is my first DOM project, To-do list, where you can add,
                cross, filter and delete elements.
              </div>
            </div>
          </a>
        </div>
        <a href="nesto" className="img-href">
          <div className="image-overlay">
            <img src={BridTv} alt="project" className="project-img" />
            <div className="image-text">
              <b>BridTv Project</b> <br></br>
              App for daily news, with most recent informations.
            </div>
          </div>
        </a>
        <a href="nesto" className="img-href">
          <div className="image-overlay">
            <img src={GuessNumber} alt="project" className="project-img" />
            <div className="image-text">
              <b>Guess Number Project</b>
              <br></br>
              Fun javascript game where you should guess given number.
            </div>
          </div>
        </a>
        <a href="nesto" className="img-href">
          <div className="image-overlay">
            <img src={ReactProject} alt="project" className="project-img" />
            <div className="image-text">
              <b>Booking Project</b>
              <br></br>
              App where you can register, login and logout, where you can see
              other profiles on this app, and where you can book a hotel.
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
