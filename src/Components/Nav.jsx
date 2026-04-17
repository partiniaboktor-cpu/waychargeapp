import React, { Component } from 'react';
import home from '../Assets/home.svg'
import charger from '../Assets/charger.svg'
import reward from '../Assets/reward.svg'
import requests from '../Assets/request.svg'
import profile from '../Assets/profile.svg'
import './Nav.css'
const Nav = () => {
    return ( <>
    
   <div className="bottom-nav8">
      <div className="nav-item8 active8">
        <img src={home} alt="home" className="icon8" />
        <span>Home</span>
      </div>

      <div className="nav-item8">
        <img src={charger} alt="charger" className="icon8" />
        <span>Charger</span>
      </div>

      <div className="nav-item8">
        <img src={reward} alt="points" className="icon8" />
        <span>Points</span>
      </div>

      <div className="nav-item8">
        <img src={requests} alt="requests" className="icon8" />
        <span>Requests</span>
      </div>

      <div className="nav-item8">
        <img src={profile} alt="profile" className="icon8" />
        <span>Profile</span>
      </div>
    </div>
    
    
    </> );
}
 
export default Nav;