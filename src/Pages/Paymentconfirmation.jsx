import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Paymentconfirmation.css';
import Nav from '../Components/Nav';

const Paymentconfirmation = () => {
    const navigate = useNavigate();

    // Icons
    const CheckIcon = () => (
        <div className="success-icon-wrapper25">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
    );

    const CalendarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
    const CardIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;

    return (
        <div className="container25">
            <div className="confirmation-content25">
                <CheckIcon />
                <h1 className="message25">Payment Confirmed!</h1>
                <p className="description25">
                    Your payment was successful. We've sent a receipt to your email address.
                </p>

                <div className="summary-card25">
                    <div className="summary-row25">
                        <span className="summary-label25">Amount Paid</span>
                        <span className="summary-val25 green">$17.66</span>
                    </div>
                    <div className="summary-divider25"></div>
                    <div className="summary-details25">
                        <div className="detail-item25">
                            <CalendarIcon />
                            <span>Apr 30, 2024</span>
                        </div>
                        <div className="detail-item25">
                            <CardIcon />
                            <span>Mastercard •••• 4582</span>
                        </div>
                    </div>
                </div>

                <div className="info-box25">
                    <span className="info-title25">Transaction ID</span>
                    <span className="info-val25">#WC-9845-2104</span>
                </div>
            </div>

            <div className="actions25">
                <button className="primary-btn25" onClick={() => navigate('/Home')}>
                    Back to Home
                </button>
                <button className="secondary-btn25" onClick={() => navigate('/PaymentHistory')}>
                    View History
                </button>
            </div>

            <Nav />
        </div>
    );
}

export default Paymentconfirmation;