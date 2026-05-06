import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Chargingcomplete.css';

const Chargingcomplete = () => {
    const navigate = useNavigate();

    return (
        <div className="complete-container">
            {/* Close Button */}
            <button className="close-btn" onClick={() => navigate('/Home')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <div className="complete-content">
                {/* Success Icon */}
                <div className="success-illustration">
                    <div className="concentric-green">
                        <div className="green-circle circle-lg"></div>
                        <div className="green-circle circle-md"></div>
                        <div className="green-circle circle-sm">
                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="complete-title-section">
                    <h2>Charging Complete!</h2>
                    <p>Your vehicle is ready to go</p>
                </div>

                {/* Final Level */}
                <div className="battery-final-level">
                    <span className="level-number">80%</span>
                    <span className="level-label">Final Battery Level</span>
                </div>

                {/* Session Summary */}
                <div className="summary-section">
                    <h3>Session Summary</h3>
                    <div className="summary-list">
                        <div className="summary-item">
                            <span>Energy Added</span>
                            <span>48.5 kWh</span>
                        </div>
                        <div className="summary-item">
                            <span>Duration</span>
                            <span>45 minutes</span>
                        </div>
                        <div className="summary-item">
                            <span>Station</span>
                            <span>Station A - Downtown</span>
                        </div>
                        <div className="summary-item">
                            <span>Charging Type</span>
                            <span>DC Fast Charging</span>
                        </div>
                    </div>
                    <div className="total-cost-row">
                        <span>Total Cost</span>
                        <span className="total-amount">$34.20</span>
                    </div>
                </div>

                {/* Points Badge */}
                <div className="points-badge" onClick={() => navigate('/Points')}>
                    <div className="points-icon-wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <div className="points-text">
                        <span className="points-title">You earned 120 points!</span>
                        <span className="points-subtitle">Redeem for rewards and discounts</span>
                    </div>
                    <svg className="chevron-right" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>

                {/* Icon Actions */}
                <div className="icon-actions">
                    <div className="action-icon-item" onClick={() => navigate('/PaymentHistory')}>
                        <div className="icon-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <span>Receipt</span>
                    </div>
                    <div className="action-icon-item">
                        <div className="icon-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                <polyline points="16 6 12 2 8 6"></polyline>
                                <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                        </div>
                        <span>Share</span>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="complete-actions">
                    <button className="btn-checkout" onClick={() => navigate('/Payment')}>
                        Checkout
                    </button>
                    <button className="btn-book-another" onClick={() => navigate('/Home')}>
                        Book Another Session
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chargingcomplete;
