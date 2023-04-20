import React, { useState } from "react";
import './Menu.css';
import { MenuItem } from "./MenuItem/MenuItem";
import burger from "../../images/burger.svg";
import { useTranslation } from 'react-i18next';


export const Menu = () => {
  const [menuActive,setMenuActive] = useState(false);
  const { t } = useTranslation();
  const menuArray = [t('home_link'),t('about_me'),t('skills'),t('portfolio'),t('contacts')];
  

  return (
  <nav className="links_container">
    <div className="links_img_container">
      <ul className={menuActive ? "links" : "links links-hide"}>
        {menuArray.map(el => {
          return (<MenuItem key={el} nameLink={el}/>)
        })}
      </ul>
      <img className="burger" alt="menu" src={burger} onClick={() => setMenuActive(!menuActive)}/>
    </div>
  </nav>
  );
};
