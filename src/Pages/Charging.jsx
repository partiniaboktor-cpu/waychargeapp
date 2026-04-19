import React from 'react';
import Upper from '../Components/Upper';
import './Charging.css';
import car2 from '../Assets/car2.png';
import Button from '../Components/Button';
import Nav from '../Components/Nav';
import { useNavigate } from 'react-router-dom';

const Charging = () => {
  const navigate = useNavigate();
  return (
    <>
      <Upper />
      <div className="status-container13">
        <h2 className="car-title13">EQS SUV</h2>
        <p className="car-subtitle13">Mercedec Benz coupet</p>

        <div className="circle-wrapper13">
          <div className="progress-circle13">
            <img src={car2} alt="car" className="car-image13" />
          </div>
        </div>

        <h2 className="charging-text13">Charging: 77%</h2>

        <div className="info-card13">
          <div className="info-item13">
            <p className="info-label13">Charging Rate</p>
            <h3 className="info-value13">20 KW</h3>
          </div>

          <div className="info-item13">
            <p className="info-label13">Time Elapsed</p>
            <h3 className="info-value13">16 mins</h3>
          </div>
        </div>

        <p className="message13">
          Charger seems bored here... have a coffee and enjoy the experience
        </p>

        <div style={{ width: '100%', maxWidth: '350px' }}>
          <Button
            word="Grab your coffee"
            variant="outline"
            onSwipeComplete={() => navigate('/Coffee')}
          />
        </div>

        <div style={{ width: '100%', maxWidth: '350px' }}>
          <Button
            word="Stop charging"
            variant="outline"
            onSwipeComplete={() => navigate('/Stopcharging')}
          />
        </div>

        <Nav />
      </div>
    </>
  );
};

export default Charging;
