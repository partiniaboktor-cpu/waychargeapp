import React, { useState, useEffect } from 'react';
import './Request.css'
import Uppernav from '../Components/Uppernav';
import Button from '../Components/Button';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Request = () => {
    const [pageData, setPageData] = useState(null);
    const [formData, setFormData] = useState({
        customer_name: '',
        phone_number: '',
        location: '',
        request_time: ''
    });

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from('service-request-app')
                .select('*')
                .eq('id', 1)
                .single();
            
            if (!error && data) {
                setPageData(data);
                // Pre-fill form with row 1 data as initial state
                setFormData({
                    customer_name: data.customer_name || '',
                    phone_number: data.phone_number || '',
                    location: data.location || '',
                    request_time: data.request_time || ''
                });
            }
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const { error } = await supabase
            .from('service-request-app')
            .insert([
                {
                    customer_name: formData.customer_name,
                    phone_number: formData.phone_number,
                    location: formData.location,
                    request_time: formData.request_time,
                    status: 'Pending',
                    created_at: new Date().toISOString()
                }
            ]);
        
        if (error) {
            alert('Error sending request: ' + error.message);
        } else {
            alert('Request sent successfully!');
        }
    };

    const d = pageData || {
        description: 'Whenever , wherever you go we will be available all time and everywhere.',
        action: 'Send Request',
        request_time: '00:00'
    };

    return (  <>
    
    <Uppernav />

    <div className="container22">

      <h2 className="title22">SEND REQUEST</h2>
      <p className="subtitle22">
        {d.description}
      </p>

      {/* Name */}
      <label className="label22">Name</label>
      <input 
        type="text" 
        className="input22" 
        name="customer_name"
        value={formData.customer_name}
        onChange={handleChange}
      />

      {/* Phone */}
      <label className="label22">Phone Number</label>
      <input 
        type="text" 
        className="input22" 
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
      />

      {/* Location */}
      <label className="label22">Location</label>
      <input 
        type="text" 
        className="input22" 
        name="location"
        value={formData.location}
        onChange={handleChange}
      />

      {/* Time */}
      <div className="time-row22">
        <label className="label22">Time</label>
        <span className="time-text22">{formData.request_time || d.request_time} clock</span>
      </div>
      <input 
        type="text" 
        className="input22" 
        name="request_time"
        value={formData.request_time}
        onChange={handleChange}
      />

      {/* Upload */}
      <label className="label22">Upload image for your location</label>
      <div className="upload-box22">
        <span className="upload-icon22">⬆️</span>
      </div>

      {/* Button */}
      <div className='rebtn'>
      <Button word={d.action} onClick={handleSubmit} />

      </div>
<Nav />

    </div>
    
    </>);
}

export default Request;