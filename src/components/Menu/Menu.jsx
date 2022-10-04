import React from "react";
import './Menu.css';

export const Menu = () => {
  return (
  <nav className="links_container container">
    <ul className="links">
        <li className="block_link"><a className="link" href="#">Home</a></li>
        <li className="block_link"><a className="link" href="#">About me</a></li>
        <li className="block_link"><a className="link" href="#">Skills</a></li>
        <li className="block_link"><a className="link" href="#">Portfolio</a></li>
        <li className="block_link"><a className="link" href="#">Contacts</a></li>
    </ul>
  </nav>
  );
};
