import React from "react";
import "./ContactsLink.css";

export const ContactsLink = ({imgName}) => {
  return (
    <a className="contacts__link" href="#">
        <img className="contacts__img" alt="" src={imgName} />
    </a>
  );
};
