import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Upper from '../Components/Upper';
import './Scan.css'
import { supabase } from '../Supabase';

const PRELOADER_MS = 1800;

const Scan = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [pageData, setPageData] = useState(null);
    const timerRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('Scan-app').select('*');
            if (!error && data) {
                const row1 = data.find(d => d.id === 1);
                const row2 = data.find(d => d.id === 2);
                setPageData({
                    promptName: row1?.name || 'Scan a QR code',
                    statusTitle: row1?.title || 'Unrecognized QR code',
                    instructionDesc: row1?.description || 'Scan the charging infront of you to connect the charger for charging',
                    btnScan: row1?.Button || 'Scan',
                    btnMyCode: row2?.Button || 'My code'
                });
            }
        }
        fetchData();

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

    const displayData = pageData || {
        promptName: 'Scan a QR code',
        statusTitle: 'Unrecognized QR code',
        instructionDesc: 'Scan the charging infront of you to connect the charger for charging',
        btnScan: 'Scan',
        btnMyCode: 'My code'
    };

    return ( <>
    
    <Upper />
    <div className="page-container6">
      {/* Scanner Frame Section */}
      <div className="scanner-wrapper6">
        <div className="scan-box6">

          
          <div className="dashed-border6"></div>
          
          <h2 className="scan-prompt6">{displayData.promptName}</h2>
        </div>
      </div>

      {/* Text Content */}
      <div className="info-section6">
        <h3 className="status-text6">{displayData.statusTitle}</h3>
        <p className="instruction-text6">
          {displayData.instructionDesc}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="button-row6">
        <button type="button" className="btn-secondary6" onClick={handleScan}>{displayData.btnScan}</button>
        <button type="button" className="btn-primary6">{displayData.btnMyCode}</button>
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
