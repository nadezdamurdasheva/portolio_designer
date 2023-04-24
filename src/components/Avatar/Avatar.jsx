import React from "react";
import "./Avatar.css";
import avatar from "../../images/avatar.png";
import { useTranslation } from 'react-i18next';

export const Avatar = () => {
  const { t, i18n } = useTranslation();
  return (
    <header>
      <div className="container_avatar">
        <div className="fio">
          <p className="surname">{t('surname')}</p>
          <p className="name">{t('name')}</p>
        </div>
        <div className="info">
          <p className="info__elem">{t('job')}</p>
          <p className="info__elem">{t('info')}</p>
        </div>
        <ul className="languages">
          <li className="language language_ru">
            <button className="languages__btn" onClick={() => i18n.changeLanguage('ru')}>
              ru
            </button>
          </li>
          <li className="language">
            <button className="languages__btn" onClick={() => i18n.changeLanguage('en')}>
              eng
            </button>
          </li>
        </ul>
      </div>
      <img className="avatar" alt="avatar" src={avatar} />
    </header>
  );
};
