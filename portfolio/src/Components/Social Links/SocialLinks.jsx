import React from "react";
import "./SocialLinks.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="social_links">
      <a
        className="hover"
        href="https://www.linkedin.com/in/hassannadeem861/"
        target="_blank"
      >
        <BsLinkedin style={{ color: "black", fontSize: "2em" }} />
      </a>
      <a
        className="hover"
        href="https://github.com/Hassannadeem861?tab=repositories"
        target="_blank"
      >
        <FaGithubSquare style={{ color: "black", fontSize: "2em" }} />
      </a>
      <a
        className="hover"
        href="https://www.facebook.com/profile.php?id=100071947539344"
        target="_blank"
      >
        <BsFacebook style={{ color: "black", fontSize: "2em" }} />
      </a>
      <a className="hover" href="https://wa.me/+923164593747" target="_blank">
        <BsWhatsapp style={{ color: "black", fontSize: "2em" }} />
      </a>
    </div>
  );
};

export default SocialLinks;
