import "./index.css";
import Coolbutton from "../button/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation" id="navigation">
      <ul>
        <li>
          <Link to="/">WORK</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>CONTACT</li>
      </ul>
      <div className="navigtion__button--back">
        <Coolbutton title="BACK TO HOME" />
      </div>
    </nav>
  );
};
export default Navigation;
