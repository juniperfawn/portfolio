import "./index.css";
import Coolbutton from "../button/button";
import { Link } from "react-router-dom";

const Aboutmain = () => {
  return (
    <div className="getToKnow__Wrapper">
      <div className="getToKnow">
        <p className="aboutme__p">
          Want to get to know a little bit more about the developer behind this?
        </p>
        <div className="getToKnow__extra">
          <p className="desktopDisplayOnly">
            Get to know my back story and who I am as a developer but even more{" "}
            <br></br>
            as a person through my various interests and adventures.
          </p>
          <Link to="/about">
            <Coolbutton title="ABOUT ME" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Aboutmain;
