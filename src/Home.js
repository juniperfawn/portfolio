import Header from "./components/header/header";
import GradientOrb from "./components/gradient_orb/gradientorb";
import Coolbutton from "./components/button/button";
import ProjectContainer from "./components/projects_container/projectContainer";
import TechStack from "./components/techstack/techstack";
import Aboutmain from "./components/about_main/aboutmain";

const Home = (props) => {
  return (
    <>
      <Header />
      <ProjectContainer projects={props.projects} />
      <div className="wrapper">
        <div className="gradientOrb--middle">
          <GradientOrb />
        </div>
      </div>
      <Aboutmain />
      <TechStack />
      <div className="main__bottom--wrapper">
        <div className="bottom__button--wrapper">
          <a href="#navigation">
            <Coolbutton className="main__bottom--button" title="BACK TO TOP" />
          </a>
        </div>
        <div className="test">
          <GradientOrb />
        </div>
      </div>
    </>
  );
};
export default Home;
