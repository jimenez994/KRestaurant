import React from "react";
import "./header.scss";
import mobileImg from "../../assets/images/header/mobileImg.jpg";
import pikemacho from "../../assets/images/header/pikemacho.png";
import smoke from "../../assets/images/header/smoke.png";
import salt from "../../assets/images/header/salt.png";
import onions from "../../assets/images/header/onions.png";
import egg from "../../assets/images/header/egg.png";
import potatos from "../../assets/images/header/potatos.png";


const Header = () => {

  return (
    <header id="home">
      <div className="header-text-box">
          <h1 className="heading-primary">A premium <br/> and authentic <br/> bolivian cuisine</h1>
          <a href="#contact">Contact us</a>
        </div>
        <div className="header-image-box">
          <img className="plate lax" data-lax-translate-y="0 0, 200 -100 | speed=.5, offset=20"
            data-lax-rotate="(vh) -45, (-elh) 45 | speed=.3" src={pikemacho} alt="pikemacho"/>
          <img className="lax" data-lax-opacity="0 1, elh 0" src={smoke} alt="smoke"/>
          <img className="lax" data-lax-translate-y="0 0, 200 -100 | speed=.3, offset=20" src={salt}
            alt="salt"/>
          <img className="smoke" src={onions} alt="onions"/>
          <img className="egg" src={egg} alt="egg"/>
          <img src={potatos} alt="potatos"/>
        </div>
        <div className="cover"></div>
        <img className="mobile-plate" src={mobileImg} alt="pikemacho"></img>
    </header>
  );
};

export default Header;
