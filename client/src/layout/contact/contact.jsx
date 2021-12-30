import React from 'react';
import './contact.scss'

const Contact = () => { 
  return (
    <div id="contact">
      <div className="contact-location">
        <h4>Location</h4>
        <address>
          6763 Wilson Blvd <br/>
          Falls Church <br/>
          VA 22044
        </address>
        <a href="tel:1-562-867-5309">1-562-867-5309</a>
      </div>
      <div className="contact-hours">
        <h4>Working hours</h4>
        <p>Monday - Friday <span> 10am - 9pm </span></p>
        <p>Saturday - Sunday <span> 10am - 9pm </span></p>
      </div>
      <div className="contact-email">
        <h3 className="fancy-text">Khisko</h3>
        <a href="mailto:someone@example.com">khisko@gmail.com</a> <br/>
        <a href="tel:1-562-867-5309">1-562-867-5309</a>

      </div>
  </div>
  )
}

export default Contact;