import "./index.css";
import Css from "../../assets/css.svg";
import Figma from "../../assets/figma.svg";
import Github from "../../assets/github.svg";
import Html from "../../assets/html5.svg";
import Illustrator from "../../assets/illustrator.svg";
import Javascript from "../../assets/javascript.svg";
import Nextjs from "../../assets/nextjs.svg";
import React from "../../assets/react.svg";
import Tailwind from "../../assets/tailwind.svg";
import Vscode from "../../assets/vscode.svg";
import Vue from "../../assets/vuejs.svg";

const TechStack = () => {
  return (
    <div className="techstack__wrapper">
      <div className="techstack">
        <div className="topWrapper">
          <div className="techstack__icons figma">
            <img src={Figma} alt="" />
            <p>FIGMA</p>
            {/* <p>FIGMA</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Illustrator} alt="" />
            {/* <p>ILLUSTRATOR</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Tailwind} alt="" />
            {/* <p>TAILWIND</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Javascript} alt="" />
            {/* <p>JAVASCRIPT</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Github} alt="" />
            {/* <p>GITHUB</p> */}
          </div>
        </div>
        <div className="bottomWrapper">
          <div className="techstack__icons">
            <img src={Nextjs} alt="" />
            {/* <p>NEXTJS</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Css} alt="" />
            {/* <p>CSS</p> */}
          </div>
          <div className="techstack__icons">
            <img src={React} alt="" />
            {/* <p>REACT</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Vue} alt="" />
            {/* <p>VUE</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Html} alt="" />
            {/* <p>HTML</p> */}
          </div>
          <div className="techstack__icons">
            <img src={Vscode} alt="" />
            {/* <p>VSCODE</p> */}
          </div>
        </div>
        {/* <h2>TECH STACK</h2> */}
        <h2 className="word fancy">
          <span className="letter">T</span>
          <span className="letter">E</span>
          <span className="letter">C</span>
          <span className="letter">H</span>
          {/* <span className="letter">/</span>
          <span className="letter">/</span> */}
          <span className="letter">S</span>
          <span className="letter">T</span>
          <span className="letter">A</span>
          <span className="letter">C</span>
          <span className="letter">K</span>
        </h2>
      </div>
    </div>
  );
};
export default TechStack;
