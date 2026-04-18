import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Selectcharger.css'
import Upper from '../Components/Upper';
import logo from '../Assets/logo.svg'
import Button from "../Components/Button";
import Nav from "../Components/Nav";

const Selectcharger = () => {

    const navigate = useNavigate();
    const [selected4, setSelected4] = useState('Type 2');

    const options4 = [
    { id: 'ccs4', label: 'CCS' },
    { id: 'type24', label: 'Type 2' },
    { id: 'chademo4', label: 'CHAdeMO' }
  ];

    return ( <>
    
<Upper />
<img className='logo' src={logo} alt="logo" />

<div className="container4">
      <div className="card4">
        <h1 className="title4">
          SELECT CHARGER CONNECTOR 🔌
        </h1>
        <p className="subtitle4">Different EVs use different connectors.</p>

        <div className="selection-group4">
          <p className="label4">Choose option:</p>
          
          {options4.map((option4) => (
            <label 
              key={option4.id} 
              className={`option-card4 ${selected4 === option4.label ? 'active4' : ''}`}
            >
              <span className="option-text4">{option4.label}</span>
              <input
                type="radio"
                name="connector4"
                className="radio-input4"
                checked={selected4 === option4.label}
                onChange={() => setSelected4(option4.label)}
              />
              <span className="custom-radio4"></span>
            </label>
          ))}
        </div>

        <p className="footer-text4">
          The system shows only compatible chargers.
        </p>

         <Button word='Next' onSwipeComplete={() => navigate('/Pushlocation')} />
      </div>
    </div>

    <Nav />
    
    </> );
}
 
export default Selectcharger;