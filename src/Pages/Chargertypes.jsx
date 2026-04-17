import React, { Component } from 'react';
import Upper from '../Components/Upper';
import './Chargertypes.css'
import Uppernav from '../Components/Uppernav';
import ch1 from '../Assets/ch1.png'
import ch2 from '../Assets/ch2.png'
import ch3 from '../Assets/ch3.png'
import ch4 from '../Assets/ch4.png'
import ch5 from '../Assets/ch5.png'
import ch6 from '../Assets/ch6.png'
import Nav from '../Components/Nav';

const Chargertypes = () => {
    return ( <>
    
    <Uppernav />
    
    <div className="container12">

      <h3 className="title12">AVAILABLE CONNECTORS</h3>

      <div className="card12">
        <img src={ch1} className="image12" />
        <div className="info12">
          <h4 className="type12">Type A</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side A</div>
      </div>

      <div className="card12 active12">
        <img src={ch2} className="image12" />
        <div className="info12">
          <h4 className="type12">Type B</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side B</div>
      </div>

      <div className="card12">
        <img src={ch3} className="image12" />
        <div className="info12">
          <h4 className="type12">Type C</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side A</div>
      </div>

      <div className="sectionHeader12">
        <h3 className="title12">FASTER CONNECTORS</h3>
        <span className="extra12">+ extra fee</span>
      </div>

      <div className="card12">
        <img src={ch4} className="image12" />
        <div className="info12">
          <h4 className="type12">Type D</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side B</div>
      </div>

      <div className="card12">
        <img src={ch5} className="image12" />
        <div className="info12">
          <h4 className="type12">Type E</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side B</div>
      </div>

      <div className="card12">
        <img src={ch6} className="image12" />
        <div className="info12">
          <h4 className="type12">Type F</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side A</div>
      </div>

         <div className="card12">
        <img src={ch1} className="image12" />
        <div className="info12">
          <h4 className="type12">Type F</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side A</div>
      </div>
<Nav />
    </div>
    
    
    
    
    </> );
}
 
export default Chargertypes;