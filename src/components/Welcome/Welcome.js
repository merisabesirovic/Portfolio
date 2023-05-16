import React from "react";
import "./Welcome.css";
import MyImage from "./portfolioImage/cvPhoto.JPEG";
export default function Welcome() {
  return (
    <div className="bg">
      <div className="welcome-container">
        <p className="myName">Hi, I'm Merisa.</p>
        <p className="welcome-to">
          Welcome to<br></br> my portfolio!
        </p>
        <img className="myPhoto" src={MyImage} alt="myPhoto"></img>
      </div>
    </div>
  );
}
