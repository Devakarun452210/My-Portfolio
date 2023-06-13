import React from "react";
import "./Skills.scss";
import html from "../../img/skills/html-5.png";
import css from "../../img/skills/css-3.png";
import js from "../../img/skills/js.png";
import react from "../../img/skills/react.png";
import sass from "../../img/skills/sass.png";
import tailwind from "../../img/skills/tailwind.webp";
import mongo from "../../img/skills/mongodb-wordmark.svg";
import express from "../../img/skills/expressjs-dark.svg";
import node from "../../img/skills/nodejs.svg";

const Skills = () => {
  return (
    <div className="skills">
       <div className="skill">
        <div className="logo">
          <img src={html} alt="" />
        </div>
        <div className="logo">
          <img src={css} alt="" />
        </div>
        <div className="logo">
          <img src={js} alt="" className="js" />
        </div>
        <div className="logo">
          <img src={typescript} alt="" className="js" />
        </div>
        <div className="logo">
          <img src={react} alt="" className="react" />
        </div>
        <div className="logo">
          <img src={next} alt="" className="tail" />
        </div>
        <div className="logo">
          <img src={sass} alt="" className="tail" />
        </div>
        <div className="logo">
          <img src={tailwind} alt="" className="tail" />
        </div>
        <div className="logo">
          <img src={mongo} alt="" className="tail" />
        </div>
        <div className="logo">
          <img src={express} alt="" className="js" />
        </div>
        <div className="logo">
          <img src={node} alt="" className="js" />
        </div>
        <div className="logo">
          <img src={git} alt="" className="js" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
