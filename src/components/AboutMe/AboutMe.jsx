import React from "react";
import "./AboutMe.css";
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="aboutMe aboutMe__container" id="about_me">
        <p className="header text">{t('about_me')}</p>
        <p className="text">
        {t('hello')}<br/>
        {t('interest')}
        </p>
        <p className="text">
        {t('work')}
        </p>
        <p className="text">
        {t('ready')}
        </p>
    </section>
  );
};
