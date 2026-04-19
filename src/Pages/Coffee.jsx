import React from 'react';
import { useNavigate } from 'react-router-dom';
import Uppernav from '../Components/Uppernav';
import './Coffee.css'
import cappucino from '../Assets/cappucino.png'
import latte from '../Assets/latte.png'
import saltedcaramel from '../Assets/salted caramel.png'
import tea from '../Assets/tea.png'
import matcha from '../Assets/matcha.png'
import lemon from '../Assets/lemon.png'
import Nav from '../Components/Nav';
import coffees from '../Assets/coffees.png'
const Coffee = () => {
    const navigate = useNavigate();
    const goDetail = () => navigate('/Coffeedetail');

    return ( <>
    
    <Uppernav />
    
    <div className="container14">

      <button type="button" className="back14" onClick={() => navigate('/Charging')}>
        ← Back
      </button>

      <h1 className="title14">GRAB YOUR COFFEE</h1>

      <div className="tabs14">
        <span className="active14">All</span>
        <span>Hot coffee</span>
        <span>Cold coffee</span>
        <span>Offers</span>
      </div>

      <div className="grid14">

        <div
          className="card14"
          role="button"
          tabIndex={0}
          onClick={goDetail}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goDetail();
            }
          }}
        >
          <img src={cappucino} className="img14" alt="" />
          <p>Cappuccino</p>
          <span className="details14">View details</span>
        </div>

        <div
          className="card14"
          role="button"
          tabIndex={0}
          onClick={goDetail}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goDetail();
            }
          }}
        >
          <img src={latte} className="img14" alt="" />
          <p>Latte</p>
          <span className="details14">View details</span>
        </div>

        <div
          className="card14"
          role="button"
          tabIndex={0}
          onClick={goDetail}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goDetail();
            }
          }}
        >
          <img src={saltedcaramel} className="img14" alt="" />
          <p>Ice salted caramel</p>
          <span className="details14">View details</span>
        </div>

        <div
          className="card14"
          role="button"
          tabIndex={0}
          onClick={goDetail}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goDetail();
            }
          }}
        >
          <img src={tea} className="img14" alt="" />
          <p>Tea</p>
          <span className="details14">View details</span>
        </div>

        <div
          className="card14"
          role="button"
          tabIndex={0}
          onClick={goDetail}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goDetail();
            }
          }}
        >
          <img src={matcha} className="img14" alt="" />
          <p>Tea</p>
          <span className="details14">View details</span>
        </div>

        <div
          className="card14"
          role="button"
          tabIndex={0}
          onClick={goDetail}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goDetail();
            }
          }}
        >
          <img src={lemon} className="img14" alt="" />
          <p>Tea</p>
          <span className="details14">View details</span>
        </div>


      </div>

      <h2 className="popular14">Popular</h2>

      <img src={coffees} className="popular-img14" alt="" />
<Nav />

    </div>

    </> );
}
 
export default Coffee;