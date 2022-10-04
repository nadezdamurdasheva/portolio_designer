import React from "react";
import "./Avatar.css";
import avatar from "../../images/avatar.png";

export const Avatar = () => {
  return (
    <div className="container">
      <div className="container_avatar">
        <div className="fio">
          <div className="surname">Murdashev</div>
          <div className="name">Ildar</div>
        </div>
        <div className="info">
          <div className="info__elem">Designer</div>
          <div className="info__elem">53 years old, Moscow</div>
        </div>
        <ul className="languages">
          <li className="language language_ru">
            <a className="languages__link" href="#">
              ru
            </a>
          </li>
          <li className="language">
            <a className="languages__link" href="#">
              eng
            </a>
          </li>
        </ul>
      </div>
      <img className="avatar" alt="avatar" src={avatar} />
    </div>
  );
};
