import React, { Component } from 'react';
import './Paymentrequired.css'

const Paymentrequired = () => {
    return ( <>
    
    <div className="container26">

      {/* Icon Section */}
      <div className="iconBox26">
        <div className="iconCircle26">
          <span className="iconExclamation26">!</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="title26">Payment Required</h2>

      {/* Description */}
      <p className="desc26">
        You have an outstanding charge that must be paid to continue using the app
      </p>

      {/* Info Card */}
      <div className="card26">

        <div className="row26">
          <span className="label26">Last charging session</span>
          <span className="value26">April 18, 2026</span>
        </div>

        <div className="row26">
          <span className="label26">Duration</span>
          <span className="value26">2h 34m</span>
        </div>

        <div className="row26">
          <span className="label26">Energy consumed</span>
          <span className="value26">45.8 kWh</span>
        </div>

        <hr className="line26" />

        <div className="totalRow26">
          <span className="totalLabel26">Amount due</span>
          <span className="totalValue26">250.00 LE</span>
        </div>
      </div>

      {/* Warning Box */}
      <div className="warningBox26">
        <span className="warningIcon26">!</span>
        <p>
          Access is restricted until payment is completed. Please settle your outstanding balance to continue.
        </p>
      </div>

      {/* Button */}
      <button className="payBtn26">Pay 250.00 LE</button>

      {/* Support */}
      <p className="support26">Contact Support</p>

    </div>
    
    
    
    
    </> );
}
 
export default Paymentrequired;