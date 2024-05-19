import React from "react";
import "./hero.css";
import snippet from "../../assets/snippet.png";
import Circle from "../../assets/circle.svg";
import Shape from "../../assets/boxshaped.svg";
import css from "../../assets/social/css.png";
import figma from "../../assets/social/figma.png";
import interfac from "../../assets/social/interface.png";
import atom from "../../assets/social/atom.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="shapes">
          <img src={Circle} alt="" className="circle" />
          <img src={Shape} alt="" className="box" />
          <img src="" alt="" />
        </div>
        <div className="hero-txt">
          <h1>
            I'm <span>쇼크룩</span>
          </h1>
          <h1 className="frontend">
            <span>Frontend</span> Developer
          </h1>
          <button><a href="mailto:uphill7165@gmail.com">Contact</a></button>
        </div>
      </div>
      <div className="hero-right">
        <img src={snippet} alt="" className="hero-img" />
        <div className="social-icons">
          <img src={css} alt="" className="github" />
          <img src={interfac} alt="" className="instagram" />
          <img src={atom} alt="" className="youtube" />
          <img src={figma} alt="" className="linked-in" />
        </div>
      </div>
    </div>
  );
};
