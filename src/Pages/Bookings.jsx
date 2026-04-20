import React, { useState, useEffect } from 'react';
import './Bookings.css'
import Uppernav from '../Components/Uppernav';
import book1 from '../Assets/book1.png'
import Nav from '../Components/Nav';
import { Link } from "react-router-dom";
import { supabase } from '../Supabase';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('Bookings-app').select('*').order('id', { ascending: true });
            if (!error && data) {
                setBookings(data);
            }
        }
        fetchData();
    }, []);

    const defaultBookings = [
        { id: 'b1', city: 'Cairo , Egypt', station_name: 'Green Volt hub', power_kwh: '420', price: '120', booking_time: '09:00 AM', booking_date: 'Nov 16, 2023', status: 'Upcoming', action_view: 'View', action_repeat: 'Book Again' },
        { id: 'b2', city: 'Cairo , Egypt', station_name: 'Green Volt hub', power_kwh: '420', price: '120', booking_time: '09:00 AM', booking_date: 'Nov 16, 2023', status: 'Completed', action_view: 'View', action_repeat: 'Book Again' },
        { id: 'b3', city: 'Cairo , Egypt', station_name: 'Green Volt hub', power_kwh: '420', price: '120', booking_time: '09:00 AM', booking_date: 'Nov 16, 2023', status: 'Cancelled', action_view: 'View', action_repeat: 'Book Again' }
    ];

    const displayBookings = bookings.length > 0 ? bookings : defaultBookings;

    return ( <>
    
    <Uppernav />
    
    <div className="container27">
      
    <Link to="/Home">
      <button className="back27">← Back</button>
    </Link>

      <h2 className="title27">MY BOOKINGS</h2>

      <div className="tabs27">
        <span className="active27">Upcoming</span>
        <span>Completed</span>
        <span>Cancelled</span>
      </div>

      {displayBookings.map((item) => (
        <div className="card27" key={item.id}>
          
          <div className="rowTop27">
            <img
              src={book1}
              alt=""
              className="bookingimage"
            />

            <div>
              <p className="gray27">{item.city || 'Cairo , Egypt'}</p>
              <h3>{item.station_name || 'Green Volt hub'}</h3>
              <div className="flex27">
                <span>{item.power_kwh || '420'} KWh</span>
                <span>{item.price || '120'} LE</span>
              </div>
            </div>
          </div>

          <div className="time27">
            <span>{item.booking_time || '09:00 AM'} {item.booking_date || 'Nov 16, 2023'}</span>
            <span className="cancel27">{item.status}</span>
          </div>

          <div className="btns27">
            <Link to="/bookcharger1">
              <button className="view27">{item.action_view || 'View'}</button>
            </Link>
            <button className="book27">{item.action_repeat || 'Book Again'}</button>
          </div>

        </div>
      ))}

      <Nav />
    </div>
    
    </> );
}
 
export default Bookings;