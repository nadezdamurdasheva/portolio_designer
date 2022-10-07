import React from "react";
import "./Avatar.css";
import avatar from "../../images/avatar.png";

export const Avatar = () => {
  return (
    <header>
      <div className="container_avatar">
        <div className="fio">
          <p className="surname">Murdashev</p>
          <p className="name">Ildar</p>
        </div>
        <div className="info">
          <p className="info__elem">Designer</p>
          <p className="info__elem">53 years old, Moscow</p>
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
    </header>
  );
};
