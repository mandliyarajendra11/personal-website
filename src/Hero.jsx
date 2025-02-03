import React from "react";
import "./hero.css";
import raj2 from "./raju.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero__content">
          <h3 className="subtitle">Hi, I'm</h3>
          <h1 className="hero__title">Rajendra Mandliya</h1>
          <h3 className="hero__subtitle">
            A Creative <span className="text-color">Web Developer</span>
          </h3>
          <p className="hero__description">
            Passionate about creating beautiful and functional web experiences.
            Specializing in front-end development with a focus on user-centered
            design.
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
            <div
              className="image-placeholder"
              style={{ backgroundImage: `url(${raj2})` }}
            ></div>
            <div className="image-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
