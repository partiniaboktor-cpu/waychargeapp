import React, { useState } from "react";
import Uppernav from '../Components/Uppernav';
import './Payment.css'

const Payment = () => {

      const [selected, setSelected] = useState(1);


    return ( <>
    
    <Uppernav />
   <div className="box16">
      <h3 className="title16">Payment</h3>

      <div className="balance16">
        <p>Your balance</p>
        <h2>25,000 LE</h2>
      </div>

      <div className="cost16">Charging: 2,000 LE</div>

      <p className="sub16">Select Payment</p>

      <div className="card16" onClick={() => setSelected(1)}>
        <span>**** **** **** 0528</span>
        <span className={selected === 1 ? "dot16 active16" : "dot16"}></span>
      </div>

      <div className="card16" onClick={() => setSelected(2)}>
        <span>**** **** **** 4651</span>
        <span className={selected === 2 ? "dot16 active16" : "dot16"}></span>
      </div>

      <div className="card16" onClick={() => setSelected(3)}>
        <span>**** **** **** 3421</span>
        <span className={selected === 3 ? "dot16 active16" : "dot16"}></span>
      </div>

      <div className="card16" onClick={() => setSelected(4)}>
        <span>**** **** **** 7845</span>
        <span className={selected === 4 ? "dot16 active16" : "dot16"}></span>
      </div>

      <div className="add16">+ Add Card</div>

      <button className="btn16">Confirm</button>
    </div>
    
    </> );
}
 
export default Payment;