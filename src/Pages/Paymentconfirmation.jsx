import React, { Component } from 'react';
import './Paymentconfirmation.css'
import Upper from '../Components/Upper';
import tick from '../Assets/tick.svg'
import Button from '../Components/Button';
import { Link } from "react-router-dom";

const Paymentconfirmation = () => {
    return ( <>
    
    
    <Upper />
    
    <div className='container25'>
    <img className='tick' src={tick} alt="tick" />
    <h1 className='message25'>Payment Confirmed</h1>
    <p className='description25'>Your Payment has been confirmed. Thank you for<br></br> choosing us! We look forward to seeing you again <br></br>soon with WayCharge ⚡</p>


     <Link  to="/home">
  <Button word='Go to Home' />
</Link>

    </div>
    
    
    </> );
}
 
export default Paymentconfirmation;