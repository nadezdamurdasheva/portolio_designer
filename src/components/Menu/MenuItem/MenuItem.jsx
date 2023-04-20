import React from "react";
import './MenuItem.css';

export const MenuItem = ({nameLink, id}) => {
  return (
    <li className="menu_item"><a className="link" href={"#"+id}>{nameLink}</a></li>
  );
};
