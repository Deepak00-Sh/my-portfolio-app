import React from "react";
import { icons, Icon } from "./Socials";

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
