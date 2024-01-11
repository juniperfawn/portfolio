import "./index.css";
import GradientOrb from "../gradient_orb/gradientorb";

const About = () => {
  return (
    <div className="about__wrapper">
      <div className="about__text">
        <div className="about__title--wrapper">
          <h1>ABOUT</h1>
        </div>
        <p>
          I am a Swiss American Creative Developer who originally grew up in
          Colorado, USA but now currently is based out of the Netherlands. I
          love creating everything media! I completed my University degrees in
          Media Production and Media Design with a minor in Engineering of
          Technology Arts & Media.{" "}
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
          <img src={require("../../assets/portrait.png")} alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;
