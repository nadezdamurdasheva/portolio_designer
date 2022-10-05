import React from "react";
import "./Skills.css";
import { SkillsInfo } from "./SkillsInfo/SkillsInfo";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="aboutMe__container container">
        <p className="header text">Skills</p>
        <p className="text">I work in such programs as</p>
        <SkillsInfo />
      </div>
    </div>
  );
};
