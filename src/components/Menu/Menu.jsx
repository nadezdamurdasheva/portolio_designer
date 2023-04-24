import React, { useState } from "react";
import './Menu.css';
import { MenuItem } from "./MenuItem/MenuItem";
import burger from "../../images/burger.svg";
import { useTranslation } from 'react-i18next';


export const Menu = () => {
  const [menuActive,setMenuActive] = useState(false);
  const { t } = useTranslation();
  const menuArray = [
    {id: 'home_link', text: t('home_link')},
    {id: 'about_me', text: t('about_me')},
    {id: 'skills', text: t('skills')},
    {id: 'portfolio', text: t('portfolio')},
    {id: 'contacts', text: t('contacts')}];
  
  return (
      <nav className="links_container">
        <div className="links_img_container">
          <ul className={menuActive ? "links" : "links links-hide"}>
            {menuArray.map(el => {
              return (<MenuItem key={el.id} nameLink={el.text} id={el.id}/>)
            })}
          </ul>
          <img className="burger" alt="menu" src={burger} onClick={() => setMenuActive(!menuActive)}/>
        </div>
        
      </nav>
  
  );
};
