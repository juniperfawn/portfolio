import "./index.css";
import ProjectCard from "../project_card/projectCard";
import * as React from "react";

const ProjectContainer = (props) => {
  return (
    <div className="projectContainer">
      {props.projects.map((card, projectId) => {
        return (
          <ProjectCard
            key={projectId}
            projectId={projectId}
            title={card.title}
            previewDescription={card.previewDescription}
          />
        );
      })}
    </div>
  );
};
export default ProjectContainer;
