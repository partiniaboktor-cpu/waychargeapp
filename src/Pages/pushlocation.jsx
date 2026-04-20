import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pushlocation.css'
import Upper from "../Components/Upper";
import logo from '../Assets/logo.svg'
import loc from '../Assets/loc.svg'
import Button from '../Components/Button';
import { supabase } from '../Supabase';

const Pushlocation = () => {
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from('Enable-app')
                .select('*')
                .eq('id', 1)
                .single();
            if (!error && data) {
                setPageData(data);
            }
        }
        fetchData();
    }, []);

    const title = pageData?.title || 'YOUR LOCATION?';
    const description = pageData?.description || 'Allow WayCharge to access your location?';
    const buttonText = pageData?.button || 'Allow location Access';

    return ( <>
    
    <Upper />
    <img className='logo' src={logo} alt="logo" />

    <div className="screen-container5">
      <div className="content-wrapper5">
        {/* Icon Section */}
        <div className="icon-bg5">
          <div className="location-pin5">
         <img src={loc} alt="loc" />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="main-title5">{title}</h1>
        <p className="description5">
          {description}
        </p>

        {/* Action Section */}
        <div className="actions5">
       <Button
       word={buttonText}
       onSwipeComplete={() => navigate('/Pushnotification')}
       />
       
          
          <button className="cancel-button5">
            Cancel. Not Now
          </button>
        </div>
      </div>
    </div>

    </> );
}
 
export default Pushlocation;