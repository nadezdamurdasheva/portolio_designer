import React from "react";
import "./Skills.css";
import { SkillsInfo } from "./SkillsInfo/SkillsInfo";
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills aboutMe__container" id="skills">
        <p className="header text">{t('skills')}</p>
        <p className="text">{t('i_work_in')}</p>
        <SkillsInfo />
    </section>
  );
};
