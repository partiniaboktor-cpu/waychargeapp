import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Uppernav from '../Components/Uppernav';
import './Payment.css'
import visa1 from '../Assets/visa1.svg'
import visa2 from '../Assets/visa2.svg'
import visa3 from '../Assets/visa3.svg'
import visa4 from '../Assets/visa4.svg'
import Button from "../Components/Button";
import wallet from '../Assets/wallet.svg';
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import { supabase } from '../Supabase';

const Payment = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(1);
    const [pageData, setPageData] = useState(null);
    const [methods, setMethods] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('PAYMENTS_WALLET').select('*').order('id', { ascending: true });
            if (!error && data) {
                const balanceRow = data.find(row => row.Type === 'Balance');
                const costRow = data.find(row => row.Type === 'Charging cost');
                
                if (balanceRow || costRow) {
                    setPageData({
                        balance: balanceRow ? balanceRow.Amount.replace(' LE', '') : '25,000',
                        charging_cost: costRow ? costRow.Amount : '2,000 LE',
                        action: 'Confirm'
                    });
                }
                
                // Keep cards fallback or fetch if you add a cards table later
                // For now, cards are not in PAYMENTS_WALLET
            }
        }
        fetchData();
    }, []);

    const d = pageData || {
        balance: '25,000',
        charging_cost: '2,000 LE',
        action: 'Confirm'
    };

    const displayMethods = methods.length > 0 ? methods : [
        { id: 1, img: visa1, num: "**** **** **** 0528" },
        { id: 2, img: visa2, num: "**** **** **** 4651" },
        { id: 3, img: visa3, num: "**** **** **** 3421" },
        { id: 4, img: visa4, num: "**** **** **** 7845" },
    ];

    return ( <>
    
    <Uppernav />

<div className="container17">

      <div className="top17">
        <span>My Transactions</span>
        <Link to="/paymenthistory" className="link17">
  View all
</Link>
      </div>

      <div className="balance17">
        <div>
          <p className=" your"> Your balance</p>
          <h2 className="nu">{d.balance} LE</h2>
        </div>
        <img className="iconBox17" src={wallet} alt="" />
      </div>

      <div className="cost17">
        <span>Charging coast</span>
        <b>{d.charging_cost}</b>
      </div>

      <h3 className="select">Select Payment method</h3>

      {displayMethods.map((item) => (
        <div
          key={item.id}
          className="card17"
          onClick={() => setActive(item.id)}
        >
          <div className="left17">
            <img src={item.img} className="img17" alt="card" />
            <span>{item.num}</span>
          </div>

          <div className={active === item.id ? "radio17 on17" : "radio17"} />
        </div>
      ))}

      <div className="payment-swipe-row17">
        <Button
          word="Add card"
          variant="outline"
          onSwipeComplete={() => navigate('/Visacard')}
        />
      </div>

      <Button word={d.action || 'Confirm'} onSwipeComplete={() => navigate('/Paymentconfirmation')} />
<Nav />
    </div>
    
    </> );
}
 
export default Payment;