import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pushlocation.css';

const Pushlocation = () => {
    const navigate = useNavigate();

    const handleEnableNotifications = () => {
        // Handle notification permission logic here
        navigate('/Pushnotification');
    };

    const handleSkip = () => {
        navigate('/Pushnotification');
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
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="text-section">
                <h1>Enable Notifications</h1>
                <p>Allow notifications to get real-time updates on your charging status and special offers</p>
            </div>

            {/* Features List */}
            <div className="features-list">
                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                    </div>
                    <div className="feature-text">
                        <h3>Charging Alerts</h3>
                        <p>Get notified when your charging is complete</p>
                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                    </div>
                    <div className="feature-text">
                        <h3>Special Offers</h3>
                        <p>Exclusive discounts and rewards for users</p>
                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <div className="feature-text">
                        <h3>Security</h3>
                        <p>Instant alerts for any unauthorized activity</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="btn-enable" onClick={handleEnableNotifications}>Enable Notifications</button>
                <button className="btn-not-now" onClick={handleSkip}>Not Now</button>
            </div>
        </div>
    );
};

export default Pushlocation;