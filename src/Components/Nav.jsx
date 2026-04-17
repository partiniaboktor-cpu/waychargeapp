import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import home from "../Assets/home.svg";
import charger from "../Assets/charger.svg";
import reward from "../Assets/reward.svg";
import requests from "../Assets/request.svg";
import profile from "../Assets/profile.svg";
import "./Nav.css";

const ITEMS = [
  { path: "/Home", label: "Home", icon: home },
  { path: "/Connectplug", label: "Charger", icon: charger },
  { path: "/Points", label: "Points", icon: reward },
  { path: "/Request", label: "Requests", icon: requests },
  { path: "/Profile", label: "Profile", icon: profile },
];

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, "") || "/";

  return (
    <nav className="bottom-nav8" aria-label="Main">
      {ITEMS.map(({ path, label, icon }) => {
        const normalized = path.replace(/\/$/, "") || "/";
        const isActive = pathname === normalized;
        return (
          <button
            key={path}
            type="button"
            className={`nav-item8 ${isActive ? "active8" : ""}`}
            onClick={() => navigate(path)}
            aria-current={isActive ? "page" : undefined}
          >
            <img src={icon} alt="" className="icon8" />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Nav;
