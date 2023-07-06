import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const githubUrl = "https://github.com/yunusemree55";
  const linkedinUrl = "https://www.linkedin.com/in/yunus-emre-çiçek-7a4ab3208/";

  return (
    <>
      <footer>
        <div className="social-media">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a target="_blank" href={linkedinUrl}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" href={githubUrl}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
