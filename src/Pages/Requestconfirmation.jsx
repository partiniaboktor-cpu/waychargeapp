import React, { Component } from 'react';
import './Requestconfirmation.css'
import Upper from '../Components/Upper';
import tick from '../Assets/tick.svg'
import Button from '../Components/Button';

const Requestconfirmation = () => {
    return ( <>
    <Upper />
    
    <div className='container25'>
    <img className='tick' src={tick} alt="tick" />
    <h1 className='message25'>Your Request has been requested</h1>
    <p className='description25'>Your request has been confirmed. Thank you for<br></br> choosing us! We look forward to seeing you again <br></br>soon with WayCharge ⚡</p>


<Button word='Go to Home' />

    </div>
    </> );
}
 
export default Requestconfirmation;