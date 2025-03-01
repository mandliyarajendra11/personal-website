import React from "react";
import "./hero.css";
import raj2 from "./images/profile2.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container container">
        <div className="hero__content">
          <h3 className="subtitle">Hi, I'm</h3>
          <h1 className="hero__title">Rajendra Mandliya</h1>
          <h3 className="hero__subtitle">
            Building Impactful Digital Experiences
          </h3>
          <p className="hero__description">
            With over 4.5+ years in the industry, I’ve built and led 12+ projects
            and managed teams of developers. My technical strengths include
            Node.js, Fast API, React.js, and robust logging & monitoring. I also
            contribute to the tech community through my writings and YouTube
            content.
          </p>
          <div className="hero__buttons">
            <a href="#contact" className="btns">
              Get In Touch
            </a>
            <a href="#work" className="btn-icon">
              View Work <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div className="hero__image">
          <div className="image-wrapper">
            {/* The circular image layout */}
            <div
              className="image-placeholder"
              style={{ backgroundImage: `url(${raj2})` }}
            ></div>
            {/* Optionally, you can remove or update the background element */}
            <div className="image-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
