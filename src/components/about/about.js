import "./index.css";
import GradientOrb from "../gradient_orb/gradientorb";
// import { motion as m } from "framer-motion";

const About = () => {
  return (
    <div className="about__wrapper">
      <div className="about__text">
        <div className="about__title--wrapper">
          <h1>ABOUT</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          pellentesque velit, et facilisis massa. In mollis cursus velit, vitae
          imperdiet purus tincidunt vel. Nulla metus nisl, mollis eget posuere
          scelerisque, aliquam a odio. Nam tempor purus ipsum, quis pulvinar
          nibh tincidunt at. Nullam iaculis enim at risus vestibulum congue. In
          imperdiet diam eget est imperdiet vestibulum.{" "}
        </p>
        <p>
          Etiam ac purus ut diam molestie viverra vitae quis nulla. Donec
          commodo nec augue nec iaculis. Quisque enim lectus, malesuada nec
          fringilla vitae, porttitor sit amet felis. Nulla at lacus tincidunt,
          tincidunt dui at, dapibus metus. Proin dictum ultricies lacus.
          Pellentesque non lectus eleifend, lobortis velit quis, facilisis
          purus.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut{" "}
        </p>
      </div>
      <div className="about__visual">
        <div className="about__gradientOrb--wrapper">
          <GradientOrb />
        </div>
        <div className="about__portrait--wrapper">
          <img src={require("../../assets/portrait.png")} />
        </div>
      </div>
    </div>
  );
};
export default About;
