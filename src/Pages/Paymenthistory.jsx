import React, { useState, useEffect } from "react";
import './Paymenthistory.css'
import Uppernav from '../Components/Uppernav';
import Nav from "../Components/Nav";
import no from '../Assets/no.svg'
import download from '../Assets/download.svg'
import { Link } from "react-router-dom";
import { supabase } from '../Supabase';

const Notifications = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('transactions-app').select('*').order('id', { ascending: true });
            if (!error && data) {
                setTransactions(data);
            }
        }
        fetchData();
    }, []);

    const displayTransactions = transactions.length > 0 ? transactions : [
        { id: 't1', amount: '-12.49', currency: 'LE', card_type: 'MasterCard', card_last_digits: '****2345', status: 'Completed', isRed: false },
        { id: 't2', amount: '-12.49', currency: 'LE', card_type: 'MasterCard', card_last_digits: '****2345', status: 'Failed', isRed: true },
        { id: 't3', amount: '-12.49', currency: 'LE', card_type: 'MasterCard', card_last_digits: '****2345', status: 'Completed', isRed: false },
        { id: 't4', amount: '-12.49', currency: 'LE', card_type: 'MasterCard', card_last_digits: '****2345', status: 'Completed', isRed: false },
        { id: 't5', amount: '-12.49', currency: 'LE', card_type: 'MasterCard', card_last_digits: '****2345', status: 'Failed', isRed: true },
        { id: 't6', amount: '-12.49', currency: 'LE', card_type: 'MasterCard', card_last_digits: '****2345', status: 'Failed', isRed: true }
    ];

    return ( <>
    
    <Uppernav />
    <div className="container20">
      
    <Link to="/payment">
  <button className="back20">← Back</button>
</Link>

      <h1 className="title20">MY TRANSACTIONS</h1>

      <div className="tabs20">
        <span className="tab20 active20">All</span>
        <span className="tab20">Withdraw</span>
        <span className="tab20">Deposit of funds</span>
      </div>

      {displayTransactions.map((item) => {
        const isRed = item.isRed !== undefined ? item.isRed : (item.status === 'Failed' || item.amount < 0);
        
        return (
          <div className="card20" key={item.id}>
            <img 
              className={`icon20 ${isRed ? 'red20' : 'green20'}`} 
              src={isRed ? no : download} 
              alt={isRed ? "no" : "download"} 
            />
            <div>
              <p className="name20">Partinia Boktor</p>
              <h3 className="cardNum20">{item.card_type} {item.card_last_digits}</h3>
            </div>
            <span className="amount20">{item.amount} {item.currency}</span>
          </div>
        );
      })}

<Nav />
    </div>

    
    
    </> );
}
 
export default Notifications;