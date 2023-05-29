import React, { useState } from "react";
import "./Projects.scss";
import { projects } from "../../data";
import rocket from "../../img/rocket.png";

const Projects = () => {
  const [category, setCategory] = useState(projects);

  const handleButtonClick = (categItem) => {
    setCategory((prevCategory) => {
      const updatedItems = projects.filter((currentEle) => {
        return currentEle.cat === categItem;
      });
      return updatedItems;
    });
  };

  return (
    <div className="projects">
      <div className="filter">
        <div className="filterOptions" onClick={() => setCategory(projects)}>
          All
        </div>
        <div
          className="filterOptions"
          onClick={() => handleButtonClick("realtime")}
        >
          Real Time
        </div>
        <div
          className="filterOptions"
          onClick={() => handleButtonClick("reactjs")}
        >
          Reactjs
        </div>
        <div
          className="filterOptions"
          onClick={() => handleButtonClick("html")}
        >
          HTML, CSS & JS
        </div>
      </div>
      <div className="projectCards">
        {category.map((project) => (
          <div className="card" key={project.cat}>
            <a href={project.link} target=" ">
              <img src={project.img} alt="" />
            </a>

            <h3 className="title">{project.title}</h3>
            <div className="bottom">
              <div className="stacks">
                <div className="stack">{project.stacks.stack1}</div>
                <div className="stack">{project.stacks.stack2}</div>
              </div>
              <div className="link">
                <a href={project.link} target=" "></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
