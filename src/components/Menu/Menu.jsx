import React from "react";
import './Menu.css';
import { MenuItem } from "./MenuItem/MenuItem";

const menuArray = ['Home','About me','Skills','Portfolio','Contacts'];

export const Menu = () => {
  return (
  <nav className="links_container">
    <ul className="links">
      {menuArray.map(el => {
        return (<MenuItem key={el} nameLink={el}/>)
      })}
    </ul>
  </nav>
  );
};
