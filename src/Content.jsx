import React from "react";
import contentApi from "./contentApi";
import "./content.css";
const Content = () => {
  return (
    <div className="container  ">
      <div className="title-header">
        <h3 className="title">My Articles & Videos</h3>
        <p className="subtitle">
          Explore my latest articles and videos on frontend, backend, and
          industry trends.
        </p>
      </div>
      <div className="row">
        {contentApi.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4 my-3">
            <div className="content-card box-shadow">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
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
