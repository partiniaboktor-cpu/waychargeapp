import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Uppernav.css'
import myimg from '../Assets/myimg.png'
import noti from '../Assets/noti.svg'
import battery from '../Assets/mobile-battery.svg'
import not from '../Assets/not.svg'
const Uppernav = () => {
    return ( <>
  <div className='head'>
  <img className='mobilebattery' src={battery} alt="battery" />
  <div className='header'>
    <div className='left-nav'>
    <img className='myimg' src={myimg }alt="myimg" />
    <h2 className='name'> Partinia Boktor</h2>
    </div>
    <Link to="/Notifications">
      <img src={not} alt="notifications" />
    </Link>
  </div>

  </div>
    </> );
}
 
export default Uppernav;