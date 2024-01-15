import "./index.css";
import ProjectCard from "../project_card/projectCard";
import * as React from "react";

const projects = [
  {
    title: "REDSTONE HOLLOWS GAME DEV",
    previewDescription:
      "Designed and developed the immersive online world of Redstone Hollows, merging creativity with functionality to showcase the magic of indie game development.",
    pageDescription: "",
    previewImage: "../../assets/screenshot.png",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["REACT", "TAILWIND", "ADOBE ILLUSTRATOR", "UNITY", "ASEPRITE"],
    siteLink: "",
    githubLink: "",
    pdfLink: "",
  },
  {
    title: "CONTESSE STUDIOS",
    previewDescription:
      "Crafted a dynamic online portfolio blending creativity and functionality, inviting new freelance clients for media production work a glimpse into my world of photography, development, and design.",
    pageDescription: "",
    previewImage: "../../assets/norway.jpeg",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["REACT", "CSS", "ADOBE ILLUSTRATOR", "FRAMER"],
    siteLink: "",
    githubLink: "",
    pdfLink: "",
  },
  {
    title: "ARCÉ FASHION DESIGNER & PATTERNMAKER",
    previewDescription:
      "Crafted a sleek and stylish landing page for Arcé, seamlessly integrating design and development to elevate the brand's fashion experience.",
    pageDescription: "",
    previewImage: "../../assets/arce.png",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["REACT", "CSS", "ADOBE ILLUSTRATOR"],
    siteLink: "https://arcestudios.netlify.app/",
    githubLink: "https://github.com/juniperfawn/arce",
    pdfLink: "",
  },
  {
    title: "ATLAS REAL ESTATE",
    previewDescription:
      "Transformed the online presence of Atlas Real Estate, seamlessly integrating design and functionality to present an enticing digital landscape for exploring housing properties with a blend of innovation and user-friendly experience.",
    pageDescription: "",
    previewImage: "../../assets/interior.png",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["VUE", "VUE.JS", "ADOBE ILLUSTRATOR"],
    siteLink: "",
    githubLink: "",
    pdfLink: "",
  },
  {
    title: "URSULA LEATHER CRAFTSMENSHIP",
    previewDescription:
      "Unveiled the artistry of Ursula's leather craftsmanship through an intricately designed and skillfully developed online showcase, where tradition meets modern elegance.",
    pageDescription: "",
    previewImage: "../../assets/intro_img01.jpg",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["REACT", "SCSS", "ADOBE ILLUSTRATOR"],
    siteLink: "",
    githubLink: "https://github.com/juniperfawn/Ursula-Gutzwiller",
    pdfLink: "",
  },
  {
    title: "PORTFOLIO SITE",
    previewDescription:
      "My personal portfolio, where the fusion of captivating design and meticulous development brings digital experiences to life with a harmonious blend of creativity and functionality.",
    pageDescription: "",
    previewImage: "../../assets/arce.png",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["REACT", "CSS", "ADOBE ILLUSTRATOR", "FRAMER"],
    siteLink: "https://cerakocher.netlify.app/",
    githubLink: "https://github.com/juniperfawn/portfolio",
    pdfLink: "",
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
