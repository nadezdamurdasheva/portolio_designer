import React from "react";
import "./Portfolio.css";
import { PortfolioItems } from "./PortfolioItems/PortfolioItems";

export const Portfolio = () => {
  return (
    <section className="portfolio aboutMe__container">
        <p className="header text">Portfolio</p>
        <PortfolioItems />
    </section>
  );
};
