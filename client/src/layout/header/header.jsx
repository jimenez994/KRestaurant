import React, { useState } from "react";
import "./header.scss";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState('0');


  console.log(isOpen);
  const onClick = () => { 
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsVisible('200px');
    } else {
      setIsVisible('0');
    }
  }

  return (
    <div className="header" >
      header
      <p>lorem ipsum dolor si fkdlfnk jk jk j k jkl j  klj k t amet, consect</p>
      <p>lorem ipsum dolor si fkdlfnk jk jk j k jkl j  klj k t amet, consect</p>
      <p>lorem ipsum dolor si fkdlfnk jk jk j k jkl j  klj k t amet, consect</p>
      <p>lorem ipsum dolor si fkdlfnk jk jk j k jkl j  klj k t amet, consect</p>
      <p>lorem ipsum dolor si fkdlfnk jk jk j k jkl j  klj k t amet, consect</p>
      <p>lorem ipsum dolor si fkdlfnk jk jk j k jkl j  klj k t amet, consect</p>
      <button onClick={onClick}>some</button>
      <div id="block" style={{width: `${isVisible}`}}></div>
    </div>
  );
};

export default Header;
