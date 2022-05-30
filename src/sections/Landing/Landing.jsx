import "./Landing.scss";
import techNovaText from "../../resources/images/techNovaText.svg";
import CountDown from "./countdown";

const Landing = () => {
  return (
    <div className="banner">
      <div className="container">
        <img src={techNovaText} alt="TechNova" />
        <h1>University of Waterloo’s Women+ in Tech Hackathon</h1>
        <CountDown />
        <h2>until we blast off with another <b>amazing</b> hackathon! </h2>
        <h4>To get TechNova’s latest update, please join our mailing list:</h4>
      </div>
    </div>
  );
};

export default Landing;