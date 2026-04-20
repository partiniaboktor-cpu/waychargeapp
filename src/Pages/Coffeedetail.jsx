import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Coffeedetail.css'
import Uppernav from '../Components/Uppernav';
import bigcoffee from '../Assets/bigcoffee.png'
import { Link } from "react-router-dom";
import { supabase } from '../Supabase';

const Coffeedetail = () => {
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState('Medium');

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('coffee-product-app').select('*').order('id', { ascending: true });
            if (!error && data) {
                const productInfo = data.find(d => d.name);
                if (productInfo) setPageData(productInfo);

                const fetchedSizes = data.map(d => d.sizes).filter(Boolean).map(s => s.trim());
                if (fetchedSizes.length > 0) {
                    setSizes(fetchedSizes);
                    if (!fetchedSizes.includes(selectedSize)) {
                        setSelectedSize(fetchedSizes[0]);
                    }
                }
            }
        }
        fetchData();
    }, []);

    const d = pageData || {
        name: 'Cappuccino',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: '65',
        points: '300',
        image: bigcoffee
    };

    const displaySizes = sizes.length > 0 ? sizes : ['Small', 'Medium', 'Large'];

    return ( <>
    
    <Uppernav />

<div className="container15">
<Link to="/coffee">
  <button className="backBtn15">← Back</button>
</Link>

      <div className="imageWrapper15">
        <img
          src={d.image || bigcoffee}
          alt={d.name}
          className="coffeeImg15"
        />
      </div>

      <div className="card15">
        <div className="header15">
          <h2 className="title15">{d.name}</h2>
          <span className="heart15">♡</span>
        </div>

        <p className="desc15">
          {d.description}
        </p>

        <div className="sizeSection15">
          <h4 className="sizeTitle15">Size</h4>
          <div className="sizes15">
            {displaySizes.map(size => (
                <span 
                  key={size} 
                  className={`sizeOption15 ${selectedSize === size ? 'active15' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
            ))}
          </div>
        </div>

        <div className="bottomBar15">
          <div className="priceBox15">
            <span className="price15">{d.price} LE</span>
            <span className="divider15">|</span>
            <span className="points15">{d.points} Points</span>
          </div>
          <button type="button" className="buyBtn15" onClick={() => navigate('/Stopcharging')}>
            Buy now
          </button>
        </div>
      </div>
    </div>


    </> );
}
 
export default Coffeedetail;