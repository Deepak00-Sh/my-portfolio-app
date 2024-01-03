import "./leftSection.css";
import IntroContainer from "../sections/IntroContainer";
import Navigation from "../sections/Navigation";
import SocialsLinksList from "../socialIcons/Socials";

function LeftSection() {
  return (
    <div className="mainLeftSection">
      <IntroContainer />
      <Navigation />
      <SocialsLinksList />
    </div>
  );
}

export default LeftSection;
