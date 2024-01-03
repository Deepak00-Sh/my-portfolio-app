import React from "react";
import "./socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    iconName: "github",
    icon: <FontAwesomeIcon icon={faGithub} />,
    url: "https://github.com/yourusername",
  },
  {
    iconName: "linkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    iconName: "twitter",
    icon: <FontAwesomeIcon icon={faTwitter} />,
    url: "https://twitter.com/yourusername",
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
