import React from "react";
import "./Skills.css";
import { SkillsInfo } from "./SkillsInfo/SkillsInfo";

export const Skills = () => {
  return (
    <section className="skills aboutMe__container">
        <p className="header text">Skills</p>
        <p className="text">I work in such programs as</p>
        <SkillsInfo />
    </section>
  );
};
