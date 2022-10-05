import React from "react";
import "./SkillsInfo.css";
import photoshop from "../../../images/photoshop.svg";
import illustrator from "../../../images/illustrator.svg";
import after_effects from "../../../images/after_effects.svg";
import figma from "../../../images/figma.svg";

import { Program } from "./Program/Program";

const skillsArray = [
  { img: photoshop, text: "Adobe\nPhotoshop", stars: 5 },
  { img: illustrator, text: "Adobe\nIllustrator", stars: 5 },
  { img: after_effects, text: "After\nEffects", stars: 3 },
  { img: figma, text: "Figma", stars: 3 },
];

export const SkillsInfo = () => {
  return (
    <div className="skills__info">
        {skillsArray.map(el => {
            return (<Program nameImg={el.img} text={el.text} stars={el.stars}/>)
        })}
    </div>
  );
};
