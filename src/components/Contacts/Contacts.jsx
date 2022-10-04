import React from "react";
import "./Contacts.css";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";
import behance from "../../images/behance.svg";
import dribble from "../../images/dribble.svg";


export const Contacts = () => {
  return (
    <footer className="contacts">
      <div className="aboutMe__container contacts__container container">
        <p className="header text">Contacts</p>
        <p className="text">
        Want to know more or just chat?<br/>You are welcome!
        </p>
        <button className="contacts__btn">Send message</button>
        <div className="contacts__links">
            <a href="#"><img alt="" src={linkedin}/></a>
            <a href="#"><img alt="" src={instagram}/></a>
            <a href="#"><img alt="" src={behance}/></a>
            <a href="#"><img alt="" src={dribble}/></a>
        </div>
        <p className="text contacts__text">
        Like me on<br/>LinkedIn, Instagram, Behance, Dribble
        </p>
      </div>
    </footer>
  );
};
