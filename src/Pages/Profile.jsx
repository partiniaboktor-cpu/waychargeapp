import React, { Component } from 'react';
import Upper from '../Components/Upper';
import './Profile.css'

const Profile = () => {
    return ( <>
    
    <Upper />
    <div className="container24">
      <div className="profileCard24">
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
          className="profileImage24"
        />
        <h2 className="name24">Partinia Boktor</h2>
        <p className="username24">@Partiniaboktor</p>
        <button className="editBtn24">Edit profile</button>
      </div>

      <div className="card24">
        <div className="row24">
          <span>🚗 My vehicle</span>
        </div>
        <div className="row24 spaceBetween24">
          <span>🌐 Language</span>
          <span>English</span>
        </div>
      </div>

      <div className="card24">
        <div className="row24">
          <span>🔒 Change passwords</span>
        </div>
        <div className="row24">
          <span>📄 My Bookings</span>
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
        <span className="deleteText24">🗑 Delete account</span>
      </div>
    </div>
    
    </> );
}
 
export default Profile;