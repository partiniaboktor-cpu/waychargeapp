import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import logo from '../Assets/logo.svg'
import battery from '../Assets/mobile-battery.svg'
import Upper from "../Components/Upper";

const Home = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (  <>

<div className="upper">
  <Upper />
</div>
    <img className='logo' src={logo} alt="logo" />

<div className="container-login">
<div className="login-screen">

      <div className="login-card">


        {/* Email */}
        <label>Email</label>
        <div className="input-box">
          <span className="icon">📧</span>
          <input type="email" placeholder="your@email.com" />
        </div>

        {/* Password */}
        <label>Password</label>
        <div className="input-box">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <span
            className="icon right"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </span>
        </div>

        {/* Forgot password */}
        <div className="forgot">
          <a href="#">Forgot password?</a>
        </div>

        {/* Button */}
        <button
          type="button"
          className="btn-login"
          onClick={() => navigate("/Verfication")}
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        {/* Signup */}
        <p className="signup">
          Don't have an account?{" "}
          <a
            href="/CreateAcc"
            onClick={(e) => {
              e.preventDefault();
              navigate("/CreateAcc");
            }}
          >
            Sign up
          </a>
        </p>

        {/* Help */}
        <p className="help">Need help? Contact support</p>

      </div>
    </div>
</div>

    </>);
}
 
export default Home;