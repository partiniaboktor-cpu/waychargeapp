import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../Assets/home.svg";
import charger from "../Assets/charger.svg";
import reward from "../Assets/reward.svg";
import requests from "../Assets/request.svg";
import profile from "../Assets/profile.svg";
import "./Nav.css";

const ITEMS = [
  { path: "/Home", label: "Home", icon: home },
  { path: "/Connectplug", label: "Charger", icon: charger },
  { path: "/Points", label: "Rewards", icon: reward },
  { path: "/Request", label: "Requests", icon: requests },
  { path: "/Profile", label: "Profile", icon: profile },
];

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Overlay remains full screen */}
      <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}></div>

      {/* Wrapper to constrain FAB within app width */}
      <div className="nav-fab-app-wrapper">
        <div className={`fab-menu ${isMenuOpen ? "open" : ""}`}>
          {ITEMS.map(({ path, label, icon }) => (
            <div 
              key={path} 
              className="fab-menu-item" 
              onClick={() => { navigate(path); toggleMenu(); }}
            >
              <span className="fab-label">{label}</span>
              <div className="fab-icon-circle green">
                <img src={icon} alt={label} className="fab-nav-icon" />
              </div>
            </div>
          ))}
        </div>

        <button 
          type="button" 
          className={`main-fab-trigger ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
        >
          <div className="fab-trigger-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default Nav;
