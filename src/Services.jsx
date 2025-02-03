import React from "react";
import "./experience.css";

const Services = () => {
  const experience = [
    {
      companyName: "Techdome",
      role: "Full Stack Developer",
      startDate: "July-2023",
      endDate: "December-2024",
      description: `<ul>
        <li>Worked on 4+ web apps and led 2 projects as a Full Stack Developer.</li>
        <li>Implemented unit testing, code best practices, and strict PR reviews.</li>
        <li>Developed role-based authentication with AWS Cognito.</li>
        <li>Integrated logging, monitoring, IVR flow, and microservices architecture.</li>
        <li>Created an SEO-friendly marketing website using SvelteKit.</li>
      </ul>`,
    },
    {
      companyName: "Freelancing",
      role: "Frontend Developer",
      startDate: "December-2022",
      endDate: "June-2023",
      description: `<ul>
        <li>Developed a bank loan web app as a frontend developer.</li>
        <li>Created charts, multi-dimensional tables, and managed complex forms.</li>
        <li>Handled 6+ route-based forms with state management.</li>
        <li>Used RTK Query for API caching and efficient data fetching.</li>
      </ul>`,
    },
  ];

  return (
    <section className="container" id="experience">
      <div className="title-header">
        <h3 className="title">Experience</h3>
        <p className="subtitle">A brief overview of my professional journey</p>
      </div>
      <div className="experience-cards">
        {experience.map((item, index) => (
          <div key={index} className="experience-card">
            <div className="card-header">
              <h4 className="company-name">{item.companyName}</h4>
              <p className="role">{item.role}</p>
            </div>
            <div
              className="card-description fs-5"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
            <div className="card-footer">
              <span className="badge">
                {item.startDate} - {item.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
