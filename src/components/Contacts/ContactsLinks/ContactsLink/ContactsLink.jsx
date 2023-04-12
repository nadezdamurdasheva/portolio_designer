import React from "react";
import "./ContactsLink.css";

export const ContactsLink = ({imgName}) => {
  return (
    <li className="contacts_link_container">
      <a className="contacts_link" href="#">
        <img className="contacts__img" alt="" src={imgName} />
      </a>
    </li>
  );
};
