import "./index.css";
import ProjectCard from "../project_card/projectCard";
import * as React from "react";

const projects = [
  {
    title: "REDSTONE HOLLOWS GAME DEV",
    previewDescription:
      "Designed and developed the immersive online world of Redstone Hollows, merging creativity with functionality to showcase the magic of indie game development.",
    image: "../../assets/screenshot.png",
  },
  {
    title: "CONTESSE STUDIOS",
    previewDescription:
      "Crafted a dynamic online portfolio blending creativity and functionality, inviting viewers into my world of photography and photojournalism, where moments are captured with passion and precision.",
    image: "../../assets/norway.jpeg",
  },
  {
    title: "ARCÉ FASHION DESIGNER & PATTERNMAKER",
    previewDescription:
      "Crafted a sleek and stylish online presence for Arce, seamlessly integrating design and development to elevate the brand's fashion experience.",
    image: "../../assets/arce.png",
  },
  {
    title: "ATLAS REAL ESTATE",
    previewDescription:
      "Transformed the online presence of Atlas Real Estate, seamlessly integrating design and functionality to present an enticing digital landscape for exploring housing properties with a blend of innovation and user-friendly experience.",
    image: "../../assets/interior.png",
  },
  {
    title: "URSULA LEATHER CRAFTSMENSHIP",
    previewDescription:
      "Unveiled the artistry of Ursula's leather craftsmanship through an intricately designed and skillfully developed online showcase, where tradition meets modern elegance.",
    image: "../../assets/intro_img01.jpg",
  },
  {
    title: "PORTFOLIO SITE",
    previewDescription:
      "My personal portfolio, where the fusion of captivating design and meticulous development brings digital experiences to life with a harmonious blend of creativity and functionality.",
    image: "../../assets/arce.png",
  },
];

const ProjectContainer = () => {
  return (
    <div className="projectContainer">
      {projects.map((card, index) => {
        return (
          <ProjectCard
            key={index}
            title={card.title}
            previewDescription={card.previewDescription}
          />
        );
      })}
    </div>
  );
};
export default ProjectContainer;
