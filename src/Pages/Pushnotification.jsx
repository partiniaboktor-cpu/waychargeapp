import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pushlocation.css'
import Upper from "../Components/Upper";
import logo from '../Assets/logo.svg'
import Notification from '../Assets/notification.svg'
import Button from '../Components/Button';

const Pushnotification = () => {
    const navigate = useNavigate();
    return ( <>
    
    <Upper />
    <img className='logo' src={logo} alt="logo" />

    <div className="screen-container5">
      <div className="content-wrapper5">
        {/* Icon Section */}
        <div className="icon-bg5">
          <div className="location-pin5">
         <img src={Notification} alt="loc" />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="main-title5">Notifications?</h1>
        <p className="description5">
          Allow WayCharge to send you Notifications?
        </p>

        {/* Action Section */}
        <div className="actions5">
        <Button word='Allow Notification' onSwipeComplete={() => navigate('/Scan')} />
          
          <button className="cancel-button5">
            Cancel. Not Now
          </button>
        </div>
      </div>
    </div>

    </> );
}
 
export default Pushnotification;