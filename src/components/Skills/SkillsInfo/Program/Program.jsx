import React, { Fragment } from "react";
import "./Program.css";
import starBlackImg from "../../../../images/star_black.svg";
import starGrayImg from "../../../../images/star_gray.svg";

export const Program = ({ nameImg, text, stars }) => {
    
const getStars = (stars) => {
    let starsArray = [];
    for(let i = 0; i <= stars - 1; i++) {
        starsArray.push(<img key={i} alt="" src={starBlackImg}/>);
    }
    for(let i = stars; i <= 4; i++) {
        starsArray.push(<img key={i} alt="" src={starGrayImg}/>);
    } 
    return starsArray;
}

  return (
    <li className="program">
      <img className="program__img" alt="photoshop" src={nameImg} />
      <p className="program__name">
        {text.split("\n").map((el) => {
          return (
            <Fragment key={el}>
              {el}
              <br />
            </Fragment>
          );
        })}
      </p>
      <div className="stars">
        {getStars(stars)}
      </div>
    </li>
  );
};
