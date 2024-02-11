import "./App.css";
import Navigation from "./components/navigation/navigation";
import Home from "./Home";
import ProjectPage from "./components/project_page/projectPage";
import AboutMe from "./AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import arceDesktop from "./assets/arce.jpg";
import arceMobile from "./assets/arcemobile.jpg";
import portfolioDesktop from "./assets/portfolioDesktop.jpg";
import portfolioMobile from "./assets/portfolioMobile.jpg";
import contesseStudiosDesktop from "./assets/contesseDesktop.jpg";
import contesseStudiosMobile from "./assets/contesseMobile.jpg";

const projects = [
  {
    title: "REDSTONE HOLLOWS GAME DEV",
    previewDescription:
      "Designed and developed the immersive online world of Redstone Hollows, merging creativity with functionality to showcase the magic of indie game development.",
    pageDescription1:
      "Since 2022 I’ve been working on all the visual assets of the independently produced PC based indie game currently titled, Redstone Hollows. I work on whatever you see associated with the game meaning 2D animation, character design, environments, UI design, and promotional content. I am working with one other person who works on the development in Unity. We collaborate on ideas, concepts, functionality, and overall visions for the future. This game has intentions of being fully published to the popular PC based platform Steam.",
    pageDescription2:
      "For marketing purposes I designed and developed this landing page for Redstone Hollows so those following along the development journey or are curious about the game can have this additional supplement.",
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
    pageDescription1:
      "Contesse Studios is my freelance studio that I started during my time at University. As someone who has multiple disciplines that I’m interested in, it allowed me to work with clients and provide multiple avenues of content creation. I started as a freelance photographer but it has further blossomed into graphic design, website design, website development, and social media marketing.",
    pageDescription2:
      "This is a website prospective clients can come to to get a sampling of different services I can provide.",
    previewImage: "../../assets/norway.jpeg",
    desktopMockup: contesseStudiosDesktop,
    mobileMockup: contesseStudiosMobile,
    tech: ["REACT", "ADOBE ILLUSTRATOR", "FRAMER"],
    siteLink: "https://contessestudios.netlify.app/",
    githubLink: "https://github.com/juniperfawn/contessestudios",
    pdfLink: "",
  },
  {
    title: "ARCÉ CLOTHING BRAND",
    previewDescription:
      "Crafted a sleek and stylish landing page for Arcé, seamlessly integrating design and development to elevate the brand's fashion experience.",
    pageDescription1:
      "arcé is a fashion brand currently being developed out of Amsterdam. arcé is a brand that blends classic workwear silhouettes and modern cuts, with a focus on quality fabrics and construction. While the designer of arcé works on his capsule collection to release at the beginning of summer I am working on creating a portfolio showcase style website. I will also be assisting in graphic design, branding, and styling shoots to show off the collection.",
    pageDescription2:
      "Currently arcé only has a landing page since all of the work behind the scenes is underway. Once the development is closer to completion I will update the preview here.",
    previewImage: "../../assets/arce.png",
    desktopMockup: arceDesktop,
    mobileMockup: arceMobile,
    tech: ["REACT", "FIGMA", "ADOBE ILLUSTRATOR"],
    siteLink: "https://arcestudios.netlify.app/",
    githubLink: "https://github.com/juniperfawn/arce",
    pdfLink: "",
  },
  {
    title: "ATLAS REAL ESTATE",
    previewDescription:
      "Transformed the online presence of Atlas Real Estate, seamlessly integrating design and functionality to present an enticing digital landscape for exploring housing properties with a blend of innovation and user-friendly experience.",
    pageDescription1:
      "Atlas Real Estate is a faux project I created myself. It is using an API to get housing information while also having functionality to create one’s own housing listings through a form. This was practice for myself with APIs, Form handling, and trying out a different framework (Vue.js), and Vuex. With lots of different aspects to this project I’d say I found it challenging yet very fulfilling. It was fun to take a project from the base to completion with more interactive elements that a user can partake in.",
    pageDescription2:
      "In addition to completing the development in Vue I also created the design for this website.",
    previewImage: "../../assets/interior.png",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["VUE.JS", "VUEX", "ADOBE ILLUSTRATOR"],
    siteLink: "",
    githubLink: "",
    pdfLink: "",
  },
  {
    title: "URSULA LEATHER CRAFTSMENSHIP",
    previewDescription:
      "Unveiled the artistry of Ursula's leather craftsmanship through an intricately designed and skillfully developed online showcase, where tradition meets modern elegance.",
    pageDescription1:
      "Ursula is a leather craftsman based in Switzerland. She specializes in making saddles for horses by hand. I’ve always had the desire to work with craftsmen since I genuinely admire people who make things by hand after years of study and craft. Luck struck when I met Ursula in need of a website and some help with design and branding. Ursula’s leather crafting talent doesn’t just stop at saddles though, she creates bridles, wallets, ect",
    pageDescription2:
      "Since this was a freelance client who wanted to be able to make her own edits to her content as time went on I offered to make her website using a CMS instead of hard coding the content. This way she had some more freedom in the long run to alter her content as time went on. I like having experience in both hard-coding websites but also working with CMSs since many clients may prefer such methods.",
    previewImage: "../../assets/intro_img01.jpg",
    desktopMockup: "../../assets/screenshot.png",
    mobileMockup: "../../assets/screenshot.png",
    tech: ["CMS", "READYMAG", "ADOBE ILLUSTRATOR"],
    siteLink: "",
    githubLink: "https://github.com/juniperfawn/Ursula-Gutzwiller",
    pdfLink: "",
  },
  {
    title: "PORTFOLIO SITE",
    previewDescription:
      "My personal portfolio, where the fusion of captivating design and meticulous development brings digital experiences to life with a harmonious blend of creativity and functionality.",
    pageDescription1:
      "This is the page for my web developer portfolio site you’re currently on. So welcome! You’ve probably already seen most of the fun interactions here and there, and if you haven’t, I suggest you poke around a little. I come from a background in design and photography so I started with the design of my portfolio and then eventually looked into libraries like Framer to add some interaction. Quickly becoming one of my favorite libraries. Through designing and developing this and my other projects I’ve discovered that I’d love to explore more about web animation and hopefully some 3D web development. Since I like to explore different media mediums I also like the idea of combining them. I want to create web based games and interactions so people can find the web as playful and expressive as I find it.",
    pageDescription2:
      "So moving forward I want to continue to explore animation, interaction, and a way to combine multimedia over the web. Imagine photography, video, 3D, pixel art, you name it I’d love to delve more into those worlds. I believe having a background in design/media moving into the web has greater advantages than I could have believed. Thank goodness I gave code another chance after my intro to coding c# and python class haha! Hope you enjoy your look around here.",
    previewImage: "../../assets/arce.png",
    desktopMockup: portfolioDesktop,
    mobileMockup: portfolioMobile,
    tech: ["REACT", "REACT ROUTER", "FRAMER MOTION", "ADOBE ILLUSTRATOR"],
    siteLink: "https://cerackocher.com/",
    githubLink: "https://github.com/juniperfawn/portfolio",
    pdfLink: "",
  },
];

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="App">
          <Navigation />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home projects={projects} />}
            ></Route>
            <Route exact path="/about" element={<AboutMe />}></Route>
            <Route
              exact
              path="/project/:projectId"
              element={<ProjectPage projects={projects} />}
            ></Route>
          </Routes>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
