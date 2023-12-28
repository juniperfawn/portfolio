import "./index.css";
import GradientOrb from "../gradient_orb/gradientorb";

const ProjectPage = () => {
  return (
    <div className="projectPage__wrapper">
      <div className="projectPage">
        <div className="projectPage__about">
          <h1>REDSTONE HOLLOWS - GAME DEV</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            pellentesque velit, et facilisis massa. In mollis cursus velit,
            vitae imperdiet purus tincidunt vel. Nulla metus nisl, mollis eget
            posuere scelerisque, aliquam a odio. Nam tempor purus ipsum, quis
            pulvinar nibh tincidunt at. Nullam iaculis enim at risus vestibulum
            congue. In imperdiet diam eget est imperdiet vestibulum.
          </p>
          <p>
            Etiam ac purus ut diam molestie viverra vitae quis nulla. Donec
            commodo nec augue nec iaculis. Quisque enim lectus, malesuada nec
            fringilla vitae, porttitor sit amet felis. Nulla at lacus tincidunt,
            tincidunt dui at, dapibus metus. Proin dictum ultricies lacus.
            Pellentesque non lectus eleifend, lobortis velit quis, facilisis
            purus.
          </p>
        </div>
        <div className="projectPage__skillPills">
          <div className="skillPills">
            <p>HTML</p>
          </div>
          <div className="skillPills">
            <p>REACT</p>
          </div>
          <div className="skillPills">
            <p>TAILWIND</p>
          </div>
          <div className="skillPills">
            <p>ILLUSTRATOR</p>
          </div>
        </div>
        <div className="mockup">
          <div className="mockup__desktop">
            <img src={require("../../assets/desktop.png")} alt="" />
          </div>
          <div className="mockup__mobile">
            <img src={require("../../assets/mobile.png")} alt="" />
          </div>
          <div className="mockup__links">
            <div className="mockup__link">
              <p>LIVE SITE</p>
              <div className="button-border__corner --1"></div>
              <div className="button-border__corner --2"></div>
              <div className="button-border__corner --3"></div>
              <div className="button-border__corner --4"></div>
            </div>
            <div className="mockup__link">
              <p>GITHUB REPOSITORY</p>
              <div className="button-border__corner --1"></div>
              <div className="button-border__corner --2"></div>
              <div className="button-border__corner --3"></div>
              <div className="button-border__corner --4"></div>
            </div>
            <div className="mockup__link">
              <p>DESIGN PDF</p>
              <div className="button-border__corner --1"></div>
              <div className="button-border__corner --2"></div>
              <div className="button-border__corner --3"></div>
              <div className="button-border__corner --4"></div>
            </div>
          </div>
          <div className="projectPage__gradientOrb">
            <GradientOrb />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
