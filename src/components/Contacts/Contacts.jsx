import React from "react";
import "./Contacts.css";
import { ContactsLinks } from "./ContactsLinks/ContactsLinks";
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <footer className="contacts aboutMe__container" id="contacts">
        <p className="header text">{t('contacts')}</p>
        <p className="text">
        {t('want')}<br/> {t('welcome')}
        </p>
        <button type="button" className="contacts__btn">{t('send_message')}</button>
        <ContactsLinks />
        <p className="text contacts__text">
        {t('like_me_on')}<br/>LinkedIn, Instagram, Behance, Dribble
        </p>
    </footer>
  );
};
