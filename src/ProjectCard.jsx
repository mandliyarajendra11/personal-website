// ProjectCard.jsx
import React, { useState } from "react";

const ProjectCard = ({ item, index }) => {
  // Manage the expanded state for the description
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  // You can adjust the threshold based on your requirements
  const isLongDescription = item.des.length > 200;

  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={item.img} alt={`project ${index}`} />
      </div>
      <h4>{item.headline}</h4>
      {/* Apply a different CSS class based on whether the text is expanded */}
      <p className={isExpanded ? "expanded" : "clamped"}>{item.des}</p>
      {isLongDescription && (
        <span className="read-more" onClick={toggleReadMore}>
          {isExpanded ? "Show Less" : "Read More"}
        </span>
      )}
      <div className="flex">
        {!item.url ? (
          <p className="fw-bold">{item.where}</p>
        ) : (
          <>
            <a
              href={item.url}
              className="btns"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github"></i> GitHub
            </a>
            <a className="btns" href="#!">
              Deploy Url
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
