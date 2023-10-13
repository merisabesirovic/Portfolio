import React from "react";
import mojNp from "./assets for project/mojnpslika.png";
import licence from "./assets for project/regapp.png";
import Space from "./assets for project/explore-space.png";
import Shopping from "./assets for project/project-shopping.png";
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

        <a
          href="https://dreamy-melba-45b5d1.netlify.app/"
          Using
          target="_blank"
          without
          rel="noreferrer"
          className="img-href"
        >
          <div className="image-overlay">
            <img src={Space} alt="project" className="project-img" />
            <div className="image-text">
              <b>Explore space-app</b>
              <br></br>
              Explore the cosmos with my space app! Read space news, marvel at
              Mars photos, learn about planets, and see what the Hubble
              Telescope is capturing right now.
            </div>
          </div>
        </a>
        <a
          href="https://funny-malasada-c9091a.netlify.app/"
          Using
          target="_blank"
          without
          rel="noreferrer"
          className="img-href"
        >
          <div className="image-overlay">
            <img src={Shopping} alt="project" className="project-img" />
            <div className="image-text">
              <b>E-commerce app</b>
              <br></br>
              React E-Commerce Demo: A simple React project with Material-UI
              showcasing a variety of random items in a virtual shop.
            </div>
          </div>
        </a>
        <a
          href="https://licence-app.pages.dev/"
          Using
          target="_blank"
          without
          rel="noreferrer"
          className="img-href"
        >
          <div className="image-overlay">
            <img src={licence} alt="project" className="project-img" />
            <div className="image-text">
              <b>Licence and registration calculator</b>
              <br></br>
              Crafted specifically for professionals in the field, this app
              accelerates vehicle registration workflows by swiftly computing
              accurate prices for cars.
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
