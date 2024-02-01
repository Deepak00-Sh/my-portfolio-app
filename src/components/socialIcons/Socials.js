import React from "react";
import "./socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const icons = [
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
];

export function Icon(props) {
  return (
    <span className="iconSpan">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.icon}
      </a>
    </span>
  );
}
