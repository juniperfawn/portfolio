import "./index.css";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      <Link to={`/project/${props.projectId}`}>
        <h2>{props.title}</h2>
        <p>{props.previewDescription}</p>
      </Link>
    </div>
  );
};
export default ProjectCard;
