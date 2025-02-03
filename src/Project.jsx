import React from "react";
import "./project.css";
import projectApi from "./projectApi";

export const Projects = () => {
  return (
    <section className=" container">
      <div className="title-header">
        <h3 className="title">My Work</h3>
        <p className="subtitle">
          A collection of my recent projects showcasing my skills in frontend
          development.
        </p>
      </div>
      <div className="fea">
        {projectApi.map((item, i) => (
          <div className="project-card" key={i}>
            <div className="project-img-container">
              <img src={item.img} alt={`project ${i}`} />
            </div>
            <h4>{item.headline}</h4>
            <p>{item.des}</p>
            <div className="flex">
              <a
                href={item.url}
                className="btns"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-github"></i> GitHub
              </a>
              <a className="btns" href="#!">
                <i className="uil uil-youtube"></i> YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
