import React from "react";
import "./Portfolio.css";
import { PortfolioItems } from "./PortfolioItems/PortfolioItems";
import { useTranslation } from 'react-i18next';

export const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section className="portfolio aboutMe__container" id="portfolio">
        <p className="header text">{t('portfolio')}</p>
        <PortfolioItems />
    </section>
  );
};
