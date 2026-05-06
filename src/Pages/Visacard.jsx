import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Visacard.css';

const Visacard = () => {
    const navigate = useNavigate();
    const [isDefault, setIsDefault] = useState(true);
    const [autoReload, setAutoReload] = useState(false);

    return (
        <div className="card-details-container">
            {/* Header */}
            <header className="card-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <h1>Card Details</h1>
                <button className="more-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                </button>
            </header>

            <div className="card-details-content">
                {/* Card Preview */}
                <div className="card-preview-box">
                    <div className="card-chip">
                        <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                            <rect width="40" height="30" rx="4" fill="url(#chip-grad)" />
                            <defs>
                                <linearGradient id="chip-grad" x1="0" y1="0" x2="40" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#ffc107" />
                                    <stop offset="1" stopColor="#ff9800" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="card-number-preview">
                        <span className="dots">•••• •••• ••••</span>
                        <span className="last-four">4582</span>
                    </div>
                    <div className="card-bottom-info">
                        <div className="info-group">
                            <span className="info-label">Card Holder</span>
                            <span className="info-value">SARAH JOHNSON</span>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Expires</span>
                            <span className="info-value">12/26</span>
                        </div>
                    </div>
                </div>

                {/* Card Information List */}
                <section className="info-list-section">
                    <h2>Card Information</h2>
                    <div className="info-item">
                        <span className="label">Card Type</span>
                        <span className="value">Visa Debit</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Bank</span>
                        <span className="value">Chase Bank</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Card Number</span>
                        <span className="value">•••• 4582</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Expiry Date</span>
                        <span className="value">12/2026</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Billing Address</span>
                        <span className="value">123 Main St...</span>
                    </div>
                </section>

                {/* Settings Section */}
                <section className="settings-section">
                    <h2>Settings</h2>
                    <div className="setting-item">
                        <div className="setting-text">
                            <span className="setting-title">Default Payment Method</span>
                            <span className="setting-subtitle">Use this card as primary</span>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isDefault} onChange={() => setIsDefault(!isDefault)} />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="setting-item">
                        <div className="setting-text">
                            <span className="setting-title">Auto-Reload</span>
                            <span className="setting-subtitle">Automatically add funds when low</span>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={autoReload} onChange={() => setAutoReload(!autoReload)} />
                            <span className="slider"></span>
                        </label>
                    </div>
                </section>

                {/* Action Icons */}
                <div className="card-action-icons">
                    <div className="action-btn-item">
                        <div className="icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </div>
                        <span>Edit Details</span>
                    </div>
                    <div className="action-btn-item">
                        <div className="icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </div>
                        <span>Rewards</span>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="footer-actions">
                    <button className="remove-card-btn" onClick={() => navigate(-1)}>
                        Remove Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Visacard;