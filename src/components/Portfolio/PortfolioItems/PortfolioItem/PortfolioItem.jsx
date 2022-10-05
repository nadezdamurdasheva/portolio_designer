import React from "react";
import "./PortfolioItem.css";

export const PortfolioItem = ({text,img}) => {
  return (
    <div className="portfolio__item">
        <img className="portfolio__img" alt="" src={img} />
        <a className="portfolio__link" href="#">
          {text}
        </a>
      </div>
  );
};
