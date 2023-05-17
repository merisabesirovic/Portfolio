import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const iconStyle = {
  fontSize: "2rem",
  transition: "transform 0.3s ease",
};

const gmail = (
  <FontAwesomeIcon className="hover-icon" icon={faEnvelope} style={iconStyle} />
);
const github = (
  <FontAwesomeIcon className="hover-icon" icon={faGithub} style={iconStyle} />
);
const linkedin = (
  <FontAwesomeIcon className="hover-icon" icon={faLinkedin} style={iconStyle} />
);
const instagram = (
  <FontAwesomeIcon
    className="hover-icon"
    icon={faInstagram}
    style={iconStyle}
  />
);

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="biggerText">
        Feel free to get in touch with me. You can reach me through email or
        connect with me on social media.
      </p>
      <ul className="contact-list">
        <li className="list-item">
          <a className="icon" href="mailto:besiroviccm@gmail.com">
            {gmail}
          </a>
        </li>
        <li className="list-item">
          <a
            className="icon"
            href="https://github.com/merisabesirovic"
            target="blank"
          >
            {github}
          </a>
        </li>
        <li className="list-item">
          <a
            className="icon"
            href="https://www.linkedin.com/in/merisa-be%C5%A1irovi%C4%87-6195b7276/"
          >
            {linkedin}
          </a>
        </li>
        <li className="list-item">
          <a
            className="icon"
            href="https://instagram.com/01101101_01100010?igshid=NTc4MTIwNjQ2YQ=="
          >
            {instagram}
          </a>
        </li>
      </ul>
      <p className="biggerText">
        I'm excited to connect with you and discuss any opportunities or
        collaborations. Don't hesitate to reach out!
      </p>
    </div>
  );
}
