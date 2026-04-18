import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Addcar.css'
import Upper from '../Components/Upper';
import logo from '../Assets/logo.svg'
import Button from '../Components/Button';

const Addcar = () => {
    const navigate = useNavigate();
    return ( <>
    
    <Upper />
    <img className='logo' src={logo} alt="logo" />

 <div className="container3">

      <h1 className="title3">
        ADD YOUR VEHICLE <span>🚗</span>
      </h1>

      <p className="subtitle3">
        Whenever , wherever you go we will be available <br />
        all time and everywhere.
      </p>

      {/* Brand */}
      <div className="field3">
        <label>Vehicle Brand</label>
        <input type="text" className="input3" />
      </div>

      {/* Model */}
      <div className="field3">
        <label>Vehicle Model</label>
        <div className="selectWrapper3">
          <input type="text" className="input3" />
          <span className="arrow3">↓</span>
        </div>
      </div>

      {/* Year */}
      <div className="field3">
        <label>Manufacturing Year</label>
        <div className="selectWrapper3">
          <input type="text" className="input3" />
          <span className="arrow3">↓</span>
        </div>
      </div>

      {/* Battery */}
      <div className="field3">
        <label>Battery Capacity (kWh)</label>
        <input type="text" className="input3" />
      </div>

      {/* Upload */}
      <div className="field3">
        <label>Upload image for your vehicle</label>
        <div className="uploadBox3">
          <span className="uploadIcon3">⬆</span>
        </div>
        <p className="hint3">
          This helps the app calculate charging time and compatibility.
        </p>
      </div>

      {/* Button */}
     <Button word='Next' onSwipeComplete={() => navigate('/Selectcharger')} />

    </div>
    
    </> );
}
 
export default Addcar;