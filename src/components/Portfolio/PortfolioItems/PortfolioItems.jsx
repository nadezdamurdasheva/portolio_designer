import React from "react";
import "./PortfolioItems.css";
import portfolio_1 from "../../../images/portfolio_1.png";
import portfolio_2 from "../../../images/portfolio_2.png";
import portfolio_3 from "../../../images/portfolio_3.png";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";
import { useTranslation } from 'react-i18next';


export const PortfolioItems = () => {
  const { t } = useTranslation();
  const portfolioArray = [
    { id: 1,text: t('online_fashion_store'), img: portfolio_1 },
    { id: 2,text: t('reebok_store'), img: portfolio_2 },
    { id: 3,text: t('braun_landing'), img: portfolio_3 },
  ];
  return (
    <ul className="portfolio_items">
        {portfolioArray.map(el => {
            return (<PortfolioItem key={el.id} text={el.text} img={el.img}/>)
        })}
    </ul>
  );
};
