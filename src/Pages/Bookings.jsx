import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Bookings.css';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Bookings = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState('Upcoming');
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('BOOKINGS_REQUESTS')
                    .select('*')
                    .order('id', { ascending: true });
                
                if (error) throw error;
                if (data) setBookings(data);
            } catch (err) {
                console.error('Error fetching bookings:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Icons
    const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const CalendarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
    const BoltIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
    const PinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
    const ClockIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

    // Filter logic
    const displayedItems = bookings.filter(item => {
        if (tab === 'Upcoming') {
            return item.Status === 'Pending' || item.Status === 'Upcoming' || item.Status === 'Active';
        } else {
            return item.Status === 'Completed' || item.Status === 'Cancelled';
        }
    });

    // If no data, use some fallback data that matches the design image
    const finalItems = displayedItems.length > 0 ? displayedItems : (tab === 'Upcoming' ? [
        { id: 'mock1', Type: 'Booking', Status: 'Active', Station: 'Station A - Downtown', Charger: 'Charger #4 • DC Fast', Date: 'Today, Apr 30', Time: '2:00 - 3:00 PM', Progress: '18 min remaining' },
        { id: 'mock2', Type: 'Booking', Status: 'Upcoming', Station: 'Station B - Eastside', Charger: 'Charger #2 • Level 2', Date: 'May 1, 2026', Time: '9:00 - 11:00 AM', Cost: '~$18.50' },
        { id: 'mock3', Type: 'Booking', Status: 'Upcoming', Station: 'Station C - Westgate', Charger: 'Charger #1 • DC Fast', Date: 'May 6, 2026', Time: '3:30 - 4:30 PM', Cost: '~$24.00' },
        { id: 'mock4', Type: 'Booking', Status: 'Upcoming', Station: 'Station A - Downtown', Charger: 'Charger #4 • DC Fast', Repeats: 'Every Monday', Time: '8:00 - 9:00 AM', IsWeekly: true, Next: 'May 5, 2026' }
    ] : [
        { id: 'mock5', Type: 'Booking', Status: 'Completed', Station: 'Station A - Downtown', Charger: 'Charger #4 • DC Fast', Date: 'Apr 28, 2026', Time: '1:00 - 2:00 PM', Cost: '$15.00' }
    ]);

    return (
        <div className="container27">
            <header className="header-b27">
                <button className="icon-btn27" onClick={() => navigate('/Home')}><BackIcon /></button>
                <h1>My Bookings</h1>
                <button className="icon-btn27"><CalendarIcon /></button>
            </header>

            <div className="tabs-b27">
                <button 
                    className={`tab-btn27 ${tab === 'Upcoming' ? 'active' : ''}`}
                    onClick={() => setTab('Upcoming')}
                >
                    Upcoming
                </button>
                <button 
                    className={`tab-btn27 ${tab === 'Past' ? 'active' : ''}`}
                    onClick={() => setTab('Past')}
                >
                    Past
                </button>
            </div>

            <div className="bookings-list27">
                {finalItems.map((item) => {
                    const isActive = item.Status === 'Active';
                    const isWeekly = item.IsWeekly;

                    return (
                        <div key={item.id} className={`card-b27 ${isActive ? 'active-card-b27' : ''}`}>
                            {isActive && <div className="active-header-b27">Active Now</div>}
                            
                            <div className="card-content27">
                                <div className="station-info27">
                                    <div className={`station-icon27 ${isActive ? '' : 'grey'}`}>
                                        {isActive ? <BoltIcon /> : <PinIcon />}
                                    </div>
                                    <div className="station-details27">
                                        <h3>
                                            {item.Station || item.Description}
                                            {isWeekly && <span className="weekly-badge27">WEEKLY</span>}
                                        </h3>
                                        <p>{item.Charger || `${item.Type} session`}</p>
                                    </div>
                                    {isActive && <div className="live-indicator27"></div>}
                                </div>

                                <div className="info-grid27">
                                    <div className="info-box27">
                                        <span className="info-label27">{isWeekly ? 'Repeats' : 'Date'}</span>
                                        <span className="info-val27">{item.Date || item.Repeats || 'May 1, 2026'}</span>
                                    </div>
                                    <div className="info-box27">
                                        <span className="info-label27">Time</span>
                                        <span className="info-val27">{item.Time || '9:00 - 11:00 AM'}</span>
                                    </div>
                                </div>

                                {isActive && (
                                    <div className="status-bar27">
                                        <ClockIcon />
                                        In progress • {item.Progress}
                                    </div>
                                )}

                                {item.Cost && (
                                    <div className="cost-row27">
                                        <span className="cost-label27">Estimated cost</span>
                                        <span className="cost-val27">{item.Cost}</span>
                                    </div>
                                )}

                                {isWeekly && (
                                    <div className="next-session-bar27">
                                        <ClockIcon />
                                        Next session: {item.Next}
                                    </div>
                                )}

                                <div className="card-actions27">
                                    {isActive ? (
                                        <>
                                            <button className="btn-outline27">Details</button>
                                            <button className="btn-solid27">View Session</button>
                                        </>
                                    ) : isWeekly ? (
                                        <>
                                            <button className="btn-red-outline27">Remove</button>
                                            <button className="btn-solid27">Manage</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn-red-outline27" style={{borderColor: item.Status === 'Completed' ? '#e0e0e0' : '', color: item.Status === 'Completed' ? '#333' : ''}}>
                                                {item.Status === 'Completed' ? 'Receipt' : 'Cancel'}
                                            </button>
                                            <button className="btn-solid27">
                                                {item.Status === 'Completed' ? 'Book Again' : 'Modify'}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Nav />
        </div>
    );
};

export default Bookings;