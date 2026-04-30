import React, { useState, useEffect } from 'react';
import './Location.css'
import Uppernav from '../Components/Uppernav';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Location = () => {
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStations() {
            try {
                const { data, error } = await supabase
                    .from('STATIONS')
                    .select('*')
                    .order('id', { ascending: true });
                
                if (error) throw error;
                if (data) setStations(data);
            } catch (err) {
                console.error('Error fetching stations:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchStations();
    }, []);

    const displayStations = stations.length > 0 ? stations : [
        { id: 1, 'Station Name': 'Downtown Charging Hub', Status: 'Available', Rating: '4.5', Location: '123 Main St, San Francisco, CA' },
        { id: 2, 'Station Name': 'Market Street Station', Status: 'Available', Rating: '4.8', Location: '456 Market St, San Francisco, CA' },
        { id: 3, 'Station Name': 'Bay Area EV Center', Status: 'Full', Rating: '4.2', Location: '789 Bay St, San Francisco, CA' },
    ];

    return ( <>
    
    <Uppernav />

     <div className="container23">

      {/* Search */}
      <div className="search-row23">
        <input 
          type="text" 
          placeholder="Search for charging stations..." 
          className="search-input23"
        />
        <button className="btn-small23">Nearby</button>
        <button className="btn-small23">Filters</button>
      </div>

      {/* Map */}
     <div className="map23">
  <iframe
    title="Cairo Map"
    src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
    className="map-frame23"
    loading="lazy"
  ></iframe>
</div>

      {/* Stations */}
      <div className="stations23">
        <h3 className="stations-title23">{displayStations.length} Stations Found</h3>

        {displayStations.map((item) => (
            <div className="station-card23" key={item.id}>
                <div className="station-header23">
                    <h4 className="station-name23">{item['Station Name']}</h4>
                    <span className={`status ${item.Status?.toLowerCase() === 'available' ? 'available23' : 'full23'}`}>
                        {item.Status}
                    </span>
                </div>

                <p className="rating23">⭐ {item.Rating} <span>0.5 mi</span></p>
                <p className="address23">{item.Location}</p>

                <div className="info-row23">
                    <span>⚡ 3/8</span>
                    <span>⏱ Fast</span>
                    <span>$ 0.45/kWh</span>
                </div>
            </div>
        ))}

      </div>

      </div>
<Nav />
    </> );
}
 
export default Location;