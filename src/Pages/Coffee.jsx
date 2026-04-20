import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Uppernav from '../Components/Uppernav';
import './Coffee.css'
import cappucino from '../Assets/cappucino.png'
import latte from '../Assets/latte.png'
import saltedcaramel from '../Assets/salted caramel.png'
import tea from '../Assets/tea.png'
import matcha from '../Assets/matcha.png'
import lemon from '../Assets/lemon.png'
import Nav from '../Components/Nav';
import coffees from '../Assets/coffees.png'
import { supabase } from '../Supabase';

const Coffee = () => {
    const navigate = useNavigate();
    const goDetail = () => navigate('/Coffeedetail');
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('drinks-app').select('*').order('id', { ascending: true });
            if (!error && data) {
                setDrinks(data);
            }
        }
        fetchData();
    }, []);

    const defaultDrinks = [
        { id: 'd1', name: 'Cappuccino', button_text: 'View details', image: cappucino },
        { id: 'd2', name: 'Latte', button_text: 'View details', image: latte },
        { id: 'd3', name: 'Ice salted caramel', button_text: 'View details', image: saltedcaramel },
        { id: 'd4', name: 'Tea', button_text: 'View details', image: tea },
        { id: 'd5', name: 'Matcha', button_text: 'View details', image: matcha },
        { id: 'd6', name: 'Lemonade', button_text: 'View details', image: lemon }
    ];

    const displayDrinks = drinks.length > 0 ? drinks : defaultDrinks;

    return ( <>
    
    <Uppernav />
    
    <div className="container14">

      <button type="button" className="back14" onClick={() => navigate('/Charging')}>
        ← Back
      </button>

      <h1 className="title14">GRAB YOUR COFFEE</h1>

      <div className="tabs14">
        <span className="active14">All</span>
        <span>Hot coffee</span>
        <span>Cold coffee</span>
        <span>Offers</span>
      </div>

      <div className="grid14">
        {displayDrinks.map((item) => (
            <div
              key={item.id}
              className="card14"
              role="button"
              tabIndex={0}
              onClick={goDetail}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  goDetail();
                }
              }}
            >
              <img src={item.image} className="img14" alt={item.name} />
              <p>{item.name}</p>
              <span className="details14">{item.button_text || 'View details'}</span>
            </div>
        ))}
      </div>

      <h2 className="popular14">Popular</h2>

      <img src={coffees} className="popular-img14" alt="" />
      <Nav />

    </div>

    </> );
}
 
export default Coffee;