import React, { Component } from 'react';
import './Location.css'
import Uppernav from '../Components/Uppernav';
import Nav from '../Components/Nav';

const Location = () => {
    return ( <>
    
    <Uppernav />

     <div className="container23">

      {/* Search */}
      <div className="search-row23">
        <input 
          type="text" 
          placeholder="Search for charging stations..." 
          className="search-input23"
        />
        <button className="btn-small23">Nearby</button>
        <button className="btn-small23">Filters</button>
      </div>

      {/* Map */}
     <div className="map23">
  <iframe
    title="Cairo Map"
    src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
    className="map-frame23"
    loading="lazy"
  ></iframe>
</div>

      {/* Stations */}
      <div className="stations23">
        <h3 className="stations-title23">3 Stations Found</h3>

        {/* Card 1 */}
        <div className="station-card23">
          <div className="station-header23">
            <h4 className="station-name23">Downtown Charging Hub</h4>
            <span className="status available23">Available</span>
          </div>

          <p className="rating23">⭐ 4.5 <span>0.5 mi</span></p>
          <p className="address23">123 Main St, San Francisco, CA</p>

          <div className="info-row23">
            <span>⚡ 3/8</span>
            <span>⏱ Fast</span>
            <span>$ 0.45/kWh</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="station-card23">
          <div className="station-header23">
            <h4 className="station-name23">Market Street Station</h4>
            <span className="status available23">Available</span>
          </div>

          <p className="rating23">⭐ 4.8 <span>1.2 mi</span></p>
          <p className="address23">456 Market St, San Francisco, CA</p>

          <div className="info-row23">
            <span>⚡ 5/10</span>
            <span>⏱ Ultra Fast</span>
            <span>$ 0.40/kWh</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="station-card23">
          <div className="station-header23">
            <h4 className="station-name23">Bay Area EV Center</h4>
            <span className="status full23">Full</span>
          </div>

          <p className="rating23">⭐ 4.2 <span>2.1 mi</span></p>
          <p className="address23">789 Bay St, San Francisco, CA</p>

          <div className="info-row23">
            <span>⚡ 0/6</span>
            <span>⏱ Fast</span>
            <span>$ 0.50/kWh</span>
          </div>
        </div>

      </div>
<Nav />
    </div>
    
    
    
    
    </> );
}
 
export default Location;