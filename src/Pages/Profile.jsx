import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import bigimg from '../Assets/bigimg.png';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Profile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data, error } = await supabase
                    .from('profile-app')
                    .select('*')
                    .order('id', { ascending: true });

                if (error) throw error;
                if (data && data.length > 0) {
                    setProfile(data);
                }
            } catch (error) {
                console.error('Error fetching profile:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="container24" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="loader">Loading...</div>
            </div>
        );
    }

    const mainProfile = profile ? profile[0] : {};

    // Icons
    const GearIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
    const PersonIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
    const CardIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
    const ClockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
    const InfoIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
    const ChevronIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;

    return (
        <div className="container24">
            <header className="header24">
                <button className="backBtn24" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <h1>Profile</h1>
                <button className="moreBtn24">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></svg>
                </button>
            </header>

            <div className="profileCard24">
                <div className="imageContainer24">
                    {mainProfile.profile_image ? (
                        <img
                            src={`https://atrjjiiedhupiikonrfr.supabase.co/storage/v1/object/public/images/${mainProfile.profile_image}`}
                            alt="profile"
                            className="profileImage24"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    ) : (
                        <div className="placeholderAvatar24">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                    )}
                    <div className="editIcon24">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                    </div>
                </div>
                <h2 className="name24">{mainProfile.username_handle ? mainProfile.username_handle.replace('@', '').replace(/[._]/g, ' ') : "Partinia Boktor"}</h2>
                <p className="username24">{mainProfile.username_handle ? (mainProfile.username_handle.includes('@') ? mainProfile.username_handle : `@${mainProfile.username_handle}`) : "PartiniaBoktor@gmail.com"}</p>
            </div>


            <div className="statsRow24">
                <div className="statCard24">
                    <span className="statValue24">24</span>
                    <span className="statLabel24">Sessions</span>
                </div>
                <div className="statCard24">
                    <span className="statValue24 green">486</span>
                    <span className="statLabel24">kWh Used</span>
                </div>
                <div className="statCard24">
                    <span className="statValue24">12h</span>
                    <span className="statLabel24">Total Time</span>
                </div>
            </div>

            <div className="menuList24">
                <button className="menuItem24">
                    <div className="menuIcon24"><GearIcon /></div>
                    <div className="menuContent24">
                        <span className="menuTitle24">Account Settings</span>
                        <span className="menuSub24">Personal information</span>
                    </div>
                    <ChevronIcon />
                </button>

                <button className="menuItem24">
                    <div className="menuIcon24"><PersonIcon /></div>
                    <div className="menuContent24">
                        <span className="menuTitle24">Vehicle Profile</span>
                        <span className="menuSub24">{mainProfile.vehicle || "Tesla Model 3"}</span>
                    </div>
                    <ChevronIcon />
                </button>

                <button className="menuItem24" onClick={() => navigate('/Payment')}>
                    <div className="menuIcon24"><CardIcon /></div>
                    <div className="menuContent24">
                        <span className="menuTitle24">Payment Methods</span>
                        <span className="menuSub24">Manage cards & billing</span>
                    </div>
                    <ChevronIcon />
                </button>

                <button className="menuItem24" onClick={() => navigate('/PaymentHistory')}>
                    <div className="menuIcon24"><ClockIcon /></div>
                    <div className="menuContent24">
                        <span className="menuTitle24">Charging History</span>
                        <span className="menuSub24">View past sessions</span>
                    </div>
                    <ChevronIcon />
                </button>

                <button className="menuItem24">
                    <div className="menuIcon24"><InfoIcon /></div>
                    <div className="menuContent24">
                        <span className="menuTitle24">Help & Support</span>
                        <span className="menuSub24">Contact us</span>
                    </div>
                    <ChevronIcon />
                </button>
            </div>

            <button className="signOutBtn24" onClick={() => navigate('/Login')}>
                Sign Out
            </button>

            <Nav />
        </div>
    );
}

export default Profile;