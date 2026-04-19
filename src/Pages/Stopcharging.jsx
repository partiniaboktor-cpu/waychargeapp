import React from 'react';
import { useNavigate } from 'react-router-dom';
import Upper from '../Components/Upper';
import './Stopcharging.css'
import chargingsuccessful from '../Assets/chargingsuccessful.svg'
import Button from '../Components/Button';
import Nav from '../Components/Nav';


const Stopcharging = () => {
    const navigate = useNavigate();
    return ( <>
    
    <Upper />
    
     <div className="status-page-container10">
      {/* Top Header Section */}
      <header className="header-section10">
        <h1 className="car-model10">EQS SUV</h1>
        <p className="car-subtext10">Mercedec Benz coupet</p>
      </header>

      {/* Central Illustration Section */}
      <div className="illustration-wrapper10">
        <div className="glow-background10"></div>
        <div className="icon-container10">
          <img className="main-plug-icon10" src={chargingsuccessful} alt="chargingsuccessful" />
        </div>
      </div>

      {/* Status Text Section */}
      <div className="info-box10">
        <h2 className="status-title10">Connector Plugged in</h2>
        <p className="status-subtitle10">For charging</p>
      </div>

      {/* Action Button Section */}
      <div className="footer-action10">
        <Button
          word="Swipe to checkout"
          onSwipeComplete={() => navigate('/Payment')}
        />
      </div>
      <Nav />
    </div>
    
    
    </> );
}
 
export default Stopcharging;