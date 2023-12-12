import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItem";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(true);
  const handleClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="nav-logo">
          Trippz<span>.</span>
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i
            className={menuClicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
          ></i>
        </div>
        <ul className={menuClicked ? "nav-menu" : "nav-menu active"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;