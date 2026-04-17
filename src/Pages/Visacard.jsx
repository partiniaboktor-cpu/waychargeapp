import React, { useState } from "react";
import Uppernav from '../Components/Uppernav';
import './Visacard.css'
import visa3 from '../Assets/visa3.svg'
import chip from '../Assets/chip.svg'
import Button from "../Components/Button";
import Nav from "../Components/Nav";

const Visacard = () => {

const [toggle, setToggle] = useState({
    glass: false,
    image: true,
    float: false,
  });

    return ( <>
    
    <Uppernav />
    
    <div className="container18">

      {/* CARD */}
      <div className="cardBox18">
        <img src={chip} className="chip18" />

        <div className="bank18">Bank El-Ahly</div>

        <div className="number18">4444 * 34678</div>
        <div className="date18">MM/YY</div>

        <div className="holder18">CARD HOLDER</div>

        <img src={visa3} className="master18" />
      </div>

      {/* INPUTS */}
      <div className="form18">

        <label>Number</label>
        <input className="input18" placeholder="**********" />

        <div className="row18">
          <input className="input18" placeholder="Expired date" />
          <input className="input18" placeholder="CVV" />
        </div>

        <input className="input18" placeholder="Card Header" />

      </div>

      {/* TOGGLES */}
      <div className="toggles18">

        <div className="toggleRow18">
          <span>Glassmorphism</span>
          <div
            className={toggle.glass ? "switch18 on18" : "switch18"}
            onClick={() => setToggle({ ...toggle, glass: !toggle.glass })}
          />
        </div>

        <div className="toggleRow18">
          <span>Card image</span>
          <div
            className={toggle.image ? "switch18 on18" : "switch18"}
            onClick={() => setToggle({ ...toggle, image: !toggle.image })}
          />
        </div>

        <div className="toggleRow18">
          <span>Floating Card</span>
          <div
            className={toggle.float ? "switch18 on18" : "switch18"}
            onClick={() => setToggle({ ...toggle, float: !toggle.float })}
          />
        </div>

      </div>

      {/* BUTTON */}
      <Button word='Validate card' />
<Nav />
    </div>

    
    </> );
}
 
export default Visacard;