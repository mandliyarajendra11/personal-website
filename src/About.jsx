import React from "react";
import profile from "./raj2.jpg";
import resume from "./raj.pdf";
import "./about.css";

export const About = () => {
  return (
    <section className="about-section container">
      <div className="about-grid">
        <div className="about-image">
          <img src={profile} alt="Rajendra Mandliya" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Rajendra Mandliya</strong>, a passionate Full-Stack
            Developer with <strong>2+ years</strong> of experience in building
            scalable and efficient web applications. I specialize in{" "}
            <strong>React, Node.js, and FastAPI</strong>, with expertise in API
            development, deployment, and performance optimization.
          </p>
          <p>
            I have a strong foundation in{" "}
            <strong>Data Structures and Algorithms</strong>, solving 500+
            problems on LeetCode, which helps me write optimized and efficient
            code. Additionally, I have experience leading a team of 5
            developers, working on both service-based and product-based
            projects.
          </p>
          <p>
            I’m always eager to learn and explore new technologies. You can also
            check out my{" "}
            <a
              href="https://medium.com/@mandliyarajendra1"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              technical articles on Medium
            </a>
            , where I share insights from my development journey.
          </p>
          <p className="cta">🚀 Let’s build something amazing together!</p>
          <a
            href={resume}
            download="Rajendra_Mandliya_Resume.pdf"
            className="btn-download"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
