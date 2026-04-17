import React, { Component } from 'react';
import './Uppernav.css'
import myimg from '../Assets/myimg.png'
import noti from '../Assets/noti.svg'
import battery from '../Assets/mobile-battery.svg'

const Uppernav = () => {
    return ( <>
  
  <img className='mobilebattery' src={battery} alt="battery" />
     {/* Header Section */}
      <header className="header7">
        <div className="profile-info7">
          <img src={myimg} alt="Profile" className="avatar7"  />
          <span className="user-name7">Partinia Boktor</span>
        </div>
        <div className="notification-wrapper7">
        <img className='bell-icon7' src={noti} alt="notification-icon" />         
         <
    span className="badge7">2</span>
        </div>
      </header>
    </> );
}
 
export default Uppernav;