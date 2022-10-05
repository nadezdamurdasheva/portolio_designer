import React from "react";
import "./PortfolioItems.css";
import portfolio_1 from "../../../images/portfolio_1.png";
import portfolio_2 from "../../../images/portfolio_2.png";
import portfolio_3 from "../../../images/portfolio_3.png";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";

const portfolioArray = [
  { id: 1,text: "Online fashion store - Homepage", img: portfolio_1 },
  { id: 2,text: "Reebok Store - Concept", img: portfolio_2 },
  { id: 3,text: "Braun Landing Page - Concept", img: portfolio_3 },
];

export const PortfolioItems = () => {
  return (
    <ul className="portfolio_items">
        {portfolioArray.map(el => {
            return (<PortfolioItem key={el.id} text={el.text} img={el.img}/>)
        })}
    </ul>
  );
};
