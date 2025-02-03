// Projects.jsx
import React from "react";
import "./project.css";
import projectApi from "./projectApi";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="projects-section container" id="work">
      <div className="title-header">
        <h3 className="title">My Work</h3>
        <p className="subtitle">
          A collection of my recent projects showcasing my skills in frontend
          development.
        </p>
      </div>
      <div className="fea">
        {projectApi.map((item, i) => (
          <ProjectCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
