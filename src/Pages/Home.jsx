import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Nav from '../Components/Nav';

const Home = () => {
    const navigate = useNavigate();

    // Icons
    const ClockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
    const BellIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
    const ChargeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
    const StationIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
    const BookIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>;
    const RewardIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;

    return (
        <div className="home-page-container">
            {/* Header Section */}
            <div className="home-top-header">
                <div className="user-welcome-row">
                    <div className="welcome-text">
                        <p>Welcome Back ,</p>
                        <h1>Ramez</h1>
                    </div>
                    <div className="header-actions">
                        <button className="icon-badge-btn"><ClockIcon /></button>
                        <button className="icon-badge-btn has-notification" onClick={() => navigate('/Notifications')}><BellIcon /></button>
                    </div>
                </div>

                <div className="stats-glass-row">
                    <div className="stat-glass-card">
                        <span className="glass-val">78%</span>
                        <span className="glass-label">Battery</span>
                    </div>
                    <div className="stat-glass-card">
                        <span className="glass-val">340</span>
                        <span className="glass-label">km Range</span>
                    </div>
                    <div className="stat-glass-card">
                        <span className="glass-val">1.2k</span>
                        <span className="glass-label">Points</span>
                    </div>
                    <div className="stat-glass-card">
                        <span className="glass-val">$89</span>
                        <span className="glass-label">Saved</span>
                    </div>
                </div>
            </div>

            {/* Vehicle Card (Floating) */}
            <div className="floating-vehicle-card" onClick={() => navigate('/Addcar')}>
                <div className="vehicle-info-top">
                    <div className="vehicle-icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="13" rx="2" ry="2"></rect>
                            <path d="M17 21h.01"></path>
                            <path d="M7 21h.01"></path>
                            <path d="M19 7V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                        </svg>
                    </div>
                    <div className="vehicle-name-text">
                        <p className="subtitle">Current Vehicle</p>
                        <h3>Tesla Model 3</h3>
                    </div>
                    <button className="change-btn">Change</button>
                </div>
                <div className="vehicle-battery-progress">
                    <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: '78%' }}></div>
                    </div>
                    <div className="progress-labels">
                        <span>Battery: 78%</span>
                        <span>340 km range</span>
                    </div>
                </div>
            </div>

            <div className="home-scroll-content">
                {/* Quick Actions */}
                <div className="quick-actions-section">
                    <h4>Quick Actions</h4>
                    <div className="actions-grid">
                        <div className="action-item" onClick={() => navigate('/Scan')}>
                            <div className="action-icon-circle active"><ChargeIcon /></div>
                            <span>Charge</span>
                        </div>
                        <div className="action-item" onClick={() => navigate('/Location')}>
                            <div className="action-icon-circle"><StationIcon /></div>
                            <span>Stations</span>
                        </div>
                        <div className="action-item" onClick={() => navigate('/Bookings')}>
                            <div className="action-icon-circle"><BookIcon /></div>
                            <span>Book</span>
                        </div>
                        <div className="action-item" onClick={() => navigate('/Points')}>
                            <div className="action-icon-circle"><RewardIcon /></div>
                            <span>Rewards</span>
                        </div>
                    </div>
                </div>

                {/* Nearby Stations */}
                <div className="section-block">
                    <div className="section-header-row">
                        <h4>Nearby Stations</h4>
                        <button className="text-link-btn" onClick={() => navigate('/Location')}>View all</button>
                    </div>
                    <div className="station-card-compact" onClick={() => navigate('/Location')}>
                        <div className="compact-icon green"><circle /></div>
                        <div className="compact-info">
                            <h5>Downtown Hub</h5>
                            <p>0.8 km • 8/12 available</p>
                        </div>
                        <div className="compact-status">
                            <span className="status-text available">Available</span>
                            <span className="power-text">150kW</span>
                        </div>
                    </div>
                    <div className="station-card-compact">
                        <div className="compact-icon orange"><circle /></div>
                        <div className="compact-info">
                            <h5>Mall Chargers</h5>
                            <p>1.2 km • 2/8 available</p>
                        </div>
                        <div className="compact-status">
                            <span className="status-text busy">Busy</span>
                            <span className="power-text">100kW</span>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="section-block">
                    <div className="section-header-row">
                        <h4>Recent Activity</h4>
                        <button className="text-link-btn">See all</button>
                    </div>
                    <div className="activity-card">
                        <div className="activity-icon-box"><ChargeIcon /></div>
                        <div className="activity-info">
                            <h5>Charging Complete</h5>
                            <p>Downtown • 42.5 kWh</p>
                        </div>
                        <div className="activity-value">
                            <span className="price">$24.50</span>
                            <span className="time">2h ago</span>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="activity-icon-box light-green"><RewardIcon /></div>
                        <div className="activity-info">
                            <h5>Points Earned</h5>
                            <p>Fast charging mission</p>
                        </div>
                        <div className="activity-value">
                            <span className="points-plus">+120</span>
                            <span className="time">1d ago</span>
                        </div>
                    </div>
                </div>

                {/* Upcoming Bookings */}
                <div className="section-block">
                    <div className="section-header-row">
                        <h4>Upcoming Bookings</h4>
                        <button className="text-link-btn" onClick={() => navigate('/Bookings')}>Manage</button>
                    </div>
                    <div className="booking-summary-card">
                        <div className="booking-top">
                            <div className="booking-title-info">
                                <h5>Green Volt Hub</h5>
                                <p>Cairo, Egypt</p>
                            </div>
                            <span className="confirmed-badge">Confirmed</span>
                        </div>
                        <div className="booking-time-row">
                            <div className="time-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <span>Nov 16, 2023</span>
                            </div>
                            <div className="time-item">
                                <ClockIcon />
                                <span>09:00 AM</span>
                            </div>
                        </div>
                        <div className="booking-footer-row">
                            <div className="booking-stats">
                                <div className="stat-mini"><p>Energy</p><span>420 kWh</span></div>
                                <div className="stat-mini"><p>Cost</p><span>120 LE</span></div>
                            </div>
                            <button className="details-link">View Details</button>
                        </div>
                    </div>
                </div>

                {/* Payment */}
                <div className="section-block">
                    <div className="section-header-row">
                        <h4>Payment</h4>
                        <button className="text-link-btn" onClick={() => navigate('/Payment')}>Manage</button>
                    </div>
                    <div className="mini-card-preview" onClick={() => navigate('/Payment')}>
                        <div className="card-pattern"></div>
                        <div className="card-top">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.8"><circle cx="7" cy="12" r="5"></circle><circle cx="12" cy="12" r="5" fill="white" opacity="0.6"></circle></svg>
                            <span className="card-label">Default Card</span>
                        </div>
                        <div className="card-number-mini">•••• •••• •••• 4582</div>
                        <div className="card-holder-row">
                            <div className="holder-group"><p>CARD HOLDER</p><span>Ramez Raouf</span></div>
                            <div className="holder-group"><p>EXPIRES</p><span>12/25</span></div>
                        </div>
                    </div>
                </div>

                {/* This Month Stats */}
                <div className="section-block">
                    <h4>This Month</h4>
                    <div className="month-stats-grid">
                        <div className="month-stat-item"><p>Sessions</p><h3>18</h3></div>
                        <div className="month-stat-item"><p>Energy</p><h3>246<span>kW</span></h3></div>
                        <div className="month-stat-item"><p>Spent</p><h3>$189</h3></div>
                    </div>
                </div>

                {/* Rewards Card */}
                <div className="rewards-card-home" onClick={() => navigate('/Points')}>
                    <div className="reward-top">
                        <div className="star-circle"><RewardIcon /></div>
                        <div className="reward-info">
                            <h5>1,240 Points</h5>
                            <p>Gold Tier</p>
                        </div>
                        <button className="redeem-btn">Redeem</button>
                    </div>
                    <div className="reward-progress">
                        <div className="progress-bg"><div className="progress-fill-reward" style={{ width: '60%' }}></div></div>
                        <p>760 points to Platinum tier</p>
                    </div>
                </div>

                {/* Monthly Summary (Light Green) */}
                <div className="monthly-summary-card">
                    <div className="summary-header">
                        <h5>This Month</h5>
                        <button className="details-text-btn">Details</button>
                    </div>
                    <div className="summary-grid">
                        <div className="sum-item"><p>Sessions</p><h4>18</h4></div>
                        <div className="sum-item"><p>Energy</p><h4>246<span>kWh</span></h4></div>
                        <div className="sum-item"><p>Savings</p><h4 className="green-val">$89</h4></div>
                    </div>
                </div>

                {/* Action Button */}
                <button className="start-charging-btn" onClick={() => navigate('/Scan')}>
                    <ChargeIcon />
                    Start Charging Session
                </button>
            </div>

            <Nav />
        </div>
    );
};

export default Home;