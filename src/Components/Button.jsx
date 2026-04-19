import React from "react";
import "./Button.css";

const Button = ({ word, onSwipeComplete, onClick, variant = "solid" }) => {
  const handleClick = onClick || onSwipeComplete;

  return (
    <button type="button" className="allow-button5" onClick={handleClick}>
      {word}
    </button>
  );
};

export default Button;
