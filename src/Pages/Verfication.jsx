import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Verfication.css'
import Upper from '../Components/Upper';
import logo from '../Assets/logo.svg'

const Verfication = () => {

  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // auto focus next input
    if (value && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

    return ( <>
    
    <Upper />
    <img className='logo' src={logo} alt="logo" />
    
     <div className="container1">
      
      <div
        className="back1"
        role="button"
        tabIndex={0}
        onClick={() => navigate("/Login")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate("/Login");
          }
        }}
      >
        ← Back
      </div>

      <div className="iconBox1">
        ⚡
      </div>

      <h1 className="title1">VERIFICATION</h1>

      <p className="subtitle1">
        Enter the 6-digit code sent to <br />
        <span>user@email.com</span>
      </p>

      <p className="label1">Verification Code</p>

      <div className="inputs1">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`input-${index}`}
            className="inputBox1"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="btn1"
        onClick={() => navigate("/Addcar")}
      >
        Verify
      </button>

      <p className="resend1">
        Didn’t receive the code? <span>Resend</span>
      </p>

      <p className="timer1">Code expires in 10:00</p>
    </div>

    </> );
}
 
export default Verfication;