import React, { useState, useEffect } from 'react';
import Upper from '../Components/Upper';
import './Charging.css';
import car2 from '../Assets/car2.png';
import Button from '../Components/Button';
import Nav from '../Components/Nav';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../Supabase';

const Charging = () => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const { data, error } = await supabase.from('charging_session_app').select('*').eq('id', 1).single();
        if (!error && data) {
            setPageData(data);
        }
    }
    fetchData();
  }, []);

  const d = pageData || {
      car_name: 'EQS SUV',
      car_model: 'Mercedec Benz coupet',
      status: 'Charging',
      battery_percent: '77',
      charging_rate: '20',
      time_elapsed: '16 mins',
      message: 'Charger seems bored here... have a coffee and enjoy the experience',
      action: 'Stop charging'
  };

  return (
    <>
      <Upper />
      <div className="status-container13">
        <h2 className="car-title13">{d.car_name}</h2>
        <p className="car-subtitle13">{d.car_model}</p>

        <div className="circle-wrapper13">
          <div className="progress-circle13">
            <img src={car2} alt="car" className="car-image13" />
          </div>
        </div>

        <h2 className="charging-text13">{d.status}: {d.battery_percent}%</h2>

        <div className="info-card13">
          <div className="info-item13">
            <p className="info-label13">Charging Rate</p>
            <h3 className="info-value13">{d.charging_rate} KW</h3>
          </div>

          <div className="info-item13">
            <p className="info-label13">Time Elapsed</p>
            <h3 className="info-value13">{d.time_elapsed}</h3>
          </div>
        </div>

        <p className="message13">
          {d.message}
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
            word={d.action}
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
