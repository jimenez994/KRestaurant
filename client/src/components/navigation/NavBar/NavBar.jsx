import React from "react";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <h4 className="fancy-text">Khisko</h4>
      </div>
      <ul className="nav-links ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;