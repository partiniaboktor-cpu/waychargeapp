import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Charging.css';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Charging = () => {
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('charging_session_app')
                    .select('*')
                    .eq('id', 1)
                    .single();

                if (error) throw error;
                if (data) setPageData(data);
            } catch (err) {
                console.error('Error fetching session:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const d = pageData || {
        battery_percent: '68',
        time_elapsed: '27 minutes',
        charging_rate: '150'
    };

    // Icons
    const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const InfoIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
    const BatteryIconLarge = () => <svg width="80" height="40" viewBox="0 0 24 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="1" width="18" height="10" rx="2" /><path d="M22 4v4" /><rect x="3" y="3" width="12" height="6" fill="white" opacity="0.8" /></svg>;
    const PinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
    const StarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
    const StopIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>;
    const BranchIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>;

    if (loading) {
        return (
            <div className="status-container13" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return (
        <div className="status-container13">
            <header className="charging-header13">
                <div className="charging-top-nav13">
                    <button className="back-btn13" onClick={() => navigate(-1)}><BackIcon /></button>
                    <h1>Charging in Progress</h1>
                    <button className="info-btn13"><InfoIcon /></button>
                </div>

                <div className="battery-icon-large13">
                    <BatteryIconLarge />
                </div>
                
                <h2 className="battery-percent13">{d.battery_percent}%</h2>
                <span className="battery-label13">Current Battery Level</span>

                <div className="header-stats13">
                    <div className="glass-card13">
                        <span className="glass-label13">Time Remaining</span>
                        <span className="glass-value13">18 min</span>
                    </div>
                    <div className="glass-card13">
                        <span className="glass-label13">Est. Range</span>
                        <span className="glass-value13">244 mi</span>
                    </div>
                </div>
            </header>

            <div className="charging-content13">
                <div className="content-card13">
                    <div className="station-row13">
                        <div className="pin-icon-box13"><PinIcon /></div>
                        <div className="station-info13">
                            <h3>Station A - Downtown</h3>
                            <p>Charger #4 • DC Fast Charging</p>
                        </div>
                    </div>
                    <div className="detail-row13">
                        <span className="detail-label13">Charging power</span>
                        <span className="detail-value13">150 kW</span>
                    </div>
                    <div className="detail-row13">
                        <span className="detail-label13">Energy added</span>
                        <span className="detail-value13">34.8 kWh</span>
                    </div>
                    <div className="detail-row13">
                        <span className="detail-label13">Session duration</span>
                        <span className="detail-value13">{d.time_elapsed}</span>
                    </div>
                </div>

                <div className="content-card13">
                    <span className="cost-title13">Cost Breakdown</span>
                    <div className="detail-row13">
                        <span className="detail-label13">Energy cost</span>
                        <span className="detail-value13">$15.66</span>
                    </div>
                    <div className="detail-row13">
                        <span className="detail-label13">Session fee</span>
                        <span className="detail-value13">$2.00</span>
                    </div>
                    <div className="total-row13">
                        <span>Current total</span>
                        <span className="total-value13">$17.66</span>
                    </div>
                </div>

                <div className="content-card13">
                    <div className="progress-header13">
                        <span className="target-text13">Target: 80%</span>
                        <span className="complete-text13">{d.battery_percent}% complete</span>
                    </div>
                    <div className="progress-bar-bg13">
                        <div className="progress-bar-fill13" style={{ width: `${d.battery_percent}%` }}></div>
                    </div>
                </div>

                <div className="rewards-box13">
                    <div className="star-icon13"><StarIcon /></div>
                    <div className="rewards-content13">
                        <span className="rewards-title13">Earning 120 reward points</span>
                        <p className="rewards-text13">Free coffee available at Green Bean Café nearby</p>
                    </div>
                </div>

                <div className="footer-nav13">
                    <div className="nav-item13">
                        <PinIcon />
                        <span>Nearby</span>
                    </div>
                    <div className="nav-item13">
                        <BranchIcon />
                        <span>Activities</span>
                    </div>
                </div>

                <button className="stop-btn13" onClick={() => navigate('/Stopcharging')}>
                    <StopIcon />
                    Stop Charging
                </button>
            </div>

            <Nav />
        </div>
    );
}

export default Charging;
