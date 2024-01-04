import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo" style={{ fontFamily: "cursive" }}>
        Suyab Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/suyab-khan-b97120229"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/SUYAB123"
          target="_blank"
        >
          <BsGithub />
        </a>
        <a href="https://app.netlify.com/teams/suyab123/overview">
          <SiGeeksforgeeks />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Suyab :All rights reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;
