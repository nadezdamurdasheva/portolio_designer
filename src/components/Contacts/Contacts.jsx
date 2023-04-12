import React from "react";
import "./Contacts.css";
import { ContactsLinks } from "./ContactsLinks/ContactsLinks";

export const Contacts = () => {
  return (
    <footer className="contacts aboutMe__container">
        <p className="header text">Contacts</p>
        <p className="text">
        Want to know more or just chat?<br/>You are welcome!
        </p>
        <button type="button" className="contacts__btn">Send message</button>
        <ContactsLinks />
        <p className="text contacts__text">
        Like me on<br/>LinkedIn, Instagram, Behance, Dribble
        </p>
    </footer>
  );
};
