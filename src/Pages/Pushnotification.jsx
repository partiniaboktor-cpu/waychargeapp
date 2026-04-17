import React, { Component } from 'react';
import './Pushlocation.css'
import Upper from "../Components/Upper";
import logo from '../Assets/logo.svg'
import Notification from '../Assets/notification.svg'
import Button from '../Components/Button';

const Pushlocation = () => {
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
          Allow WayCharge to access your location?
        </p>

        {/* Action Section */}
        <div className="actions5">
        <Button word='Allow Notification' />
          
          <button className="cancel-button5">
            Cancel. Not Now
          </button>
        </div>
      </div>
    </div>

    </> );
}
 
export default Pushlocation;