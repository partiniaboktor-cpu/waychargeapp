import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
import Uppernav from '../Components/Uppernav';
import { supabase } from '../Supabase';

const Home = () => {
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('home-app').select('*').eq('id', 1).single();
            if (!error && data) {
                setPageData(data);
            }
        }
        fetchData();
    }, []);

    const d = pageData || {
        car_model: 'MercedesBenz',
        battery: '73',
        range_km: '83',
        time_remaining: '1h.34m',
        station_name: 'city parking garage',
        station_location: 'Nasr city',
        charging_type: 'Fast charging',
        points: '1600',
        charger_location: 'Cairo , Egypt',
        charger_name: 'Green Volt hub',
        power_kwh: '420',
        price: '120',
        booking_time: '09:00 AM',
        booking_date: 'Nov 16, 2023',
        booking_status: 'Cancelled'
    };

    return ( <>

   <Uppernav />
    <div className="main-container7">

      {/* Promo Card */}
      <div className="promo-card7">
        <div className="promo-content7">
          <p className="brand-name7">{d.car_model}</p>
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
            <div className="progress-fill7" style={{ width: `${d.battery}%` }}>{d.battery}%</div>
          </div>
          <p className="stat-footer7">Power saving mode</p>
        </div>

        <div className="stat-box-light7">
          <div className="stat-header7">
            <img className="icon-square-light7" src={time} alt="time" />
            <span className="stat-label-dark7">Remaining</span>
          </div>
          <div className="distance-row7">
            <span className="distance-val7">{d.range_km}Km</span>
            <span className="time-tag7">{d.time_remaining}</span>
          </div>
          <p className="stat-footer-dark7">Remaining distance & time</p>
        </div>
      </div>

      {/* Nearby Stations */}
      <div className="section-header7">
        <h3 className="section-title7">Nearby Charging stations</h3>
        <Link to="/Location"  className="view-all9">
  View all
</Link>
      </div>

     <div className="card30">
      
      <div className="top30">
        <div className="leftTop30">
          <div className="iconBox30">
            <img src={location} alt="location" className="icon30" />
          </div>
          <h2 className="title30">Nearest Station</h2>
        </div>

        <img src={map} alt="map" className="map30" />
      </div>

      <div className="bottom30">
        <p className="text30">
          Also {d.station_name}, <br /> {d.station_location}
        </p>

        <button className="btn30">Get directions</button>
      </div>

    </div>

<div className="container9">

      {/* MISSIONS */}
      <div className="section-header9">
        <h2>MISSIONS</h2>
        <Link to="/points">
  <span className="view-all9">View all</span>
</Link>
      </div>

      <div className="missions9">
        <div className="mission-card9">
          <img src={charger1} alt="free charging" className="mission-img9" />
          <h4>Free charging</h4>
          <p className="points9">2600 points</p>
        </div>

        <div className="mission-card9">
          <img src={charger2} alt="fast charging" className="mission-img9" />
          <h4>{d.charging_type}</h4>
          <p className="points9">{d.points} points</p>
        </div>
      </div>

      {/* BOOKINGS */}
      <div className="section-header9">
        <h2>BOOKINGS</h2>
        <Link to="/bookings" className="view-all9">
  View all
</Link>
      </div>

      <div className="booking-card9">
        <img src={booking} alt="booking" className="booking-img9" />

        <div className="booking-info9">
          <p className="location9">{d.charger_location}</p>
          <h3>{d.charger_name}</h3>

          <div className="booking-details9">
            <span>{d.power_kwh} KWh</span>
            <span>{d.price} LE</span>
          </div>
        </div>
      </div>

      <div className="booking-status9">
        <span>{d.booking_time} &nbsp; {d.booking_date}</span>
        <button className="cancelled9">{d.booking_status}</button>
      </div>

      <div className="actions9">
      <Link to="/bookcharger1">
  <button className="view-btn9">View</button>
</Link>
        <button className="book-btn9">Book Again</button>
      </div>

    </div>

      {/* Charge Now Button */}
      <button 
        className="home-charge-btn-simple" 
        onClick={() => navigate('/Connectplug')}
      >
        Charge Now
      </button>

      <Nav />

    </div>

    
    
    
    </> );
}
 
export default Home;