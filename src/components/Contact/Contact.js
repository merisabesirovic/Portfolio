import React from "react";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
            <EmailIcon className="iconStyle"></EmailIcon>
          </a>
        </li>
        <li className="list-item">
          <a
            className="icon"
            href="https://github.com/merisabesirovic"
            target="blank"
          >
            <GitHubIcon className="iconStyle"></GitHubIcon>
          </a>
        </li>
        <li className="list-item">
          <a
            className="icon"
            href="https://www.linkedin.com/in/merisa-be%C5%A1irovi%C4%87-6195b7276/"
          >
            <LinkedInIcon className="iconStyle"></LinkedInIcon>
          </a>
        </li>
        <li className="list-item">
          <a
            className="icon"
            href="https://instagram.com/01101101_01100010?igshid=NTc4MTIwNjQ2YQ=="
          >
            <InstagramIcon className="iconStyle"></InstagramIcon>
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
