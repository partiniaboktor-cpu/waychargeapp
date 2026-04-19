import React from 'react';
import { useNavigate } from 'react-router-dom';
import Upper from '../Components/Upper';
import './Connectplug.css'
import Nav from '../Components/Nav'
import plug from '../Assets/plug.svg'
import Button from '../Components/Button';



const Connectplug = () => {
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
          <svg 
            className="plug-svg10" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1" />
          </svg>
          {/* Using a simpler representation of the plug icon from the image */}
          <img className="main-plug-icon10" src={plug} alt="plug" />
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
          word='Connect Plague'
          onSwipeComplete={() => navigate('/Chargertypes')}
        />
      </div>
      <Nav />
    </div>
    
    
    </> );
}
 
export default Connectplug;