import React from "react";
import "./Program.css";
import starBlackImg from "../../../../images/star_black.svg";
import starGrayImg from "../../../../images/star_gray.svg";

export const Program = ({ nameImg, text, stars }) => {
    
const getStars = (stars) => {
    let starsArray = [];
    const starsGray = 5 - stars;
    for(let i = 1; i <= stars; i++) {
        starsArray.push(<img alt="" src={starBlackImg}/>)
    }
    for(let i = 1; i <= starsGray; i++) {
        starsArray.push(<img alt="" src={starGrayImg}/>)
    }
    return starsArray;
}

  return (
    <li className="program">
      <img className="program__img" alt="photoshop" src={nameImg} />
      <p className="program__name">
        {text.split("\n").map((el) => {
          return (
            <>
              {el}
              <br />
            </>
          );
        })}
      </p>
      <div className="stars">
        {getStars(stars)}
      </div>
    </li>
  );
};
