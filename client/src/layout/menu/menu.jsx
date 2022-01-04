import React from "react";
import './menu.scss';
import pikemacho from '../../assets/images/foodp.png';

const Menu = () => {
  return (
    <section id="menu">
      <div className="main-menu-text-box">
        <div className="main-menu-title">
          <h1 className="fancy-text">Discover</h1>
          <h1 className="text-xl">Our Menu</h1>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, dolorum nobis odit numquam repellendus, ab
          molestias aspernatur soluta blanditiis eligendi facere est nesciunt quae provident nemo, adipisci tempora
          dolores ad.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur laudantium repellat minus dolor quae
          odio,
        </p>
      </div>
      <div className="menu-item-left">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) 90, (-elh) -90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food"/>
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>

      <div className="menu-item-right">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) -90, (-elh) 90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food"/>
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>
      <div className="menu-item-left">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) 90, (-elh) -90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food" />
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>

      <div className="menu-item-right">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) -90, (-elh) 90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food"/>
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>
      <div className="menu-item-left">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) 90, (-elh) -90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food"/>
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>

      <div className="menu-item-right">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) -90, (-elh) 90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food"/>
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>
      <div className="menu-item-left">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) 90, (-elh) -90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food"/>
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>

      <div className="menu-item-right">
        <div className="menu-img-box">
          <img className="lax" data-lax-rotate="(vh) -90, (-elh) 90 | speed=.4" data-lax-anchor="self"
            src={pikemacho} alt="food"/>
        </div>
        <div className="menu-item-text">
          <h2 className="fancy-text">Appetizer</h2>
          <p className="lax" data-lax-opacity="0 1, vh 0.1" data-lax-anchor="self">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae quia eaque incidunt, reiciendis esse
          </p>
        </div>
      </div>
    </section>
  )

}

export default Menu;