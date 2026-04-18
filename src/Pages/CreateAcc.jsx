import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateAcc.css'
import Upper from '../Components/Upper';
import logo from '../Assets/logo.svg'

const CreateAcc = () => {

const navigate = useNavigate();
const [showPass, setShowPass] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);


    return (  <>

    <Upper />
    <img className='logo' src={logo} alt="logo" />

<div className="container2">

      <h1 className="title2">CREATE ACCOUNT</h1>
      <p className="subtitle2">Sign up to start charging</p>

      {/* Full Name */}
      <div className="field2">
        <label>Full Name</label>
        <div className="inputWrapper2">
          <span className="icon2">👤</span>
          <input type="text" placeholder="John Doe" className="input2" />
        </div>
      </div>

      {/* Email */}
      <div className="field2">
        <label>Email</label>
        <div className="inputWrapper2">
          <span className="icon2">✉️</span>
          <input type="email" placeholder="your@email.com" className="input2" />
        </div>
      </div>

      {/* Phone */}
      <div className="field2">
        <label>Phone Number</label>
        <div className="inputWrapper2">
          <span className="icon2">📞</span>
          <input type="text" placeholder="+1 (555) 000-0000" className="input2" />
        </div>
      </div>

      {/* Password */}
      <div className="field2">
        <label>Password</label>
        <div className="inputWrapper2">
          <span className="icon2">🔒</span>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Create a password"
            className="input2"
          />
          <span
            className="eye2"
            onClick={() => setShowPass(!showPass)}
          >
            👁
          </span>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="field2">
        <label>Confirm Password</label>
        <div className="inputWrapper2">
          <span className="icon2">🔒</span>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm your password"
            className="input2"
          />
          <span
            className="eye2"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            👁
          </span>
        </div>
      </div>

      {/* Terms */}
      <div className="terms2">
        <input type="checkbox" />
        <p>
          I agree to the <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>
        </p>
      </div>

      {/* Button */}
      <button
        type="button"
        className="btn2"
        onClick={() => navigate("/Addcar")}
      >
        Sign Up
      </button>

      {/* Divider */}
      <div className="divider2">
        <div></div>
        <span>or</span>
        <div></div>
      </div>

      {/* Sign in */}
      <p className="signin2">
        Already have an account? <span>Sign in</span>
      </p>

      {/* Help */}
      <p className="help2">Need help? Contact support</p>

    </div>

    
    </>);
}
 
export default CreateAcc;