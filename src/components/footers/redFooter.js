import React from "react";
import { NavLink as Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../../style/redFooter.css";

const RedFooter = () => {
  return (
    <div className="redFooter">
      <div className="footerContainer">
        <Link to="/" className="topFooter">
          THETA TAU © 2018
        </Link>

        <div className="bottomFooter">
          <a
            href="https://www.facebook.com/thetatau.ucsd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/ucsdthetatau/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/ucsdthetatau"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:officialucsdtt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://github.com/UCSD-Theta-Tau-Website/TT-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedFooter;
