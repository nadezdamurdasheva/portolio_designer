import React from "react";
import "./Skills.css";
import photoshop from "../../images/photoshop.svg";
import illustrator from "../../images/illustrator.svg";
import after_effects from "../../images/after_effects.svg";
import figma from "../../images/figma.svg";
import star_black from "../../images/star_black.svg";
import star_gray from "../../images/star_gray.svg";


export const Skills = () => {
  return (
    <div className="skills">
      <div className="aboutMe__container container">
        <p className="header text">Skills</p>
        <p className="text">I work in such programs as</p>
        <div className="skills__info">
            <div className="program">
                <img className="program__img" alt="photoshop" src={photoshop}/>
                <p className="program__name">Adobe<br/>Photoshop</p>
                <div className="stars">
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                </div>
            </div>
            <div className="program">
                <img className="program__img" alt="photoshop" src={illustrator}/>
                <p className="program__name">Adobe<br/>Illustrator</p>
                <div className="stars">
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                </div>
            </div>
            <div className="program">
                <img className="program__img" alt="photoshop" src={after_effects}/>
                <p className="program__name">After<br/>Effects</p>
                <div className="stars">
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_gray}/>
                    <img alt="" src={star_gray}/>
                </div>
            </div>
            <div className="program">
                <img className="program__img" alt="photoshop" src={figma}/>
                <p className="program__name">Figma<br/></p>
                <div className="stars">
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_black}/>
                    <img alt="" src={star_gray}/>
                    <img alt="" src={star_gray}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
