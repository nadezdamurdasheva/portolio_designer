import React, { useState } from "react";
import './Menu.css';
import { MenuItem } from "./MenuItem/MenuItem";
import burger from "../../images/burger.svg";

const menuArray = ['Home','About me','Skills','Portfolio','Contacts'];

export const Menu = () => {
  const [menuActive,setMenuActive] = useState(false);

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
