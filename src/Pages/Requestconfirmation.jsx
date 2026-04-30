import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Requestconfirmation.css';
import Nav from '../Components/Nav';

const Requestconfirmation = () => {
    const navigate = useNavigate();

    // Icons
    const SuccessIcon = () => (
        <div className="success-icon-wrapper25">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </div>
    );

    const MapIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>;
    const BoltIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;

    return (
        <div className="container25">
            <div className="confirmation-content25">
                <SuccessIcon />
                <h1 className="message25">Request Sent!</h1>
                <p className="description25">
                    Your charging request has been sent to Station A - Downtown.
                </p>

                <div className="summary-card25">
                    <div className="summary-row25">
                        <span className="summary-label25">Request Status</span>
                        <span className="summary-val25 green">Pending</span>
                    </div>
                    <div className="summary-divider25"></div>
                    <div className="summary-details25">
                        <div className="detail-item25">
                            <MapIcon />
                            <span>Station A - Downtown</span>
                        </div>
                        <div className="detail-item25">
                            <BoltIcon />
                            <span>Fast Charging • Target: 80%</span>
                        </div>
                    </div>
                </div>

                <div className="info-box25">
                    <span className="info-title25">What's Next?</span>
                    <p className="info-text25">We'll notify you as soon as the charger is ready for your vehicle.</p>
                </div>
            </div>

            <div className="actions25">
                <button className="primary-btn25" onClick={() => navigate('/Charging')}>
                    Track Progress
                </button>
                <button className="secondary-btn25" onClick={() => navigate('/Home')}>
                    Back to Home
                </button>
            </div>

            <Nav />
        </div>
    );
}

export default Requestconfirmation;