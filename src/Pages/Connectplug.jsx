import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Connectplug.css';

const Connectplug = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(272); // 4:32 in seconds

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Auto-navigate to Chargertypes after 3 seconds
    useEffect(() => {
        const navTimer = setTimeout(() => {
            navigate('/Chargertypes');
        }, 3000);
        return () => clearTimeout(navTimer);
    }, [navigate]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="connect-container">
            {/* Green Header Section */}
            <div className="connect-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <h1 className="header-title">Connect Charger</h1>
                <p className="expiry-text">Reservation expires in</p>
                <div className="timer-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{formatTime(timeLeft)}</span>
                </div>
            </div>

            {/* Progress Stepper */}
            <div className="stepper-section">
                <div className="step active">1</div>
                <div className="step-line active"></div>
                <div className="step active">2</div>
                <div className="step-line"></div>
                <div className="step inactive">3</div>
            </div>

            {/* Connection Visual Section */}
            <div className="visual-section">
                <div className="icon-card outline">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h10"></path>
                        <circle cx="7" cy="17" r="2"></circle>
                        <circle cx="17" cy="17" r="2"></circle>
                    </svg>
                </div>
                <div className="connection-progress">
                    <div className="progress-fill"></div>
                </div>
                <div className="icon-card filled">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                </div>
            </div>

            {/* Text Section */}
            <div className="instruction-section">
                <h2 className="instruction-title">Connect the Plug</h2>
                <p className="instruction-subtitle">Insert the charging cable into your vehicle's charging port</p>
            </div>

            {/* Footer Section */}
            <div className="footer-section">
                <button className="waiting-btn" disabled>
                    Waiting for connection...
                </button>
            </div>
        </div>
    );
};

export default Connectplug;