import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pushlocation.css'
import Upper from "../Components/Upper";
import logo from '../Assets/logo.svg'
import Notification from '../Assets/notification.svg'
import Button from '../Components/Button';
import { supabase } from '../Supabase';

const Pushnotification = () => {
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from('Enable-app')
                .select('*')
                .eq('id', 2)
                .single();
            if (!error && data) {
                setPageData(data);
            }
        }
        fetchData();
    }, []);

    const title = pageData?.title || 'Notifications?';
    const description = pageData?.description || 'Allow WayCharge to send you Notifications?';
    const buttonText = pageData?.button || 'Allow Notification';

    return ( <>
    
    <Upper />
    <img className='logo' src={logo} alt="logo" />

    <div className="screen-container5">
      <div className="content-wrapper5">
        {/* Icon Section */}
        <div className="icon-bg5">
          <div className="location-pin5">
         <img src={Notification} alt="loc" />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="main-title5">{title}</h1>
        <p className="description5">
          {description}
        </p>

        {/* Action Section */}
        <div className="actions5">
        <Button word={buttonText} onSwipeComplete={() => navigate('/Scan')} />
          
          <button className="cancel-button5">
            Cancel. Not Now
          </button>
        </div>
      </div>
    </div>

    </> );
}
 
export default Pushnotification;