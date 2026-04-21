import React, { useEffect, useState } from 'react';
import Upper from '../Components/Upper';
import './Profile.css'
import bigimg from '../Assets/bigimg.png'
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Profile = () => {
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
                
                // Assuming the first row contains the main profile info
                // and other rows might contain different options/actions
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

    // Row 1 usually has the main profile info based on the provided SQL
    const mainProfile = profile ? profile[0] : {};
    const deleteOption = profile ? profile.find(p => p.action === 'Delete') : null;

    return ( <>
    
    <Upper />
    <div className="container24">
      <div className="profileCard24">
        <img
          src={mainProfile.profile_image ? `https://atrjjiiedhupiikonrfr.supabase.co/storage/v1/object/public/images/${mainProfile.profile_image}` : bigimg}
          alt="profile"
          className="profileImage24"
          onError={(e) => { e.target.src = bigimg; }}
        />
        <h2 className="name24">{mainProfile.username_handle ? mainProfile.username_handle.replace('@', '') : "User"}</h2>
        <p className="username24">{mainProfile.username_handle || "@username"}</p>
        <button className="editBtn24">{mainProfile.action || "Edit profile"}</button>
      </div>

      <div className="card24">
        <div className="row24">
          <span>🚗 My {mainProfile.vehicle || "vehicle"}</span>
        </div>
        <div className="row24 spaceBetween24">
          <span>🌐 Language</span>
          <span>{mainProfile.language || "English"}</span>
        </div>
      </div>

      <div className="card24">
        <div className="row24">
          <span>🔒 Change passwords</span>
        </div>
        <div className="row24">
          <span>📄 {mainProfile.option_name || "My Bookings"}</span>
        </div>
      </div>

      <div className="card24">
        <div className="row24">
          <span>❓ FAQS</span>
        </div>
        <div className="row24">
          <span>🛡 Privacy policy</span>
        </div>
      </div>

      <div className="card24 deleteCard24">
        <span className="deleteText24">🗑 {deleteOption ? deleteOption.action + " account" : "Delete account"}</span>
      </div>
      <Nav />
    </div>
    
    </> );
}
 
export default Profile;