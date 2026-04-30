import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Points.css';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Points = () => {
    const navigate = useNavigate();
    const [rewards, setRewards] = useState([]);
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Icons
    const BackIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const InfoIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
    const CoffeeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>;
    const BoltIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
    const StarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
    const LockIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
    const CheckIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch points balance from existing source
                const { data: pointsData } = await supabase.from('Points-app').select('*').limit(1).single();
                if (pointsData) setPageData(pointsData);

                // Fetch rewards from new table
                const { data: rewardsData, error } = await supabase
                    .from('REWARDS_POINTS')
                    .select('*')
                    .order('id', { ascending: true });

                if (error) throw error;
                if (rewardsData) setRewards(rewardsData);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const d = pageData || { total_points: '2,450' };

    const getRewardIcon = (name) => {
        if (name.includes('Coffee')) return <CoffeeIcon />;
        if (name.includes('Charging') || name.includes('Discount')) return <BoltIcon />;
        if (name.includes('Priority')) return <StarIcon />;
        return <StarIcon />;
    };

    return (
        <div className="container21">
            <header className="points-header21">
                <div className="points-top-nav21">
                    <button className="back-btn21" onClick={() => navigate(-1)}><BackIcon /></button>
                    <h1>Reward Points</h1>
                    <button className="info-btn21"><InfoIcon /></button>
                </div>
                
                <span className="balance-label21">Your Balance</span>
                <span className="balance-value21">{d.total_points}</span>
                <span className="balance-unit21">points</span>

                <div className="membership-box21">
                    <div className="membership-labels21">
                        <span>Silver Member</span>
                        <span>550 pts to Gold</span>
                    </div>
                    <div className="progress-bar-bg21">
                        <div className="progress-bar-fill21" style={{ width: '70%' }}></div>
                    </div>
                </div>
            </header>

            <div className="stats-row21">
                <div className="stat-card21">
                    <span className="stat-value21 green">+340</span>
                    <span className="stat-label21">This Month</span>
                </div>
                <div className="stat-card21">
                    <span className="stat-value21">6</span>
                    <span className="stat-label21">Rewards Used</span>
                </div>
            </div>

            <h2 className="section-title21">Available Rewards</h2>
            <div className="rewards-list21">
                {rewards.length > 0 ? rewards.map((item) => (
                    <div className="reward-card21" key={item.id}>
                        <div className="reward-icon-box21">{getRewardIcon(item.Reward)}</div>
                        <div className="reward-info21">
                            <span className="reward-name21">{item.Reward}</span>
                            <span className="reward-desc21">{item.Description}</span>
                            <div className="reward-points21">
                                <StarIcon /> {item.Points}
                            </div>
                        </div>
                        <button className="redeem-btn21" onClick={() => navigate('/Coffee')}>Redeem</button>
                    </div>
                )) : (
                    <>
                        <div className="reward-card21">
                            <div className="reward-icon-box21"><CoffeeIcon /></div>
                            <div className="reward-info21">
                                <span className="reward-name21">Free Coffee</span>
                                <span className="reward-desc21">Redeem at any partner café</span>
                                <div className="reward-points21">
                                    <StarIcon /> 500 pts
                                </div>
                            </div>
                            <button className="redeem-btn21" onClick={() => navigate('/Coffee')}>Redeem</button>
                        </div>
                        
                        <div className="reward-card21">
                            <div className="reward-icon-box21"><BoltIcon /></div>
                            <div className="reward-info21">
                                <span className="reward-name21">10% Off Charging</span>
                                <span className="reward-desc21">Valid for next session</span>
                                <div className="reward-points21">
                                    <StarIcon /> 800 pts
                                </div>
                            </div>
                            <button className="redeem-btn21" onClick={() => navigate('/Coffee')}>Redeem</button>
                        </div>
                    </>
                )}
            </div>

            <h2 className="section-title21">Recent Activity</h2>
            <div className="activity-list21">
                <div className="activity-item21">
                    <div className="activity-icon-box21 green"><CheckIcon /></div>
                    <div className="activity-content21">
                        <span className="activity-title21">Charging session</span>
                        <span className="activity-time21">Today, 2:30 PM</span>
                    </div>
                    <span className="activity-points21 plus">+120</span>
                </div>

                <div className="activity-item21">
                    <div className="activity-icon-box21 orange"><StarIcon /></div>
                    <div className="activity-content21">
                        <span className="activity-title21">Redeemed: Free coffee</span>
                        <span className="activity-time21">Yesterday</span>
                    </div>
                    <span className="activity-points21 minus">-500</span>
                </div>
            </div>

            <Nav />
        </div>
    );
}

export default Points;