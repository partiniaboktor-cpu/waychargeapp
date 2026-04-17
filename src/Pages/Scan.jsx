import React, { Component } from 'react';
import Upper from '../Components/Upper';
import './Scan.css'

const Scan = () => {
    return ( <>
    
    <Upper />
    <div className="page-container6">
      {/* Scanner Frame Section */}
      <div className="scanner-wrapper6">
        <div className="scan-box6">

          
          <div className="dashed-border6"></div>
          
          <h2 className="scan-prompt6">Scan a QR code</h2>
        </div>
      </div>

      {/* Text Content */}
      <div className="info-section6">
        <h3 className="status-text6">Unrecognized QR code</h3>
        <p className="instruction-text6">
          Scan the charging infront of you to connect the charger for charging
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="button-row6">
        <button className="btn-secondary6">Scan</button>
        <button className="btn-primary6">My code</button>
      </div>
    </div>
    

    </> );
}
 
export default Scan;