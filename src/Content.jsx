import React, { useState } from "react";
import contentApi from "./contentApi";
import "./content.css";

const Content = () => {
  // Track which item is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container content-container" id="content">
      <div className="title-header">
        <h3 className="title">My Articles & Videos</h3>
        <p className="subtitle">
          Explore my latest articles and videos on frontend, backend, and
          industry trends.
        </p>
      </div>
      <div className="row">
        {contentApi.map((item, index) => (
          <div key={item.id} className="col-md-6 col-lg-4 my-3">
            <div className="content-card box-shadow">
              <h5>{item.title}</h5>
              <p className={expandedIndex === index ? "expanded" : "clamped"}>
                {item.description}
              </p>
              {item.description.length > 30 && (
                <span
                  className="read-more"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Show Less" : "Read More"}
                </span>
              )}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btns"
              >
                {item.type === "article"
                  ? "Read on Medium"
                  : "Watch on YouTube"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
