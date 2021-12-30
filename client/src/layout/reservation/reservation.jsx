import React from 'react';
import './reservation.scss'

const Reservation = () => { 
  return (
    <section id="reservation">
    <div className="reservation">
      <div>
        <h1>reservation</h1>
        <h1 className="book-table">Book your table</h1>
        <a className="contact-link" href="#contact">Contact us</a>
        {/* <img src="./images/restaurant.jpg" alt=""/>  */}
      </div>
    </div>
  </section>
  )
}

export default Reservation;