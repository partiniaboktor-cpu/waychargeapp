import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Location.css';
import Nav from '../Components/Nav';

const Location = () => {
    const navigate = useNavigate();
    const [selectedStation, setSelectedStation] = useState(1);

    const stations = [
        {
            id: 1,
            name: "Station A - Downtown",
            distance: "0.3 mi",
            time: "5 min drive",
            type: "DC Fast",
            open: "4/6 open",
            price: "$0.45/kWh",
            status: "AVAILABLE",
            theme: "green"
        },
        {
            id: 2,
            name: "Station B - Eastside",
            distance: "0.5 mi",
            time: "8 min drive",
            type: "Level 2",
            open: "1/4 open",
            price: "$0.28/kWh",
            status: "CROWDED",
            theme: "orange"
        },
        {
            id: 3,
            name: "Station C - Westgate",
            distance: "0.8 mi",
            time: "12 min drive",
            type: "DC Fast",
            open: "0/3 open",
            price: "$0.42/kWh",
            status: "FULL",
            theme: "red"
        }
    ];

    return (
        <div className="location-page-container">
            {/* Map Area */}
            <div className="map-view-simulation">
                <div className="grid-overlay"></div>
                
                {/* Floating Controls */}
                <button className="floating-btn back-map" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button className="floating-btn info-map">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                </button>

                <div className="search-bar-floating">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search for charging stations..." />
                </div>

                <button className="floating-btn my-location">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>

                {/* Map Markers */}
                <div className="map-marker green" style={{ top: '25%', left: '25%' }}>
                    <div className="marker-dot">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                    </div>
                    <div className="marker-label">0.3 mi</div>
                </div>

                <div className="map-marker orange" style={{ top: '20%', left: '75%' }}>
                    <div className="marker-dot">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                    </div>
                    <div className="marker-label">0.5 mi</div>
                </div>

                <div className="map-marker red" style={{ top: '40%', left: '35%' }}>
                    <div className="marker-dot"></div>
                </div>
            </div>

            {/* Bottom Sheet */}
            <div className="bottom-sheet-stations">
                <div className="sheet-handle"></div>
                <h2 className="sheet-title">Nearby Stations (3)</h2>
                
                <div className="stations-list-scroll">
                    {stations.map(station => (
                        <div 
                            key={station.id} 
                            className={`station-card-detailed ${station.theme} ${selectedStation === station.id ? 'selected' : ''}`}
                            onClick={() => setSelectedStation(station.id)}
                        >
                            <div className="card-top-row">
                                <div className="station-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                                    </svg>
                                </div>
                                <div className="station-main-info">
                                    <h3>{station.name}</h3>
                                    <p>{station.distance} • {station.time}</p>
                                </div>
                                <span className={`status-badge ${station.theme}`}>{station.status}</span>
                            </div>
                            
                            <div className="card-bottom-row">
                                <div className="stat-group">
                                    <span className="stat-label">{station.type}</span>
                                    <span className={`stat-value ${station.theme}`}>{station.open}</span>
                                </div>
                                <div className="stat-group">
                                    <span className="stat-label">Price</span>
                                    <span className="stat-value dark">{station.price}</span>
                                </div>
                                <button className={`action-btn-small ${station.theme === 'green' ? 'solid' : 'outline'}`}>
                                    {station.theme === 'green' ? 'Navigate' : 'View'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Nav />
        </div>
    );
};

export default Location;