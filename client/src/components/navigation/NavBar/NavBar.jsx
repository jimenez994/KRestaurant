import React, { useState } from "react";
import "./Navbar.scss";


const NavBar = () => {
  
  const [isActive, setIsAisActive] = useState(false);

  const initial = ["home", "about-us", "menu", "events", "contact","reservations"];

  const handleToggle = () => { 
    setIsAisActive(!isActive);
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <h4 className="fancy-text">Khisko</h4>
      </div>
      <ul className={`nav-links ${isActive ? "nav-active" : ""}`} >
        {initial.map((link, index) => {
          console.log(link, index);
          return (
            <li key={index} style={!isActive ? {animation:""}:{animation: `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`}}>
              <a href={`#${link}`}>{link}</a>
            </li>
          );
        })}
      </ul>
      <div className={`burger ${isActive ? "toggle" : ""}`} onClick={handleToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;