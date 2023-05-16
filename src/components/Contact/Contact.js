import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const gmail = <FontAwesomeIcon icon={faEnvelope} />;
const github = <FontAwesomeIcon icon={faGithub} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="smallText">Let's talk</p>
      <p>
        Feel free to get in touch with me. You can reach me through email or
        connect with me on social media.
      </p>
      <ul className="contact-list">
        <li className="list-item">
          <a href="mailto:besiroviccm@gmail.com">{gmail}</a>
        </li>
        <li className="list-item">
          <a href="https://github.com/merisabesirovic" target="blank">
            {github}
          </a>
        </li>
        <li className="list-item">
          <a href="">{linkedin}</a>
        </li>
        <li className="list-item">
          <a href="">{instagram}</a>
        </li>
      </ul>
    </div>
  );
}
