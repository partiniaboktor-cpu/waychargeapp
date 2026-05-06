import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Stopcharging.css';

const Stopcharging = () => {
    const navigate = useNavigate();

    return (
        <div className="stop-charging-container">
            {/* Header */}
            <header className="stop-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <h1>Stop Charging</h1>
            </header>

            <div className="stop-content">
                {/* Warning Icon Section */}
                <div className="warning-illustration">
                    <div className="concentric-red">
                        <div className="red-circle circle-lg"></div>
                        <div className="red-circle circle-md"></div>
                        <div className="red-circle circle-sm">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff5252" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="stop-text-section">
                    <h2>Stop Charging Early?</h2>
                    <p>Your vehicle is currently at 68% battery. Are you sure you want to stop charging now?</p>
                </div>

                {/* Session Details */}
                <div className="session-card">
                    <h3>Current Session</h3>
                    <div className="session-list">
                        <div className="session-item">
                            <span>Current battery level</span>
                            <span className="text-green">68%</span>
                        </div>
                        <div className="session-item">
                            <span>Energy added</span>
                            <span>34.8 kWh</span>
                        </div>
                        <div className="session-item">
                            <span>Session duration</span>
                            <span>27 minutes</span>
                        </div>
                        <div className="session-item">
                            <span>Current cost</span>
                            <span className="text-bold">$17.66</span>
                        </div>
                    </div>
                </div>

                {/* Info Box */}
                <div className="info-warning-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbc02d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p>You're 12% away from your target charge level of 80%. Estimated time remaining: 18 minutes.</p>
                </div>

                {/* Actions */}
                <div className="stop-actions">
                    <button className="btn-stop" onClick={() => navigate('/Chargingcomplete')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Yes, Stop Charging
                    </button>
                    <button className="btn-continue" onClick={() => navigate(-1)}>
                        Continue Charging
                    </button>
                    <button className="btn-text-link" onClick={() => navigate(-1)}>
                        Back to Session
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stopcharging;