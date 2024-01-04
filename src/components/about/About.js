import React from "react";
import "./about.css";
import MYImage from "../../assets/prokhan.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <hr />
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={MYImage} />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h5>projects</h5>
              <small>5+ Completed</small>
            </article>
            <article className="about_card">
              <h5>Skills</h5>
              <small>10+ Completed</small>
            </article>
            <article className="about_card">
              <h5>Internship</h5>
              <small>On Newton school</small>
            </article>
          </div>
          <p>
            Hello there! I'm suyabkhan, a passionate and aspiring full-stack
            developer ready to make waves in the tech world. My journey into the
            realm of coding began with a deep curiosity and has evolved into a
            solid skill set that spans both front-end and back-end development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
