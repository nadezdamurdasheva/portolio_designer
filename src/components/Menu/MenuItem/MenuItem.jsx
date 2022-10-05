import React from "react";
import './MenuItem.css';

export const MenuItem = ({nameLink}) => {
  return (
    <li className="menu_item"><a className="link" href="#">{nameLink}</a></li>
  );
};
