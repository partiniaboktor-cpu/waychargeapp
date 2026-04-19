import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Chargertypes.css'
import Uppernav from '../Components/Uppernav';
import ch1 from '../Assets/ch1.png'
import ch2 from '../Assets/ch2.png'
import ch3 from '../Assets/ch3.png'
import ch4 from '../Assets/ch4.png'
import ch5 from '../Assets/ch5.png'
import ch6 from '../Assets/ch6.png'
import Nav from '../Components/Nav';
import { supabase } from "../Supabase";

const Chargertypes = () => {


const [Chargertype, setChargertype] = useState([]);
useEffect(() => {

  async function getChargertypeAPI() {
    const { data, error } = await supabase
      .from("Chargertype")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setChargertype(data);
      console.log(data);
    }
  }

  getChargertypeAPI();

}, []);


    const navigate = useNavigate();
    const goCharging = () => navigate('/Charging');
    const cardKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goCharging();
        }
    };
    return ( <>
    
    <Uppernav />
    
    <div className="container12">

      <h3 className="title12">AVAILABLE CONNECTORS</h3>

      <div
        className="card12"
        role="button"
        tabIndex={0}
        onClick={goCharging}
        onKeyDown={cardKeyDown}
      >
        <img src={ch1} className="image12" alt="" />
        <div className="info12">
          <h4 className="type12">Type A</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side A</div>
      </div>

      <div
        className="card12 active12"
        role="button"
        tabIndex={0}
        onClick={goCharging}
        onKeyDown={cardKeyDown}
      >
        <img src={ch2} className="image12" alt="" />
        <div className="info12">
          <h4 className="type12">Type B</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side B</div>
      </div>

      <div
        className="card12"
        role="button"
        tabIndex={0}
        onClick={goCharging}
        onKeyDown={cardKeyDown}
      >
        <img src={ch3} className="image12" alt="" />
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

      <div
        className="card12"
        role="button"
        tabIndex={0}
        onClick={goCharging}
        onKeyDown={cardKeyDown}
      >
        <img src={ch4} className="image12" alt="" />
        <div className="info12">
          <h4 className="type12">Type D</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side B</div>
      </div>

      <div
        className="card12"
        role="button"
        tabIndex={0}
        onClick={goCharging}
        onKeyDown={cardKeyDown}
      >
        <img src={ch5} className="image12" alt="" />
        <div className="info12">
          <h4 className="type12">Type E</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side B</div>
      </div>

      <div
        className="card12"
        role="button"
        tabIndex={0}
        onClick={goCharging}
        onKeyDown={cardKeyDown}
      >
        <img src={ch6} className="image12" alt="" />
        <div className="info12">
          <h4 className="type12">Type F</h4>
          <p className="power12">12500 WWH</p>
        </div>
        <div className="side12">🔋 Side A</div>
      </div>

         <div
        className="card12"
        role="button"
        tabIndex={0}
        onClick={goCharging}
        onKeyDown={cardKeyDown}
      >
        <img src={ch1} className="image12" alt="" />
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