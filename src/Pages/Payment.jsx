import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Payment.css';

const Payment = () => {
    const navigate = useNavigate();
    const [applePayEnabled, setApplePayEnabled] = useState(true);
    const [paypalEnabled, setPaypalEnabled] = useState(false);

    const CardIcon = ({ type }) => {
        if (type === 'visa') {
            return (
                <div className="card-logo visa">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                        <path d="M10 16h2l1-7h-2l-1 7zm6-7l-1 5-1-5h-2l2 7h2l2-7h-2zM4 9l2 7h2l1-7H7l-1 5-1-5H4z" />
                    </svg>
                </div>
            );
        }
        if (type === 'mastercard') {
            return (
                <div className="card-logo mastercard">
                    <div className="circle-red"></div>
                    <div className="circle-orange"></div>
                </div>
            );
        }
        if (type === 'amex') {
            return (
                <div className="card-logo amex">
                    <span>AMEX</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="payment-page-container">
            {/* Header */}
            <header className="payment-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <h1>Payment Methods</h1>
            </header>

            <div className="payment-content">
                {/* Credit & Debit Cards */}
                <section className="payment-section">
                    <div className="section-header">
                        <h2>Credit & Debit Cards</h2>
                        <button className="add-icon-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="card-item active">
                        <CardIcon type="visa" />
                        <div className="card-info">
                            <div className="card-name-row">
                                <span className="card-title">Visa ending in 4582</span>
                                <span className="default-badge">DEFAULT</span>
                            </div>
                            <span className="card-expiry">Expires 12/26</span>
                        </div>
                        <svg className="chevron-right" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9e9e9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    <div className="card-item">
                        <CardIcon type="mastercard" />
                        <div className="card-info">
                            <span className="card-title">Mastercard ending in 7834</span>
                            <span className="card-expiry">Expires 09/27</span>
                        </div>
                        <svg className="chevron-right" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9e9e9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    <div className="card-item">
                        <CardIcon type="amex" />
                        <div className="card-info">
                            <span className="card-title">Amex ending in 1005</span>
                            <span className="card-expiry">Expires 03/25</span>
                        </div>
                        <svg className="chevron-right" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9e9e9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    <button className="add-new-card-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span>Add New Card</span>
                    </button>
                </section>

                {/* Digital Wallets */}
                <section className="payment-section">
                    <h2>Digital Wallets</h2>
                    
                    <div className="payment-item">
                        <div className="item-icon-box black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M17.05 20.28c-.96.78-2.1 1.24-3.35 1.24-2.82 0-5.11-2.29-5.11-5.11 0-2.82 2.29-5.11 5.11-5.11 1.25 0 2.39.46 3.35 1.24l.11.11V9.45c0-1.1-.9-2-2-2H8.94c-1.1 0-2 .9-2 2v10.11c0 1.1.9 2 2 2h6.11c1.1 0 2-.9 2-2v-3.17l-.11.11z" />
                                <path d="M12 2c-.55 0-1 .45-1 1v2.18c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z" />
                            </svg>
                        </div>
                        <div className="item-info">
                            <span className="item-title">Apple Pay</span>
                            <span className="item-subtitle">Visa •••• 4582</span>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={applePayEnabled} onChange={() => setApplePayEnabled(!applePayEnabled)} />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <div className="payment-item">
                        <div className="item-icon-box white border">
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                                <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                                <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/>
                                <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
                            </svg>
                        </div>
                        <div className="item-info">
                            <span className="item-title">Google Pay</span>
                            <span className="item-subtitle">Not connected</span>
                        </div>
                        <button className="connect-item-btn">Connect</button>
                    </div>
                </section>

                {/* Other Options */}
                <section className="payment-section">
                    <h2>Other Options</h2>

                    <div className="payment-item">
                        <div className="item-icon-box dark-blue">
                            <span className="initial-icon">P</span>
                        </div>
                        <div className="item-info">
                            <span className="item-title">PayPal</span>
                            <span className="item-subtitle">sarah.j@email.com</span>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={paypalEnabled} onChange={() => setPaypalEnabled(!paypalEnabled)} />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <div className="add-bank-box">
                        <div className="bank-icon-box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </div>
                        <span className="bank-text">Add Bank Account</span>
                        <button className="add-bank-btn">Add</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Payment;