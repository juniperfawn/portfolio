import "./index.css";
import GradientOrb from "../gradient_orb/gradientorb";
import { useParams } from "react-router-dom";

const ProjectPage = (props) => {
  const { projectId } = useParams();
  const project = props.projects[projectId];

  return (
    <div className="projectPage__wrapper">
      <div className="projectPage">
        <div className="projectPage__about">
          <h1>{project.title}</h1>
          <p>{project.pageDescription1}</p>
          <p>{project.pageDescription2}</p>
        </div>
        <div className="projectPage__skillPills">
          {project.tech.map((tech, index) => (
            <div className="skillPills" key={index}>
              <p>{tech}</p>
            </div>
          ))}
        </div>
        <div className="mockup">
          <div className="mockup__desktop">
            <img src={require("../../assets/arce.jpg")} alt="" />
          </div>
          <div className="mockup__mobile">
            <img src={require("../../assets/arcemobile.jpg")} alt="" />
          </div>
          <div className="mockup__links">
            <div className="mockup__link">
              <a href={project.siteLink} target="_blank" rel="noreferrer">
                <p>LIVE SITE</p>
                <div className="button-border__corner --1"></div>
                <div className="button-border__corner --2"></div>
                <div className="button-border__corner --3"></div>
                <div className="button-border__corner --4"></div>
              </a>
            </div>
            <div className="mockup__link">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <p>GITHUB REPOSITORY</p>
                <div className="button-border__corner --1"></div>
                <div className="button-border__corner --2"></div>
                <div className="button-border__corner --3"></div>
                <div className="button-border__corner --4"></div>
              </a>
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
