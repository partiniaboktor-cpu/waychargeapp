import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Upper from '../Components/Upper';
import './Scan.css'

const PRELOADER_MS = 1800;

const Scan = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const handleScan = () => {
        if (loading) return;
        setLoading(true);
        timerRef.current = window.setTimeout(() => {
            navigate('/Home');
        }, PRELOADER_MS);
    };

    return ( <>
    
    <Upper />
    <div className="page-container6">
      {/* Scanner Frame Section */}
      <div className="scanner-wrapper6">
        <div className="scan-box6">

          
          <div className="dashed-border6"></div>
          
          <h2 className="scan-prompt6">Scan a QR code</h2>
        </div>
      </div>

      {/* Text Content */}
      <div className="info-section6">
        <h3 className="status-text6">Unrecognized QR code</h3>
        <p className="instruction-text6">
          Scan the charging infront of you to connect the charger for charging
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="button-row6">
        <button type="button" className="btn-secondary6" onClick={handleScan}>Scan</button>
        <button type="button" className="btn-primary6">My code</button>
      </div>
    </div>

    {loading && (
      <div className="scan-preloader6" role="status" aria-live="polite" aria-busy="true">
        <div className="scan-preloader6__spinner" aria-hidden />
        <p className="scan-preloader6__text">Connecting…</p>
      </div>
    )}
    

    </> );
}
 
export default Scan;
