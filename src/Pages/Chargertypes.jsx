import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Chargertypes.css'
import Uppernav from '../Components/Uppernav';
import Nav from '../Components/Nav';
import { supabase } from "../Supabase";

import ch1 from '../Assets/ch1.png'
import ch2 from '../Assets/ch2.png'
import ch3 from '../Assets/ch3.png'
import ch4 from '../Assets/ch4.png'
import ch5 from '../Assets/ch5.png'
import ch6 from '../Assets/ch6.png'

const images = {
  "ch1.png": ch1,
  "ch2.png": ch2,
  "ch3.png": ch3,
  "ch4.png": ch4,
  "ch5.png": ch5,
  "ch6.png": ch6,
};

const Chargertypes = () => {

  const [chargertypes, setChargertypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getChargertypeAPI() {
      const { data, error } = await supabase
        .from("Chargertype-app")
        .select("*");

      if (error) {
        console.log(error);
      } else {
        setChargertypes(data);
      }
    }

    getChargertypeAPI();
  }, []);

  const goCharging = () => navigate('/Charging');

  return (
    <>
      <Uppernav />

      <div className="container12">
        <h3 className="title12">AVAILABLE CONNECTORS</h3>

        {chargertypes.map((item) => (
          <div
            key={item.id}
            className={`card12 ${item.Title === 'Type B' ? 'active12' : ''}`}
            onClick={goCharging}
          >
            <img
              src={item.image || ch1}
              className="image12"
              alt={item.Title}
            />

            <div className="info12">
              <h4 className="type12">{item.Title}</h4>
              <p className="power12">{item.description}</p>
            </div>

            <div className="side12">🔋 {item.type}</div>
          </div>
        ))}

        <Nav />
      </div>
    </>
  );
}

export default Chargertypes;