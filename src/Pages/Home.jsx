import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import car from '../Assets/car.png'
import Nav from '../Components/Nav';
import battery from '../Assets/battery.svg'
import time from '../Assets/time.svg'
import location from '../Assets/location.svg'
import map from '../Assets/map.png'
import charger1 from '../Assets/charger1.png'
import charger2 from '../Assets/charger2.png'
import booking from '../Assets/booking1.png'
import Uppernav from '../Components/Uppernav';

const THUMB = 55;
const TRACK_PAD = 5;

const Home = () => {
    const navigate = useNavigate();
    const trackRef = useRef(null);
    const maxXRef = useRef(0);
    const dragXRef = useRef(0);
    const pointerStartX = useRef(0);
    const dragStartOffset = useRef(0);
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const measure = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const w = el.clientWidth;
        maxXRef.current = Math.max(0, w - TRACK_PAD * 2 - THUMB);
        setDragX((x) => {
            const n = Math.min(x, maxXRef.current);
            dragXRef.current = n;
            return n;
        });
    }, []);

    useLayoutEffect(() => {
        measure();
        const el = trackRef.current;
        if (!el || typeof ResizeObserver === 'undefined') return undefined;
        const ro = new ResizeObserver(() => measure());
        ro.observe(el);
        return () => ro.disconnect();
    }, [measure]);

    const clamp = useCallback((x) => {
        const m = maxXRef.current;
        return Math.max(0, Math.min(x, m));
    }, []);

    const onPointerDown = (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        pointerStartX.current = e.clientX;
        dragStartOffset.current = dragXRef.current;
        setIsDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
        const delta = e.clientX - pointerStartX.current;
        const next = clamp(dragStartOffset.current + delta);
        dragXRef.current = next;
        setDragX(next);
    };

    const onPointerUp = (e) => {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
        e.currentTarget.releasePointerCapture(e.pointerId);
        setIsDragging(false);
        const x = dragXRef.current;
        const max = maxXRef.current;
        const threshold = max * 0.55;
        if (max > 0 && x >= threshold) {
            navigate('/Connectplug');
            return;
        }
        dragXRef.current = 0;
        setDragX(0);
    };

    const onPointerCancel = (e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
        setIsDragging(false);
        dragXRef.current = 0;
        setDragX(0);
    };

    return ( <>

   <Uppernav />
    <div className="main-container7">
      {/* Slide the bolt handle right to go to Charger */}
      <div
        ref={trackRef}
        className={`home-charge-track ${isDragging ? 'is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={
            dragX > 0 && maxXRef.current > 0
                ? Math.round((dragX / maxXRef.current) * 100)
                : 0
        }
        aria-label="Charge now, slide right to open charger"
      >
        <div className="home-charge-label-wrap">
          <span className="home-charge-label">Charge Now</span>
        </div>
        <span className="home-charge-hint" aria-hidden>
          →
        </span>
        <div
          className="home-charge-thumb-wrap"
          style={{ transform: `translateX(${dragX}px)` }}
        >
          <div className="home-charge-thumb">
            <span className="bolt" aria-hidden>
              ⚡
            </span>
          </div>
        </div>
      </div>

      {/* Promo Card */}
      <div className="promo-card7">
        <div className="promo-content7">
          <p className="brand-name7">MercedesBenz</p>
          <h2 className="promo-title7">EFFORTLESS PARKING & CHARG=GING</h2>
        </div>
        <img src={car} alt="Car" className="car-image7" />
      </div>

      {/* Stats Row */}
      <div className="stats-grid7">
        <div className="stat-box-dark7">
          <div className="stat-header7">
            <img className="icon-square7" src={battery} alt="battery" />
            
            <span className="stat-label7">Battery</span>
          </div>
          <div className="progress-bar-bg7">
            <div className="progress-fill7" style={{ width: '73%' }}>73%</div>
          </div>
          <p className="stat-footer7">Power saving mode</p>
        </div>

        <div className="stat-box-light7">
          <div className="stat-header7">
            <img className="icon-square-light7" src={time} alt="time" />
            <span className="stat-label-dark7">Remaining</span>
          </div>
          <div className="distance-row7">
            <span className="distance-val7">83Km</span>
            <span className="time-tag7">1h.34m</span>
          </div>
          <p className="stat-footer-dark7">Remaining distance & time</p>
        </div>
      </div>

      {/* Nearby Stations */}
      <div className="section-header7">
        <h3 className="section-title7">Nearby Charging stations</h3>
        <span className="view-all7">View all</span>
      </div>

      <div className="station-card7">
        <div className="station-info7">
          <img className="loc-icon7" src={location} alt="location-icon" />
          <div>
            <p className="station-name7">Nearest Station</p>
            <p className="station-desc7">Also city parking garage</p>
          </div>
        </div>
        <img className="map-thumb7" src={map} alt="map" />
      </div>

      <Nav />

<div className="container9">

      {/* MISSIONS */}
      <div className="section-header9">
        <h2>MISSIONS</h2>
        <span className="view-all9">View all</span>
      </div>

      <div className="missions9">
        <div className="mission-card9">
          <img src={charger1} alt="free charging" className="mission-img9" />
          <h4>Free charging</h4>
          <p className="points9">2600 points</p>
        </div>

        <div className="mission-card9">
          <img src={charger2} alt="fast charging" className="mission-img9" />
          <h4>Fast charging</h4>
          <p className="points9">1600 points</p>
        </div>
      </div>

      {/* BOOKINGS */}
      <div className="section-header9">
        <h2>BOOKINGS</h2>
        <span className="view-all9">View all</span>
      </div>

      <div className="booking-card9">
        <img src={booking} alt="booking" className="booking-img9" />

        <div className="booking-info9">
          <p className="location9">Cairo , Egypt</p>
          <h3>Green Volt hub</h3>

          <div className="booking-details9">
            <span>420 KWh</span>
            <span>120 LE</span>
          </div>
        </div>
      </div>

      <div className="booking-status9">
        <span>09:00 AM &nbsp; Nov 16, 2023</span>
        <button className="cancelled9">Cancelled</button>
      </div>

      <div className="actions9">
        <button className="view-btn9">View</button>
        <button className="book-btn9">Book Again</button>
      </div>

    </div>

    </div>

    
    
    
    </> );
}
 
export default Home;