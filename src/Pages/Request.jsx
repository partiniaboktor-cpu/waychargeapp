import React, { Component } from 'react';
import './Request.css'
import Uppernav from '../Components/Uppernav';

const Request = () => {
    return (  <>
    
    <Uppernav />

    <div className="container22">

      <h2 className="title22">SEND REQUEST</h2>
      <p className="subtitle22">
        Whenever , wherever you go we will be available all time and everywhere.
      </p>

      {/* Name */}
      <label className="label22">Name</label>
      <input type="text" className="input22" />

      {/* Phone */}
      <label className="label22">Phone Number</label>
      <input type="text" className="input22" />

      {/* Location */}
      <label className="label22">Location</label>
      <input type="text" className="input22" />

      {/* Time */}
      <div className="time-row22">
        <label className="label22">Time</label>
        <span className="time-text22">00’00 clock</span>
      </div>
      <input type="text" className="input22" />

      {/* Upload */}
      <label className="label22">Upload image for your location</label>
      <div className="upload-box22">
        <span className="upload-icon22">⬆️</span>
      </div>

      {/* Button */}
      <button className="btn22">
        <span className="btn-icon22">⚡</span>
        Send Request
      </button>

    </div>
    
    </>);
}
 
export default Request;