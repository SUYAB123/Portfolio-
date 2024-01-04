import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/suyab-khan-b97120229"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/SUYAB123" target="_blank">
        <BsGithub />
      </a>
      <a href="https://app.netlify.com/teams/suyab123/overview">
        <SiGeeksforgeeks />
      </a>
    </div>
  );
};
export default HeaderSocials;
