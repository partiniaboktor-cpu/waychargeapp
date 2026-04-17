import React, { useState } from "react";
import './Paymenthistory.css'
import Uppernav from '../Components/Uppernav';
import Nav from "../Components/Nav";
import no from '../Assets/no.svg'
import download from '../Assets/download.svg'

const Notifications = () => {



    return ( <>
    
    <Uppernav />
    <div className="container20">
      
      <button className="back20">← Back</button>

      <h1 className="title20">MY TRANSACTIONS</h1>

      <div className="tabs20">
        <span className="tab20 active20">All</span>
        <span className="tab20">Withdraw</span>
        <span className="tab20">Deposit of funds</span>
      </div>

      {/* Card 1 */}
      <div className="card20">
        <img className="icon20 green20" src={download} alt="download" />
        <div>
          <p className="name20">Partinia Boktor</p>
          <h3 className="cardNum20">MasterCard ****2345</h3>
        </div>
        <span className="amount20">-12.49 LE</span>
      </div>

      {/* Card 2 */}
      <div className="card20">
        <img className="icon20 red20" src={no} alt="no" />
        <div>
          <p className="name20">Partinia Boktor</p>
          <h3 className="cardNum20">MasterCard ****2345</h3>
        </div>
        <span className="amount20">-12.49 LE</span>
      </div>

      {/* Card 3 */}
      <div className="card20">
        <img className="icon20 green20" src={download} alt="download" />
        <div>
          <p className="name20">Partinia Boktor</p>
          <h3 className="cardNum20">MasterCard ****2345</h3>
        </div>
        <span className="amount20">-12.49 LE</span>
      </div>

      {/* Card 4 */}
      <div className="card20">
        <img className="icon20 green20" src={download} alt="download" />
        <div>
          <p className="name20">Partinia Boktor</p>
          <h3 className="cardNum20">MasterCard ****2345</h3>
        </div>
        <span className="amount20">-12.49 LE</span>
      </div>

      {/* Card 5 */}
      <div className="card20">
        <img className="icon20 red20" src={no} alt="no" />
        <div>
          <p className="name20">Partinia Boktor</p>
          <h3 className="cardNum20">MasterCard ****2345</h3>
        </div>
        <span className="amount20">-12.49 LE</span>
      </div>

          <div className="card20">
        <img className="icon20 red20" src={no} alt="no" />
        <div>
          <p className="name20">Partinia Boktor</p>
          <h3 className="cardNum20">MasterCard ****2345</h3>
        </div>
        <span className="amount20">-12.49 LE</span>
      </div>
<Nav />
    </div>

    
    
    </> );
}
 
export default Notifications;