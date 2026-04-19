import React, { Component } from 'react';
import './Bookings.css'
import Uppernav from '../Components/Uppernav';
import book1 from '../Assets/book1.png'
import Nav from '../Components/Nav';
import { Link } from "react-router-dom";

const Bookings = () => {

    return ( <>
    
    <Uppernav />
    
   
  <div className="container27">
      
  <Link to="/Home">
  <button className="back27">← Back</button>
</Link>

      <h2 className="title27">MY BOOKINGS</h2>

      <div className="tabs27">
        <span className="active27">Upcoming</span>
        <span>Completed</span>
        <span>Cancelled</span>
      </div>

      {[1, 2, 3].map((item) => (
        <div className="card27" key={item}>
          
          <div className="rowTop27">
            <img
              src={book1}
              alt=""
              className="bookingimage"
            />

            <div>
              <p className="gray27">Cairo , Egypt</p>
              <h3>Green Volt hub</h3>
              <div className="flex27">
                <span>420 KWh</span>
                <span>120 LE</span>
              </div>
            </div>
          </div>

          <div className="time27">
            <span>09:00 AM Nov 16, 2023</span>
            <span className="cancel27">Cancelled</span>
          </div>

          <div className="btns27">
          <Link to="/bookcharger1">
  <button className="view27">View</button>
</Link>
            <button className="book27">Book Again</button>
          </div>

        </div>
      ))}

<Nav />
    </div>
    
    
    
    
    </> );
}
 
export default Bookings;