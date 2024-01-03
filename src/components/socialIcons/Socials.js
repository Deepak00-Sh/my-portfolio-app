import React from "react";
import "./socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    iconName: "github",
    icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    url: "https://github.com/yourusername",
  },
  {
    iconName: "linkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    iconName: "twitter",
    icon: <FontAwesomeIcon icon={faTwitter} size="2x" />,
    url: "https://twitter.com/yourusername",
  },
  {
    iconName: "Instagram",
    icon: <FontAwesomeIcon icon={faSquareInstagram} size="2x" />,
    url: "https://instagram.com/yourusername",
  },
];

function Icon(props) {
  return (
    <span className="iconSpan">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.icon}
      </a>
    </span>
  );
}

function SocialsLinksList() {
  return (
    <div className="socialList">
      {icons.map((icon) => {
        return <Icon key={icon.iconName} icon={icon.icon} url={icon.url} />;
      })}
    </div>
  );
}

export default SocialsLinksList;
