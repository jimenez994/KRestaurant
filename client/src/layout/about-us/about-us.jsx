import React from 'react';
import './about-us.scss';
import jalapeno from '../../assets/images/jalapeno.png';
import smoke2 from '../../assets/images/smoke2.png';
import saltenas from '../../assets/images/saltenas.jpg';


const aboutUs = () => { 
  return (
    <section id="about-us">
    <div className="card">
      <img className="back-img lax" data-lax-opacity="0 1, vh 0.2" src={smoke2} alt="smoke"/>
      <img className="card-img" src={saltenas} alt="saltenas"/>
      <div className="card-text-box">
        <h1 className="fancy-text">Discover</h1>
        <h1 className="text-xl">Our story</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laborum corporis aperiam ab voluptates
          alias ullam Lorem. Aperiam ipsa quaerat minus ducimus autem nobis doloremque rerum, illum hic reiciendis reprehenderit asperiores quibusdam dolores placeat beatae voluptates</p>
        <p className="gold-text">more about us -></p>
      </div>
      <img className="top-side-img lax" data-lax-translate-y="(vh) 150, (-elh) -150" data-lax-anchor="self" src={jalapeno} alt=""/>
    </div>
  </section>
  );
}

export default aboutUs;