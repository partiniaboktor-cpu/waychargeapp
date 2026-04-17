import React, { Component } from 'react';
import './Button.css'

const Button = (props) => {
    return ( <>
    
     
          <button className="allow-button5">
            <div className="bolt-icon-wrapper5">
              <span className="bolt5">⚡</span>
            </div>
            <span className="button-text5">{props.word}</span>
          </button>
    
    
    </> );
}
 
export default Button;