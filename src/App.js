import "./App.css";
import Navigation from "./components/navigation/navigation";
import Home from "./Home";
import ProjectOverview from "./ProjectOverview";
import AboutMe from "./AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const projects = [
  {
    title: "REDSTONE HOLLOWS GAME DEV",
    previewDescription:
      "Designed and developed the immersive online world of Redstone Hollows, merging creativity with functionality to showcase the magic of indie game development.",
    pageDescription:
      "Since 2022 I’ve been working on all the visual assets of the independently produced PC based indie game currently titled, Redstone Hollows. I work on whatever you see associated with the game meaning 2D animation, character design, environments, UI design, and promotional content. I am working with one other person who works on the development in Unity. We collaborate on ideas, concepts, functionality, and overall visions for the future. This game has intentions of being fully published to the popular PC based platform Steam. ",
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
    tech: ["CMS", "SQUARESPACE", "ADOBE ILLUSTRATOR"],
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

function App() {
  return (
    <Router>
      console.log(typeof projects);
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home projects={projects} />}></Route>
          <Route exact path="/about" element={<AboutMe />}></Route>
          <Route
            exact
            path="/project"
            element={<ProjectOverview projects={projects} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
