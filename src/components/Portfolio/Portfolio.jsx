import React from "react";
import "./Portfolio.css";
import portfolio_1 from "../../images/portfolio_1.png";
import portfolio_2 from "../../images/portfolio_2.png";
import portfolio_3 from "../../images/portfolio_3.png";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="aboutMe__container container">
        <p className="header text">Portfolio</p>
        <div className="portfolio__all">
          <div className="portfolio__info">
            <img className="portfolio__img" alt="" src={portfolio_1} />
            <a className="portfolio__link" href="#">
              Online fashion store - Homepage
            </a>
          </div>
          <div className="portfolio__info">
            <img className="portfolio__img" alt="" src={portfolio_2} />
            <a className="portfolio__link" href="#">
              Reebok Store - Concept
            </a>
          </div>
          <div className="portfolio__info">
            <img className="portfolio__img" alt="" src={portfolio_3} />
            <a className="portfolio__link" href="#">
              Braun Landing Page - Concept
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
