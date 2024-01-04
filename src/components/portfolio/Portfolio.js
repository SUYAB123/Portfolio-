import React from "react";
import "./portfolio.css";
import ecom from "../../assets/amazon.png";
import currency from "../../assets/drwaing.png";
import mezwaan from "../../assets/mezwaan.png";
import calcu from "../../assets/typing.png";
import passwordgen from "../../assets/passwordgen.jpg";
import formdeg from "../../assets/formdeg.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My React Work</h5>
      <h2>My Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ecom} />
          </div>
          <h3>Ecommerce Website Amazon clone</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="https://amazon-clone-suyab.netlify.app/" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={calcu} />
          </div>
          <h3>typing test app</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="https://typing-suyab.netlify.app" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={currency} />
          </div>
          <h3>drawing app</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="https://drawing-suyab.netlify.app" className="btn btn-primary">
              Live Demo
            </a>
            
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={mezwaan} />
          </div>
          <h3>Mazwaan</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="https://1foodwebsite.netlify.app/" className="btn btn-primary">
              Live Demo
            </a>
            
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={passwordgen} />
          </div>
          <h3>Password Generator</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn ">
              Github
            </a>
            <a href="" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={formdeg} />
          </div>
          <h3>Registration Form</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
