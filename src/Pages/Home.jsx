import React, { Component } from 'react';
import './Home.css'
import car from '../Assets/car.png'
import Nav from '../Components/Nav';
import battery from '../Assets/battery.svg'
import time from '../Assets/time.svg'
import location from '../Assets/location.svg'
import map from '../Assets/map.png'
import charger1 from '../Assets/charger1.png'
import charger2 from '../Assets/charger2.png'
import booking from '../Assets/booking1.png'
import Button from '../Components/Button';
import Uppernav from '../Components/Uppernav';

const Home = () => {
    return ( <>

   <Uppernav />
    <div className="main-container7">
      {/* Charge Now Button */}
              <Button 
       word='Charge Now' />

      {/* Promo Card */}
      <div className="promo-card7">
        <div className="promo-content7">
          <p className="brand-name7">MercedesBenz</p>
          <h2 className="promo-title7">EFFORTLESS PARKING & CHARG=GING</h2>
        </div>
        <img src={car} alt="Car" className="car-image7" />
      </div>

      {/* Stats Row */}
      <div className="stats-grid7">
        <div className="stat-box-dark7">
          <div className="stat-header7">
            <img className="icon-square7" src={battery} alt="battery" />
            
            <span className="stat-label7">Battery</span>
          </div>
          <div className="progress-bar-bg7">
            <div className="progress-fill7" style={{ width: '73%' }}>73%</div>
          </div>
          <p className="stat-footer7">Power saving mode</p>
        </div>

        <div className="stat-box-light7">
          <div className="stat-header7">
            <img className="icon-square-light7" src={time} alt="time" />
            <span className="stat-label-dark7">Remaining</span>
          </div>
          <div className="distance-row7">
            <span className="distance-val7">83Km</span>
            <span className="time-tag7">1h.34m</span>
          </div>
          <p className="stat-footer-dark7">Remaining distance & time</p>
        </div>
      </div>

      {/* Nearby Stations */}
      <div className="section-header7">
        <h3 className="section-title7">Nearby Charging stations</h3>
        <span className="view-all7">View all</span>
      </div>

      <div className="station-card7">
        <div className="station-info7">
          <img className="loc-icon7" src={location} alt="location-icon" />
          <div>
            <p className="station-name7">Nearest Station</p>
            <p className="station-desc7">Also city parking garage</p>
          </div>
        </div>
        <img className="map-thumb7" src={map} alt="map" />
      </div>

      <Nav />

<div className="container9">

      {/* MISSIONS */}
      <div className="section-header9">
        <h2>MISSIONS</h2>
        <span className="view-all9">View all</span>
      </div>

      <div className="missions9">
        <div className="mission-card9">
          <img src={charger1} alt="free charging" className="mission-img9" />
          <h4>Free charging</h4>
          <p className="points9">2600 points</p>
        </div>

        <div className="mission-card9">
          <img src={charger2} alt="fast charging" className="mission-img9" />
          <h4>Fast charging</h4>
          <p className="points9">1600 points</p>
        </div>
      </div>

      {/* BOOKINGS */}
      <div className="section-header9">
        <h2>BOOKINGS</h2>
        <span className="view-all9">View all</span>
      </div>

      <div className="booking-card9">
        <img src={booking} alt="booking" className="booking-img9" />

        <div className="booking-info9">
          <p className="location9">Cairo , Egypt</p>
          <h3>Green Volt hub</h3>

          <div className="booking-details9">
            <span>420 KWh</span>
            <span>120 LE</span>
          </div>
        </div>
      </div>

      <div className="booking-status9">
        <span>09:00 AM &nbsp; Nov 16, 2023</span>
        <button className="cancelled9">Cancelled</button>
      </div>

      <div className="actions9">
        <button className="view-btn9">View</button>
        <button className="book-btn9">Book Again</button>
      </div>

    </div>

    </div>

    
    
    
    </> );
}
 
export default Home;