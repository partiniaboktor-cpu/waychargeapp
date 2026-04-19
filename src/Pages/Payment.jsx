import React, { useState } from "react";
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

const Payment = () => {
     const navigate = useNavigate();
     const [active, setActive] = useState(2);

  const methods = [
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
          <h2 className="nu">25,000 LE</h2>
        </div>
        <img className="iconBox17" src={wallet} alt="" />
      </div>

      <div className="cost17">
        <span>Charging coast</span>
        <b>2,000 LE</b>
      </div>

      <h3 className="select">Select Payment method</h3>

      {methods.map((item) => (
        <div
          key={item.id}
          className="card17"
          onClick={() => setActive(item.id)}
        >
          <div className="left17">
            <img src={item.img} className="img17" />
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

      <Button word="Confirm" onSwipeComplete={() => navigate('/Paymentconfirmation')} />
<Nav />
    </div>
    
    </> );
}
 
export default Payment;