import React, { Component } from 'react';
import './Bookcharger1.css'
import Uppernav from '../Components/Uppernav';
import Nav from '../Components/Nav';
import bookcharger1 from '../Assets/bookcharger1.png'


const Bookcharger1 = () => {
    return ( <>
    
    <Uppernav />

       <div className="container28">

      <button className="back28">← Back</button>

      <h2 className="title28">REVIEW SUMMARY</h2>

      <div className="section28">
        <h3>Vehicle</h3>
        <p>MercedesBenz . model 40</p>
      </div>

      <hr className="line28" />

      <div className="section28">
        <h3>Charging Station</h3>

        <div className="card28">
          <img
            src={bookcharger1}
            alt=""
            className="img28"
          />

          <div>
            <p className="gray28">Cairo , Egypt</p>
            <h3>Green Volt hub</h3>
            <div className="flex28">
              <span>420 KWh</span>
              <span>120 LE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section28">
        <h3>Charger</h3>

        <div className="charger28">
          <div className="icon28">⚡</div>
          <div>
            <p>MercedesBenz - AC , CC</p>
            <b>100 KW</b> <span>Max power</span>
          </div>
        </div>
      </div>

      <hr className="line28" />

      <div className="info28">
        <div className="row28">
          <span>Booking Date</span>
          <b>Nov 16, 2023</b>
        </div>

        <div className="row28">
          <span>Time Of Arrival</span>
          <b>09:00 AM</b>
        </div>

        <div className="row28">
          <span>Charging Duration</span>
          <b>1 Hour</b>
        </div>

        <div className="row28">
          <span>Amount Estimation</span>
          <b>250 LE</b>
        </div>

        <div className="row28">
          <span>Tax</span>
          <b>Free</b>
        </div>
      </div>

      <div className="total28">
        <span>Total Amount</span>
        <b>250 LE</b>
      </div>

      <div className="section28">
        <h3>Selected Payment Method</h3>

        <div className="card28 pay28">
          <div>
            <p>Mastercard</p>
            <p>**** **** **** 3421</p>
          </div>
          <div className="radio28"></div>
        </div>
      </div>

      <hr className="line28" />

      <div className="note28">
        <span className="check28">✔</span>
        <p>
          Your email will must be changed as long as you haven’t used the app
          for a long time in the EV station
        </p>
      </div>

    </div>

    <Nav />
    
    </> );
}
 
export default Bookcharger1;