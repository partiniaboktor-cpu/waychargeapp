import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pushnotification.css';

const Pushnotification = () => {
    const navigate = useNavigate();

    const handleEnableLocation = () => {
        // Handle location permission logic here
        navigate('/Scan');
    };

    const handleSkip = () => {
        navigate('/Scan');
    };

    return (
        <div className="push-page-container">
            <button className="skip-btn" onClick={handleSkip}>Skip</button>

            {/* Illustration Section */}
            <div className="illustration-section">
                <div className="concentric-circles">
                    <div className="circle circle-large"></div>
                    <div className="circle circle-medium"></div>
                    <div className="circle circle-small"></div>
                    <div className="main-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="text-section">
                <h1>Find Nearby Chargers</h1>
                <p>Allow location access to discover charging stations near you and get real-time availability updates</p>
            </div>

            {/* Features List */}
            <div className="features-list">
                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <div className="feature-text">
                        <h3>Smart Search</h3>
                        <p>Find the closest charging stations</p>
                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div className="feature-text">
                        <h3>Real-Time Updates</h3>
                        <p>See live availability and wait times</p>
                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="13 17 18 12 13 7"></polyline>
                            <polyline points="6 17 11 12 6 7"></polyline>
                        </svg>
                    </div>
                    <div className="feature-text">
                        <h3>Turn-by-Turn</h3>
                        <p>Navigate to your charging station</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="btn-enable" onClick={handleEnableLocation}>Enable Location</button>
                <button className="btn-not-now" onClick={handleSkip}>Not Now</button>
            </div>
        </div>
    );
};

export default Pushnotification;