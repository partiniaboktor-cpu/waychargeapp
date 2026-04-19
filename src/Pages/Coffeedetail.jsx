import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Coffeedetail.css'
import Uppernav from '../Components/Uppernav';
import bigcoffee from '../Assets/bigcoffee.png'
import { Link } from "react-router-dom";

const Coffeedetail = () => {
    const navigate = useNavigate();
    return ( <>
    
    <Uppernav />

<div className="container15">
<Link to="/coffee">
  <button className="backBtn15">← Back</button>
</Link>

      <div className="imageWrapper15">
        <img
          src={bigcoffee}
          alt="Cappuccino"
          className="coffeeImg15"
        />
      </div>

      <div className="card15">
        <div className="header15">
          <h2 className="title15">Cappuccino</h2>
          <span className="heart15">♡</span>
        </div>

        <p className="desc15">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <div className="sizeSection15">
          <h4 className="sizeTitle15">Size</h4>
          <div className="sizes15">
            <span className="sizeOption15">Small</span>
            <span className="sizeOption15 active15">Medium</span>
            <span className="sizeOption15">Large</span>
          </div>
        </div>

        <div className="bottomBar15">
          <div className="priceBox15">
            <span className="price15">65 LE</span>
            <span className="divider15">|</span>
            <span className="points15">300 Points</span>
          </div>
          <button type="button" className="buyBtn15" onClick={() => navigate('/Stopcharging')}>
            Buy now
          </button>
        </div>
      </div>
    </div>


    </> );
}
 
export default Coffeedetail;