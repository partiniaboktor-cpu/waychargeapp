import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

const PinIcon = () => (
  <svg
    className="splash-pin-svg"
    viewBox="0 0 64 88"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      fill="#8CC63F"
      d="M32 4C18.2 4 7 15.2 7 29c0 18 25 49 25 49s25-31 25-49C57 15.2 45.8 4 32 4z"
    />
    <circle cx="32" cy="28" r="10" fill="#ffffff" />
  </svg>
);

const Splash = () => {
  const navigate = useNavigate();

  const goLogin = () => navigate("/Login");

  useEffect(() => {
    const t = window.setTimeout(() => navigate("/Login"), 3200);
    return () => window.clearTimeout(t);
  }, [navigate]);

  return (
    <div
      className="splash-root"
      role="button"
      tabIndex={0}
      onClick={goLogin}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") goLogin();
      }}
      aria-label="Continue to login"
    >
      <div className="splash-aurora" />
      <div className="splash-ring" />
      <div className="splash-pin-wrap">
        <div className="splash-pin-float">
          <PinIcon />
        </div>
      </div>
      <div className="splash-bars" aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="splash-bar" />
        ))}
      </div>
      <p className="splash-title">
        WayCharge<span className="splash-dots">...</span>
      </p>
      <span className="splash-hint">Tap to continue</span>
    </div>
  );
};

export default Splash;
