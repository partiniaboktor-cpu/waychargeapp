import React, { Component } from 'react';
import './Points.css'
import Uppernav from '../Components/Uppernav';
import coin from '../Assets/coins.svg'
import point1 from '../Assets/point1.png'
import point2 from '../Assets/point2.png'
import point3 from '../Assets/point3.png'
import point4 from '../Assets/point4.png'
import mission1 from '../Assets/mission1.png'
import mission2 from '../Assets/mission2.png'
import mission3 from '../Assets/mission3.png'
import mission4 from '../Assets/mission4.png'
import Nav from '../Components/Nav';

const Points = () => {
    return (  <>
    
    <Uppernav />
    
    <div className="container21">
      
      <h2 className="title21">REWARDS CLUB</h2>

      {/* Points Card */}
      <div className="points-card21">
        <div className="points-left21">
          <img className="coin21" src={coin} alt="" />
          <p>Your points:</p>
        </div>
        <h3>5200 points</h3>
      </div>

      {/* Icons Section */}
      <div className="icons21">
        <div className="icon-item21">
          <img src={point1}alt="history" />
          <p>History</p>
        </div>

        <div className="icon-item21">
          <img src={point2} alt="explore" />
          <p>Explore rewards</p>
        </div>

        <div className="icon-item21">
          <img src={point3} alt="rewards" />
          <p>Your rewards</p>
        </div>
      </div>

      {/* Discover Section */}
      <div className="discover21">
        <div className="discover-text21">
          <h2>DISCOVER YOUR TODAYS DEALS</h2>
        </div>
        <img src={point4} alt="deals" />
      </div>

      {/* Missions */}
      <h3 className="missions-title21">MISSIONS</h3>

      <div className="missions-grid21">

        <div className="mission-card21">
          <img src={mission1} alt="free charging" />
          <h4>Free charging</h4>
          <p>2600 points</p>
        </div>

        <div className="mission-card21">
          <img src={mission2} alt="fast charging" />
          <h4>Fast charging</h4>
          <p>1600 points</p>
        </div>

        <div className="mission-card21">
          <img src={mission3} alt="coffee" />
          <h4>Free coffee</h4>
          <p>300 points</p>
        </div>

        <div className="mission-card21">
          <img src={mission4} alt="discount" />
          <h4>50% on next charging</h4>
          <p>600 points</p>
        </div>

      </div>

<Nav />
    </div>
    
    
    
    
    </>);
}
 
export default Points;