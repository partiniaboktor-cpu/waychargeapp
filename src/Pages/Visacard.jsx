import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Uppernav from '../Components/Uppernav';
import './Visacard.css'
import visa3 from '../Assets/visa3.svg'
import chip from '../Assets/chip.svg'
import Button from "../Components/Button";
import Nav from "../Components/Nav";
import { supabase } from '../Supabase';

const Visacard = () => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
      async function fetchData() {
          const { data, error } = await supabase.from('Cards-data-app').select('*').eq('id', 1).single();
          if (!error && data) {
              setPageData(data);
          }
      }
      fetchData();
  }, []);

  const d = pageData || {
      bank_name: 'Bank El-Ahly',
      bank_namecard_number_masked: '4444 * 34678',
      expiry_date: 'MM/YY',
      card_holder: 'CARD HOLDER',
      card_image: visa3,
      card_style: 'Glassmorphism'
  };

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
        <img src={chip} className="chip18" alt="chip" />

        <div className="bank18">{d.bank_name}</div>

        <div className="number18">{d.bank_namecard_number_masked}</div>
        <div className="date18">{d.expiry_date}</div>

        <div className="holder18">{d.card_holder ? d.card_holder.toUpperCase() : 'CARD HOLDER'}</div>

        <img src={d.card_image || visa3} className="master18" alt="visa" />
      </div>

      {/* INPUTS */}
      <div className="form18">

        <label>Number</label>
        <input className="input18" placeholder={d.card_number_full || "**********"} />

        <div className="row18">
          <input className="input18" placeholder={d.expiry_date || "Expired date"} />
          <input className="input18" placeholder={d.cvv || "CVV"} />
        </div>

        <input className="input18" placeholder={d.card_holder || "Card Holder"} />

      </div>

      {/* TOGGLES */}
      <div className="toggles18">

        <div className="toggleRow18">
          <span>{d.card_style || 'Glassmorphism'}</span>
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
      <Button word="Validate card" onSwipeComplete={() => navigate('/Payment')} />
<Nav />
    </div>

    
    </> );
}
 
export default Visacard;