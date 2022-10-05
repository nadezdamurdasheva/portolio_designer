import React from "react";
import "./ContactsLinks.css";
import linkedin from "../../../images/linkedin.svg";
import instagram from "../../../images/instagram.svg";
import behance from "../../../images/behance.svg";
import dribble from "../../../images/dribble.svg";
import { ContactsLink } from "./ContactsLink/ContactsLink";

const contactsArray = [linkedin,instagram,behance,dribble];

export const ContactsLinks = () => {
  return (
    <ul className="contacts__links">
      {contactsArray.map(el => {
        return (<ContactsLink imgName={el}/>)
      })}
    </ul>
  );
};
