import React from "react";
import "./Portfolio.css";
import { PortfolioItems } from "./PortfolioItems/PortfolioItems";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="aboutMe__container container">
        <p className="header text">Portfolio</p>
        <PortfolioItems />
      </div>
    </div>
  );
};
